import React, { useEffect, useState } from 'react'
import ToDo from './components/ToDo'
import { addToDo, getAllToDo } from './utils/HandleApi';

export default function App() {
  const [toDo, setToDo] = useState([]);

  useEffect(() => {
    getAllToDo(setToDo)
  }, [])

  
  
  return (
    <div className='App'>
      <div className='container'>
        <h1> TODO APP - TRIAL</h1>
        <div className='top'>
         <input 
         type="text"
          placeholder='enter new ToDo'
           />

        <div className='add' onClick={addToDo}>Add</div>
        </div>

        <div className='list'>
        
        {toDo.map((item) => <ToDo key={item._id} text={item.text} />)}

        </div>

      </div>
    </div>
  )
}
