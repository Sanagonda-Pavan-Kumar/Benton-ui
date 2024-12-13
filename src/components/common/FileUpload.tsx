interface FileUploadProps {
  id: string;
  label: string;
  accept?: string;
  onChange: (file: File) => void;
  className?: string;
}

export default function FileUpload({ id, label, accept, onChange, className }: FileUploadProps) {
  return (
    <div className={className}>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <input
        type="file"
        id={id}
        accept={accept}
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) {
            onChange(file);
          }
        }}
        className="mt-1 block w-full text-sm text-gray-500
          file:mr-4 file:py-2 file:px-4
          file:rounded-md file:border-0
          file:text-sm file:font-medium
          file:bg-indigo-50 file:text-indigo-700
          hover:file:bg-indigo-100"
      />
    </div>
  );
}