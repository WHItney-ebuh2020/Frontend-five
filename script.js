const colors = ["blue", "red", "yellow", "#0000FF"];

const btn = document.getElementById("btn");
const color = document.querySelector("color");

btn.addEventListener("click", function() { 
    const getNumber = getAllNumbers();
    console.log(getNumber);

    document.body.style.backgroundColor = colors[getNumber];
    color.textContent = colors[randomNumber];
})

function getAllNumbers() {
    return Math.random() * colors.length;
}