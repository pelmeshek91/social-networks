import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initialState";
import {
  getUsersTweetsThunk,
  updateUsersTweetsThunk,
} from "./tweetsOperations";

const handleUserInfo = (state, { payload }) => {
  state.users = payload;
};
const handleUpdate = (state, { payload }) => {
  const index = state.users.findIndex((user) => user.id === payload.id);
  state.users[index] = payload;
};

const usersTweetsSlice = createSlice({
  name: "tweets",
  initialState,
  extraReducers: (builder) =>
    builder
      .addCase(getUsersTweetsThunk.fulfilled, handleUserInfo)
      .addCase(updateUsersTweetsThunk.fulfilled, handleUpdate),
});

export const usersReducer = usersTweetsSlice.reducer;
