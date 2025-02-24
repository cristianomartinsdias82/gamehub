import axios, { CanceledError } from 'axios';
import { RawgApiKey } from '../secrets/rawg-api-key';

const RawgApiUrl = 'https://api.rawg.io/api';

export { CanceledError };

export default axios.create({
  baseURL: RawgApiUrl,
  params: {
    key: RawgApiKey
  }
});