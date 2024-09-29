import { UserDetails } from '@/model';
import { formatDate } from '@/utils';

export const userDetailsAdapter = (data: any): UserDetails => {
  if (data) {
    return {
      numberRepo: data.public_repos,
      followers: data.followers,
      following: data.following,
      numberGist: data.public_gists,
      dateJoined: formatDate(data.created_at),
      bio: data.bio,
      location: data.location,
      name: data.name,
      social: data.twitter_username,
      blog: data.blog,
      company: data.company,
      email: data.email,
    };
  }
  return null;
};
