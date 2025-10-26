import type { MonthData, DayData } from "../types/types";

// Day 1: Business Meetings
const day1: DayData = {
  id: 1,
  vocabulary: [
    {
      word: "agenda",
      translation: "kun tartibi, reja",
      example: "Let's review the agenda for today's meeting.",
      difficulty: "medium",
    },
    {
      word: "collaborate",
      translation: "hamkorlik qilmoq",
      example: "Our teams need to collaborate on this project.",
      difficulty: "medium",
    },
    {
      word: "implement",
      translation: "amalga oshirmoq, joriy qilmoq",
      example: "We will implement the new system next month.",
      difficulty: "hard",
    },
    {
      word: "delegate",
      translation: "topshirmoq, vakolat bermoq",
      example: "A good manager knows how to delegate tasks.",
      difficulty: "medium",
    },
    {
      word: "objective",
      translation: "maqsad, vazifa",
      example: "Our main objective is to increase sales.",
      difficulty: "easy",
    },
    {
      word: "strategy",
      translation: "strategiya, reja",
      example: "We need to develop a new marketing strategy.",
      difficulty: "medium",
    },
    {
      word: "revenue",
      translation: "daromad, tushum",
      example: "The company's revenue has increased by 20%.",
      difficulty: "hard",
    },
    {
      word: "initiative",
      translation: "tashabbus, qadam",
      example: "This is a new initiative to improve customer service.",
      difficulty: "hard",
    },
    {
      word: "proposal",
      translation: "taklif, loyiha",
      example: "I'll send you the proposal by email.",
      difficulty: "medium",
    },
    {
      word: "deadline",
      translation: "muddat, so'nggi sana",
      example: "The deadline for this project is next Friday.",
      difficulty: "easy",
    },
  ],
  grammar: {
    topic: "Present Perfect & Present Perfect Continuous",
    formulas: [
      {
        title: "Present Perfect",
        structure: "Subject + have/has + V3 + Object",
        examples: [
          "I have finished the report",
          "She has worked here for 5 years",
          "They have completed the project",
        ],
      },
      {
        title: "Present Perfect Negative",
        structure: "Subject + have/has + not + V3 + Object",
        examples: [
          "I have not finished the report",
          "She has not worked here long",
          "They have not completed the project",
        ],
      },
      {
        title: "Present Perfect Questions",
        structure: "Have/Has + Subject + V3 + Object?",
        examples: [
          "Have you finished the report?",
          "Has she worked here long?",
          "Have they completed the project?",
        ],
      },
      {
        title: "Present Perfect Continuous",
        structure: "Subject + have/has + been + V1(ing) + Object",
        examples: [
          "I have been working on this for hours",
          "She has been living here since 2020",
          "They have been discussing this all morning",
        ],
      },
      {
        title: "Present Perfect Continuous Negative",
        structure: "Subject + have/has + not + been + V1(ing) + Object",
        examples: [
          "I have not been working here long",
          "She has not been feeling well",
          "They have not been making progress",
        ],
      },
      {
        title: "Present Perfect Continuous Questions",
        structure: "Have/Has + Subject + been + V1(ing) + Object?",
        examples: [
          "Have you been working here long?",
          "Has she been living here since 2020?",
          "Have they been making progress?",
        ],
      },
    ],
    rules: [
      "Present Perfect: tugallangan harakat, natijasi hozir muhim (I have finished the report)",
      "Present Perfect: tajriba haqida (I have been to London)",
      "Present Perfect: davom etayotgan harakat (I have worked here for 5 years)",
      "Present Perfect Continuous: davom etayotgan harakat, davomiyligi muhim (I have been working here for 5 years)",
      "Present Perfect Continuous: yaqinda tugagan harakat, natijasi ko'rinib turibdi (I have been running - still breathing heavily)",
      "For: davomiylik muddati (for 2 years, for a long time)",
      "Since: boshlanish vaqti (since 2020, since Monday)",
    ],
    exercises: [
      {
        question: "We ___ (work) on this project since January.",
        answer: "have been working",
        explanation:
          "Davom etayotgan harakat, since bilan - Present Perfect Continuous",
      },
      {
        question: "I ___ (attend) three meetings today.",
        answer: "have attended",
        explanation: "Tugallangan harakat, natijasi muhim - Present Perfect",
      },
      {
        question: "How long ___ you ___ (study) English?",
        answer: "have, been studying",
        explanation:
          "Davom etayotgan harakat, davomiyligi so'ralyapti - Present Perfect Continuous",
      },
      {
        question: "She ___ (not/finish) the presentation yet.",
        answer: "has not finished",
        explanation: "Tugallanmagan harakat, yet bilan - Present Perfect",
      },
      {
        question: "They ___ (negotiate) the deal all week.",
        answer: "have been negotiating",
        explanation:
          "Davom etayotgan harakat, all week - Present Perfect Continuous",
      },
    ],
  },
  speaking: {
    topic: "Business Meetings",
    phrases: [
      {
        phrase: "I'd like to start by...",
        translation: "... bilan boshlamoqchiman",
      },
      {
        phrase: "Let's move on to the next point...",
        translation: "Keyingi masalaga o'taylik...",
      },
      {
        phrase: "Could you please elaborate on that?",
        translation: "Bu haqda kengroq ma'lumot bera olasizmi?",
      },
      {
        phrase: "I'd like to raise a point about...",
        translation: "... haqida fikr bildirmoqchiman",
      },
      {
        phrase: "To summarize the main points...",
        translation: "Asosiy fikrlarni umumlashtirsak...",
      },
      {
        phrase: "Any questions or comments?",
        translation: "Savollar yoki fikrlar bormi?",
      },
    ],
    tasks: [
      "Biznes yig'ilish simulyatsiyasini o'tkazing",
      "Loyiha taqdimotini tayyorlang",
      "Yig'ilish bayonnomasini yozing",
      "Hamkasbingiz bilan yig'ilish dialogini mashq qiling",
    ],
  },
  listening: {
    youtubeVideos: [
      {
        title: "How to Use Present Perfect Tense",
        url: "https://www.youtube.com/watch?v=kZhh0A4ydlM",
        description: "Master the Present Perfect tense with real-life examples",
      },
      {
        title: "How to Run an Effective Meeting",
        url: "https://www.youtube.com/watch?v=xmLFwNZWVBk",
        description:
          "Learn the key principles of running successful business meetings",
      },
    ],
    resources: [
      "Podcast: 'Business English Pod - Meetings'",
      "Video: 'Harvard Business Review - Meeting Management'",
      "Audio: 'BBC Business English - Meeting Vocabulary'",
    ],
    exercises: [
      "Meeting simulyatsiya videosini ko'ring va muhim iboralarni yozing",
      "Present Perfect ishlatilgan dialoglarni tinglang",
      "Real business meeting recordinglarini tinglang va tushunish mashqlarini bajaring",
    ],
  },
  homework: {
    writing:
      "Biznes yig'ilish kun tartibini va bayonnomasini yozing (Present Perfect ishlatib)",
    speaking: "5 daqiqalik biznes taqdimot tayyorlang va video yozib oling",
    vocabulary: "Yangi business terminlarni ishlatib kichik report yozing",
  },
};

// Day 2: Email Writing & Professional Communication
const day2: DayData = {
  id: 2,
  vocabulary: [
    {
      word: "regarding",
      translation: "haqida, nisbatan",
      example: "I'm writing regarding your recent inquiry.",
      difficulty: "medium",
    },
    {
      word: "inquiry",
      translation: "so'rov, surishtiruv",
      example: "Thank you for your inquiry about our services.",
      difficulty: "medium",
    },
    {
      word: "acknowledge",
      translation: "tan olmoq, qabul qilmoq",
      example: "I acknowledge receipt of your email.",
      difficulty: "hard",
    },
    {
      word: "appreciate",
      translation: "qadrlamoq, minnatdor bo'lmoq",
      example: "I appreciate your prompt response.",
      difficulty: "medium",
    },
    {
      word: "urgent",
      translation: "shoshilinch, tezkor",
      example: "This is an urgent matter that needs attention.",
      difficulty: "easy",
    },
    {
      word: "attachment",
      translation: "biriktirma (faylda)",
      example: "Please find the attachment for your review.",
      difficulty: "easy",
    },
    {
      word: "forward",
      translation: "yo'nalish, oldinga yubormoq",
      example: "I'll forward this email to my manager.",
      difficulty: "easy",
    },
    {
      word: "response",
      translation: "javob, munosabat",
      example: "I'm waiting for your response.",
      difficulty: "easy",
    },
    {
      word: "clarify",
      translation: "aniqlashtirmoq, tushuntirmoq",
      example: "Could you please clarify this point?",
      difficulty: "medium",
    },
    {
      word: "apologize",
      translation: "uzr so'ramoq, kechirim so'ramoq",
      example: "I apologize for the inconvenience.",
      difficulty: "medium",
    },
  ],
  grammar: {
    topic: "Passive Voice (Present & Past)",
    formulas: [
      {
        title: "Present Simple Passive",
        structure: "Subject + am/is/are + V3 + (by agent)",
        examples: [
          "The report is written by John",
          "Emails are sent every morning",
          "The office is cleaned daily",
        ],
      },
      {
        title: "Present Simple Passive Negative",
        structure: "Subject + am/is/are + not + V3",
        examples: [
          "The report is not completed",
          "Emails are not sent on weekends",
          "The office is not cleaned today",
        ],
      },
      {
        title: "Present Simple Passive Questions",
        structure: "Am/Is/Are + Subject + V3?",
        examples: [
          "Is the report written?",
          "Are emails sent daily?",
          "Is the office cleaned?",
        ],
      },
      {
        title: "Past Simple Passive",
        structure: "Subject + was/were + V3 + (by agent)",
        examples: [
          "The report was written yesterday",
          "The emails were sent this morning",
          "The office was cleaned last night",
        ],
      },
      {
        title: "Past Simple Passive Negative",
        structure: "Subject + was/were + not + V3",
        examples: [
          "The report was not completed",
          "The emails were not sent",
          "The office was not cleaned",
        ],
      },
      {
        title: "Past Simple Passive Questions",
        structure: "Was/Were + Subject + V3?",
        examples: [
          "Was the report written?",
          "Were the emails sent?",
          "Was the office cleaned?",
        ],
      },
    ],
    rules: [
      "Passive Voice: harakat qiluvchi emas, balki ta'sir ko'ruvchi muhim (The report was written)",
      "By + agent: harakat qiluvchini ko'rsatish (The report was written by John)",
      "Passive rasmiy yozuvlarda ko'p ishlatiladi (Emails are sent daily)",
      "Harakat qiluvchi noma'lum yoki muhim emas bo'lsa Passive ishlatiladi",
      "Active: I write the report -> Passive: The report is written (by me)",
    ],
    exercises: [
      {
        question: "The email ___ (send) to all employees yesterday.",
        answer: "was sent",
        explanation: "O'tgan zamonda Passive - was/were + V3",
      },
      {
        question: "These documents ___ (prepare) by the legal team.",
        answer: "are prepared",
        explanation: "Hozirgi zamonda Passive - am/is/are + V3",
      },
      {
        question: "The meeting ___ (cancel) due to bad weather.",
        answer: "was cancelled",
        explanation: "O'tgan zamonda Passive - was/were + V3",
      },
      {
        question: "All reports ___ (check) before submission.",
        answer: "are checked",
        explanation: "Hozirgi zamonda Passive - am/is/are + V3",
      },
      {
        question: "The new policy ___ (announce) last week.",
        answer: "was announced",
        explanation: "O'tgan zamonda Passive - was/were + V3",
      },
    ],
  },
  speaking: {
    topic: "Professional Email Language",
    phrases: [
      {
        phrase: "I am writing to...",
        translation: "Men ... uchun yozyapman",
      },
      {
        phrase: "Thank you for your email regarding...",
        translation: "... haqidagi emailingiz uchun rahmat",
      },
      {
        phrase: "Please find attached...",
        translation: "Iltimos, biriktirilgan ... ni ko'ring",
      },
      {
        phrase: "I would be grateful if you could...",
        translation: "... qilsangiz minnatdor bo'lardim",
      },
      {
        phrase: "Please do not hesitate to contact me",
        translation: "Menga murojaat qilishdan tortinmang",
      },
      {
        phrase: "I look forward to hearing from you",
        translation: "Sizdan javob kutaman",
      },
    ],
    tasks: [
      "3 xil turdagi professional email yozing (so'rov, javob, uzr)",
      "Email etiquette qoidalarini mashq qiling",
      "Formal va informal email farqini o'rganing",
      "Real business email template yarating",
    ],
  },
  listening: {
    youtubeVideos: [
      {
        title: "How to Write Professional Emails in English",
        url: "https://www.youtube.com/watch?v=3QMXOXgDz74",
        description: "Learn the structure and language of professional emails",
      },
      {
        title: "Passive Voice Explained",
        url: "https://www.youtube.com/watch?v=_kYMGy6xQIM",
        description: "Master the passive voice with clear examples",
      },
    ],
    resources: [
      "Podcast: 'Business English Pod - Email Writing'",
      "Video: 'Professional Email Writing Course'",
      "Article: 'Email Etiquette Guide'",
    ],
    exercises: [
      "Professional email namunalarini o'qing va tahlil qiling",
      "Email writing video ko'rib, asosiy strukturani yozing",
      "Passive voice ishlatilgan emaillarni toping",
    ],
  },
  homework: {
    writing: "3 ta professional email yozing (complaint, request, follow-up)",
    speaking: "Email yozish jarayonini ovozli tushuntiring",
    vocabulary: "Email writing atamalarini ishlatib gaplar tuzing",
  },
};

// Day 3: Conditionals (First & Second)
const day3: DayData = {
  id: 3,
  vocabulary: [
    {
      word: "condition",
      translation: "shart, holat",
      example: "What are the conditions for this offer?",
      difficulty: "easy",
    },
    {
      word: "possibility",
      translation: "imkoniyat, ehtimollik",
      example: "There's a strong possibility of rain tomorrow.",
      difficulty: "medium",
    },
    {
      word: "consequence",
      translation: "oqibat, natija",
      example: "What are the consequences of this decision?",
      difficulty: "hard",
    },
    {
      word: "assume",
      translation: "taxmin qilmoq, faraz qilmoq",
      example: "Let's assume this scenario happens.",
      difficulty: "medium",
    },
    {
      word: "hypothetical",
      translation: "faraziy, taxminiy",
      example: "This is a hypothetical situation.",
      difficulty: "hard",
    },
    {
      word: "outcome",
      translation: "natija, yakuniy holat",
      example: "What will be the outcome of this project?",
      difficulty: "medium",
    },
    {
      word: "likely",
      translation: "ehtimol, mumkin",
      example: "It's likely to rain this afternoon.",
      difficulty: "easy",
    },
    {
      word: "unlikely",
      translation: "kam ehtimol",
      example: "It's unlikely that he will come.",
      difficulty: "easy",
    },
    {
      word: "scenario",
      translation: "vaziyat, holat",
      example: "Let's consider different scenarios.",
      difficulty: "medium",
    },
    {
      word: "alternative",
      translation: "muqobil, boshqa variant",
      example: "What's the alternative solution?",
      difficulty: "medium",
    },
  ],
  grammar: {
    topic: "First & Second Conditional",
    formulas: [
      {
        title: "First Conditional (Real Possibility)",
        structure: "If + Present Simple, will + V1",
        examples: [
          "If it rains, I will stay home",
          "If you study hard, you will pass the exam",
          "If she calls, I will answer",
        ],
      },
      {
        title: "First Conditional Negative",
        structure: "If + Present Simple, will not + V1",
        examples: [
          "If it doesn't rain, I won't stay home",
          "If you don't study, you won't pass",
          "If she doesn't call, I won't wait",
        ],
      },
      {
        title: "First Conditional Questions",
        structure: "If + Present Simple, will + Subject + V1?",
        examples: [
          "If it rains, will you stay home?",
          "If you study, will you pass?",
          "If she calls, will you answer?",
        ],
      },
      {
        title: "Second Conditional (Unreal/Imaginary)",
        structure: "If + Past Simple, would + V1",
        examples: [
          "If I had money, I would buy a car",
          "If she studied more, she would pass",
          "If they invited me, I would go",
        ],
      },
      {
        title: "Second Conditional Negative",
        structure: "If + Past Simple, would not + V1",
        examples: [
          "If I didn't have money, I wouldn't buy it",
          "If she didn't study, she wouldn't pass",
          "If they didn't invite me, I wouldn't go",
        ],
      },
      {
        title: "Second Conditional with 'were'",
        structure: "If + I/he/she/it + were",
        examples: [
          "If I were you, I would accept the offer",
          "If he were here, he would help us",
          "If she were taller, she could be a model",
        ],
      },
    ],
    rules: [
      "First Conditional: real va mumkin bo'lgan vaziyatlar (If it rains, I will stay home)",
      "First Conditional: kelajakdagi ehtimollik haqida (If you study, you will pass)",
      "Second Conditional: real bo'lmagan yoki kam ehtimol vaziyatlar (If I had wings, I would fly)",
      "Second Conditional: maslahat berish (If I were you, I would...)",
      "Second Conditional: orzu va xayollar (If I won the lottery, I would travel the world)",
      "Was emas, were ishlatiladi Second Conditional'da barcha shaxslarda",
    ],
    exercises: [
      {
        question: "If I ___ (have) time, I ___ (help) you.",
        answer: "have, will help",
        explanation: "Real mumkinlik - First Conditional",
      },
      {
        question: "If I ___ (be) rich, I ___ (buy) a yacht.",
        answer: "were, would buy",
        explanation: "Faraziy holat - Second Conditional",
      },
      {
        question: "If it ___ (not rain), we ___ (go) to the park.",
        answer: "doesn't rain, will go",
        explanation: "Real mumkinlik - First Conditional",
      },
      {
        question: "If I ___ (be) you, I ___ (accept) the job offer.",
        answer: "were, would accept",
        explanation: "Maslahat - Second Conditional",
      },
      {
        question: "If she ___ (study) harder, she ___ (pass) the exam.",
        answer: "studies, will pass",
        explanation: "Real mumkinlik - First Conditional",
      },
    ],
  },
  speaking: {
    topic: "Making Predictions & Giving Advice",
    phrases: [
      {
        phrase: "If I were in your shoes, I would...",
        translation: "Men sizning o'rningizda bo'lsam, ... qilardim",
      },
      {
        phrase: "What would you do if...?",
        translation: "Agar ... bo'lsa, nima qilardingiz?",
      },
      {
        phrase: "If you ask me, I think...",
        translation: "Mendan so'rasangiz, men o'ylayman...",
      },
      {
        phrase: "There's a good chance that...",
        translation: "... ehtimoli yuqori",
      },
      {
        phrase: "It depends on whether...",
        translation: "Bu ... ga bog'liq",
      },
      {
        phrase: "In that case, I would suggest...",
        translation: "Bunday holatda, men tavsiya qilardim...",
      },
    ],
    tasks: [
      "Turli vaziyatlar uchun maslahatlar bering",
      "Faraziy vaziyatlarni muhokama qiling",
      "Kelajakdagi rejalar haqida conditional ishlatib gapiring",
      "Do'stingiz bilan 'What if' savollari bo'yicha dialog quring",
    ],
  },
  listening: {
    youtubeVideos: [
      {
        title: "First and Second Conditional",
        url: "https://www.youtube.com/watch?v=3kAMg7vQ6U4",
        description: "Complete guide to understanding and using conditionals",
      },
      {
        title: "How to Give Advice in English",
        url: "https://www.youtube.com/watch?v=tg0cUWYDF_w",
        description: "Learn different ways to give advice using conditionals",
      },
    ],
    resources: [
      "Podcast: 'English Grammar - Conditionals'",
      "Video: 'BBC Learning English - If Clauses'",
      "Audio: 'Real English Conversations - Advice'",
    ],
    exercises: [
      "Conditional dialoglarni tinglang va turini aniqlang",
      "Advice-giving conversation tinglang va iboralarni yozing",
      "Video ko'rib, conditional gaplarni toping",
    ],
  },
  homework: {
    writing:
      "10 ta First va 10 ta Second Conditional gaplar yozing (real vaziyatlar asosida)",
    speaking: "3 ta faraziy vaziyat uchun maslahat video yozing",
    vocabulary: "Yangi so'zlarni conditional gaplarda ishlatib mashq qiling",
  },
};

