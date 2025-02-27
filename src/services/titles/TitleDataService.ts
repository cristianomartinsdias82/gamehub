import { DataService } from '../dataService';
import apiClient from '../apiClient';
import { GetPagedTitlesResponse } from './GetPagedTitlesResponse';
import { Title } from '../../models/Title';
import { Platform } from '../../models/Platform';
import { Rating } from '../../models/Rating';
import { AxiosResponse } from 'axios';

export interface SearchParams {
  searchTerm?: string
  genreIds?: string[] | undefined
  platformIds?: string[] | undefined
  sortColumn?: string
  pageNumber: number
  pageSize: number
}

class TitleDataService extends DataService<Title> {

  private static Endpoint = '/games';

  constructor() {
    super(TitleDataService.Endpoint);
  }

  getTitles(searchParams: SearchParams) {
      
      const cancel = new AbortController();
  
      return {
          request: apiClient.get<GetPagedTitlesResponse>(
            this.endpoint,
            {
              signal: cancel.signal,
              params: {
                search: searchParams.searchTerm ?? undefined,
                page: searchParams.pageNumber,
                page_size: searchParams.pageSize,
                platforms: searchParams.platformIds?.join(',') ?? null,
                genres: searchParams.genreIds?.join(',') ?? null,
                ordering: searchParams.sortColumn ? searchParams.sortColumn : null
              }
            })
            .then(TitleDataService.map)
            .then(TitleDataService.filterByBackgroundImage),
          requestAsync: async () => apiClient.get<GetPagedTitlesResponse>(this.endpoint, { signal: cancel.signal }),
          cancel : () => cancel.abort()
      }
    }

    private static getMaxRating = (ratings: Rating[]) => {
        return (
          ratings.sort((it1, it2) => it2.count + it1.count)[0]?.title ??
          "No rating."
        );
      };

      private static map(response: AxiosResponse<GetPagedTitlesResponse>) {
        return response.data.results.map<Title>((it) => {
          return {
            id: it.id,
            name: it.name,
            background_image: it.background_image,
            reviews_text_count: it.reviews_text_count,
            rating: TitleDataService.getMaxRating(it.ratings),
            platforms: it.platforms?.map<Platform>((pl) => {
              return {
                id: pl.platform.id.toString(),
                name: pl.platform.name,
                slug: pl.platform.slug,
              };
            }) ?? [],
          };
        })
      }
  
    private static filterByBackgroundImage(titles: Title[]) {
      return titles.filter((it) =>
        it.background_image !== null &&
        it.background_image.trim().length > 0
      );
    }
}

export default new TitleDataService();