import {
  FaApple,
  FaLinux,
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaAndroid,
  FaGamepad,
  FaGlobe,
} from "react-icons/fa";
import {
  SiNintendo,
  SiAtari,
  SiSega,
} from "react-icons/si";

export const PlatformsIconsMappings = [
  {
    slug: "3do",
    factory: (color: string, size: string) => (
      <FaGamepad size={size} color={color} key={"3do"} />
    )
  },
  {
    slug: "android",
    factory: (color: string, size: string) => (
      <FaAndroid size={size} color={color} key={"android"} />
    )
  },
  {
    slug: "mac",
    factory: (color: string, size: string) => (
      <FaApple size={size} color={color} key={"mac"} />
    )
  },
  {
    slug: "atari",
    factory: (color: string, size: string) => (
      <SiAtari size={size} color={color} key={"atari"} />
    )
  },
  {
    slug: "commodore-amiga",
    factory: (color: string, size: string) => (
      <FaGamepad size={size} color={color} key={"commodore-amiga"} />
    )
  },
  {
    slug: "ios",
    factory: (color: string, size: string) => (
      <FaApple size={size} color={color} key={"ios"} />
    )
  },
  {
    slug: "linux",
    factory: (color: string, size: string) => (
      <FaLinux size={size} color={color} key={"linux"} />
    )
  },
  {
    slug: "neo-geo",
    factory: (color: string, size: string) => (
      <FaGamepad size={size} color={color} key={"neo-geo"} />
    )
  },
  {
    slug: "nintendo",
    efactory: (color: string, size: string) => (
      <SiNintendo size={size} color={color} key={"nintendo"} />
    )
  },
  {
    slug: "pc",
    factory: (color: string, size: string) => (
      <FaWindows size={size} color={color} key={"pc"} />
    )
  },
  {
    slug: "playstation",
    factory: (color: string, size: string) => (
      <FaPlaystation size={size} color={color} key={"playstation"} />
    )
  },
  {
    slug: "genesis",
    factory: (color: string, size: string) => (
      <SiSega size={size} color={color} key={"genesis"} />
    )
  },
  {
    slug: "sega",
    factory: (color: string, size: string) => (
      <SiSega size={size} color={color} key={"sega"} />
    )
  },
  {
    slug: "web",
    factory: (color: string, size: string) => (
      <FaGlobe size={size} color={color} key={"web"} />
    )
  },
  {
    slug: "xbox",
    factory: (color: string, size: string) => (
      <FaXbox size={size} color={color} key={"xbox"} />
    )
  }
];
