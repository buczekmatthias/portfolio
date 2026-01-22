import { createI18n, type I18n } from "vue-i18n";

interface AboutContent {
  q: string;
  a: string[];
}

interface Translation {
  [key: string]: string | Translation | string[] | AboutContent[];
}

export interface LanguageOptionsDisplay {
  [key: string]: string;
}

export function getSelectDisplayOptions(): LanguageOptionsDisplay {
  return {
    pl: "poland.svg",
    en: "uk.svg",
  };
}

export function getTranslation(): I18n {
  return createI18n({
    locale: "pl",
    fallbackLocale: "en",
    messages: {
      en: getEnglishContent(),
      pl: getPolishContent(),
    },
  });
}

function getEnglishContent(): Translation {
  return {
    full_name: "Matthias Buczek",
    sections: {
      hero: {
        hi: "Hello!",
        name: "My name is Matthias.",
        who: "I'm Full-stack developer",
      },
      availability: {
        available: "I'm available for work!",
        hired: "I'm hired but my inbox is still open!",
        reach: "Reach me at",
      },
      about: {
        header: "About me",
        short: ["I'm Matthias, a passionate full-stack developer, specialized in the development of web applications based on the Laravel framework.", "Although I enjoy working with Laravel the most, I'm not limiting myself to it. I believe that each job requires the right tools, which is why I'm always eager to try new technologies."],
        content: [
          {
            q: "When did I start?",
            a: [
              "I started programming with C++ command line applications around 2016 - 2017. Programming was a bit of a rough experience, until I got to experience creating web applications around a year later.",
              "Initially, programming was something that was necessary to graduate from high school, but as soon as I experienced working with PHP I fell in love.",
              "Programming quickly became a hobby of mine as I enjoy solving problems and bringing ideas to life.",
              "As time passed, I started to want it to become more than just a hobby and decided to pursue a programming related career.",
            ],
          },
          {
            q: "Why web applications?",
            a: ["I really like that with minimal environment configuration you can easily experiment with the codebase.", "If we combine that with simpler deployment, lack of complex distributions or third-party reviews required for an update to be live, the entire development cycle seems more enjoyable."],
          },
          {
            q: "What outside of Laravel?",
            a: [
              "When I started getting into frameworks, I initially started with Symfony and was using it for a few months, so I gained some knowledge of it.",
              "When I switched to Laravel, frontend was based on Blade with JavaScript. Then I experimented a bit with Vue and I knew I didn't want to go back. I made an application combining a Vue SPA with a Laravel API but it didn't feel too joyful for some reason. Then I discovered Inertia.js and I've stuck with it pretty much ever since.",
              "For automation scripts I enjoy using Python, whether it's a simple task or more complex chain of actions. Python is my go-to.",
              "When it comes to mobile apps I enjoy working with Flutter. I haven't had many opportunities to work with it outside of one simple app for personal use but I definitely wouldn't hesitate to use it again.",
              "I'm planning to get into Rust as well in the near future.",
            ],
          },
          {
            q: "What are my interests?",
            a: ["I like to create applications, experiment with code and discover new features, packages and technologies.", "Apart from that, I like to play video games. Mostly something not too pressuring like Warframe or IdleOn. You might've met me in a game, I go by the name Hazy or bHazed.", "When I don't feel like playing games I like to watch movies, series or anime, or read manga.", "I also have a keen appreciation for tasty food, which is one of my biggest enjoyments."],
          },
          {
            q: "Full-stack developer?",
            a: ["It's become a popular term in recent years. A Full-Stack developer is someone who works comfortably with both frontend and backend technologies.", "Although I started as a backend developer, I didn't stop there. I kept expanding my skill set and eventually got confident with frontend. While there's always room to grow, I'm not afraid to pick up the gauntlet!"],
          },
          {
            q: "Want to contact me?",
            a: ["Whether it's Discord or e-mail, I'll attempt to respond as soon as I notice your message.", "I don't share my phone number here to avoid unwanted calls."],
          },
        ],
      },
      tools_tech: {
        header: "Tools & technologies",
        more: "more",
      },
      projects: {
        header: "Projects",
        live: "Running live",
        buttons: {
          github: "Source code",
        },
        descriptions: {
          GameSphere: "A template for community-driven platform where gamers can review games, discover new titles, track progress on upcoming games and discuss about games.",
          Portfolio: "A personal site of mine, that you are currently visiting.",
          dottopic: "Blog application limiting posting articles to limited users. Full CRUDs and admin management.",
          MemoryDazzle: "Social media platform application allowing following users, posting text and files, reacting and commenting to posts and grouping them",
        },
      },
    },
    buttons: {
      show_more: "Show more",
      show_less: "Show less",
    },
  };
}

