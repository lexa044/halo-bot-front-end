import { League } from "./league";

export interface Country {
  id: string;
  name: string;
  flag?: string;         
  leagues?: League[];
}