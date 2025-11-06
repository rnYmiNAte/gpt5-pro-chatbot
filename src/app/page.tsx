'use client';
import { useState } from 'react';
import ChatBox from '@/components/ChatBox';
import MessageBubble from '@/components/MessageBubble';
import { v4 as uuid } from 'uuid';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
}

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);

  const handleSend = async (input: string) => {
    const newMessage: Message = { id: uuid(), role: 'user', content: input };
    setMessages((prev) => [...prev, newMessage]);
    setLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: input }),
      });
      const data = await res.json();
      setMessages((prev) => [
        ...prev,
        { id: uuid(), role: 'assistant', content: data.response },
      ]);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col w-full max-w-2xl mx-auto gap-3">
      <div className="flex flex-col flex-grow bg-gray-50 dark:bg-gray-800 p-4 rounded-2xl overflow-y-auto">
        {messages.map((m) => (
          <MessageBubble key={m.id} role={m.role} content={m.content} />
        ))}
        {loading && (
          <p className="text-sm text-gray-500 animate-pulse mt-2">AI is thinking...</p>
        )}
      </div>
      <ChatBox onSend={handleSend} disabled={loading} />
    </div>
  );
}