function getPolishContent(): Translation {
  return {
    full_name: "Maciej Buczek",
    sections: {
      hero: {
        hi: "Cześć",
        name: "Nazywam się Maciej.",
        who: "Jestem Full-stack developerem",
      },
      availability: {
        available: "Jestem dostępny do zatrudnienia!",
        hired: "Pracuję, ale moja skrzynka jest ciągle otwarta!",
        reach: "Wyślij wiadomość na",
      },
      about: {
        header: "O mnie",
        short: ["Jestem Maciej, pełen pasji full-stack developer, specjalizujący się w tworzeniu aplikacji webowych opartych na frameworku Laravel.", "Chociaż najbardziej lubię pracować z Laravelem, nie ograniczam się tylko do niego. Wierzę, że każde zadanie wymaga odpowiednich narzędzi, dlatego zawsze chętnie próbuję nowych technologii."],
        content: [
          {
            q: "Kiedy zacząłem?",
            a: [
              "Zacząłem programować tworząc aplikacje konsolowe w C++ około 2016 - 2017 roku. Programowanie było dość trudnym doświadczeniem, dopóki nie miałem okazji tworzyć aplikacji webowych około rok później.",
              "Początkowo programowanie było czymś koniecznym do ukończenia technikum, ale gdy tylko doświadczyłem pracy z PHP, zakochałem się.",
              "Programowanie szybko stało się moim hobby, ponieważ lubię rozwiązywać problemy i wcielać pomysły w życie.",
              "Z czasem zacząłem chcieć, aby stało się to czymś więcej niż tylko hobby i zdecydowałem się na rozpoczęcie kariery związanej z programowaniem.",
            ],
          },
          {
            q: "Dlaczego aplikacje webowe?",
            a: ["Bardzo podoba mi się, że przy minimalnej konfiguracji środowiska można łatwo eksperymentować z kodem.", "Jeśli połączymy to z prostszym wdrażaniem, brakiem skomplikowanych dystrybucji czy ocen stron trzecich wymaganych do publikacji aktualizacji, cały cykl developmentu wydaje się przyjemniejszy."],
          },
          {
            q: "Co poza Laravelem?",
            a: [
              "Kiedy zacząłem poznawać frameworki, początkowo zacząłem od Symfony i używałem go przez kilka miesięcy, więc zdobyłem pewną wiedzę na jego temat.",
              "Kiedy przeszedłem na Laravela, frontend bazował na Blade z JavaScriptem. Potem trochę poeksperymentowałem z Vue i wiedziałem, że nie chcę wracać. Stworzyłem aplikację łączącą Vue SPA z Laravel API, ale z jakiegoś powodu nie sprawiało mi to szczególnej radości. Wtedy odkryłem Inertia.js i trzymam się go praktycznie od tamtej pory.",
              "Do skryptów automatyzujących lubię używać Pythona, niezależnie czy jest to proste zadanie, czy bardziej złożone łańcuchy akcji. Python jest moim wyborem.",
              "Jeśli chodzi o aplikacje mobilne, lubię pracować z Flutterem. Nie miałem wielu okazji, żeby z nim pracować poza jedną prostą aplikacją do osobistego użytku, ale zdecydowanie nie wahałbym się użyć go ponownie.",
              "Planuję również rozpocząć swoją przygodę z Rustem w najbliższej przyszłości.",
            ],
          },
          {
            q: "Jakie są moje zainteresowania?",
            a: ["Lubię tworzyć aplikacje, eksperymentować z kodem i odkrywać nowe funkcje, paczki i technologie.", "Poza tym lubię grać w gry wideo. Głównie w coś nie zbyt stresującego jak Warframe czy IdleOn. Możliwe, że spotkaliśmy się już w grze, używam nicku Hazy lub bHazed.", "Kiedy nie mam ochoty na granie, lubię oglądać filmy, seriale lub anime, albo czytać mangę.", "Ponadto uwielbiam dobrze i smacznie zjeść, jest to jedną z moich największych przyjemności."],
          },
          {
            q: "Full-stack developer?",
            a: ["To dość popularny termin w ostatnich latach. Full-Stack developer to ktoś, kto komfortowo pracuje zarówno z technologiami frontendowymi, jak i backendowymi.", "Chociaż zaczynałem jako backend developer, nie poprzestałem na tym. Cały czas rozszerzałem swoje umiejętności i w końcu nabrałem pewności w frontendzie. Jestem gotowy na nowe wyzwania!"],
          },
          {
            q: "Chcesz się ze mną skontaktować?",
            a: ["Niezależnie czy to Discord czy e-mail, postaram się odpowiedzieć jak tylko zauważę wiadomość.", "Nie udostępniam tutaj mojego numeru telefonu, aby uniknąć niechcianych połączeń."],
          },
        ],
      },
      tools_tech: {
        header: "Narzędzia i technologie",
        more: "więcej",
      },
      projects: {
        header: "Projekty",
        live: "Strona online",
        buttons: {
          github: "Kod źródłowy",
        },
        descriptions: {
          GameSphere: "Szablon dla platformy społecznościowej, gdzie gracze mogą recenzować gry, odkrywać nowe tytuły, śledzić postępy nadchodzących gier i dyskutować o grach.",
          Portfolio: "Moja strona, którą właśnie odwiedzasz.",
          dottopic: "Aplikacja blogowa ograniczająca publikowanie artykułów do wybranych użytkowników. Pełne operacje CRUD i zarządzanie administratorskie.",
          MemoryDazzle: "Aplikacja platformy społecznościowej umożliwiająca obserwowanie użytkowników, publikowanie tekstu i plików, reagowanie i komentowanie postów oraz grupowanie ich.",
        },
      },
    },
    buttons: {
      show_more: "Pokaż więcej",
      show_less: "Pokaż mniej",
    },
  };
}