// Day 4: Reported Speech
const day4: DayData = {
  id: 4,
  vocabulary: [
    {
      word: "mention",
      translation: "eslatmoq, tilga olmoq",
      example: "She mentioned that she would be late.",
      difficulty: "easy",
    },
    {
      word: "claim",
      translation: "da'vo qilmoq, aytmoq",
      example: "He claimed that he was innocent.",
      difficulty: "medium",
    },
    {
      word: "complain",
      translation: "shikoyat qilmoq",
      example: "They complained that the service was poor.",
      difficulty: "easy",
    },
    {
      word: "admit",
      translation: "tan olmoq, e'tirof qilmoq",
      example: "He admitted that he made a mistake.",
      difficulty: "medium",
    },
    {
      word: "deny",
      translation: "inkor qilmoq",
      example: "She denied that she took the money.",
      difficulty: "medium",
    },
    {
      word: "insist",
      translation: "qat'iy talqin qilmoq",
      example: "He insisted that we should wait.",
      difficulty: "hard",
    },
    {
      word: "announce",
      translation: "e'lon qilmoq",
      example: "The company announced that it would expand.",
      difficulty: "medium",
    },
    {
      word: "explain",
      translation: "tushuntirmoq",
      example: "She explained that she was busy.",
      difficulty: "easy",
    },
    {
      word: "promise",
      translation: "va'da bermoq",
      example: "He promised that he would come.",
      difficulty: "easy",
    },
    {
      word: "warn",
      translation: "ogohlantirmoq",
      example: "They warned us that it would be difficult.",
      difficulty: "medium",
    },
  ],
  grammar: {
    topic: "Reported Speech (Statements & Questions)",
    formulas: [
      {
        title: "Reported Statements",
        structure: "Subject + said/told + (that) + clause",
        examples: [
          'Direct: "I am tired" -> Reported: He said (that) he was tired',
          'Direct: "I work here" -> Reported: She said she worked there',
          'Direct: "I will help" -> Reported: He said he would help',
        ],
      },
      {
        title: "Tense Changes in Reported Speech",
        structure: "Present -> Past, Past -> Past Perfect, Will -> Would",
        examples: [
          "Present Simple -> Past Simple: am/is/are -> was/were",
          "Present Continuous -> Past Continuous: am/is/are doing -> was/were doing",
          "Will -> Would: will go -> would go",
        ],
      },
      {
        title: "Reported Questions",
        structure:
          "Subject + asked + if/whether + clause (statement word order)",
        examples: [
          'Direct: "Are you ready?" -> He asked if I was ready',
          'Direct: "Where do you live?" -> She asked where I lived',
          'Direct: "What time is it?" -> He asked what time it was',
        ],
      },
      {
        title: "Time/Place Changes",
        structure: "Now -> then, today -> that day, here -> there",
        examples: [
          "today -> that day",
          "yesterday -> the day before",
          "tomorrow -> the next day",
          "here -> there",
          "this -> that",
        ],
      },
      {
        title: "Reporting Verbs",
        structure: "say, tell, ask, explain, promise, warn, etc.",
        examples: [
          "He told me that he was busy",
          "She asked me if I was ready",
          "They warned us that it was dangerous",
        ],
      },
    ],
    rules: [
      "Reported Speech: biror kishining aytgan gapini boshqa birovga yetkazish",
      "Said: told'dan farqli, said dan keyin 'to' ishlatilmaydi",
      "Told: keyin albatta shaxs kelishi kerak (told me, told him)",
      "Zamon o'zgaradi: Present -> Past, Past -> Past Perfect",
      "So'roq gaplarda so'roq tartibi emas, darak gap tartibi ishlatiladi",
      "Yes/No questions: if yoki whether ishlatiladi",
      "Wh-questions: wh-so'z saqlanadi",
    ],
    exercises: [
      {
        question: 'Direct: "I am learning English" -> Reported: He said...',
        answer: "he was learning English",
        explanation: "Present Continuous -> Past Continuous",
      },
      {
        question: 'Direct: "Where do you work?" -> She asked me...',
        answer: "where I worked",
        explanation: "Wh-question, zamon o'zgaradi, darak gap tartibi",
      },
      {
        question: 'Direct: "I will call you tomorrow" -> He promised...',
        answer: "he would call me the next day",
        explanation: "Will -> Would, tomorrow -> the next day",
      },
      {
        question: 'Direct: "Are you ready?" -> They asked...',
        answer: "if/whether I was ready",
        explanation: "Yes/No question, if/whether ishlatiladi",
      },
      {
        question: 'Direct: "I have finished the work" -> She told me...',
        answer: "she had finished the work",
        explanation: "Present Perfect -> Past Perfect",
      },
    ],
  },
  speaking: {
    topic: "Reporting Information",
    phrases: [
      {
        phrase: "He told me that...",
        translation: "U menga ... deb aytdi",
      },
      {
        phrase: "She said she would...",
        translation: "U ... qilishini aytdi",
      },
      {
        phrase: "They asked me if...",
        translation: "Ular mendan ... so'rashdi",
      },
      {
        phrase: "I was told that...",
        translation: "Menga ... deb aytildi",
      },
      {
        phrase: "According to him/her...",
        translation: "Uning fikricha...",
      },
      {
        phrase: "He mentioned that...",
        translation: "U ... haqida gapirdi",
      },
    ],
    tasks: [
      "Intervyu yoki suhbatni boshqa birovga so'zlab bering",
      "Yangilikdagi ma'lumotni reported speech'da qayta aytib bering",
      "Do'stingiz bilan dialog quring va keyin uni report qiling",
      "Video ko'rib, gaplarni reported speech'ga o'giring",
    ],
  },
  listening: {
    youtubeVideos: [
      {
        title: "Reported Speech - Complete Guide",
        url: "https://www.youtube.com/watch?v=bwCHmKW7WZE",
        description: "Master reported speech with clear examples and practice",
      },
      {
        title: "How to Report What Someone Said",
        url: "https://www.youtube.com/watch?v=5kXqhCBPWjQ",
        description: "Learn to report statements and questions naturally",
      },
    ],
    resources: [
      "Podcast: 'BBC Learning English - Reported Speech'",
      "Video: 'Reported Speech in News'",
      "Audio: 'English Grammar - Indirect Speech'",
    ],
    exercises: [
      "News report tinglang va reported speech gaplarni yozing",
      "Interview tinglang va keyin o'zingiz report qiling",
      "Dialog tinglang va darak gapga aylantiring",
    ],
  },
  homework: {
    writing:
      "Suhbatni yozing va keyin reported speech'da qayta yozing (10 ta gap)",
    speaking:
      "Yangilik yoki voqeani ovozli report qiling (reported speech ishlatib)",
    vocabulary: "Reporting verbs bilan 15 ta gap tuzing",
  },
};

// Day 5: Phrasal Verbs (Business Context)
const day5: DayData = {
  id: 5,
  vocabulary: [
    {
      word: "carry out",
      translation: "bajarmoq, amalga oshirmoq",
      example: "We need to carry out a market research.",
      difficulty: "medium",
    },
    {
      word: "bring up",
      translation: "ko'tarib chiqarmoq (mavzu)",
      example: "She brought up an interesting point in the meeting.",
      difficulty: "medium",
    },
    {
      word: "put off",
      translation: "kechiktirmoq, qoldirmoq",
      example: "We had to put off the meeting until next week.",
      difficulty: "easy",
    },
    {
      word: "call off",
      translation: "bekor qilmoq",
      example: "They decided to call off the event.",
      difficulty: "medium",
    },
    {
      word: "set up",
      translation: "tashkil qilmoq, o'rnatmoq",
      example: "He set up his own business last year.",
      difficulty: "easy",
    },
    {
      word: "take over",
      translation: "nazoratga olmoq, boshqarishni qo'lga olmoq",
      example: "She will take over as CEO next month.",
      difficulty: "medium",
    },
    {
      word: "turn down",
      translation: "rad etmoq",
      example: "He turned down the job offer.",
      difficulty: "easy",
    },
    {
      word: "work out",
      translation: "hal qilmoq, yechim topmoq",
      example: "We need to work out a solution.",
      difficulty: "medium",
    },
    {
      word: "break down",
      translation: "buzilmoq, parchalanmoq",
      example: "The negotiations broke down yesterday.",
      difficulty: "hard",
    },
    {
      word: "follow up",
      translation: "kuzatib bormoq, davom ettirmoq",
      example: "I'll follow up with you next week.",
      difficulty: "medium",
    },
  ],
  grammar: {
    topic: "Phrasal Verbs in Professional Context",
    formulas: [
      {
        title: "Separable Phrasal Verbs",
        structure: "Verb + Object + Particle OR Verb + Particle + Object",
        examples: [
          "I called him up / I called up him",
          "She turned the offer down / She turned down the offer",
          "We put the meeting off / We put off the meeting",
        ],
      },
      {
        title: "Inseparable Phrasal Verbs",
        structure: "Verb + Particle + Object (cannot be separated)",
        examples: [
          "I came across a problem (NOT came a problem across)",
          "She looks after the team (NOT looks the team after)",
          "They called for action (NOT called action for)",
        ],
      },
      {
        title: "Three-word Phrasal Verbs",
        structure: "Verb + Particle + Preposition + Object",
        examples: [
          "I look forward to the meeting",
          "He came up with a great idea",
          "We need to catch up with the schedule",
        ],
      },
      {
        title: "Phrasal Verbs in Different Tenses",
        structure: "Verb changes, particle stays the same",
        examples: [
          "Present: I carry out research",
          "Past: I carried out research",
          "Future: I will carry out research",
        ],
      },
    ],
    rules: [
      "Phrasal Verbs: fe'l + zarrach (particle) birikmasidan iborat",
      "Separable: obyekt fe'l va zarrach orasiga kelishi mumkin",
      "Inseparable: obyekt faqat zarrach dan keyin keladi",
      "Pronoun separable phrasal verbs bilan doimo o'rtada keladi (turn it down)",
      "Professional context'da ko'p ishlatiladigan phrasal verbs: set up, carry out, follow up",
      "Phrasal verbs rasmiy va norasmiy nutqda farq qiladi",
    ],
    exercises: [
      {
        question: "We need to ___ ___ this issue immediately. (hal qilmoq)",
        answer: "work out",
        explanation: "Work out = hal qilmoq, yechim topmoq",
      },
      {
        question:
          "The company decided to ___ ___ the new policy. (joriy qilmoq)",
        answer: "bring in",
        explanation: "Bring in = joriy qilmoq, kiritmoq",
      },
      {
        question:
          "I'll ___ ___ with you about the project next week. (kuzatib bormoq)",
        answer: "follow up",
        explanation: "Follow up = kuzatib bormoq, davom ettirmoq",
      },
      {
        question:
          "They had to ___ ___ the meeting due to bad weather. (bekor qilmoq)",
        answer: "call off",
        explanation: "Call off = bekor qilmoq",
      },
      {
        question:
          "She ___ ___ an interesting point during the presentation. (ko'tarib chiqarmoq)",
        answer: "brought up",
        explanation: "Bring up = mavzuni ko'tarib chiqarmoq",
      },
    ],
  },
  speaking: {
    topic: "Using Phrasal Verbs in Business",
    phrases: [
      {
        phrase: "Let's set up a meeting for...",
        translation: "... uchun uchrashuv tashkil qilaylik",
      },
      {
        phrase: "I need to follow up on...",
        translation: "Men ... ni kuzatib borishim kerak",
      },
      {
        phrase: "Can we put this off until...?",
        translation: "Buni ... gacha qoldirsak bo'ladimi?",
      },
      {
        phrase: "We need to work out a solution",
        translation: "Biz yechim topishimiz kerak",
      },
      {
        phrase: "I'll get back to you on that",
        translation: "Bu haqda sizga qaytadan xabar beraman",
      },
      {
        phrase: "Let me look into this matter",
        translation: "Bu masalani tekshirib ko'raman",
      },
    ],
    tasks: [
      "Phrasal verbs ishlatib biznes dialoglar yarating",
      "Work situationlarida phrasal verbs'ni mashq qiling",
      "Role-play: manager va xodim o'rtasidagi suhbat",
      "Phrasal verbs bilan professional emaillar yozing",
    ],
  },
  listening: {
    youtubeVideos: [
      {
        title: "Business English Phrasal Verbs",
        url: "https://www.youtube.com/watch?v=P_qSJjhGEFA",
        description: "Learn essential phrasal verbs for business English",
      },
      {
        title: "20 Phrasal Verbs for Work",
        url: "https://www.youtube.com/watch?v=YrZZKZQ0MXo",
        description: "Master the most common work-related phrasal verbs",
      },
    ],
    resources: [
      "Podcast: 'Business English Pod - Phrasal Verbs'",
      "Video: 'BBC Learning English - Phrasal Verbs'",
      "App: 'Phrasal Verbs Machine'",
    ],
    exercises: [
      "Business conversation tinglang va phrasal verbs topib yozing",
      "Context asosida phrasal verbs ma'nosini aniqlang",
      "Professional dialoglarni tinglang va takrorlang",
    ],
  },
  homework: {
    writing: "10 ta phrasal verbs ishlatib business email yozing",
    speaking: "Phrasal verbs bilan work situationni tasvirlab video yozing",
    vocabulary: "Har bir phrasal verb uchun 2 tadan gap tuzing",
  },
};

