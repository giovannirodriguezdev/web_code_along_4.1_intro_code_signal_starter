function solution(s, letter) {
  // implement
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === letter) {
      count++;
    }
  }
  
  return count;
}

console.log(solution('this is a test', 's'))
console.log(solution('this is a test', 'z'))
