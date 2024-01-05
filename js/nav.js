const head_nav_tag = document.getElementById('head_nav_tag')
const head_nav = document.querySelector('.head_nav')

head_nav_tag.onclick = () => {
  head_nav.classList.toggle('change')
}

anime({
  loop : true,
  targets : '.head_nav h1 i',
  rotate : '1turn',
  easing : 'linear',
  duration : 2000
})