import {createSlice} from '@reduxjs/toolkit'
import Moviedetails from './Moviedetails'


const bannerSlice=createSlice({
    name:'movie',
    initialState:{value:{movie:Moviedetails}},
    reducers:{
        changebanner:(state,actions)=>{
            state.value=actions.payload
        }
    }
})

export const {changebanner} = bannerSlice.actions;
export default bannerSlice.reducer;