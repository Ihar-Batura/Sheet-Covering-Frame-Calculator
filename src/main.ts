import './sass/style.scss';
import createHeader from './components/header';
import createMain from './components/main';
import createFooter from './components/footer';
import { IData } from './types/types';
import getData from './functional/getData';

export let catalogData: IData[] | null = null;
export let configData: IData[] | null = null;

const pathToCatalogData: string = 'data/data.json';
const pathToConfigData: string = 'data/config.json';

async function createCalculatorPage(): Promise<void> {
  catalogData = await getData(pathToCatalogData);
  configData = await getData(pathToConfigData);

  const body: HTMLElement = document.body;

  const header: HTMLElement = createHeader();
  const main: HTMLElement = createMain();
  const footer: HTMLElement = createFooter();

  body.append(header, main, footer);
}

createCalculatorPage();
