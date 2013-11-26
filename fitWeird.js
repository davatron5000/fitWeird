;(function(){

var widthPx, heightPx, widthEm, heightEm, bodyFontSize;

var init = function(){

  // Inject the Div
  setupFitWeird();

  // Gather elements to update
  widthPx = document.getElementById('fitweird-width-px');
  heightPx = document.getElementById('fitweird-height-px');
  widthEm = document.getElementById('fitweird-width-em');
  heightEm = document.getElementById('fitweird-height-em');

  // Fill the Div
  fillVars();

  // Update the Div
  window.addEventListener('resize', fillVars);

}

var fillVars = function(){
  widthPx.innerHTML = window.innerWidth;
  heightPx.innerHTML = window.innerHeight;

  bodyFontSize = window.getComputedStyle(document.body).fontSize || 16;
  bodyFontSize = parseInt(bodyFontSize, 10);

  widthEm.innerHTML = window.innerWidth / bodyFontSize;
  heightEm.innerHTML = window.innerHeight / bodyFontSize;

}

var setupFitWeird = function(){

  if ( !document.getElementById('fitweird') ) {
    var newDiv = document.createElement('div');
    var newContent = '<span id=fitweird-width-px></span>px &times; <span id=fitweird-height-px></span>px ';
    newContent += ':: <span id=fitweird-width-em></span>em &times; <span id=fitweird-height-em></span>em';
    newDiv.setAttribute('id', 'fitweird');
    newDiv.style.position = 'fixed';
    newDiv.style.bottom = '0';
    newDiv.style.right = '0';
    newDiv.style.backgroundColor = 'rgba(58, 58, 58, 0.8)';
    newDiv.style.padding = '0.4em 1em';
    newDiv.style.color = '#00CC00';
    newDiv.style.fontFamily = 'monospace';
    newDiv.style.zIndex = '9999';
    newDiv.innerHTML = newContent;
    document.body.appendChild(newDiv);
  }

};

init();

})(window);
