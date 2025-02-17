import { useState } from 'react'
import './App.css'
import { request } from './config/request'
import React from 'react'

function App() {
  const [count, setCount] = useState(0)

  const [users,Setusers]=React.useState([])

  React.useEffect(() => {
    request.get('/todos').then(res=>{
      setUsers(res.data)
    })
  })
  return (
    <>
    {users.map(item=><h1>{item.title}</h1>)}
    </>
  )
}

export default App
