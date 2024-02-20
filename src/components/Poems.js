"use client";
import { getPoems } from "@/services/feeds";
import { useEffect, useState } from "react";
import Poem from "./Poem";

export default function Poems({ tag, onPoemSelect, onSetPoemTag }) {
  const [poems, setPoems] = useState([]);
  useEffect(() => {
    getPoems(tag).then((poems) => setPoems(poems));
  }, [tag]);

  return (
    <div className="cards">
      {poems.map((poem, index) => (
        <Poem
          {...poem}
          key={`poem___${poem.title}___${index}`}
          onPoemOpen={() => onPoemSelect(poem)}
          onTagChange={(tag) => onSetPoemTag(tag)}
        />
      ))}
    </div>
  );
}
