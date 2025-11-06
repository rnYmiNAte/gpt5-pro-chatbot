import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY! });

export async function POST(req: NextRequest) {
  try {
    const { prompt } = await req.json();

    const response = await openai.chat.completions.create({
      model: 'gpt-5', // hypothetical GPT-5 endpoint
      messages: [{ role: 'user', content: prompt }],
      temperature: 0.8,
    });

    const content = response.choices[0]?.message?.content ?? 'No response.';
    return NextResponse.json({ response: content });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'GPT-5 request failed.' }, { status: 500 });
  }
}
