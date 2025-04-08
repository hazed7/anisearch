import type {
	Character,
	JikanResponse,
	Manga,
	MangaReviewsParams,
	MangaSearchParams,
	RecommendationsParams,
	Review,
	TopMangaParams
} from '@/types/jikan';
import { JikanApiBase } from './base';

export class MangaApi extends JikanApiBase {
  public async searchManga(params?: MangaSearchParams): Promise<JikanResponse<Manga>> {
    const url = this.buildUrl('/manga', params);
    return this.request<JikanResponse<Manga>>(url);
  }

  public async getManga(id: number): Promise<{ data: Manga }> {
    return this.request<{ data: Manga }>(`/manga/${id}/full`);
  }

  public async getTopManga(params?: TopMangaParams): Promise<JikanResponse<Manga>> {
    const url = this.buildUrl('/top/manga', params);
    return this.request<JikanResponse<Manga>>(url);
  }

  public async getMangaRecommendations(
    id: number,
    params?: RecommendationsParams
  ): Promise<JikanResponse<{ entry: Manga; votes: number }>> {
    const url = this.buildUrl(`/manga/${id}/recommendations`, params);
    return this.request<JikanResponse<{ entry: Manga; votes: number }>>(url);
  }

  public async getMangaCharacters(id: number): Promise<
    { data: Array<{ character: Character; role: string }> }
  > {
    return this.request<{
      data: Array<{
        character: Character;
        role: string
      }>
    }>(`/manga/${id}/characters`);
  }

  public async getMangaReviews(
    id: number,
    params?: MangaReviewsParams
  ): Promise<JikanResponse<Review>> {
    const url = this.buildUrl(`/manga/${id}/reviews`, params);
    return this.request<JikanResponse<Review>>(url);
  }

  public async getRandomManga(): Promise<{ data: Manga }> {
    return this.request<{ data: Manga }>('/random/manga');
  }

  public async getMangaGenres(): Promise<{ data: Array<{ mal_id: number; name: string; url: string; count: number }> }> {
    return this.request<{
      data: Array<{
        mal_id: number;
        name: string;
        url: string;
        count: number
      }>
    }>('/genres/manga');
  }
}
