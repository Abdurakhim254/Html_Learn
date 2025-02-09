const buttonsContainer = document.querySelector(".buttons");



// function add() {
//     const button = document.createElement("button");
//     button.textContent = "Press";
//     button.style.backgroundColor = "aqua";
//     button.style.color = "red";
//     button.style.borderRadius = "10px";
//     button.onclick = add; // Make new buttons also clickable
//     buttonsContainer.appendChild(button);
// }

let count=1

function add(){
    const label=document.querySelector('label')
    label.textContent=count
    count++

    
}

function reset(){
    count=0
    const label=document.querySelector('label')
    label.textContent=count
}