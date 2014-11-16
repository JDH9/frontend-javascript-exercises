module.exports.equalStrings = function(stringOne, stringTwo) {
  return stringOne === stringTwo;
};

module.exports.notEqual = function(one, two) {
  return one !== two;
};

module.exports.inBetween = function(lower, middle, upper) {
  return lower < middle && middle < upper;
};

module.exports.outsideRanges = function(number) {
  if(((number >= 10 && number <= 20) || (number > 42 && number <= 75) || (number > 1 && number < 6))){
    return false;
  }else{
    return true;
  }
};



//  return !((number >= 10 && number <= 20) && (number > 42 && number <= 75) && (number > 1 && number < 6));
//};

// 4 < middle && middle < 6

// not between 10 and 20, it also can't be 10 or 20
  //(number !>= 10 && number !<= 20) 
// not between 42 and 75, it also can't be 75. 42 is allowed
  //(number !> 42 && number <= 75)
// not between 1 and 6. 1 and 6 are allowed
  //(number !> 1 && number !< 6)

module.exports.nameAndPrice = function(name, price) {
  return (name == "NYTimes" || name == "LATimes") && (price >= 1);
};



