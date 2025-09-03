import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Sport } from '../../models/sport';
import { BetDialogData } from '../../models/bet-modal.model';
import { BetEvent } from '../../models/bet-event.model';

@Injectable({
  providedIn: 'root',
})
export class BettingDataService {
  getSports(): Observable<Sport[]> {
    const sports: Sport[] = [
      {
        id: 'soccer',
        name: 'Soccer',
        icon: 'soccer-ball',
        countries: [
          { id: 'romania', name: 'Romania', flag: '🇷🇴' },
          { id: 'russia', name: 'Russia', flag: '🇷🇺' },
          { id: 'scotland', name: 'Scotland', flag: '🏴' },
          { id: 'serbia', name: 'Serbia', flag: '🇷🇸' },
          { id: 'slovenia', name: 'Slovenia', flag: '🇸🇮' },
          { id: 'south-korea', name: 'South Korea', flag: '🇰🇷' },
          { id: 'spain', name: 'Spain', flag: '🇪🇸' },
          { id: 'sweden', name: 'Sweden', flag: '🇸🇪' },
          { id: 'turkey', name: 'Turkey', flag: '🇹🇷' },
          { id: 'uefa', name: 'UEFA' },
          {
            id: 'usa-soccer',
            name: 'United States',
            flag: '🇺🇸',
            leagues: [
              { id: 'mls', name: 'Major League Soccer' },
              { id: 'nslw', name: 'National Soccer League W' },
              { id: 'usl', name: 'USL League' },
            ],
          },
          { id: 'uruguay', name: 'Uruguay', flag: '🇺🇾' },
          { id: 'venezuela', name: 'Venezuela', flag: '🇻🇪' },
          { id: 'wales', name: 'Wales', flag: '🏴' },
        ],
      },
      {
        id: 'american-football',
        name: 'American Football',
        icon: 'football',
        countries: [
          {
            id: 'canada',
            name: 'Canada',
            flag: '🇨🇦',
            leagues: [{ id: 'cfl', name: 'CFL Matches' }],
          },
          {
            id: 'usa-football',
            name: 'United States',
            flag: '🇺🇸',
            leagues: [
              { id: 'nfl', name: 'NFL' },
              { id: 'ncaa', name: 'NCAA' },
            ],
          },
        ],
      },
    ];

    return of(sports);
  }

  getBetDialogData(): Observable<BetDialogData> {
    const betData: BetDialogData = {
      matchTime: "2H 7'",
      homeScore: 1,
      awayScore: 0,
      sport: 'Soccer',
      country: 'Belgium',
      league: 'First Division A',
      homeTeam: 'KVC Westerlo',
      awayTeam: 'Royal Antwerp',

      betType: 'Goals',
      betLine: 'FT Money line',
      betOddsLabel: '@ 1-0',
      betSelection: 'KVC Westerlo',

      expiryOptions: [
        'Instant',
        '10 secs',
        '15 secs',
        '30 secs',
        '1 min',
        '2 mins',
        '5 mins',
        '10 mins',
        '15 mins',
        '30 mins',
        'One hour',
        'Kick-off',
      ],
      selectedExpiry: 'Instant',

      riskStake: 0,
      odds: 1.387,

      maxStake: 0.0,
      maxOdds: 1.387,
      potentialPayout: 0.0,
      avgPrice: 1.387,

      oddsTable: [
        { bm: 'PIN', max: 4615.0, odds: 1.352 },
        { bm: 'SHRP', max: 3321.51, odds: 1.353 },
        { bm: 'BF', max: 86.56, odds: 1.371 },
        { bm: '', max: 28.67, odds: 1.353 },
        { bm: 'BDAQ', max: 234.6, odds: 1.387 },
        { bm: 'MB', max: 4.05, odds: 1.342 },
      ],
    };

    return of(betData);
  }

  getEvents(): Observable<BetEvent[]> {
    const events: BetEvent[] = [
      {
        id: '1891987',
        country: 'Belgium',
        flag: 'https://cdn.rabbitfoot.app/flags/be.svg',
        league: 'First Division A',
        sport: 'Soccer',
        status: 'LIVE',
        home: 'KVC Westerlo',
        away: 'Royal Antwerp',
        scoreHome: 0,
        scoreAway: 0,
        time: "1H 26'",
        markets: [
          {
            type: '1X2',
            odds: [
              { value: 2.329, label: 'H' },
              { value: 3.541, label: 'A' },
              { value: 3.15, label: 'D' },
            ],
          },
          {
            type: 'HDP',
            odds: [{ value: -104.0, line: '0/0.5' }, { value: -107.0 }],
          },
          {
            type: 'OU',
            odds: [{ value: 106.5, line: '2/2.5' }, { value: -124.0 }],
          },
          {
            type: '1H 1X2',
            odds: [
              { value: 3.73, label: 'H' },
              { value: 5.007, label: 'A' },
              { value: 1.752, label: 'D' },
            ],
          },
        ],
      },
    ];

    return of(events);
  }
}
