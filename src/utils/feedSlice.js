import { createSlice } from "@reduxjs/toolkit";

const feedSlice = createSlice({
  name: "user",
  initialState: null,
  reducers: {
    addFeed: (state, action) => {
      return action.payload;
    },
    removeFeed:()=>{
        return null
    }
  },
});

export default feedSlice.reducer;
export const { addFeed } = feedSlice.actions;
