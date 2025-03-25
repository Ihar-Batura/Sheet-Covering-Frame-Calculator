import createElement from '../create/create_element';
import { IData } from '../types/types';
import { configData } from '../main';

function createChoiceOfStrengthSection() {
  const select = createElement({ tag: 'select', classes: ['select', 'strength-selection'] });

  if (configData !== null) {
    const strengthData: IData[] = configData.filter((el) => el.type === 'frame');

    strengthData.forEach((el) => {
      const option: HTMLElement = createElement({
        tag: 'option',
        classes: ['option', 'strength-option'],
      });

      option.setAttribute('value', `${el.name}`);
      option.textContent = `${el.name}`;
      select.append(option);
    });
  }

  return select;
}

export default createChoiceOfStrengthSection;
