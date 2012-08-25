(function( win, doc ){
  
  'use strict';
  
  if( !doc.getElementById( 'fitweird' ) ) {
    
    var div      = doc.createElement( 'div' );
    var style    = div.style;
    var fontSize = parseFloat( getComputedStyle( doc.body ).fontSize );
    var w, h;
    
    style.bottom          = 0;
    style.right           = 0;
    style.position        = 'fixed';
    style.backgroundColor = 'rgba(58, 58, 58, 0.8)';
    style.padding         = '0.4em 1em';
    style.color           = '#00CC00';
    style.fontFamily      = 'monospace';
    
    div.id = 'fitweird';
    doc.body.appendChild( div );
    
    var update = function() {
      
      w = win.innerWidth;
      h = win.innerHeight;
      
      div.innerHTML =
        w + 'px &times; ' + h + 'px :: ' +
        w / fontSize + 'em &times; ' + h / fontSize + 'em';
      
    };
    
    addEventListener( 'resize', update );
    update();
    
  }
  
})( this, document );
