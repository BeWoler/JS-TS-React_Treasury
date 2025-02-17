export interface IHttpService {
  fetch(url: string): Promise<{ name: string }>;
}
