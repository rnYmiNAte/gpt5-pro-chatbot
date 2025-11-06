// src/lib/openai.ts
import OpenAI from 'openai';

if (!process.env.OPENAI_API_KEY) {
  throw new Error('Missing OPENAI_API_KEY in environment variables');
}

export const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

/**
 * Sends a user prompt to the GPT-5 model and returns its reply.
 */
export async function getGPT5Response(prompt: string): Promise<string> {
  try {
    const completion = await openai.chat.completions.create({
      model: 'gpt-5', // hypothetical GPT-5 endpoint
      messages: [{ role: 'user', content: prompt }],
      temperature: 0.8,
    });

    return completion.choices[0]?.message?.content ?? 'No response received.';
  } catch (err: any) {
    console.error('[OpenAI Error]', err);
    return '⚠️ Failed to reach GPT-5 service.';
  }
}
