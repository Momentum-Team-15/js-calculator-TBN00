

const display = document.querySelector("#display")


let squares = document.querySelectorAll(".square")
for (let square of squares) {
    square.addEventListener("mousedown", (event) => {
        square.classList.remove("blue");
        square.classList.add("pressed");
    });
    square.addEventListener("mouseup", (event) => {
        square.classList.add("blue");
        square.classList.remove("pressed");
    });

    square.addEventListener("click", (event) => {
        console.log(square.innerText)

        let newElement = document.createElement('div')
        let text = document.createTextNode(square.innerText)
        newElement.appendChild(text)
        display.appendChild(newElement)
    })
}

let equals = document.querySelector("#equal")
equals.addEventListener("mousedown", (event) => {
    equals.classList.remove("blue");
    equals.classList.add("pressed");
});
equals.addEventListener("mouseup", (event) => {
    equals.classList.add("blue");
    equals.classList.remove("pressed");
});
equals.addEventListener("click", (event) => {
    display.innerText = eval(display.innerText);
});

let clear = document.querySelector("#clear")
clear.addEventListener("mousedown", (event) => {
    clear.classList.remove("blue");
    clear.classList.add("pressed");
});
clear.addEventListener("mouseup", (event) => {
    clear.classList.add("blue");
    clear.classList.remove("pressed");
});
clear.addEventListener("click", (event) => {
    display.innerText = "";
});
