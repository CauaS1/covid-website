// Right Header Script
const activeAside = document.querySelector('aside');
const closeButton = document.querySelector('.close-aside-button');
const openButton = document.querySelector('.open-header-button');

openButton.addEventListener('click', () => {
  activeAside.style.display = "flex";
})

closeButton.addEventListener('click', () => {
  activeAside.style.display = "none";
})






