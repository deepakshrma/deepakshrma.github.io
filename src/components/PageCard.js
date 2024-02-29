"use client";
import { trimText } from "@/services/util";
import ShareControl from "./ShareControl";
import Image from "./Image";
import Anchor from "./Anchor";

export default function PageCard({ title, img, description, link }) {
  return (
    <div className="card">
      <ShareControl
        title={title}
        text={`${title}\n\n${description}`}
        tag="Link"
        url={link}
      />
      <Anchor href={link} target="_blank" linkId={`showcase_clicked_${title}`}>
        <Image src={img} />
      </Anchor>
      <div className="content">
        <h3 title={title}>{trimText(title)}</h3>
        <p>{description}</p>
      </div>
      <Anchor
        href={link}
        target="_blank"
        className="button control"
        linkId={`showcase_clicked_${title}`}
      >
        Read more
      </Anchor>
    </div>
  );
}
