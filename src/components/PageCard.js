"use client";
import { trimText } from "@/services/util";
import ShareControl from "./ShareControl";
import Image from "./Image";

export default function PageCard({ title, img, description, link }) {
  return (
    <div className="card">
      <ShareControl title={title} text={`${title}\n\n${description}`} tag="Link" url={link} />
      <a href={link} target="_blank">
        <Image src={img} />
      </a>
      <div className="content">
        <h3 title={title}>{trimText(title)}</h3>
        <p>{description}</p>
      </div>
      <a href={link} target="_blank" className="button control">
        Read more
      </a>
    </div>
  );
}
