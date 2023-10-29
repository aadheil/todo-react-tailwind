import { configureStore } from "@reduxjs/toolkit";
import allfunctions from './todoReducer'
const store=configureStore({
    reducer:{
   allfunctions
    }
})

export default store