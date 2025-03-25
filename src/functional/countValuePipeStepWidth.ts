import { IPipeStepWidth } from '../types/types';
function countValuePipeStepWidth({ width, step, pipeWidth }: IPipeStepWidth) {
  if (step && pipeWidth) {
    const widthInMillimeters: number = +width * 1000;
    let steps = 1;

    for (let i = pipeWidth; i < widthInMillimeters; i += step * 1000 + pipeWidth) {
      steps += 1;
    }

    return steps;
  }
}

export default countValuePipeStepWidth;
