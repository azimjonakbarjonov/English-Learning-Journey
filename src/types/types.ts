export interface VocabularyItem {
  word: string;
  translation: string;
  example: string;
  difficulty: "easy" | "medium" | "hard";
}

export interface GrammarFormula {
  title: string;
  structure: string;
  examples?: string[];
}

export interface GrammarExercise {
  question: string;
  answer: string;
  explanation: string;
}

export interface GrammarSection {
  topic: string;
  formulas: GrammarFormula[];
  rules: string[];
  exercises: GrammarExercise[];
}

export interface SpeakingPhrase {
  phrase: string;
  translation: string;
}

export interface SpeakingSection {
  topic: string;
  phrases: SpeakingPhrase[];
  tasks: string[];
}

export interface YouTubeVideo {
  title: string;
  url: string;
  description?: string;
}

export interface ListeningSection {
  youtubeVideos: YouTubeVideo[];
  resources: string[];
  exercises: string[];
}

export interface HomeworkSection {
  writing: string;
  speaking: string;
  vocabulary: string;
}

export interface DayData {
  id: number;
  vocabulary: VocabularyItem[];
  grammar: GrammarSection;
  speaking: SpeakingSection;
  listening: ListeningSection;
  homework: HomeworkSection;
}

export interface MonthData {
  id: number;
  title: string;
  description: string;
  color: string;
  days: DayData[];
}

export interface LearningData {
  months: MonthData[];
}

export interface CompletedDays {
  [key: string]: boolean;
}
