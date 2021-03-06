export const requestJSON = (url: string, options?: any) => {
  if (!options) return fetch(url).then((res) => res.json());
  return fetch(url, {
    ...options,
    headers: {
      "Content-Type": "application/json",
    },
    body: options.data ? JSON.stringify(options.data) : undefined,
  }).then((res) => res.json());
};
export const openUrl = (href: string) => window.open(href, "_blank");
export const storage = (key: string, value?: string) => {
  if (typeof window !== "undefined") {
    return value
      ? localStorage.setItem(key, value)
      : localStorage.getItem(key) || "";
  }
};
