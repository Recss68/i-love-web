const expandButton = document.querySelector('nav')
expandButton.addEventListener('click', expand)

function expand () {
  document.body.classList.toggle('expand')
}
