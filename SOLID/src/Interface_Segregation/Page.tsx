import { IAuthActions, IUserData } from "./type";

// The interface is divided into separate parts (UserData and AuthActions) 
// and each component implements only the necessary methods

// GuestProfile is no longer forced to implement login() 
// because it does not depend on an unnecessary interface

// The code is now more readable, flexible and easy to maintain

// A typical user implements both interfaces

export const UserProfile = (): IUserData & IAuthActions => {
  return {
    fetchUser: () => console.log("Fetching user"),
    updateUser: () => console.log("Updating user"),
    login: () => console.log("Logging in"),
  };
}

// The guest user implements only the required interface

export const GuestProfile = (): IUserData => {
  return {
    fetchUser: () => console.log("Fetching guest"),
    updateUser: () => console.log("Updating guest"),
  };
}