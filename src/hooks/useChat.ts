// src/hooks/useChat.ts
import { useEffect, useState, useCallback } from 'react';
import { getGPT5Response } from '@/lib/openai';
import type { Message } from '@/types/chat';

export function useChat(initialMessages: Message[] = []) {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [isLoading, setIsLoading] = useState(false);

  const sendMessage = useCallback(async (content: string) => {
    const userMessage: Message = { role: 'user', content };
    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);

    try {
      const aiContent = await getGPT5Response(content);
      const aiMessage: Message = { role: 'assistant', content: aiContent };
      setMessages((prev) => [...prev, aiMessage]);
      saveToLocal([...messages, userMessage, aiMessage]);
    } catch (err) {
      console.error('Chat error:', err);
    } finally {
      setIsLoading(false);
    }
  }, [messages]);

  const saveToLocal = (msgs: Message[]) => {
    localStorage.setItem('chat_history', JSON.stringify(msgs));
  };

  const loadFromLocal = () => {
    const saved = localStorage.getItem('chat_history');
    if (saved) setMessages(JSON.parse(saved));
  };

  useEffect(() => {
    loadFromLocal();
  }, []);

  return { messages, isLoading, sendMessage };
}
