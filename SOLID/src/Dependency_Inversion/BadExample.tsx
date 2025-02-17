// High-level modules should not depend on low-level modules
// Both should depend on abstractions
// Abstractions should not depend on details. Details should depend on abstractions

// UserService is tightly bound to HttpClient 
// If we want to replace HttpClient with another HTTP client (e.g. axios), 
// we will have to change the UserService code

// The high-level module (UserService) depends on the low-level 
// module (HttpClient) directly, which violates the DIP principle

// Dependencies cannot be easily tested or substituted because there is no abstraction

import { useEffect, useState } from "react";

class HttpClient {
  async fetch(url: string) {
    const res = await fetch(url);
    return await res.json();
  }
}

// The high-level module is directly dependent on HttpClient

class UserService {
  private httpClient = new HttpClient();

  fetchUser() {
    return this.httpClient.fetch("/api/user");
  }
}

export function UserProfile() {
  const [user, setUser] = useState<{ name: string } | null>(null);

  useEffect(() => {
    const service = new UserService();
    service.fetchUser().then(setUser);
  }, []);

  return <div>{user ? `User: ${user.name}` : "Loading..."}</div>;
}
