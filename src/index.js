import foodServiceTmp from './tamplate/foodServiceTmp.hbs'
import menu from './menu.json'
import { Theme } from './js/constants.js';
import './sass/main.scss';
import { log } from 'debug';

const muneEl = document.querySelector('.js-menu')
muneEl.innerHTML = foodServiceTmp(menu)

document.body.classList.add(Theme.LIGHT)

const inputCheckboxEl = document.querySelector('.theme-switch__toggle')
inputCheckboxEl.addEventListener('change', onSwitchCheckbox)

function onSwitchCheckbox() {
  const inputChecked = inputCheckboxEl.checked

  if (inputChecked) {
    document.body.classList.remove(Theme.LIGHT)
    document.body.classList.add(Theme.DARK)

    localStorage.setItem('theme', Theme.DARK)
  } else {
    document.body.classList.remove(Theme.DARK)
    document.body.classList.add(Theme.LIGHT)

    localStorage.setItem('theme', Theme.LIGHT)
  }


}
const setLocalStorageValue = localStorage.getItem('theme')

if (setLocalStorageValue === Theme.DARK) {
  inputCheckboxEl.setAttribute('checked', 'checked')
  document.body.classList.remove(Theme.LIGHT)
  document.body.classList.add(Theme.DARK)
}