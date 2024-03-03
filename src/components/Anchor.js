import { sendGAEvent } from "@next/third-parties/google";

export default function Anchor({ linkId, ...props }) {
  return (
    <a
      {...props}
      onClick={() => sendGAEvent({ event: "click", value: linkId })}
    />
  );
}
