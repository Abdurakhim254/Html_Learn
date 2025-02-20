import React from "react";
import { useParams } from "react-router-dom";
import { todoAction } from "../context/todo-context/todo-reducer";
import {TodoContextProvider } from "../context/todo-context/todo-context";


export const DeleteTask = () => {

    const {id}=useParams()


    const { dispatch } = React.useContext(TodoContextProvider);



    dispatch({
        type:todoAction.DELETE_TODO,
        value:{id}
    })



    return (<div>Task Deleted</div>);
}