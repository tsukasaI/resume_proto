type Tag = {
  name: string;
  versions: string[];
};

type User = {
  description: string;
  facebook_id: string;
  followees_count: number;
  followers_count: number;
  github_login_name: string;
  id: string;
  items_count: number;
  linkedin_id: string;
  location: string;
  name: string;
  organization: string;
  permanent_id: number;
  profile_image_url: string;
  team_only: boolean;
  twitter_screen_name?: string;
  website_url: string;
};

export type QiitaUserItems = {
  rendered_body: string;
  body: string;
  coediting: boolean;
  comments_count: number;
  created_at: Date;
  group?: any;
  id: string;
  likes_count: number;
  private: boolean;
  reactions_count: number;
  stocks_count: number;
  tags: Tag[];
  title: string;
  updated_at: Date;
  url: string;
  user: User;
  page_views_count?: number;
  team_membership?: any;
};
