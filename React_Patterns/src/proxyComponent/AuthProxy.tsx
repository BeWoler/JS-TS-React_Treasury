import { ReactNode } from "react";

export const AuthProxy = ({
  isAuthenticated,
  children,
}: {
  isAuthenticated: boolean;
  children: ReactNode;
}) => {
  if (!isAuthenticated) {
    return <p>Not authorized!</p>;
  }

  return <>{children}</>;
};
