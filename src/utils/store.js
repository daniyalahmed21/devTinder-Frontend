import { configureStore } from '@reduxjs/toolkit'
import userReducer from "../utils/userSlice"
import feedReducer from "../utils/feedSlice"
export default configureStore({
  reducer: {
    user : userReducer,
    feed : feedReducer 
  },
})