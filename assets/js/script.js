'use strict'

const button = {
  light: document.getElementById('light-mode'),
  dark: document.getElementById('dark-mode')
}
let root = document.documentElement

button.light.addEventListener('click', e => {
  root.style.setProperty('--invert', 'invert(0%)')
  root.style.setProperty('--invert-color', '#fff')
})

button.dark.addEventListener('click', e => {
  root.style.setProperty('--invert', 'invert(100%)')
  root.style.setProperty('--invert-color', '#000')
})
