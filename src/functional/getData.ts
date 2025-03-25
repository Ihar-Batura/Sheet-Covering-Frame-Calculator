import { IData } from '../types/types';

async function getData(filePath: string): Promise<IData[]> {
  const result: Response = await fetch(filePath);
  const data: IData[] = await result.json();
  return data;
}

export default getData;
