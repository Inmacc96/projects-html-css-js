function sum() {
  const form = document.getElementById("forma");
  let operandA = form["operandA"];
  let operandB = form["operandB"];
  let result = parseInt(operandA.value) + parseInt(operandB.value);
  if (isNaN(result)) {
    result = "The operation does not include numbers.";
  }
  document.getElementById("result").innerHTML = `Result: ${result}`;
}
