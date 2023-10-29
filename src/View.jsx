import React, { useState } from 'react'
import SendIcon from '@mui/icons-material/Send';
import { Button, TextField } from '@mui/material';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import PlusIcon from '@mui/material/SvgIcon';
import './view.css'
import { useDispatch, useSelector } from 'react-redux';
import { deleteTask, editTask } from './redux/todoReducer';

function View() {
    const adding = useSelector(state=>state.allfunctions)
    const dispatch=useDispatch()
    const[editclick,seteditclick]=useState(false)
    const[newval,setnewval]=useState()
    const[oldval,setoldval]=useState()

   const handledelete=(e)=>{
    // alert(e)
    dispatch(deleteTask(e))
   }


   const hadleedit=(e)=>{
   seteditclick(true)
   setoldval(e)

   }
   const handlenewvalue=(e)=>{
     setnewval(e)
   }

   const handlechanges=()=>{
  setnewval()
  setoldval()
    dispatch(editTask({oldvalue:oldval,newvalue:newval}))
    seteditclick(false)

   }
  return (
    <>
    {editclick&&
      <div className='w-100 d-flex justify-content-center mt-24 mb-10'>
    <table className='table text-center w-2/4 shadow  bg-green-900 rounded border-gray-950 text-light'>
      <tr>
        <th>Old Task Name</th>
        <th>New Task Name</th>
        <th></th>
      </tr>
      <tr>
        <td>{oldval}</td>
        <td><input onChange={(e)=>handlenewvalue(e.target.value)} type="text" placeholder='Enter New Task Name' className='w-60 bg-stone-800 tex-light border border-blue-500' /></td>
        <td><button onClick={handlechanges} className='btn btn-primary'>Save Changes</button></td>
      </tr>
      </table>
    </div>}

    <div className='mt-18 flex  justify-center w-full'>

      
         { adding.length>0?
         
        <table className='table text-center w-3/4 shadow bg-slate-700 rounded border-gray-950 text-light mt-24'>
       
         <tr>
            <th>No</th>
            <th>Tasks</th>
            <th>Edit</th>
            <th>Delete</th>
         </tr>

         
            {adding.map((tasks,index)=>(
                <tr className='pt-24'>
            <td>{index+1}</td>
            <td>{tasks}</td>
            <td><Button onClick={()=>hadleedit(tasks)} className='text-red-700' variant="contained"  endIcon={<i className="fa-solid fa-pen text-red-700"></i>}>
            Edit
      </Button></td>
            <td><Button onClick={()=>handledelete(tasks)} className='text-red-700' variant="contained"  endIcon={<DeleteForeverOutlinedIcon className='text-red-700'/>}>
            Delete
      </Button></td>
         </tr>
            ))}
                
            
        

        

        </table>
        : <p className='text-danger text-center mt-20'>No Task Added!!!</p>
    }
    
    </div>
    </>
  )
}

export default View