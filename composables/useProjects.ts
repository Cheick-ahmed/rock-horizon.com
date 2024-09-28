import { data } from "~/data/projects.json";

import type { Project } from "~/models/project.models";

export const useProjects = () => {
  const projects = data as Project.Root[];

  const getProjects = (): Project.Root[] => {
    return projects;
  };

  const getProject = (id: string): Project.Root | undefined => {
    return getProjects().find((project) => project.id === id);
  };

  const searchProjects = (keyword: string): Project.Root[] => {
    return getProjects().filter((project) =>
      project.title.toLowerCase().includes(keyword.toLowerCase())
    );
  };

  const getLastProject = (): Project.Root | undefined => {
    const projects = getProjects();
    return projects.length > 0 ? projects[projects.length - 1] : undefined;
  };

  const getSortedProjects = (
    field: keyof Project.Root,
    order: "asc" | "desc" = "asc"
  ): Project.Root[] => {
    return projects.sort((a, b) => {
      if (a[field] < b[field]) return order === "asc" ? -1 : 1;
      if (a[field] > b[field]) return order === "asc" ? 1 : -1;
      return 0;
    });
  };

  return {
    getProjects,
    getProject,
    getLastProject,
  };
};
