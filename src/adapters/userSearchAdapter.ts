import { UserSearch } from '@/model';

export const userSearchAdapter = (data: any): UserSearch[] => {
  const dataFound = data && data.total_count > 0 ? data.items : [];

  let listUserSearch: UserSearch[] = [];
  listUserSearch = dataFound.map((item: any) => {
    return {
      username: item.login,
      imgProfile: item.avatar_url,
    };
  });
  return listUserSearch;
};
