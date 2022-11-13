function fibs (n) {
  if (n < 2) return 1
  else {
    return ((n - 2) + (n - 1))
  }
}

console.log(fibs(10))
