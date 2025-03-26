import { IResults } from '../types/types';
import cleanResultContainer from './cleanResult';
import createElement from '../create/create_element';
import createTableHead from '../components/tableHead';
import createTableRow from '../components/tableRow';

function showResults({
  area,
  material,
  pipe,
  finishPipeValue,
  pipeFinalPrice,
  listPrice,
  listsValue,
  valueOfScrew,
  fullScrewPrice,
}: IResults) {
  cleanResultContainer();
  const resultContainer: HTMLElement = document.querySelector('.result-container')!;

  const areaTitle = createElement({
    tag: 'p',
    classes: ['result-container-title'],
    text: `Площадь изделия: ${area} м2`,
  });

  const table = createElement({
    tag: 'table',
    classes: ['table'],
  });

  const tableHead = createTableHead();
  const tableBody = createElement({
    tag: 'tbody',
    classes: ['table-body'],
  });

  const firstRow = createTableRow({
    name: material,
    unit: 'м2',
    value: listsValue,
    sum: listPrice,
  });

  const secondRow = createTableRow({
    name: pipe,
    unit: 'мп',
    value: finishPipeValue,
    sum: pipeFinalPrice,
  });

  const thirdRow = createTableRow({
    name: 'Саморезы',
    unit: 'шт',
    value: valueOfScrew,
    sum: fullScrewPrice,
  });

  tableBody.append(firstRow, secondRow, thirdRow);

  table.append(tableHead, tableBody);
  const totalSum = Math.ceil(listPrice) + Math.ceil(pipeFinalPrice) + Math.ceil(fullScrewPrice);

  const total = createElement({ tag: 'p', classes: ['result-total'], text: `Итого: ${totalSum}` });

  resultContainer.append(areaTitle, table, total);
}

export default showResults;
