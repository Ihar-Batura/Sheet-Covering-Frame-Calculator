import createElement from '../create/create_element';
import { IData } from '../types/types';
import { catalogData } from '../main';

function createPipeSelectionSection() {
  const select = createElement({ tag: 'select', classes: ['select', 'pipe-selection'] });

  if (catalogData !== null) {
    const materialData: IData[] = catalogData.filter((el) => el.type === 'pipe');

    materialData.forEach((el) => {
      const option: HTMLElement = createElement({
        tag: 'option',
        classes: ['option', 'pipe-option'],
      });

      option.setAttribute('value', `${el.name}`);
      option.textContent = `${el.name}`;
      select.append(option);
    });
  }

  return select;
}

export default createPipeSelectionSection;