// Day 6: Negotiation Skills
const day6: DayData = {
  id: 6,
  vocabulary: [
    {
      word: "compromise",
      translation: "murosa qilmoq, kelishmoq",
      example: "Both sides need to compromise to reach an agreement.",
      difficulty: "medium",
    },
    {
      word: "negotiate",
      translation: "muzokara qilmoq",
      example: "We are negotiating the terms of the contract.",
      difficulty: "medium",
    },
    {
      word: "concession",
      translation: "chegirma, imtiyoz",
      example: "We're willing to make some concessions.",
      difficulty: "hard",
    },
    {
      word: "mutual",
      translation: "o'zaro, ikki tomonlama",
      example: "We need to find a mutual benefit.",
      difficulty: "medium",
    },
    {
      word: "proposal",
      translation: "taklif",
      example: "Let me present our proposal.",
      difficulty: "easy",
    },
    {
      word: "leverage",
      translation: "ustunlik, ta'sir qilish imkoniyati",
      example: "We have strong leverage in this negotiation.",
      difficulty: "hard",
    },
    {
      word: "terms",
      translation: "shartlar",
      example: "Let's discuss the terms of the agreement.",
      difficulty: "easy",
    },
    {
      word: "counter-offer",
      translation: "qarshi taklif",
      example: "They made a counter-offer that we need to consider.",
      difficulty: "medium",
    },
    {
      word: "agreement",
      translation: "kelishuv, shartnoma",
      example: "We reached an agreement after long discussions.",
      difficulty: "easy",
    },
    {
      word: "flexible",
      translation: "moslashuvchan, egiluvchan",
      example: "We need to be flexible in our approach.",
      difficulty: "medium",
    },
  ],
  grammar: {
    topic: "Modal Verbs for Negotiation",
    formulas: [
      {
        title: "Making Offers: Could, Would",
        structure: "We could/would + V1",
        examples: [
          "We could offer a 10% discount",
          "We would be willing to negotiate",
          "Could we possibly extend the deadline?",
        ],
      },
      {
        title: "Making Suggestions: Might, May",
        structure: "We might/may + V1",
        examples: [
          "We might consider your proposal",
          "This may work for both parties",
          "It might be better if we...",
        ],
      },
      {
        title: "Expressing Possibility: Should, Ought to",
        structure: "We should/ought to + V1",
        examples: [
          "We should discuss this further",
          "You ought to consider our offer",
          "Should we explore other options?",
        ],
      },
      {
        title: "Making Polite Requests: Would you mind",
        structure: "Would you mind + V-ing?",
        examples: [
          "Would you mind reconsidering our offer?",
          "Would you mind if we discuss the terms?",
          "Would it be possible to adjust the price?",
        ],
      },
    ],
    rules: [
      "Could/Would: xushmuomala takliflar uchun (We could reduce the price)",
      "Might/May: ehtimollik va muloyim takliflar (We might accept your terms)",
      "Should/Ought to: maslahat va tavsiya (You should consider this offer)",
      "Negotiation'da to'g'ridan-to'g'ri 'No' deyish o'rniga modal verbs ishlatiladi",
      "Modal verbs gapni yumshatadi va professional qiladi",
    ],
    exercises: [
      {
        question: "___ you mind if we discussed the terms tomorrow?",
        answer: "Would",
        explanation: "Xushmuomala so'rov - Would you mind",
      },
      {
        question: "We ___ consider a 15% discount if you order in bulk.",
        answer: "could",
        explanation: "Xushmuomala taklif - could",
      },
      {
        question: "You ___ reconsider our proposal.",
        answer: "should",
        explanation: "Maslahat berish - should",
      },
      {
        question: "This arrangement ___ work for both parties.",
        answer: "might",
        explanation: "Ehtimollik - might",
      },
      {
        question: "___ it be possible to extend the deadline?",
        answer: "Would",
        explanation: "Xushmuomala so'rov - Would it be possible",
      },
    ],
  },
  speaking: {
    topic: "Negotiation Language",
    phrases: [
      {
        phrase: "I see your point, but...",
        translation: "Fikringizni tushunaman, lekin...",
      },
      {
        phrase: "Would you be willing to...?",
        translation: "... qilishga rozimisiniz?",
      },
      {
        phrase: "Let's meet halfway on this",
        translation: "Bu masalada yarim yo'lda uchrashaylik",
      },
      {
        phrase: "That's a fair point",
        translation: "Bu adolatli fikr",
      },
      {
        phrase: "I'm afraid we can't agree to that",
        translation: "Afsuski, bunga rozi bo'la olmaymiz",
      },
      {
        phrase: "What if we...?",
        translation: "Agar biz ... qilsak-chi?",
      },
    ],
    tasks: [
      "Narx bo'yicha negotiation simulyatsiyasi o'tkazing",
      "Shartnoma shartlarini muhokama qiling",
      "Role-play: buyer va seller o'rtasidagi muzokara",
      "Counter-offer tayyorlang va taqdim eting",
    ],
  },
  listening: {
    youtubeVideos: [
      {
        title: "Negotiation Skills in English",
        url: "https://www.youtube.com/watch?v=guXKpRZ9gFg",
        description: "Master the language and techniques of negotiation",
      },
      {
        title: "Business English for Negotiations",
        url: "https://www.youtube.com/watch?v=PqMPVKpfdQI",
        description:
          "Learn key phrases and strategies for business negotiations",
      },
    ],
    resources: [
      "Podcast: 'Harvard Business Review - Negotiation'",
      "Video: 'TED Talks - Art of Negotiation'",
      "Course: 'Coursera - Successful Negotiation'",
    ],
    exercises: [
      "Negotiation dialogue tinglang va muhim iboralarni yozing",
      "Real business negotiation video ko'ring va tahlil qiling",
      "Roleplay recordingni tinglang va strategiyalarni aniqlang",
    ],
  },
  homework: {
    writing:
      "Negotiation scenario yozing (problem, offer, counter-offer, agreement)",
    speaking: "Negotiation dialogini ovozga yozing (kamida 5 daqiqa)",
    vocabulary: "Negotiation terminlarini ishlatib professional email yozing",
  },
};

// Day 7: Customer Service
const day7: DayData = {
  id: 7,
  vocabulary: [
    {
      word: "inquiry",
      translation: "so'rov, savol",
      example: "Thank you for your inquiry about our products.",
      difficulty: "medium",
    },
    {
      word: "assistance",
      translation: "yordam, ko'mak",
      example: "How may I be of assistance?",
      difficulty: "medium",
    },
    {
      word: "complaint",
      translation: "shikoyat",
      example: "We take all customer complaints seriously.",
      difficulty: "easy",
    },
    {
      word: "resolution",
      translation: "yechim, hal qilish",
      example: "We will work towards a quick resolution.",
      difficulty: "medium",
    },
    {
      word: "inconvenience",
      translation: "noqulaylik",
      example: "We apologize for any inconvenience caused.",
      difficulty: "medium",
    },
    {
      word: "refund",
      translation: "qaytarish (pul)",
      example: "You are eligible for a full refund.",
      difficulty: "easy",
    },
    {
      word: "replacement",
      translation: "almashtirish, o'rnini bosish",
      example: "We can offer a replacement product.",
      difficulty: "easy",
    },
    {
      word: "satisfaction",
      translation: "mamnunlik, qoniqish",
      example: "Customer satisfaction is our priority.",
      difficulty: "medium",
    },
    {
      word: "resolve",
      translation: "hal qilmoq",
      example: "We will resolve this issue immediately.",
      difficulty: "medium",
    },
    {
      word: "escalate",
      translation: "yuqori darajaga ko'tarish",
      example: "I will escalate this to my manager.",
      difficulty: "hard",
    },
  ],
  grammar: {
    topic: "Polite Language & Indirect Questions",
    formulas: [
      {
        title: "Indirect Questions (Polite)",
        structure: "Could you tell me + question word + statement order",
        examples: [
          "Could you tell me where the office is?",
          "Do you know what time it opens?",
          "I was wondering if you could help me",
        ],
      },
      {
        title: "Would you mind + V-ing",
        structure: "Would you mind + V-ing?",
        examples: [
          "Would you mind waiting a moment?",
          "Would you mind filling out this form?",
          "Would you mind if I checked your order?",
        ],
      },
      {
        title: "I'm afraid...",
        structure: "I'm afraid + statement (soft negative)",
        examples: [
          "I'm afraid that's not possible",
          "I'm afraid we're out of stock",
          "I'm afraid I can't help with that",
        ],
      },
      {
        title: "I'd be happy to...",
        structure: "I'd be happy to + V1",
        examples: [
          "I'd be happy to help you with that",
          "I'd be happy to check that for you",
          "I'd be happy to arrange a replacement",
        ],
      },
    ],
    rules: [
      "Customer service'da to'g'ridan-to'g'ri so'rovlar o'rniga indirect questions ishlatiladi",
      "Would you mind: juda xushmuomala so'rov",
      "I'm afraid: yomon xabarni yumshoq etib berish uchun",
      "I'd be happy to: yordamga tayyorligni ko'rsatish",
      "Indirect questions'da so'roq tartibi emas, darak gap tartibi ishlatiladi",
    ],
    exercises: [
      {
        question:
          "Direct: 'What time does it close?' -> Could you tell me ___?",
        answer: "what time it closes",
        explanation: "Indirect question - darak gap tartibi",
      },
      {
        question: "___ you mind waiting for a few minutes?",
        answer: "Would",
        explanation: "Xushmuomala so'rov - Would you mind",
      },
      {
        question: "I'm ___ we can't process refunds after 30 days.",
        answer: "afraid",
        explanation: "Yomon xabarni yumshoq etish - I'm afraid",
      },
      {
        question: "I'd be ___ to help you with your order.",
        answer: "happy",
        explanation: "Yordamga tayyorlik - I'd be happy to",
      },
      {
        question: "Do you know ___ the manager is available?",
        answer: "if/whether",
        explanation: "Indirect yes/no question - if/whether",
      },
    ],
  },
  speaking: {
    topic: "Customer Service Communication",
    phrases: [
      {
        phrase: "How may I assist you today?",
        translation: "Bugun sizga qanday yordam bera olaman?",
      },
      {
        phrase: "I apologize for the inconvenience",
        translation: "Noqulaylik uchun uzr so'rayman",
      },
      {
        phrase: "Let me look into that for you",
        translation: "Buni siz uchun tekshirib ko'raman",
      },
      {
        phrase: "I understand your frustration",
        translation: "Xafagarchiligingizni tushunaman",
      },
      {
        phrase: "Is there anything else I can help you with?",
        translation: "Sizga yana biror narsada yordam bera olamanmi?",
      },
      {
        phrase: "Thank you for bringing this to our attention",
        translation:
          "Buni bizning e'tiborimizga havola qilganingiz uchun rahmat",
      },
    ],
    tasks: [
      "Customer complaint'ni hal qilish dialogini yarating",
      "Role-play: mijoz va xizmat ko'rsatish xodimi",
      "Turli vaziyatlar uchun javoblar tayyorlang",
      "Difficult customer bilan ishlash mashqini bajaring",
    ],
  },
  listening: {
    youtubeVideos: [
      {
        title: "Customer Service English",
        url: "https://www.youtube.com/watch?v=PjN4qO8T8yA",
        description: "Learn essential phrases for excellent customer service",
      },
      {
        title: "How to Handle Difficult Customers",
        url: "https://www.youtube.com/watch?v=xHpkPkXdjEE",
        description:
          "Strategies and language for managing challenging situations",
      },
    ],
    resources: [
      "Podcast: 'Customer Service Excellence'",
      "Video: 'LinkedIn Learning - Customer Service Skills'",
      "Course: 'Udemy - Customer Service Communication'",
    ],
    exercises: [
      "Customer service call tinglang va muhim iboralarni yozing",
      "Complaint handling dialogue ko'ring va tahlil qiling",
      "Real customer interaction tinglang va yaxshi/yomon tomonlarni aniqlang",
    ],
  },
  homework: {
    writing:
      "3 xil customer service scenario yozing (inquiry, complaint, refund request)",
    speaking: "Customer service call simulyatsiyasini ovozga yozing",
    vocabulary:
      "Customer service terminlarini ishlatib email template yarating",
  },
};

// Day 8: Presentation Skills
const day8: DayData = {
  id: 8,
  vocabulary: [
    {
      word: "overview",
      translation: "umumiy ko'rinish, umumlashma",
      example: "Let me give you an overview of our plan.",
      difficulty: "medium",
    },
    {
      word: "outline",
      translation: "kontur, reja",
      example: "I'll outline the main points of the presentation.",
      difficulty: "medium",
    },
    {
      word: "highlight",
      translation: "ta'kidlamoq, ajratib ko'rsatmoq",
      example: "I'd like to highlight three key benefits.",
      difficulty: "medium",
    },
    {
      word: "illustrate",
      translation: "tasvirlab bermoq, misol keltirmoq",
      example: "This chart illustrates our growth over time.",
      difficulty: "hard",
    },
    {
      word: "demonstrate",
      translation: "ko'rsatib bermoq, namoyish qilmoq",
      example: "Let me demonstrate how this works.",
      difficulty: "medium",
    },
    {
      word: "emphasize",
      translation: "urg'u bermoq, ta'kidlamoq",
      example: "I want to emphasize the importance of this.",
      difficulty: "medium",
    },
    {
      word: "summarize",
      translation: "xulosa qilmoq, umumlashtirmoq",
      example: "To summarize the main points...",
      difficulty: "easy",
    },
    {
      word: "conclude",
      translation: "xulosa qilmoq, yakunlamoq",
      example: "In conclusion, I'd like to say...",
      difficulty: "medium",
    },
    {
      word: "elaborate",
      translation: "batafsil tushuntirmoq",
      example: "Could you elaborate on that point?",
      difficulty: "hard",
    },
    {
      word: "transition",
      translation: "o'tish, o'zgarish",
      example: "Let me transition to the next slide.",
      difficulty: "medium",
    },
  ],
  grammar: {
    topic: "Sequencing & Signposting Language",
    formulas: [
      {
        title: "Opening a Presentation",
        structure: "First/Firstly, To begin with, Let me start by",
        examples: [
          "First, I'd like to introduce our team",
          "To begin with, let's look at the data",
          "Let me start by giving you some background",
        ],
      },
      {
        title: "Sequencing Ideas",
        structure: "Secondly, Next, Then, After that, Finally",
        examples: [
          "Secondly, we'll examine the results",
          "Next, I'll show you the financial data",
          "Finally, we'll discuss future plans",
        ],
      },
      {
        title: "Transitioning Between Topics",
        structure: "Moving on to, Turning to, Let's now look at",
        examples: [
          "Moving on to the next point",
          "Turning to our financial performance",
          "Let's now look at the marketing strategy",
        ],
      },
      {
        title: "Concluding",
        structure: "In conclusion, To sum up, In summary",
        examples: [
          "In conclusion, our strategy is working",
          "To sum up the main points",
          "In summary, we achieved our goals",
        ],
      },
    ],
    rules: [
      "Presentation'ni strukturalash uchun signposting language ishlatiladi",
      "First, Secondly, Finally: ketma-ketlikni ko'rsatadi",
      "Moving on to, Turning to: yangi mavzuga o'tishni bildiradi",
      "In conclusion, To sum up: yakunlashni ko'rsatadi",
      "Har bir qism tingluvchilar uchun aniq bo'lishi kerak",
    ],
    exercises: [
      {
        question: "___, I'd like to thank everyone for coming.",
        answer: "First/Firstly",
        explanation: "Presentationni boshlash - First/Firstly",
      },
      {
        question: "___ to our marketing strategy...",
        answer: "Moving on/Turning",
        explanation: "Yangi mavzuga o'tish - Moving on/Turning to",
      },
      {
        question: "___ conclusion, our project was successful.",
        answer: "In",
        explanation: "Xulosa qilish - In conclusion",
      },
      {
        question: "___ that, we'll look at the budget.",
        answer: "After",
        explanation: "Ketma-ketlik - After that",
      },
      {
        question: "To ___ up, we achieved all our objectives.",
        answer: "sum",
        explanation: "Umumlashtirish - To sum up",
      },
    ],
  },
  speaking: {
    topic: "Delivering Presentations",
    phrases: [
      {
        phrase: "Today, I'm going to talk about...",
        translation: "Bugun men ... haqida gapiraman",
      },
      {
        phrase: "This chart shows...",
        translation: "Bu grafik ... ni ko'rsatadi",
      },
      {
        phrase: "As you can see here...",
        translation: "Bu yerda ko'rib turganingizdek...",
      },
      {
        phrase: "Let me draw your attention to...",
        translation: "E'tiboringizni ... ga qarataylik",
      },
      {
        phrase: "Does anyone have any questions?",
        translation: "Kimningdir savoli bormi?",
      },
      {
        phrase: "Thank you for your attention",
        translation: "Diqqatingiz uchun rahmat",
      },
    ],
    tasks: [
      "5 daqiqalik presentation tayyorlang va taqdim eting",
      "PowerPoint bilan ishlashni mashq qiling",
      "Q&A session'ni mashq qiling",
      "Presentation'ni video yozib oling va tahlil qiling",
    ],
  },
  listening: {
    youtubeVideos: [
      {
        title: "How to Give a Great Presentation",
        url: "https://www.youtube.com/watch?v=Iwpi1Lm6dFo",
        description: "Learn the key elements of effective presentations",
      },
      {
        title: "Presentation Skills in English",
        url: "https://www.youtube.com/watch?v=QjGVy_pKN_I",
        description: "Master the language and techniques of presentations",
      },
    ],
    resources: [
      "TED Talks: Various professional presentations",
      "Course: 'Coursera - Presentation Skills'",
      "Book: 'Talk Like TED' by Carmine Gallo",
    ],
    exercises: [
      "Professional presentation ko'ring va strukturasini tahlil qiling",
      "Signposting language tinglang va yozing",
      "TED Talk ko'rib, presentation techniques'ni o'rganing",
    ],
  },
  homework: {
    writing:
      "10 slaydlik presentation matni yozing (signposting language bilan)",
    speaking: "7-10 daqiqalik presentation tayyorlang va video yozing",
    vocabulary: "Presentation terminlarini ishlatib notes tayyorlang",
  },
};

