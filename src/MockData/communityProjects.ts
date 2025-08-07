import { IProject } from "../types/project";
import { mockUser } from "./user";

export const CommunityProjects: IProject[] = [
  {
    id: 1,
    title: "Titulo do projeto",
    description: "Essa é a descrição do meu projeto",
    content: `function hello() {\n  console.log("hi1");\n}`,
    user: mockUser,
    coments: 9,
    like: 9,
    backgroundColor: "#ee2828ff",
    language: "javascript",
  },
  {
    id: 2,
    title: "Titulo do projeto2",
    description: "Essa é a descrição do meu projeto 2",
    content: `function hello() {\n  console.log("hi2");\n}`,
    user: mockUser,
    coments: 6,
    like: 6,
    backgroundColor: "#ff6be6",
    language: "javascript",
  },
  {
    id: 3,
    title: "Titulo do projeto3",
    description: "Essa é a descrição do meu projeto 3",
    content: `function hello() {\n  console.log("hi3");\n}`,
    user: mockUser,
    coments: 1,
    like: 1,
    backgroundColor: "#d4ff6b",
    language: "javascript",
  },
];
