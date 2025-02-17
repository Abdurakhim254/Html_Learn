import { request } from './config/request'
import React from 'react'
import { Card } from './components/card'

function App() {

  const [users, Setusers] = React.useState([])

  const [inputtext,SetCurrentText]=React.useState("")

  const setData = () => {
    request.get('/todos')
    .then(res => Setusers(res.data))
  }

  const createData = (title) => {
    request.post('/todos',{title})
     setData()
  }


  React.useEffect(setData,[])
  return (
    <>
      <div>
        <input type="text" placeholder='Enter Something' value={inputtext} onChange={(e) => SetCurrentText(e.target.value)} />
        <button onClick={()=>{createData(inputtext.trim("")),SetCurrentText("")}}>Press</button>
      </div>
      {users.map(item => <Card title={item.title} key={item.id} id={item.id} setData={setData}/>)}
    </>
  )
}

export default App