// Day 9: Third Conditional & Mixed Conditionals
const day9: DayData = {
  id: 9,
  vocabulary: [
    {
      word: "regret",
      translation: "afsuslanmoq, pushaymon bo'lmoq",
      example: "I regret not studying harder.",
      difficulty: "easy",
    },
    {
      word: "blame",
      translation: "ayblamoq",
      example: "Don't blame yourself for the mistake.",
      difficulty: "easy",
    },
    {
      word: "hindsight",
      translation: "o'tmishni eslash, retrospektiv ko'rish",
      example: "In hindsight, I should have listened to you.",
      difficulty: "hard",
    },
    {
      word: "opportunity",
      translation: "imkoniyat",
      example: "I missed a great opportunity.",
      difficulty: "medium",
    },
    {
      word: "consequence",
      translation: "oqibat",
      example: "The consequences were serious.",
      difficulty: "medium",
    },
    {
      word: "alternative",
      translation: "alternativa, boshqa variant",
      example: "What was the alternative?",
      difficulty: "medium",
    },
    {
      word: "reconsider",
      translation: "qayta o'ylab ko'rmoq",
      example: "I wish I had reconsidered my decision.",
      difficulty: "medium",
    },
    {
      word: "fortunate",
      translation: "baxtli, omadli",
      example: "We were fortunate to have that chance.",
      difficulty: "medium",
    },
    {
      word: "mistake",
      translation: "xato",
      example: "It was a big mistake.",
      difficulty: "easy",
    },
    {
      word: "reflect",
      translation: "mulohaza yuritmoq, o'ylab ko'rmoq",
      example: "Let's reflect on what happened.",
      difficulty: "medium",
    },
  ],
  grammar: {
    topic: "Third Conditional & Mixed Conditionals",
    formulas: [
      {
        title: "Third Conditional (Past Unreal)",
        structure: "If + Past Perfect, would have + V3",
        examples: [
          "If I had studied harder, I would have passed the exam",
          "If she had left earlier, she wouldn't have missed the train",
          "If they had known, they would have come",
        ],
      },
      {
        title: "Third Conditional Negative",
        structure: "If + hadn't + V3, would have + V3",
        examples: [
          "If I hadn't been late, I would have seen him",
          "If she hadn't left early, she would have met them",
          "If we hadn't made that mistake, we would have won",
        ],
      },
      {
        title: "Mixed Conditional (Past condition, Present result)",
        structure: "If + Past Perfect, would + V1",
        examples: [
          "If I had studied medicine, I would be a doctor now",
          "If she had accepted the job, she would be living in London",
          "If they had invested earlier, they would be rich now",
        ],
      },
      {
        title: "Mixed Conditional (Present condition, Past result)",
        structure: "If + Past Simple, would have + V3",
        examples: [
          "If I were more careful, I wouldn't have made that mistake",
          "If she spoke English, she would have gotten the job",
          "If he were here, he would have helped us",
        ],
      },
    ],
    rules: [
      "Third Conditional: o'tmishdagi real bo'lmagan vaziyatlar (If I had known, I would have told you)",
      "Third Conditional: pushaymonlik va afsuslanish ifodalash uchun",
      "Mixed Conditional: o'tmish va hozirgi zamonni bog'laydi",
      "O'tmish shart, hozirgi natija: If I had studied (o'tmish), I would be (hozir)",
      "Hozirgi shart, o'tmish natija: If I were (hozir), I would have (o'tmish)",
    ],
    exercises: [
      {
        question: "If I ___ (know) about the meeting, I ___ (attend) it.",
        answer: "had known, would have attended",
        explanation: "O'tmishdagi real bo'lmagan vaziyat - Third Conditional",
      },
      {
        question:
          "If I ___ (study) harder at school, I ___ (have) a better job now.",
        answer: "had studied, would have",
        explanation: "O'tmish shart, hozirgi natija - Mixed Conditional",
      },
      {
        question: "If she ___ (not/miss) the bus, she ___ (arrive) on time.",
        answer: "hadn't missed, would have arrived",
        explanation: "O'tmishdagi real bo'lmagan vaziyat - Third Conditional",
      },
      {
        question:
          "If I ___ (be) taller, I ___ (play) basketball professionally.",
        answer: "were, would have played",
        explanation: "Hozirgi shart, o'tmish natija - Mixed Conditional",
      },
      {
        question: "If they ___ (invite) me, I ___ (go) to the party yesterday.",
        answer: "had invited, would have gone",
        explanation: "O'tmishdagi real bo'lmagan vaziyat - Third Conditional",
      },
    ],
  },
  speaking: {
    topic: "Expressing Regret & Reflecting on Past",
    phrases: [
      {
        phrase: "I wish I had...",
        translation: "Qaniydi ... qilganimda",
      },
      {
        phrase: "If only I had known...",
        translation: "Qaniydi bilganimda...",
      },
      {
        phrase: "I should have...",
        translation: "Men ... qilishim kerak edi",
      },
      {
        phrase: "Looking back, I would have...",
        translation: "Orqaga qarasam, men ... qilgan bo'lardim",
      },
      {
        phrase: "In hindsight, I realize...",
        translation: "Endi tushunaman...",
      },
      {
        phrase: "If I could do it again, I would...",
        translation: "Agar yana imkonim bo'lsa, men ... qilardim",
      },
    ],
    tasks: [
      "O'tmishdagi qarorlaringiz haqida gapiring (pushaymonlik)",
      "Hayotiy vaziyatlarni Third Conditional'da tasvirlang",
      "Mixed Conditional ishlatib life story'ingizdan gap soating",
      "'What if' scenariolarni muhokama qiling",
    ],
  },
  listening: {
    youtubeVideos: [
      {
        title: "Third Conditional Explained",
        url: "https://www.youtube.com/watch?v=u1b13GIBXuA",
        description: "Master the third conditional with clear examples",
      },
      {
        title: "Mixed Conditionals",
        url: "https://www.youtube.com/watch?v=HV2Q6o2mRHw",
        description: "Learn how to use mixed conditionals naturally",
      },
    ],
    resources: [
      "Podcast: 'BBC Learning English - Conditionals'",
      "Video: 'Perfect English Grammar - Third Conditional'",
      "Article: 'Using Conditionals to Express Regret'",
    ],
    exercises: [
      "Stories tinglang va third conditional gaplarni aniqlang",
      "Interview tinglang va regret expressions'ni yozing",
      "Dialoglarni tinglang va conditional type'ni aniqlang",
    ],
  },
  homework: {
    writing:
      "O'tmishdagi muhim qaroringiz haqida yozing (Third Conditional ishlatib, 15 gap)",
    speaking:
      "Hayotingizdan 3 ta 'regret' momentni ovozga yozib bering (Mixed Conditional ishlatib)",
    vocabulary:
      "Har bir yangi so'zni Third Conditional gaplarda ishlatib yozing",
  },
};

// Day 10: Relative Clauses
const day10: DayData = {
  id: 10,
  vocabulary: [
    {
      word: "colleague",
      translation: "hamkasb",
      example: "This is my colleague who works in accounting.",
      difficulty: "easy",
    },
    {
      word: "department",
      translation: "bo'lim",
      example: "The department where I work is very busy.",
      difficulty: "easy",
    },
    {
      word: "specific",
      translation: "aniq, o'ziga xos",
      example: "I need specific information about the project.",
      difficulty: "medium",
    },
    {
      word: "detail",
      translation: "tafsilot",
      example: "The report which I wrote contains all the details.",
      difficulty: "easy",
    },
    {
      word: "identify",
      translation: "aniqlashmoq, tanib olmoq",
      example: "We need to identify the person who sent this.",
      difficulty: "medium",
    },
    {
      word: "characteristic",
      translation: "xususiyat, xarakteristika",
      example: "That's a characteristic that I admire.",
      difficulty: "hard",
    },
    {
      word: "essential",
      translation: "zarur, muhim",
      example: "This is essential information that we need.",
      difficulty: "medium",
    },
    {
      word: "particular",
      translation: "ma'lum, muayyan",
      example: "I'm looking for a particular book that you recommended.",
      difficulty: "medium",
    },
    {
      word: "relevant",
      translation: "tegishli, mos",
      example:
        "Please include all relevant documents which support your claim.",
      difficulty: "hard",
    },
    {
      word: "description",
      translation: "tavsif, ta'rif",
      example: "The description which you gave was very clear.",
      difficulty: "easy",
    },
  ],
  grammar: {
    topic: "Defining & Non-Defining Relative Clauses",
    formulas: [
      {
        title: "Defining Relative Clauses (no commas)",
        structure: "who/that (people), which/that (things), where (places)",
        examples: [
          "The person who called you is waiting",
          "The book that I bought is interesting",
          "The office where I work is downtown",
        ],
      },
      {
        title: "Non-Defining Relative Clauses (with commas)",
        structure: "who (people), which (things) - cannot use 'that'",
        examples: [
          "John, who is my colleague, lives in London",
          "The report, which I finished yesterday, was accepted",
          "My office, where I spend most of my time, is very comfortable",
        ],
      },
      {
        title: "Relative Pronouns: Whose",
        structure: "whose (possession - can be defining or non-defining)",
        examples: [
          "The person whose car was stolen called the police",
          "Maria, whose brother lives in Spain, speaks Spanish fluently",
          "The company whose CEO resigned is struggling",
        ],
      },
      {
        title: "Omitting Relative Pronouns",
        structure: "Can omit in defining clauses when it's the object",
        examples: [
          "The book (that/which) I read was great",
          "The person (who/that) I met was friendly",
          "The movie (that/which) we watched was boring",
        ],
      },
    ],
    rules: [
      "Defining: zarur ma'lumot, vergulsiz (The person who called is here)",
      "Non-defining: qo'shimcha ma'lumot, vergul bilan (John, who is 30, works here)",
      "That: faqat defining clauses'da ishlatiladi",
      "Which/Who: defining va non-defining clauses'da ishlatilish mumkin",
      "Whose: egalik bildiradi (The person whose car...)",
      "Defining clause'da relative pronoun obyekt bo'lsa, tushirib qoldirish mumkin",
    ],
    exercises: [
      {
        question: "The manager ___ hired me has retired.",
        answer: "who/that",
        explanation: "Odamlar uchun - who/that (defining clause)",
      },
      {
        question: "London, ___ is the capital of England, is very expensive.",
        answer: "which",
        explanation: "Non-defining clause - faqat which, vergul bilan",
      },
      {
        question: "The building ___ we work is very modern.",
        answer: "where",
        explanation: "Joy uchun - where",
      },
      {
        question: "The woman ___ car was stolen reported it to police.",
        answer: "whose",
        explanation: "Egalik bildirish - whose",
      },
      {
        question: "The project ___ I'm working on is challenging.",
        answer: "(that/which) - can be omitted",
        explanation: "Defining clause, obyekt - tushirib qoldirish mumkin",
      },
    ],
  },
  speaking: {
    topic: "Describing People, Places & Things",
    phrases: [
      {
        phrase: "The person who...",
        translation: "... qilgan odam",
      },
      {
        phrase: "This is the place where...",
        translation: "Bu ... joy",
      },
      {
        phrase: "I work with people who...",
        translation: "Men ... odamlar bilan ishlayman",
      },
      {
        phrase: "The company, which was founded in...",
        translation: "Kompaniya, ... yilda tashkil topgan",
      },
      {
        phrase: "My colleague, whose experience...",
        translation: "Mening hamkasbim, uning tajribasi...",
      },
      {
        phrase: "The project that I mentioned...",
        translation: "Men tilga olgan loyiha...",
      },
    ],
    tasks: [
      "Ish joyingiz va hamkasblaringizni relative clauses bilan tasvirlang",
      "Sevimli joyingiz haqida batafsil gapiring (where, which ishlatib)",
      "3 kishini tasvirlab bering (who, whose ishlatib)",
      "Mahsulot yoki xizmatni defining va non-defining clauses bilan tushuntiring",
    ],
  },
  listening: {
    youtubeVideos: [
      {
        title: "Relative Clauses Explained",
        url: "https://www.youtube.com/watch?v=5U_tY_N5_vI",
        description: "Master defining and non-defining relative clauses",
      },
      {
        title: "Who, Which, Where, Whose",
        url: "https://www.youtube.com/watch?v=y-yzBJHJqDo",
        description: "Learn how to use relative pronouns correctly",
      },
    ],
    resources: [
      "Podcast: 'BBC Learning English - Relative Clauses'",
      "Video: 'English Grammar - Defining vs Non-defining'",
      "Exercise: 'Perfect English Grammar - Relative Clauses'",
    ],
    exercises: [
      "Descriptive passages tinglang va relative clauses'ni aniqlang",
      "People descriptions tinglang va who/whose farqini kuzating",
      "News reports tinglang va which/that ishlatilishini tahlil qiling",
    ],
  },
  homework: {
    writing: "10 ta defining va 10 ta non-defining relative clause gap yozing",
    speaking:
      "Ish joyingiz, hamkasblaringiz va loyihalaringiz haqida 5 daqiqalik monolog yozing (relative clauses ishlatib)",
    vocabulary: "Har bir so'zni relative clause'da ishlatib gap tuzing",
  },
};

// Day 11: Advanced Passive Voice
const day11: DayData = {
  id: 11,
  vocabulary: [
    {
      word: "manufacture",
      translation: "ishlab chiqarmoq",
      example: "These products are manufactured in Germany.",
      difficulty: "medium",
    },
    {
      word: "construct",
      translation: "qurmoq, tuzmoq",
      example: "The building was constructed in 1995.",
      difficulty: "medium",
    },
    {
      word: "establish",
      translation: "tashkil qilmoq, o'rnatmoq",
      example: "The company was established 50 years ago.",
      difficulty: "hard",
    },
    {
      word: "conduct",
      translation: "o'tkazmoq (tadqiqot)",
      example: "Research is being conducted on this topic.",
      difficulty: "medium",
    },
    {
      word: "undergo",
      translation: "o'tmoq, boshdan kechirmoq",
      example: "The system is undergoing major changes.",
      difficulty: "hard",
    },
    {
      word: "authorize",
      translation: "ruxsat bermoq, vakolatli qilmoq",
      example: "This payment must be authorized by the manager.",
      difficulty: "hard",
    },
    {
      word: "distribute",
      translation: "tarqatmoq, taqsimlamoq",
      example: "Products are distributed worldwide.",
      difficulty: "medium",
    },
    {
      word: "assign",
      translation: "tayinlamoq, belgilamoq",
      example: "Tasks are assigned based on skill level.",
      difficulty: "medium",
    },
    {
      word: "require",
      translation: "talab qilmoq, zarur qilmoq",
      example: "All employees are required to attend the training.",
      difficulty: "easy",
    },
    {
      word: "prohibit",
      translation: "taqiqlamoq, man qilmoq",
      example: "Smoking is prohibited in this area.",
      difficulty: "medium",
    },
  ],
  grammar: {
    topic: "Advanced Passive Voice (All Tenses)",
    formulas: [
      {
        title: "Present Perfect Passive",
        structure: "Subject + have/has been + V3",
        examples: [
          "The work has been completed",
          "The documents have been signed",
          "The decision has been made",
        ],
      },
      {
        title: "Past Perfect Passive",
        structure: "Subject + had been + V3",
        examples: [
          "The email had been sent before I arrived",
          "The building had been evacuated",
          "The mistake had been corrected",
        ],
      },
      {
        title: "Future Perfect Passive",
        structure: "Subject + will have been + V3",
        examples: [
          "The project will have been finished by Friday",
          "The reports will have been submitted",
          "The issues will have been resolved",
        ],
      },
      {
        title: "Modal Passive",
        structure: "Subject + modal + be + V3",
        examples: [
          "This must be done immediately",
          "The problem should be solved",
          "The documents can be accessed online",
        ],
      },
    ],
    rules: [
      "Present Perfect Passive: tugallangan harakat (The work has been done)",
      "Past Perfect Passive: boshqa o'tmish harakatdan oldin (The email had been sent before...)",
      "Future Perfect Passive: ma'lum vaqtda tugallanadi (It will have been finished by...)",
      "Modal Passive: modal + be + V3 (It should be checked)",
      "Passive Voice rasmiy yozuvlarda va ilmiy maqolalarda ko'p ishlatiladi",
    ],
    exercises: [
      {
        question: "The report ___ (complete) by the time you arrive.",
        answer: "will have been completed",
        explanation:
          "Ma'lum vaqtda tugallangan harakat - Future Perfect Passive",
      },
      {
        question: "All the documents ___ (already/sign) when I got there.",
        answer: "had already been signed",
        explanation: "Boshqa o'tmish harakatdan oldin - Past Perfect Passive",
      },
      {
        question: "This issue ___ (address) in the next meeting.",
        answer: "will be addressed",
        explanation: "Kelajakda - Future Simple Passive",
      },
      {
        question: "The project ___ (work on) for three months now.",
        answer: "has been being worked on",
        explanation:
          "Davom etayotgan harakat - Present Perfect Continuous Passive",
      },
      {
        question: "The package ___ (deliver) by tomorrow.",
        answer: "should be delivered",
        explanation: "Modal Passive - should be + V3",
      },
    ],
  },
  speaking: {
    topic: "Formal Reporting",
    phrases: [
      {
        phrase: "It has been decided that...",
        translation: "... deb qaror qilindi",
      },
      {
        phrase: "The matter is being investigated",
        translation: "Masala tekshirilmoqda",
      },
      {
        phrase: "Steps will be taken to...",
        translation: "... uchun qadamlar qo'yiladi",
      },
      {
        phrase: "It is believed that...",
        translation: "... deb ishoniladi",
      },
      {
        phrase: "Consideration is being given to...",
        translation: "... ko'rib chiqilmoqda",
      },
      {
        phrase: "It was reported that...",
        translation: "... deb xabar berildi",
      },
    ],
    tasks: [
      "Formal report yozing (passive voice ishlatib)",
      "Company announcement tayyorlang",
      "Official statement ovozga yozing",
      "News report style'da gapiring",
    ],
  },
  listening: {
    youtubeVideos: [
      {
        title: "Passive Voice in All Tenses",
        url: "https://www.youtube.com/watch?v=o1lUJXlíZ7A",
        description: "Complete guide to passive voice in all English tenses",
      },
      {
        title: "Using Passive Voice in Academic Writing",
        url: "https://www.youtube.com/watch?v=aY7iMRb4qdE",
        description:
          "Learn when and how to use passive voice in formal writing",
      },
    ],
    resources: [
      "Article: 'When to Use Passive Voice'",
      "Video: 'Academic English - Passive Structures'",
      "Podcast: 'BBC Learning English - Advanced Grammar'",
    ],
    exercises: [
      "News reports tinglang va passive voice gaplarni yozing",
      "Academic lectures tinglang va passive structures'ni aniqlang",
      "Formal announcements tinglang va tahlil qiling",
    ],
  },
  homework: {
    writing: "Formal report yozing (passive voice ishlatib, kamida 200 so'z)",
    speaking: "Company announcement'ni ovozga yozib bering (passive voice)",
    vocabulary: "Har bir so'zni passive voice gaplarda ishlatib yozing",
  },
};

