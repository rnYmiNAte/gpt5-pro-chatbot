'use client';
import { useState } from 'react';
import { Send } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ChatBoxProps {
  onSend: (message: string) => void;
  disabled?: boolean;
}

export default function ChatBox({ onSend, disabled }: ChatBoxProps) {
  const [input, setInput] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    onSend(input.trim());
    setInput('');
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center p-3 bg-gray-100 dark:bg-gray-800 rounded-2xl shadow-sm"
    >
      <input
        type="text"
        placeholder="Type your message..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="flex-grow bg-transparent outline-none text-gray-900 dark:text-gray-100 px-3"
        disabled={disabled}
      />
      <Button type="submit" disabled={disabled || !input.trim()}>
        <Send className="w-4 h-4 mr-1" /> Send
      </Button>
    </form>
  );
}
