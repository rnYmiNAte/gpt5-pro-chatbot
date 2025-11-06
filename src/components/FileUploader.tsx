'use client';
import { useState } from 'react';
import { Upload } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface FileUploaderProps {
  onUpload: (file: File) => void;
}

export default function FileUploader({ onUpload }: FileUploaderProps) {
  const [fileName, setFileName] = useState('');

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setFileName(file.name);
    onUpload(file);
  };

  return (
    <div className="flex flex-col items-center justify-center border-2 border-dashed border-gray-400 dark:border-gray-600 rounded-2xl p-5 hover:border-blue-500 transition">
      <Upload className="w-8 h-8 text-gray-500 mb-2" />
      <label className="cursor-pointer text-sm text-blue-600 hover:underline">
        <input type="file" hidden onChange={handleFileChange} />
        {fileName ? `Selected: ${fileName}` : 'Click to upload a file'}
      </label>
    </div>
  );
}
