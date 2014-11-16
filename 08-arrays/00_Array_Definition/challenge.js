module.exports.newArray = function(one, two, three, four){
  return [one, two, three, four];
};

module.exports.firstAndLast = function(array){
  var firstElement = array[0];
  var lastElement = array.length - 1;
  return [firstElement, array[lastElement]];
};