import { Text, For, Stack, HStack } from "@chakra-ui/react";
import { Skeleton, SkeletonText } from "../../ui/skeleton";
import CatalogItem from "./CatalogItem/CatalogItem";
import { Title } from "../../../models/Title";

interface Props {
  items: Title[];
  isLoading: boolean;
}

const Catalog = ({ items, isLoading }: Props) => {
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
      {!isLoading && (items?.length === 0) && <Text>The search returned no results.</Text>}
    </>
  );
};

export default Catalog;
