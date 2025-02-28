import { For, Stack, HStack, Box } from "@chakra-ui/react";
import { Skeleton, SkeletonText } from "../../ui/skeleton";
import CatalogItem from "./CatalogItem/CatalogItem";
import { Title } from "../../../models/Title";
import SearchResultsMessage from "./SearchResultsMessage";
import { SearchParams } from "../../../common/SearchParams";
import { Result } from "../../../common/ResultT";
import ResultPagination from "./ResultPagination";
import { PaginationParams } from "../../../common/PaginationParams";

interface Props {
  result: Result<Title[]>
  searchParams: SearchParams
  isLoading: boolean
  paginationParams: PaginationParams
  pageChange: (pageNumber: number) => void
}

const Catalog = ({ result, searchParams, isLoading, pageChange, paginationParams, }: Props) => {

  const getPaginationComponent = () => {

    if (result.itemCount === 0)
      return <></>;

    return <Box mt="1rem">
            <ResultPagination
              paginationParams={paginationParams}
              pageChange={pageChange} />
          </Box>;
  }

  return (
    <>
      {isLoading && (
        <HStack mt="1rem" gap="6" direction="row" wrap="wrap">
          <For each={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]}>
            {(it) => (
              <Stack key={it}>
                <Skeleton maxW="xs" height="200px" width="266px" />
                <SkeletonText maxW="xs" noOfLines={3} gap="2" />
              </Stack>
            )}
          </For>
        </HStack>
      )}
      
      {!isLoading && result.data && (
        <>
        {getPaginationComponent()}
        <Stack mt="1rem" gap="6" direction="row" wrap="wrap">  
          <For each={result.data}>
            {(item) => <CatalogItem key={item.id} item={item} />}
          </For>
          
        </Stack>
        {getPaginationComponent()}
        </>)}
      <Box my="1rem">
        {!isLoading && <SearchResultsMessage result={result} searchParams={searchParams} />}
      </Box>
    </>
  );
};

export default Catalog;
