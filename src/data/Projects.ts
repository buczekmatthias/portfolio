import type { ButtonVariants } from "@/components/ui/button";
import { getProjectStackContent, type StackItem } from "@/data/Stack.ts";
import { getGithubIconClass } from "@/utils/useIcons";
import type { LucideIcon } from "lucide-vue-next";

export interface ProjectType {
  name: string;
  year: {
    start: number;
    end?: number;
  };
  links: {
    [key: string]: {
      link: string;
      variant: ButtonVariants["variant"];
      icon?: string;
      lucideIcon?: LucideIcon;
    };
  };
  images: string[];
  stack: StackItem;
  displayStack: StackItem;
}

export function getProjects(): ProjectType[] {
  return [
    {
      name: "GameSphere",
      year: {
        start: 2025,
        end: 2026,
      },
      links: {
        github: { link: "https://github.com/buczekmatthias/GameSphere", variant: "outline", icon: getGithubIconClass() },
      },
      images: ["homepage.png", "dashboard.png", "game.png", "discussion.png", "user_profile.png"],
      stack: getProjectStackContent(["laravel", "vue", "inertiajs", "tailwindcss", "postgresql", "git"]),
      displayStack: getProjectStackContent(["laravel", "vue", "inertiajs", "typescript", "tailwindcss"]),
    },
    {
      name: "Portfolio",
      year: {
        start: 2026,
      },
      links: {
        github: { link: "https://github.com/buczekmatthias/portfolio", variant: "outline", icon: getGithubIconClass() },
      },
      images: [],
      stack: getProjectStackContent(["vue", "tailwindcss", "typescript", "git"]),
      displayStack: getProjectStackContent(["vue", "tailwindcss", "typescript"]),
    },
  ];
}
