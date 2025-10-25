import type { MonthData, DayData } from "../types/types";
import { extraMonth1Days } from "./month1_extra";
import { moreMonth1Days } from "./month1_more";

const day1: DayData = {
  id: 1,
  vocabulary: [
    {
      word: "accomplish",
      translation: "amalga oshirmoq, muvaffaqiyatga erishmoq",
      example: "I want to accomplish my goals this year.",
      difficulty: "medium",
    },
    {
      word: "achieve",
      translation: "erishmoq, maqsadga yetmoq",
      example: "She achieved great success in her career.",
      difficulty: "easy",
    },
    {
      word: "improve",
      translation: "yaxshilamoq, takomillashtirmoq",
      example: "I need to improve my English speaking skills.",
      difficulty: "easy",
    },
    {
      word: "progress",
      translation: "rivojlanish, oldinga borish",
      example: "You are making good progress in your studies.",
      difficulty: "medium",
    },
    {
      word: "challenge",
      translation: "qiyinchilik, sinov",
      example: "Learning English is a big challenge for me.",
      difficulty: "medium",
    },
    {
      word: "opportunity",
      translation: "imkoniyat, fursat",
      example: "This job is a great opportunity for my career.",
      difficulty: "medium",
    },
    {
      word: "essential",
      translation: "muhim, zarur",
      example: "Water is essential for life.",
      difficulty: "hard",
    },
    {
      word: "confident",
      translation: "ishonchli, o'ziga ishongan",
      example: "I feel confident about my presentation.",
      difficulty: "medium",
    },
    {
      word: "practice",
      translation: "mashq qilmoq, amaliyot",
      example: "Practice makes perfect.",
      difficulty: "easy",
    },
    {
      word: "communicate",
      translation: "muloqot qilmoq, gapirish",
      example: "We need to communicate clearly with our team.",
      difficulty: "medium",
    },
  ],
  grammar: {
    topic: "Present Simple vs Present Continuous",
    formulas: [
      {
        title: "Present Simple",
        structure: "Subject + V1/V1(s) + Object",
        examples: [
          "I work every day",
          "She works in a bank",
          "They play tennis on weekends",
        ],
      },
      {
        title: "Present Simple Negative",
        structure: "Subject + do/does + not + V1 + Object",
        examples: [
          "I do not work on weekends",
          "She does not work in a bank",
          "They do not play tennis",
        ],
      },
      {
        title: "Present Simple Questions",
        structure: "Do/Does + Subject + V1 + Object?",
        examples: [
          "Do you work every day?",
          "Does she work in a bank?",
          "Do they play tennis?",
        ],
      },
      {
        title: "Present Continuous",
        structure: "Subject + am/is/are + V1(ing) + Object",
        examples: [
          "I am working now",
          "She is working from home",
          "They are playing tennis",
        ],
      },
      {
        title: "Present Continuous Negative",
        structure: "Subject + am/is/are + not + V1(ing) + Object",
        examples: [
          "I am not working now",
          "She is not working from home",
          "They are not playing tennis",
        ],
      },
      {
        title: "Present Continuous Questions",
        structure: "Am/Is/Are + Subject + V1(ing) + Object?",
        examples: [
          "Am I working too much?",
          "Is she working today?",
          "Are they playing tennis?",
        ],
      },
    ],
    rules: [
      "Present Simple: kundalik odatlar, faktlar uchun (I work every day)",
      "Present Continuous: hozir sodir bo'layotgan harakatlar (I am working now)",
      "Present Simple: umumiy haqiqatlar uchun (The sun rises in the east)",
      "Present Continuous: vaqtinchalik holatlar uchun (I am living in London for now)",
      "Present Simple: jadval, dars jadvali (The train leaves at 8:00)",
      "Present Simple: his-tuyg'ular, fikrlar (I love chocolate)",
      "Present Continuous: rejalashtrilgan kelajak (I am meeting him tomorrow)",
    ],
    exercises: [
      {
        question: "I ___ (work) as a developer.",
        answer: "work",
        explanation: "Kundalik ish haqida - Present Simple",
      },
      {
        question: "Right now, I ___ (learn) English.",
        answer: "am learning",
        explanation: "Hozir sodir bo'layotgan harakat - Present Continuous",
      },
      {
        question: "She usually ___ (speak) Russian at home.",
        answer: "speaks",
        explanation: "Odatiy harakat - Present Simple",
      },
      {
        question: "Look! It ___ (rain) outside.",
        answer: "is raining",
        explanation: "Hozir yomg'ir yog'yapti - Present Continuous",
      },
      {
        question: "The Earth ___ (rotate) around the Sun.",
        answer: "rotates",
        explanation: "Umumiy haqiqat - Present Simple",
      },
    ],
  },
  speaking: {
    topic: "Self Introduction & Daily Routine",
    phrases: [
      {
        phrase: "My name is..., and I work as a...",
        translation: "Mening ismim..., va men ... bo'lib ishlayman",
      },
      {
        phrase: "In my free time, I enjoy...",
        translation: "Bo'sh vaqtimda men ... yoqtiraman",
      },
      {
        phrase: "Every day, I wake up at...",
        translation: "Har kuni men soat ...da uyg'onaman",
      },
      {
        phrase: "I'm currently learning English because...",
        translation: "Men hozir ingliz tilini o'rganayapman chunki...",
      },
      {
        phrase: "My hobbies include...",
        translation: "Mening sevimli mashg'ulotlarim...",
      },
      {
        phrase: "I've been working here for...",
        translation: "Men bu yerda ... dan beri ishlayman",
      },
    ],
    tasks: [
      "O'zingiz haqida 2 daqiqalik monolog tayyorlang",
      "Kundalik rejangizni 5 ta gapda tasvirlab bering",
      "Ovozli yozib oling va tinglang",
      "Do'stingiz bilan dialogda o'zingizni tanishtiring",
      "Ish/o'qish joyingiz haqida gapirib bering",
    ],
  },
  listening: {
    youtubeVideos: [
      {
        title: "Present Simple vs Present Continuous",
        url: "https://www.youtube.com/watch?v=gZXtF5YuA6M",
        description:
          "Learn the difference between Present Simple and Present Continuous tenses",
      },
      {
        title: "How to Introduce Yourself in English",
        url: "https://www.youtube.com/watch?v=VyT-Gm_VC0k",
        description: "Professional self-introduction tips and examples",
      },
    ],
    resources: [
      "Podcast: '6 Minute English' - BBC Learning English",
      "Audio: 'English at Work' series",
      "Video: 'Real English' YouTube channel",
    ],
    exercises: [
      "5 daqiqalik video tomosha qiling va asosiy g'oyalarni yozib oling",
      "Video ni subtitrsiz qayta tomosha qiling",
      "Podcastni tinglang va yangi so'zlarni yozib oling",
      "Dialogni tinglang va bo'sh joylarga to'g'ri so'zlarni yozing",
    ],
  },
  homework: {
    writing:
      "O'zingizning bir xaftangizni tasvirlang (10 ta gap, Present Simple va Continuous ishlatib)",
    speaking: "Har kuni 15 daqiqa ovoz chiqarib o'qing",
    vocabulary: "Barcha 10 ta so'zni gaplar ichida 3 martadan yozing",
  },
};

