import { useState, useEffect, ReactNode } from "react";

export const DataFetcher = ({
  url,
  children,
}: {
  url: string;
  children: (data: string, loading: boolean) => ReactNode;
}) => {
  const [data, setData] = useState<string>("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((result) => {
        setData(result);
        setLoading(false);
      });
  }, [url]);

  return <>{children(data, loading)}</>;
};
