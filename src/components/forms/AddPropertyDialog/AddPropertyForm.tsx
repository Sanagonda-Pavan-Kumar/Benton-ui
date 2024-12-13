import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '../../ui/button';
import { Input } from '../../ui/input';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../../ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../../ui/select';
import { usePropertyStore } from '../../../store/propertyStore';
import { toast } from 'sonner';
import { DialogClose } from '../../ui/dialog';

const formSchema = z.object({
  address: z.string().min(2, 'Property name must be at least 2 characters'),
  status: z.enum(['occupied', 'vacant']),
  monthlyRent: z.string().refine(
    (val) => !isNaN(Number(val)) && Number(val) > 0,
    'Monthly rent must be a positive number'
  ),
});

type FormValues = z.infer<typeof formSchema>;

export const AddPropertyForm: React.FC = () => {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      address: '',
      status: 'vacant',
      monthlyRent: '',
    },
  });

  const addProperty = usePropertyStore(state => state.addProperty);
  const dialogCloseRef = React.useRef<HTMLButtonElement>(null);

  const onSubmit = (data: FormValues) => {
    addProperty({
      address: data.address,
      status: data.status,
      monthlyRent: Number(data.monthlyRent),
    });

    toast.success('Property added successfully');
    dialogCloseRef.current?.click();
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="address"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Property Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter property name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="status"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Status</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select property status" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="vacant">Vacant</SelectItem>
                  <SelectItem value="occupied">Occupied</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="monthlyRent"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Monthly Rent</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  placeholder="Enter monthly rent"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex justify-end gap-3 pt-4">
          <DialogClose ref={dialogCloseRef} asChild>
            <Button type="button" variant="outline">Cancel</Button>
          </DialogClose>
          <Button type="submit">Add Property</Button>
        </div>
      </form>
    </Form>
  );
};