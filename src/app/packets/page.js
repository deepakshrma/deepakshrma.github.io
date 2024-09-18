"use client";
import { useEffect, useState } from "react";
import { randomInt } from "@deepakvishwakarma/ts-util";

const mask = (str = "") => str.replace(/Chuck( Norris)?/g, "The Chief");
const dim = ([w, h] = [400, 400]) => {
  if (w > 400) {
    const f = (w - 400) / w;
    return [400, h - Math.floor(h * f)];
  }
  return [w, h];
};
export default function Home() {
  const [joke, setJoke] = useState({});
  const [gif, setGifUrl] = useState({});
  const fetchJoke = async () => {
    const categories = await fetch(
      "https://api.chucknorris.io/jokes/categories",
    ).then((res) => res.json());
    const i = randomInt(0, categories.length - 1);
    const category = categories[i];
    console.info("category", category);
    const res = await fetch(
      `https://g.tenor.com/v1/search?q=${category}&key=LIVDSRZULELA&limit=2`,
    ).then((res) => res.json());
    setGifUrl(res?.results?.[0]?.media?.[0]?.gif);
    const joke = await fetch(
      `https://api.chucknorris.io/jokes/random?category=${category}`,
    ).then((res) => res.json());
    setJoke(joke);
  };
  useEffect(() => {
    fetchJoke();
  }, []);

  return (
    <div
      className="container"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "0 100px",
      }}
    >
      `<h1>The Chief&apos;s Joke</h1>
      <br />
      {gif.url ? (
        <img
          src={gif.url}
          alt="gif"
          width={dim(gif.dims)[0]}
          height={dim(gif.dims)[1]}
        />
      ) : (
        <img width={300} height={400} />
      )}
      <br />
      {joke.value ? (
        <h4
          style={{
            fontFamily: `"Open Sans", "serif", "sans-serif", "cursive", "fantasy"`,
            fontStyle: "italic",
          }}
        >
          {mask(joke.value)}
        </h4>
      ) : (
        <p>loading...</p>
      )}
      <br />
      <br />
      <button className={"button"} onClick={fetchJoke}>
        Refresh
      </button>
    </div>
  );
}
