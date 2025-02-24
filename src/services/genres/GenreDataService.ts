import { DataService } from '../dataService';
import apiClient from '../apiClient';
import { GetGenresResponse } from './GetGenresResponse';
import { Genre } from '../../models/Genre';
import { AxiosResponse } from 'axios';

type Ordering = "name"

class GenreDataService extends DataService<Genre> {

  constructor() {
    super('/genres');
  }

  private static map(response: AxiosResponse<GetGenresResponse>) {
    return response.data.results.map<Genre>((it) => {
      return {
        id: it.id.toString(),
        name: it.name,
        slug: it.slug,
        games_count: it.games_count,
        image_background: it.image_background,
      };
    })
  }

  getGenres(ordering: Ordering = "name") {
      
      const cancel = new AbortController();
  
      return {
          request: apiClient.get<GetGenresResponse>(
            this.endpoint,
            {
              signal: cancel.signal,
              params: {
                ordering
              }
            })
            .then(GenreDataService.map),
          requestAsync: async () => apiClient.get<GetGenresResponse>(this.endpoint, { signal: cancel.signal }),
          cancel : () => cancel.abort()
      }
    }
}

export default new GenreDataService();