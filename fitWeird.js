!function( win, doc ){
  
  if( !doc.getElementById( 'fitweird' ) ) {
    
    var div = doc.createElement( 'div' )
    var fontSize = parseFloat( getComputedStyle( doc.body ).fontSize )
    var w, h
    
    with( div.style ) {
      bottom          = 0
      right           = 0
      position        = 'fixed'
      backgroundColor = 'rgba(58, 58, 58, 0.8)'
      padding         = '0.4em 1em'
      color           = '#00CC00'
      fontFamily      = 'monospace'
    }
    
    div.id = 'fitweird'
    doc.body.appendChild( div )
    
    function update() {
      
      w = win.innerWidth
      h = win.innerHeight
      
      div.innerHTML =
        w + 'px &times; ' + h + 'px :: ' +
        w / fontSize + 'em &times; ' + h / fontSize + 'em'
      
    }
    
    addEventListener( 'resize', update )
    update()
    
  }
  
}( this, document )
