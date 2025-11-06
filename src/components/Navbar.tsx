'use client';
import Link from 'next/link';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-5 py-3 bg-white dark:bg-gray-800 shadow-md">
      <Link href="/" className="font-semibold text-xl text-blue-600 dark:text-blue-400">
        GPT-5.0 Pro
      </Link>
      <div className="flex items-center gap-4">
        <Link href="/upload" className="text-gray-700 dark:text-gray-300 hover:text-blue-600">
          Upload
        </Link>
        <Link href="/history" className="text-gray-700 dark:text-gray-300 hover:text-blue-600">
          History
        </Link>
        <ThemeToggle />
      </div>
    </nav>
  );
}
