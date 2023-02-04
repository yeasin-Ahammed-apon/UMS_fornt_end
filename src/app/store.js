import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "./Counter/CounterSlice";
import  TodoReducer  from "./Counter/Todos";

const store  = configureStore({
    reducer:{
        counter: CounterReducer,
        todos: TodoReducer
    }
})
export default store;