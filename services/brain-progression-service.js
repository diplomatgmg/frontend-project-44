export default function getProgressionArray(start, step) {
  const progressionArray = [];

  for (let i = 0; i < 10; i += 1) {
    progressionArray.push(start + i * step);
  }

  return progressionArray;
}
