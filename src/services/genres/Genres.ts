import { Genre } from "../../models/Genre";
import { getOptimizedImageUrl } from "../getOptimizedImageUrl";
import noImage from '../../assets/no-image-placeholder.webp';

export const Genres: Genre[] = [
  {
    id: "0",
    name: "All",
    slug: "all",
    games_count: 0,
    image_background: noImage,
  },
  {
    id: "4",
    name: "Action",
    slug: "action",
    games_count: 185533,
    image_background: getOptimizedImageUrl(
      "https://media.rawg.io/media/games/7fa/7fa0b586293c5861ee32490e953a4996.jpg"
    ),
  },
  {
    id: "3",
    name: "Adventure",
    slug: "adventure",
    games_count: 145374,
    image_background: getOptimizedImageUrl(
      "https://media.rawg.io/media/games/d5a/d5a24f9f71315427fa6e966fdd98dfa6.jpg"
    ),
  },
  {
    id: "11",
    name: "Arcade",
    slug: "arcade",
    games_count: 22652,
    image_background: getOptimizedImageUrl(
      "https://media.rawg.io/media/games/363/36306deef81e7955a5d0f5c3b43fccee.jpg"
    ),
  },
  {
    id: "28",
    name: "Board Games",
    slug: "board-games",
    games_count: 8383,
    image_background: getOptimizedImageUrl(
      "https://media.rawg.io/media/screenshots/df4/df47a9df698c2c5b40de17e80f2f5ae0.jpeg"
    ),
  },
  {
    id: "17",
    name: "Card",
    slug: "card",
    games_count: 4536,
    image_background: getOptimizedImageUrl(
      "https://media.rawg.io/media/games/742/7424c1f7d0a8da9ae29cd866f985698b.jpg"
    ),
  },
  {
    id: "40",
    name: "Casual",
    slug: "casual",
    games_count: 59961,
    image_background: getOptimizedImageUrl(
      "https://media.rawg.io/media/games/e31/e315213a5cb21645df8db3e5191e530c.jpg"
    ),
  },
  {
    id: "34",
    name: "Educational",
    slug: "educational",
    games_count: 15687,
    image_background: getOptimizedImageUrl(
      "https://media.rawg.io/media/games/3af/3af386b6e26be6741b711ae6215ef42f.jpg"
    ),
  },
  {
    id: "19",
    name: "Family",
    slug: "family",
    games_count: 5406,
    image_background: getOptimizedImageUrl(
      "https://media.rawg.io/media/games/9a1/9a18c226cf379272c698f26d2b79b3da.jpg"
    ),
  },
  {
    id: "6",
    name: "Fighting",
    slug: "fighting",
    games_count: 11761,
    image_background: getOptimizedImageUrl(
      "https://media.rawg.io/media/games/35b/35b47c4d85cd6e08f3e2ca43ea5ce7bb.jpg"
    ),
  },
  {
    id: "51",
    name: "Indie",
    slug: "indie",
    games_count: 75015,
    image_background: getOptimizedImageUrl(
      "https://media.rawg.io/media/games/b4e/b4e4c73d5aa4ec66bbf75375c4847a2b.jpg"
    ),
  },
  {
    id: "59",
    name: "Massively Multiplayer",
    slug: "massively-multiplayer",
    games_count: 3962,
    image_background: getOptimizedImageUrl(
      "https://media.rawg.io/media/games/651/651ae84f2d5e36206aad90976a453329.jpg"
    ),
  },
  {
    id: "83",
    name: "Platformer",
    slug: "platformer",
    games_count: 100861,
    image_background: getOptimizedImageUrl(
      "https://media.rawg.io/media/games/f90/f90ee1a4239247a822771c40488e68c5.jpg"
    ),
  },
  {
    id: "7",
    name: "Puzzle",
    slug: "puzzle",
    games_count: 97329,
    image_background: getOptimizedImageUrl(
      "https://media.rawg.io/media/screenshots/6fe/6fe228662a253cd929cc78a103541ee0.jpg"
    ),
  },
  {
    id: "1",
    name: "Racing",
    slug: "racing",
    games_count: 25263,
    image_background: getOptimizedImageUrl(
      "https://media.rawg.io/media/games/0c1/0c1c9965ba59166ab986a663ab2252dc.jpg"
    ),
  },
  {
    id: "5",
    name: "RPG",
    slug: "role-playing-games-rpg",
    games_count: 58823,
    image_background: getOptimizedImageUrl(
      "https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg"
    ),
  },
  {
    id: "2",
    name: "Shooter",
    slug: "shooter",
    games_count: 59549,
    image_background: getOptimizedImageUrl(
      "https://media.rawg.io/media/games/46d/46d98e6910fbc0706e2948a7cc9b10c5.jpg"
    ),
  },
  {
    id: "14",
    name: "Simulation",
    slug: "simulation",
    games_count: 72827,
    image_background: getOptimizedImageUrl(
      "https://media.rawg.io/media/games/78d/78dfae12fb8c5b16cd78648553071e0a.jpg"
    ),
  },
  {
    id: "15",
    name: "Sports",
    slug: "sports",
    games_count: 22007,
    image_background: getOptimizedImageUrl(
      "https://media.rawg.io/media/screenshots/f5a/f5abab52c4d606551cd5ec3ab709e501.jpg"
    ),
  },
  {
    id: "10",
    name: "Strategy",
    slug: "strategy",
    games_count: 59021,
    image_background: getOptimizedImageUrl(
      "https://media.rawg.io/media/games/55e/55ee6432ac2bf224610fa17e4c652107.jpg"
    ),
  },
].slice();

export const getGenreById = (id: string) => {
  return Genres.find((it) => it.id === id);
};
