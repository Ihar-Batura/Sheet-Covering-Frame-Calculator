export interface ICreateElement {
  tag?: string;
  classes?: string[];
  id?: string;
  text?: string;
  parent?: HTMLElement;
}

export interface ICreateInput {
  type: string;
  classes?: string[];
  id?: string;
  value?: string;
  title?: string;
  required?: string;
  placeholder?: string;
  minLength?: string;
  min?: string;
  pattern?: string;
  addRules?: string;
  onInput?: () => void;
  parent?: HTMLElement;
}

export interface ICreateButton extends ICreateElement {
  disabled?: boolean;
  name?: string;
  onClick?: () => void;
}

export interface IData {
  type: string;
  name: string;
  unit: string;
  price: number;
  material?: string;
  width?: number;
  key?: string;
  min?: number;
  max?: number;
  step?: number;
  value?: number;
}

export interface IFormData {
  material: string;
  pipe: string;
  width: string;
  length: string;
  strength: string;
}

export interface IPipeStepWidth {
  width: string;
  step?: number;
  pipeWidth?: number;
}

export interface IPipeStepLength {
  length: string;
  step?: number;
  pipeWidth?: number;
}

export interface IPipeFinishValue {
  width: number;
  length: number;
  stepWidth: number;
  stepLength: number;
  pipeWidth: number;
}

export interface IResults {
  area: number;
  material: string;
  pipe: string;
  finishPipeValue: number;
  pipeFinalPrice: number;
  listPrice: number;
  listsValue: number;
  valueOfScrew: number;
  fullScrewPrice: number;
}

export interface ITableRow {
  name: string;
  unit: string;
  value: number;
  sum: number;
}
