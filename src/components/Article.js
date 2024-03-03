"use client";
import { filterTags, trimText } from "@/services/util";
import ShareControl from "./ShareControl";
import Image from "./Image";
import Anchor from "./Anchor";

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
      <Anchor href={href} target="_blank" linkId={`article_clicked_${title}`}>
        <Image src={media} />
      </Anchor>
      <div className="content">
        <ShareControl
          enableCopy
          title={trimText(title)}
          text={`### ${title} ###\n\n${body}\n\n\t\tAuthor: ${author}\n\t\tSource: ${source}\n\n`}
          tag="Blog"
          url={href}
        />
        <h3 title={title}>{trimText(title)}</h3>
        <p>{body}</p>
        <small className="secondary-text">
          <b>Published At: </b> {updateAt}
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
      <Anchor
        href={href}
        target="_blank"
        className="button control"
        linkId={`article_clicked_${title}`}
      >
        Learn more
      </Anchor>
    </div>
  );
}
