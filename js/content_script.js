(function() {

  function onLoad() {
    // checkbox id is something like :31guests-modify
    // the number does actually change
    // it's not even a valid selector ¯\_(ツ)_/¯
    var modifyEventCheckbox = document.querySelector('input[id$=guests-modify]');
    var clickEvent = new MouseEvent("click", {
      bubbles: true,
      cancelable: true,
      view: window
    });

    if (modifyEventCheckbox && !modifyEventCheckbox.checked) {
      // activate the checkbox by mimicing click
      // needed so the checkbox stays checked, after switching tabs to e.g. to "find a time"
      modifyEventCheckbox.dispatchEvent(clickEvent)
    }
  }

  window.addEventListener('hashchange', function() {
    // delay execution, because DOM might not be ready immediately
    // after event was fired
    window.setTimeout(onLoad, 250);
  });
  onLoad();
})();
