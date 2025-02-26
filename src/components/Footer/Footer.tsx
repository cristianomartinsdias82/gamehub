import { Link, Text } from "@chakra-ui/react";
import { get4DigitCurrentYear } from "../../services/clockService";

const Footer = () => {
  return <Text>Game Hub&reg;&nbsp;{get4DigitCurrentYear()}</Text>;
};

export default Footer;
