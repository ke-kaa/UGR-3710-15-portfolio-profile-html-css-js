const moreButton = document.getElementById('more-button');
const menu = document.getElementById('menu');
const buttonIcon = document.getElementById('button-icon');

const moreIcon = 'images/icons/more.png';
const closeIcon = 'images/icons/x.png';

function handleMenuToggle() {
  if (window.innerWidth >= 1024) {
    menu.classList.remove('visible');
    buttonIcon.src = moreIcon;
  }
}

moreButton.addEventListener('click', () => {
  const isMenuVisible = menu.classList.toggle('visible');
  buttonIcon.src = isMenuVisible ? closeIcon : moreIcon;
});

window.addEventListener('resize', handleMenuToggle);

handleMenuToggle();