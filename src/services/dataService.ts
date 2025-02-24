import { Entity } from '../models/Entity';
import apiClient from './apiClient';

export abstract class DataService<T extends Entity> {

  endpoint: string;
  
  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll() {
    
    const cancel = new AbortController();

    return {
        request: apiClient.get<T[]>(
          this.endpoint,
          {
            signal: cancel.signal
          }),
        requestAsync: async () => apiClient.get<T[]>(this.endpoint, { signal: cancel.signal }),
        cancel : () => cancel.abort()
    }
  }
}