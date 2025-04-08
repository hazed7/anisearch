import axios, { type AxiosInstance, type AxiosRequestConfig } from 'axios';

export class JikanApiBase {
  protected readonly api: AxiosInstance;
  private readonly baseUrl = 'https://api.jikan.moe/v4';
  private readonly rateLimitDelay = 1000;
  private lastRequestTime = 0;

  constructor() {
    this.api = axios.create({
      baseURL: this.baseUrl,
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json',
      }
    });

    this.api.interceptors.request.use(async (config) => {
      const now = Date.now();
      const timeSinceLastRequest = now - this.lastRequestTime;

      if (timeSinceLastRequest < this.rateLimitDelay) {
        const delay = this.rateLimitDelay - timeSinceLastRequest;
        await new Promise(resolve => setTimeout(resolve, delay));
      }

      this.lastRequestTime = Date.now();
      return config;
    });
  }

  protected buildUrl(endpoint: string, params?: Record<string, any>): string {
    if (!params) return endpoint;

    const queryParams = new URLSearchParams();

    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined && value !== null) {
        if (Array.isArray(value)) {
          value.forEach(item => queryParams.append(key, item.toString()));
        } else {
          queryParams.append(key, value.toString());
        }
      }
    });

    const queryString = queryParams.toString();
    return queryString ? `${endpoint}?${queryString}` : endpoint;
  }

  protected async request<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    try {
      const response = await this.api.get<T>(url, config);
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response?.status === 429) {
          console.warn('Rate limit exceeded, retrying after delay');
          await new Promise(resolve => setTimeout(resolve, this.rateLimitDelay * 2));
          return this.request<T>(url, config);
        }

        throw new Error(`API Error: ${error.response?.status} - ${error.response?.data?.message || error.message}`);
      }
      throw error;
    }
  }
}
