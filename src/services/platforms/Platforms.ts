import { Platform } from "../../models/Platform";

export const Platforms: Platform[] = [
  { id: "12", name: "3DO", slug: "3do" },
  { id: "8", name: "Android", slug: "android" },
  { id: "5", name: "Apple Macintosh", slug: "mac" },
  { id: "9", name: "Atari", slug: "atari" },
  { id: "10", name: "Commodore / Amiga", slug: "commodore-amiga" },
  { id: "4", name: "iOS", slug: "ios" },
  { id: "6", name: "Linux", slug: "linux" },
  { id: "13", name: "Neo Geo", slug: "neo-geo" },
  { id: "7", name: "Nintendo", slug: "nintendo" },
  { id: "1", name: "PC", slug: "pc" },
  { id: "2", name: "PlayStation", slug: "playstation" },
  { id: "167", name: "Genesis", slug: "genesis" },
  { id: "11", name: "SEGA", slug: "sega" },
  { id: "14", name: "Web", slug: "web" },
  { id: "3", name: "Xbox", slug: "xbox" }
].slice();

export const getPlatformById = (id: string) => {
  return Platforms.find(it => it.id === id);
}
