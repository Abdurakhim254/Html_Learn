const box=document.querySelector('.box')

const render=(data)=>{
    box.innerHTML=data.map((item)=>
    `
    <div>
    <h1>${item}</h1>
    <button class="delete" id="${Date.now()}">Delete</button>
    <button class="edit" id="${Date.now()}">Edit</button>
    </div>
    `
    ).join("")
}


const delbtns=document.querySelectorAll('.delete')
const wditbtns=document.querySelectorAll('.edit')


const getData=async()=>{
    try {
        const res=await fetch("https://jsonplaceholder.typicode.com/users")
        
        const data=await res.json()

        console.log(data);
        
        render(data)
    } catch (error) {
        alert(error.message)
    }
}


getData()