import createElement from '../create/create_element';
import createInputContainer from './inputContainer';

function createMain(): HTMLElement {
  const main: HTMLElement = createElement({ tag: 'main', classes: ['main'] });

  const wrapper: HTMLElement = createElement({
    tag: 'div',
    classes: ['wrapper', 'main-wrapper'],
    parent: main,
  });

  const inputContainer: HTMLElement = createInputContainer();
  const resultContainer: HTMLElement = createElement({ tag: 'div', classes: ['result-container'] });

  wrapper.append(inputContainer, resultContainer);

  return main;
}

export default createMain;
