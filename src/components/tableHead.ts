import createElement from '../create/create_element';

function createTableHead(): HTMLElement {
  const tableHead = createElement({
    tag: 'thead',
    classes: ['table-head'],
  });

  const tableHeadRow = createElement({
    tag: 'tr',
    classes: ['table-head-row', 'table-row'],
    parent: tableHead,
  });

  createElement({
    tag: 'th',
    classes: ['table-head-header'],
    text: 'Наименование:',
    parent: tableHeadRow,
  });

  createElement({
    tag: 'th',
    classes: ['table-head-header'],
    text: 'Ед. измерения:',
    parent: tableHeadRow,
  });

  createElement({
    tag: 'th',
    classes: ['table-head-header'],
    text: 'Кол-во:',
    parent: tableHeadRow,
  });

  createElement({
    tag: 'th',
    classes: ['table-head-header'],
    text: 'Сумма:',
    parent: tableHeadRow,
  });

  return tableHead;
}

export default createTableHead;
