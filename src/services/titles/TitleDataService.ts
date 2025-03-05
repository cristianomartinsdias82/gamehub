import apiClient from "../apiClient";
import { DataService } from "../dataService";
import { AxiosResponse } from "axios";
import { GetPagedTitlesResponse } from "./GetPagedTitlesResponse";
import { Title } from "../../models/Title";
import { Platform } from "../../models/Platform";
import { Rating } from "../../models/Rating";
import { Result } from "../../common/ResultT";
import { TitleQuery } from "../../hooks/useTitleSearch";

class TitleDataService extends DataService<Title> {
  private static Endpoint = "/games";

  constructor() {
    super(TitleDataService.Endpoint);
  }

  getTitles(query: TitleQuery) {
    const cancel = new AbortController();

    return {
      request: apiClient
        .get<GetPagedTitlesResponse>(this.endpoint, {
          signal: cancel.signal,
          params: {
            search: query.searchTerm,
            page: query.pageNumber,
            page_size: query.pageSize,
            parent_platforms: query.platformIds?.join(",") ?? null,
            genres: query.genreIds?.join(",") ?? null,
            ordering: query.sortColumn ? query.sortColumn : null
          },
        })
        .then(TitleDataService.map),
      requestAsync: async () =>
        apiClient.get<GetPagedTitlesResponse>(this.endpoint, {
          signal: cancel.signal,
        }),
      cancel: () => cancel.abort(),
    };
  }

  private static getMaxRating = (ratings: Rating[]) => {
    return (
      ratings.sort((it1, it2) => it2.count + it1.count)[0]?.title ??
      "No rating."
    );
  };

  private static map = (response: AxiosResponse<GetPagedTitlesResponse>): Result<Title[]> => {
    return {
      itemCount: response.data.count,
      data: response.data.results.map<Title>((it) => {
        return {
          id: it.id,
          name: it.name,
          background_image: it.background_image,
          metacritic: it.metacritic,
          rating: TitleDataService.getMaxRating(it.ratings),
          platforms:
            it.parent_platforms?.map<Platform>((pl) => {
              return {
                id: pl.platform.id.toString(),
                name: pl.platform.name,
                slug: pl.platform.slug
              };
            }) ?? []
        };
      })
    };
  }
}

export default new TitleDataService();
