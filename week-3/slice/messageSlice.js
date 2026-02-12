import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    text: "Helloo"
}
const messageSlice = createSlice({
    name: "message",
    initialState,
    reducers: {
        changeMessage: (state, action)=>{
            state.text = action.payload;
        }
    }
})

export const { changeMessage } = messageSlice.actions;
export default messageSlice.reducer;