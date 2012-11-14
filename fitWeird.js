;(function(){

// ==================================
// Defined Global Variables
// ==================================

var widthPx,
    heightPx,
    widthEm,
    heightEm,
    widthRem,
    heightRem,
    htmlTag,
    bodyTag,
    htmlFontSize,
    bodyFontSize,
    rems;


// ==================================
// Initialize fitWeird
// ==================================

var init = function(){

  // Inject the Div
  setupFitWeird();

  // Gather elements to update
  widthPx   = document.getElementById('fitweird-width-px');
  heightPx  = document.getElementById('fitweird-height-px');
  widthEm   = document.getElementById('fitweird-width-em');
  heightEm  = document.getElementById('fitweird-height-em');
  widthRem  = document.getElementById('fitweird-width-rem');
  heightRem = document.getElementById('fitweird-height-rem');

  // Grab the html element tag
  htmlTag = document.getElementsByTagName('html')[0];

  // Grab the body element tag
  bodyTag = document.getElementsByTagName('body')[0];

  // Fill the Div
  fillVars();

  // Update the Div
  window.addEventListener('resize', fillVars);
}


// ==================================
// FillVars Function
// ==================================

var fillVars = function(){

  // Grab the default computed value of the root element (i.e. html)
  htmlFontSize = window.getComputedStyle(htmlTag).getPropertyValue('font-size');

  // Grab the body element tags computed font-size value
  bodyFontSize = window.getComputedStyle(bodyTag).getPropertyValue('font-size');

  // filter the root elements computed value
  // and divide it by the current window innerWidth
  remsWidth    = window.innerWidth / parseInt(htmlFontSize);
  remsHeight   = window.innerHeight / parseInt(htmlFontSize);

  // rem value insertion
  widthRem.innerHTML  = remsWidth;
  heightRem.innerHTML = remsHeight;

  // pixel value insertion
  widthPx.innerHTML   = window.innerWidth;
  heightPx.innerHTML  = window.innerHeight;

  // EM size based off of body font size (i.e user zooming)
  widthEm.innerHTML   = window.innerWidth / parseInt(bodyFontSize);
  heightEm.innerHTML  = window.innerHeight / parseInt(bodyFontSize);
}


// ==================================
// fitWeird Setup Call
// ==================================

var setupFitWeird = function(){

  if ( !document.getElementById('fitweird-width-px') ) {
    var newDiv                   = document.createElement('div');
    var newContent               = 'Rems = <span id=fitweird-width-rem></span>rem &times; <span id=fitweird-height-rem></span>rem &#10033; Pixel = <span id=fitweird-width-px></span>px &times; <span id=fitweird-height-px></span>px ';
    newContent                   += '&#10033; Ems = <span id=fitweird-width-em></span>em &times; <span id=fitweird-height-em></span>em';
    newDiv.style.position        = 'fixed';
    newDiv.style.width           = '100%';
    newDiv.style.bottom          = '0';
    newDiv.style.right           = '0';
    newDiv.style.backgroundColor = 'rgba(220, 28, 28, 0.75)';
    newDiv.style.textAlign       = 'center';
    newDiv.style.color           = '#333';
    newDiv.style.fontFamily      = 'monospace';
    newDiv.style.fontSize        = '1rem';
    newDiv.style.zIndex          = '9999';
    newDiv.innerHTML             = newContent;
    document.body.appendChild(newDiv);
  }
};

init();

})(window);