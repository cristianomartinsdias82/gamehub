import { HStack } from "@chakra-ui/react";
import { PaginationItems, PaginationNextTrigger, PaginationPrevTrigger, PaginationRoot } from "../../ui/pagination";
import { PaginationParams } from "../../../common/PaginationParams";

interface Props {
    paginationParams: PaginationParams
    pageChange: (pageNumber: number) => void
}

const ResultPagination = ({paginationParams, pageChange}:Props) => {

    return (<PaginationRoot
      count={paginationParams.itemCount}
      page={paginationParams.pageNumber}
      pageSize={paginationParams.pageSize}
      onPageChange={(e:any) => pageChange(e.page)}
    >
      <HStack>
        <PaginationPrevTrigger />
        <PaginationItems />
        <PaginationNextTrigger />
      </HStack>
    </PaginationRoot>);

}

export default ResultPagination