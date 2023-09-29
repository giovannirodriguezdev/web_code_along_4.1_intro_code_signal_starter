function solution(numerator, denominator) {
  // implement
  if (denominator === 0) {
    return "Division by zero is not allowed!";
  }

  return numerator / denominator;
}

console.log(solution(2, 3))
console.log(solution(2, 0))
