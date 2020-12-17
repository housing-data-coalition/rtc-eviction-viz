import { useEffect, useState } from "react";

/** 
 * Global singleton to cache all our data requests.
 */
const requests = new Map<string, Promise<any>>();

function getRequest(url: string): Promise<any> {
  let request = requests.get(url);
  if (!request) {
    request = fetch(url).then(res => {
      if (!res.ok) {
        throw new Error(`Got HTTP ${res.status} when fetching ${url}`);
      }
      return res.json();
    });
    requests.set(url, request);
  }
  return request;
}

/**
 * Lazily-load a JSON file, showing the given fallback component until
 * the loading is complete.
 * 
 * Once the loading is complete, the child is rendered and passed
 * the loaded data.
 * 
 * NOTE: At present, the data, once loaded, is never freed.
 */
export function JsonLoader<T>(props: {
  url: string,
  fallback: JSX.Element,
  children: (data: T) => JSX.Element,
}): JSX.Element {
  const { url } = props;
  const [data, setData] = useState<T|null>(null);

  useEffect(() => {
    getRequest(url).then(data => {
      setData(data);
    });
  }, [url]);

  if (data === null) return props.fallback;

  return props.children(data);
}
