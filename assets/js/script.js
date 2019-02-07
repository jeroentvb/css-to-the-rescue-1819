'use strict'

const button = {
  light: document.getElementById('light-mode'),
  dark: document.getElementById('dark-mode')
}
let root = document.documentElement

button.dark.addEventListener('click', e => {
  root.style.setProperty('--background-color', '#000')
  root.style.setProperty('--text-color', '#fff')
  root.style.setProperty('--text-inverted', '#000')
})

button.light.addEventListener('click', e => {
  root.style.setProperty('--background-color', '#fff')
  root.style.setProperty('--text-color', '#000')
  root.style.setProperty('--text-inverted', '#fff')
})
