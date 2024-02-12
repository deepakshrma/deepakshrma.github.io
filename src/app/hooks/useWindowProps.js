import { useEffect, useState } from "react";

function useWindowProps() {
  const [props, setProps] = useState({ isShareEnable: false, href: "" });
  useEffect(() => {
    setProps({ isShareEnable: location.host.includes("localhost") || typeof navigator.share === "function", href: location.href });
  }, []);
  return props;
}
export default useWindowProps;
