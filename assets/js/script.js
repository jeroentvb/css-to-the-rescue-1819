'use strict'

const button = {
  light: document.getElementById('light-mode'),
  dark: document.getElementById('dark-mode')
}
let root = document.documentElement

button.light.addEventListener('click', e => {
  root.style.setProperty('--invert', 'invert(0%)')
  root.style.setProperty('--invert-color', '#fff')
  // root.style.setProperty('--background-color', '#000')
  // root.style.setProperty('--text-color', '#fff')
  // root.style.setProperty('--text-inverted', '#000')
  // root.style.setProperty('--gradient', 'linear-gradient(to bottom, #2422aa 0%,#6b0042 100%)')
})

button.dark.addEventListener('click', e => {
  root.style.setProperty('--invert', 'invert(100%)')
  root.style.setProperty('--invert-color', '#000')
  // root.style.setProperty('--background-color', '#fff')
  // root.style.setProperty('--text-color', '#000')
  // root.style.setProperty('--text-inverted', '#fff')
  // root.style.setProperty('--gradient', 'linear-gradient(to bottom, #29d1b2 0%,#00c3ff 100%)')
})
