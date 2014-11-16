module.exports.addItem = function(itemToAdd, arrayToAdd){
  for(var i = 0; i < arrayToAdd.length; i++){
    if(arrayToAdd[i] == itemToAdd){
      return arrayToAdd;
    } else {
      arrayToAdd.push(itemToAdd);
    }
  }
};

module.exports.reverseSortedList = function(array){
  var sortedArray = array.sort();
  return sortedArray.reverse();
};

/*
  if(arrayToAdd.contains(itemToAdd)){
    return arrayToAdd;
  } else {
    return itemToAdd.push(itemToAdd);
  }
  */