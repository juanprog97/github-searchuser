import useSWR from 'swr';
import { BASE_URL_DETAILS } from '../utils/const';
import { fetchUserDetails } from '@/services';
import { userDetailsAdapter } from '@/adapters';

const useDetailsUser = (seeDetails: boolean, username: string) => {
  const fetcher = async (url: string) => {
    const response = await fetchUserDetails(url).call;
    return response.data;
  };
  const { data, error, isLoading, isValidating } = useSWR(
    seeDetails ? BASE_URL_DETAILS + '/' + username : null,
    fetcher,
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
 
    }
  );

  const dataResponse = userDetailsAdapter(data);
  return {
    usersDetails: dataResponse,
    error,
    isLoading: isLoading,
    isValidating,
  };
};

export default useDetailsUser;