// Day 12: Gerunds & Infinitives
const day12: DayData = {
  id: 12,
  vocabulary: [
    {
      word: "avoid",
      translation: "qochmoq, oldini olmoq",
      example: "I avoid eating fast food.",
      difficulty: "easy",
    },
    {
      word: "manage",
      translation: "uddalash, boshqarish",
      example: "She managed to finish the project on time.",
      difficulty: "medium",
    },
    {
      word: "suggest",
      translation: "taklif qilmoq",
      example: "I suggest going to the new restaurant.",
      difficulty: "easy",
    },
    {
      word: "refuse",
      translation: "rad etmoq",
      example: "He refused to accept the offer.",
      difficulty: "easy",
    },
    {
      word: "enjoy",
      translation: "zavqlanmoq, yoqtirmoq",
      example: "I enjoy working from home.",
      difficulty: "easy",
    },
    {
      word: "attempt",
      translation: "urinmoq, harakat qilmoq",
      example: "She attempted to solve the problem.",
      difficulty: "medium",
    },
    {
      word: "delay",
      translation: "kechiktirmoq",
      example: "Don't delay submitting your application.",
      difficulty: "easy",
    },
    {
      word: "afford",
      translation: "pulini yetkazmoq, imkoni bo'lmoq",
      example: "I can't afford to buy a new car.",
      difficulty: "medium",
    },
    {
      word: "consider",
      translation: "o'ylab ko'rmoq",
      example: "We're considering moving to a new office.",
      difficulty: "medium",
    },
    {
      word: "decide",
      translation: "qaror qilmoq",
      example: "They decided to expand the business.",
      difficulty: "easy",
    },
  ],
  grammar: {
    topic: "Gerunds & Infinitives",
    formulas: [
      {
        title: "Verbs + Gerund (V-ing)",
        structure: "enjoy, avoid, mind, suggest, finish, consider + V-ing",
        examples: [
          "I enjoy reading books",
          "She avoids eating sugar",
          "We finished working at 6 PM",
        ],
      },
      {
        title: "Verbs + Infinitive (to + V1)",
        structure: "want, plan, hope, decide, manage, refuse + to V1",
        examples: [
          "I want to learn Spanish",
          "She decided to quit her job",
          "They plan to travel next year",
        ],
      },
      {
        title: "Verbs + Both (meaning changes)",
        structure: "remember, forget, stop, try + gerund/infinitive",
        examples: [
          "I remember meeting him (past) vs I'll remember to call (future)",
          "Stop smoking (quit) vs Stop to smoke (pause to smoke)",
          "Try opening it (experiment) vs Try to open it (attempt)",
        ],
      },
      {
        title: "Preposition + Gerund",
        structure: "Preposition + V-ing",
        examples: [
          "I'm interested in learning",
          "She's good at speaking English",
          "Thank you for helping",
        ],
      },
    ],
    rules: [
      "Gerund (V-ing): fe'lning ot shakli (Swimming is fun)",
      "Infinitive (to V1): fe'lning infinitiv shakli (I want to swim)",
      "Ba'zi fe'llar faqat gerund oladi: enjoy, avoid, mind, finish",
      "Ba'zi fe'llar faqat infinitive oladi: want, hope, decide, plan",
      "Ba'zi fe'llar ikkisini ham oladi, ma'nosi o'zgaradi: remember, forget, stop, try",
      "Predlog dan keyin doim gerund keladi (interested in learning)",
    ],
    exercises: [
      {
        question: "I enjoy ___ (work) with my team.",
        answer: "working",
        explanation: "Enjoy dan keyin gerund - working",
      },
      {
        question: "She decided ___ (accept) the job offer.",
        answer: "to accept",
        explanation: "Decide dan keyin infinitive - to accept",
      },
      {
        question: "I remember ___ (meet) him at the conference last year.",
        answer: "meeting",
        explanation: "Remember + gerund = o'tmishdagi xotira",
      },
      {
        question: "Don't forget ___ (send) the email today.",
        answer: "to send",
        explanation: "Forget + infinitive = kelajakdagi harakat",
      },
      {
        question: "I'm interested in ___ (learn) more about this topic.",
        answer: "learning",
        explanation: "Predlog dan keyin gerund - learning",
      },
    ],
  },
  speaking: {
    topic: "Talking About Habits & Preferences",
    phrases: [
      {
        phrase: "I enjoy...",
        translation: "Men ... yoqtiraman",
      },
      {
        phrase: "I can't stand...",
        translation: "Men ... chiday olmayman",
      },
      {
        phrase: "I'm thinking of...",
        translation: "Men ... haqida o'ylayapman",
      },
      {
        phrase: "I've decided to...",
        translation: "Men ... qilishga qaror qildim",
      },
      {
        phrase: "I'm looking forward to...",
        translation: "Men ... ni intiqlik bilan kutaman",
      },
      {
        phrase: "I'm considering...",
        translation: "Men ... ni o'ylab ko'ryapman",
      },
    ],
    tasks: [
      "O'zingizning odatlariungiz va sevimli mashg'ulotlaringiz haqida gapiring",
      "Kelajak rejalaringizni gerunds va infinitives bilan tasvirlang",
      "Do'stingiz bilan preferences haqida dialog quring",
      "Work habits haqida presentation tayyorlang",
    ],
  },
  listening: {
    youtubeVideos: [
      {
        title: "Gerunds and Infinitives Explained",
        url: "https://www.youtube.com/watch?v=V71GhIg7eY4",
        description: "Master when to use gerunds and infinitives",
      },
      {
        title: "Common Mistakes with Gerunds and Infinitives",
        url: "https://www.youtube.com/watch?v=CJnKd9Ux-4w",
        description: "Learn to avoid common errors",
      },
    ],
    resources: [
      "Podcast: 'English Grammar - Gerunds & Infinitives'",
      "Video: 'BBC Learning English - Verb Patterns'",
      "Exercise: 'Perfect English Grammar - Gerunds/Infinitives'",
    ],
    exercises: [
      "Conversations tinglang va gerund/infinitive usage'ni aniqlang",
      "Stories tinglang va verb patterns'ni yozing",
      "Interviews tinglang va preferences expressions'ni toping",
    ],
  },
  homework: {
    writing:
      "O'zingiz haqida yozing: hobbies, plans, habits (gerunds & infinitives ishlatib)",
    speaking: "3 daqiqalik monolog tayyorlang: things you enjoy and plan to do",
    vocabulary: "Har bir so'z bilan 2 tadan gap tuzing (gerund va infinitive)",
  },
};

// Day 13: Discourse Markers
const day13: DayData = {
  id: 13,
  vocabulary: [
    {
      word: "furthermore",
      translation: "bundan tashqari, qolaversa",
      example: "The product is affordable. Furthermore, it's eco-friendly.",
      difficulty: "hard",
    },
    {
      word: "moreover",
      translation: "bundan tashqari",
      example: "The service is excellent. Moreover, it's available 24/7.",
      difficulty: "hard",
    },
    {
      word: "however",
      translation: "biroq, lekin",
      example: "The plan is good. However, we need more time.",
      difficulty: "medium",
    },
    {
      word: "nevertheless",
      translation: "shunday bo'lsa ham",
      example: "It was difficult. Nevertheless, we succeeded.",
      difficulty: "hard",
    },
    {
      word: "therefore",
      translation: "shuning uchun, demak",
      example: "Sales are down. Therefore, we need a new strategy.",
      difficulty: "medium",
    },
    {
      word: "consequently",
      translation: "natijada",
      example: "We missed the deadline. Consequently, we lost the client.",
      difficulty: "hard",
    },
    {
      word: "meanwhile",
      translation: "shu vaqtda, bir paytda",
      example: "I'll prepare the report. Meanwhile, you contact the client.",
      difficulty: "medium",
    },
    {
      word: "alternatively",
      translation: "yoki, boshqacha qilib",
      example:
        "We could meet tomorrow. Alternatively, we could have a video call.",
      difficulty: "hard",
    },
    {
      word: "whereas",
      translation: "... esa, ... holbuki",
      example: "I prefer coffee, whereas my colleague prefers tea.",
      difficulty: "hard",
    },
    {
      word: "specifically",
      translation: "aniqrog'i, xususan",
      example: "I need help with grammar, specifically with conditionals.",
      difficulty: "medium",
    },
  ],
  grammar: {
    topic: "Discourse Markers & Linking Words",
    formulas: [
      {
        title: "Adding Information",
        structure: "Furthermore, Moreover, In addition, Besides",
        examples: [
          "The product is good. Furthermore, it's affordable",
          "She speaks French. Moreover, she speaks German",
          "In addition to English, I study Spanish",
        ],
      },
      {
        title: "Contrasting Ideas",
        structure: "However, Nevertheless, On the other hand, Whereas",
        examples: [
          "It's expensive. However, it's worth it",
          "It was difficult. Nevertheless, we succeeded",
          "I like summer, whereas she prefers winter",
        ],
      },
      {
        title: "Showing Result/Consequence",
        structure: "Therefore, Consequently, As a result, Thus",
        examples: [
          "Sales are low. Therefore, we need a new strategy",
          "He was late. Consequently, he missed the meeting",
          "As a result, profits increased",
        ],
      },
      {
        title: "Sequencing Ideas",
        structure: "Firstly, Secondly, Finally, Meanwhile",
        examples: [
          "Firstly, we need to analyze the data",
          "Secondly, we should discuss options",
          "Meanwhile, the team continues working",
        ],
      },
    ],
    rules: [
      "Discourse markers gaplar va fikrlarni bog'laydi",
      "Furthermore, Moreover: qo'shimcha ma'lumot qo'shadi",
      "However, Nevertheless: qarama-qarshi fikrni bildiradi",
      "Therefore, Consequently: natija yoki oqibatni ko'rsatadi",
      "Ko'pchilik discourse markers gapning boshida keladi va vergul bilan ajratiladi",
    ],
    exercises: [
      {
        question: "The project was challenging. ___, we completed it on time.",
        answer: "However/Nevertheless",
        explanation: "Qarama-qarshi fikr - However/Nevertheless",
      },
      {
        question: "Sales decreased. ___, we need to change our strategy.",
        answer: "Therefore/Consequently",
        explanation: "Natija - Therefore/Consequently",
      },
      {
        question: "The product is affordable. ___, it's high quality.",
        answer: "Furthermore/Moreover",
        explanation: "Qo'shimcha ma'lumot - Furthermore/Moreover",
      },
      {
        question: "I prefer tea, ___ my colleague prefers coffee.",
        answer: "whereas",
        explanation: "Kontrast - whereas",
      },
      {
        question: "We can meet in person. ___, we can have a video call.",
        answer: "Alternatively",
        explanation: "Alternativa - Alternatively",
      },
    ],
  },
  speaking: {
    topic: "Structuring Arguments & Presentations",
    phrases: [
      {
        phrase: "First of all, ...",
        translation: "Birinchidan, ...",
      },
      {
        phrase: "On the one hand... On the other hand...",
        translation: "Bir tomondan... Boshqa tomondan...",
      },
      {
        phrase: "As a result of this...",
        translation: "Buning natijasida...",
      },
      {
        phrase: "In spite of this...",
        translation: "Bunga qaramay...",
      },
      {
        phrase: "Taking everything into account...",
        translation: "Hamma narsani hisobga olsak...",
      },
      {
        phrase: "To put it another way...",
        translation: "Boshqacha aytganda...",
      },
    ],
    tasks: [
      "Formal presentation tayyorlang (discourse markers bilan)",
      "Argumentative speech yozing va taqdim eting",
      "Debate mashqini bajaring (linking words ishlatib)",
      "Essay structurasini ovozli tushuntiring",
    ],
  },
  listening: {
    youtubeVideos: [
      {
        title: "Discourse Markers in English",
        url: "https://www.youtube.com/watch?v=Y5kDgPu_O88",
        description: "Learn how to connect ideas naturally",
      },
      {
        title: "Linking Words for IELTS & Professional English",
        url: "https://www.youtube.com/watch?v=hCw4sZqFCxs",
        description: "Master advanced linking words",
      },
    ],
    resources: [
      "Article: 'Academic Discourse Markers'",
      "Video: 'BBC Learning English - Linking Words'",
      "Podcast: 'English for Academic Purposes'",
    ],
    exercises: [
      "Academic lectures tinglang va discourse markers'ni yozing",
      "Formal presentations tinglang va linking words'ni aniqlang",
      "Debates tinglang va argument structure'ni tahlil qiling",
    ],
  },
  homework: {
    writing:
      "Essay yozing: advantages and disadvantages (discourse markers ishlatib, 300 so'z)",
    speaking:
      "Controversial topic haqida 5 daqiqalik argumentative speech tayyorlang",
    vocabulary: "Har bir discourse marker bilan formal gaplar tuzing",
  },
};

