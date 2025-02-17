import { IUserActions } from "./type";

// The GuestProfile component is forced to 
// implement the login() method, which it doesn't need

// This contradicts the SRP (Single Responsibility Principle) 
// because the interface contains several unrelated responsibilities

// If there are other types of users in the future, 
// the whole interface will have to be changed, which makes support more complicated

export const UserProfile = (): IUserActions => {
  return {
    fetchUser: () => console.log("Fetching user"),
    updateUser: () => console.log("Updating user"),
    login: () => console.log("Logging in"),
  };
}

// Forced to implement an unnecessary login() method
// Guests don't need a login

export const GuestProfile = (): IUserActions => {
  return {
    fetchUser: () => console.log("Fetching guest"),
    updateUser: () => console.log("Updating guest"),
    login: () => {
      throw new Error("Guests cannot log in!");
    },
  };
}