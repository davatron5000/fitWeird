;(function(window, document, undefined){

var widthPx, heightPx, widthEm, heightEm;

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

};

// Put the Resize on "Chill Mode"
var debounce = function(func, wait, immediate){
  var timeout;
  return function() {
    var context = this, args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};

var fillVars = debounce(function(){

  widthPx.innerHTML = window.innerWidth;
  heightPx.innerHTML = window.innerHeight;

  // TODO: Calc EM size based off of body font size (i.e user zooming)
  widthEm.innerHTML = window.innerWidth / 16;
  heightEm.innerHTML = window.innerHeight / 16;

}, 100);

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

}(window, document));