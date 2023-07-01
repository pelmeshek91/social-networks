import { createSelector } from "@reduxjs/toolkit";

export const selectUsersTweets = (state) => state.users.users;
export const selectUsersFilter = (state) => state.users.filter;

export const selectFilteredUsers = createSelector(
  [selectUsersFilter, selectUsersTweets],
  (filter, users) => {
    if (filter === "all") return users;
    if (filter === "follow")
      return users?.filter((user) => user.followers === 100500);
    if (filter === "following")
      return users?.filter((user) => user.followers === 100501);
  }
);
