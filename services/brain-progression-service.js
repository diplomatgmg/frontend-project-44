import { getRandomNumber } from './service-general.js';

export default function getProgressionArray() {
  const startProgression = getRandomNumber(0, 10);
  const stepProgression = getRandomNumber(1, 20);

  const progressionArray = [];

  for (let i = 0; i < 10; i += 1) {
    progressionArray.push(startProgression + i * stepProgression);
  }

  return progressionArray;
}
