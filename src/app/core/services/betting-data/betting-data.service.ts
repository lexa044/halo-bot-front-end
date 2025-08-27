import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BettingDataService {
  getSports(): Observable<Sport[]> {
    const sports: Sport[] = [
      {
        name: 'Soccer',
        icon: 'fas fa-futbol',
        leagues: [
          { name: 'England Premier League', isHighlighted: true },
          { name: 'Germany Bundesliga', isHighlighted: true },
          { name: 'Spain La Liga', isHighlighted: false },
        ],
      },
      {
        name: 'Baseball',
        icon: 'fas fa-baseball-ball',
        leagues: [
          { name: 'Major League Baseball', isHighlighted: true },
          { name: 'Japanese League', isHighlighted: false },
        ],
      },
    ];

    return of(sports);
  }
}import { Sport } from '../../models/sport';

