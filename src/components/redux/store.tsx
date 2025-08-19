import { configureStore } from "@reduxjs/toolkit";
import selectedProjectReducer from "./features/selectedProjectSlice";
import updateProjectContent from "./features/selectedProjectSlice";

export const store = configureStore({
  reducer: {
    selectedProject: selectedProjectReducer,
    updateProject: updateProjectContent,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
