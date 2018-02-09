import '../css/style.scss'

const btn = document.querySelector('button')
function doYiki () {
  const div = document.querySelector('.content')
  div.textContent = 'yikiii 🔥'
  this.textContent = 'done!'
}
btn.addEventListener('click', doYiki)
