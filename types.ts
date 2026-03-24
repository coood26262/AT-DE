export interface GameOffer {
  id: string;
  name: string;
  reward: string;
  image?: string;
  category?: string;
  rating?: number;
  link?: string;
}

export interface AiGameSuggestion {
  name: string;
  description: string;
  estimatedReward: string;
  category: string;
}