export interface BetDialogData {
  matchTime: string;
  homeScore: number; 
  awayScore: number; 
  sport: string; 
  country: string; 
  league: string; 
  homeTeam: string; 
  awayTeam: string;

  betType: string; 
  betLine: string; 
  betOddsLabel: string;
  betSelection: string; 

  expiryOptions: string[];
  selectedExpiry?: string; 

  riskStake?: number; 
  odds?: number; 

  maxStake: number; 
  maxOdds: number; 
  potentialPayout: number;
  avgPrice: number;

  oddsTable: {
    bm: string; 
    max: number; 
    odds: number; 
  }[];
}
