import { sendGTMEvent } from "@next/third-parties/google";

export default function Anchor({ linkId, ...props }) {
  return (
    <a
      {...props}
      onClick={() => sendGTMEvent({ event: "link_clicked", value: linkId })}
    />
  );
}
