import createInput from '../create/create_input';
import { configData } from '../main';
import { IData } from '../types/types';

function createInputWidth(): HTMLInputElement {
  const input = createInput({
    type: 'number',
    classes: ['input', 'input-width'],
    required: ' ',
    placeholder: 'width',
  });
  if (configData !== null) {
    const data: IData[] = configData.filter((el) => el.type === 'size' && el.key === 'width');
    input.setAttribute('min', `${data[0].min}`);
    input.setAttribute('max', `${data[0].max}`);
  }
  return input;
}

export default createInputWidth;
