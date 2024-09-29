import useSWR from 'swr';
import { BASE_URL_SEARCH } from '../utils/const';
import { fetchUserSearch } from '@/services';
import { userSearchAdapter } from '@/adapters';
import { useEffect } from 'react';

const useSearchUser = (userSearch: string | null) => {
  const fetcher = async (url: string) => {
    const response = await fetchUserSearch(url, userSearch == null ? '' : userSearch).call;
    return response.data;
  };
  const { data, error, isLoading, isValidating, mutate } = useSWR(userSearch ? BASE_URL_SEARCH : null, fetcher, {
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });

  useEffect(() => {
    if (userSearch) {
      mutate();
    }
  }, [userSearch]);
  const dataResponse = userSearchAdapter(data);
  return {
    users: dataResponse,
    error,
    isLoading: isLoading,
    isValidating,
  };
};

export default useSearchUser;
