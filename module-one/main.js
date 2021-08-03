function AbraOMenu() {
  document
  .querySelector('.mobile-menu-nav')
  .classList
  .add('visible')
}

function FecheOMenu() {
  document
  .querySelector('.mobile-menu-nav')
  .classList
  .remove('visible')
}

function ToggleMenu() {
  if(document.querySelector('.mobile-menu-nav').classList.contains('visible') == true) {
    FecheOMenu()
  } else {
    AbraOMenu()
  }
}