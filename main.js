// const {getItem,setItem}=require('./localstorage.js')

// import { forIn } from "lodash"


const getItem=(value)=>{
    try {
        const localdatas=localStorage.getItem(value)
        return JSON.parse(localdatas)
    } catch (error) {
        return undefined
    }
}


const setItem=(key,value)=>{
    localStorage.setItem(key,JSON.stringify(value))
}




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
    <button class="save_local" id="${item.id}">Save btn</button>
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


const getoneData=async(id)=>{
    try {
        const res=await fetch(`http://localhost:3600/user/${id}`,{
            method:"GET"
        })
        
        const data=await res.json()
        return data
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
        const res=await fetch("http://localhost:3600/user",{
            method:"POST",
            headers: {
                "Content-Type": "application/json"
            },
            body:JSON.stringify({name:data})
        })

        

    } catch (error) {
        alert(error.message)
    }
}


button.addEventListener('click',(e)=>{
    createdata(input.value)
    e.preventDefault()
})


box.addEventListener('click',async(e)=>{
    e.preventDefault()
    const classlists=['delete','edit','save_local']

    const id=e.target.id
    if(classlists.includes(e.target.className)){
         if(e.target.className=='delete'){
        deletedata(e.target.id)
    }else if(e.target.className=='edit'){
        const name=prompt("Type something")
        const id=e.target.id
        updatedata({id,name})   
    }else{
        const localdatas=getItem('user')||[]

        const data=await getoneData(id)
        
        const onedata=localdatas.find((item)=>item.id==id)

        if(!onedata){
            setItem('user',[...localdatas,data])
        }

    }
    }

})

getData()
