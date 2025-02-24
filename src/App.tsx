import { Box, Flex } from "@chakra-ui/react";
import "./App.css";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Content from "./pages/Content";
import { useEffect, useState } from "react";
import { Title } from "./models/Title";
import titleDataService, {
  SearchParams,
} from "./services/titles/TitleDataService";

function App() {
  const [searchParams, setSearchParams] = useState<SearchParams>({
    pageNumber: 1,
    pageSize: 50,
  });
  const [isLoading, setLoading] = useState(true);
  const [titles, setTitles] = useState<Title[]>([]);

  const onTermSearched = (searchTerm?: string) => {
    setSearchParams({ ...searchParams, searchTerm });
  };

  const onSearchFiltersApplied = (platformId?: string, sortColumn?: string) => {
    setSearchParams({
      ...searchParams,
      platformIds: !platformId ? undefined : [platformId],
      sortColumn,
    });
  };

  const onGenreSelected = (genreId: string) => {
    setSearchParams({
      ...searchParams,
      genreIds: !genreId ? undefined : [genreId],
    });
  };

  const search = () => {
    setLoading(true);
    titleDataService
      .getTitles(searchParams)
      .request.then((titles) => setTitles([...titles]))
      .finally(() => setLoading(false));
  };

  useEffect(() => search(), [searchParams]);

  return (
    <Box padding="0.5rem">
      <Flex>
        <Box height="4rem">
          <Header searchContent={onTermSearched} />
        </Box>
      </Flex>
      <Flex mt="0.6rem">
        <Box
          pl="0.5rem"
          minWidth="18vw"
          display={{ base: "none", md: "block" }}
        >
          <Sidebar selectItem={onGenreSelected} />
        </Box>
        <Box display={{ lg: "block" }}>
          <Content
            caption="Games"
            items={titles}
            isLoading={isLoading}
            applySearchFilters={onSearchFiltersApplied}
          />
        </Box>
      </Flex>
      {
        <Flex position="absolute" bottom="0">
          <Box height="4rem" width="100vw"></Box>
        </Flex>
      }
    </Box>
  );
}

export default App;
