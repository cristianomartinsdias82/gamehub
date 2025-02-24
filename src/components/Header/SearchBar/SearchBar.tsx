import { HStack, Input } from "@chakra-ui/react";
import { LuSearch } from "react-icons/lu";
import { InputGroup } from "../../ui/input-group";
import "./SearchBar.css";
import { useEffect, useState } from "react";

interface Props {
  minChars?: number;
  onSearch?: (searchTerm: string) => void;
  waitingTimeInSeconds?: number;
}

const SearchBar = ({
  onSearch,
  minChars = 3,
  waitingTimeInSeconds = 1,
}: Props) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout>();

  const onChange = (e: any) => {
    const value = e.target.value;
    const valueLength = value.trim().length;

    setSearchTerm(value);

    if (valueLength > 0 && valueLength < minChars) {
      return;
    }

    const id = setTimeout(() => {
      if (onSearch) onSearch(value.trim());
    }, waitingTimeInSeconds * 1000);

    setTimeoutId(id);
  };

  useEffect(() => {
    return () => clearTimeout(timeoutId);
  }, [timeoutId, searchTerm]);

  return (
    <>
      <HStack rounded="full" width="full" px="0.4rem">
        <InputGroup flex="1" startElement={<LuSearch />}>
          <Input
            value={searchTerm}
            onChange={onChange}
            placeholder="Search games..."
          />
        </InputGroup>
      </HStack>
    </>
  );
};

export default SearchBar;
