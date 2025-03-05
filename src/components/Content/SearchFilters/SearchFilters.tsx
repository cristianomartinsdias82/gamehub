import { For, HStack, Stack } from "@chakra-ui/react";
import { NativeSelect } from "@chakra-ui/react";
import { useRef, useState } from "react";
import SearchFiltersHeading from "./SearchFiltersHeading";
import { SortedOrderingOptions } from "../../../services/SortedOrderingOptions";
import { Platforms } from "../../../services/platforms/Platforms";
import { TitleQuery } from "../../../hooks/useTitleSearch";

interface Props {
  applySearchFilters: (platformId?: string, orderBy?: string) => void;
  query: TitleQuery;
}

const SearchFilters = ({ query, applySearchFilters }: Props) => {
  const platformCtrlRef = useRef<HTMLSelectElement | null>(null);
  const sortByCtrlRef = useRef<HTMLSelectElement | null>(null);

  const [sortBySelectedItemId, setSortBySelectedItemId] = useState("");

  return (
    <>
      <Stack>
        <SearchFiltersHeading query={query} />
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
              <For each={Platforms}>
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
              onChange={() => {
                setSortBySelectedItemId(sortByCtrlRef.current!.value);

                applySearchFilters(
                  platformCtrlRef.current?.value,
                  sortByCtrlRef.current?.value
                );
              }}
              ref={sortByCtrlRef}
            >
              <For each={SortedOrderingOptions}>
                {(it) => (
                  <option key={it.id} value={it.id}>
                    {it.id === sortBySelectedItemId
                      ? `Sort by: ${it.caption}`
                      : it.caption}
                  </option>
                )}
              </For>
            </NativeSelect.Field>
            <NativeSelect.Indicator />
          </NativeSelect.Root>
        </HStack>
      </Stack>
    </>
  );
};

export default SearchFilters;
