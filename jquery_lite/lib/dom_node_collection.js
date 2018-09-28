class DOMNodeCollection{
  constructor (htmlEls){
    this.els = htmlEls;
    // this.html('HI HATER');
    // this.empty();
    let node = document.createElement('li');
    this.append(node);
  }
  
  html(htr) {
    if(!htr) {
      console.log(this.els[0].innerHTML);
    } else{
      this.els.forEach( node =>{
        node.innerHTML = htr;
      });
    }
  }
  
  empty(){
    this.els.forEach( node => {
      node.innerHTML = "";
    });
  }
  
  append (thing) {
    switch (thing.constructor){
      case (String):
      console.log('something');
      break;
    
        
    }
    this.els.forEach( node => {
      node.appendChild(thing) ;
    });
  }
  
}

module.exports = DOMNodeCollection;
