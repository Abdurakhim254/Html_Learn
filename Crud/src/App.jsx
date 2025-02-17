import { useState } from 'react';
import { nanoid } from 'nanoid';
import './App.css';

function App() {
  const [inputValue, setInputValue] = useState([]);
  const [currentText, setCurrentText] = useState("");


  const deleteData = (id) => {
    setInputValue(inputValue.filter((item) => item.id !== id));
  };

  const editData = (id) => {
    const text=prompt("Enter your text");
    setInputValue(inputValue.map((item) => (item.id === id ? { ...item, item: text } : item)));
  };

  return (
    <>
      <div>
        <input 
          type="text" 
          placeholder="Type Something" 
          value={currentText} 
          onChange={(e) => setCurrentText(e.target.value)}
        />
        <button 
          onClick={() => {
            if (currentText.trim() === "") return;
            setInputValue([...inputValue, { id: nanoid(), item: currentText }]);
            setCurrentText("");
          }}
        >
          Press
        </button>

        <ol className='ollist'>
          {inputValue.map((item) => (

            <li key={item.id} className='list'>
              <div>{item.item}</div>
              <button  onClick={()=>deleteData(item.id)}>Delete</button>
              <button  onClick={()=>editData(item.id)}>Edit</button>
              </li>
            ))}
        </ol>
      </div>
    </>
  );
}

export default App;