// Day 14: Quantifiers & Articles
const day14: DayData = {
  id: 14,
  vocabulary: [
    {
      word: "numerous",
      translation: "ko'plab, son-sanoqsiz",
      example: "There are numerous benefits to this approach.",
      difficulty: "medium",
    },
    {
      word: "several",
      translation: "bir necha, bir qancha",
      example: "I've been to that restaurant several times.",
      difficulty: "easy",
    },
    {
      word: "sufficient",
      translation: "yetarli, kifoya",
      example: "We don't have sufficient resources.",
      difficulty: "hard",
    },
    {
      word: "adequate",
      translation: "yetarli, munosib",
      example: "The budget is adequate for our needs.",
      difficulty: "hard",
    },
    {
      word: "substantial",
      translation: "katta, sezilarli",
      example: "We saw a substantial increase in sales.",
      difficulty: "hard",
    },
    {
      word: "scarce",
      translation: "kam, tanqis",
      example: "Resources are scarce in this region.",
      difficulty: "medium",
    },
    {
      word: "abundant",
      translation: "ko'p, mo'l-ko'l",
      example: "There is abundant evidence to support this.",
      difficulty: "medium",
    },
    {
      word: "minimal",
      translation: "minimal, eng kam",
      example: "The risk is minimal.",
      difficulty: "medium",
    },
    {
      word: "excessive",
      translation: "haddan tashqari, ortiqcha",
      example: "The costs are excessive.",
      difficulty: "medium",
    },
    {
      word: "moderate",
      translation: "o'rtacha, mo'tadil",
      example: "We need a moderate approach.",
      difficulty: "medium",
    },
  ],
  grammar: {
    topic: "Quantifiers & Article Usage",
    formulas: [
      {
        title: "Countable vs Uncountable",
        structure: "many/few (countable), much/little (uncountable)",
        examples: [
          "many books / much time",
          "few people / little money",
          "a few friends / a little water",
        ],
      },
      {
        title: "Articles with Specific/General",
        structure:
          "the (specific), a/an (general), no article (plural/uncountable general)",
        examples: [
          "The book I bought (specific) / A book (general)",
          "The coffee is cold (specific) / Coffee is popular (general)",
          "The children in my class / Children need love",
        ],
      },
      {
        title: "Quantifiers for Different Amounts",
        structure: "some, any, no, all, both, neither, either",
        examples: [
          "some water / any questions",
          "all employees / both options",
          "neither choice / either way",
        ],
      },
      {
        title: "Large/Small Quantities",
        structure: "plenty of, a lot of, loads of / a bit of, a little",
        examples: [
          "plenty of time / loads of work",
          "a lot of people / lots of ideas",
          "a bit of advice / a little help",
        ],
      },
    ],
    rules: [
      "Many/Few: countable nouns bilan (many books, few cars)",
      "Much/Little: uncountable nouns bilan (much water, little time)",
      "A few = biroz bor (ijobiy), Few = kam (salbiy)",
      "A little = biroz bor (ijobiy), Little = kam (salbiy)",
      "The: aniq narsa, A/an: umumiy narsa",
      "Article yo'q: umumiy ko'plik va uncountable (Coffee is good)",
    ],
    exercises: [
      {
        question: "I don't have ___ time to finish this project.",
        answer: "much",
        explanation: "Time - uncountable, salbiy - much",
      },
      {
        question: "There are ___ people waiting outside.",
        answer: "many/several",
        explanation: "People - countable - many/several",
      },
      {
        question: "Could you give me ___ advice?",
        answer: "some",
        explanation: "Advice - uncountable, so'rov - some",
      },
      {
        question: "___ coffee you made is delicious.",
        answer: "The",
        explanation: "Aniq coffee (you made) - The",
      },
      {
        question: "I have ___ good news to share.",
        answer: "some/a bit of",
        explanation: "News - uncountable - some/a bit of",
      },
    ],
  },
  speaking: {
    topic: "Describing Quantities & Making Generalizations",
    phrases: [
      {
        phrase: "There are plenty of...",
        translation: "... ko'p bor",
      },
      {
        phrase: "We have sufficient...",
        translation: "Bizda yetarli ... bor",
      },
      {
        phrase: "Only a few...",
        translation: "Faqat bir necha...",
      },
      {
        phrase: "A large number of...",
        translation: "Ko'plab...",
      },
      {
        phrase: "The majority of...",
        translation: "Ko'pchilik...",
      },
      {
        phrase: "Hardly any...",
        translation: "Deyarli yo'q...",
      },
    ],
    tasks: [
      "Resources va budget haqida gapiring (quantifiers ishlatib)",
      "Survey results'ni tasvirlang",
      "Company statistics'ni taqdim eting",
      "Market trends haqida muhokama qiling",
    ],
  },
  listening: {
    youtubeVideos: [
      {
        title: "Quantifiers in English",
        url: "https://www.youtube.com/watch?v=X0B-C7lZAI0",
        description: "Master the use of quantifiers",
      },
      {
        title: "Articles: A, An, The",
        url: "https://www.youtube.com/watch?v=aiFJrvpPjAE",
        description: "Learn when to use articles correctly",
      },
    ],
    resources: [
      "Podcast: 'English Grammar - Quantifiers'",
      "Video: 'BBC Learning English - Articles'",
      "Exercise: 'Perfect English Grammar - Quantifiers'",
    ],
    exercises: [
      "Statistics reports tinglang va quantifiers'ni yozing",
      "News reports tinglang va article usage'ni tahlil qiling",
      "Survey results tinglang va quantity expressions'ni aniqlang",
    ],
  },
  homework: {
    writing:
      "Report yozing: survey results yoki statistics (quantifiers ishlatib)",
    speaking: "Data presentation tayyorlang va video yozib oling",
    vocabulary: "Har bir so'z bilan quantity expressions tuzing",
  },
};

// Day 15: Noun Clauses
const day15: DayData = {
  id: 15,
  vocabulary: [
    {
      word: "wonder",
      translation: "hayron bo'lmoq, o'ylamoq",
      example: "I wonder what time it is.",
      difficulty: "easy",
    },
    {
      word: "doubt",
      translation: "shubha qilmoq",
      example: "I doubt that he will come.",
      difficulty: "medium",
    },
    {
      word: "realize",
      translation: "anglash, tushunish",
      example: "I didn't realize how difficult it was.",
      difficulty: "easy",
    },
    {
      word: "believe",
      translation: "ishonmoq",
      example: "I believe that we can succeed.",
      difficulty: "easy",
    },
    {
      word: "suppose",
      translation: "taxmin qilmoq, o'ylamoq",
      example: "I suppose that's correct.",
      difficulty: "medium",
    },
    {
      word: "assume",
      translation: "faraz qilmoq",
      example: "I assume you know the answer.",
      difficulty: "medium",
    },
    {
      word: "suspect",
      translation: "shubhalanmoq",
      example: "I suspect that something is wrong.",
      difficulty: "medium",
    },
    {
      word: "prove",
      translation: "isbotlamoq",
      example: "This proves that the theory is correct.",
      difficulty: "medium",
    },
    {
      word: "indicate",
      translation: "ko'rsatmoq, bildirmoq",
      example: "The data indicates that sales are improving.",
      difficulty: "hard",
    },
    {
      word: "demonstrate",
      translation: "ko'rsatib bermoq",
      example: "This demonstrates how the system works.",
      difficulty: "medium",
    },
  ],
  grammar: {
    topic: "Noun Clauses (that, what, if/whether, wh-words)",
    formulas: [
      {
        title: "That-clauses",
        structure: "Verb + that + clause",
        examples: [
          "I think that it's a good idea",
          "She believes that we can succeed",
          "They know that the meeting is tomorrow",
        ],
      },
      {
        title: "Wh-clauses (embedded questions)",
        structure: "Verb + wh-word + clause (statement order)",
        examples: [
          "I don't know what he wants",
          "She asked where the office is",
          "Tell me why you're late",
        ],
      },
      {
        title: "If/Whether clauses",
        structure: "Verb + if/whether + clause",
        examples: [
          "I wonder if he's coming",
          "I don't know whether to accept or refuse",
          "She asked if I was ready",
        ],
      },
      {
        title: "What-clauses as Subject/Object",
        structure: "What + clause can be subject or object",
        examples: [
          "What you said is true (subject)",
          "I understand what you mean (object)",
          "What matters is quality (subject)",
        ],
      },
    ],
    rules: [
      "Noun clause: gap ichidagi gap, ot vazifasini bajaradi",
      "That-clause: fikr, ishonch bildiradi (I think that...)",
      "Wh-clause: ichki savol, darak gap tartibi (I wonder where he is)",
      "If/Whether: yes/no savollari uchun (I don't know if/whether...)",
      "What-clause: 'nima' deganni anglatadi (What you need is...)",
      "That ko'pincha tushirib qoldiriladi (I think it's good)",
    ],
    exercises: [
      {
        question: "I don't know ___ he will arrive.",
        answer: "when",
        explanation: "Wh-clause - embedded question",
      },
      {
        question: "She wonders ___ she should accept the job.",
        answer: "if/whether",
        explanation: "Yes/no embedded question - if/whether",
      },
      {
        question: "I believe ___ this is the best solution.",
        answer: "that (optional)",
        explanation: "That-clause - 'that' tushirib qoldirilishi mumkin",
      },
      {
        question: "___ you need is more practice.",
        answer: "What",
        explanation: "What-clause as subject",
      },
      {
        question: "Can you tell me ___ the meeting will be held?",
        answer: "where",
        explanation: "Wh-clause - embedded question, darak gap tartibi",
      },
    ],
  },
  speaking: {
    topic: "Expressing Opinions & Uncertainty",
    phrases: [
      {
        phrase: "I believe that...",
        translation: "Men ishonaman...",
      },
      {
        phrase: "I'm not sure if...",
        translation: "Men aniq emasman...",
      },
      {
        phrase: "What I mean is...",
        translation: "Men aytmoqchi bo'lganim...",
      },
      {
        phrase: "I wonder whether...",
        translation: "Men o'ylab qoldim...",
      },
      {
        phrase: "The question is whether...",
        translation: "Savol shundaki...",
      },
      {
        phrase: "What matters most is...",
        translation: "Eng muhimi...",
      },
    ],
    tasks: [
      "O'z fikringizni noun clauses bilan ifodalang",
      "Noaniqlik va shubhani bildiring",
      "Embedded questions ishlatib dialog quring",
      "Opinion piece tayyorlang va taqdim eting",
    ],
  },
  listening: {
    youtubeVideos: [
      {
        title: "Noun Clauses Explained",
        url: "https://www.youtube.com/watch?v=WPzI49qnPzI",
        description: "Learn how to use noun clauses correctly",
      },
      {
        title: "Embedded Questions",
        url: "https://www.youtube.com/watch?v=P7IXtOJb7-E",
        description: "Master indirect questions and noun clauses",
      },
    ],
    resources: [
      "Podcast: 'English Grammar - Noun Clauses'",
      "Video: 'BBC Learning English - Embedded Questions'",
      "Exercise: 'Perfect English Grammar - Noun Clauses'",
    ],
    exercises: [
      "Interviews tinglang va noun clauses'ni aniqlang",
      "Opinions tinglang va that-clauses'ni yozing",
      "Indirect questions tinglang va tahlil qiling",
    ],
  },
  homework: {
    writing: "Essay yozing: your opinion on a topic (noun clauses ishlatib)",
    speaking: "Belief va uncertainty haqida monolog yozing (noun clauses)",
    vocabulary: "Har bir so'z bilan noun clause gaplar tuzing",
  },
};

// Day 16-30 will continue with more advanced topics
const day16: DayData = {
  id: 16,
  vocabulary: [
    {
      word: "analyze",
      translation: "tahlil qilmoq",
      example: "We need to analyze the data carefully.",
      difficulty: "medium",
    },
    {
      word: "evaluate",
      translation: "baholamoq",
      example: "Let's evaluate our performance this quarter.",
      difficulty: "medium",
    },
    {
      word: "interpret",
      translation: "talqin qilmoq, tushuntirmoq",
      example: "How do you interpret these results?",
      difficulty: "hard",
    },
    {
      word: "deduce",
      translation: "xulosa chiqarmoq",
      example: "What can we deduce from this information?",
      difficulty: "hard",
    },
    {
      word: "infer",
      translation: "xulosalashmoq",
      example: "We can infer that sales will increase.",
      difficulty: "hard",
    },
    {
      word: "conclude",
      translation: "xulosa qilmoq",
      example: "I conclude that the project was successful.",
      difficulty: "medium",
    },
    {
      word: "hypothesis",
      translation: "gipoteza, faraz",
      example: "Our hypothesis needs to be tested.",
      difficulty: "hard",
    },
    {
      word: "evidence",
      translation: "dalil, isbot",
      example: "There is strong evidence to support this claim.",
      difficulty: "medium",
    },
    {
      word: "implication",
      translation: "ma'no, oqibat",
      example: "What are the implications of this decision?",
      difficulty: "hard",
    },
    {
      word: "criterion",
      translation: "mezon, ko'rsatkich",
      example: "What is the main criterion for selection?",
      difficulty: "hard",
    },
  ],
  grammar: {
    topic: "Advanced Tense Review",
    formulas: [
      {
        title: "All Tenses Overview",
        structure: "Review of all 12 tenses",
        examples: ["Present: I work", "Past: I worked", "Future: I will work"],
      },
    ],
    rules: [
      "Complete review of all English tenses",
      "Focus on usage in context",
      "Common mistakes and how to avoid them",
    ],
    exercises: [
      {
        question: "Choose the correct tense for each context",
        answer: "Varies",
        explanation: "Context determines tense",
      },
    ],
  },
  speaking: {
    topic: "Critical Thinking & Analysis",
    phrases: [
      {
        phrase: "Based on the evidence...",
        translation: "Dalillar asosida...",
      },
      {
        phrase: "It can be inferred that...",
        translation: "Bundan kelib chiqadiki...",
      },
    ],
    tasks: [
      "Data tahlil qilishni mashq qiling",
      "Critical analysis presentation tayyorlang",
    ],
  },
  listening: {
    youtubeVideos: [
      {
        title: "Critical Thinking Skills",
        url: "https://www.youtube.com/watch?v=Qhm5hZQ",
        description: "Develop analytical thinking",
      },
    ],
    resources: ["TED Talks on analysis"],
    exercises: ["Analytical presentations tinglang"],
  },
  homework: {
    writing: "Analytical essay yozing",
    speaking: "Critical analysis monolog",
    vocabulary: "Academic vocabulary mashq",
  },
};

const day17: DayData = {
  id: 17,
  vocabulary: [
    {
      word: "motivate",
      translation: "motivatsiya bermoq",
      example: "Good leaders know how to motivate their team.",
      difficulty: "easy",
    },
    {
      word: "inspire",
      translation: "ilhomlantirmoq",
      example: "Her speech inspired us all.",
      difficulty: "medium",
    },
    {
      word: "encourage",
      translation: "rag'batlantirmoq",
      example: "Teachers should encourage students.",
      difficulty: "easy",
    },
    {
      word: "influence",
      translation: "ta'sir qilmoq",
      example: "Media can influence public opinion.",
      difficulty: "medium",
    },
    {
      word: "persuade",
      translation: "ko'ndirmoq",
      example: "He persuaded me to join the project.",
      difficulty: "medium",
    },
    {
      word: "convince",
      translation: "ishontirmoq",
      example: "Can you convince them to invest?",
      difficulty: "medium",
    },
    {
      word: "leadership",
      translation: "rahbarlik, yetakchilik",
      example: "Good leadership is essential.",
      difficulty: "medium",
    },
    {
      word: "initiative",
      translation: "tashabbus",
      example: "Show some initiative!",
      difficulty: "medium",
    },
    {
      word: "determination",
      translation: "qat'iyat",
      example: "Success requires determination.",
      difficulty: "medium",
    },
    {
      word: "perseverance",
      translation: "qat'iyat, sabr-toqat",
      example: "Perseverance leads to success.",
      difficulty: "hard",
    },
  ],
  grammar: {
    topic: "Emphatic Structures",
    formulas: [
      {
        title: "It is/was... that",
        structure: "It + be + element + that + clause",
        examples: [
          "It was John that made the decision",
          "It is quality that matters",
        ],
      },
    ],
    rules: ["Emphatic structures for emphasis", "What-clefts for focus"],
    exercises: [
      {
        question: "Rewrite for emphasis",
        answer: "Varies",
        explanation: "Focus on key information",
      },
    ],
  },
  speaking: {
    topic: "Motivation & Leadership",
    phrases: [
      {
        phrase: "What motivates you is...",
        translation: "Sizni ... rag'batlantiradi",
      },
      {
        phrase: "The key to success is...",
        translation: "Muvaffaqiyat kaliti...",
      },
    ],
    tasks: ["Motivational speech tayyorlang"],
  },
  listening: {
    youtubeVideos: [
      {
        title: "Leadership Skills",
        url: "https://www.youtube.com/watch?v=abc123",
        description: "Effective leadership",
      },
    ],
    resources: ["TED Talks on motivation"],
    exercises: ["Motivational speeches tinglang"],
  },
  homework: {
    writing: "Motivational essay",
    speaking: "Leadership presentation",
    vocabulary: "Leadership terms",
  },
};

