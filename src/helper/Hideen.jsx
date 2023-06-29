import {createSlice} from '@reduxjs/toolkit'

const hiddenSlice = createSlice({
    name:'hiddenall',
    initialState:{hidden:false},
    reducers:{
        changehidden:(state,actions)=>{
            state.hidden = actions.payload
        }
    }
    })

export const {changehidden} = hiddenSlice.actions
export default hiddenSlice.reducer