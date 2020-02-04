// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  if( typeof obj === 'number')  {
    return obj.toString();
  }
  if( obj === null){
    return 'null';
  }
  if(typeof obj === 'boolean'){
    if( obj === true){
      return 'true';
    }else{
      return 'false';
    }
  }
  if(typeof obj === 'string'){
    return '"' + obj + '"';
  }
  // if( obj === []){
  //   return "[]";
  // }
   //recursion for obj
   if(Array.isArray(obj) === false) {
    if(typeof obj === 'object' && obj !== null) {
      if (Object.keys(obj).length === 0) {
      result = '{}';
    } else {
      var result = '{';
      for (var key in obj) {
        if (obj[key] === 'undefined' || typeof obj[key] === 'function') {
          return '{}';
        }
        result += stringifyJSON(key) + ':' + stringifyJSON(obj[key]) + ',';
      }
      result = result.slice(0, result.length -1);
      result = result + '}';
     }
    }
    }
  
    //recursion for array
    //check if the obj is array
    if(Array.isArray(obj)) {
      var result = '[';
      for (var i = 0; i < obj.length ; i++) {
        result += stringifyJSON(obj[i])
        if(i !== obj.length - 1) {
          result += ',';
        }
      }
      result += ']';
    }
    return result;

};
