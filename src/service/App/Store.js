import { configureStore } from "@reduxjs/toolkit";
// import userReducer from '../features/auth/authSlice';
import userReducer from '../Features/auth/authSlice';
export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});
