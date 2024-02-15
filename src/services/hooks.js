import { useEffect, useState } from "react";

export function useWindowProps() {
  const [props, setProps] = useState({ isShareEnable: false, href: "" });
  useEffect(() => {
    setProps({ isShareEnable: location.host.includes("localhost") || typeof navigator.share === "function", href: location.href });
  }, []);
  return props;
}

export function useKeyPress(fn, key = "Escape") {
  const onKeyDown = (e) => e.key === key && fn(e);
  useEffect(() => {
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);
}
export function useRest() {
  const [data, setData] = useState({ isFetching: false, error: null, data: null });
  const request = async (url, data = null) => {
    try {
      setData({ isFetching: true });
      const d = await fetch(url, {
        mode: "cors",
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      }).then((x) => x.json());
      setData({ isFetching: false, data: d, error: null });
    } catch (error) {
      setData({ isFetching: false, data: null, error });
    }
  };
  return { data, request };
}
