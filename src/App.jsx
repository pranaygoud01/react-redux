import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const App = () => {
  const counter=useSelector(store=>store.counter);
  const privacy=useSelector(store=>store.privacy);
  const dispatch=useDispatch();
  const inputElement=useRef();
  const handleIncrement=()=>{
    dispatch({type:"INCREMENT"});
  }
  const handleDecrement=()=>{
     dispatch({type:"DECREMENT"});
  }
  const handleAdd=()=>{
    dispatch({type:"ADD",payload:{
      num:inputElement.current.value,
    }})
    inputElement.current.value=""
  }
  const handleSub=()=>{
    dispatch({type:"SUB",payload:{
      num:inputElement.current.value,
    }})
    inputElement.current.value=""
  }
  const handlePrivacy=()=>{
    dispatch({type:"PRIVACY"})
  }
  return (
    <center className='w-full h-[100vh] flex flex-col gap-5 bg-neutral-800 text-white justify-center items-center'>
      <h1 className='font-bold text-2xl'>Counter</h1>
      {privacy?<p className='font-light text-red-500'>Counter is Private</p>:<p className='font-light'>Counter current Value: {counter}</p>}
      <div className='flex gap-4  '>
      <button className='font-bold text-xs px-12 py-2 bg-green-500 rounded-md text-white' onClick={handleIncrement}>+1</button>
      <button className='font-bold text-xs px-12 py-2 bg-red-500 rounded-md text-white' onClick={handleDecrement}>-1</button>
      </div>
      <div className='flex gap-4 flex-col  '>
     <input type='text' className='rounded-md bg-transparent border text-xs p-3' ref={inputElement} placeholder='Enter any number'/>
     <div className='flex gap-6'>
      <button className='font-bold text-xs px-10 py-2 bg-yellow-500 rounded-md text-white' onClick={handleAdd}>Add</button>
      <button className='font-bold text-xs px-10 py-2 bg-blue-500 rounded-md text-white' onClick={handleSub}>Sub</button>
      </div>
      </div>
      <button className='font-bold text-xs px-10 py-2 bg-orange-600 rounded-md text-white' onClick={handlePrivacy}>Privacy Policy</button>
    </center>
  )
}

export default App