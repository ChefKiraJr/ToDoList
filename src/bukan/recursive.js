const test = [9, 7, -2, 8, 5, -3, 6, 5, 1];

function arrange(s, arr = []) {
  // your code here
  let temp = [...s];
  let result = [...arr];
  if (temp.length === 0) {
    return result;
  } else {
    result.push(temp.shift());
    if (temp.length !== 0) {
      result.push(temp.pop());
    }
    temp.reverse();
    return arrange(temp, result);
  }
}

console.log(arrange(test));
