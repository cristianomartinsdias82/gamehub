import SearchFilters from "../components/Content/SearchFilters/SearchFilters";
import Catalog from "../components/Content/Catalog/Catalog";
import { Title } from "../models/Title";
import { Heading } from "@chakra-ui/react";

interface Props {
  caption: string;
  applySearchFilters: (platformId?: string, orderBy?: string) => void;
  items: Title[];
  isLoading: boolean;
}

const Content = ({ caption, items, isLoading, applySearchFilters }: Props) => {
  return (
    <div>
      <Heading as="h2" size="6xl">
        {caption}
      </Heading>
      <SearchFilters applySearchFilters={applySearchFilters} />
      <Catalog isLoading={isLoading} items={items} />
    </div>
  );
};

export default Content;
