import createElement from '../create/create_element';

function createHeader(): HTMLElement {
  const header: HTMLElement = createElement({ tag: 'header', classes: ['header'] });
  const wrapper: HTMLElement = createElement({
    tag: 'div',
    classes: ['wrapper', 'header-wrapper'],
    parent: header,
  });

  createElement({
    tag: 'h1',
    classes: ['logo', 'header-logo'],
    text: 'Sheet Covering Frame Calculator',
    parent: wrapper,
  });

  return header;
}

export default createHeader;
