import React from "react";
import { request } from "../config/request";


const deleteData = (id,func) => {
    request.delete(`/todos/${id}`).then(res=>func())
}


const editData = (id,func) => {
    const title=prompt("Enter title")
    request.put(`/todos/${id}`,{title}).then(res=>func())
}

export const Card = ({ id, title,setData }) => {
    return (
        <>
            <div>
            <h1 id={id}>{title}</h1>
            <button id={id} onClick={()=>{deleteData(id,setData)}} >Delete</button>
            <button id={id} onClick={()=>{editData(id,setData)}}>Edit</button>
            </div>
        </>
    )
}