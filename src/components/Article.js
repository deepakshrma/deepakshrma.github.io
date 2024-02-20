"use client";
import { filterTags, trimText } from "@/services/util";
import ShareControl from "./ShareControl";
import Image from "./Image";

export default function Article({
  title,
  href,
  categories,
  imageUrl,
  description,
  body = description,
  media,
  updateAt,
  author,
  source = "medium",
}) {
  const filteredTags = filterTags(title, categories);
  media =
    imageUrl ||
    `https://source.unsplash.com/300x200/?${filteredTags ? filteredTags : "random"}`;
  return (
    <div className="card">
      <ShareControl
        title={title}
        text={`${title}\n\n${body.slice(0, 120)}\n\n`}
        tag="Article"
        url={href}
      />
      <a href={href} target="_blank">
        <Image src={media} />
      </a>
      <div className="content">
        <h3 title={title}>{trimText(title)}</h3>
        <p>{body}</p>
        <small className="secondary-text">
          <b>Last Update: </b> {updateAt}
        </small>
        <small className="secondary-text">
          <b>Author: </b> {author ?? "Deepak Vishwakarma"}
        </small>
        <small className="secondary-text">
          <b>Source: </b> {source}
        </small>
        <div className="tags">
          {filteredTags.map((tag) => (
            <a
              className="tag"
              target="_blank"
              key={`${title}__tag___${tag}__`}
              href={`https://${source}.com/search?q=${tag}`}
            >
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
