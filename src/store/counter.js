import { createSlice } from "@reduxjs/toolkit";

const initialCounterState = {counter : 0, showCounter: true};
const counterSlice = createSlice({
    name: 'counter',
    initialState: initialCounterState,
    reducers: {
        increment(state) {
            state.counter++;
        },
        decrement(state) {
            state.counter--;
        },
        increase(state, action) {
            state.counter = state.counter+action.payload;
        },
        toggleCounter(state) {
            state.showCounter = !state.showCounter;
        }
    }
});

//In Redux
// const counterReducer = (state = initialState, action) => {
//     if(action.type === 'increment') {
//         return {
//             counter: state.counter + 1,
//             showCounter: state.showCounter
//         };
//     }
//     if(action.type === 'increase') {
//         return {
//             counter: state.counter + action.value,
//             showCounter: state.showCounter
//         };
//     }
//     if(action.type === 'decrement') {
//         return {
//             counter: state.counter - 1,
//             showCounter: state.showCounter
//         };
//     }
//     if(action.type === 'toggle') {
//         return {
//             counter: state.counter,
//             showCounter: !state.showCounter
//         };
//     }
//     return state;
// };

export default counterSlice;
export const counterActions = counterSlice.actions;