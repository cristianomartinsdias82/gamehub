import { Box, Flex, Grid, GridItem } from "@chakra-ui/react";
import Content from "./pages/Content";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Footer from "./components/Footer/Footer";
import Error from "./components/Content/Error/Error";
import useTitleSearch from "./hooks/useTitleSearch";

function App() {
  const { isLoading, titlesSearchResult, titleQuery, setTitleQuery, error } =
    useTitleSearch(); //React my custom Hook ("Hook: a volta do capitão gancho.")

  const onTermSearched = (searchTerm?: string) => {
    setTitleQuery({ ...titleQuery, pageNumber: 1, searchTerm: searchTerm });
  };

  const onSearchFiltersApplied = (platformId?: string, sortColumn?: string) => {
    setTitleQuery({
      ...titleQuery,
      pageNumber: 1,
      platformIds: platformId ? [platformId] : undefined,
      sortColumn,
    });
  };

  const onGenreSelected = (genreId: string | undefined) => {
    setTitleQuery({
      ...titleQuery,
      pageNumber: 1,
      genreIds: genreId ? [genreId] : undefined,
    });
  };

  const onPageChanged = (pageNumber: number) => {
    setTitleQuery({
      ...titleQuery,
      pageNumber,
    });
  };

  return (
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
          result={titlesSearchResult}
          isLoading={isLoading}
          applySearchFilters={onSearchFiltersApplied}
          pageChange={onPageChanged}
          query={titleQuery}
          error={error}
        />
        <Error error={error} />
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
