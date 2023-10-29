import { createSlice } from "@reduxjs/toolkit";

const todoReducer=createSlice({
    name:'todo',
    initialState:[
       
    ],
    reducers:{
        addTask:(state,action)=>{
            state.push(action.payload)
            
        },
        deleteTask:(state,action)=>{
            
            return state.filter(item=>item!=action.payload)
            
        },
        editTask:(state,action)=>{

            var oldd=action.payload.oldvalue
            var index = state.indexOf(oldd);
            var neww=action.payload.newvalue
            // alert(action.payload.oldvalue)
            // alert(action.payload.newvalue)
           state[index]=neww
            // state[old]=action.payload.newvalue
        }
    }
})

export const{addTask,deleteTask,editTask}=todoReducer.actions
export default todoReducer.reducer