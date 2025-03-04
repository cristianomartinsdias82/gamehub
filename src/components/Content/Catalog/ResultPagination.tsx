import { Box, HStack } from "@chakra-ui/react";
import {
  PaginationItems,
  PaginationNextTrigger,
  PaginationPrevTrigger,
  PaginationRoot,
} from "../../ui/pagination";
import { PaginationParams } from "../../../common/PaginationParams";
import { Result } from "../../../common/ResultT";
import { Title } from "../../../models/Title";

interface Props {
  result: Result<Title[]>;
  isLoading: boolean;
  paginationParams: PaginationParams;
  pageChange: (pageNumber: number) => void;
}

const ResultPagination = ({
  result,
  isLoading,
  paginationParams,
  pageChange,
}: Props) => {
  if (isLoading || result.itemCount === 0) return <></>;

  return (
    <Box mt="1rem" hideBelow="md" justifyItems="center">
      <PaginationRoot
        count={paginationParams.itemCount}
        page={paginationParams.pageNumber}
        pageSize={paginationParams.pageSize}
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
