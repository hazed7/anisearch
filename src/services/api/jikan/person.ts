import type {
	JikanResponse,
	Person,
	PersonSearchParams
} from '@/types/jikan';
import { JikanApiBase } from './base';

export class PersonApi extends JikanApiBase {
  public async searchPeople(params?: PersonSearchParams): Promise<JikanResponse<Person>> {
    const url = this.buildUrl('/people', params);
    return this.request<JikanResponse<Person>>(url);
  }

  public async getPerson(id: number): Promise<{ data: Person }> {
    return this.request<{ data: Person }>(`/people/${id}/full`);
  }
}
