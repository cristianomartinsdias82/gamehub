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
      <Box width="5dvw">
        <Logo />
      </Box>
      <Box width="85dvw" placeSelf="center">
        <SearchBar onSearch={searchContent} />
      </Box>
      <Box>
        <ColorMode
        // initAsChecked={false}
        // onChecked={() => console.log("checked")}
        // onUnchecked={() => console.log("unchecked")}
        />
      </Box>
    </Box>
  );
};

export default Header;