const day18: DayData = {
  id: 18,
  vocabulary: [
    {
      word: "conflict",
      translation: "ziddiyat, mojaro",
      example: "We need to resolve this conflict.",
      difficulty: "medium",
    },
    {
      word: "dispute",
      translation: "bahs, nizo",
      example: "There's a dispute over the contract.",
      difficulty: "medium",
    },
    {
      word: "resolution",
      translation: "yechim, hal qilish",
      example: "We found a resolution to the problem.",
      difficulty: "medium",
    },
    {
      word: "mediate",
      translation: "vositachilik qilmoq",
      example: "I'll mediate between the two parties.",
      difficulty: "hard",
    },
    {
      word: "negotiate",
      translation: "muzokara qilmoq",
      example: "Let's negotiate the terms.",
      difficulty: "medium",
    },
    {
      word: "compromise",
      translation: "murosa qilmoq",
      example: "Both sides need to compromise.",
      difficulty: "medium",
    },
    {
      word: "reconcile",
      translation: "yarashmoq, muvofiqlash tirmoq",
      example: "We reconciled our differences.",
      difficulty: "hard",
    },
    {
      word: "arbitrate",
      translation: "hakamlik qilmoq",
      example: "Someone needs to arbitrate this.",
      difficulty: "hard",
    },
    {
      word: "facilitate",
      translation: "osonlashtirmoq",
      example: "I'll facilitate the discussion.",
      difficulty: "hard",
    },
    {
      word: "intervene",
      translation: "aralashmoq, vositachilik qilmoq",
      example: "Management had to intervene.",
      difficulty: "medium",
    },
  ],
  grammar: {
    topic: "Subjunctive Mood",
    formulas: [
      {
        title: "Subjunctive after certain verbs",
        structure: "suggest/recommend/insist + that + subject + base form",
        examples: [
          "I suggest that he come early",
          "She insists that we be on time",
        ],
      },
    ],
    rules: ["Subjunctive for formal suggestions", "Used after certain verbs"],
    exercises: [
      {
        question: "I recommend that she ___ (go) to the meeting.",
        answer: "go",
        explanation: "Subjunctive - base form",
      },
    ],
  },
  speaking: {
    topic: "Conflict Resolution",
    phrases: [
      {
        phrase: "Let's find common ground",
        translation: "Umumiy til topaylik",
      },
      {
        phrase: "I see both sides",
        translation: "Ikkala tomonni ham tushunaman",
      },
    ],
    tasks: ["Conflict resolution dialogue"],
  },
  listening: {
    youtubeVideos: [
      {
        title: "Conflict Resolution",
        url: "https://www.youtube.com/watch?v=xyz789",
        description: "Resolve workplace conflicts",
      },
    ],
    resources: ["Mediation podcasts"],
    exercises: ["Conflict dialogues tinglang"],
  },
  homework: {
    writing: "Conflict resolution case study",
    speaking: "Mediation role-play",
    vocabulary: "Conflict terms practice",
  },
};

const day19: DayData = {
  id: 19,
  vocabulary: [
    {
      word: "innovate",
      translation: "innovatsiya kiritmoq",
      example: "Companies must innovate to survive.",
      difficulty: "medium",
    },
    {
      word: "revolutionize",
      translation: "inqilob qilmoq",
      example: "This will revolutionize the industry.",
      difficulty: "hard",
    },
    {
      word: "transform",
      translation: "o'zgartirmoq",
      example: "Technology transformed our lives.",
      difficulty: "medium",
    },
    {
      word: "breakthrough",
      translation: "katta yutuq, muvaffaqiyat",
      example: "We achieved a major breakthrough.",
      difficulty: "medium",
    },
    {
      word: "cutting-edge",
      translation: "eng ilg'or",
      example: "We use cutting-edge technology.",
      difficulty: "hard",
    },
    {
      word: "pioneering",
      translation: "ilg'or, kashshof",
      example: "Their pioneering work changed everything.",
      difficulty: "hard",
    },
    {
      word: "disruptive",
      translation: "buzuvchi, o'zgartiruvchi",
      example: "It's a disruptive innovation.",
      difficulty: "hard",
    },
    {
      word: "patent",
      translation: "patent",
      example: "They patented their invention.",
      difficulty: "medium",
    },
    {
      word: "prototype",
      translation: "prototip",
      example: "We built a prototype first.",
      difficulty: "medium",
    },
    {
      word: "scalable",
      translation: "kengaytirilishi mumkin",
      example: "The solution needs to be scalable.",
      difficulty: "hard",
    },
  ],
  grammar: {
    topic: "Future in the Past",
    formulas: [
      {
        title: "Was/Were going to",
        structure: "Subject + was/were going to + V1",
        examples: ["I was going to call you", "They were going to leave early"],
      },
    ],
    rules: ["Express cancelled plans", "Past intentions"],
    exercises: [
      {
        question: "I ___ (visit) you, but I got busy.",
        answer: "was going to visit",
        explanation: "Cancelled plan",
      },
    ],
  },
  speaking: {
    topic: "Innovation & Technology",
    phrases: [
      {
        phrase: "This represents a breakthrough in...",
        translation: "Bu ... da katta yutuq",
      },
      { phrase: "It's a game-changer", translation: "Bu o'yin o'zgartiruvchi" },
    ],
    tasks: ["Innovation presentation"],
  },
  listening: {
    youtubeVideos: [
      {
        title: "Innovation & Startups",
        url: "https://www.youtube.com/watch?v=tech123",
        description: "Tech innovation",
      },
    ],
    resources: ["Tech podcasts"],
    exercises: ["Innovation talks tinglang"],
  },
  homework: {
    writing: "Innovation proposal",
    speaking: "Tech presentation",
    vocabulary: "Technology terms",
  },
};

const day20: DayData = {
  id: 20,
  vocabulary: [
    {
      word: "sustainability",
      translation: "barqarorlik",
      example: "Environmental sustainability is crucial.",
      difficulty: "hard",
    },
    {
      word: "renewable",
      translation: "qayta tiklanadigan",
      example: "Renewable energy is the future.",
      difficulty: "medium",
    },
    {
      word: "conservation",
      translation: "saqlash, muhofaza",
      example: "Wildlife conservation is important.",
      difficulty: "medium",
    },
    {
      word: "biodiversity",
      translation: "bioturlilik",
      example: "We must protect biodiversity.",
      difficulty: "hard",
    },
    {
      word: "emission",
      translation: "chiqindi, emissiya",
      example: "Reduce carbon emissions.",
      difficulty: "medium",
    },
    {
      word: "ecosystem",
      translation: "ekotizim",
      example: "The ecosystem is fragile.",
      difficulty: "medium",
    },
    {
      word: "footprint",
      translation: "iz, ta'sir",
      example: "Reduce your carbon footprint.",
      difficulty: "medium",
    },
    {
      word: "deforestation",
      translation: "o'rmonlarni kesish",
      example: "Deforestation is a serious problem.",
      difficulty: "hard",
    },
    {
      word: "pollutant",
      translation: "ifloslantiruvchi modda",
      example: "Reduce air pollutants.",
      difficulty: "medium",
    },
    {
      word: "sustainable",
      translation: "barqaror",
      example: "We need sustainable practices.",
      difficulty: "medium",
    },
  ],
  grammar: {
    topic: "Inversion for Emphasis",
    formulas: [
      {
        title: "Negative inversion",
        structure: "Never/Rarely/Seldom + auxiliary + subject + verb",
        examples: ["Never have I seen such beauty", "Rarely does he complain"],
      },
    ],
    rules: ["Inversion after negative adverbs", "For dramatic emphasis"],
    exercises: [
      {
        question: "Rewrite with inversion: I have never seen such a thing",
        answer: "Never have I seen such a thing",
        explanation: "Negative inversion",
      },
    ],
  },
  speaking: {
    topic: "Environment & Sustainability",
    phrases: [
      { phrase: "It's high time we...", translation: "... vaqti keldi" },
      {
        phrase: "We can no longer afford to...",
        translation: "Biz endi ... qila olmaymiz",
      },
    ],
    tasks: ["Environmental presentation"],
  },
  listening: {
    youtubeVideos: [
      {
        title: "Climate Change",
        url: "https://www.youtube.com/watch?v=env123",
        description: "Environmental issues",
      },
    ],
    resources: ["Environmental podcasts"],
    exercises: ["Environment talks tinglang"],
  },
  homework: {
    writing: "Environmental essay",
    speaking: "Sustainability presentation",
    vocabulary: "Environmental terms",
  },
};

// Days 21-30 (Compact format to save space)
const day21: DayData = {
  id: 21,
  vocabulary: [
    {
      word: "ethics",
      translation: "axloq, odob",
      example: "Business ethics are important.",
      difficulty: "medium",
    },
    {
      word: "integrity",
      translation: "halollik, poklik",
      example: "He's a person of great integrity.",
      difficulty: "hard",
    },
    {
      word: "accountability",
      translation: "javobgarlik",
      example: "Leaders must have accountability.",
      difficulty: "hard",
    },
    {
      word: "transparency",
      translation: "shaffoflik",
      example: "We value transparency in business.",
      difficulty: "medium",
    },
    {
      word: "compliance",
      translation: "rioya qilish",
      example: "Ensure compliance with regulations.",
      difficulty: "hard",
    },
    {
      word: "moral",
      translation: "ma'naviy, axloqiy",
      example: "It's a moral obligation.",
      difficulty: "medium",
    },
    {
      word: "principle",
      translation: "tamoyil, printsip",
      example: "Stand by your principles.",
      difficulty: "medium",
    },
    {
      word: "dilemma",
      translation: "dilema, qiyin tanlov",
      example: "We face an ethical dilemma.",
      difficulty: "medium",
    },
    {
      word: "responsibility",
      translation: "mas'uliyat",
      example: "Take responsibility for your actions.",
      difficulty: "easy",
    },
    {
      word: "conscience",
      translation: "vijdon",
      example: "Listen to your conscience.",
      difficulty: "medium",
    },
  ],
  grammar: {
    topic: "Ellipsis & Substitution",
    formulas: [
      {
        title: "Avoiding repetition",
        structure: "Use 'one', 'do', 'so'",
        examples: [
          "I like the red one",
          "She works harder than I do",
          "I think so",
        ],
      },
    ],
    rules: ["Avoid repetition in speech", "Make language more natural"],
    exercises: [
      {
        question: "I don't have a pen. Can you lend me ___?",
        answer: "one",
        explanation: "One substitutes for 'a pen'",
      },
    ],
  },
  speaking: {
    topic: "Ethics & Values",
    phrases: [
      {
        phrase: "It's a matter of principle",
        translation: "Bu printsip masalasi",
      },
      {
        phrase: "Ethically speaking...",
        translation: "Axloqiy nuqtai nazardan...",
      },
    ],
    tasks: ["Ethical dilemma discussion"],
  },
  listening: {
    youtubeVideos: [
      {
        title: "Business Ethics",
        url: "https://www.youtube.com/watch?v=ethics1",
        description: "Professional ethics",
      },
    ],
    resources: ["Ethics podcasts"],
    exercises: ["Ethics discussions tinglang"],
  },
  homework: {
    writing: "Ethical dilemma essay",
    speaking: "Values presentation",
    vocabulary: "Ethics terms",
  },
};

const day22: DayData = {
  id: 22,
  vocabulary: [
    {
      word: "recession",
      translation: "turg'unlik, inqiroz",
      example: "The economy is in recession.",
      difficulty: "medium",
    },
    {
      word: "inflation",
      translation: "inflyatsiya",
      example: "Inflation rates are rising.",
      difficulty: "medium",
    },
    {
      word: "investment",
      translation: "sarmoya, investitsiya",
      example: "It's a good investment opportunity.",
      difficulty: "easy",
    },
    {
      word: "dividend",
      translation: "dividend",
      example: "Shareholders receive dividends.",
      difficulty: "hard",
    },
    {
      word: "asset",
      translation: "aktiv, mol-mulk",
      example: "Real estate is a valuable asset.",
      difficulty: "medium",
    },
    {
      word: "liability",
      translation: "qarzdorlik, majburiyat",
      example: "The company has many liabilities.",
      difficulty: "hard",
    },
    {
      word: "revenue",
      translation: "daromad",
      example: "Annual revenue increased.",
      difficulty: "medium",
    },
    {
      word: "expenditure",
      translation: "xarajat",
      example: "Reduce unnecessary expenditure.",
      difficulty: "hard",
    },
    {
      word: "portfolio",
      translation: "portfel",
      example: "Diversify your investment portfolio.",
      difficulty: "hard",
    },
    {
      word: "equity",
      translation: "kapital",
      example: "They have equity in the company.",
      difficulty: "hard",
    },
  ],
  grammar: {
    topic: "Fronting for Emphasis",
    formulas: [
      {
        title: "Object/Adverb at the start",
        structure: "Object/Adverb + subject + verb",
        examples: [
          "This film I really enjoyed",
          "Never before have we seen this",
        ],
      },
    ],
    rules: ["Move element to front for emphasis", "Creates dramatic effect"],
    exercises: [
      {
        question: "Rewrite: I really love this book",
        answer: "This book I really love",
        explanation: "Fronting for emphasis",
      },
    ],
  },
  speaking: {
    topic: "Finance & Economics",
    phrases: [
      {
        phrase: "From a financial perspective...",
        translation: "Moliyaviy nuqtai nazardan...",
      },
      { phrase: "The bottom line is...", translation: "Asosi shuki..." },
    ],
    tasks: ["Financial presentation"],
  },
  listening: {
    youtubeVideos: [
      {
        title: "Economics Explained",
        url: "https://www.youtube.com/watch?v=econ1",
        description: "Basic economics",
      },
    ],
    resources: ["Finance podcasts"],
    exercises: ["Financial news tinglang"],
  },
  homework: {
    writing: "Financial analysis",
    speaking: "Economic presentation",
    vocabulary: "Financial terms",
  },
};

const day23: DayData = {
  id: 23,
  vocabulary: [
    {
      word: "diagnose",
      translation: "tashxis qo'ymoq",
      example: "The doctor diagnosed the illness.",
      difficulty: "medium",
    },
    {
      word: "symptom",
      translation: "alomat, simptom",
      example: "What are the symptoms?",
      difficulty: "easy",
    },
    {
      word: "treatment",
      translation: "davolash",
      example: "The treatment was effective.",
      difficulty: "easy",
    },
    {
      word: "prescription",
      translation: "retsept",
      example: "You need a prescription for this.",
      difficulty: "medium",
    },
    {
      word: "recovery",
      translation: "tuzalish",
      example: "I wish you a speedy recovery.",
      difficulty: "easy",
    },
    {
      word: "immune",
      translation: "immunitetli",
      example: "Boost your immune system.",
      difficulty: "medium",
    },
    {
      word: "chronic",
      translation: "surunkali",
      example: "It's a chronic condition.",
      difficulty: "hard",
    },
    {
      word: "acute",
      translation: "o'tkir",
      example: "He has acute pain.",
      difficulty: "medium",
    },
    {
      word: "preventive",
      translation: "oldini oluvchi",
      example: "Preventive care is important.",
      difficulty: "medium",
    },
    {
      word: "rehabilitation",
      translation: "reabilitatsiya",
      example: "She's in rehabilitation now.",
      difficulty: "hard",
    },
  ],
  grammar: {
    topic: "Participle Clauses",
    formulas: [
      {
        title: "Present participle clauses",
        structure: "V-ing + clause",
        examples: [
          "Walking down the street, I saw him",
          "Being tired, I went to bed",
        ],
      },
    ],
    rules: ["Replace relative/adverb clauses", "Make sentences more concise"],
    exercises: [
      {
        question: "Combine: I was tired. I went to bed.",
        answer: "Being tired, I went to bed",
        explanation: "Participle clause",
      },
    ],
  },
  speaking: {
    topic: "Health & Medicine",
    phrases: [
      {
        phrase: "I'm not feeling well",
        translation: "Men o'zimni yaxshi his qilmayapman",
      },
      {
        phrase: "You should see a doctor",
        translation: "Shifokorga ko'rinishingiz kerak",
      },
    ],
    tasks: ["Health discussion"],
  },
  listening: {
    youtubeVideos: [
      {
        title: "Health & Wellness",
        url: "https://www.youtube.com/watch?v=health1",
        description: "Healthy living",
      },
    ],
    resources: ["Health podcasts"],
    exercises: ["Medical advice tinglang"],
  },
  homework: {
    writing: "Health essay",
    speaking: "Health presentation",
    vocabulary: "Medical terms",
  },
};

const day24: DayData = {
  id: 24,
  vocabulary: [
    {
      word: "curriculum",
      translation: "o'quv dasturi",
      example: "The curriculum needs updating.",
      difficulty: "medium",
    },
    {
      word: "pedagogy",
      translation: "pedagogika",
      example: "Modern pedagogy emphasizes engagement.",
      difficulty: "hard",
    },
    {
      word: "assessment",
      translation: "baholash",
      example: "Continuous assessment is better.",
      difficulty: "medium",
    },
    {
      word: "enroll",
      translation: "ro'yxatdan o'tmoq",
      example: "Students enroll in September.",
      difficulty: "easy",
    },
    {
      word: "graduate",
      translation: "bitiruv chi",
      example: "He graduated last year.",
      difficulty: "easy",
    },
    {
      word: "scholarship",
      translation: "stipendiya",
      example: "She won a scholarship.",
      difficulty: "medium",
    },
    {
      word: "literacy",
      translation: "savodxonlik",
      example: "Digital literacy is essential.",
      difficulty: "medium",
    },
    {
      word: "mentor",
      translation: "murabbiy",
      example: "Find a good mentor.",
      difficulty: "medium",
    },
    {
      word: "dropout",
      translation: "o'qishni tashlaganlar",
      example: "Reduce the dropout rate.",
      difficulty: "medium",
    },
    {
      word: "accreditation",
      translation: "akkreditatsiya",
      example: "The school has full accreditation.",
      difficulty: "hard",
    },
  ],
  grammar: {
    topic: "Nominal Clauses Advanced",
    formulas: [
      {
        title: "The fact that...",
        structure: "The fact that + clause",
        examples: [
          "The fact that he's late worries me",
          "Despite the fact that it's expensive",
        ],
      },
    ],
    rules: ["Express facts formally", "Common in academic writing"],
    exercises: [
      {
        question: "Combine using 'the fact that'",
        answer: "Varies",
        explanation: "Formal fact expression",
      },
    ],
  },
  speaking: {
    topic: "Education & Learning",
    phrases: [
      {
        phrase: "Education is the key to...",
        translation: "Ta'lim ... kaliti",
      },
      { phrase: "Lifelong learning", translation: "Umrbod o'rganish" },
    ],
    tasks: ["Education debate"],
  },
  listening: {
    youtubeVideos: [
      {
        title: "Future of Education",
        url: "https://www.youtube.com/watch?v=edu1",
        description: "Educational trends",
      },
    ],
    resources: ["Education podcasts"],
    exercises: ["Education talks tinglang"],
  },
  homework: {
    writing: "Education system essay",
    speaking: "Learning methods presentation",
    vocabulary: "Education terms",
  },
};

