import { configureStore } from "@reduxjs/toolkit";
import GeekLabs from "./Slices";
export const store1 = configureStore({
  reducer: {
    GeekLabs: GeekLabs,
  },
});
