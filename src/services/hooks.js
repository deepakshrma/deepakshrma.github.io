import { useEffect, useState } from "react";

export function useWindowProps() {
  const [props, setProps] = useState({ isShareEnable: false, href: "" });
  useEffect(() => {
    setProps({ isShareEnable: location.host.includes("localhost") || typeof navigator.share === "function", href: location.href });
  }, []);
  return props;
}

export function useKeyPress(fn, key = "Escape", ctr = false) {
  const onKeyDown = (e) => {
    if (e.code === key && (ctr ? e.ctrlKey === true : true)) {
      fn(e);
    }
  };
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

export function useLocalStorage(key, def) {
  if (typeof localStorage === "undefined") return [];
  const [data, setData] = useState(def);
  const setItem = (data) => {
    localStorage[key] = JSON.stringify(data);
    setData(data);
  };
  useEffect(() => {
    if (localStorage[key]) {
      setData(JSON.parse(localStorage[key]));
    }
  }, []);
  return [data, setItem];
}

export const useMobile = () => {
  const [isMobile, setState] = useState();
  useEffect(() => {
    setState(/iphone|ipod|android|ie|blackberry|fennec/.test(navigator.userAgent.toLowerCase()));
  }, []);
  return isMobile;
};
