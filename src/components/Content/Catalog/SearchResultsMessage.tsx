import { Box, Text } from "@chakra-ui/react";
import { Title } from "../../../models/Title";
import { Result } from "../../../common/ResultT";
import { TitleQuery } from "../../../hooks/useTitleSearch";

interface Props {
  query: TitleQuery;
  isLoading: boolean;
  result: Result<Title[]>;
}

const SearchResultsMessage = ({ result, isLoading, query }: Props) => {
  if (isLoading) return <></>;

  return (
    <Box hideBelow="md" paddingLeft="1rem">
      <Text>
        {[
          "The search",
          query.searchTerm ? `for term '${query.searchTerm}'` : "",
          `resulted in ${result.itemCount} match(es).`,
        ].join(" ")}
      </Text>
    </Box>
  );
};

export default SearchResultsMessage;
