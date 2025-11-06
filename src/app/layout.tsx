import './globals.css';
import Navbar from '@/components/Navbar';
import { ReactNode } from 'react';

export const metadata = {
  title: 'GPT-5.0 Pro Chatbot',
  description: 'AI-powered chat with file upload and history.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 flex flex-col items-center p-4">{children}</main>
      </body>
    </html>
  );
}
