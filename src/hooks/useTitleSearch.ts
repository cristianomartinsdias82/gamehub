import { useEffect, useState } from "react"
import { Title } from "../models/Title";
import titleDataService from "../services/titles/TitleDataService";
import { Result } from "../common/ResultT";
import { CanceledError } from "axios";

export interface TitleQuery {
  searchTerm?: string | undefined
  genreIds?: string[] | undefined
  platformIds?: string[] | undefined
  sortColumn?: string | undefined
  pageNumber: number
  pageSize: number
}

const useTitleSearch = (...deps: any) => {
  const [isLoading, setLoading] = useState(false);
  const [titlesSearchResult, setTitlesSearchResult] = useState<Result<Title[]>>({data:[], itemCount:0});
  const [titleQuery, setTitleQuery] = useState<TitleQuery>({pageNumber:1, pageSize:20});
  const [error, setError] = useState("");

  useEffect(() => {

    const {request, cancel} = titleDataService.getTitles(titleQuery);

    setLoading(true);

    request
      .then((result) => setTitlesSearchResult(result))
      .catch(err => {
        if (!(err instanceof CanceledError)) {
          setError(err.message);
        }
      })
      .finally(() => {
        setLoading(false);
      });

    return () => cancel();
  }, [titleQuery,...deps]);

  return {
    isLoading,
    setLoading,
    titlesSearchResult,
    setTitlesSearchResult,
    titleQuery,
    setTitleQuery,
    error,
    setError
  };
}

export default useTitleSearch;