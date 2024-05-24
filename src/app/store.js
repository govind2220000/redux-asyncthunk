import { configureStore } from "@reduxjs/toolkit";

import userDetailSlice from "../features/slices/userdetails.js";

export const store = configureStore({
  reducer: { app: userDetailSlice },
});
