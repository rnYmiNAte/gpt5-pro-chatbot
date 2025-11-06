export const truncate = (text: string, max = 100): string =>
  text.length > max ? text.substring(0, max) + '…' : text;

export const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));
