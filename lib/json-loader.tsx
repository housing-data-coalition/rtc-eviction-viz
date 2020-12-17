import { useEffect, useState } from "react";

export function JsonLoader<T>(props: {
  url: string,
  fallback: JSX.Element,
  children: (data: T) => JSX.Element,
}): JSX.Element {
  const { url } = props;
  const [data, setData] = useState<T|null>(null);

  useEffect(() => {
    fetch(url).then(res => {
      if (res.ok) {
        res.json().then(resData => {
          setData(resData);
        });
      }
    });
  }, [url]);

  if (data === null) return props.fallback;

  return props.children(data);
}
