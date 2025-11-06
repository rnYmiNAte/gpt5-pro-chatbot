// src/utils/sanitizeInput.ts
export function sanitizeInput(text: string): string {
  if (!text) return '';

  // Remove dangerous HTML tags and attributes
  const cleaned = text
    .replace(/<script.*?>.*?<\/script>/gi, '') // strip scripts
    .replace(/on\w+=".*?"/gi, '')              // remove inline events like onload/onerror
    .replace(/javascript:/gi, '')              // prevent JS URLs
    .trim();

  // Escape angle brackets to prevent HTML injection
  const escaped = cleaned
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');

  // Optional: limit length to avoid abuse
  const maxLength = 2000;
  return escaped.length > maxLength ? escaped.slice(0, maxLength) : escaped;
}

/**
 * Sanitize model output too, if you render it as HTML.
 */
export function sanitizeOutput(text: string): string {
  const cleaned = text
    .replace(/<script.*?>.*?<\/script>/gi, '')
    .replace(/<[^>]*>?/gm, '') // strip all tags
    .trim();

  return cleaned;
}
