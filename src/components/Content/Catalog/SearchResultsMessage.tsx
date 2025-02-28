import { Text } from "@chakra-ui/react";
import { Title } from "../../../models/Title";
import { SearchParams } from "../../../common/SearchParams";
import { Result } from "../../../common/ResultT";

interface Props {
    searchParams: SearchParams
    result: Result<Title[]>
}

const SearchResultsMessage = ({ result, searchParams }: Props) => {

    return <Text>{["The search",
                   searchParams.searchTerm ? `for term '${searchParams.searchTerm}'` : '',
                   `resulted in ${result.itemCount} match(es).`
                  ].join(' ')}</Text>
}

export default SearchResultsMessage