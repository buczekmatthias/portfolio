export interface ProjectType {
  name: string;
  year: {
    start: number;
    end?: number;
  };
  links: {
    [key: string]: string;
  };
  images: string[];
  stack: string[];
}

export const projects: ProjectType[] = [
  {
    name: "GameSphere",
    year: {
      start: 2025,
      end: 2026,
    },
    links: {
      github: "https://github.com/buczekmatthias/GameSphere",
    },
    images: ["homepage.png", "dashboard.png", "game.png", "discussion.png", "user_profile.png"],
    stack: ["laravel", "vue", "inertiajs", "tailwindcss", "postgresql", "git"],
  },
  {
    name: "GiveawayForge",
    year: {
      start: 2026,
    },
    links: {
      github: "https://github.com/buczekmatthias/GiveawayForge",
    },
    images: ["active_giveaway.png", "admin_giveaways.png", "admin_users.png", "complete_giveaway.png", "create_giveaway.png", "dashboard.png", "giveaways.png", "homepage.png"],
    stack: ["laravel", "vue", "inertiajs", "tailwindcss", "postgresql", "git"],
  },
  {
    name: "Quizzo",
    year: {
      start: 2026,
    },
    links: {
      github: "https://github.com/buczekmatthias/Quizzo",
    },
    images: ["homepage.png", "dashboard.png", "profile.png", "categories.png", "category.png", "quizzes.png", "quiz.png", "quiz_access.png", "admin_users.png", "admin_categories.png", "admin_quizzes.png", "admin_questions.png", "admin_answers.png"],
    stack: ["laravel", "vue", "inertiajs", "tailwindcss", "postgresql", "git"],
  },
  {
    name: "BallotBox",
    year: {
      start: 2026,
    },
    links: {
      github: "https://github.com/buczekmatthias/BallotBox",
    },
    images: ["create_poll.png", "dashboard.png", "homepage.png", "poll.png", "polls.png", "staff_polls.png", "staff_users.png", "user_profile.png"],
    stack: ["laravel", "vue", "inertiajs", "tailwindcss", "postgresql", "git"],
  },
  {
    name: "Portfolio",
    year: {
      start: 2026,
    },
    links: {
      github: "https://github.com/buczekmatthias/portfolio",
    },
    images: [],
    stack: ["vue", "tailwindcss", "typescript", "git"],
  },
];

export function getProject(name: string): ProjectType | null {
  const index = projects.findIndex((p) => p.name.toLowerCase() === name.toLowerCase());

  if (index === -1) return null;

  return projects[index]!;
}
