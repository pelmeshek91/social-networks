import { configureStore } from "@reduxjs/toolkit";
import { usersReducer } from "./tweetsSlice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const filteredPersistConfig = {
  key: "filter",
  storage,
  whitelist: ["filter", "users"],
};
const persistedFilteredReducer = persistReducer(
  filteredPersistConfig,
  usersReducer
);
export const store = configureStore({
  reducer: {
    users: persistedFilteredReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
