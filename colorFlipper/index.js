document.addEventListener("DOMContentLoaded", function () {
  const container = document.body;
  const div = document.createElement("div");
  div.classList.add("div-container");

  const paragraph = document.createElement("p");
  paragraph.innerText = "Not to be changed";
  paragraph.classList.add("para");
  container.appendChild(div);

  const button = document.createElement("button");
  div.appendChild(paragraph);
  div.appendChild(button);
  button.innerText = "Change Color";
  button.classList.add("button-color");

  const paragraph2 = document.createElement("p");
  div.appendChild(paragraph2);
  paragraph2.innerText = "Text to be changed ";
  paragraph2.classList.add("para2");

  const button2 = document.createElement("button");
  button2.classList.add("button-background-color");
  div.appendChild(button2);
  button2.innerText = "Change Background";

  button.addEventListener("click", colorToggle);
  button2.addEventListener("click", backgroundColorToggle);
});

function createRandomNumber() {
  // return numbers from 0 to 255
  let randomNumber = Math.floor(Math.random() * 256);
  
  return randomNumber;
}

const createRandomColor = () => {
  let red = createRandomNumber();
  let green = createRandomNumber();
  let blue = createRandomNumber();
  let randomColor = `rgb(${red},${green},${blue})`
  console.log(randomColor);
  return randomColor 
};

let isColorToggle1 = false;
let isColorToggle2 = false;
let isBackgroundColorToggle = false;

const colorToggle = () => {
  const paragraph2 = document.querySelector(".para2");
  const paragraph = document.querySelector(".para")
  
  paragraph2.style.color = isColorToggle1
    ? `${createRandomColor()}`
    : `${createRandomColor()}`;
  isColorToggle1 = !isColorToggle1;

  paragraph.style.color = isColorToggle2
  ? `${createRandomColor()}`
  : `${createRandomColor()}`
  isColorToggle2 = !isColorToggle2
};

const backgroundColorToggle = () => {
  const div = document.querySelector(".div-container");
  createRandomColor()

  div.style.backgroundColor = isBackgroundColorToggle
    ? `${createRandomColor()}`
    : `${createRandomColor()}`;
  isBackgroundColorToggle = !isBackgroundColorToggle;
};
