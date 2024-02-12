import React, { useCallback, useEffect, useState } from "react";

const ImageComponent = ({
  src,
  placeholderImg = "https://placehold.co/300x200/333/fff?text=...",
  errorImg = placeholderImg,
  ...props
}) => {
  const [imgSrc, setSrc] = useState(placeholderImg || src);

  const onLoad = useCallback(() => {
    setSrc(src);
  }, [src]);

  const onError = useCallback(() => {
    setSrc(errorImg || placeholderImg);
  }, [errorImg, placeholderImg]);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.addEventListener("load", onLoad);
    img.addEventListener("error", onError);
    return () => {
      img.removeEventListener("load", onLoad);
      img.removeEventListener("error", onError);
    };
  }, [src, onLoad, onError]);

  return <div {...props} className="cover" style={{ backgroundImage: `url(${imgSrc})` }} />;
};
export default ImageComponent;
