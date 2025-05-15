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
  },
});

export default userSlice.reducer;
export const { addUsers, removeUser } = userSlice.actions;
