"use client";
import { filterTags, trimText } from "@/services/util";
import ShareControl from "./ShareControl";
import Image from "./Image";

export default function Article({ title, href, tags, imageUrl, description, body = description, media, updateAt }) {
  const filteredTags = filterTags(title, tags);
  media = imageUrl || `https://source.unsplash.com/400x300/?${filteredTags ? filteredTags : "random"}`;
  return (
    <div className="card">
      <ShareControl title={title} text={`${title}\n\n${body.slice(0, 120)}\n\n`} tag="Article" url={href} />
      <a href={href} target="_blank">
        <Image src={media} spinner/>
      </a>
      <div className="content">
        <h3 title={title}>{trimText(title)}</h3>
        <p>{body}</p>
        <small className="time">
          <b>Last Update: </b> {updateAt}
        </small>
        <div className="tags">
          {filteredTags.map((tag) => (
            <a className="tag" target="_blank" key={`${title}__tag___${tag}__`} href={`https://medium.com/search?q=${tag}`}>
              #{tag}
            </a>
          ))}
        </div>
      </div>
      <a href={href} target="_blank" className="button control">
        Learn more
      </a>
    </div>
  );
}
