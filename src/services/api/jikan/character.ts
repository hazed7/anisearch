import type {
	Character,
	CharacterDetailed,
	CharacterSearchParams,
	JikanResponse
} from '@/types/jikan';
import { JikanApiBase } from './base';

export class CharacterApi extends JikanApiBase {
  public async searchCharacters(
    params?: CharacterSearchParams
  ): Promise<JikanResponse<Character>> {
    const url = this.buildUrl('/characters', params);
    return this.request<JikanResponse<Character>>(url);
  }

  public async getCharacter(id: number): Promise<{ data: CharacterDetailed }> {
    return this.request<{ data: CharacterDetailed }>(`/characters/${id}/full`);
  }

  public async getRandomCharacter(): Promise<{ data: Character }> {
    return this.request<{ data: Character }>('/random/characters');
  }
}
