export interface StackItem {
  [key: string]: string;
}

export const INCREMENT_LIMIT_VALUE: number = 4;

const stack: { [key: string]: StackItem } = {
  Frontend: {
    TypeScript: "simple-icons:typescript",
    JavaScript: "simple-icons:javascript",
    TailwindCSS: "simple-icons:tailwindcss",
    Vue: "simple-icons:vuedotjs",
    InertiaJS: "simple-icons:inertia",
    HTML: "simple-icons:html5",
    CSS: "simple-icons:css3",
  },
  Backend: {
    Laravel: "simple-icons:laravel",
    PHP: "simple-icons:php",
    PostgreSQL: "simple-icons:postgresql",
    MySQL: "simple-icons:mysql",
    SQLite: "simple-icons:sqlite",
  },
  Tools: {
    Git: "simple-icons:git",
    VSCode: "simple-icons:visualstudiocode",
    Figma: "simple-icons:figma",
  },
};

function getStack(): { [key: string]: string } {
  return Object.assign({}, ...Object.values(stack).map((group) => group));
}

export function getProjectStackContent(stack: string[]): StackItem {
  return Object.fromEntries(Object.entries(getStack()).filter(([key, value]) => stack.includes(key.toLocaleLowerCase())));
}

function getGroupLength(group: string): number {
  return Object.keys(stack[group]!).length;
}

export function getRemainingItems(group: string): number {
  const diff = getGroupLength(group) - INCREMENT_LIMIT_VALUE;

  return diff < 0 ? 0 : diff;
}

export function getEntries(group: string, showAll: boolean = false): StackItem {
  return Object.fromEntries(Object.entries(stack[group]!).slice(0, showAll ? getGroupLength(group) : INCREMENT_LIMIT_VALUE));
}
