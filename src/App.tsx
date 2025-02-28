import { Box, Flex } from "@chakra-ui/react";
import Content from "./pages/Content";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Footer from "./components/Footer/Footer";
import { useEffect, useState } from "react";
import { Title } from "./models/Title";
import titleDataService from "./services/titles/TitleDataService";
import { SearchParams } from "./common/SearchParams";
import { Result } from "./common/ResultT";
import { PaginationParams } from "./common/PaginationParams";
import "./App.css";

function App() {
  const [searchParams, setSearchParams] = useState<SearchParams>({
    pageNumber: 1,
    pageSize: 20
  });
  const [paginationParams, setPaginationParams] = useState<PaginationParams>({
    pageNumber: searchParams.pageNumber,
    pageSize: searchParams.pageSize,
    itemCount: 0
  });
  const [isLoading, setLoading] = useState(true);
  const [result, setResult] = useState<Result<Title[]>>({itemCount: 0, data: []});

  const onTermSearched = (searchTerm?: string) => {
    setPaginationParams({...paginationParams, pageNumber : 1 })
    setSearchParams({ ...searchParams, searchTerm, pageNumber: 1 });
  };

  const onSearchFiltersApplied = (platformId?: string, sortColumn?: string) => {
    setPaginationParams({...paginationParams, pageNumber : 1 })
    setSearchParams({
      ...searchParams,
      platformIds: !platformId ? undefined : [platformId],
      sortColumn,
      pageNumber: 1
    });
  };

  const onGenreSelected = (genreId: string) => {
    setPaginationParams({...paginationParams, pageNumber : 1 })
    setSearchParams({
      ...searchParams,
      genreIds: !genreId ? undefined : [genreId],
      pageNumber: 1
    });
  };

  const onPageChanged = (pageNumber: number) => {
    setPaginationParams({...paginationParams, pageNumber })
    setSearchParams({
      ...searchParams,
      pageNumber
    });
  }

  const search = () => {
    setLoading(true);

    titleDataService
      .getTitles(searchParams)
      .request
        .then((result) => {
          setPaginationParams({...paginationParams, itemCount: result.itemCount});
          setResult(result);
        })
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
      <Flex mt="0.6rem" mb="5rem">
        <Box
          pl="0.5rem"
          minWidth="18vw"
          display={{ base: "none", md: "block" }}
        >
          <Sidebar selectItem={onGenreSelected} />
        </Box>
        <Box display={{ lg: "block" }}>
          <Content
            result={result}
            isLoading={isLoading}
            applySearchFilters={onSearchFiltersApplied}
            pageChange={onPageChanged}
            searchParams={searchParams}
            paginationParams={paginationParams}
          />
        </Box>
      </Flex>
      {
        <Flex position="absolute" bottom="0">
          <Flex flexDirection="row" height="4rem" width="100vw" pl="1rem">
            <Box alignSelf="center">
              <Footer />
            </Box>
          </Flex>
        </Flex>
      }
    </Box>
  );
}

export default App;
