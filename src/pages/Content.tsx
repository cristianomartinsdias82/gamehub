import styled from "styled-components";
import SearchFilters from "../components/Content/SearchFilters/SearchFilters";
import Catalog from "../components/Content/Catalog/Catalog";
import { Title } from "../models/Title";

const H2 = styled.h2`
  font-size: 3rem;
  font-weight: bolder;
`;

interface Props {
  caption: string;
  applySearchFilters: (platformId?: string, orderBy?: string) => void;
  items: Title[];
  isLoading: boolean;
}

const Content = ({ caption, items, isLoading, applySearchFilters }: Props) => {
  return (
    <div>
      <H2>{caption}</H2>
      <SearchFilters applySearchFilters={applySearchFilters} />
      <Catalog isLoading={isLoading} items={items} />
    </div>
  );
};

export default Content;
