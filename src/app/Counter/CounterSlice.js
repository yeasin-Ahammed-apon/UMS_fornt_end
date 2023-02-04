import { createSlice } from "@reduxjs/toolkit";

export const CounterSlice  = createSlice({
    name:"counter",
    initialState:{counter1:0, counter2:0},
    reducers:{
        increment: (state) =>{
            state.counter1 = state.counter1+1;
            state.counter2 = state.counter2+2;
        },
        deccrement: (state) =>{
            state.counter1 = state.counter1-1;
            state.counter2 = state.counter2-2;
        },
        incrementByValue: (state,actions) =>{
            state.counter1 = state.counter1+actions.payload;
            state.counter2 = state.counter2+actions.payload;
        },
        reset: (state) =>{
            state.counter1 = 0;
            state.counter2 = 0;
        }
    }
})
export const {increment,deccrement,incrementByValue,reset}=CounterSlice.actions;
export default CounterSlice.reducer;