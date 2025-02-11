const box = document.querySelector(".box");

const buttons = document.querySelector("form");

const inputs = document.querySelectorAll(".input");

let users = [];
let obj = {};

const render = () => {
  box.innerHTML = users
    .map((item) => 
      `<div class="box_title">
    <h1 class="name">${item.firstname}</h1>
    <h1 class="lastname">${item.lastname}</h1>
    <button id="${item.id}" class="delete">Delete</button>
    <button id="${item.id}" class="edit">Edit</button>
  </div>`
    )
    .join("");
};


buttons.addEventListener("submit", (e) => {
  e.preventDefault();

  for (let input of inputs) {
    obj[input.name] = input.value;
    input.value = "";
  }

  users.push({...obj,id:Date.now()});

  render();
});


box.addEventListener('click',(e)=>{
    e.preventDefault()
   if(e.target.className=='delete'){
    users=users.filter((item)=>item.id!=e.target.id)
   }else if(e.target.className=='edit'){
    const name=prompt("Enter your name")
    const lastname=prompt("Enter your lastaname")
    for(let i=0;i<users.length;i++){
        if(users[i].id==e.target.id){
            users[i].firstname=name
            users[i].lastname=lastname
        }
    }
   }

   render()
})