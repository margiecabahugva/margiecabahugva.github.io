document.getElementById('year').textContent = new Date().getFullYear();

const header = document.querySelector('.site-header');
let lastScroll = 0;
window.addEventListener('scroll', () => {
  const current = window.scrollY;
  if (current > 80 && current > lastScroll) {
    header.style.transform = 'translateY(-100%)';
  } else {
    header.style.transform = 'translateY(0)';
  }
  lastScroll = current;
}, {passive:true});
header.style.transition = 'transform .25s ease';
