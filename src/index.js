module.exports = function getZerosCount(number) {
  let zeros = 0;
  let degree = 5;
  while(number / degree >= 1){
    zeros += Math.floor(number / degree);
    degree *= 5;
  }
  return zeros;
}
