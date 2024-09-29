import axios from 'axios';

export const fetchUserSearch = (url: string, userSearch: string) => {
  let baseUrl = `${url}?q=${userSearch}`;
  return {
    call: axios.get<any>(baseUrl),
  };
};
