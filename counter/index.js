document.addEventListener("DOMContentLoaded", function() {
    const body = document.body;
    const divContainer = document.createElement('div') 
    divContainer.classList.add("div-container")
    body.appendChild(divContainer)
    
    const paragraph = document.createElement("p")
    paragraph.classList.add("para1")
    divContainer.appendChild(paragraph)
    paragraph.innerText = `Count: `
    
    const span =  document.createElement("span")
    paragraph.appendChild(span)
    span.classList = "span"
    span.innerText=""
    
    const div = document.createElement("div")
    divContainer.appendChild(div)
    div.classList.add("div-buttons")
    
    const button2 = document.createElement("button")
    button2.classList.add("button-minus-counter")
    div.appendChild(button2)
    button2.innerText = `- Count`
    
        const button3 = document.createElement("button")
        button3.classList.add("button-plus-counter")
        div.appendChild(button3)
        button3.innerText = `Reset`

    const button = document.createElement("button")
    button.classList.add("button-plus-counter")
    div.appendChild(button)
    button.innerText = `+ Count`
       
          
       
    button.addEventListener("click", increaseCount)
    button2.addEventListener("click", decreaseCount)
    button3.addEventListener("click", resetCount)
})

let count = 0;

function increaseCount() {
    count ++;
    const span = document.querySelector('.span')
    span.innerText = count
}

const decreaseCount= () => {
    count --;
    const span = document.querySelector('.span')
    span.innerText = count
}

const resetCount = () => {
    count = 0;
    const span = document.querySelector('.span')
    span.innerText = count
}