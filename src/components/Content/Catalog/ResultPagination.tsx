import { Box, HStack } from "@chakra-ui/react";
import {
  PaginationItems,
  PaginationNextTrigger,
  PaginationPrevTrigger,
  PaginationRoot,
} from "../../ui/pagination";
import { Result } from "../../../common/ResultT";
import { Title } from "../../../models/Title";
import { TitleQuery } from "../../../hooks/useTitleSearch";

interface Props {
  query: TitleQuery;
  result: Result<Title[]>;
  isLoading: boolean;
  pageChange: (pageNumber: number) => void;
}

const ResultPagination = ({ result, isLoading, query, pageChange }: Props) => {
  if (isLoading || result.itemCount === 0) return <></>;

  return (
    <Box mt="1rem" hideBelow="md" justifyItems="center">
      <PaginationRoot
        count={result.itemCount}
        page={query.pageNumber}
        pageSize={query.pageSize}
        onPageChange={(e: any) => pageChange(e.page)}
      >
        <HStack>
          <PaginationPrevTrigger />
          <PaginationItems />
          <PaginationNextTrigger />
        </HStack>
      </PaginationRoot>
    </Box>
  );
};

export default ResultPagination;
