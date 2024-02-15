"use client";

import { useRest } from "@/services/hooks";
import { useEffect } from "react";

export default function Home() {
  const {
    data: { isFetching, error, data },
    request,
  } = useRest();
  useEffect(() => {
    request("https://api.quotable.io/quotes/random?tags=love|inspirational|motivational|passion|self-care");
  }, []);

  const quote = data?.[0];
  if (isFetching || error || !quote) return null;
  return (
    <div className="container organize">
      <div className="full-cover" style={{ backgroundImage: `url(https://source.unsplash.com/1200x800/?${quote?.tags})` }}></div>
      <div className="quote">
        <blockquote>{quote.content}</blockquote>
        <i className="author">{`- ${quote.author}`}</i>
      </div>
    </div>
  );
}
