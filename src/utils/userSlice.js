import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: null,
  reducers: {
    addUsers: (state, action) => {
      return action.payload;
    },
    removeUser: () => {
      return null;
    },
    updateUser: (state, action) => {
      return {
        ...state,
        ...action.payload,
      };}
  },
});

export default userSlice.reducer;
export const { addUsers, removeUser ,updateUser} = userSlice.actions;
