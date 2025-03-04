import { Box, Flex, Grid, GridItem } from "@chakra-ui/react";
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

function App() {
  const [searchParams, setSearchParams] = useState<SearchParams>({
    pageNumber: 1,
    pageSize: 20,
  });
  const [paginationParams, setPaginationParams] = useState<PaginationParams>({
    pageNumber: searchParams.pageNumber,
    pageSize: searchParams.pageSize,
    itemCount: 0,
  });
  const [isLoading, setLoading] = useState(true);
  const [result, setResult] = useState<Result<Title[]>>({
    itemCount: 0,
    data: [],
  });

  const onTermSearched = (searchTerm?: string) => {
    setPaginationParams({ ...paginationParams, pageNumber: 1 });
    setSearchParams({ ...searchParams, searchTerm, pageNumber: 1 });
  };

  const onSearchFiltersApplied = (platformId?: string, sortColumn?: string) => {
    setPaginationParams({ ...paginationParams, pageNumber: 1 });
    setSearchParams({
      ...searchParams,
      platformIds: !platformId ? undefined : [platformId],
      sortColumn,
      pageNumber: 1,
    });
  };

  const onGenreSelected = (genreId: string | undefined) => {
    setPaginationParams({ ...paginationParams, pageNumber: 1 });
    setSearchParams({
      ...searchParams,
      genreIds: !genreId ? undefined : [genreId],
      pageNumber: 1,
    });
  };

  const onPageChanged = (pageNumber: number) => {
    setPaginationParams({ ...paginationParams, pageNumber });
    setSearchParams({
      ...searchParams,
      pageNumber,
    });
  };

  const search = () => {
    setLoading(true);

    titleDataService
      .getTitles(searchParams)
      .request.then((result) => {
        setPaginationParams({
          ...paginationParams,
          itemCount: result.itemCount,
        });
        setResult(result);
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => search(), [searchParams]);

  return (
    // <Grid templateAreas={`"nav nav" "aside main" "footer footer"`}>
    <Grid
      templateAreas={{
        base: `"nav" "main" "footer"`, //This is for mobile devices (1 column and 1 nav and main rows only; no aside)
        lg: `"nav nav" "aside main" "footer footer"`, // Wider than 1024px
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area="nav">
        <Header searchContent={onTermSearched} />
      </GridItem>
      <GridItem area="aside" hideBelow="lg" paddingX="1rem">
        <Sidebar selectItem={onGenreSelected} />
      </GridItem>
      <GridItem area="main" paddingX={3}>
        <Content
          result={result}
          isLoading={isLoading}
          applySearchFilters={onSearchFiltersApplied}
          pageChange={onPageChanged}
          searchParams={searchParams}
          paginationParams={paginationParams}
        />
      </GridItem>
      <GridItem area="footer">
        <Flex flexDirection="row" height="4rem" width="100vw" pl="1rem">
          <Box alignSelf="center">
            <Footer />
          </Box>
        </Flex>
      </GridItem>
    </Grid>
  );
}

export default App;
