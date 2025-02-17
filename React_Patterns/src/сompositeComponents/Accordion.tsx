import { ReactNode } from "react";

export const Accordion = ({ children }: { children: ReactNode }) => {
  return <div className='accordion'>{children}</div>;
};
