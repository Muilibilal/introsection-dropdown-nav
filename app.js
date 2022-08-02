const dropEl = document.querySelector('.down1');
const dropEl2 = document.querySelector('.down2');
const featureParent = document.querySelector('.feature-parent')
const companyParent = document.querySelector('.company-parent')
const ham = document.querySelector('.ham')
const close = document.querySelector('.close')
const sideMenu = document.querySelector('.side-menu')

featureParent.addEventListener('click', fdrop);

function fdrop() {
  dropEl.classList.toggle('dropdown')
}

companyParent.addEventListener('click', cdrop);

function cdrop() {
  dropEl2.classList.toggle('dropdown')
}

ham.addEventListener("click", open)

function open() {
  sideMenu.style.display = 'block'
}

close.addEventListener("click", closed)

function closed() {
  sideMenu.style.display = 'none'
}
  
