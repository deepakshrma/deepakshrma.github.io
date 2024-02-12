import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";
import Body from "../components/B";
// const Body = dynamic(() => import("../components/body"), { ssr: false });

export const metadata = {
  title: "Deepak Vishwakarma, Lead Software Engineer at JPMorgan Chase & Co. | Blockchain Expert",
  description:
    "With over 12 years of software development experience and a passion for blockchain technology, I am a Lead Software Engineer at JPMorgan Chase, where I create innovative and secure solutions for enterprise applications. I have a strong background in developing and deploying smart contracts on Ethereum and Quorum, designing and implementing private blockchain networks, and integrating blockchain solutions with existing enterprise systems and APIs.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="favicon.svg" sizes="any" />
      </head>
      <Body child={children} />
      <GoogleAnalytics gaId="UA-172955705-1" />
    </html>
  );
}
