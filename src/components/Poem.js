"use client";
import { MAX_POEM_LINES } from "@/services/feeds";
import { filterTags, cls, trimText } from "@/services/util";
import ShareControl from "./ShareControl";

export default function Poem({ title, lines, author, full, onPoemOpen, onTagChange }) {
  const filteredTags = filterTags(title, null, 3);
  const media = `https://source.unsplash.com/600x400/?${filteredTags}`;
  const isBig = lines.length > MAX_POEM_LINES;
  const body = full ? lines.join("\n") : lines.slice(0, MAX_POEM_LINES).join("\n");
  return (
    <div className={cls({ card: true, poem: true, full })}>
      <ShareControl enableCopy title={title} text={`### ${title} ###\n\n${body}\n\n\n\t\tAuthor: ${author}\n\n`} tag="Poem" />
      <div className="cover" style={{ backgroundImage: `url(${media})` }} />
      <div className="content">
        <h3 title={title}>{trimText(title)}</h3>
        <pre>{body}</pre>
        <small className="time">
          <b>Author: </b> {author}
        </small>
        <div className="tags">
          {filteredTags.map((tag) => (
            <span className="tag" key={`${title}__tag___${tag}__`} onClick={() => !full && onTagChange(tag)}>
              #{tag}
            </span>
          ))}
        </div>
        {isBig && !full && (
          <button className="button control read-more" onClick={onPoemOpen}>
            Full Poem
          </button>
        )}
      </div>
    </div>
  );
}
