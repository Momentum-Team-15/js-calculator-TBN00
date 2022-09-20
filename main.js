

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
