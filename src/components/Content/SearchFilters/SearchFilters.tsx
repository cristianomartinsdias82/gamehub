import { For, HStack } from "@chakra-ui/react";

import { NativeSelect } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import platformDataService from "../../../services/platforms/PlatformDataService";
import { Platform } from "../../../models/Platform";
import { SortedOrderingOptions } from "../../../services/SortedOrderingOptions";

interface Props {
  applySearchFilters: (platformId?: string, orderBy?: string) => void;
}

const SearchFilters = ({ applySearchFilters }: Props) => {
  //TODO: create usePlatforms hook
  //TODO: create useSortingColumns hook

  const platformCtrlRef = useRef<HTMLSelectElement | null>(null);
  const sortByCtrlRef = useRef<HTMLSelectElement | null>(null);

  const [platforms, setPlatforms] = useState<Platform[]>([]);

  useEffect(() => {
    platformDataService
      .getAllPlatforms()
      .request.then((response) => response.data.results)
      .then((results) =>
        results.map((it) => {
          return {
            id: it.id.toString(),
            name: it.name,
            slug: it.slug,
          };
        })
      )
      .then((platforms) => setPlatforms([...platforms]));
  }, []);

  return (
    <HStack gap="5" width="full">
      <NativeSelect.Root size="md" maxWidth="200px">
        <NativeSelect.Field
          onChange={() =>
            applySearchFilters(
              platformCtrlRef.current?.value,
              sortByCtrlRef.current?.value
            )
          }
          ref={platformCtrlRef}
          placeholder="Platforms"
        >
          <For each={[...platforms]}>
            {(it) => (
              <option key={it.id} value={it.id}>
                {it.name}
              </option>
            )}
          </For>
        </NativeSelect.Field>
        <NativeSelect.Indicator />
      </NativeSelect.Root>

      <NativeSelect.Root size="md" maxWidth="200px">
        <NativeSelect.Field
          onChange={() =>
            applySearchFilters(
              platformCtrlRef.current?.value,
              sortByCtrlRef.current?.value
            )
          }
          ref={sortByCtrlRef}
          placeholder="Sort by"
        >
          <For each={[...SortedOrderingOptions]}>
            {(it) => (
              <option key={it.id} value={it.id}>
                {it.caption}
              </option>
            )}
          </For>
        </NativeSelect.Field>
        <NativeSelect.Indicator />
      </NativeSelect.Root>
    </HStack>
  );
};

export default SearchFilters;
