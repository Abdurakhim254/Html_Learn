const box=document.querySelector('.box')

const button=document.querySelector('.buttons')

const input=document.querySelector('.inputs')

const render=(data)=>{
    box.innerHTML=data.map((item)=>
    `
    <div>
    <h1>${item.name}</h1>
    <button class="delete" id="${item.id}">Delete</button>
    <button class="edit" id="${item.id}">Edit</button>
    </div>
    `
    ).join("")
}


const getData=async()=>{
    try {
        const res=await fetch("http://localhost:3600/user",{
            method:"GET"
        })
        
        const data=await res.json()

        render(data)
    } catch (error) {
        alert(error.message)
    }
}



const deletedata=async(id)=>{
    try {
        const res=await fetch(`http://localhost:3600/user/${id}`,{
            method:"DELETE"
        })
                
    } catch (error) {
        alert(error.message)
    }
}

const updatedata=async(data)=>{
    try {
        const res=await fetch(`http://localhost:3600/user/${data.id}`,{
            method:"PUT",
            headers:{
                "Content-Type": "application/json"
            },
            body:JSON.stringify({name:data.name,id:data.id})
        })
        
        
    } catch (error) {
        alert(error.message)
    }
}

const createdata=async(data)=>{
    try {
        console.log(data);
        const res=await fetch("http://localhost:3600/user",{
            method:"POST",
            headers: {
                "Content-Type": "application/json"
            },
            body:JSON.stringify({name:data})
        })
        return res
    } catch (error) {
        alert(error.message)
    }
}


button.addEventListener('click',(e)=>{
    e.preventDefault()
    createdata(input.value)
})


box.addEventListener('click',async(e)=>{
    e.preventDefault()
    if(e.target.className=='delete'){
        deletedata(e.target.id)
    }else if(e.target.className=='edit'){
        const name=prompt("Type something")
        const id=e.target.id
        updatedata({id,name})
    }
})




getData()
