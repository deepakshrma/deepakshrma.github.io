"use client";

import { useEffect, useState } from "react";
import "./../app.css";

export default function Home() {
  return (
    <div className="bg-white flex min-h-screen flex-col items-center  p-12">
      <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
        Deepak Vishwakarma, Singapore
      </h1>
      <p>
        With over 12 years of software development experience and a passion for blockchain technology, I am a Lead Software Engineer at
        JPMorgan Chase, where I create innovative and secure solutions for enterprise applications. I have a strong background in developing
        and deploying smart contracts on Ethereum and Quorum, designing and implementing private blockchain networks, and integrating
        blockchain solutions with existing enterprise systems and APIs.
      </p>
      <br />
      <p>
        In my current role, I also lead the migration of multiple micro-services to AWS cloud production, using Terraform and other cloud
        technologies. Additionally, I work with various frontend and backend technologies, such as React, Kotlin, Node.js, and Golang, to
        build performant and user-friendly applications. I enjoy collaborating with cross-functional teams, communicating technical concepts
        effectively, and solving complex problems creatively. I am always eager to learn new skills and explore the potential of blockchain
        to transform various domains and industries, such as finance, supply chain, and healthcare.
      </p>
    </div>
  );
}
