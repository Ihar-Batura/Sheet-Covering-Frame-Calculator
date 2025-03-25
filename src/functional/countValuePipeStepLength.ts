import { IPipeStepLength } from '../types/types';
function countValuePipeStepLength({ length, step, pipeWidth }: IPipeStepLength) {
  if (step && pipeWidth) {
    const widthInMillimeters: number = +length * 1000;
    let steps = 1;

    for (let i = pipeWidth; i < widthInMillimeters; i += step * 1000 + pipeWidth) {
      steps += 1;
    }

    return steps;
  }
}

export default countValuePipeStepLength;
