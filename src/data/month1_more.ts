import type { DayData, GrammarFormula, YouTubeVideo } from "../types/types";

type Diff = "easy" | "medium" | "hard";

const f = (
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

const vocab = (
  word: string,
  translation: string,
  example: string,
  difficulty: Diff
) => ({ word, translation, example, difficulty });

const makeDay = (
  id: number,
  topic: string,
  vocabItems: ReturnType<typeof vocab>[],
  formulas: GrammarFormula[],
  rules: string[],
  exercises: { question: string; answer: string; explanation: string }[],
  speakingTopic: string,
  phrases: { phrase: string; translation: string }[],
  tasks: string[],
  videos: YouTubeVideo[],
  resources: string[],
  listeningExercises: string[],
  homework: { writing: string; speaking: string; vocabulary: string }
): DayData => ({
  id,
  vocabulary: vocabItems,
  grammar: { topic, formulas, rules, exercises },
  speaking: { topic: speakingTopic, phrases, tasks },
  listening: {
    youtubeVideos: videos,
    resources,
    exercises: listeningExercises,
  },
  homework,
});

export const moreMonth1Days: DayData[] = [
  // 11 — Conditionals (Zero & First)
  makeDay(
    11,
    "Conditionals: Zero & First",
    [
      vocab("condition", "shart", "This is an important condition.", "medium"),
      vocab("result", "natija", "The result is positive.", "easy"),
      vocab("unless", "... bo'lmasa", "Unless it rains, we'll go.", "medium"),
      vocab(
        "in case",
        "hollarda",
        "Take an umbrella in case it rains.",
        "hard"
      ),
      vocab("provided", "agar", "You can go provided you finish.", "hard"),
      vocab(
        "weather",
        "ob-havo",
        "If the weather is fine, we'll travel.",
        "easy"
      ),
    ],
    [
      f("Zero Conditional", "If + Present, Present", [
        "If water boils, it turns to steam.",
      ]),
      f("First Conditional", "If + Present, will + V1", [
        "If it rains, I will stay home.",
      ]),
    ],
    [
      "Zero: umumiy haqiqatlar",
      "First: real kelajak shartlar",
      "Unless ≈ if not",
    ],
    [
      {
        question: "If you heat ice, it ___ (melt).",
        answer: "melts",
        explanation: "Zero Conditional",
      },
      {
        question: "If I see him, I ___ (call).",
        answer: "will call",
        explanation: "First Conditional",
      },
      {
        question: "We won't go ___ it rains.",
        answer: "unless",
        explanation: "unless = if not",
      },
    ],
    "Talking about real conditions",
    [
      {
        phrase: "If it rains, we'll...",
        translation: "Yomg'ir yog'sa, biz ... qilamiz",
      },
      { phrase: "In case of...", translation: "... holatida" },
    ],
    [
      "Reja haqida 5 ta shartli gap tuzing",
      "Hamkor bilan shartlarni muhokama qiling",
    ],
    [
      yt(
        "Zero & First Conditional",
        "https://www.youtube.com/watch?v=HqVY9B3s5bA"
      ),
    ],
    ["BBC Learning English: Conditionals"],
    ["Videodan misollarni yozing"],
    {
      writing: "Shartli gaplar bilan rejalaringizni yozing",
      speaking: "2 daqiqalik shartli nutq",
      vocabulary: "6 so'zni gaplarda ishlating",
    }
  ),

  // 12 — Second Conditional
  makeDay(
    12,
    "Second Conditional",
    [
      vocab("imagine", "tasavvur qilmoq", "Imagine you won a prize.", "easy"),
      vocab("unlikely", "kam ehtimol", "It's unlikely to happen.", "medium"),
      vocab("would", "... bo'lar edi", "I would travel more.", "easy"),
      vocab(
        "if I were",
        "agar men bo'lsam",
        "If I were you, I'd study.",
        "medium"
      ),
      vocab("dream", "orzu", "I would buy my dream car.", "easy"),
      vocab("choice", "tanlov", "What choice would you make?", "medium"),
    ],
    [
      f("Second Conditional", "If + Past, would + V1", [
        "If I had time, I would help.",
      ]),
    ],
    [
      "Haqiqiy emas holatlar",
      "Were formal variant: If I were you",
      "Would + V1 natija",
    ],
    [
      {
        question: "If I ___ (be) rich, I would travel.",
        answer: "were",
        explanation: "If I were...",
      },
      {
        question: "She would help if she ___ (have) time.",
        answer: "had",
        explanation: "Past simple in if-clause",
      },
      {
        question: "What would you do if you ___ (win) the lottery?",
        answer: "won",
        explanation: "Past form",
      },
    ],
    "Hypothetical situations",
    [
      {
        phrase: "If I were you, I'd...",
        translation: "Agar o'rningda bo'lsam, ... qilardim",
      },
      { phrase: "I would rather...", translation: "Yaxshisi ... qilardim" },
    ],
    ["Maslahat berish dialogi", "Orzu holatlari haqida suhbat"],
    [yt("Second Conditional", "https://www.youtube.com/watch?v=KJYGCkzY8Ys")],
    ["Perfect English Grammar: 2nd conditional"],
    ["2nd conditional gaplarni to'ldiring"],
    {
      writing: "Agar ... bo'lsa mavzusida 8 gap",
      speaking: "Rol o'ynash: maslahat",
      vocabulary: "6 so'zni ishlating",
    }
  ),

  // 13 — Third & Mixed
  makeDay(
    13,
    "Third & Mixed Conditionals",
    [
      vocab("regret", "afsus", "I regret the mistake.", "medium"),
      vocab("past", "o'tmish", "In the past, we worked a lot.", "easy"),
      vocab("outcome", "natija", "The outcome could have changed.", "hard"),
      vocab("if only", "koshki", "If only I had known.", "hard"),
      vocab("hadn't", "qilmaganda", "If he hadn't left...", "medium"),
      vocab("would have", "bo'lgan bo'lardi", "We would have won.", "medium"),
    ],
    [
      f("Third", "If + had + V3, would have + V3", [
        "If I had studied, I would have passed.",
      ]),
      f("Mixed", "If + had + V3, would + V1 (now)", [
        "If I had slept more, I would feel better now.",
      ]),
    ],
    [
      "Third: o'tmishdagi afsuslanish",
      "Mixed: o'tmish sababi – hozirgi natija",
      "Had I known... inversiya",
    ],
    [
      {
        question: "If she had left earlier, she ___ (catch) the train.",
        answer: "would have caught",
        explanation: "Third",
      },
      {
        question: "If I had eaten, I ___ (not be) hungry now.",
        answer: "wouldn't be",
        explanation: "Mixed",
      },
      {
        question: "Had I known, I ___ (call) you.",
        answer: "would have called",
        explanation: "Inversiya",
      },
    ],
    "Regrets & alternatives",
    [
      { phrase: "If only I had...", translation: "Koshki ... qilganimda" },
      { phrase: "I would have...", translation: "... qilgan bo'lardim" },
    ],
    ["O'tmish holatlarini muhokama qiling"],
    [yt("Third Conditional", "https://www.youtube.com/watch?v=Kz4x9Yt6j6A")],
    ["Grammar: third conditional"],
    ["Third/mixed gap-fill"],
    {
      writing: "O'tmishdagi 5 afsus",
      speaking: "Alternativ natijalar",
      vocabulary: "6 so'z bilan gaplar",
    }
  ),

  // 14 — Passive Voice (basics)
  makeDay(
    14,
    "Passive Voice: Basics",
    [
      vocab("by", "tomonidan", "The book was written by her.", "easy"),
      vocab("produce", "ishlab chiqarmoq", "Cars are produced here.", "medium"),
      vocab("build", "qurmoq", "The bridge was built in 2010.", "easy"),
      vocab("deliver", "yetkazmoq", "The items are delivered daily.", "medium"),
      vocab("invent", "ixtiro qilmoq", "The phone was invented...", "medium"),
      vocab("made", "yasalgan", "It is made of wood.", "easy"),
    ],
    [
      f("Present Simple Passive", "am/is/are + V3", ["It is done."]),
      f("Past Simple Passive", "was/were + V3", ["It was done."]),
    ],
    ["Agent 'by' bilan", "Obyekt muhim", "Tense moslashadi"],
    [
      {
        question: "The report ___ (write) yesterday.",
        answer: "was written",
        explanation: "Past passive",
      },
      {
        question: "Cars ___ (make) in this factory.",
        answer: "are made",
        explanation: "Present passive",
      },
      {
        question: "The email ___ (send).",
        answer: "has been sent",
        explanation: "Present perfect passive",
      },
    ],
    "Processes",
    [{ phrase: "It is made of...", translation: "U ...dan yasalgan" }],
    ["Jarayonni tasvirlash"],
    [yt("Passive Voice", "https://www.youtube.com/watch?v=_2S17Z1r3g8")],
    ["BBC Passive"],
    ["Active → Passive o'zgartiring"],
    {
      writing: "Ishlab chiqarish jarayonini yozing",
      speaking: "Jarayonni tushuntirish",
      vocabulary: "6 so'z bilan gaplar",
    }
  ),

  // 15 — Passive (various tenses)
  makeDay(
    15,
    "Passive Voice: Tenses",
    [
      vocab("service", "xizmat", "Service is provided.", "easy"),
      vocab(
        "announce",
        "e'lon qilmoq",
        "It was announced yesterday.",
        "medium"
      ),
      vocab("expect", "kutilmoq", "The product is expected soon.", "medium"),
      vocab("require", "talab qilmoq", "Experience is required.", "medium"),
      vocab("allow", "ruxsat bermoq", "Visitors are not allowed.", "easy"),
      vocab("pay", "to'lamoq", "He was paid well.", "easy"),
    ],
    [
      f("Present Perfect Passive", "has/have been + V3", ["It has been done."]),
      f("Future Passive", "will be + V3", ["It will be done."]),
    ],
    ["Tense combinationlari", "Agent ko'pincha tushiriladi"],
    [
      {
        question: "The work ___ (complete) by Friday.",
        answer: "will be completed",
        explanation: "Future passive",
      },
      {
        question: "The task ___ (already/finish).",
        answer: "has already been finished",
        explanation: "Present perfect passive",
      },
      {
        question: "Rules ___ (not/allow) here.",
        answer: "are not allowed",
        explanation: "Present passive negative",
      },
    ],
    "Company policies",
    [
      {
        phrase: "It will be done by...",
        translation: "... tomonidan bajariladi",
      },
    ],
    ["Siyosatlarni tushuntirish"],
    [yt("Passive Tenses", "https://www.youtube.com/watch?v=0Qv3xb8R9qk")],
    ["EngVid Passive"],
    ["Passive turlarini moslang"],
    {
      writing: "Qoidalarni passive bilan yozing",
      speaking: "E'lon qilish mashqi",
      vocabulary: "6 so'z bilan gaplar",
    }
  ),

  // 16 — Reported Speech (statements)
  makeDay(
    16,
    "Reported Speech: Statements",
    [
      vocab("say", "aytmoq", "He said that...", "easy"),
      vocab("tell", "aytmoq (kimlargadir)", "She told me...", "easy"),
      vocab("report", "hisobot", "They reported the news.", "medium"),
      vocab("claim", "da'vo qilmoq", "She claimed that...", "hard"),
      vocab("explain", "tushuntirmoq", "He explained that...", "medium"),
      vocab("mention", "tilga olmoq", "She mentioned that...", "medium"),
    ],
    [
      f("Backshift", "Present → Past, will → would, can → could", [
        "He said he was busy.",
      ]),
      f("That-clause", "say/tell + that + clause", [
        "She told me that she was late.",
      ]),
    ],
    ["Zamon orqaga suriladi", "Tell + object", "Time expressions o'zgaradi"],
    [
      {
        question: '"I am tired" → He said he ___ tired.',
        answer: "was",
        explanation: "Backshift",
      },
      {
        question: '"I will call" → She said she ___ call.',
        answer: "would",
        explanation: "will → would",
      },
      {
        question: '"I can help" → He said he ___ help.',
        answer: "could",
        explanation: "can → could",
      },
    ],
    "Reporting news",
    [{ phrase: "He said that...", translation: "U shuni aytdiki..." }],
    ["Qisqa yangiliklarni qayta aytish"],
    [yt("Reported Speech", "https://www.youtube.com/watch?v=9cP9e2dD0eA")],
    ["BBC Reported Speech"],
    ["Direct → reported"],
    {
      writing: "Yangilikni reported speech bilan yozing",
      speaking: "Hikoya qilish",
      vocabulary: "6 so'z bilan gaplar",
    }
  ),

  // 17 — Reported (questions/commands)
  makeDay(
    17,
    "Reported Speech: Questions & Commands",
    [
      vocab("ask", "so'ramoq", "He asked where I lived.", "easy"),
      vocab("order", "buyruq", "She ordered him to wait.", "medium"),
      vocab("request", "iltimos", "They requested us to stay.", "medium"),
      vocab("advise", "maslahat bermoq", "He advised me to rest.", "medium"),
      vocab("instruct", "yo'riq bermoq", "She instructed me to call.", "hard"),
      vocab("wonder", "bilishni istamoq", "I wondered if...", "medium"),
    ],
    [
      f("Wh-questions", "asked + wh-word + clause", [
        "He asked where I lived.",
      ]),
      f("Yes/No", "asked if/whether + clause", ["She asked if I was fine."]),
      f("Commands", "told/asked + object + to V1", ["He told me to wait."]),
    ],
    ["If/whether yes-no uchun", "To-infinitive buyruqlar uchun"],
    [
      {
        question: "Where do you live? → He asked where I ___.",
        answer: "lived",
        explanation: "Backshift",
      },
      {
        question: '"Wait!" → He told me ___ wait.',
        answer: "to",
        explanation: "to + V1",
      },
      {
        question: "Are you OK? → She asked if I ___ OK.",
        answer: "was",
        explanation: "if/whether",
      },
    ],
    "Asking & telling",
    [
      {
        phrase: "He asked me to...",
        translation: "U mendan ... qilishni so'radi",
      },
    ],
    ["Intervyuni qayta hikoya qilish"],
    [yt("Reported Questions", "https://www.youtube.com/watch?v=TSc1b7m3QnA")],
    ["Engvid Reported Questions"],
    ["Questions/commands ni reported qiling"],
    {
      writing: "3 savolni reported qilib yozing",
      speaking: "Dialogni qayta hikoya qiling",
      vocabulary: "6 so'z bilan gaplar",
    }
  ),

  // 18 — Modals: obligation/advice
  makeDay(
    18,
    "Modals: Obligation & Advice",
    [
      vocab("must", "kerak", "You must wear a helmet.", "easy"),
      vocab("have to", "majbur", "I have to work.", "easy"),
      vocab("should", "kerak (maslahat)", "You should rest.", "easy"),
      vocab("ought to", "kerak (m.)", "You ought to study.", "medium"),
      vocab("prohibit", "taqiqlamoq", "Smoking is prohibited.", "medium"),
      vocab("permit", "ruxsat bermoq", "Parking is permitted.", "medium"),
    ],
    [
      f("Must/Have to", "Subject + must/have to + V1", [
        "You must go.",
        "I have to leave.",
      ]),
      f("Should/Ought to", "Subject + should/ought to + V1", [
        "You should try.",
      ]),
    ],
    ["Must – ichki/yuridik majburiyat", "Should – maslahat"],
    [
      {
        question: "You ___ (not) smoke here.",
        answer: "mustn't",
        explanation: "Prohibition",
      },
      {
        question: "You ___ see a doctor.",
        answer: "should",
        explanation: "Advice",
      },
      {
        question: "I ___ work late today.",
        answer: "have to",
        explanation: "External obligation",
      },
    ],
    "Rules & advice",
    [{ phrase: "You should...", translation: "Siz ... qilishingiz kerak" }],
    ["Qoidalar haqida suhbat"],
    [yt("Should/Must", "https://www.youtube.com/watch?v=6sVj0gQx9xU")],
    ["Modal verbs overview"],
    ["Modalni tanlang"],
    {
      writing: "Qoidalar ro'yxati",
      speaking: "Maslahat bering",
      vocabulary: "6 so'z bilan gaplar",
    }
  ),

  // 19 — Phrasal Verbs 1
  makeDay(
    19,
    "Phrasal Verbs 1",
    [
      vocab("give up", "taslim bo'lmoq", "Don't give up.", "easy"),
      vocab(
        "look after",
        "g'amxo'rlik qilmoq",
        "She looks after her sister.",
        "medium"
      ),
      vocab("turn on", "yoqmoq", "Turn on the TV.", "easy"),
      vocab("turn off", "o'chirmoq", "Turn off the lights.", "easy"),
      vocab("pick up", "olib ketmoq", "I'll pick you up.", "easy"),
      vocab("run out of", "tugamoq", "We ran out of milk.", "medium"),
    ],
    [f("Pattern", "verb + particle", ["give up", "look after"])],
    ["Ma'nolari ko'pincha idiomatik", "Obyekt o'rni o'zgarishi mumkin"],
    [
      {
        question: "We ___ (finish) milk.",
        answer: "ran out of",
        explanation: "Phrasal verb",
      },
      {
        question: "Please ___ the TV.",
        answer: "turn off",
        explanation: "Phrasal verb",
      },
      {
        question: "She ___ her brother.",
        answer: "looks after",
        explanation: "Phrasal verb",
      },
    ],
    "Daily actions",
    [
      {
        phrase: "Could you turn on...",
        translation: "... yoqib bera olasizmi",
      },
    ],
    ["Uy ishlarini muhokama qilish"],
    [yt("Common Phrasal Verbs", "https://www.youtube.com/watch?v=V4Hn0nKpQ9M")],
    ["List of phrasal verbs"],
    ["Phrasalni moslang"],
    {
      writing: "Phrasal verbs bilan 8 gap",
      speaking: "Vaziyatli suhbat",
      vocabulary: "6 ibora bilan misol",
    }
  ),

  // 20 — Phrasal Verbs 2
  makeDay(
    20,
    "Phrasal Verbs 2",
    [
      vocab("put off", "kechiktirmoq", "Don't put it off.", "medium"),
      vocab("figure out", "tushunib yetmoq", "We figured it out.", "medium"),
      vocab("carry on", "davom etmoq", "Carry on working.", "easy"),
      vocab("set up", "yo'lga qo'ymoq", "We set up a meeting.", "medium"),
      vocab(
        "look forward to",
        "intiqlik bilan kutmoq",
        "I look forward to it.",
        "easy"
      ),
      vocab("work out", "yechim topmoq", "We'll work it out.", "medium"),
    ],
    [f("Pattern", "verb + particle (2)", ["put off", "figure out"])],
    ["Ko'p so'zanli phrasallar", "Ingliz tilida juda keng tarqalgan"],
    [
      {
        question: "Let's ___ (arrange) a meeting.",
        answer: "set up",
        explanation: "Phrasal",
      },
      {
        question: "I ___ to seeing you.",
        answer: "look forward",
        explanation: "Phrasal",
      },
      {
        question: "We will ___ the problem.",
        answer: "work out",
        explanation: "Phrasal",
      },
    ],
    "Planning",
    [{ phrase: "Let's set up...", translation: "Keling ... tashkil qilaylik" }],
    ["Ish rejalashtirish suhbatlari"],
    [yt("Phrasal Verbs List", "https://www.youtube.com/watch?v=tZ1z7kYbd7E")],
    ["Phrasal verbs practice"],
    ["Moslash va gap to'ldirish"],
    {
      writing: "Ish rejasi matni",
      speaking: "Phrasal bilan dialog",
      vocabulary: "6 phrasal bilan gaplar",
    }
  ),

  // 21 — Adverbs
  makeDay(
    21,
    "Adverbs of Frequency & Manner",
    [
      vocab("always", "har doim", "She always smiles.", "easy"),
      vocab("usually", "odatda", "We usually eat at 7.", "easy"),
      vocab("often", "ko'pincha", "He often travels.", "easy"),
      vocab("rarely", "kamdan-kam", "I rarely watch TV.", "medium"),
      vocab("carefully", "ehtiyotkorlik bilan", "Drive carefully.", "easy"),
      vocab("quickly", "tez", "He solved it quickly.", "easy"),
    ],
    [
      f("Frequency", "always/usually/often/sometimes/rarely/never", [
        "I often read.",
      ]),
      f("Manner", "adj + ly", ["She sings beautifully."]),
    ],
    ["Frequency adverbs odatda asosiy fe'l oldida", "Never inkor ma'no beradi"],
    [
      {
        question: "He ___ (often) goes to the gym.",
        answer: "often",
        explanation: "Placement",
      },
      {
        question: "Speak ___ (careful).",
        answer: "carefully",
        explanation: "-ly",
      },
      {
        question: "She ___ (never) eats meat.",
        answer: "never",
        explanation: "Frequency",
      },
    ],
    "Daily routines",
    [{ phrase: "I usually...", translation: "Men odatda..." }],
    ["Kundalik odatlar haqida suhbat"],
    [yt("Adverbs", "https://www.youtube.com/watch?v=y5f0k-8Q8xM")],
    ["Adverbs practice"],
    ["Bo'sh joylarni to'ldirish"],
    {
      writing: "Kun tartibingiz",
      speaking: "Odatlar haqida gapiring",
      vocabulary: "6 adverb bilan gaplar",
    }
  ),

  // 22 — Relative Clauses
  makeDay(
    22,
    "Relative Clauses",
    [
      vocab("who", "kim", "The person who helped me.", "easy"),
      vocab("which", "qaysi", "The book which I bought.", "easy"),
      vocab("that", "shu/ki", "The car that I drive.", "easy"),
      vocab("where", "qayerda", "The place where I live.", "easy"),
      vocab("whose", "kimning", "The girl whose bag...", "medium"),
      vocab(
        "non-defining",
        "qo'shimcha",
        "My sister, who lives in Tashkent, ...",
        "hard"
      ),
    ],
    [
      f("Defining", "N + who/which/that + clause", ["The man who called..."]),
      f("Non-defining", ", who/which ,", ["My car, which is new, ..."]),
    ],
    ["That faqat definingda", "Non-defining vergul bilan"],
    [
      {
        question: "The man ___ called is my boss.",
        answer: "who",
        explanation: "Defining",
      },
      {
        question: "My phone, ___ is new, is fast.",
        answer: "which",
        explanation: "Non-defining",
      },
      {
        question: "The place ___ I live is quiet.",
        answer: "where",
        explanation: "Relative adverb",
      },
    ],
    "Describing people/places",
    [{ phrase: "The person who...", translation: "... qilgan odam" }],
    ["Ta'riflash mashqi"],
    [yt("Relative Clauses", "https://www.youtube.com/watch?v=MZfI0rF4H54")],
    ["Relative clauses guide"],
    ["Which/who/that tanlash"],
    {
      writing: "Odam/joylarni tasvirlash",
      speaking: "Rasmlar asosida gapirish",
      vocabulary: "6 so'z bilan gaplar",
    }
  ),

  // 23 — Present Perfect Continuous review
  makeDay(
    23,
    "Present Perfect Continuous: Review",
    [
      vocab("recently", "yaqinda", "I have been studying recently.", "medium"),
      vocab("since", "... dan beri", "since morning", "easy"),
      vocab("for", "... davomida", "for two hours", "easy"),
      vocab("temporary", "vaqtinchalik", "temporary job", "medium"),
      vocab("ongoing", "davom etayotgan", "ongoing project", "hard"),
      vocab("evidence", "dalil", "There's evidence of progress.", "hard"),
    ],
    [f("PPC", "have/has been + V-ing", ["I have been working all day"])],
    ["Davomiylik, yaqinda tugagan harakat", "For/since bilan"],
    [
      {
        question: "She ___ (study) since 9.",
        answer: "has been studying",
        explanation: "PPC",
      },
      {
        question: "I ___ (work) all morning.",
        answer: "have been working",
        explanation: "PPC",
      },
      {
        question: "They ___ (not/sleep).",
        answer: "haven't been sleeping",
        explanation: "Negation",
      },
    ],
    "Progress updates",
    [
      {
        phrase: "I've been working on...",
        translation: "Men ... ustida ishlayapman",
      },
    ],
    ["Loyiha holatini muhokama qilish"],
    [
      yt(
        "Present Perfect Continuous",
        "https://www.youtube.com/watch?v=0o8f7m4N6qk"
      ),
    ],
    ["Continuous review"],
    ["PPC gap to'ldirish"],
    {
      writing: "Faoliyatingiz haqida yozing",
      speaking: "Holatni tushuntirish",
      vocabulary: "6 so'z bilan gaplar",
    }
  ),

  // 24 — Past Perfect
  makeDay(
    24,
    "Past Perfect",
    [
      vocab("already", "allaqachon", "He had already left.", "medium"),
      vocab("before", "...dan oldin", "before I arrived", "easy"),
      vocab("by the time", "... vaqtga kelib", "by the time we came", "hard"),
      vocab("sequence", "ketma-ketlik", "Event sequence", "medium"),
      vocab("prior", "oldingi", "prior experience", "hard"),
      vocab("earlier", "ilgari", "earlier meeting", "easy"),
    ],
    [f("Past Perfect", "had + V3", ["I had finished before he came"])],
    ["O'tmishda birinchi bo'lgan harakat", "By the time ... had + V3"],
    [
      {
        question: "By the time we arrived, he ___ (leave).",
        answer: "had left",
        explanation: "PP",
      },
      {
        question: "She ___ (finish) before 6.",
        answer: "had finished",
        explanation: "PP",
      },
      {
        question: "They ___ (not/eat).",
        answer: "hadn't eaten",
        explanation: "Negation",
      },
    ],
    "Narratives",
    [{ phrase: "By the time...", translation: "... paytga kelib" }],
    ["Hikoya qilish"],
    [yt("Past Perfect", "https://www.youtube.com/watch?v=Gf2c1jT0Kz4")],
    ["Perfect tenses"],
    ["Past Perfect to'ldirish"],
    {
      writing: "Hikoya yozing",
      speaking: "Vaqt chizig'i bilan tushuntiring",
      vocabulary: "6 so'z bilan gaplar",
    }
  ),

  // 25 — Future Perfect/Continuous
  makeDay(
    25,
    "Future Perfect & Future Perfect Continuous",
    [
      vocab("by", "...gacha", "by next year", "easy"),
      vocab("deadline", "muddat", "by the deadline", "medium"),
      vocab("duration", "davomiylik", "for two months", "hard"),
      vocab("forecast", "bashorat", "forecast the result", "hard"),
      vocab("estimate", "taxmin qilmoq", "estimate time", "medium"),
      vocab("progress", "rivojlanish", "progress by then", "easy"),
    ],
    [
      f("Future Perfect", "will have + V3", ["I will have finished by 6."]),
      f("Future Perfect Continuous", "will have been + V-ing", [
        "I will have been working for 2 hours by 6.",
      ]),
    ],
    [
      "Future Perfect – tugallanish nuqtasi",
      "FP Continuous – davomiylik nuqtasi",
    ],
    [
      {
        question: "By 2026 I ___ (finish) university.",
        answer: "will have finished",
        explanation: "FP",
      },
      {
        question: "By 6 pm we ___ (work) for 8 hours.",
        answer: "will have been working",
        explanation: "FPC",
      },
      {
        question: "They ___ (not/complete) it by Friday.",
        answer: "will not have completed",
        explanation: "FP neg",
      },
    ],
    "Long-term planning",
    [{ phrase: "By the time...", translation: "... paytga qadar" }],
    ["Reja va muddat"],
    [yt("Future Perfect", "https://www.youtube.com/watch?v=4M9S9mF8YtU")],
    ["Perfect tenses"],
    ["FP/FPC mashqlari"],
    {
      writing: "Uzoq muddatli maqsadlar",
      speaking: "Rejalar haqida gapiring",
      vocabulary: "6 so'z bilan gaplar",
    }
  ),

  // 26 — Food & Count/Uncount review
  makeDay(
    26,
    "Food: Countable/Uncountable Review",
    [
      vocab("ingredient", "mahsulot", "The ingredient list.", "medium"),
      vocab("portion", "porsiya", "A large portion.", "easy"),
      vocab("recipe", "retsept", "A simple recipe.", "medium"),
      vocab("spice", "ziravor", "Add some spice.", "easy"),
      vocab("dairy", "sut mahsulotlari", "Dairy products.", "medium"),
      vocab("grain", "don mahsulotlari", "Whole grains.", "hard"),
    ],
    [
      f("Quantifiers", "much/many/some/any/a lot of", [
        "many apples",
        "much rice",
      ]),
    ],
    ["Ovqat mavzusida hisoblanuvchi-hisoblanmaydigan"],
    [
      {
        question: "How ___ sugar do you need?",
        answer: "much",
        explanation: "Uncountable",
      },
      {
        question: "There are ___ apples.",
        answer: "many",
        explanation: "Countable",
      },
      {
        question: "We have ___ milk.",
        answer: "some",
        explanation: "Positive",
      },
    ],
    "Cooking talk",
    [{ phrase: "a pinch of...", translation: "... chimdim" }],
    ["Retsept haqida suhbat"],
    [
      yt(
        "Countable vs Uncountable",
        "https://www.youtube.com/watch?v=6Wq2i3lNfTQ"
      ),
    ],
    ["Cooking podcasts"],
    ["Quantifier tanlang"],
    {
      writing: "Sevimli retseptingiz",
      speaking: "Xarid ro'yxati",
      vocabulary: "6 so'z bilan gaplar",
    }
  ),

  // 27 — Travel English
  makeDay(
    27,
    "Travel English",
    [
      vocab("itinerary", "safari reja", "Create an itinerary.", "hard"),
      vocab(
        "boarding pass",
        "parvoz kartasi",
        "Keep your boarding pass.",
        "medium"
      ),
      vocab("customs", "bojxona", "Go through customs.", "medium"),
      vocab("delayed", "kechikkan", "The flight is delayed.", "easy"),
      vocab(
        "accommodation",
        "yotoqxona/joylashuv",
        "Find accommodation.",
        "hard"
      ),
      vocab("landmark", "diqqatga sazovor joy", "Visit landmarks.", "easy"),
    ],
    [f("Requests", "Can/Could/May + V1", ["Could you help me?"])],
    ["Aeroport, mehmonxona, yo'l so'rash iboralari"],
    [
      {
        question: "___ you show me the way?",
        answer: "Could",
        explanation: "Polite request",
      },
      {
        question: "The flight is ___ (kechikkan).",
        answer: "delayed",
        explanation: "Vocabulary",
      },
      {
        question: "I need to go through ___.",
        answer: "customs",
        explanation: "Vocabulary",
      },
    ],
    "At the airport",
    [{ phrase: "Where is the gate?", translation: "Qaysi chiqish?" }],
    ["Safar suhbatlari"],
    [yt("Travel English", "https://www.youtube.com/watch?v=3QW3M8oZkVQ")],
    ["Travel podcasts"],
    ["Dialog to'ldiring"],
    {
      writing: "Safar rejangiz",
      speaking: "Aeroport roli",
      vocabulary: "6 so'z bilan gaplar",
    }
  ),

  // 28 — Health
  makeDay(
    28,
    "Health & Doctor",
    [
      vocab("symptom", "alomat", "What are your symptoms?", "medium"),
      vocab("appointment", "qabul", "Doctor's appointment.", "easy"),
      vocab("prescription", "retsept (dori)", "Get a prescription.", "hard"),
      vocab("allergy", "allergiya", "Allergy test.", "medium"),
      vocab("treatment", "davolash", "Treatment plan.", "hard"),
      vocab("recovery", "tu'salish", "Quick recovery.", "medium"),
    ],
    [
      f("Should/Must", "Advice & obligation", [
        "You should rest.",
        "You must see a doctor.",
      ]),
    ],
    ["Sog'liq mavzusi iboralari"],
    [
      {
        question: "You ___ (should/must) drink water.",
        answer: "should",
        explanation: "Advice",
      },
      {
        question: "He has an ___ with the doctor.",
        answer: "appointment",
        explanation: "Vocab",
      },
      {
        question: "The doctor gave a ___.",
        answer: "prescription",
        explanation: "Vocab",
      },
    ],
    "At the clinic",
    [{ phrase: "I have a fever.", translation: "Meni isitmam bor." }],
    ["Sog'liq suhbatlari"],
    [yt("Doctor Visit English", "https://www.youtube.com/watch?v=xpG7i8J8r8M")],
    ["Health podcasts"],
    ["Symptoms matching"],
    {
      writing: "Kasal bo'lgan kuningiz",
      speaking: "Doktor bilan dialog",
      vocabulary: "6 so'z bilan gaplar",
    }
  ),

  // 29 — Shopping & Complaints
  makeDay(
    29,
    "Shopping & Complaints",
    [
      vocab("refund", "pulni qaytarish", "Ask for a refund.", "medium"),
      vocab("receipt", "chek", "Keep the receipt.", "easy"),
      vocab("warranty", "kafolat", "Under warranty.", "hard"),
      vocab("exchange", "almashtirish", "Exchange the item.", "medium"),
      vocab("faulty", "nuqsonli", "Faulty product.", "hard"),
      vocab(
        "customer service",
        "mijoz xizmati",
        "Call customer service.",
        "easy"
      ),
    ],
    [
      f("Requests/Complaints", "polite phrases", [
        "I'd like to complain about...",
      ]),
    ],
    ["Rasmiy shikoyat iboralari"],
    [
      {
        question: "I want a ___ (pulni qaytarish).",
        answer: "refund",
        explanation: "Vocab",
      },
      {
        question: "Do you have the ___?",
        answer: "receipt",
        explanation: "Vocab",
      },
      {
        question: "It's still under ___.",
        answer: "warranty",
        explanation: "Vocab",
      },
    ],
    "At the store",
    [
      {
        phrase: "I'd like to speak to the manager.",
        translation: "Menejer bilan gaplashmoqchiman.",
      },
    ],
    ["Do'konda vaziyatlar"],
    [yt("Shopping English", "https://www.youtube.com/watch?v=7jl2i6k7j5g")],
    ["Retail conversations"],
    ["Complaint role-play"],
    {
      writing: "Shikoyat xatini yozing",
      speaking: "Do'konda dialog",
      vocabulary: "6 so'z bilan gaplar",
    }
  ),

  // 30 — Review & Assessment
  makeDay(
    30,
    "Month 1 Review & Assessment",
    [
      vocab("review", "ko'rib chiqish", "Monthly review.", "easy"),
      vocab("assessment", "baholash", "Final assessment.", "medium"),
      vocab("strength", "kuchli tomon", "Identify strengths.", "hard"),
      vocab("weakness", "kuchsiz tomon", "Find weaknesses.", "hard"),
      vocab("goal", "maqsad", "Set next goals.", "easy"),
      vocab("progress", "rivojlanish", "Measure progress.", "easy"),
    ],
    [
      f("Mixed Grammar", "review of month 1", [
        "tense contrast",
        "modals",
        "conditionals",
      ]),
    ],
    ["Barcha mavzular qayta ko'rib chiqiladi"],
    [
      {
        question: "Choose correct: If it rains, we ___ (stay/will stay).",
        answer: "will stay",
        explanation: "1st conditional",
      },
      {
        question: "He ___ (has/had) left by 6.",
        answer: "had",
        explanation: "Past Perfect",
      },
      {
        question: "It ___ (is made/is making) of glass.",
        answer: "is made",
        explanation: "Passive",
      },
    ],
    "Final presentation",
    [
      {
        phrase: "I have improved in...",
        translation: "Men ... bo'yicha yaxshilashdim",
      },
    ],
    ["Oy yakuni va reja"],
    [yt("English Review", "https://www.youtube.com/watch?v=QVv1r9d-0Qw")],
    ["Monthly review resources"],
    ["Mini test & speaking task"],
    {
      writing: "Oylik refleksiya",
      speaking: "3 daqiqa taqdimot",
      vocabulary: "6 so'z bilan gaplar",
    }
  ),
];
