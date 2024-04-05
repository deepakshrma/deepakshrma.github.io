import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.scss";
import Body from "../components/Body";
// const Body = dynamic(() => import("../components/body"), { ssr: false });

export const metadata = {
  // metadataBase: new URL('https://decipher.dev'),
  title:
    "Deepak Vishwakarma, Lead Software Engineer at JPMorgan Chase & Co. | Blockchain Technology Expert and Tech Leader ",
  openGraph: {
    title: "Decipher.dev",
    description:
      "Deepak Vishwakarma, Lead Software Engineer at JPMorgan Chase & Co.",
    url: "https://decipher.dev/",
    siteName: "Decipher.dev",
    images: [
      {
        url: "https://avatars.githubusercontent.com/u/7682731?v=4", // Must be an absolute URL
        width: 800,
        height: 600,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  description: ` Lead Software Engineer with 12+ years of experience developing solutions for enterprise applications. Proficient in blockchain
    tech, cloud migration, full-stack development, leadership, problem-solving, quality assurance, and adaptability. Passionate about
    continuous learning and exploring new opportunities to push the boundaries of technology.`,
};

// export async function generateMetadata({ params, searchParams }, parent) {
//   console.log({ params, searchParams });
//   console.log(await parent);
//   return
// }
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="favicon.svg" sizes="any" />
      </head>
      <Body child={children} />
      <GoogleAnalytics gaId="G-VX1V9NRMDC" />
    </html>
  );
}
