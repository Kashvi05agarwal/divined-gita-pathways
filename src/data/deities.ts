
export type SpiritualPath = "Bhakti" | "Karma" | "Jnana" | "Dhyana";

export interface DeityInfo {
  id: string;
  name: string;
  title: string;
  description: string;
  imagePath: string;
  color: string;
}

export interface Shloka {
  text: string;
  translation: string;
  chapter: number;
  verse: number;
}

export interface DivineResponse {
  message: string;
  shloka: Shloka;
  application: string;
  story?: string;
  path?: {
    type: SpiritualPath;
    guidance: string;
  };
}

export const deities: DeityInfo[] = [
  {
    id: "krishna",
    name: "Krishna",
    title: "The Supreme Personality of Godhead",
    description: "Lord Krishna, the eighth avatar of Vishnu, is the divine charioteer who delivered the wisdom of the Bhagavad Gita.",
    imagePath: "/krishna.png",
    color: "divine-purple",
  },
  {
    id: "hanuman",
    name: "Hanuman",
    title: "The Embodiment of Devotion and Strength",
    description: "Lord Hanuman represents unwavering devotion, incredible strength, and selfless service.",
    imagePath: "/hanuman.png",
    color: "divine-orange",
  },
  {
    id: "lakshmi",
    name: "Lakshmi",
    title: "Goddess of Wealth and Prosperity",
    description: "Goddess Lakshmi bestows wealth, prosperity, and abundance to her devotees.",
    imagePath: "/lakshmi.png",
    color: "divine-gold",
  },
  {
    id: "ganesh",
    name: "Ganesh",
    title: "Remover of Obstacles",
    description: "Lord Ganesh, with his elephant head, is worshipped before beginning any new endeavor.",
    imagePath: "/ganesh.png",
    color: "divine-crimson",
  }
];

// Mock data for now - in a real app, these would be much more extensive and categorized
export const shlokas: Record<string, Shloka[]> = {
  "guidance": [
    {
      text: "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन।",
      translation: "You have the right to work, but never to the fruit of work.",
      chapter: 2,
      verse: 47
    },
    {
      text: "योगस्थः कुरु कर्माणि सङ्गं त्यक्त्वा धनञ्जय।",
      translation: "Perform action, O Dhananjaya, abandoning attachment, being steadfast in yoga.",
      chapter: 2,
      verse: 48
    }
  ],
  "struggle": [
    {
      text: "दुःखेष्वनुद्विग्नमनाः सुखेषु विगतस्पृहः।",
      translation: "One who is not disturbed in mind even amidst the threefold miseries or elated when there is happiness.",
      chapter: 2,
      verse: 56
    },
    {
      text: "यः सर्वत्रानभिस्नेहस्तत्तत्प्राप्य शुभाशुभम्।",
      translation: "One who is without attachment to good or evil results, who neither welcomes nor hates.",
      chapter: 2,
      verse: 57
    }
  ],
  "devotion": [
    {
      text: "मन्मना भव मद्भक्तो मद्याजी मां नमस्कुरु।",
      translation: "Always think of Me, become My devotee, worship Me and offer your homage unto Me.",
      chapter: 9,
      verse: 34
    },
    {
      text: "सर्वधर्मान्परित्यज्य मामेकं शरणं व्रज।",
      translation: "Abandon all varieties of religion and just surrender unto Me.",
      chapter: 18,
      verse: 66
    }
  ]
};

export const divineStories: Record<string, string[]> = {
  "krishna": [
    "When I faced Bhishma in battle, even though he was a formidable warrior with celestial weapons, I had to honor My promise not to use weapons. Yet I picked up the chariot wheel to protect My devotee Arjuna, breaking My own vow. Sometimes, protecting dharma means setting aside personal promises.",
    "When Duryodhana refused peace even after My personal effort as an ambassador, I realized—not all hearts are ready. Sometimes we must accept destiny and still act with dharma.",
    "Even as a child in Vrindavan, I had to face demons sent by Kamsa. Fear exists even in divine play, but faith transforms that fear into courage. Your struggles similarly can become your strength."
  ],
  "hanuman": [
    "When I forgot my powers before leaping to Lanka, Jambavan had to remind me. Even the mightiest sometimes forget their strength. But faith reignites it.",
    "When I was captured by Indrajit's Brahmastra, I accepted the bonds to meet Ravana face to face. Sometimes, apparent defeat is the path to greater victory.",
    "When my tail was set on fire in Lanka, I used that flame to burn the enemy's fortress. Your challenges are not punishments but opportunities for transformation."
  ],
  "lakshmi": [
    "During the churning of the cosmic ocean, I emerged from chaos into divine light. From the turbulence of your life, too, can come extraordinary blessings.",
    "I am present not just in gold and riches, but in the prosperity of wisdom and contentment. True abundance begins in a grateful heart.",
    "When I visit homes during Diwali, I look not for elaborate decorations but for the light of pure hearts. Your sincere devotion attracts more blessing than external displays."
  ],
  "ganesh": [
    "When my head was severed by Lord Shiva, I received an elephant head—becoming unique in all creation. What appears to be your greatest loss can become your most distinctive blessing.",
    "I wrote the Mahabharata as Sage Vyasa dictated, breaking my tusk to continue when my pen broke. Sometimes, sacrifice is necessary for creating something eternal.",
    "I stand guard at my mother's door, honoring her wishes above all. Respecting boundaries and honoring commitments—even difficult ones—is the foundation of spiritual strength."
  ]
};
