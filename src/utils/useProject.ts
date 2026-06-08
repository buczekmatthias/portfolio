import type { ProjectType } from "@/data/Projects";

export function getProjectFileSrc(projectName: string, fileName: string) {
  return new URL(`../assets/projects/${projectName.toLowerCase()}/${fileName}`, import.meta.url).href;
}

export function getProjectIconSrc(name: string) {
  return getProjectFileSrc(name, "icon.png");
}

export function getProjectYear(project: ProjectType): string {
  if (project.year.end) {
    return `${project.year.start}-${project.year.end}`;
  }

  return project.year.start.toString();
}
