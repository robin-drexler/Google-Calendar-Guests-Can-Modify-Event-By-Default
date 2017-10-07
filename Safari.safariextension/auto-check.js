function checkBox() {
  // checkbox id is something like :31guests-modify
  // the number does actually change
  // it's not even a valid selector ¯\_(ツ)_/¯
  var modifyEventCheckbox = document.querySelector('input[id$=guests-modify]');

  if (modifyEventCheckbox) {
    modifyEventCheckbox.checked = true;
  }
}

// This fires when the Create Event modal opens
window.addEventListener('hashchange', function() {
  checkBox();
  // retry after delay, in case DOM was slow to render
  window.setTimeout(checkBox(), 500);
});

// Attempt on initial load, in case Create Event modal was already open
checkBox();
