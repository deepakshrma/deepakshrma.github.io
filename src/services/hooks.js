import { debounce } from "@deepakvishwakarma/ts-util";
import { useEffect, useState } from "react";

export function useWindowProps() {
  const [props, setProps] = useState({ isShareEnable: false, href: "" });
  useEffect(() => {
    setProps({
      isShareEnable:
        location.host.includes("localhost") ||
        typeof navigator.share === "function",
      href: location.href,
    });
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

export function useLocalStorage(key, def) {
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
  const onResize = debounce(() => {
    setState(
      /iphone|ipod|android|ie|blackberry|fennec/.test(
        navigator.userAgent.toLowerCase(),
      ) || window.innerWidth < 640,
    );
  });
  useEffect(() => {
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);
  return isMobile;
};
