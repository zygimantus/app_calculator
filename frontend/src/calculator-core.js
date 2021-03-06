export function evaluate(arrFormula) {
  const arrPostfix = infix2Postfix(arrFormula);
  return evaluatePostfix(arrPostfix);
}

export function isNotNumber(input) {
  return input === '(' || input === ')' || input === '+' || input === '-' || input === '*' || input === '/' || input === '%';
}

export function isNumber(input) {
  return !isNotNumber(input);
}

export function isOperator(input) {
  return input === '+' || input === '-' || input === '*' || input === '/' || input === '%';
}

export function getPriority(input) {
  if (input === '+' || input === '-') return 1;
  else if (input === '*' || input === '/' || input === '%') return 2;
  return 0;
}

export function infix2Postfix(arrFormula) {
  let result = [], stack = [];

  arrFormula.forEach(item => {
    if (isNumber(item)) {
      result.push(item);
    } else if (item === '(') {
      stack.push(item);
    } else if (item === ')') {
      while (stack.length > 0) {
        const pulledItem = stack.pop();

        if (pulledItem === '(') break;
        else result.push(pulledItem);
      }
    } else if (isOperator(item)) {
      while (stack.length > 0) {
        const peekedItem = stack[stack.length - 1];

        if (isOperator(peekedItem) && getPriority(peekedItem) >= getPriority(item)) {
          result.push(peekedItem);
          stack.pop();
        } else break;
      }

      stack.push(item);
    } else {
      console.log("Something else!!!");
    }
  });

  while (stack.length > 0) {
    result.push(stack.pop());
  }

  return result;
}

export function evaluatePostfix(arrPostfix) {
  let array = [];
  let stack = [];

  arrPostfix.forEach(async (item) => {
    if (isNumber(item)) {
      stack.push(item);
    } else if (isOperator(item)) {
      let sNum1 = stack.pop();
      let sNum2 = stack.pop();
      const num1 = Number.parseFloat(sNum1), num2 = Number.parseFloat(sNum2);
      let result = '';
      let operation = '';

      switch (item) {
        case '+':
          result = num2 + num1;
          operation = 'addition';
          break;
        case '-':
          result = num2 - num1;
          operation = 'subtraction';
          break;
        case '*':
          result = num2 * num1;
          operation = 'multiplication';
          break;
        case '/':
          result = num2 / num1;
          operation = 'division';
          break;
        case '%':
          result = num2 % num1;
          operation = 'modulo';
          break;
        default:
          console.log('Something else!!!');
      }

      array.push(operation, sNum1, sNum2);
      stack.push(result + '');
    } else {
      console.log("Something else!!!");
    }
  });

  return array;
}