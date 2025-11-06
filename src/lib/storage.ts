// src/lib/storage.ts
import fs from 'fs';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';

const UPLOAD_DIR = path.join(process.cwd(), 'uploads');

export async function saveFile(file: File): Promise<string> {
  if (!fs.existsSync(UPLOAD_DIR)) fs.mkdirSync(UPLOAD_DIR, { recursive: true });

  const buffer = Buffer.from(await file.arrayBuffer());
  const filename = `${uuidv4()}-${file.name}`;
  const filepath = path.join(UPLOAD_DIR, filename);
  fs.writeFileSync(filepath, buffer);

  return `/uploads/${filename}`;
}

/**
 * For cloud storage (Supabase / S3) — replace the above with:
 *
 * import { supabase } from '@/lib/supabase';
 * const { data, error } = await supabase.storage.from('files').upload(filename, file);
 * if (error) throw error;
 * return data.path;
 */
