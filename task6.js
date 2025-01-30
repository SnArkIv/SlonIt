function add(a, b){
    return a + b
}


function subtract(a, b){
    return a - b
}


function multiply(a, b){
    return a * b
}


function divide(a, b){
    return a / b
}

const operations = {
  add: add,
  subtract: subtract,
  multiply: multiply,
  divide: divide,
};

function calculate(a, b, operation) {
  return operation(a, b);
}

const selectedOperation = "divide";
console.log(calculate(6, 3, operations[selectedOperation])); 