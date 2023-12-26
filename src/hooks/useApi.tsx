import { useState, useCallback } from 'react';
import axios, { AxiosError, AxiosResponse } from 'axios';

interface ApiResponse<T> {
  data: T;
}

const useApi = <T,>() => {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState(false);

  const apiUrl = process.env.NEXT_PUBLIC_BASE_API_URL || '';

  const fetchData = useCallback(
    async (
      endpoint: string,
      method: 'get' | 'post' | 'put' | 'delete' = 'get',
      body: Record<string, any> | null = null
    ) => {
      const url = `${apiUrl}/${endpoint}`;

      setLoading(true);

      try {
        const response = await axios.request<T, AxiosResponse<ApiResponse<T>>>({
          method,
          url,
          data: body,
        });
        setData(response.data?.data || null);
        setError(null);
      } catch (err) {
        setError(new Error('An error occurred'));
      } finally {
        setLoading(false);
      }
    },
    [apiUrl]
  );

  return { data, error, loading, fetchData };
};

export default useApi;
