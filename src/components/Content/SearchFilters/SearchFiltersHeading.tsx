import { Heading } from "@chakra-ui/react";
import { getPlatformById } from "../../../services/platforms/Platforms";
import { getGenreById } from "../../../services/genres/Genres";
import { TitleQuery } from "../../../hooks/useTitleSearch";

interface Props {
  query: TitleQuery;
}

const SearchFiltersHeading = ({ query }: Props) => {
  const searchParamsHasAnyInformedArgument = () => {
    return (
      (query.genreIds?.length ?? 0) > 0 ||
      (query.platformIds?.length ?? 0) > 0 ||
      (query.searchTerm?.length ?? 0) > 0
    );
  };

  const getCaption = () => {
    if (!searchParamsHasAnyInformedArgument()) return "Games";

    return [
      getPlatformById(
        query.platformIds?.length ?? 0 > 0
          ? query.platformIds![0].toString()
          : "-1"
      )?.name ?? "",
      getGenreById(
        query.genreIds?.length ?? 0 > 0 ? query.genreIds![0].toString() : "-1"
      )?.name ?? "",
      "Games",
    ].join(" ");
  };

  return (
    <Heading as="h2" size="6xl" marginBottom="1.1rem">
      {getCaption()}
    </Heading>
  );
};

export default SearchFiltersHeading;
