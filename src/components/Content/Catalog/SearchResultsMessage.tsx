import { Box, Text } from "@chakra-ui/react";
import { Title } from "../../../models/Title";
import { SearchParams } from "../../../common/SearchParams";
import { Result } from "../../../common/ResultT";

interface Props {
  searchParams: SearchParams;
  isLoading: boolean;
  result: Result<Title[]>;
}

const SearchResultsMessage = ({ result, isLoading, searchParams }: Props) => {
  if (isLoading) return <></>;

  return (
    <Box hideBelow="md" paddingLeft="1rem">
      <Text>
        {[
          "The search",
          searchParams.searchTerm
            ? `for term '${searchParams.searchTerm}'`
            : "",
          `resulted in ${result.itemCount} match(es).`,
        ].join(" ")}
      </Text>
    </Box>
  );
};

export default SearchResultsMessage;
