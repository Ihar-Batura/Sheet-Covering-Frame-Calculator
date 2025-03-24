import createElement from '../create/create_element';

function createMain(): HTMLElement {
  const main: HTMLElement = createElement({ tag: 'main', classes: ['main'] });

  const mainWrapper: HTMLElement = createElement({
    tag: 'div',
    classes: ['wrapper', 'main-wrapper'],
    parent: main,
  });

  return main;
}

export default createMain;
