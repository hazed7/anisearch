import type {
	Anime,
	AnimeDetailed,
	AnimeReviewsParams,
	AnimeSearchParams,
	Character,
	JikanResponse,
	Person,
	RecommendationsParams,
	Review,
	ScheduleParams,
	SeasonParams,
	TopAnimeParams
} from '@/types/jikan';
import { JikanApiBase } from './base';

export class AnimeApi extends JikanApiBase {
  public async searchAnime(params?: AnimeSearchParams): Promise<JikanResponse<Anime>> {
    const url = this.buildUrl('/anime', params);
    return this.request<JikanResponse<Anime>>(url);
  }

  public async getAnime(id: number): Promise<{ data: AnimeDetailed }> {
    return this.request<{ data: AnimeDetailed }>(`/anime/${id}/full`);
  }

  public async getTopAnime(params?: TopAnimeParams): Promise<JikanResponse<Anime>> {
    const url = this.buildUrl('/top/anime', params);
    return this.request<JikanResponse<Anime>>(url);
  }

  public async getSeasonAnime(
    year: number,
    season: string,
    params?: SeasonParams
  ): Promise<JikanResponse<Anime>> {
    const url = this.buildUrl(`/seasons/${year}/${season}`, params);
    return this.request<JikanResponse<Anime>>(url);
  }

  public async getCurrentSeasonAnime(params?: SeasonParams): Promise<JikanResponse<Anime>> {
    const url = this.buildUrl('/seasons/now', params);
    return this.request<JikanResponse<Anime>>(url);
  }

  public async getUpcomingSeasonAnime(params?: SeasonParams): Promise<JikanResponse<Anime>> {
    const url = this.buildUrl('/seasons/upcoming', params);
    return this.request<JikanResponse<Anime>>(url);
  }

  public async getAnimeSchedule(params?: ScheduleParams): Promise<JikanResponse<Anime>> {
    const url = this.buildUrl('/schedules', params);
    return this.request<JikanResponse<Anime>>(url);
  }

  public async getAnimeRecommendations(
    id: number,
    params?: RecommendationsParams
  ): Promise<JikanResponse<{ entry: Anime; votes: number }>> {
    const url = this.buildUrl(`/anime/${id}/recommendations`, params);
    return this.request<JikanResponse<{ entry: Anime; votes: number }>>(url);
  }

  public async getAnimeCharacters(id: number): Promise<
    { data: Array<{ character: Character; role: string; favorites: number; voice_actors: Array<{ person: Person; language: string }> }> }
  > {
    return this.request<{
      data: Array<{
        character: Character;
        role: string;
        favorites: number;
        voice_actors: Array<{
          person: Person;
          language: string
        }>
      }>
    }>(`/anime/${id}/characters`);
  }

  public async getAnimeReviews(
    id: number,
    params?: AnimeReviewsParams
  ): Promise<JikanResponse<Review>> {
    const url = this.buildUrl(`/anime/${id}/reviews`, params);
    return this.request<JikanResponse<Review>>(url);
  }

  public async getAnimeStaff(id: number): Promise<
    { data: Array<{ person: Person; positions: string[] }> }
  > {
    return this.request<{
      data: Array<{
        person: Person;
        positions: string[]
      }>
    }>(`/anime/${id}/staff`);
  }

  public async getRandomAnime(): Promise<{ data: Anime }> {
    return this.request<{ data: Anime }>('/random/anime');
	}

	public async getAnimeGenres(): Promise<
	{
		data: Array<{
			mal_id: number;
			name: string;
			url: string;
			count: number
		}>
	}> {
		return this.request<{
			data: Array<{
				mal_id: number;
				name: string;
				url: string;
				count: number;
			}>
		}>('/genres/anime');
	}
}
