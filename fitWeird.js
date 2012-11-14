;(function(){

var widthPx, heightPx, widthEm, heightEm, widthRem;

var init = function(){

  // Inject the Div
  setupFitWeird();

  // Gather elements to update
  widthPx = document.getElementById('fitweird-width-px');
  heightPx = document.getElementById('fitweird-height-px');
  widthEm = document.getElementById('fitweird-width-em');
  heightEm = document.getElementById('fitweird-height-em');
  widthRem = document.getElementById('fitweird-width-rem');

  // grab the html element
  htmlTag = document.getElementsByTagName('html')[0];

  // Fill the Div
  fillVars();

  // Update the Div
  window.addEventListener('resize', fillVars);

}

var fillVars = function(){

  // set the values for the rem unit
  htmlTag.style.fontSize = '16px';
  htmlFontSize = htmlTag.style.fontSize,
  rems = window.innerWidth / parseInt(htmlFontSize);

  // rem value insertion
  widthRem.innerHTML = rems;

  widthPx.innerHTML = window.innerWidth;
  heightPx.innerHTML = window.innerHeight;

  // TODO: Calc EM size based off of body font size (i.e user zooming)
  widthEm.innerHTML = window.innerWidth / 16;
  heightEm.innerHTML = window.innerHeight / 16;
}

var setupFitWeird = function(){

  if ( !document.getElementById('fitweird-width-px') ) {
    var newDiv = document.createElement('div');
    var newContent = '<span id=fitweird-width-rem></span>rem &times; :: <span id=fitweird-width-px></span>px &times; <span id=fitweird-height-px></span>px ';
    newContent += ':: <span id=fitweird-width-em></span>em &times; <span id=fitweird-height-em></span>em';
    newDiv.style.position = 'fixed';
    newDiv.style.bottom = '0';
    newDiv.style.right = '0';
    newDiv.style.backgroundColor = 'rgba(220, 28, 28, 0.8)';
    newDiv.style.padding = '0.4em 1em';
    newDiv.style.color = '#333';
    newDiv.style.fontFamily = 'monospace';
    newDiv.style.zIndex = '9999';
    newDiv.innerHTML = newContent;
    document.body.appendChild(newDiv);
  }

};

init();

})(window);