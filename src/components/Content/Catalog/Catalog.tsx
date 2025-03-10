import { For, Card, Box } from "@chakra-ui/react";
import { SimpleGrid } from "@chakra-ui/react";
import { Skeleton, SkeletonText } from "../../ui/skeleton";
import CatalogItem from "./CatalogItem/CatalogItem";
import { Title } from "../../../models/Title";
import SearchResultsMessage from "./SearchResultsMessage";
import { Result } from "../../../common/ResultT";
import ResultPagination from "./ResultPagination";
import CatalogItemContainer from "./CatalogItem/CatalogItemContainer";
import { TitleQuery } from "../../../hooks/useTitleSearch";

interface Props {
  query: TitleQuery;
  result: Result<Title[]>;
  isLoading: boolean;
  pageChange: (pageNumber: number) => void;
}

const Catalog = ({ query, result, isLoading, pageChange }: Props) => {
  return (
    <>
      <ResultPagination
        result={result}
        isLoading={isLoading}
        query={query}
        pageChange={pageChange}
      />
      <SimpleGrid
        gap={3}
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        paddingTop="1.3rem"
      >
        {isLoading && (
          <For each={[1, 2, 3, 4, 5, 6]}>
            {(it) => (
              <CatalogItemContainer key={it}>
                <Card.Root key={it}>
                  <Skeleton height="230px"></Skeleton>
                  <Card.Body>
                    <SkeletonText />
                  </Card.Body>
                </Card.Root>
              </CatalogItemContainer>
            )}
          </For>
        )}
        {!isLoading && result.data && (
          <For each={result.data}>
            {(item) => (
              <CatalogItemContainer key={item.id}>
                <CatalogItem item={item} />
              </CatalogItemContainer>
            )}
          </For>
        )}
      </SimpleGrid>
      <SearchResultsMessage
        result={result}
        isLoading={isLoading}
        query={query}
      />
      <ResultPagination
        result={result}
        isLoading={isLoading}
        query={query}
        pageChange={pageChange}
      />
    </>
  );
};

export default Catalog;
