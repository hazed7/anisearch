export interface Pagination {
  last_visible_page: number;
  has_next_page: boolean;
  current_page: number;
  items: {
    count: number;
    total: number;
    per_page: number;
  };
}

export interface JikanResponse<T> {
  pagination: Pagination;
  data: T[];
}

export interface Image {
  jpg: {
    image_url: string;
    small_image_url?: string;
    large_image_url?: string;
  };
  webp: {
    image_url: string;
    small_image_url?: string;
    large_image_url?: string;
  };
}

export enum SortDirection {
  Ascending = 'asc',
  Descending = 'desc'
}
