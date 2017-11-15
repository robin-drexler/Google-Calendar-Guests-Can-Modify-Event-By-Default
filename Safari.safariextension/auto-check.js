function checkBox() {

  var modifyEventCheckbox;
  var modifyEventCheckboxStatus;

  if (modifyEventCheckbox = document.querySelector('div[aria-label$="Let guests modify the event"]')) {
    modifyEventCheckboxStatus = modifyEventCheckbox.getAttribute('aria-checked');
  }
  else if (modifyEventCheckbox = document.querySelector('input[id$=guests-modify]')) { // We have the old calendar UI
    modifyEventCheckboxStatus = modifyEventCheckbox.checked;
  }

  var clickEvent = new MouseEvent("click", {
    bubbles: true,
    cancelable: true,
    view: window
  });

  if (modifyEventCheckbox && (modifyEventCheckboxStatus == false || modifyEventCheckboxStatus == 'false')) {
    modifyEventCheckbox.dispatchEvent(clickEvent);
  }
}

// Poll for URL changes
var pageUrl = window.location.href;
setInterval(function()
{
  if (pageUrl != window.location.href) {
    pageUrl = window.location.href;

    checkBox();
    // Retry after delay, in case DOM was slow to render
    window.setTimeout(checkBox(), 500);
  }
}, 500);

// Attempt on initial load, in case Create Event modal was already open
checkBox();