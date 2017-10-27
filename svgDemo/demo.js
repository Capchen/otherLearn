var contains = (function() {
  var docEl = document.documentElement;

  if (typeof docEl.compareDocumentPosition != 'undefined') {
    return function(el, b) {
      return (el.compareDocumentPosition(b) & 16) !== 0;
    };
  }
  else if (typeof docEl.contains != 'undefined') {
    return function(el, b) {
      return el !== b && el.contains(b);
    };
  }
  return function(el, b) {
    if (el === b) return false;
    while (el != b && (b = b.parentNode) != null);
    return el === b;
  };
})();
