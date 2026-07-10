const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let index = Math.floor(Math.random() * (letters.length - 3));

const container = document.getElementById("letters");

for(let i = 0; i < 4; i++){
    let div = document.createElement("div");
    div.className = "box";
    div.innerText = letters[index + i];
    container.appendChild(div);
}