import { HStack } from "@chakra-ui/react";
import SearchBar from "./SearchBar/SearchBar";
import Logo from "./Logo/Logo";
import ColorMode from "./ColorMode/ColorMode";

interface Props {
  searchContent: (term?: string) => void;
}

const Header = ({ searchContent }: Props) => {
  return (
    <HStack padding="0 1rem 0 0.4rem">
      <Logo />
      <SearchBar onSearch={searchContent} />
      <ColorMode />
    </HStack>
  );
};

export default Header;
