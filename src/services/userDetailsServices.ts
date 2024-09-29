import axios from 'axios';

export const fetchUserDetails = (url: string) => {
  return {
    call: axios.get<any>(url),
  };
};
