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
    },
    {
      name: "GiveawayForge",
      year: {
        start: 2026,
      },
      links: {
        github: { link: "https://github.com/buczekmatthias/GiveawayForge", variant: "outline", icon: getGithubIconClass() },
      },
      images: ["active_giveaway.png", "admin_giveaways.png", "admin_users.png", "complete_giveaway.png", "create_giveaway.png", "dashboard.png", "giveaways.png", "homepage.png"],
      stack: getProjectStackContent(["laravel", "vue", "inertiajs", "tailwindcss", "postgresql", "git"]),
    },
    {
      name: "Quizzo",
      year: {
        start: 2026,
      },
      links: {
        github: { link: "https://github.com/buczekmatthias/Quizzo", variant: "outline", icon: getGithubIconClass() },
      },
      images: ["homepage.png", "dashboard.png", "profile.png", "categories.png", "category.png", "quizzes.png", "quiz.png", "quiz_access.png", "admin_users.png", "admin_categories.png", "admin_quizzes.png", "admin_questions.png", "admin_answers.png"],
      stack: getProjectStackContent(["laravel", "vue", "inertiajs", "tailwindcss", "postgresql", "git"]),
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
    },
  ];
}
