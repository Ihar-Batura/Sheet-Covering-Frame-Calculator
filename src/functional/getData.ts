async function getData<T>(filePath: string): Promise<T> {
  const result: Response = await fetch(filePath);
  const data: T = await result.json();

  return data;
}

export default getData;
