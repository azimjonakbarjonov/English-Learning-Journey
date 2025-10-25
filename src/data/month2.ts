import type { MonthData } from "../types/types";

export const month2: MonthData = {
  id: 2,
  title: "Intermediate Communication",
  description: "Suhbat va professional muloqot",
  color: "from-purple-500 to-pink-500",
  days: [
    {
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
            explanation:
              "Tugallangan harakat, natijasi muhim - Present Perfect",
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
            description:
              "Master the Present Perfect tense with real-life examples",
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
    },
  ],
};
