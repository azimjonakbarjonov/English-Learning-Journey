import type { DayData, YouTubeVideo, GrammarFormula } from "../types/types";

const makeFormula = (
  title: string,
  structure: string,
  examples: string[]
): GrammarFormula => ({
  title,
  structure,
  examples,
});

const yt = (
  title: string,
  url: string,
  description?: string
): YouTubeVideo => ({
  title,
  url,
  description,
});

const makeDay = (
  id: number,
  vocab: {
    word: string;
    translation: string;
    example: string;
    difficulty: "easy" | "medium" | "hard";
  }[],
  grammar: {
    topic: string;
    formulas: GrammarFormula[];
    rules: string[];
    exercises: { question: string; answer: string; explanation: string }[];
  },
  speaking: {
    topic: string;
    phrases: { phrase: string; translation: string }[];
    tasks: string[];
  },
  listening: {
    youtubeVideos: YouTubeVideo[];
    resources: string[];
    exercises: string[];
  },
  homework: { writing: string; speaking: string; vocabulary: string }
): DayData => ({
  id,
  vocabulary: vocab,
  grammar,
  speaking,
  listening,
  homework,
});

// Lightweight but complete content for days 5-10 (example). Extend similarly for 11-30 if needed.
export const extraMonth1Days: DayData[] = [
  // Day 5 — Comparatives & Superlatives
  makeDay(
    5,
    [
      {
        word: "tall",
        translation: "baland",
        example: "He is tall.",
        difficulty: "easy",
      },
      {
        word: "taller",
        translation: "balandroq",
        example: "She is taller than me.",
        difficulty: "easy",
      },
      {
        word: "the tallest",
        translation: "eng baland",
        example: "Tom is the tallest in class.",
        difficulty: "easy",
      },
      {
        word: "fast",
        translation: "tez",
        example: "This car is fast.",
        difficulty: "easy",
      },
      {
        word: "faster",
        translation: "tezroq",
        example: "This bike is faster than that one.",
        difficulty: "easy",
      },
      {
        word: "the fastest",
        translation: "eng tez",
        example: "Usain is the fastest runner.",
        difficulty: "easy",
      },
      {
        word: "good",
        translation: "yaxshi",
        example: "This is a good book.",
        difficulty: "easy",
      },
      {
        word: "better",
        translation: "yaxshiroq",
        example: "This one is better.",
        difficulty: "easy",
      },
      {
        word: "the best",
        translation: "eng yaxshi",
        example: "This is the best choice.",
        difficulty: "easy",
      },
      {
        word: "than",
        translation: "...dan",
        example: "A is smaller than B.",
        difficulty: "easy",
      },
    ],
    {
      topic: "Comparatives & Superlatives",
      formulas: [
        makeFormula("Short adjectives (comp)", "adj + er + than", [
          "smaller than",
          "faster than",
        ]),
        makeFormula("Short adjectives (sup)", "the + adj + est", [
          "the smallest",
          "the fastest",
        ]),
        makeFormula("Long adjectives (comp)", "more + adj + than", [
          "more interesting than",
        ]),
        makeFormula("Long adjectives (sup)", "the most + adj", [
          "the most important",
        ]),
        makeFormula(
          "Irregular",
          "good → better → the best; bad → worse → the worst",
          ["better than", "the best"]
        ),
      ],
      rules: [
        "Short adjectives: oldiga -er/-est qo'shiladi",
        "Long adjectives: more/most bilan",
        "Irregular forms: good/bad farqli",
      ],
      exercises: [
        {
          question: "Math is ___ (interesting) than history.",
          answer: "more interesting",
          explanation: "Long adjective",
        },
        {
          question: "Tom is ___ (tall) boy in class.",
          answer: "the tallest",
          explanation: "Superlative",
        },
        {
          question: "This phone is ___ (good) than that one.",
          answer: "better",
          explanation: "Irregular",
        },
      ],
    },
    {
      topic: "Making Comparisons",
      phrases: [
        { phrase: "X is bigger than Y", translation: "X Y dan kattaroq" },
        {
          phrase: "This is the best option",
          translation: "Bu eng yaxshi tanlov",
        },
      ],
      tasks: [
        "Ikki mahsulotni taqqoslab 5 ta gap yozing",
        "Do'stingiz bilan telefonlarni taqqoslab suhbat qiling",
      ],
    },
    {
      youtubeVideos: [
        yt(
          "Comparatives & Superlatives",
          "https://www.youtube.com/watch?v=zB8eTiG2QFw"
        ),
        yt("Making Comparisons", "https://www.youtube.com/watch?v=4dKmY2p_Bno"),
      ],
      resources: ["BBC: Comparatives/Superlatives"],
      exercises: ["Videodan iboralarni yozib oling", "Sup/comp ni aniqlang"],
    },
    {
      writing: "Mahsulotlar taqqosini yozing (8 ta gap)",
      speaking: "2 daqiqa taqdimot",
      vocabulary: "10 ta yangi sifatni ishlating",
    }
  ),

  // Day 6 — Quantifiers
  makeDay(
    6,
    [
      {
        word: "much",
        translation: "ko'p (hisobl.)",
        example: "How much water?",
        difficulty: "easy",
      },
      {
        word: "many",
        translation: "ko'p (hisob.)",
        example: "How many books?",
        difficulty: "easy",
      },
      {
        word: "a lot of",
        translation: "juda ko'p",
        example: "a lot of friends",
        difficulty: "easy",
      },
      {
        word: "few",
        translation: "kam (hisob.)",
        example: "few options",
        difficulty: "easy",
      },
      {
        word: "little",
        translation: "kam (hisobl.)",
        example: "little time",
        difficulty: "easy",
      },
      {
        word: "some",
        translation: "bir oz/ba'zi",
        example: "some people",
        difficulty: "easy",
      },
      {
        word: "any",
        translation: "hech qanday",
        example: "any questions?",
        difficulty: "easy",
      },
      {
        word: "several",
        translation: "bir nechta",
        example: "several issues",
        difficulty: "medium",
      },
      {
        word: "plenty of",
        translation: "yetarlicha ko'p",
        example: "plenty of time",
        difficulty: "medium",
      },
      {
        word: "enough",
        translation: "yetarli",
        example: "enough money",
        difficulty: "easy",
      },
    ],
    {
      topic: "Quantifiers",
      formulas: [
        makeFormula("Countable", "many / few / several / a few", [
          "many books",
          "few cars",
        ]),
        makeFormula("Uncountable", "much / little / a little", [
          "much water",
          "little time",
        ]),
        makeFormula("Both", "a lot of / plenty of / some / any", [
          "a lot of ideas",
          "any problem",
        ]),
      ],
      rules: [
        "Much uncountable bilan, many countable bilan",
        "Any odatda inkor/savolda",
      ],
      exercises: [
        {
          question: "We have ___ (much/many) time.",
          answer: "much",
          explanation: "Uncountable",
        },
        {
          question: "There are ___ (few/little) chairs.",
          answer: "few",
          explanation: "Countable",
        },
        {
          question: "Do you have ___ questions?",
          answer: "any",
          explanation: "Questions - countable, savol",
        },
      ],
    },
    {
      topic: "Talking about amounts",
      phrases: [{ phrase: "We have enough", translation: "Bizda yetarli" }],
      tasks: ["Do'konda miqdor haqida suhbat"],
    },
    {
      youtubeVideos: [
        yt("Quantifiers", "https://www.youtube.com/watch?v=8zEo5o6mPq4"),
      ],
      resources: ["6 Minute English"],
      exercises: ["Quantifiersni to'g'ri tanlang"],
    },
    {
      writing: "Miqdorlar bilan 8 gap",
      speaking: "Sotib olish rejasini ayting",
      vocabulary: "10 ta so'z bilan gaplar",
    }
  ),

  // Day 7 — Prepositions of time/place
  makeDay(
    7,
    [
      {
        word: "in",
        translation: "da (oy/yil)",
        example: "in 2020",
        difficulty: "easy",
      },
      {
        word: "on",
        translation: "da (kun/sana)",
        example: "on Monday",
        difficulty: "easy",
      },
      {
        word: "at",
        translation: "da (soat/joy)",
        example: "at 7 / at home",
        difficulty: "easy",
      },
      {
        word: "between",
        translation: "orasida",
        example: "between A and B",
        difficulty: "easy",
      },
      {
        word: "among",
        translation: "orasida (ko'p)",
        example: "among friends",
        difficulty: "medium",
      },
      {
        word: "next to",
        translation: "yonida",
        example: "next to the bank",
        difficulty: "easy",
      },
      {
        word: "behind",
        translation: "orqasida",
        example: "behind the school",
        difficulty: "easy",
      },
      {
        word: "in front of",
        translation: "oldida",
        example: "in front of the house",
        difficulty: "easy",
      },
      {
        word: "above",
        translation: "ustida (tepasida)",
        example: "above the table",
        difficulty: "medium",
      },
      {
        word: "below",
        translation: "pastida",
        example: "below zero",
        difficulty: "medium",
      },
    ],
    {
      topic: "Prepositions of time & place",
      formulas: [
        makeFormula("Time", "in (months/years), on (days/dates), at (times)", [
          "in May",
          "on Friday",
          "at 7",
        ]),
        makeFormula("Place", "at (point), in (enclosed), on (surface)", [
          "at the door",
          "in the room",
          "on the wall",
        ]),
      ],
      rules: ["In/On/At vaqt uchun qoida", "At/in/on joy uchun qoida"],
      exercises: [
        {
          question: "I was born ___ 1995.",
          answer: "in",
          explanation: "Year → in",
        },
        {
          question: "The meeting is ___ Monday.",
          answer: "on",
          explanation: "Day → on",
        },
        {
          question: "See you ___ 7 pm.",
          answer: "at",
          explanation: "Time → at",
        },
      ],
    },
    {
      topic: "Giving directions",
      phrases: [
        {
          phrase: "Go straight, then turn left",
          translation: "To'g'ri boring, keyin chapga buriling",
        },
      ],
      tasks: ["Shaharda yo'l ko'rsatish dialogi"],
    },
    {
      youtubeVideos: [
        yt("Prepositions", "https://www.youtube.com/watch?v=M6ZBvJkCzH4"),
      ],
      resources: ["Oxford Prepositions"],
      exercises: ["Bo'sh joylarni to'ldirish"],
    },
    {
      writing: "Manzilni tariflang",
      speaking: "Yo'l ko'rsatish mashqi",
      vocabulary: "10 ta predlog bilan gaplar",
    }
  ),

  // Day 8 — Articles
  makeDay(
    8,
    [
      {
        word: "a",
        translation: "bir (noaniq)",
        example: "a book",
        difficulty: "easy",
      },
      {
        word: "an",
        translation: "bir (unli)",
        example: "an apple",
        difficulty: "easy",
      },
      {
        word: "the",
        translation: "aniq artikl",
        example: "the sun",
        difficulty: "easy",
      },
      {
        word: "zero article",
        translation: "artiklsiz",
        example: "I love music",
        difficulty: "medium",
      },
      {
        word: "unique",
        translation: "yagona",
        example: "the only way",
        difficulty: "medium",
      },
      {
        word: "specific",
        translation: "aniq",
        example: "the specific task",
        difficulty: "medium",
      },
      {
        word: "general",
        translation: "umumiy",
        example: "a student",
        difficulty: "easy",
      },
      {
        word: "context",
        translation: "kontekst",
        example: "depends on context",
        difficulty: "medium",
      },
      {
        word: "plural",
        translation: "ko'plik",
        example: "the students",
        difficulty: "easy",
      },
      {
        word: "uncountable",
        translation: "hisoblanmaydi",
        example: "water",
        difficulty: "easy",
      },
    ],
    {
      topic: "Articles: a/an, the, zero",
      formulas: [
        makeFormula("Indefinite", "a/an + singular countable", [
          "a car",
          "an hour",
        ]),
        makeFormula("Definite", "the + known/unique", [
          "the sun",
          "the manager we met",
        ]),
        makeFormula(
          "Zero",
          "No article with plural/uncountable when speaking generally",
          ["I love music", "Students study hard"]
        ),
      ],
      rules: ["An unli tovushdan oldin", "The – oldindan ma'lum narsaga"],
      exercises: [
        {
          question: "He is ___ engineer.",
          answer: "an",
          explanation: "Unli tovush",
        },
        {
          question: "I saw ___ cat. ___ cat was black.",
          answer: "a, The",
          explanation: "Keyingi marta the",
        },
        {
          question: "I like ___ music.",
          answer: "-",
          explanation: "Zero article",
        },
      ],
    },
    {
      topic: "Describing objects",
      phrases: [{ phrase: "This is a...", translation: "Bu ..." }],
      tasks: ["Rasmdagi narsalarni tariflang"],
    },
    {
      youtubeVideos: [
        yt("Articles", "https://www.youtube.com/watch?v=Gq1X6r7yP3E"),
      ],
      resources: ["Cambridge: Articles"],
      exercises: ["A/An/The ni tanlang"],
    },
    {
      writing: "Artikllar bilan 10 gap",
      speaking: "Ob'ektlarni ta'riflash",
      vocabulary: "10 so'z bilan gaplar",
    }
  ),

  // Day 9 — Pronouns
  makeDay(
    9,
    [
      {
        word: "I/me",
        translation: "men/meni",
        example: "I know him. He knows me.",
        difficulty: "easy",
      },
      {
        word: "you/you",
        translation: "sen/seni",
        example: "I saw you.",
        difficulty: "easy",
      },
      {
        word: "he/him",
        translation: "u/uni (erkak)",
        example: "She likes him.",
        difficulty: "easy",
      },
      {
        word: "she/her",
        translation: "u/uni (ayol)",
        example: "I called her.",
        difficulty: "easy",
      },
      {
        word: "they/them",
        translation: "ular/ularni",
        example: "We met them.",
        difficulty: "easy",
      },
      {
        word: "we/us",
        translation: "biz/bizni",
        example: "They helped us.",
        difficulty: "easy",
      },
      {
        word: "mine",
        translation: "meniki",
        example: "This book is mine.",
        difficulty: "easy",
      },
      {
        word: "yours",
        translation: "seniki",
        example: "Is it yours?",
        difficulty: "easy",
      },
      {
        word: "his/hers",
        translation: "unki",
        example: "That's his.",
        difficulty: "easy",
      },
      {
        word: "theirs",
        translation: "ularnikidir",
        example: "The house is theirs.",
        difficulty: "medium",
      },
    ],
    {
      topic: "Pronouns",
      formulas: [
        makeFormula("Subject/Object", "I/me, you/you, he/him, ...", [
          "She likes him",
          "They helped us",
        ]),
        makeFormula(
          "Possessive",
          "my, your, his, her, our, their; mine, yours, ...",
          ["This is my pen", "The pen is mine"]
        ),
      ],
      rules: [
        "Subyekt va obyekt olmoshlarini farqlang",
        "Possessive sifat vs olmosh",
      ],
      exercises: [
        {
          question: "Give the book to ___ (I/me).",
          answer: "me",
          explanation: "Object pronoun",
        },
        {
          question: "Is this pen ___ (you/yours)?",
          answer: "yours",
          explanation: "Possessive pronoun",
        },
        {
          question: "___ (They/Them) are my friends.",
          answer: "They",
          explanation: "Subject pronoun",
        },
      ],
    },
    {
      topic: "Possession",
      phrases: [{ phrase: "It is mine", translation: "Bu meniki" }],
      tasks: ["Olmoshlarni to'g'ri ishlatib dialog tuzing"],
    },
    {
      youtubeVideos: [
        yt("Pronouns", "https://www.youtube.com/watch?v=5eXxC2D1o4k"),
      ],
      resources: ["Grammar Bytes"],
      exercises: ["Olmoshlarni joylashtiring"],
    },
    {
      writing: "Olmoshlar bilan 10 gap",
      speaking: "Rasmlarni ta'riflang",
      vocabulary: "10 olmosh bilan misol",
    }
  ),

  // Day 10 — Present Perfect vs Past Simple (contrast)
  makeDay(
    10,
    [
      {
        word: "just",
        translation: "hozirgina",
        example: "I have just finished.",
        difficulty: "medium",
      },
      {
        word: "already",
        translation: "allaqachon",
        example: "She has already left.",
        difficulty: "medium",
      },
      {
        word: "yet",
        translation: "hali (inkor/savol)",
        example: "Have you finished yet?",
        difficulty: "medium",
      },
      {
        word: "ever",
        translation: "hech",
        example: "Have you ever been to London?",
        difficulty: "medium",
      },
      {
        word: "never",
        translation: "hech qachon",
        example: "I have never tried sushi.",
        difficulty: "medium",
      },
      {
        word: "last",
        translation: "o'tgan",
        example: "last year",
        difficulty: "easy",
      },
      {
        word: "ago",
        translation: "oldin",
        example: "two years ago",
        difficulty: "easy",
      },
      {
        word: "for",
        translation: "... davomida",
        example: "for two years",
        difficulty: "easy",
      },
      {
        word: "since",
        translation: "... dan beri",
        example: "since 2020",
        difficulty: "easy",
      },
      {
        word: "recently",
        translation: "yaqinda",
        example: "I have recently moved.",
        difficulty: "medium",
      },
    ],
    {
      topic: "Present Perfect vs Past Simple",
      formulas: [
        makeFormula("Past Simple", "Subject + V2 + Object", [
          "I visited Rome in 2019",
        ]),
        makeFormula("Present Perfect", "Subject + have/has + V3 + Object", [
          "I have visited Rome twice",
        ]),
      ],
      rules: [
        "Past Simple: aniq vaqt bilan (yesterday, in 2019, last week)",
        "Present Perfect: aniq vaqt yo'q, tajriba/natija",
        "For/since bilan PP; ago bilan Past Simple",
      ],
      exercises: [
        {
          question: "I ___ (see) him yesterday.",
          answer: "saw",
          explanation: "Yesterday → Past Simple",
        },
        {
          question: "I ___ (be) to Paris three times.",
          answer: "have been",
          explanation: "Experience → Present Perfect",
        },
        {
          question: "She ___ (live) here since 2020.",
          answer: "has lived",
          explanation: "Since → PP",
        },
      ],
    },
    {
      topic: "Experiences",
      phrases: [
        { phrase: "I have never...", translation: "Men hech qachon..." },
      ],
      tasks: ["Tajriba haqida suhbat"],
    },
    {
      youtubeVideos: [
        yt(
          "Present Perfect vs Past Simple",
          "https://www.youtube.com/watch?v=By0QdS1FJyg"
        ),
      ],
      resources: ["BBC: PP vs PS"],
      exercises: ["To'g'ri zamonni tanlang"],
    },
    {
      writing: "Tajribangiz haqida yozing",
      speaking: "3 daqiqa gapirish",
      vocabulary: "Trigger so'zlar bilan 10 gap",
    }
  ),
];
