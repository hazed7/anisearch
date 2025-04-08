import { AnimeApi } from './anime';
import { CharacterApi } from './character';
import { MangaApi } from './manga';
import { PersonApi } from './person';

export class JikanApi {
  private static instance: JikanApi;

  public readonly anime: AnimeApi;
  public readonly manga: MangaApi;
  public readonly character: CharacterApi;
  public readonly person: PersonApi;

  private constructor() {
    this.anime = new AnimeApi();
    this.manga = new MangaApi();
    this.character = new CharacterApi();
    this.person = new PersonApi();
  }

  public static getInstance(): JikanApi {
    if (!JikanApi.instance) {
      JikanApi.instance = new JikanApi();
    }
    return JikanApi.instance;
  }
}

export const jikanApi = JikanApi.getInstance();
export default jikanApi;

export const animeApi = jikanApi.anime;
export const mangaApi = jikanApi.manga;
export const characterApi = jikanApi.character;
export const personApi = jikanApi.person;
