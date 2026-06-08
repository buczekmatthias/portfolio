export type StackItem = {
  name: string;
  icon: string;
  type: "language" | "framework" | "library" | "other";
};

export const stack: StackItem[] = [
  {
    name: "PHP",
    icon: "simple-icons:php",
    type: "language",
  },
  {
    name: "Laravel",
    icon: "simple-icons:laravel",
    type: "framework",
  },
  {
    name: "TypeScript",
    icon: "simple-icons:typescript",
    type: "language",
  },
  {
    name: "Vue",
    icon: "simple-icons:vuedotjs",
    type: "framework",
  },
  {
    name: "TawilwindCSS",
    icon: "simple-icons:tailwindcss",
    type: "framework",
  },
  {
    name: "InertiaJS",
    icon: "simple-icons:inertia",
    type: "library",
  },
  {
    name: "PostgreSQL",
    icon: "simple-icons:postgresql",
    type: "other",
  },
  {
    name: "MySQL",
    icon: "simple-icons:mysql",
    type: "other",
  },
  {
    name: "SQLite",
    icon: "simple-icons:sqlite",
    type: "other",
  },
  {
    name: "JavaScript",
    icon: "simple-icons:javascript",
    type: "language",
  },
  {
    name: "HTML",
    icon: "simple-icons:html5",
    type: "language",
  },
  {
    name: "CSS",
    icon: "simple-icons:css3",
    type: "language",
  },
  {
    name: "Git",
    icon: "simple-icons:git",
    type: "other",
  },
  {
    name: "Figma",
    icon: "simple-icons:figma",
    type: "other",
  },
  {
    name: "VSCode",
    icon: "simple-icons:visualstudiocode",
    type: "other",
  },
];

export function getStackByType(type: string): StackItem[] {
  if (type === "all") {
    return stack;
  }

  if (type === "framework") {
    return stack.filter((s) => ["framework", "library"].includes(s.type));
  }

  return stack.filter((s) => s.type === type);
}

export function getStackContent(projectStack: string[]): StackItem[] {
  return stack.filter((s) => projectStack.includes(s.name.toLowerCase()));
}
