import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_BASE_URL = `${import.meta.env.VITE_API_BASE_URL}/api`;
// cors error that why i add proxy and add backend api in vite.config.js
// const API_BASE_URL = "/api";
const initialState = {
  user: null,
  token: null,
  status: "idle",
  error: null,
  successMessage: null,
};
//sign up
export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${API_BASE_URL}/auth/register`,
        userData
      );

      return response.data;
    } catch (err) {
      return rejectWithValue(
        err.response?.data?.message || "Registration Failed"
      );
    }
  }
);
//sign in
export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${API_BASE_URL}/auth/login`,
        credentials
      );

      return response.data;
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || "Login Failed");
    }
  }
);
//forgot password
export const forgotPassword = createAsyncThunk(
  "auth/forgot-Password",
  async (emailData, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${API_BASE_URL}/auth/forgot-password`,
        emailData
      );
      return response.data;
    } catch (err) {
      return rejectWithValue(
        err.response?.data?.message || "Failed to send reset link"
      );
    }
  }
);

// reset password
export const resetPassword = createAsyncThunk(
  "auth/resetPassword",
  async (resetData, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${API_BASE_URL}/auth/reset-password`,
        resetData
      );
      return response.data;
    } catch (err) {
      return rejectWithValue(
        err.response?.data?.message || "Failed to reset password"
      );
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.status = "idle";
      state.error = null;
      state.successMessage = null;
    },
    resetStatus: (state) => {
      state.status = "idle";
      state.error = null;
      state.successMessage = null;
    },
  },
  extraReducers: (builder) => {
    builder

      //sign in
      .addCase(loginUser.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = action.payload.user;
       
        // state.token = action.payload.jwt;
        state.token = action.payload.accessToken;
        state.successMessage = action.payload.message || "Login successful!";
      })
      //sign up
      .addCase(registerUser.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.successMessage = action.payload.message;
      })
      // forgot password
      .addCase(forgotPassword.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.successMessage = action.payload.message;
      })

      //reset password
      .addCase(resetPassword.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.successMessage =
          action.payload.message ||
          "Password reset successfully! You can now log in.";
      })

      .addMatcher(
        (action) => action.type.endsWith("/pending"),
        (state) => {
          state.status = "loading";
          state.error = null;
          state.successMessage = null;
        }
      )
      .addMatcher(
        (action) => action.type.endsWith("/rejected"),
        (state, action) => {
          state.status = "failed";
          state.error = action.payload;
        }
      );
  },
});

export const { logout, resetStatus } = authSlice.actions;

export default authSlice.reducer;