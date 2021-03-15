
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let arr = [];
  
  if (matrix === undefined) {return [];}

  for (let i = 0; i < matrix.length; i += 1) {
    if( i % 2 !== 0) {
      arr[i] = matrix[i].reverse();
      } else {
        arr[i] = matrix[i];
        }
  }
  return arr.flat();
}
