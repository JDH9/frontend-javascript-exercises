module.exports.getKeys = function(object){
  var array = [];
  for(var keys in object){
    array.push(keys);
  }
  return array;
};

module.exports.getValues = function(object){
  var array = [];
  var keys = Object.keys(object);
  for (var i = 0; i < keys.length; i++) {
    var val = object[keys[i]];
    array.push(val);
}
  return array;
};


module.exports.objectToArray = function(object){
  var array = [];
  var keys = Object.keys(object);
   keys.map(function(key){
      array.push(key + " is " + object[key]);
  });
  return array;
};
