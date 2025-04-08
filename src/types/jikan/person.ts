import { type Image, SortDirection } from './base';

export interface Person {
  mal_id: number;
  url: string;
  website_url: string | null;
  images: Image;
  name: string;
  given_name: string | null;
  family_name: string | null;
  alternate_names: string[];
  birthday: string | null;
  favorites: number;
  about: string | null;
}

export interface PersonSearchParams {
  page?: number;
  limit?: number;
  q?: string;
  order_by?: 'mal_id' | 'name' | 'favorites';
  sort?: SortDirection;
  letter?: string;
}
