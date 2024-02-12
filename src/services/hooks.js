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
