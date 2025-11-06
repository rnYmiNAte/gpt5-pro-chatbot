import { NextRequest, NextResponse } from 'next/server';
import path from 'path';
import fs from 'fs/promises';

export async function POST(req: NextRequest) {
  try {
    const data = await req.formData();
    const file = data.get('file') as File;

    if (!file) return NextResponse.json({ message: 'No file uploaded' }, { status: 400 });

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const uploadDir = path.join(process.cwd(), 'uploads');

    await fs.mkdir(uploadDir, { recursive: true });
    await fs.writeFile(path.join(uploadDir, file.name), buffer);

    return NextResponse.json({ message: `File ${file.name} uploaded successfully!` });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ message: 'Upload failed.' }, { status: 500 });
  }
}
