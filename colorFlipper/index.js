document.addEventListener("DOMContentLoaded", function () {
  const body = document.body;
  const divContainer = document.createElement("div");
  const div = document.createElement("div");
  const para1 = document.createElement("p");
  const para2 = document.createElement("p");
  const button = document.createElement("button");

  para1.innerText = "Paragraph One";
  para2.innerText = "Paragraph Two";
  button.innerText = "Change Colors";

  divContainer.classList.add("div-container");
  para1.classList.add("para1");
  para2.classList.add("para2");
  button.classList.add("button-color");

  body.appendChild(divContainer);
  divContainer.appendChild(div);
  divContainer.appendChild(para1);
  divContainer.appendChild(para2);
  divContainer.appendChild(button);

  button.addEventListener("click", toggleColors);
});

// create random number from 0 to 255
const createRandomNumber = () => {
  let randomNumber = Math.floor(Math.random() * 256);
  return randomNumber;
};

// create random color

const createRandomColor = () => {
  // rgb;
  let red = createRandomNumber();
  let green = createRandomNumber();
  let blue = createRandomNumber();
  let randomColor = `rgb(${red},${green},${blue})`
  return randomColor
};

let isColorToggle = false;
let isColorToggle2 = false;
let isColorToggle3 = false;
let isBackgroundColorToggle = false;
let isBackgroundColorToggle2 = false;



const toggleColors = () => {
  const para1 = document.querySelector(".para1") 
  const para2 = document.querySelector(".para2") 
  const button = document.querySelector(".button-color") 
  const divContainer = document.querySelector(".div-container") 

  para1.style.color = isColorToggle
  ? `${createRandomColor()}`
  : `${createRandomColor()}`
  isColorToggle = !isColorToggle

  para2.style.color = isColorToggle2
  ? `${createRandomColor()}`
  : `${createRandomColor()}`
  isColorToggle2 = !isColorToggle2

  button.style.color = isColorToggle3
  ? `${createRandomColor()}`
  : `${createRandomColor()}`
  isColorToggle3 = !isColorToggle3

  divContainer.style.backgroundColor = isBackgroundColorToggle
  ? `${createRandomColor()}`
  : `${createRandomColor()}`
  isBackgroundColorToggle = !isBackgroundColorToggle



  button.style.backgroundColor = isBackgroundColorToggle2
  ? `${createRandomColor()}`
  : `${createRandomColor()}`
  isBackgroundColorToggle2 = !isBackgroundColorToggle2




}

