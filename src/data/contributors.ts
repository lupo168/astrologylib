// Contributors hall of seals. Filled as volunteers join and reviews pass.
// tier: copper (digital seal) / stone (carved stone seal) / jade (jade seal)

export interface Contributor {
  id: string;
  name: string;       // display name
  sealChar: string;   // the character in their personal seal
  tier: 'copper' | 'stone' | 'jade';
  reviews: number;    // accepted reviews
  joined: string;     // first accepted review (YYYY-MM-DD)
  note?: string;      // one line about their work
}

export const CONTRIBUTORS: Contributor[] = [];
