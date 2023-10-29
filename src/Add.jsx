import { Button } from '@mui/material'
import React, { useState } from 'react'
import SendIcon from '@mui/icons-material/Send';
import { useDispatch, useSelector } from 'react-redux';
import { addTask } from './redux/todoReducer';
function Add() {
    const[add,setadd]=useState([])
    const dispatch=useDispatch()

    const handleadd=(e)=>{
        
        setadd(e)
    }
    const onbutoncl=()=>{
      if(add!=""){
        dispatch(addTask(add))
      }
      else{
        alert("Please Enter Valid Task Name")
      }
      }
    
   
  return (
    <div className='justify-center mt-40 flex w-full'>
       <div className='justify-center flex w-full space-x-6 '>
       <input type="text" className='w-80 h-12 border' onChange={(e)=>handleadd(e.target.value)} placeholder='Add a Task' />
       <Button className='' variant="contained" onClick={onbutoncl} endIcon={<SendIcon />}>
        Add
      </Button>
      
       </div>
    </div>
    
  )
}

export default Add