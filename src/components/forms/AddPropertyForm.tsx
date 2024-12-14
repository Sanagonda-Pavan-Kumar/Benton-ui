import React from 'react';
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "../ui/dialog";
import { Plus } from 'lucide-react';
import { usePropertyStore } from '../../store/propertyStore';
import { toast } from 'sonner';

interface FormData {
  propertyName: string;
  flats: number;
  location: string;
}

export const AddPropertyForm: React.FC = () => {
  const [formData, setFormData] = React.useState<FormData>({
    propertyName: '',
    flats: 1,
    location: ''
  });

  const addProperty = usePropertyStore(state => state.addProperty);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    addProperty({
      address: `${formData.propertyName}, ${formData.location}`,
      status: 'vacant',
      monthlyRent: 0,
      sqft: 0,
    });

    toast.success('Property added successfully');

    setFormData({
      propertyName: '',
      flats: 1,
      location: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: id === 'flats' ? parseInt(value) || 1 : value
    }));
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Add New Property</h1>
      <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded-lg shadow-lg">
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="propertyName">Property Name</Label>
            <Input
              id="propertyName"
              value={formData.propertyName}
              onChange={handleChange}
              placeholder="Enter property name"
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="flats">Number of Flats</Label>
            <Input
              id="flats"
              type="number"
              value={formData.flats}
              onChange={handleChange}
              placeholder="Enter number of flats"
              min="1"
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="location">Location</Label>
            <Input
              id="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="Enter property location"
              required
            />
          </div>
        </div>

        <Button type="submit" className="w-full">
          Add Property
        </Button>
      </form>
    </div>
  );
};