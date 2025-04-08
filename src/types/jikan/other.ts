export interface Review {
  mal_id: number;
  url: string;
  type: string;
  reactions: {
    overall: number;
    nice: number;
    love_it: number;
    funny: number;
    confusing: number;
    informative: number;
    well_written: number;
    creative: number;
  };
  date: string;
  review: string;
  score: number;
  tags: string[];
  is_spoiler: boolean;
  is_preliminary: boolean;
  episodes_watched: number | null;
  user: {
    url: string;
    username: string;
    images: {
      jpg: {
        image_url: string;
      };
      webp: {
        image_url: string;
      };
    };
  };
}

export interface RecommendationsParams {
  page?: number;
}

export interface UserUpdateParams {
  status?: 'watching' | 'completed' | 'on_hold' | 'dropped' | 'plan_to_watch';
  score?: number;
  episodes_watched?: number;
  is_rewatching?: boolean;
  start_date?: string; // YYYY-MM-DD
  finish_date?: string; // YYYY-MM-DD
  priority?: number;
  tags?: string;
  comments?: string;
}
