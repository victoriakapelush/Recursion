/* eslint-disable camelcase */
function mergeArrays (leftArray, rightArray) {
  const arr = []
  while (leftArray.length && rightArray.length) {
    if (leftArray[0] < rightArray[0]) {
      arr.push(leftArray.shift())
    } else {
      arr.push(rightArray.shift())
    }
  }
  return [...arr, ...leftArray, ...rightArray]
}

function merge_sort (unsortedArray) {
  const middle_index = unsortedArray.length / 2
  if (unsortedArray.length < 2) {
    return unsortedArray
  }
  const leftArray = unsortedArray.splice(0, middle_index)
  return mergeArrays(merge_sort(leftArray), merge_sort(unsortedArray))
}

const array = [4, 8, 7, 2, 11, 1, 3]
console.log(merge_sort(array))
