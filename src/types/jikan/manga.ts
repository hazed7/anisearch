import type { AnimeGenre } from "./anime";
import type { Image, SortDirection } from "./base";

export interface Manga {
  mal_id: number;
  url: string;
  images: Image;
  approved: boolean;
  titles: {
    type: string;
    title: string;
  }[];
  title: string;
  title_english: string | null;
  title_japanese: string | null;
  title_synonyms: string[];
  type: string | null;
  chapters: number | null;
  volumes: number | null;
  status: string | null;
  publishing: boolean;
  published: {
    from: string | null;
    to: string | null;
    prop: {
      from: {
        day: number | null;
        month: number | null;
        year: number | null;
      };
      to: {
        day: number | null;
        month: number | null;
        year: number | null;
      };
    };
    string: string | null;
  };
  score: number | null;
  scored_by: number | null;
  rank: number | null;
  popularity: number | null;
  members: number | null;
  favorites: number | null;
  synopsis: string | null;
  background: string | null;
  authors: {
    mal_id: number;
    type: string;
    name: string;
    url: string;
  }[];
  serializations: {
    mal_id: number;
    type: string;
    name: string;
    url: string;
  }[];
  genres: AnimeGenre[];
  explicit_genres: AnimeGenre[];
  themes: AnimeGenre[];
  demographics: AnimeGenre[];
}

export enum MangaSort {
  MalID = 'mal_id',
  Title = 'title',
  StartDate = 'start_date',
  EndDate = 'end_date',
  Chapters = 'chapters',
  Volumes = 'volumes',
  Score = 'score',
  ScoredBy = 'scored_by',
  Rank = 'rank',
  Popularity = 'popularity',
  Members = 'members',
  Favorites = 'favorites'
}

export interface MangaSearchParams {
  page?: number;
  limit?: number;
  q?: string;
  type?: string;
  score?: number;
  min_score?: number;
  max_score?: number;
  status?: string;
  sfw?: boolean;
  genres?: number[];
  genres_exclude?: number[];
  order_by?: MangaSort;
  sort?: SortDirection;
  letter?: string;
  magazines?: number[];
  start_date?: string; // YYYY-MM-DD
  end_date?: string; // YYYY-MM-DD
}

export interface TopMangaParams {
  page?: number;
  limit?: number;
  type?: string;
  filter?: 'publishing' | 'upcoming' | 'bypopularity' | 'favorite';
}

export interface MangaReviewsParams {
  page?: number;
  preliminary?: boolean;
  spoiler?: boolean;
}
