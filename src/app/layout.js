import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

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
      <body className={inter.className}>
        <nav>
          <img src="logo.svg" />
          <h2>Decipher.dev</h2>
          <a href="/">Home</a>
          <a href="/aboutme">About me</a>
        </nav>
        <main>{children}</main>
      </body>
    </html>
  );
}
