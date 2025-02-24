import { Platform } from "./Platform";

export interface Title {
  id: string;
  name: string;
  background_image: string;
  reviews_text_count: number;
  rating: string;
  platforms: Platform[];
}