// Day 2 (Work & Career) — existing content moved from learningData.ts
const day2: DayData = {
  id: 2,
  vocabulary: [
    {
      word: "experience",
      translation: "tajriba, kechinma",
      example: "I have 5 years of experience in teaching.",
      difficulty: "medium",
    },
    {
      word: "develop",
      translation: "rivojlantirmoq, yaratmoq",
      example: "We need to develop new skills.",
      difficulty: "medium",
    },
    {
      word: "schedule",
      translation: "jadval, rejalashtirmoq",
      example: "I have a busy schedule today.",
      difficulty: "easy",
    },
    {
      word: "deadline",
      translation: "muddat, so'nggi sana",
      example: "The deadline for this project is next week.",
      difficulty: "medium",
    },
    {
      word: "organize",
      translation: "tashkil qilmoq, tartibga solmoq",
      example: "Let's organize a meeting for tomorrow.",
      difficulty: "easy",
    },
    {
      word: "participate",
      translation: "qatnashmoq, ishtirok etmoq",
      example: "Everyone should participate in the discussion.",
      difficulty: "hard",
    },
    {
      word: "recommend",
      translation: "tavsiya qilmoq",
      example: "Can you recommend a good book?",
      difficulty: "medium",
    },
    {
      word: "suggest",
      translation: "taklif qilmoq",
      example: "What do you suggest we do?",
      difficulty: "easy",
    },
    {
      word: "consider",
      translation: "o'ylab ko'rmoq, hisobga olmoq",
      example: "We should consider all options.",
      difficulty: "medium",
    },
    {
      word: "discuss",
      translation: "muhokama qilmoq",
      example: "Let's discuss this issue tomorrow.",
      difficulty: "easy",
    },
  ],
  grammar: {
    topic: "Past Simple vs Past Continuous",
    formulas: [
      {
        title: "Past Simple",
        structure: "Subject + V2 + Object",
        examples: [
          "I worked yesterday",
          "She went to school",
          "They played tennis",
        ],
      },
      {
        title: "Past Simple Negative",
        structure: "Subject + did + not + V1 + Object",
        examples: [
          "I did not work yesterday",
          "She did not go to school",
          "They did not play tennis",
        ],
      },
      {
        title: "Past Simple Questions",
        structure: "Did + Subject + V1 + Object?",
        examples: [
          "Did you work yesterday?",
          "Did she go to school?",
          "Did they play tennis?",
        ],
      },
      {
        title: "Past Continuous",
        structure: "Subject + was/were + V1(ing) + Object",
        examples: [
          "I was working at 5 PM",
          "She was studying when I called",
          "They were playing tennis",
        ],
      },
      {
        title: "Past Continuous Negative",
        structure: "Subject + was/were + not + V1(ing) + Object",
        examples: [
          "I was not working at 5 PM",
          "She was not studying",
          "They were not playing tennis",
        ],
      },
      {
        title: "Past Continuous Questions",
        structure: "Was/Were + Subject + V1(ing) + Object?",
        examples: [
          "Was I working too much?",
          "Was she studying?",
          "Were they playing tennis?",
        ],
      },
    ],
    rules: [
      "Past Simple: o'tgan zamonda tugallangan harakatlar (I worked yesterday)",
      "Past Continuous: o'tgan zamonda davom etgan harakatlar (I was working at 5 PM)",
      "Past Simple + Past Continuous: bir harakat sodir bo'layotganda boshqasi bo'lgan (I was reading when you called)",
      "Past Simple: ketma-ket sodir bo'lgan harakatlar (I woke up, had breakfast and went to work)",
      "Past Continuous: o'tgan zamonda ma'lum vaqt davomida (I was working from 9 to 5)",
    ],
    exercises: [
      {
        question: "When I ___ (arrive), they ___ (have) dinner.",
        answer: "arrived, were having",
        explanation:
          "Birinchi harakat - Past Simple, ikkinchisi - Past Continuous",
      },
      {
        question: "Yesterday, I ___ (work) all day.",
        answer: "worked",
        explanation: "Tugallangan harakat - Past Simple",
      },
      {
        question: "What ___ you ___ (do) at 8 PM last night?",
        answer: "were, doing",
        explanation: "Aniq vaqtda davom etgan harakat - Past Continuous",
      },
    ],
  },
  speaking: {
    topic: "Work & Career",
    phrases: [
      {
        phrase: "I'm responsible for...",
        translation: "Men ... uchun mas'ulman",
      },
      {
        phrase: "My duties include...",
        translation: "Mening vazifalarimga ... kiradi",
      },
      { phrase: "I report to...", translation: "Men ... ga hisobot beraman" },
    ],
    tasks: [
      "Ish joyingiz haqida 3 daqiqalik taqdimot tayyorlang",
      "Karyerangiz haqida suhbat quring",
      "Intervyu mashqini bajaring",
    ],
  },
  listening: {
    youtubeVideos: [
      {
        title: "Past Simple vs Past Continuous",
        url: "https://www.youtube.com/watch?v=UeKZ6Qj0Pwo",
        description:
          "Learn the difference between Past Simple and Past Continuous tenses",
      },
      {
        title: "Job Interview Tips in English",
        url: "https://www.youtube.com/watch?v=9FuKb_XfHI8",
        description: "Essential tips for job interviews in English",
      },
    ],
    resources: [
      "Podcast: 'Business English Pod'",
      "Video: 'English for Work' series",
    ],
    exercises: [
      "Interview videosini ko'ring va muhim iboralarni yozing",
      "Business English dialoglarini tinglang",
    ],
  },
  homework: {
    writing:
      "Ish kuningizni tasvirlab bering (Past Simple va Past Continuous ishlatib)",
    speaking: "O'zingizni video yozib oling",
    vocabulary: "Yangi so'zlar bilan gaplar tuzing",
  },
};

