import { IPipeFinishValue } from '../types/types';

function countFinishPipeValue({
  width,
  length,
  stepWidth,
  stepLength,
  pipeWidth,
}: IPipeFinishValue): number {
  return (width * 1000 * stepWidth + length * 1000 * stepLength - stepLength * pipeWidth) / 1000;
}

export default countFinishPipeValue;
