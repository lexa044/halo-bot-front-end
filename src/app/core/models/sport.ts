import { Country } from "./country";

export interface Sport {
  id: string;
  name: string;
  icon?: string;      
  countries?: Country[];
}