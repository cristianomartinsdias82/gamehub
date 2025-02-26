import { Box } from "@chakra-ui/react";
import SearchBar from "./SearchBar/SearchBar";
import Logo from "./Logo/Logo";
import ColorMode from "./ColorMode/ColorMode";

interface Props {
  searchContent: (term?: string) => void;
}

const Header = ({ searchContent }: Props) => {
  return (
    <Box display="flex" placeItems="center">
      <Box width="4dvw">
        <Logo />
      </Box>
      <Box width="84dvw" px="0.2rem" placeSelf="center">
        <SearchBar onSearch={searchContent} />
      </Box>
      <Box>
        <ColorMode />
      </Box>
    </Box>
  );
};

export default Header;
