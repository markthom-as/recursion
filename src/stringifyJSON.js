// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  var string = "";
  var type = Object.prototype.toString.call(obj);
  switch(type){
    case "[object Object]":
      var temp = "{"
      for(var key in obj){
        var objType = Object.prototype.toString.call(obj[key]);
        if(objType !== "[object Function]" && objType !== "[object Undefined]")
          temp += stringifyJSON(key) + ':' + stringifyJSON(obj[key]) + ',';
      }
      if(temp.length > 1)
        temp = temp.substring(0, temp.length-1);
      string += temp + "}";
      break;

    case "[object Array]":
      var temp = "[";
      for(var i=0; i<=obj.length; i++){
        temp += stringifyJSON(obj[i]);
        if(i < obj.length-1 && i>=0)
          temp += ',';
      }
      string += temp + ']';
      break;

    case "[object Number]":
      string += obj;
      break;

    case "[object String]":
      string += '"' + obj + '"';
      break;

    case "[object Boolean]":
      string += obj;
      break;

    case "[object Null]":
      string += null;
      break;

  }
  return string;

};
