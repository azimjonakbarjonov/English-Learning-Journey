import type { PlatformData } from "../types/types";
import { englishData } from "./englishData";
import { germanData } from "./germanData";
import { frenchData } from "./frenchData";
import { spanishData } from "./spanishData";
import { turkishData } from "./turkishData";
import { koreanData } from "./koreanData";
import { russianData } from "./russianData";
import { arabicData } from "./arabicData";

export const platformData: PlatformData = {
  languages: [
    englishData,
    germanData,
    frenchData,
    spanishData,
    turkishData,
    russianData,
    koreanData,
    arabicData,
  ],
};

// Helper function to get language by ID
export const getLanguageById = (languageId: string) => {
  return platformData.languages.find((lang) => lang.id === languageId);
};
