function getExpressionResult(numA, numB, operator) {
  let expressionResult;
  switch (operator) {
    case '+':
      expressionResult = numA + numB;
      break;
    case '-':
      expressionResult = numA - numB;
      break;
    case '*':
      expressionResult = numA * numB;
      break;

    default:
      break;
  }
  return expressionResult;
}

export default getExpressionResult;
