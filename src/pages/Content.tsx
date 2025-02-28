import { Title } from "../models/Title";
import { Box } from "@chakra-ui/react";
import SearchFilters from "../components/Content/SearchFilters/SearchFilters";
import { SearchParams } from "../common/SearchParams";
import Catalog from "../components/Content/Catalog/Catalog";
import { Result } from "../common/ResultT";
import { PaginationParams } from "../common/PaginationParams";

interface Props {
  applySearchFilters: (platformId?: string, orderBy?: string) => void
  searchParams: SearchParams
  result: Result<Title[]>
  isLoading: boolean
  pageChange: (pageNumber: number) => void
  paginationParams: PaginationParams
}

const Content = ({ result, isLoading, searchParams, applySearchFilters, pageChange, paginationParams }: Props) => {

  return (
    <Box>
      <SearchFilters searchParams={searchParams} applySearchFilters={applySearchFilters} />
      <Catalog paginationParams={paginationParams} result={result} searchParams={searchParams} isLoading={isLoading} pageChange={pageChange} />
    </Box>
  );
};

export default Content;
