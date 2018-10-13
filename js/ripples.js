var ripples = document.querySelectorAll(‘[ripple]’),
  rippleContainer,
  ripple;

for (i = 0, len = ripples.length; i < len; i++) {
  ripple                    = ripples[i];
  rippleContainer           = document.createElement('div');
  rippleContainer.className = 'ripple--container';
  ripple.addEventListener('mousedown', addRipple);
  ripple.addEventListener('mouseup'  , debounce(cleanUp, 2000));
  ripple.rippleContainer    = rippleContainer;
  ripple.appendChild(rippleContainer);
}

addRipple = function(e) {
  var ripple = this,
    size     = ripple.offsetWidth,
    pos      = ripple.getBoundingClientRect(),
    rippler  = document.createElement('span'),
    x        = e.pageX - pos.left - (size / 2),
    y        = e.pageY - pos.top  - (size / 2),
    style    = 'top:' + y + 'px; left:' + x + 'px; height: '
              + size + 'px; width: ' + size + 'px;';
  ripple.rippleContainer.appendChild(rippler);
  rippler.setAttribute(‘style’, style);
};

cleanUp = function() {
  var container = this.rippleContainer;
  while (this.rippleContainer.firstChild) {
    container.removeChild(container.firstChild);
  }
};
