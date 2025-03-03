import { Image } from "@chakra-ui/react";

import bullsEye from "../../../../../assets/bulls-eye.webp";
import thumbsUp from "../../../../../assets/thumbs-up.webp";
import meh from "../../../../../assets/meh.webp";

interface Props {
  rating: ratings;
}

export type ratings = "exceptional" | "recommended" | "meh";

const Rating = ({ rating }: Props) => {
  return (
    <Image
      boxSize="2rem"
      src={
        rating === "exceptional"
          ? bullsEye
          : rating === "recommended"
          ? thumbsUp
          : meh
      }
    ></Image>
  );
};

export default Rating;
