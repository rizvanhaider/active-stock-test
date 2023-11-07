import { promises as fs } from 'fs';

export async function readJSONFile<T>(filePath: string): Promise<T> {
  const data = await fs.readFile(filePath, 'utf8');
  return JSON.parse(data) as T;
}
