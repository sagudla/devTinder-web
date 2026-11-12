import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: null,
    reducers: {
        addUser: (state, action) => {
            return action.payload;
        },
        deleteuser: () => {
            return null;
        }
    }
});

export const {addUser, deleteuser} = userSlice.actions;
export default userSlice.reducer;