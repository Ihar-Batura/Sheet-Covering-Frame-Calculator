import createElement from '../create/create_element';

function createFooter(): HTMLElement {
  const footer: HTMLElement = createElement({ tag: 'footer', classes: ['footer'] });
  const wrapper: HTMLElement = createElement({
    tag: 'div',
    classes: ['wrapper', 'footer-wrapper'],
    parent: footer,
  });

  createElement({
    tag: 'p',
    classes: ['footer-date'],
    text: '© 2025',
    parent: wrapper,
  });

  const footerLink: HTMLElement = createElement({
    tag: 'a',
    classes: ['footer-link'],
    text: 'Ihar Batura',
    parent: wrapper,
  });

  footerLink.setAttribute('href', 'https://github.com/Ihar-Batura');
  footerLink.setAttribute('target', '_blank');

  return footer;
}

export default createFooter;
