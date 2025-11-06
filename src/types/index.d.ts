// src/types/index.d.ts

// 🌐 Allow global type imports
import type { Message } from './chat';
import type { User } from './user';

// 🧠 Extend Node.js process.env for environment variables
declare namespace NodeJS {
  interface ProcessEnv {
    OPENAI_API_KEY: string;
    DATABASE_URL?: string;
    NEXT_PUBLIC_APP_URL?: string;
    SUPABASE_URL?: string;
    SUPABASE_ANON_KEY?: string;
  }
}

// 💬 Extend global Window object for client-side helpers
interface Window {
  gtag?: (...args: any[]) => void; // optional Google Analytics
}

// 🔄 Re-export commonly used types for easy imports
declare global {
  type ChatMessage = Message;
  type ChatUser = User;
}

// ✅ Let TypeScript treat “.css”, “.svg”, “.png”, etc. as modules
declare module '*.svg';
declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.gif';
declare module '*.css';

// ✅ Required for Next.js App Router typing
declare module 'next' {
  export interface NextApiRequest {
    user?: User;
  }
}
