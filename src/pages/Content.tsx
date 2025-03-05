import { Title } from "../models/Title";
import { Box } from "@chakra-ui/react";
import SearchFilters from "../components/Content/SearchFilters/SearchFilters";
import { SearchParams } from "../common/SearchParams";
import Catalog from "../components/Content/Catalog/Catalog";
import { Result } from "../common/ResultT";
import { PaginationParams } from "../common/PaginationParams";
import { TitleQuery } from "../hooks/useTitleSearch";

interface Props {
  result: Result<Title[]>;
  query: TitleQuery;
  isLoading: boolean;
  applySearchFilters: (platformId?: string, orderBy?: string) => void;
  pageChange: (pageNumber: number) => void;
  //paginationParams: PaginationParams
  //searchParams: SearchParams
  error: string;
}

const Content = ({
  result,
  query,
  isLoading,
  applySearchFilters,
  pageChange,
  error,
}: //searchParams,
//paginationParams,

Props) => {
  if (error) return <></>;

  return (
    <Box>
      <SearchFilters
        //searchParams={searchParams}
        query={query}
        applySearchFilters={applySearchFilters}
      />
      <Catalog
        query={query}
        result={result}
        isLoading={isLoading}
        // searchParams={searchParams}
        // paginationParams={paginationParams}
        pageChange={pageChange}
      />
    </Box>
  );
};

export default Content;
