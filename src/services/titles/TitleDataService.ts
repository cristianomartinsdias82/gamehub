import apiClient from "../apiClient";
import { DataService } from "../dataService";
import { AxiosResponse } from "axios";
import { GetPagedTitlesResponse } from "./GetPagedTitlesResponse";
import { Title } from "../../models/Title";
import { Platform } from "../../models/Platform";
import { Rating } from "../../models/Rating";
import { SearchParams } from "../../common/SearchParams";
import { Result } from "../../common/ResultT";

class TitleDataService extends DataService<Title> {
  private static Endpoint = "/games";

  constructor() {
    super(TitleDataService.Endpoint);
  }

  getTitles(searchParams: SearchParams) {
    const cancel = new AbortController();

    return {
      request: apiClient
        .get<GetPagedTitlesResponse>(this.endpoint, {
          signal: cancel.signal,
          params: {
            search: searchParams.searchTerm ?? undefined,
            page: searchParams.pageNumber,
            page_size: searchParams.pageSize,
            parent_platforms: searchParams.platformIds?.join(",") ?? null,
            genres: searchParams.genreIds?.join(",") ?? null,
            ordering: searchParams.sortColumn ? searchParams.sortColumn : null,
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
          reviews_text_count: it.reviews_text_count,
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
