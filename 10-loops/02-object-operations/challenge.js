module.exports.copy = function(object){
  var object2 = {};
  for(var property in object){
    object2[property] = object[property];
  }
  return object2;
};

module.exports.extend = function(dest, src){
  for(var property in src){
    dest[property] = src[property];
  }
  return dest;
};

// why does dest[property] have to come before src[property]

module.exports.hasElems = function(object, array){
  for (var i = 0, len = array.length; i < len; i++) {
    if (!object.hasOwnProperty(array[i])) {
      return false;
    }
  }

  return true;
};