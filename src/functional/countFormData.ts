import { IFormData } from '../types/types';
import { catalogData, configData } from '../main';
import { IData } from '../types/types';
import countValuePipeStepWidth from './countValuePipeStepWidth';
import countValuePipeStepLength from './countValuePipeStepLength';
import countFinishPipeValue from './countFinishPipeValue';
import countArea from './countArea';
import findOneListArea from './findOneListArea';
import countLists from './countLists';
import findScrewValueForOneList from './findScrewValueForOneList';
import showResults from './showResults';

function countFormData({ material, pipe, width, length, strength }: IFormData) {
  const area: number = countArea(+width, +length);

  if (catalogData && configData) {
    const listValue: IData = catalogData.filter(
      (el) => el.type === 'list' && el.name === material
    )[0];
    const listWidth: number = listValue.width!;
    const listArea: number = findOneListArea(+listWidth);
    const listsValue: number = countLists(area, listArea);
    const listMaterial: string = listValue.material!;
    const listPrice: number = listValue.price;
    const fullListsPrice: number = listPrice * listsValue;
    const screwValueForOneList: number = findScrewValueForOneList(listMaterial)!;
    const valueOfScrew: number = screwValueForOneList * area;

    const screwPrice: number = catalogData.filter((el) => el.type === 'fix')[0].price;

    const fullScrewPrice: number = valueOfScrew * screwPrice;

    const pipeStep: number | undefined = configData.filter(
      (el) => el.type === 'frame' && el.name === strength
    )[0].step;

    const pipeValue: IData = catalogData.filter((el) => el.type === 'pipe' && el.name === pipe)[0];
    const pipeWidth: number = pipeValue.width!;
    const pipePrice: number = pipeValue.price;

    const valuePipeStepWidth: number | undefined = countValuePipeStepWidth({
      width: width,
      step: pipeStep,
      pipeWidth: pipeWidth,
    });

    const valuePipeStepLength: number | undefined = countValuePipeStepLength({
      length: length,
      step: pipeStep,
      pipeWidth: pipeWidth,
    });

    if (valuePipeStepWidth && valuePipeStepLength) {
      const finishPipeValue = countFinishPipeValue({
        width: +width,
        length: +length,
        stepWidth: valuePipeStepWidth,
        stepLength: valuePipeStepLength,
        pipeWidth: pipeWidth,
      });

      const pipeFinalPrice = pipePrice * finishPipeValue;

      showResults({
        area: area,
        material: material,
        pipe: pipe,
        finishPipeValue: finishPipeValue,
        pipeFinalPrice: pipeFinalPrice,
        listPrice: fullListsPrice,
        listsValue: listsValue,
        valueOfScrew: valueOfScrew,
        fullScrewPrice: fullScrewPrice,
      });
    }
  }
}

export default countFormData;
