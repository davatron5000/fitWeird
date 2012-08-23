;(function(){
var fillVars = function(){
  var width = document.getElementById('fitweird-width');
  var height = document.getElementById('fitweird-height');

  width.innerHTML = window.outerWidth;
  height.innerHTML = window.outerHeight;
}

var fitWeird = function(){

  var newDiv = document.createElement('div');
  var newContent = '<span id=fitweird-width></span> &times; <span id=fitweird-height></span>';
  newDiv.style.position = 'fixed';
  newDiv.style.top = '0';
  newDiv.style.left = '0';
  newDiv.style.backgroundColor = '#3a3a3a';
  newDiv.style.padding = '0.4em 1em';
  newDiv.style.color = '#090';
  newDiv.style.fontFamily = 'monospace';
  newDiv.innerHTML = newContent;
  document.body.appendChild(newDiv);

  fillVars();
  window.addEventListener('resize', fillVars);
};

fitWeird();
})(window);