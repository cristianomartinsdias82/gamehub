import { Text } from "@chakra-ui/react";
import { Title } from "../../../models/Title";
import { SearchParams } from "../../../services/titles/TitleDataService"

interface Props {
    searchParams: SearchParams
    items?: Title[]
}

const SearchResultsMessage = ({ items, searchParams }: Props) => {

    return <Text>{["The search",
                   searchParams.searchTerm ? `for term '${searchParams.searchTerm}'` : '',
                   `resulted in ${items?.length ?? 0} match(es).`
                  ].join(' ')}</Text>
}

export default SearchResultsMessage