// Day 3 — Future Tenses (from learningData.ts)
const day3: DayData = {
  id: 3,
  vocabulary: [
    {
      word: "schedule",
      translation: "jadval, rejalashtirmoq",
      example: "What's your schedule for tomorrow?",
      difficulty: "easy",
    },
    {
      word: "appointment",
      translation: "uchrashuv, tayinlangan vaqt",
      example: "I have a doctor's appointment next week.",
      difficulty: "medium",
    },
    {
      word: "arrange",
      translation: "tashkil qilmoq, kelishmoq",
      example: "Let's arrange a meeting for next Monday.",
      difficulty: "medium",
    },
    {
      word: "available",
      translation: "bo'sh, mavjud",
      example: "Are you available this weekend?",
      difficulty: "easy",
    },
    {
      word: "postpone",
      translation: "kechiktirmoq, qoldirmoq",
      example: "We need to postpone the meeting.",
      difficulty: "medium",
    },
    {
      word: "reschedule",
      translation: "qayta rejalashtirmoq",
      example: "Can we reschedule our appointment?",
      difficulty: "hard",
    },
    {
      word: "upcoming",
      translation: "yaqinlashayotgan, kelayotgan",
      example: "What are your plans for the upcoming weekend?",
      difficulty: "medium",
    },
    {
      word: "tentative",
      translation: "taxminiy, aniq bo'lmagan",
      example: "These are tentative plans, they might change.",
      difficulty: "hard",
    },
    {
      word: "confirm",
      translation: "tasdiqlamoq",
      example: "Please confirm your attendance.",
      difficulty: "easy",
    },
    {
      word: "cancel",
      translation: "bekor qilmoq",
      example: "I have to cancel our meeting.",
      difficulty: "easy",
    },
  ],
  grammar: {
    topic: "Future Simple & Future Continuous",
    formulas: [
      {
        title: "Future Simple (will)",
        structure: "Subject + will + V1 + Object",
        examples: [
          "I will attend the meeting",
          "She will help you tomorrow",
          "They will arrive next week",
        ],
      },
      {
        title: "Future Simple Negative",
        structure: "Subject + will not + V1 + Object",
        examples: [
          "I will not attend the meeting",
          "She will not help you tomorrow",
          "They will not arrive next week",
        ],
      },
      {
        title: "Future Simple Questions",
        structure: "Will + Subject + V1 + Object?",
        examples: [
          "Will you attend the meeting?",
          "Will she help you tomorrow?",
          "Will they arrive next week?",
        ],
      },
      {
        title: "Future Continuous",
        structure: "Subject + will be + V1(ing) + Object",
        examples: [
          "I will be working at 5 PM tomorrow",
          "She will be studying all day",
          "They will be traveling next week",
        ],
      },
      {
        title: "Future Continuous Negative",
        structure: "Subject + will not be + V1(ing) + Object",
        examples: [
          "I will not be working tomorrow",
          "She will not be studying",
          "They will not be traveling",
        ],
      },
      {
        title: "Future Continuous Questions",
        structure: "Will + Subject + be + V1(ing) + Object?",
        examples: [
          "Will you be working tomorrow?",
          "Will she be studying?",
          "Will they be traveling?",
        ],
      },
      {
        title: "Be going to",
        structure: "Subject + am/is/are + going to + V1 + Object",
        examples: [
          "I am going to visit my friend",
          "She is going to study abroad",
          "They are going to move house",
        ],
      },
    ],
    rules: [
      "Will: spontan qarorlar va va'dalar uchun (I will help you)",
      "Will: bashorat va taxminlar uchun (It will rain tomorrow)",
      "Be going to: oldindan rejalashtirilgan rejalar (I am going to buy a car)",
      "Be going to: aniq dalillar asosidagi bashoratlar (Look at those clouds, it's going to rain)",
      "Future Continuous: ma'lum vaqtda davom etadigan harakat (I will be working at 5)",
      "Future Continuous: rejalashtirilgan harakat (I will be traveling next week)",
      "Present Continuous: aniq rejalashtirilgan yaqin kelajak (I am meeting him tomorrow)",
    ],
    exercises: [
      {
        question: "This time next week, I ___ (travel) to London.",
        answer: "will be traveling",
        explanation: "Ma'lum vaqtda davom etadigan harakat - Future Continuous",
      },
      {
        question: "I ___ (help) you with your homework.",
        answer: "will help",
        explanation: "Spontan qaror - Future Simple",
      },
      {
        question: "Look at the sky! It ___ (rain).",
        answer: "is going to rain",
        explanation: "Aniq dalillar asosidagi bashorat - Be going to",
      },
      {
        question: "We ___ (have) a party next Saturday.",
        answer: "are going to have",
        explanation: "Oldindan rejalashtirilgan reja - Be going to",
      },
      {
        question: "What ___ you ___ (do) this weekend?",
        answer: "will, be doing",
        explanation: "Ma'lum vaqtda davom etadigan harakat - Future Continuous",
      },
    ],
  },
  speaking: {
    topic: "Making Plans & Arrangements",
    phrases: [
      {
        phrase: "Are you free this weekend?",
        translation: "Bu hafta oxirida bo'shmisiz?",
      },
      {
        phrase: "How about meeting at 2 PM?",
        translation: "Soat 2 da uchrashsak qanday?",
      },
      {
        phrase: "I'm afraid I can't make it.",
        translation: "Afsuski, men bora olmayman.",
      },
      {
        phrase: "Let's arrange another time.",
        translation: "Boshqa vaqtga kelishaylik.",
      },
      { phrase: "That works for me.", translation: "Menga to'g'ri keladi." },
      {
        phrase: "I'll check my schedule and let you know.",
        translation: "Jadvalimni tekshirib, sizga xabar beraman.",
      },
    ],
    tasks: [
      "Do'stingiz bilan hafta oxiri rejalarini muhokama qiling",
      "Uchrashuv vaqtini o'zgartirish uchun dialog tuzing",
      "Telefon orqali suhbat mashqini bajaring",
      "Rejalaringiz haqida 2 daqiqalik monolog tayyorlang",
    ],
  },
  listening: {
    youtubeVideos: [
      {
        title: "Future Tenses in English",
        url: "https://www.youtube.com/watch?v=LemLpI7qEXI",
        description: "Learn how to use different future tenses in English",
      },
      {
        title: "How to Make Plans in English",
        url: "https://www.youtube.com/watch?v=1tN_PYHeGpE",
        description: "Learn useful phrases for making arrangements",
      },
    ],
    resources: [
      "Podcast: 'English Made Simple - Future Tenses'",
      "Video: 'BBC Learning English - Making Arrangements'",
      "Audio: 'Real English Conversations - Planning'",
    ],
    exercises: [
      "Dialog tinglang va bo'sh joylarga to'g'ri future formani yozing",
      "Making plans dialoglarini tinglang va foydali iboralarni yozing",
      "Real conversation tinglang va future tenseni toping",
    ],
  },
  homework: {
    writing:
      "Kelayotgan hafta rejalaringiz haqida yozing (Future tenselarni ishlatib)",
    speaking: "Do'stingiz bilan telefonda gaplashing va ovoz yozib oling",
    vocabulary: "Yangi so'zlarni ishlatib 10 ta reja yozing",
  },
};

