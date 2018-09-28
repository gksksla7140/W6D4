const DOMNodeCollection = require('./dom_node_collection');

document.addEventListener("DOMContentLoaded", function(el){
  Window.prototype.$l = function(selector) {
    
    if (selector instanceof String) {
      let element = document.querySelectorAll(selector);
      let nodesArray = [].slice.call(el);
      return new DOMNodeCollection(nodesArray);
      
    } else if ( selector instanceof HTMLElement) {
      return new DOMNodeCollection([selector]);  
    }
  };
  window.$l = $l;
  let ul = document.querySelector("ul");
  let DOMres = $l(ul);
  // $l('li');
});

