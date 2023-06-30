import { configureStore } from "@reduxjs/toolkit";
import { usersReducer } from "./tweetsSlice";

export const store = configureStore({
  reducer: {
    users: usersReducer,
  },
});
