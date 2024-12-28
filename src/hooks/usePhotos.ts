import { useQuery } from 'react-query';
import apiClient from '../utils/apiClient';

export interface Photo {
  id: string;
  urls: { small: string; full: string };
  description: string | null;
}

interface PhotosResponse {
  results: Photo[];
  total: number;
}

const fetchPhotos = async (query: string, page: number): Promise<PhotosResponse> => {
  const { data } = await apiClient.get('/search/photos', {
    params: { query, page, per_page: 20 },
  });
  return data;
};

export const usePhotos = (query: string, page: number) =>
  useQuery(['photos', query, page], () => fetchPhotos(query, page), {
    staleTime: 1000 * 60 * 5, // Cache for 5 minutes
    keepPreviousData: true, // Keep previous data during pagination
  });
