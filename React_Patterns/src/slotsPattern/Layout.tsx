import { ReactNode } from "react";

export const Layout = ({
  header,
  sidebar,
  content,
}: {
  header: ReactNode;
  sidebar: ReactNode;
  content: ReactNode;
}) => {
  return (
    <div className='layout'>
      <header>{header}</header>
      <aside>{sidebar}</aside>
      <main>{content}</main>
    </div>
  );
};
