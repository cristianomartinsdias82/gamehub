import {
  FaApple,
  FaLinux,
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaAndroid,
  FaGamepad,
} from "react-icons/fa";
import { BsNintendoSwitch } from "react-icons/bs";
import {
  SiNintendo,
  SiNintendo3Ds,
  SiWiiu,
  SiWii,
  SiNintendogamecube,
  SiAtari,
  SiSega,
  SiDreamstime,
} from "react-icons/si";

export const PlatformsIconsMappings = [
  {
    slug: "macos",
    factory: (color: string, size: string) => (
      <FaApple size={size} color={color} key={"macos"} />
    ),
  },
  {
    slug: "macintosh",
    factory: (color: string, size: string) => (
      <FaApple size={size} color={color} key={"macintosh"} />
    ),
  },
  {
    slug: "apple",
    factory: (color: string, size: string) => (
      <FaApple size={size} color={color} key={"apple"} />
    ),
  },
  {
    slug: "appleii",
    factory: (color: string, size: string) => (
      <FaApple size={size} color={color} key={"appleii"} />
    ),
  },
  {
    slug: "atari",
    factory: (color: string, size: string) => (
      <SiAtari size={size} color={color} key={"atari"} />
    ),
  },
  {
    slug: "atari-7800",
    factory: (color: string, size: string) => (
      <SiAtari size={size} color={color} key={"atari-7800"} />
    ),
  },
  {
    slug: "atari-5200",
    factory: (color: string, size: string) => (
      <SiAtari size={size} color={color} key={"atari-5200"} />
    ),
  },
  {
    slug: "atari-2600",
    factory: (color: string, size: string) => (
      <SiAtari size={size} color={color} key={"atari-2600"} />
    ),
  },
  {
    slug: "atari-flashback",
    factory: (color: string, size: string) => (
      <SiAtari size={size} color={color} key={"atari-flashback"} />
    ),
  },
  {
    slug: "atari-8-bit",
    factory: (color: string, size: string) => (
      <SiAtari size={size} color={color} key={"atari-8-bit"} />
    ),
  },
  {
    slug: "atari-st",
    factory: (color: string, size: string) => (
      <SiAtari size={size} color={color} key={"atari-8-st"} />
    ),
  },
  {
    slug: "atari-lynx",
    factory: (color: string, size: string) => (
      <SiAtari size={size} color={color} key={"atari-8-lynx"} />
    ),
  },
  {
    slug: "atari-xegs",
    factory: (color: string, size: string) => (
      <SiAtari size={size} color={color} key={"atari-8-xegs"} />
    ),
  },
  {
    slug: "atari-xegs",
    factory: (color: string, size: string) => (
      <SiAtari size={size} color={color} key={"atari-8-xegs"} />
    ),
  },
  {
    slug: "genesis",
    factory: (color: string, size: string) => (
      <SiSega size={size} color={color} key={"genesis"} />
    ),
  },
  {
    slug: "sega-saturn",
    factory: (color: string, size: string) => (
      <SiSega size={size} color={color} key={"sega-saturn"} />
    ),
  },
  {
    slug: "sega-cd",
    factory: (color: string, size: string) => (
      <SiSega size={size} color={color} key={"sega-cd"} />
    ),
  },
  {
    slug: "sega-32x",
    factory: (color: string, size: string) => (
      <SiSega size={size} color={color} key={"sega-32x"} />
    ),
  },
  {
    slug: "sega-master-system",
    factory: (color: string, size: string) => (
      <SiSega size={size} color={color} key={"sega-master-system"} />
    ),
  },
  {
    slug: "dreamcast",
    factory: (color: string, size: string) => (
      <SiDreamstime size={size} color={color} key={"dreamcast"} />
    ),
  },
  {
    slug: "3do",
    factory: (color: string, size: string) => (
      <FaGamepad size={size} color={color} key={"3do"} />
    ),
  },
  {
    slug: "jaguar",
    factory: (color: string, size: string) => (
      <FaGamepad size={size} color={color} key={"jaguar"} />
    ),
  },
  {
    slug: "game-gear",
    factory: (color: string, size: string) => (
      <SiSega size={size} color={color} key={"game-gear"} />
    ),
  },
  {
    slug: "neogeo",
    factory: (color: string, size: string) => (
      <FaGamepad size={size} color={color} key={"neogeo"} />
    ),
  },
  {
    slug: "commodore-amiga",
    factory: (color: string, size: string) => (
      <FaGamepad size={size} color={color} key={"commodore-amiga"} />
    ),
  },
  {
    slug: "linux",
    factory: (color: string, size: string) => (
      <FaLinux size={size} color={color} key={"linux"} />
    ),
  },
  {
    slug: "pc",
    factory: (color: string, size: string) => (
      <FaWindows size={size} color={color} key={"pc"} />
    ),
  },
  {
    slug: "playstation",
    factory: (color: string, size: string) => (
      <FaPlaystation size={size} color={color} key={"playstation"} />
    ),
  },
  {
    slug: "playstation1",
    factory: (color: string, size: string) => (
      <FaPlaystation size={size} color={color} key={"playstation1"} />
    ),
  },
  {
    slug: "playstation2",
    factory: (color: string, size: string) => (
      <FaPlaystation size={size} color={color} key={"playstation2"} />
    ),
  },
  {
    slug: "playstation3",
    factory: (color: string, size: string) => (
      <FaPlaystation size={size} color={color} key={"playstation3"} />
    ),
  },
  {
    slug: "ps-vita",
    factory: (color: string, size: string) => (
      <FaPlaystation size={size} color={color} key={"ps-vita"} />
    ),
  },
  {
    slug: "psp",
    factory: (color: string, size: string) => (
      <FaPlaystation size={size} color={color} key={"psp"} />
    ),
  },
  {
    slug: "x-box-series-x",
    factory: (color: string, size: string) => (
      <FaXbox size={size} color={color} key={"x-box-series-x"} />
    ),
  },
  {
    slug: "x-box-one",
    factory: (color: string, size: string) => (
      <FaXbox size={size} color={color} key={"x-box-one"} />
    ),
  },
  {
    slug: "xbox360",
    factory: (color: string, size: string) => (
      <FaXbox size={size} color={color} key={"xbox360"} />
    ),
  },
  {
    slug: "xbox-old",
    factory: (color: string, size: string) => (
      <FaXbox size={size} color={color} key={"xbox-old"} />
    ),
  },
  {
    slug: "nintendo-switch",
    efactory: (color: string, size: string) => (
      <BsNintendoSwitch size={size} color={color} key={"nintendo-switch"} />
    ),
  },
  {
    slug: "android",
    factory: (color: string, size: string) => (
      <FaAndroid size={size} color={color} key={"android"} />
    ),
  },
  {
    slug: "nintendo-3ds",
    factory: (color: string, size: string) => (
      <SiNintendo3Ds size={size} color={color} key={"nintendo-3ds"} />
    ),
  },
  {
    slug: "nintendo-ds",
    factory: (color: string, size: string) => (
      <SiNintendo3Ds size={size} color={color} key={"nintendo-ds"} />
    ),
  },
  {
    slug: "nintendo-dsi",
    factory: (color: string, size: string) => (
      <SiNintendo3Ds size={size} color={color} key={"nintendo-dsi"} />
    ),
  },
  {
    slug: "game-boy",
    factory: (color: string, size: string) => (
      <SiNintendo size={size} color={color} key={"game-boy"} />
    ),
  },
  {
    slug: "game-boy-advance",
    factory: (color: string, size: string) => (
      <SiNintendo size={size} color={color} key={"game-boy-advance"} />
    ),
  },
  {
    slug: "game-boy-color",
    factory: (color: string, size: string) => (
      <SiNintendo size={size} color={color} key={"game-boy-color"} />
    ),
  },
  {
    slug: "gamecube",
    factory: (color: string, size: string) => (
      <SiNintendogamecube size={size} color={color} key={"gamecube"} />
    ),
  },
  {
    slug: "nes",
    factory: (color: string, size: string) => (
      <FaGamepad size={size} color={color} key={"nes"} />
    ),
  },
  {
    slug: "snes",
    factory: (color: string, size: string) => (
      <FaGamepad size={size} color={color} key={"snes"} />
    ),
  },
  {
    slug: "wii",
    factory: (color: string, size: string) => (
      <SiWii size={size} color={color} key={"wii"} />
    ),
  },
  {
    slug: "wii-u",
    factory: (color: string, size: string) => (
      <SiWiiu size={size} color={color} key={"wii-u"} />
    ),
  },
];
