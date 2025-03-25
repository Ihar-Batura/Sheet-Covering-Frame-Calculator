import createElement from '../create/create_element';
import { ITableRow } from '../types/types';

function createTableRow({ name, unit, value, sum }: ITableRow) {
  const tableBodyRow = createElement({
    tag: 'tr',
    classes: ['table-body-row', 'table-row'],
  });

  createElement({
    tag: 'td',
    classes: ['table-body-cell'],
    text: name,
    parent: tableBodyRow,
  });

  createElement({
    tag: 'td',
    classes: ['table-body-cell'],
    text: unit,
    parent: tableBodyRow,
  });

  createElement({
    tag: 'td',
    classes: ['table-body-cell'],
    text: `${Math.ceil(value)}`,
    parent: tableBodyRow,
  });

  createElement({
    tag: 'td',
    classes: ['table-body-cell'],
    text: `${Math.ceil(sum)}`,
    parent: tableBodyRow,
  });

  return tableBodyRow;
}

export default createTableRow;
