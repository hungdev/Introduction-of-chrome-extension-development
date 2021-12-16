'use strict';

let btnOptions = document.getElementById('change-options');

function constructOptions() {
  if (btnOptions) {
    btnOptions.addEventListener('click', () => {
      chrome.tabs.create({ url: "options.html" });
    });
  }
}
constructOptions();