const colors = ["blue", "red", "yellow", "#0000FF"];

const btn = document.getElementById("btn");
const color = document.querySelector("color");

btn.addEventListener("click", function() {
const getNumber = getAllNumbers();
console.log(getNumber);

    document.body.style.backgroundColor = colors[getNumber];

})

function getAllNumbers() {
return Math.floor(Math.random() * colors.length);
}