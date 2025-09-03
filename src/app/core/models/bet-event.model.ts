export interface BetOdd {
  value: number;
  label?: string; 
  line?: string; 
}

export interface BetMarket {
  type: string;
  odds: BetOdd[];
}

export interface BetEvent {
  id: string;
  country: string;
  flag: string;
  league: string;
  sport: string;
  status: 'LIVE' | 'PRE-GAME';
  home: string;
  away: string;
  scoreHome: number;
  scoreAway: number;
  time: string;
  markets: BetMarket[];
}
