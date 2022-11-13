function fibs (n) {
  let arr
  if (n >= 2) {
    arr = [0, 1]
    n = n - 2
  } else if (n === 1) {
    arr = [0]
    n = n - 1
  }
  while (n !== 0) {
    arr[arr.length] = arr[arr.length - 2] + arr[arr.length - 1]
    n = n - 1
  }
  return arr
}

console.log(fibs(100))
