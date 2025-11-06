'use client';
import { useState } from 'react';
import FileUploader from '@/components/FileUploader';

export default function UploadPage() {
  const [uploading, setUploading] = useState(false);
  const [status, setStatus] = useState('');

  const handleUpload = async (file: File) => {
    setUploading(true);
    const form = new FormData();
    form.append('file', file);

    try {
      const res = await fetch('/api/upload', { method: 'POST', body: form });
      const data = await res.json();
      setStatus(data.message || 'Uploaded successfully!');
    } catch (err) {
      console.error(err);
      setStatus('Upload failed.');
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-10 text-center">
      <FileUploader onUpload={handleUpload} />
      {uploading ? (
        <p className="mt-4 text-gray-500">Uploading...</p>
      ) : (
        <p className="mt-4 text-green-600">{status}</p>
      )}
    </div>
  );
}
