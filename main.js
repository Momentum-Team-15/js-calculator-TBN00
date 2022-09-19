let squares = document.querySelectorAll(".square");

let frame = document.querySelector("#input");

for (let square of squares) {
    square.addEventListener("click", (event) => {
        square.classList.remove("blue");
        square.classList.add("pressed");

    });
}


