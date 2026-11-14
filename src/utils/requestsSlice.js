import { createSlice } from "@reduxjs/toolkit";

const requestsSlice = createSlice({
    name: "requests",
    initialState: null,
    reducers: {
        addRequest: (state, action) => {
            return action.payload;
        },
        removeRequest : (state, action) => {
            return state.filter((req) => req._id !== action.payload);
        }
    }
});

export const {addRequest, removeRequest} = requestsSlice.actions;
export default requestsSlice.reducer;