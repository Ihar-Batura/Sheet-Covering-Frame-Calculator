import { configData } from '../main';
import { IData } from '../types/types';

function findScrewValueForOneList(listMaterial: string) {
  if (configData === null) {
    throw new Error('configData is not find');
  }
  const fixData: IData = configData.filter((el) => el.type === 'fix' && el.key === listMaterial)[0];
  return fixData.value;
}

export default findScrewValueForOneList;
