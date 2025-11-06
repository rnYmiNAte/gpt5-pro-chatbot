'use client';
import { useEffect, useState } from 'react';
import ChatHistoryList from '@/components/ChatHistoryList';

export default function HistoryPage() {
  const [selected, setSelected] = useState<string | null>(null);

  useEffect(() => {
    if (selected) {
      // You can redirect or show chat detail here
      alert(`Selected chat ID: ${selected}`);
    }
  }, [selected]);

  return (
    <div className="max-w-lg mx-auto mt-10">
      <ChatHistoryList onSelectChat={setSelected} />
    </div>
  );
}
