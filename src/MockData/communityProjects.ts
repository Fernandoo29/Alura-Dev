import { IProject } from "../types/project";
import { mockUser } from "./user";

export let CommunityProjects: IProject[] = [
  {
    id: 1,
    title: "Projeto de JavaScript",
    description: "Essa é a descrição do meu projeto de JavaScript",
    content: `function hello() {\n  console.log("hello world");\n}`,
    user: mockUser,
    coments: 9,
    like: 9,
    backgroundColor: "#ee2828",
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

/**
 * Adiciona ou atualiza um projeto na lista da comunidade.
 * - Se `project.id` for 0, `null` ou `undefined`, um novo projeto é criado.
 * - Se `project.id` for um número válido, o projeto existente com esse ID é atualizado.
 * @param project - O objeto do projeto a ser salvo. Para criar, os campos essenciais são obrigatórios. Para atualizar, o `id` é obrigatório.
 * @returns O projeto criado ou atualizado.
 * @throws {Error} Se os campos obrigatórios para criação não forem fornecidos.
 * @throws {Error} Se um ID for fornecido para atualização mas não for encontrado.
 */
export const addCommunityProject = (project: Partial<IProject>): IProject => {
  // Se o ID não for fornecido ou for 0, cria um novo projeto
  if (!project.id) {
    // Validação para garantir que os campos necessários para um novo projeto estão presentes
    if (
      !project.title ||
      !project.description ||
      !project.content ||
      !project.backgroundColor ||
      !project.language
    ) {
      throw new Error(
        "Preecha todos os campos para adicionar um novo projeto."
      );
    }

    const newId =
      CommunityProjects.length > 0
        ? Math.max(...CommunityProjects.map((p) => p.id)) + 1
        : 1;

    const newProject: IProject = {
      id: newId,
      user: mockUser, //TODO: Substituir pelo usuário logado
      coments: 0,
      like: 0,
      title: project.title,
      description: project.description,
      content: project.content,
      backgroundColor: project.backgroundColor,
      language: project.language,
    };

    CommunityProjects.unshift(newProject);
    console.log("Projeto adicionado:", newProject);
    return newProject;
  }

  // Se um ID for fornecido e for diferente de 0, atualiza o projeto existente
  const projectIndex = CommunityProjects.findIndex((p) => p.id === project.id);

  if (projectIndex === -1) {
    throw new Error(
      `Projeto com ID ${project.id} não encontrado para atualização.`
    );
  }

  // Mescla o projeto existente com as novas informações
  const updatedProject = {
    ...CommunityProjects[projectIndex],
    ...project,
  };

  CommunityProjects[projectIndex] = updatedProject;
  console.log("Projeto atualizado:", updatedProject);
  return updatedProject;
};

/**
 * Deleta um projeto da lista de projetos da comunidade pelo seu ID.
 * @param projectId - O ID do projeto a ser deletado.
 */
export const deleteCommunityProject = (projectId: number): void => {
  CommunityProjects = CommunityProjects.filter((p) => p.id !== projectId);
};
