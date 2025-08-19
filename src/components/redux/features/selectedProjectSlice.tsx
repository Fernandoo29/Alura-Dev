import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IProject } from "../../../types";

type UpdateProjectContentPayload<K extends keyof IProject> = {
  field: K;
  value: IProject[K];
};

const initialState: IProject = {
  id: 0,
  title: "",
  description: "",
  content: `function hello() {\n  console.log("hello word!");\n}`,
  language: "javascript",
  backgroundColor: "#6bd1ff",
  coments: 0,
  like: 0,
  user: {
    name: "",
    user: "",
    image: {
      foto: "",
      alt: "",
    },
  },
};

export const selectedProjectSlice = createSlice({
  name: "selectedProject",
  initialState,
  reducers: {
    setSelectedProject: (state, action: PayloadAction<Partial<IProject>>) => {
      return { ...initialState, ...action.payload };
    },
    updateProjectContent: <K extends keyof IProject>(
      state: IProject,
      action: PayloadAction<UpdateProjectContentPayload<K>>
    ) => {
      const { field, value } = action.payload;
      state[field] = value;
    },
  },
});

export const { setSelectedProject, updateProjectContent } =
  selectedProjectSlice.actions;
export default selectedProjectSlice.reducer;
