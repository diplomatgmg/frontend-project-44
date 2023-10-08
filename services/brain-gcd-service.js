function getGreatestDivisor(num1, num2) {
  const minNumber = Math.min(num1, num2);
  let maxGreatestDivisor = 1;
  for (let i = minNumber; i > 0; i -= 1) {
    if (num1 % i === 0 && num2 % i === 0) {
      maxGreatestDivisor = i;
      break;
    }
  }
  return maxGreatestDivisor;
}

export default getGreatestDivisor;
