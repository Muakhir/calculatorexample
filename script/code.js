document.addEventListener('DOMContentLoaded', function () {
    let display = document.getElementById('display');
    let buttons = document.querySelectorAll('.number, .operator');
    let calculateButton = document.querySelector('.calculate');
    let clearButton = document.querySelector('.clear');
    let dotButton = document.querySelector('.dot');

    buttons.forEach(function (button) {
      button.addEventListener('click', function () {
        display.textContent += button.textContent;
      });
    });

    calculateButton.addEventListener('click', function () {
      try {
        display.textContent = eval(display.textContent);
      } catch (error) {
        display.textContent = 'Error';
      }
    });

    clearButton.addEventListener('click', function () {
      display.textContent = '';
    });
  });
