module.exports.stream = function(conditionalFn, actionFn){
  while(conditionalFn()){
    actionFn();
  }
};

module.exports.sumNumbers = function(array){
 var sum = 0;
  while(array.length > 0){
    sum += array.pop();
  }
  return sum;
};


/*
  var sum = 0;
  for (var i = 0; i < nums.length; i++){
    sum += nums[i];
  }
  return sum;
  */