module.exports.sumNumbers = function(nums){
  var sum = 0;
  for (var i = 0; i < nums.length; i++){
    sum += nums[i];
  }
  return sum;
};

module.exports.splitAndLowerCaseString = function(inputString){
    return inputString.toLowerCase().split(",");
};


// Why does toLowerCase() have to come before split()

module.exports.addIndex = function(array){
  return array.map(function(element, index){
    return index + " is " + element;
  });
}

