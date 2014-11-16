module.exports.reversePlusOne = function(array){
  array.reverse();
  array.unshift(1);
  return array;
};

module.exports.plusesEverywhere = function(array){
  return array.join([seperator = "+"]);
};

module.exports.arrayQuantityPlusOne = function(numArrays){
  return numArrays.length + 1;
};