// Day 4 — Modal Verbs (from learningData.ts)
const day4: DayData = {
  id: 4,
  vocabulary: [
    {
      word: "permission",
      translation: "ruxsat, ijozat",
      example: "Do I have permission to leave early?",
      difficulty: "medium",
    },
    {
      word: "request",
      translation: "iltimos, so'rov",
      example: "I'd like to make a request.",
      difficulty: "easy",
    },
    {
      word: "allow",
      translation: "ruxsat bermoq",
      example: "Smoking is not allowed here.",
      difficulty: "easy",
    },
    {
      word: "polite",
      translation: "xushmuomala, odobli",
      example: "It's important to be polite when making requests.",
      difficulty: "easy",
    },
    {
      word: "formal",
      translation: "rasmiy",
      example: "Please use formal language in your email.",
      difficulty: "medium",
    },
    {
      word: "informal",
      translation: "norasmiy",
      example: "You can be more informal with friends.",
      difficulty: "medium",
    },
    {
      word: "approve",
      translation: "tasdiqlamoq, ma'qullamoq",
      example: "The manager needs to approve your request.",
      difficulty: "medium",
    },
    {
      word: "deny",
      translation: "rad etmoq",
      example: "I'm sorry, but I have to deny your request.",
      difficulty: "medium",
    },
    {
      word: "consider",
      translation: "ko'rib chiqmoq",
      example: "I'll consider your suggestion.",
      difficulty: "hard",
    },
    {
      word: "grant",
      translation: "bermoq (ruxsat/ijozat)",
      example: "Your request has been granted.",
      difficulty: "hard",
    },
  ],
  grammar: {
    topic: "Modal Verbs (Can, Could, May, Might)",
    formulas: [
      {
        title: "Can - Ability/Permission (Informal)",
        structure: "Subject + can + V1 + Object",
        examples: [
          "I can speak English",
          "You can use my phone",
          "Can I open the window?",
        ],
      },
      {
        title: "Could - Past Ability/Polite Request",
        structure: "Subject + could + V1 + Object",
        examples: [
          "I could swim when I was young",
          "Could you help me, please?",
          "Could I borrow your pen?",
        ],
      },
      {
        title: "May - Formal Permission/Possibility",
        structure: "Subject + may + V1 + Object",
        examples: [
          "May I come in?",
          "You may leave now",
          "It may rain tomorrow",
        ],
      },
      {
        title: "Might - Possibility/Very Polite Request",
        structure: "Subject + might + V1 + Object",
        examples: [
          "It might rain later",
          "She might be at home",
          "Might I suggest something?",
        ],
      },
      {
        title: "Modal Verbs Negative",
        structure: "Subject + modal + not + V1 + Object",
        examples: [
          "I cannot help you",
          "You may not enter",
          "She might not come",
        ],
      },
      {
        title: "Modal Verbs Questions",
        structure: "Modal + Subject + V1 + Object?",
        examples: [
          "Can you help me?",
          "Could I borrow this?",
          "May I ask a question?",
        ],
      },
    ],
    rules: [
      "Can: qobiliyat va norasmiy ruxsat so'rash (Can I go?)",
      "Could: o'tgan zamondagi qobiliyat va xushmuomala iltimos (Could you help me?)",
      "May: rasmiy ruxsat so'rash va ehtimollik (May I come in?)",
      "Might: kuchsiz ehtimollik va juda xushmuomala iltimos (It might rain)",
      "Modal fe'llardan keyin to be yoki have yozilmaydi",
      "Modal fe'llardan keyin fe'lning birinchi shakli (V1) ishlatiladi",
      "Cannot/can't, may not, might not - inkor shakllari",
    ],
    exercises: [
      {
        question: "___ you help me with this exercise?",
        answer: "Could",
        explanation: "Xushmuomala iltimos - Could",
      },
      {
        question: "___ I use your phone, please?",
        answer: "May",
        explanation: "Rasmiy ruxsat so'rash - May",
      },
      {
        question: "It ___ rain tomorrow, take an umbrella.",
        answer: "might",
        explanation: "Kuchsiz ehtimollik - Might",
      },
      {
        question: "I ___ speak three languages.",
        answer: "can",
        explanation: "Qobiliyat - Can",
      },
      {
        question: "Students ___ not leave the class without permission.",
        answer: "may",
        explanation: "Rasmiy qoida - May not",
      },
    ],
  },
  speaking: {
    topic: "Making Requests & Asking Permission",
    phrases: [
      {
        phrase: "Would you mind if I...",
        translation: "... qilsam qarshimasmisiz",
      },
      { phrase: "Is it okay if I...", translation: "... qilsam bo'ladimi" },
      {
        phrase: "Do you think I could...",
        translation: "... qilsam bo'ladimi (xushmuomala)",
      },
      {
        phrase: "I was wondering if I could...",
        translation: "... qilsam bo'ladimi (juda xushmuomala)",
      },
      {
        phrase: "Would it be possible to...",
        translation: "... qilish mumkinmi",
      },
      {
        phrase: "I'd appreciate it if you could...",
        translation: "... qilsangiz minnatdor bo'lardim",
      },
    ],
    tasks: [
      "Turli vaziyatlarda ruxsat so'rash dialoglarini tuzing",
      "Rasmiy va norasmiy iltimoslar mashqini bajaring",
      "Role-play: ofis/maktab muhitida ruxsat so'rash",
      "Rad etish va rozilik bildirish dialoglarini mashq qiling",
    ],
  },
  listening: {
    youtubeVideos: [
      {
        title: "Modal Verbs in English",
        url: "https://www.youtube.com/watch?v=BT3JbwlpQxU",
        description: "Learn how to use modal verbs for permission and requests",
      },
      {
        title: "How to Make Polite Requests",
        url: "https://www.youtube.com/watch?v=Td6WYj2WTF4",
        description: "Master the art of making polite requests in English",
      },
    ],
    resources: [
      "Podcast: 'BBC Learning English - Modal Verbs'",
      "Video: 'English with Lucy - Polite English'",
      "Audio: 'Real English - Making Requests'",
    ],
    exercises: [
      "Dialog tinglang va modal fe'llarni toping",
      "Rasmiy va norasmiy iltimoslar o'rtasidagi farqni aniqlang",
      "Real conversation tinglang va xushmuomala iboralarni yozing",
    ],
  },
  homework: {
    writing: "Turli vaziyatlarda ishlatiladigan 10 ta iltimos yozing",
    speaking: "3 ta dialog yozib oling (rasmiy, norasmiy, do'stona)",
    vocabulary: "Yangi so'zlarni ishlatib e-mail yozing",
  },
};

export const month1: MonthData = {
  id: 1,
  title: "Pre-Intermediate Foundation",
  description: "So'z boyligi va asosiy grammatika",
  color: "from-blue-500 to-cyan-500",
  days: [day1, day2, day3, day4, ...extraMonth1Days, ...moreMonth1Days],
};
