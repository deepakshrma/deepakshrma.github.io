"use client";

export default function FreeBooks() {
  const books = [
    {
      title: "Blockchain Basics: A Guide to Ethereum and Beyond",
      link: "https://decipher.dev/ai-books-blockchain-basics/",
      cover:
        "https://media.mkpcdn.com/prod/1000x/80366446f96abe81684981d19f766f93_793542.jpg",
      description:
        "journey to unravel the intricacies of blockchain technology, focusing particularly on Ethereum and its transformative impact on decentralized applications (DApps), smart contracts, and the broader blockchain ecosystem.",
    },
  ];

  return (
    <div className="container concise">
      <h1 style={{ textAlign: "center" }}>Books</h1>
      <p>
        I am excited to share with you that I have recently started writing
        books on multiple topics using Generative AI. This cutting-edge
        technology has allowed me to delve into various fields of study to
        expand my knowledge and also offer valuable insights to readers.
      </p>
      <p>
        My primary goal is to help others learn and spread knowledge. I believe
        that by sharing my insights, I can inspire others to take an interest in
        these topics and broaden their understanding. The topics I have covered
        range from technology to business to current events and more.
      </p>
      <p>
        If you are interested in reading these books, I invite you to check them
        out and provide me with feedback or recommendations. Your insights will
        help me improve my writing and inspire me to continue sharing my
        knowledge with others.
      </p>
      <div className="books">
        {books.map(({ title, link, description = "", cover }) => {
          return (
            <div key={`book___${title}`} className="book">
              <a href={link} target="_blank" className="cover">
                <img src={cover} alt={title} />
              </a>{" "}
              <h3>{title}</h3>
              <p>{description}</p>
              <a className="button" href={link} target="_blank">
                Read Book
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}
