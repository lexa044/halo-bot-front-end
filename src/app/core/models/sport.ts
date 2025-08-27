import { League } from "./league";

export interface Sport {
  name: string;
  icon: string;  
  leagues: League[];
}