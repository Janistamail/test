// let n1 = 0;
// let n2 = 1;
let arr = [0];
const fibonacci = (term) => {
  for (let i = 1; i < term; i++) {
    if (i === 1) {
      arr.push(i);
    } else {
      arr.push(arr[i - 2] + arr[i - 1]);
    }
  }
};
fibonacci(10);
console.log(arr);
