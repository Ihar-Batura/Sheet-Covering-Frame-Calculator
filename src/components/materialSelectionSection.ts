import createElement from '../create/create_element';
import { IData } from '../types/types';
import { catalogData } from '../main';

function createMaterialSelectionSection() {
  const select = createElement({ tag: 'select', classes: ['select', 'material-selection'] });

  if (catalogData !== null) {
    const materialData: IData[] = catalogData.filter((el) => el.type === 'list');

    materialData.forEach((el) => {
      const option: HTMLElement = createElement({
        tag: 'option',
        classes: ['option', 'material-option'],
      });

      option.setAttribute('value', `${el.name}`);
      option.textContent = `${el.name}`;
      select.append(option);
    });
  }

  return select;
}

export default createMaterialSelectionSection;
