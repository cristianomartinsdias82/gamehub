import { Input } from "@chakra-ui/react";
import { LuSearch } from "react-icons/lu";
import { InputGroup } from "../../ui/input-group";
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
      <InputGroup flex="1" startElement={<LuSearch />}>
        <Input
          focusRing="mixed"
          borderRadius={20}
          variant="filled"
          value={searchTerm}
          onChange={onChange}
          placeholder="Search games..."
        />
      </InputGroup>
    </>
  );
};

export default SearchBar;
