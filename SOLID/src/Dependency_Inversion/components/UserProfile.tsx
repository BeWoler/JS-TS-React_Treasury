import { useState, useEffect } from "react";
import { FetchHttpClient } from "../services/FetchHttpClient";
import { UserService } from "../services/UserService";

// We have created an abstraction (HttpService) 
// on which both UserService and HttpClient now depend

// UserService now depends on an interface rather than a specific class

// Now we can easily replace FetchHttpClient 
// with another HTTP client (such as AxiosHttpClient) without changing the UserService

// Easy to test: we can substitute HttpService mocs in tests

export const UserProfile = () => {
  const [user, setUser] = useState<{ name: string } | null>(null);

  // Inject the dependency through the constructor

  const httpClient = new FetchHttpClient();
  const service = new UserService(httpClient);

  useEffect(() => {
    service.fetchUser().then(setUser);
  }, []);

  return <div>{user ? `User: ${user.name}` : "Loading..."}</div>;
};
