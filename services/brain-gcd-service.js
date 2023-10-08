function getGreatestDivisor(num1, num2) {
  const minNumber = Math.min(num1, num2);
  let maxGreatestDivisor;
  for (let i = minNumber; i > 0; i -= 1) {
    if (num1 % i === 0 && num2 % i === 0) {
      maxGreatestDivisor = i;
    }
  }
  return maxGreatestDivisor;
}

export default getGreatestDivisor;
