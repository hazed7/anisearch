import type { Image, SortDirection } from "./base";

export interface AnimeTitle {
  type: string;
  title: string;
}

export interface AnimeBroadcast {
  day: string;
  time: string;
  timezone: string;
  string: string;
}

export interface AnimeAired {
  from: string;
  to: string | null;
  prop: {
    from: {
      day: number;
      month: number;
      year: number;
    };
    to: {
      day: number | null;
      month: number | null;
      year: number | null;
    };
  };
  string: string;
}

export interface AnimeGenre {
  mal_id: number;
  type: string;
  name: string;
  url: string;
}

export interface AnimeStudio {
  mal_id: number;
  type: string;
  name: string;
  url: string;
}

export interface AnimeTrailer {
  youtube_id: string | null;
  url: string | null;
  embed_url: string | null;
  images: {
    image_url: string | null;
    small_image_url: string | null;
    medium_image_url: string | null;
    large_image_url: string | null;
    maximum_image_url: string | null;
  };
}

export interface Anime {
  mal_id: number;
  url: string;
  images: Image;
  trailer: AnimeTrailer;
  approved: boolean;
  titles: AnimeTitle[];
  title: string;
  title_english: string | null;
  title_japanese: string | null;
  title_synonyms: string[];
  type: string | null;
  source: string | null;
  episodes: number | null;
  status: string | null;
  airing: boolean;
  aired: AnimeAired;
  duration: string | null;
  rating: string | null;
  score: number | null;
  scored_by: number | null;
  rank: number | null;
  popularity: number | null;
  members: number | null;
  favorites: number | null;
  synopsis: string | null;
  background: string | null;
  season: string | null;
  year: number | null;
  broadcast: AnimeBroadcast | null;
  producers: AnimeGenre[];
  licensors: AnimeGenre[];
  studios: AnimeStudio[];
  genres: AnimeGenre[];
  explicit_genres: AnimeGenre[];
  themes: AnimeGenre[];
  demographics: AnimeGenre[];
}

export interface AnimeDetailed extends Anime {
  relations: {
    relation: string;
    entry: {
      mal_id: number;
      type: string;
      name: string;
      url: string;
    }[];
  }[];
  theme: {
    openings: string[];
    endings: string[];
  };
  external: {
    name: string;
    url: string;
  }[];
}

export enum AnimeType {
  TV = 'tv',
  Movie = 'movie',
  OVA = 'ova',
  Special = 'special',
  ONA = 'ona',
  Music = 'music'
}

export enum AnimeStatus {
  Airing = 'airing',
  Complete = 'complete',
  Upcoming = 'upcoming'
}

export enum AnimeSeason {
  Winter = 'winter',
  Spring = 'spring',
  Summer = 'summer',
  Fall = 'fall'
}

export enum AnimeRating {
  G = 'g',
  PG = 'pg',
  PG13 = 'pg13',
  R17 = 'r17',
  R = 'r',
  RPlus = 'r+',
  Rx = 'rx'
}

export enum AnimeSort {
  MalID = 'mal_id',
  Title = 'title',
  Type = 'type',
  Rating = 'rating',
  StartDate = 'start_date',
  EndDate = 'end_date',
  Episodes = 'episodes',
  Score = 'score',
  ScoredBy = 'scored_by',
  Rank = 'rank',
  Popularity = 'popularity',
  Members = 'members',
  Favorites = 'favorites'
}

export interface AnimeSearchParams {
  page?: number;
  limit?: number;
  q?: string;
  type?: AnimeType;
  score?: number;
  min_score?: number;
  max_score?: number;
  status?: AnimeStatus;
  rating?: AnimeRating;
  sfw?: boolean;
  genres?: number[];
  genres_exclude?: number[];
  order_by?: AnimeSort;
  sort?: SortDirection;
  letter?: string;
  producers?: number[];
  start_date?: string; // YYYY-MM-DD
  end_date?: string; // YYYY-MM-DD
}

export interface TopAnimeParams {
  page?: number;
  limit?: number;
  type?: AnimeType;
  filter?: 'airing' | 'upcoming' | 'bypopularity' | 'favorite';
}

export interface SeasonParams {
  page?: number;
  limit?: number;
  filter?: 'airing' | 'upcoming' | 'bypopularity' | 'favorite';
  sfw?: boolean;
}

export interface ScheduleParams {
  page?: number;
  limit?: number;
  filter?: string;
  sfw?: boolean;
}

export interface AnimeReviewsParams {
  page?: number;
  preliminary?: boolean;
  spoiler?: boolean;
}
