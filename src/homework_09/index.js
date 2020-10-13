const colorInput = document.getElementById('color-input');
const fontSelection = document.getElementById('font-selection');
const p = document.querySelector('div > p');

const setColorInStorage = function(e) {
  localStorage.setItem('color', e.target.value);
  document.body.style.backgroundColor = localStorage.getItem('color');
}

const setFont = function(e) {
  localStorage.setItem('font', e.target.value);
  p.style.fontFamily = localStorage.getItem('font');
}

colorInput.addEventListener("input", setColorInStorage);
fontSelection.addEventListener("input", setFont);