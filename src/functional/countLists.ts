function countLists(area: number, listArea: number): number {
  let result: number = 0;
  for (let i = 0; i < area; i += listArea) {
    result += 1;
  }
  return result;
}

export default countLists;