const day25: DayData = {
  id: 25,
  vocabulary: [
    {
      word: "precedent",
      translation: "pretsedent",
      example: "This sets a legal precedent.",
      difficulty: "hard",
    },
    {
      word: "jurisdiction",
      translation: "yurisdiktsiya",
      example: "That's outside our jurisdiction.",
      difficulty: "hard",
    },
    {
      word: "legislation",
      translation: "qonunchilik",
      example: "New legislation was passed.",
      difficulty: "hard",
    },
    {
      word: "litigation",
      translation: "sud jarayoni",
      example: "The case is in litigation.",
      difficulty: "hard",
    },
    {
      word: "testimony",
      translation: "guvohlik",
      example: "The testimony was compelling.",
      difficulty: "medium",
    },
    {
      word: "verdict",
      translation: "hukm",
      example: "The jury reached a verdict.",
      difficulty: "medium",
    },
    {
      word: "appeal",
      translation: "apellyatsiya",
      example: "They filed an appeal.",
      difficulty: "medium",
    },
    {
      word: "settlement",
      translation: "kelishuv",
      example: "They reached a settlement.",
      difficulty: "medium",
    },
    {
      word: "advocate",
      translation: "himoyachi",
      example: "She's a strong advocate for justice.",
      difficulty: "medium",
    },
    {
      word: "statute",
      translation: "qonun",
      example: "According to the statute...",
      difficulty: "hard",
    },
  ],
  grammar: {
    topic: "Legal English & Formal Structures",
    formulas: [
      {
        title: "Shall in legal context",
        structure: "Shall + base form",
        examples: ["The company shall provide...", "All parties shall agree"],
      },
    ],
    rules: [
      "Formal obligation in legal documents",
      "Different from normal 'shall'",
    ],
    exercises: [
      {
        question: "Write formal legal obligation",
        answer: "Varies",
        explanation: "Legal shall usage",
      },
    ],
  },
  speaking: {
    topic: "Law & Justice",
    phrases: [
      { phrase: "In accordance with...", translation: "... ga muvofiq" },
      { phrase: "As stipulated in...", translation: "... da belgilanganidek" },
    ],
    tasks: ["Legal argument presentation"],
  },
  listening: {
    youtubeVideos: [
      {
        title: "Legal System Explained",
        url: "https://www.youtube.com/watch?v=law1",
        description: "How law works",
      },
    ],
    resources: ["Legal podcasts"],
    exercises: ["Court proceedings tinglang"],
  },
  homework: {
    writing: "Legal opinion essay",
    speaking: "Court argument",
    vocabulary: "Legal terms",
  },
};

const day26: DayData = {
  id: 26,
  vocabulary: [
    {
      word: "algorithm",
      translation: "algoritm",
      example: "The algorithm is very efficient.",
      difficulty: "hard",
    },
    {
      word: "interface",
      translation: "interfeys",
      example: "The user interface is intuitive.",
      difficulty: "medium",
    },
    {
      word: "bandwidth",
      translation: "o'tkazish qobiliyati",
      example: "We need more bandwidth.",
      difficulty: "medium",
    },
    {
      word: "encryption",
      translation: "shifrlash",
      example: "Data encryption is essential.",
      difficulty: "hard",
    },
    {
      word: "cybersecurity",
      translation: "kiberxavfsizlik",
      example: "Cybersecurity is a top priority.",
      difficulty: "hard",
    },
    {
      word: "cloud",
      translation: "bulut (texnologiya)",
      example: "Store it in the cloud.",
      difficulty: "easy",
    },
    {
      word: "database",
      translation: "ma'lumotlar bazasi",
      example: "The database is huge.",
      difficulty: "medium",
    },
    {
      word: "server",
      translation: "server",
      example: "The server is down.",
      difficulty: "easy",
    },
    {
      word: "debug",
      translation: "xatolarni tuzatmoq",
      example: "I need to debug this code.",
      difficulty: "medium",
    },
    {
      word: "deploy",
      translation: "joylashtirmoq, ishga tushirmoq",
      example: "We'll deploy it next week.",
      difficulty: "medium",
    },
  ],
  grammar: {
    topic: "Technical English",
    formulas: [
      {
        title: "Describing processes",
        structure: "First... then... finally...",
        examples: ["First, initialize the system", "Then, run the tests"],
      },
    ],
    rules: ["Clear step-by-step instructions", "Imperative for commands"],
    exercises: [
      {
        question: "Describe a technical process",
        answer: "Varies",
        explanation: "Process description",
      },
    ],
  },
  speaking: {
    topic: "Technology & IT",
    phrases: [
      {
        phrase: "The system requires...",
        translation: "Tizim ... ni talab qiladi",
      },
      {
        phrase: "It's compatible with...",
        translation: "... bilan mos keladi",
      },
    ],
    tasks: ["Technical presentation"],
  },
  listening: {
    youtubeVideos: [
      {
        title: "Tech Explained",
        url: "https://www.youtube.com/watch?v=tech456",
        description: "Technology basics",
      },
    ],
    resources: ["Tech podcasts"],
    exercises: ["Tech tutorials tinglang"],
  },
  homework: {
    writing: "Technical documentation",
    speaking: "Software demo",
    vocabulary: "IT terms",
  },
};

const day27: DayData = {
  id: 27,
  vocabulary: [
    {
      word: "metaphor",
      translation: "metafora",
      example: "Life is a metaphor for journey.",
      difficulty: "hard",
    },
    {
      word: "narrative",
      translation: "hikoya, bayon",
      example: "The narrative was compelling.",
      difficulty: "hard",
    },
    {
      word: "prose",
      translation: "nasr",
      example: "He writes beautiful prose.",
      difficulty: "hard",
    },
    {
      word: "rhetoric",
      translation: "ritorika",
      example: "His rhetoric was powerful.",
      difficulty: "hard",
    },
    {
      word: "eloquent",
      translation: "notiq, ta'sirchan",
      example: "She's an eloquent speaker.",
      difficulty: "hard",
    },
    {
      word: "articulate",
      translation: "ravshan, tushunarli",
      example: "He's very articulate.",
      difficulty: "medium",
    },
    {
      word: "concise",
      translation: "qisqa va aniq",
      example: "Keep it concise.",
      difficulty: "medium",
    },
    {
      word: "verbose",
      translation: "so'zpar",
      example: "Don't be too verbose.",
      difficulty: "hard",
    },
    {
      word: "ambiguous",
      translation: "noaniq",
      example: "The statement is ambiguous.",
      difficulty: "hard",
    },
    {
      word: "coherent",
      translation: "izchil, mantiqiy",
      example: "The argument is coherent.",
      difficulty: "hard",
    },
  ],
  grammar: {
    topic: "Rhetorical Devices",
    formulas: [
      {
        title: "Parallelism",
        structure: "Repeated grammatical structure",
        examples: ["I came, I saw, I conquered", "Ask not what..."],
      },
    ],
    rules: ["Create rhythm and emphasis", "Used in speeches"],
    exercises: [
      {
        question: "Create parallel structure",
        answer: "Varies",
        explanation: "Rhetorical effect",
      },
    ],
  },
  speaking: {
    topic: "Effective Communication",
    phrases: [
      { phrase: "To put it simply...", translation: "Sodda qilib aytganda..." },
      {
        phrase: "In other words...",
        translation: "Boshqacha qilib aytganda...",
      },
    ],
    tasks: ["Persuasive speech"],
  },
  listening: {
    youtubeVideos: [
      {
        title: "Rhetoric & Persuasion",
        url: "https://www.youtube.com/watch?v=rhet1",
        description: "Art of persuasion",
      },
    ],
    resources: ["Famous speeches"],
    exercises: ["Speeches tahlil qiling"],
  },
  homework: {
    writing: "Persuasive essay",
    speaking: "Rhetorical speech",
    vocabulary: "Rhetorical terms",
  },
};

const day28: DayData = {
  id: 28,
  vocabulary: [
    {
      word: "diversify",
      translation: "turli xil qilmoq",
      example: "Diversify your portfolio.",
      difficulty: "medium",
    },
    {
      word: "optimize",
      translation: "optimallash tirmoq",
      example: "Optimize your workflow.",
      difficulty: "medium",
    },
    {
      word: "streamline",
      translation: "soddalash tirmoq",
      example: "Streamline the process.",
      difficulty: "hard",
    },
    {
      word: "leverage",
      translation: "foydalanmoq",
      example: "Leverage your strengths.",
      difficulty: "hard",
    },
    {
      word: "synergy",
      translation: "sinergeya",
      example: "Create team synergy.",
      difficulty: "hard",
    },
    {
      word: "benchmark",
      translation: "mezon, standart",
      example: "Set industry benchmarks.",
      difficulty: "medium",
    },
    {
      word: "disrupt",
      translation: "buzmoq, o'zgartirmoq",
      example: "Disrupt the market.",
      difficulty: "medium",
    },
    {
      word: "pivot",
      translation: "yo'nalish o'zgartirish",
      example: "We need to pivot our strategy.",
      difficulty: "hard",
    },
    {
      word: "scalability",
      translation: "o'sish imkoniyati",
      example: "Consider scalability.",
      difficulty: "hard",
    },
    {
      word: "viability",
      translation: "hayotchanlik",
      example: "Check the project's viability.",
      difficulty: "hard",
    },
  ],
  grammar: {
    topic: "Business Idioms & Collocations",
    formulas: [
      {
        title: "Common business collocations",
        structure: "Verb + noun partnerships",
        examples: ["reach an agreement", "make a profit", "take measures"],
      },
    ],
    rules: ["Natural word combinations", "Sound more professional"],
    exercises: [
      {
        question: "Match collocations",
        answer: "Varies",
        explanation: "Business collocations",
      },
    ],
  },
  speaking: {
    topic: "Business Strategy",
    phrases: [
      {
        phrase: "From a strategic standpoint...",
        translation: "Strategik nuqtai nazardan...",
      },
      {
        phrase: "Our competitive advantage is...",
        translation: "Bizning raqobat ustunligimiz...",
      },
    ],
    tasks: ["Strategy presentation"],
  },
  listening: {
    youtubeVideos: [
      {
        title: "Business Strategy",
        url: "https://www.youtube.com/watch?v=strat1",
        description: "Strategic thinking",
      },
    ],
    resources: ["Business podcasts"],
    exercises: ["Strategy talks tinglang"],
  },
  homework: {
    writing: "Business strategy plan",
    speaking: "Strategic proposal",
    vocabulary: "Business collocations",
  },
};

const day29: DayData = {
  id: 29,
  vocabulary: [
    {
      word: "heritage",
      translation: "meros",
      example: "Cultural heritage is important.",
      difficulty: "medium",
    },
    {
      word: "tradition",
      translation: "an'ana",
      example: "Respect local traditions.",
      difficulty: "easy",
    },
    {
      word: "custom",
      translation: "urf-odat",
      example: "It's a local custom.",
      difficulty: "easy",
    },
    {
      word: "ritual",
      translation: "marosim",
      example: "Traditional rituals are preserved.",
      difficulty: "medium",
    },
    {
      word: "folklore",
      translation: "folklor",
      example: "Study the folklore.",
      difficulty: "medium",
    },
    {
      word: "artifact",
      translation: "arxeologik topilma",
      example: "Ancient artifacts were found.",
      difficulty: "hard",
    },
    {
      word: "legacy",
      translation: "meros, holda",
      example: "His legacy lives on.",
      difficulty: "medium",
    },
    {
      word: "ancestry",
      translation: "ajdodlar",
      example: "Trace your ancestry.",
      difficulty: "hard",
    },
    {
      word: "indigenous",
      translation: "mahalliy, yerli",
      example: "Indigenous peoples have rights.",
      difficulty: "hard",
    },
    {
      word: "multicultural",
      translation: "ko'p millatli",
      example: "We live in a multicultural society.",
      difficulty: "medium",
    },
  ],
  grammar: {
    topic: "Cultural Expressions",
    formulas: [
      {
        title: "Used to vs Would",
        structure: "Used to/Would + base form",
        examples: ["We used to live there", "He would visit every week"],
      },
    ],
    rules: ["Past habits and states", "Would for repeated actions only"],
    exercises: [
      {
        question: "Choose used to or would",
        answer: "Varies",
        explanation: "Past habits",
      },
    ],
  },
  speaking: {
    topic: "Culture & Society",
    phrases: [
      {
        phrase: "Culturally speaking...",
        translation: "Madaniy nuqtai nazardan...",
      },
      {
        phrase: "It's part of our heritage",
        translation: "Bu bizning merosimiz ning bir qismi",
      },
    ],
    tasks: ["Cultural presentation"],
  },
  listening: {
    youtubeVideos: [
      {
        title: "World Cultures",
        url: "https://www.youtube.com/watch?v=cult1",
        description: "Cultural diversity",
      },
    ],
    resources: ["Cultural podcasts"],
    exercises: ["Culture talks tinglang"],
  },
  homework: {
    writing: "Cultural comparison essay",
    speaking: "Heritage presentation",
    vocabulary: "Cultural terms",
  },
};

const day30: DayData = {
  id: 30,
  vocabulary: [
    {
      word: "comprehensive",
      translation: "to'liq, keng qamrovli",
      example: "A comprehensive review.",
      difficulty: "hard",
    },
    {
      word: "proficient",
      translation: "mohir",
      example: "She's proficient in English.",
      difficulty: "medium",
    },
    {
      word: "fluent",
      translation: "ravon",
      example: "He speaks fluent Spanish.",
      difficulty: "easy",
    },
    {
      word: "bilingual",
      translation: "ikki tilli",
      example: "Being bilingual is advantageous.",
      difficulty: "medium",
    },
    {
      word: "polyglot",
      translation: "ko'p tillarni biluvchi",
      example: "He's a polyglot.",
      difficulty: "hard",
    },
    {
      word: "articulate",
      translation: "aniq gapiruvchi",
      example: "She's very articulate.",
      difficulty: "medium",
    },
    {
      word: "eloquence",
      translation: "notiqlik",
      example: "His eloquence impressed everyone.",
      difficulty: "hard",
    },
    {
      word: "mastery",
      translation: "mahorat",
      example: "Language mastery takes time.",
      difficulty: "medium",
    },
    {
      word: "competence",
      translation: "malaka",
      example: "Develop your competence.",
      difficulty: "medium",
    },
    {
      word: "achievement",
      translation: "yutuq",
      example: "Celebrate your achievements.",
      difficulty: "easy",
    },
  ],
  grammar: {
    topic: "Review & Consolidation",
    formulas: [
      {
        title: "All grammar points review",
        structure: "Complete revision",
        examples: ["Review all tenses, conditionals, etc."],
      },
    ],
    rules: ["Consolidate all learning", "Practice mixed grammar"],
    exercises: [
      {
        question: "Mixed grammar exercises",
        answer: "Varies",
        explanation: "Comprehensive review",
      },
    ],
  },
  speaking: {
    topic: "Reflection & Future Goals",
    phrases: [
      {
        phrase: "Looking back, I've learned...",
        translation: "Orqaga qarasam, o'rgandim...",
      },
      { phrase: "My goal is to...", translation: "Mening maqsadim..." },
    ],
    tasks: ["Final presentation: Your learning journey"],
  },
  listening: {
    youtubeVideos: [
      {
        title: "Language Learning Success",
        url: "https://www.youtube.com/watch?v=lang1",
        description: "Become fluent",
      },
    ],
    resources: ["Success stories"],
    exercises: ["Motivation talks tinglang"],
  },
  homework: {
    writing: "Learning reflection essay",
    speaking: "Personal achievement presentation",
    vocabulary: "Complete vocabulary review",
  },
};

export const month2: MonthData = {
  id: 2,
  title: "Intermediate Communication",
  description: "Professional muloqot va murakkab grammatika",
  color: "from-purple-500 to-pink-500",
  days: [
    day1,
    day2,
    day3,
    day4,
    day5,
    day6,
    day7,
    day8,
    day9,
    day10,
    day11,
    day12,
    day13,
    day14,
    day15,
    day16,
    day17,
    day18,
    day19,
    day20,
    day21,
    day22,
    day23,
    day24,
    day25,
    day26,
    day27,
    day28,
    day29,
    day30,
  ],
};
