import type { Image, SortDirection } from "./base";

export interface Character {
  mal_id: number;
  url: string;
  images: Image;
  name: string;
  name_kanji: string | null;
  nicknames: string[];
  favorites: number;
  about: string | null;
}

export interface CharacterDetailed extends Character {
  anime: {
    role: string;
    anime: {
      mal_id: number;
      url: string;
      images: Image;
      title: string;
    };
  }[];
  manga: {
    role: string;
    manga: {
      mal_id: number;
      url: string;
      images: Image;
      title: string;
    };
  }[];
  voices: {
    person: {
      mal_id: number;
      url: string;
      images: Image;
      name: string;
    };
    language: string;
  }[];
}

export interface CharacterSearchParams {
  page?: number;
  limit?: number;
  q?: string;
  order_by?: 'mal_id' | 'name' | 'favorites';
  sort?: SortDirection;
  letter?: string;
}
