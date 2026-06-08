import { createI18n, type I18n } from "vue-i18n";

interface AboutContent {
  q: string;
  a: string[];
}

interface Translation {
  [key: string]: string | Translation | string[] | AboutContent[];
}

export function getTranslation(): I18n {
  return createI18n({
    legacy: false,
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
    links: {
      about: "About",
    },
    language: "Language",
    sections: {
      hero: {
        quote: "I build web apps with Laravel and Vue. Still figuring things out, one project at a time",
        download_resume: "Download resume",
        read_more: "Read more",
      },
      about: {
        header: "About me",
        content: [
          {
            q: "When did I start?",
            a: [
              "I started programming with C++ command line applications around 2016-2017. Programming was a bit of a rough experience, until I got into web applications development around a year later.",
              "Initially, programming was something that was necessary to graduate from high school, but as soon as I experienced working with PHP I fell in love.",
              "Programming quickly became a hobby of mine as I enjoy solving problems and bringing ideas to life.",
              "As time passed, I began to desire it to become more than just a hobby and decided to pursue a programming related career.",
            ],
          },
          {
            q: "Why web applications?",
            a: ["I really like that with minimal environment configuration you can easily experiment with the codebase.", "If we combine that with simpler deployment, lack of complex distributions or third-party reviews required for an update to be live, the entire development cycle seems more enjoyable."],
          },
          {
            q: "What outside of Laravel?",
            a: [
              "When I started getting into frameworks, my first choice was Symfony and I used it for a few months.",
              "When I switched to Laravel, frontend was based on Blade with JavaScript. Then I experimented a bit with Vue and I knew I didn't want to go back. I made an application combining a Vue SPA with a Laravel API but it didn't feel joyful enough for some reason. Then I discovered Inertia.js and I've stuck with it pretty much ever since.",
              "For automation scripts I enjoy using Python, whether it's a simple task or more complex chain of actions.",
              "When it comes to mobile apps I enjoy working with Flutter. I haven't had many opportunities to work with it outside of one simple app for personal use but I definitely wouldn't hesitate to use it again.",
              "I'm planning to get into Rust as well in the future, get to know React better to expand my stack and deepen my Python knowledge.",
            ],
          },
          {
            q: "Want to contact me?",
            a: ["Whether it's about a job opportunity, a project idea or just a chat about tech — feel free to reach out.", "I'm currently open to new opportunities, whether that's contract work or a full-time position.", "Discord or e-mail both work, I'll do my best to respond as soon as possible."],
          },
        ],
      },
      tools_tech: {
        header: "Tools & technologies",
      },
      projects: {
        header: "Projects",
        buttons: {
          github: "Source code",
        },
        project: {
          headers: {
            description: "Description",
            key_features: "Key features",
            gallery: "Gallery",
          },
          GameSphere: {
            description: "A community-driven platform where gamers can review games, discover new titles, track progress on upcoming games and discuss about games.",
            key_features: ["Admin dashboard with 5-month activity chart tracking new users, games, discussions and reviews", "Genre-based browsing with public user profiles", "Content moderation covering reviews, discussions and user reports", "Role-based access with a game creator application and admin approval system"],
          },
          GiveawayForge: {
            description: "A platform for creating and managing giveaways.",
            key_features: ["Full giveaway lifecycle — create, manage, and enter giveaways", "Automated scheduling that starts and ends giveaways without need for manual intervention", "Admin panel for overseeing all giveaways and users"],
          },
          BallotBox: {
            description: "A platform for creating and voting on polls.",
            key_features: ["Public and private polls with link-based voting", "Multi-choice support with live results breakdown and percentage distribution", "User vote tracking with visual results display"],
          },
          Quizzo: {
            description: "A platform for creating and sharing quizzes.",
            key_features: ["Public and private quizzes browsable by category", "Full question and answer management with image support", "Admin panel for managing quizzes, categories and users"],
          },
          Portfolio: {
            description: "A personal site of mine, that you are currently visiting.",
          },
        },
      },
      footer: {
        find_me: "Find me",
      },
    },
  };
}

function getPolishContent(): Translation {
  return {
    full_name: "Maciej Buczek",
    links: {
      about: "O mnie",
    },
    language: "Język",
    sections: {
      hero: {
        quote: "Buduję aplikacje webowe używając Laravel i Vue. Wciąż odkrywam nowe rzeczy, jedne projekt na raz",
        download_resume: "Pobierz CV",
        read_more: "Sprawdź więcej",
      },
      about: {
        header: "O mnie",
        content: [
          {
            q: "Kiedy zacząłem?",
            a: [
              "Przygodę z programowaniem zacząłem od aplikacji wiersza poleceń pisanych w C++ około 2016-2017. Programowanie było ciężkim doświadczeniem, aż zacząłem tworzyć aplikacje webowe około roku później.",
              "Początkowo programowanie było czymś koniecznym do skończenia technikum. Jednak pierwsze doświadczenia w pracy z PHP sprawiły, że to pokochałem.",
              "Programowanie szybko stało się moim hobby, ponieważ lubię rozwiązywać problemy i wprowadzać pomysły w życie.",
              "Z biegiem czasu, zacząłem pragnąć by programowanie stało się czymś więcej niż tylko hobby i zdecydowałem się zacząć karierę związaną z programowaniem.",
            ],
          },
          {
            q: "Dlaczego aplikacje webowe?",
            a: ["Naprawdę podoba mi się, że z minimalną konfiguracją środowiska można bardzo łatwo eksperymentować z kodem.", "Jeśli połączymy to z łatwym wdrożeniem, brakiem skomplikowanych dystrybucji czy wymaganego zewnętrznego recenzowania aktualizacji, cały cykl procesu tworzenia wydaje się być bardziej przyjazny."],
          },
          {
            q: "Co poza Laravelem?",
            a: [
              "Gdy zaczynałem przygodę z frameworkami, pierwszym wyborem było Symfony, którego używałem przez parę miesięcy.",
              "Po przeniesieniu się na Laravel, front-end bazował na Blade i JavaScripcie. Potem zacząłem eksperymentować z Vue i szybko przekonałem się, że nie chcę wracać. Stworzyłem aplikację łączącą Vue SPA z Laravel API, ale z jakiegoś powodu nie sprawiło mi to wystarczającej frajdy. Niedługo potem odkryłem Inertia.js i w zasadzie używam tego zestawu od tamtej chwili.",
              "Do skryptów automatyzujących lubię używać Pythona, niezależnie czy jest to proste zadanie czy bardziej skomplikowany ciąg operacji.",
              "Jeśli chodzi o aplikacje mobilne preferuję Flutter. Nie miałem zbyt wiele okazji z nim pracować poza, tak naprawdę, jedną aplikacją na użytek własny, ale nie zawahałbym się użyć go ponownie.",
              "W przyszłości planuję poznać Rust, zagłębić się w React i pogłębić swoją wiedzę z Pythona.",
            ],
          },
          {
            q: "Chcesz się skontaktować?",
            a: ["Niezależnie czy chodzi o pracę, pomysł na projekt czy po prostu chcesz pogadać o technologii - pisz śmiało.", "Jestem obecnie otwarty na nowe możliwości, niezależnie czy jest to kontrakt czy pełen etat.", "Discord czy e-mail - odpiszę jak najszybciej się da."],
          },
        ],
      },
      tools_tech: {
        header: "Narzędzia i technologie",
      },
      projects: {
        header: "Projekty",
        buttons: {
          github: "Kod źródłowy",
        },
        project: {
          headers: {
            description: "Opis",
            key_features: "Kluczowe rozwiązania",
            gallery: "Galeria",
          },
          GameSphere: {
            description: "Platforma społecznościowa, gdzie gracze mogą recenzować gry, odkrywać nowe tytuły, śledzić postępy nadchodzących gier i dyskutować o grach.",
            key_features: ["Panel admina z wykresem aktywności z ostatnich 5 miesięcy, śledzącym nowych użytkowników, gry, dyskusje i recenzje", "Przeglądanie gier według gatunku z publicznymi profilami użytkowników", "Moderacja treści obejmująca recenzje, dyskusje i zgłoszenia użytkowników", "Kontrola dostępu oparta na rolach z systemem aplikacji o status twórcy gier i zatwierdzaniem przez admina"],
          },
          GiveawayForge: {
            description: "Platforma do tworzenia i zarządzania giveaway'ami.",
            key_features: ["Pełny cykl życia giveaway'a — tworzenie, zarządzanie i dołączanie", "Automatyczne planowanie rozpoczynające i kończące giveaway'e bez konieczności ręcznej interwencji", "Panel admina do zarządzania giveaway'ami i użytkownikami"],
          },
          BallotBox: {
            description: "Platforma do tworzenia ankiet i głosowania.",
            key_features: ["Publiczne i prywatne ankiety z głosowaniem przez link", "Obsługa wielu odpowiedzi z podglądem wyników i podziałem procentowym", "Śledzenie głosów użytkownika z wizualizacją wyników"],
          },
          Quizzo: {
            description: "Platforma do tworzenia i udostępniania quizów.",
            key_features: ["Publiczne i prywatne quizy przeglądane według kategorii", "Pełne zarządzanie pytaniami i odpowiedziami z obsługą zdjęć", "Panel admina do zarządzania quizami, kategoriami i użytkownikami"],
          },
          Portfolio: {
            description: "Moja osobista strona, którą właśnie odwiedzasz.",
          },
        },
      },
      footer: {
        find_me: "Znajdź mnie",
      },
    },
  };
}
