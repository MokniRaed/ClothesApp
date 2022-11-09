import { configureStore } from "@reduxjs/toolkit";
import ArticeSlice from "./ArticeSlice";
import UserSlice from "./UserSlice";

export const store = configureStore({
  reducer: { Article: ArticeSlice, User: UserSlice },
});
