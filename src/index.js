module.exports = function getZerosCount(number) {
  zeros = 0;
  for (i = 5; i < number; i*=5) {
    zeros += Math.floor(number/i);
  }
  return zeros;
}
