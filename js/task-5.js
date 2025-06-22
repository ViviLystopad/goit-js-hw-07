function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const buttonChange = document.querySelector('.change-color');
const spanColor = document.querySelector('.color');
const body = document.body;
buttonChange.addEventListener('click', colorClick);
function colorClick() {
  const randomColor = getRandomHexColor();
  body.style.background = randomColor;
  spanColor.textContent = randomColor;
}