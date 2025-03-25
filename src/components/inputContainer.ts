import createElement from '../create/create_element';
import createButton from '../create/create_button';
import createMaterialSelectionSection from './materialSelectionSection';
import createPipeSelectionSection from './pipeSelectionSection';
import createInputWidth from './inputWidth';
import createInputLength from './inputLength';
import createChoiceOfStrengthSection from './choiceOfStrengthSection';
import countFormData from '../functional/countFormData';

function createInputContainer() {
  const inputContainer: HTMLFormElement = createElement({
    tag: 'form',
    classes: ['input-container'],
  }) as HTMLFormElement;
  const materialSection: HTMLSelectElement = createMaterialSelectionSection() as HTMLSelectElement;
  const pipeSection: HTMLSelectElement = createPipeSelectionSection() as HTMLSelectElement;
  const inputWidth: HTMLInputElement = createInputWidth();
  const inputLength: HTMLInputElement = createInputLength();
  const strengthSection: HTMLSelectElement = createChoiceOfStrengthSection() as HTMLSelectElement;
  const btn = createButton({
    classes: ['btn', 'btn-result'],
    text: 'Result',
  });

  inputContainer.addEventListener('submit', function (event: Event) {
    event.preventDefault();

    const material = materialSection.value;
    const pipe = pipeSection.value;
    const width = inputWidth.value;
    const length = inputLength.value;
    const strength = strengthSection.value;

    countFormData({
      material: material,
      pipe: pipe,
      width: width,
      length: length,
      strength: strength,
    });
  });

  inputContainer.append(
    materialSection,
    pipeSection,
    inputWidth,
    inputLength,
    strengthSection,
    btn
  );

  return inputContainer;
}

export default createInputContainer;
