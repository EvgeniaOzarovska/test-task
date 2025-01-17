import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUserData = createAsyncThunk(
  "user/fetchUserData",
  async (userId: string, { rejectWithValue }) => {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
      if (!response.ok) {
        throw new Error("Failed to fetch account data");
      }
        const data = await response.json();
        return data
    } catch (err) {
      return rejectWithValue("Not Found");
    }
  },
);
