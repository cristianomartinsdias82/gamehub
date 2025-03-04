import { Platform } from "./Platform";

export interface Title {
  id: string;
  name: string;
  background_image: string;
  metacritic: number
  rating: string;
  platforms: Platform[];
}