function generateFibonacci(a, b, n) {
  let fibonacciSequence = [a, b];
  for (let i = 2; i < n; i++) {
    fibonacciSequence.push(fibonacciSequence[i - 1] + fibonacciSequence[i - 2]);
  }
  return fibonacciSequence;
}

function displayFibonacciSequence(sequence) {
  let fibonacciContainer = document.getElementById("fibonacci-container");
  fibonacciContainer.innerHTML = "";
  sequence.forEach((num) => {
    let fibonacciItem = document.createElement("div");
    fibonacciItem.classList.add("fibonacci-item");
    fibonacciItem.textContent = num;
    fibonacciContainer.appendChild(fibonacciItem);
  });
}

document.getElementById("generate-btn").addEventListener("click", function () {
  let a = parseInt(document.getElementById("input-a").value);
  let b = parseInt(document.getElementById("input-b").value);
  let n = parseInt(document.getElementById("input-n").value);

  let fibonacciSequence = generateFibonacci(a, b, n);
  displayFibonacciSequence(fibonacciSequence);
});

function clearFunc() {
  let fibonacciContainer = document.getElementById("fibonacci-container");
  fibonacciContainer.innerHTML = "";
  let a = document.getElementById("input-a");
  let b = document.getElementById("input-b");
  let n = document.getElementById("input-n");
  a.value = "";
  b.value = "";
  n.value = "";
}
