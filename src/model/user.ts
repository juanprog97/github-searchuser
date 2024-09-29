export interface UserSearch {
  username: string;
  imgProfile: string;
}

export interface UserDetails {
  numberRepo: number;
  followers: number;
  following: number;
  dateJoined: string;
  location?: string;
  pageindex?: string;
  social: string;
}
