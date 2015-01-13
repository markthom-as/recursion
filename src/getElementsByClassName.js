// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
  // your code here
  var matched = [];
  function explore(node){
    var classes = "" + node.className;
    if(classes.indexOf(className) !== -1)
      matched.push(node);
    if(node.hasChildNodes()){
      for(var i=0; i<node.childNodes.length; i++)
          explore(node.childNodes[i]);
    }
    };

    explore(document.documentElement);
    return matched;

};
