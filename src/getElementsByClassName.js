// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className
) {
//    var body = document.body;
//    var output = [];
//    var findclassbyClass = function(element){
//     if(element.classlist && elementclasslist.contain(className)){
//         output.push(element);
//        if(element.childnode){
//             for(var i = 0 ; i < element.childnode.length; i++){
//                 output.concat(findclassbyClass(element.childnode[i]));
//             }
//        } 
    
//     }
//         return output;
//    }

//    return findclassbyClass(body);
var docBody = document.body;
  var output = [];
  var findElementByClass = function(element){
    if(element.classList && element.classList.contains(className)){
      output.push(element);}
      if(element.childNodes){
        for(var i = 0; i < element.childNodes.length; i++){
          output.concat(findElementByClass(element.childNodes[i]));
        }
      }
      return output;
    };
    return findElementByClass(docBody);


};
