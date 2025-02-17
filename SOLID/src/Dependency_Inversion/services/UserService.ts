import { IHttpService } from "./HttpService";

export class UserService {
  // Gets the dependency via the constructor
  constructor(private httpClient: IHttpService) {}

  fetchUser() {
    return this.httpClient.fetch("/api/user");
  }
}
