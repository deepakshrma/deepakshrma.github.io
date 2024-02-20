"use client";
import { sendGAEvent } from "@next/third-parties/google";
import { MAX_POEM_LINES } from "@/services/feeds";
import { filterTags, cls, trimText } from "@/services/util";
import ShareControl from "./ShareControl";
import Image from "./Image";

export default function Poem({ title, lines, author, full, onPoemOpen, onTagChange }) {
  const filteredTags = filterTags(title, null, 4);
  const media = `https://source.unsplash.com/300x200/?${filteredTags}`;
  const isBig = lines.length > MAX_POEM_LINES;
  const body = full ? lines.join("\n") : lines.slice(0, MAX_POEM_LINES).join("\n");
  return (
    <div className={cls({ card: true, poem: true, full })}>
      <ShareControl enableCopy title={title} text={`### ${title} ###\n\n${body}\n\n\n\t\tAuthor: ${author}\n\n`} tag="Poem" />
      <Image src={media} />
      <div className="content">
        <h3 title={title}>{trimText(title)}</h3>
        <pre>{body}</pre>
        <small className="secondary-text">
          <b>Author: </b> {author}
        </small>
        <div className="tags">
          {filteredTags.map((tag) => (
            <span
              className="tag"
              key={`${title}__tag___${tag}__`}
              onClick={() => {
                if (full) return;
                sendGAEvent({ event: "poemSearch", value: tag });
                onTagChange(tag);
              }}
            >
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
