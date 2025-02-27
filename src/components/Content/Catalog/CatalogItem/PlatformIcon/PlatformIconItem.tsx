import { IoGameControllerSharp } from "react-icons/io5";
import { PlatformsIconsMappings } from "./PlatformsIconsMappings";

interface Props {
  slug: string;
  color?: string;
  size?: string;
}

const PlatformIcon = ({ slug, color = "gray", size = "1.2rem" }: Props) => {
  const getPlatformElement = (slug: string) => {
    const platformElem = PlatformsIconsMappings.find((it) => it.slug === slug);

    if (platformElem?.factory) return platformElem.factory(color, size);

    //Fallback
    return <IoGameControllerSharp size={size} color={color} key={"unknown"} />;
  };

  return getPlatformElement(slug);
};

export default PlatformIcon;
