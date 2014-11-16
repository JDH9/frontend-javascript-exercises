module.exports.createCourse = function(courseTitle, courseDuration, courseStudents){
    var course = {
        title:  courseTitle,
        duration: courseDuration,
        students: courseStudents
    };
    return course;
};

module.exports.addProperty = function(object, newProp, newValue){
  for (var i in object){
    if(object.hasOwnProperty(newProp)){
      return object;
    } else {
       object[newProp] = newValue;
    }
  }
};

module.exports.formLetter = function (letter){
    return "Hello " + letter.recipient + ",\n\n" + letter.msg + "\n\nSincerely,\n" +  letter.sender;
  }



module.exports.canIGet = function(item, money){
  var chart = {
    "MacBook Air": 999,
    "MacBook Pro": 1299,
    "Mac Pro": 2499,
    "Apple Sticker": 1
  }
  return chart[item] <= money;
};

/*
module.exports.canIGet = function(item, money){
  var itemArray = [
  {
    "item": "MacBook Air",
    "money": 999
  },
  {
    "item": "MacBook Pro",
    "money": "1299"
  },
  {
    "item": "Mac Pro",
    "money": 2499
  },
  {
    "item": "Apple Sticker",
    "money": 1
  }
};
*/

 