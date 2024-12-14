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
          <div className="flex items-center justify-between h-full">
            <div>
              <p className="text-white text-xs font-medium mb-1">Add New</p>
              <h3 className="text-white text-2xl font-bold">Property</h3>
            </div>
            <div className="text-white opacity-80">
              <Plus size={20} />
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