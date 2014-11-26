(function() {
  function onLoad() {
    // checkbox id is something like :31guests-modify
    // the number does actually change
    // it's not even a valid selector ¯\_(ツ)_/¯
    var modifyEventCheckbox = document.querySelector('input[id$=guests-modify]');

    if (modifyEventCheckbox) {
      modifyEventCheckbox.checked = true;
    }
  }

  window.addEventListener('hashchange', function() {
    // delay execution, because DOM might not be ready immediately
    // after event was fired
    window.setTimeout(onLoad, 250);
  });
  onLoad();
})();
