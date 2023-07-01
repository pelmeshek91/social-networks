import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { initialState } from "./initialState";
import {
  getUsersTweetsNextThunk,
  getUsersTweetsThunk,
  updateUsersTweetsThunk,
} from "./tweetsOperations";

const handleUserInfo = (state, { payload }) => {
  state.users = payload;
  state.error = null;
  state.isLoading = false;
};
const handleUpdate = (state, { payload }) => {
  const index = state.users.findIndex((user) => user.id === payload.id);
  state.users[index] = payload;
  state.error = null;
  state.isLoading = false;
};
const handleNextUsers = (state, { payload }) => {
  state.error = null;
  state.isLoading = false;
  state.users.push(...payload);
  state.page = state.page + 1;
  if (payload?.length === 0) state.isEnd = true;
};
const handleRejected = (state, { error }) => {
  state.error = error.message;
  state.isLoading = false;
};
const handlePending = (state) => {
  state.isLoading = true;
};
const usersTweetsSlice = createSlice({
  name: "tweets",
  initialState,
  reducers: {
    changeFilter: (state, { payload }) => {
      state.filter = payload;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(getUsersTweetsThunk.fulfilled, handleUserInfo)
      .addCase(updateUsersTweetsThunk.fulfilled, handleUpdate)
      .addCase(getUsersTweetsNextThunk.fulfilled, handleNextUsers)
      .addMatcher(
        isAnyOf(
          getUsersTweetsThunk.rejected,
          getUsersTweetsNextThunk.rejected,
          updateUsersTweetsThunk.rejected
        ),
        handleRejected
      )
      .addMatcher(
        isAnyOf(
          getUsersTweetsThunk.pending,
          getUsersTweetsNextThunk.pending,
          updateUsersTweetsThunk.pending
        ),
        handlePending
      ),
});

export const usersReducer = usersTweetsSlice.reducer;
export const { actions } = usersTweetsSlice;
