function fibonacci(num) {
  if (num === 0) {
    return 0
  }
  if (num === 1 || num === 2) {
    return 1
  }
  let a = 1
  let b = 1
  let c
  for (let i = 3; i <= num; i++) {
    c = a + b
    a = b
    b = c
  }
  return b;
}

function verificaFibonacci(num) {
  let i = 0
  while (fibonacci(i) < num) {
    i++
  }
  if (fibonacci(i) === num) {
    console.log(`${num} faz parte da sequência de Fibonacci.`);
  } else {
    console.log(`${num} não faz parte da sequência de Fibonacci.`);
  }
}

verificaFibonacci(5) // 5 faz parte da sequência de Fibonacci.
verificaFibonacci(13) // 13 faz parte da sequência de Fibonacci.
verificaFibonacci(7) // 7 não faz parte da sequência de Fibonacci.
