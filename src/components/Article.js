"use client";
import { filterTags, trimText } from "@/services/util";
import ShareControl from "./ShareControl";

export default function Article({ title, href, tags, imageUrl, description, body = description, media, updateAt }) {
  const filteredTags = filterTags(title, tags).join(",");
  media = imageUrl || `https://source.unsplash.com/400x300/?${filteredTags ? filteredTags : "random"}`;
  return (
    <div className="card">
      <ShareControl title={title} text={`${title}\n\n${body.slice(0, 120)}\n\n`} tag="Article" url={href} />
      <a href={href} target="_blank">
        <img src={media} />
      </a>
      <div className="content">
        <h3 title={title}>{trimText(title)}</h3>
        <p>{body}</p>
        <small className="time">
          <b>Last Update: </b> {updateAt}
        </small>
        <small className="tags">
          <b>Tags </b> {filteredTags}
        </small>
      </div>
      <a href={href} target="_blank" className="button control">
        Learn more
      </a>
    </div>
  );
}
