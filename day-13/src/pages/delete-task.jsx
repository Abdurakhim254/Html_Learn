import React from "react";
import { useParams } from "react-router-dom";
import { todoAction } from "../context/todo-context/todo-reducer";
import {TodoContextProvider } from "../context/todo-context/todo-context";
import { useNavigate } from "react-router-dom";


export const DeleteTask = () => {

    const {id}=useParams()

    const navigate = useNavigate();

    const { dispatch } = React.useContext(TodoContextProvider);



    dispatch({
        type:todoAction.DELETE_TODO,
        value:{id}
    })



    return (<div>Task Deleted</div>);

    setTimeout(() => {
        navigate("/");
    }, 2000);
}