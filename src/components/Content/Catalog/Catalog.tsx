import { Text, For, Stack, HStack, Box } from "@chakra-ui/react";
import { Skeleton, SkeletonText } from "../../ui/skeleton";
import CatalogItem from "./CatalogItem/CatalogItem";
import { Title } from "../../../models/Title";
import SearchResultsMessage from "./SearchResultsMessage";
import { SearchParams } from "../../../services/titles/TitleDataService";

interface Props {
  items: Title[];
  searchParams: SearchParams,
  isLoading: boolean;
}

const Catalog = ({ items, searchParams, isLoading }: Props) => {
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
      {!isLoading && items && (
        <Stack mt="1rem" gap="6" direction="row" wrap="wrap">
          <For each={items}>
            {(item) => <CatalogItem key={item.id} item={item} />}
          </For>
        </Stack>
      )}
      <Box my="1rem">
        {!isLoading && <SearchResultsMessage items={items} searchParams={searchParams} />}
      </Box>
    </>
  );
};

export default Catalog;
