import React from 'react';
import { Plus } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../ui/dialog";
import { AddPropertyForm } from './AddPropertyForm';

interface AddPropertyDialogProps {
  className?: string;
}

export const AddPropertyDialog: React.FC<AddPropertyDialogProps> = ({ className }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className={`bg-card px-4 py-3 rounded-lg shadow-md cursor-pointer transform transition-all duration-300 hover:scale-105 ${className}`}>
          {/* <div   className={`bg-card inline-block rounded-[6.5px] text-[#3274ba] text-[18px] m-[10px_5px] outline-none p-[10px_20px] min-w-[100px] text-center no-underline transition-all duration-300 transform hover:scale-105 ${className}`}> */}
          <div className="flex items-center justify-between h-full">
            <div>
              <p className="text-white text-xl font-medium mb-1">Add</p>
              {/* <h3 className="text-white text-2xl font-bold">Property</h3> */}
            </div>
            <div className="text-white opacity-80">
              <Plus className='text-[#eb6e34]' size={20} />
            </div>
          </div>
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add New Property</DialogTitle>
        </DialogHeader>
        <AddPropertyForm />
      </DialogContent>
    </Dialog>
  );
};