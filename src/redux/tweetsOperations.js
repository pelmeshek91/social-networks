import { createAsyncThunk } from "@reduxjs/toolkit";
import { getUsersTweets, updateUsersTweets } from "../services/usersApi";

export const getUsersTweetsThunk = createAsyncThunk("user/getTweets", () => {
  const response = getUsersTweets();
  return response;
});
export const updateUsersTweetsThunk = createAsyncThunk(
  "user/updateTweets",
  (card) => {
    const response = updateUsersTweets(card);
    return response;
  }
);
