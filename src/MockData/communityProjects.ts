import { IProject } from "../types/project";
import { mockUser } from "./user";

export const CommunityProjects: IProject[] = [
  {
    id: 1,
    title: "Projeto de JavaScript",
    description: "Essa é a descrição do meu projeto de JavaScript",
    content: `function hello() {\n  console.log("hello world");\n}`,
    user: mockUser,
    coments: 9,
    like: 9,
    backgroundColor: "#ee2828ff",
    language: "javascript",
  },
  {
    id: 2,
    title: "Projeto de HTML",
    description: "Essa é a descrição do meu projeto de HTML",
    content: `<div>\n  <h1>Hello World</h1>\n</div>`,
    user: mockUser,
    coments: 6,
    like: 6,
    backgroundColor: "#ff6be6",
    language: "html",
  },
  {
    id: 3,
    title: "Projeto de CSS",
    description: "Essa é a descrição do meu projeto de CSS",
    content: `.container {\n  display: flex;\n  justify-content: center;\n}\n\nh1 {\n  color: blue;\n}`,
    user: mockUser,
    coments: 1,
    like: 1,
    backgroundColor: "#d4ff6b",
    language: "css",
  },
];
