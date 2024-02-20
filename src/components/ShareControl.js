"use client";
import { useWindowProps } from "../services/hooks";
import { copyToClipboard, share } from "@/services/util";

export default function ShareControl({
  title,
  text,
  tag,
  enableCopy = false,
  url,
}) {
  const { isShareEnable, href } = useWindowProps();
  return (
    <div className="share-control">
      {enableCopy && (
        <i
          className="copy bi bi-clipboard-check-fill"
          onClick={() => copyToClipboard(text)}
        ></i>
      )}
      {isShareEnable && (
        <i
          className="share bi bi-share-fill"
          onClick={() => share({ title, text, tag, url: url || href })}
        ></i>
      )}
    </div>
  );
}
