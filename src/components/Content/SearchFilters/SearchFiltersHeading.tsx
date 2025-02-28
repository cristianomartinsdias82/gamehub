import { Heading } from "@chakra-ui/react";
import { SearchParams } from "../../../services/titles/TitleDataService";
import { getPlatformById } from "../../../services/platforms/Platforms";
import { getGenreById } from "../../../services/genres/Genres";

interface Props {
    searchParams: SearchParams
}

const SearchFiltersHeading = ({searchParams}: Props) => {

    const searchParamsHasAnyInformedArgument = () => {
        return (searchParams.genreIds?.length ?? 0) > 0 ||
               (searchParams.platformIds?.length ?? 0) > 0 ||
               (searchParams.searchTerm?.length ?? 0) > 0;
    }

    const getCaption = () => {

        if (!searchParamsHasAnyInformedArgument())
            return "Games";

        return [getPlatformById((searchParams.platformIds?.length ?? 0 > 0) ? searchParams.platformIds![0].toString() : "-1")?.name ?? '',
                getGenreById((searchParams.genreIds?.length ?? 0 > 0) ? searchParams.genreIds![0].toString() : "-1")?.name ?? '',
                'Games']
                .join(' ');
    }

    return <Heading as="h2" size="6xl" marginBottom="1.1rem">{getCaption()}</Heading>;
}

export default SearchFiltersHeading;