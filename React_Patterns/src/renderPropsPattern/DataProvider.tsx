import { JSX, useEffect, useState } from "react";

export const DataProvider = ({
  render,
}: {
  render: (data: string[]) => JSX.Element;
}) => {
  const [data, setData] = useState<string[]>([]);

  useEffect(() => {
    setTimeout(() => {
      setData(["Data 1", "Data 2", "Data 3"]);
    }, 1000);
  }, []);

  return <div>{render(data)}</div>;
};
