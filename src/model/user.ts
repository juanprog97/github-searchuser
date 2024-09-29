export interface UserSearch {
  username: string;
  imgProfile: string;
  htmlprofile: string;
}

export interface UserDetails {
  numberRepo: number;
  followers: number;
  following: number;
  numberGist: number;
  dateJoined: string;
  bio?: string | null;
  name: string;
  location?: string;
  social: string;
  blog: string;
  company: string;
  email: string;
}
