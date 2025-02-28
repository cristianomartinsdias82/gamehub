import SearchFilters from "../components/Content/SearchFilters/SearchFilters";
import Catalog from "../components/Content/Catalog/Catalog";
import { Title } from "../models/Title";
import { SearchParams } from "../services/titles/TitleDataService";
import { Box } from "@chakra-ui/react";

interface Props {
  applySearchFilters: (platformId?: string, orderBy?: string) => void;
  searchParams: SearchParams,
  items: Title[];
  isLoading: boolean;
}

const Content = ({ items, isLoading, searchParams, applySearchFilters }: Props) => {
  return (
    <Box>
      <SearchFilters searchParams={searchParams} applySearchFilters={applySearchFilters} />
      <Catalog items={items} searchParams={searchParams} isLoading={isLoading} />
    </Box>
  );
};

export default Content;
