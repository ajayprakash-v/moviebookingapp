import {createSlice} from '@reduxjs/toolkit'


const changemovieSlice = createSlice({
    name:'list',
    initialState:{value:{clickedmovie:1}},
    reducers:{
        changemovie:(state,actions)=>{
            state.value = actions.payload
        }
    }
})
export const {changemovie} = changemovieSlice.actions
export default changemovieSlice.reducer