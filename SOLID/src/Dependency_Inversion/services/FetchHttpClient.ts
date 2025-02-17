import { IHttpService } from "./HttpService";

export class FetchHttpClient implements IHttpService {
  async fetch(url: string) {
    const res = await fetch(url);
    return await res.json();
  }
}
