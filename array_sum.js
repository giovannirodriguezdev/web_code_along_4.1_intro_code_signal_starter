function solution(a) {
  // implement
  let sum = 0;

  for (let i = 0; i < a.length; i++) {
    sum += a[i];
  }
  return sum;
}

console.log(solution([]))
console.log(solution([1, 2]))
console.log(solution([2, 4, 8]))
