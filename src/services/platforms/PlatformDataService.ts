import { DataService } from '../dataService';
import apiClient from '../apiClient';
import { Platform } from '../../models/Platform';
import { GetPlatformsResponse } from './GetPlatformsResponse';

class PlatformDataService extends DataService<Platform> {

  private static Endpoint = '/platforms';

  constructor() {
    super(PlatformDataService.Endpoint);
  }

  getAllPlatforms() {
      
      const cancel = new AbortController();
  
      return {
          request: apiClient.get<GetPlatformsResponse>(
            this.endpoint,
            {
              signal: cancel.signal,
              params: {
                ordering: 'name'
              }
            }),
          requestAsync: async () => apiClient.get<GetPlatformsResponse>(this.endpoint, { signal: cancel.signal }),
          cancel : () => cancel.abort()
      }
    }
}

export default new PlatformDataService();