"use client";
import { useRef } from "react";

export default function Home() {
  const page = useRef(null);
  const iframe = useRef(null);
  const download = () => {
    var pri = iframe.current.contentWindow;
    pri.document.open();
    pri.document.write(page.current.innerHTML);
    pri.document.close();
    pri.focus();
    pri.print();
  };
  return (
    <div className="container concise">
      <button className="download button icon" onClick={download}>
        <i className="bi bi-download"></i>Save
      </button>
      <div className="resume" ref={page}>
        <div className="heading">
          <h1>Deepak Vishwakarma</h1>
          <div className="contacts">
            <p>
              <i className="bi bi-geo-alt-fill"></i>34 Lorong Mydin, SG 416827
            </p>
            <p>
              <i className="bi bi-phone-fill"></i>
              <a href="tel:+658124117">+65-8124-117</a>
            </p>
            <p>
              <i className="bi bi-globe"></i>
              <a href="https://decipher.dev">
                decipher.dev<i className="bi bi-box-arrow-up-right"></i>
              </a>
            </p>
            <p>
              <i className="bi bi-linkedin"></i>
              <a href="https://www.linkedin.com/in/xdeepakv/">
                xdeepakv<i className="bi bi-box-arrow-up-right"></i>
              </a>
            </p>
            <p>
              <i className="bi bi-github"></i>
              <a href="https://github.com/deepakshrma/">
                deepakshrma<i className="bi bi-box-arrow-up-right"></i>
              </a>
            </p>
          </div>
        </div>

        <p>
          With over 12 years of software development experience and a passion for blockchain technology, I am a Lead Software Engineer at
          JPMorgan Chase, where I create innovative and secure solutions for enterprise applications. I have a strong background in
          developing and deploying smart contracts on Ethereum and Quorum, designing and implementing private blockchain networks, and
          integrating blockchain solutions with existing enterprise systems and APIs.
        </p>
        <br />
        <p>
          In my current role, I also lead the migration of multiple micro-services to AWS cloud production, using Terraform and other cloud
          technologies. Additionally, I work with various frontend and backend technologies, such as React, Kotlin, Node.js, and Golang, to
          build performant and user-friendly applications. I enjoy collaborating with cross-functional teams, communicating technical
          concepts effectively, and solving complex problems creatively. I am always eager to learn new skills and explore the potential of
          blockchain to transform various domains and industries, such as finance, supply chain, and healthcare.
        </p>

        <h3>Experience</h3>
        <h2>Lead Software Engineering, Vice President</h2>
        <pre className="bold">
          {`JPMorgan Chase & Co.
Feb 2022 - Present (2 years 1 month)`}
        </pre>
        <pre>
          {`Onyx Digital Rail - Orchestration DAPP

Develop and deploy smart contracts on Ethereum and Quorum for enterprise applications.
Design and implement secure architecture for private blockchain networks using Quorum.
Integrate blockchain solutions with existing enterprise systems and APIs.
Perform unit and integration testing for smart contracts and DApps.
Contribute to the ongoing development and maintenance of blockchain infrastructure.
Leading and migrating multiple micro-services to Atlas Cloud(AWS) Production with Zero failure
Learning in-depth Terraform and solving multiple issues
Improve the performance E2E assertion framework

Programmable Payment

Build frontend framework on top of Native Web Component/Lit Element
Requirement gathering from stakeholders and design screen
Leading team of UI developers`}
        </pre>

        <h2 className="bold">Lead Frontend Engineer, Vice President</h2>
        <pre>
          {`DBS Bank
Feb 2021 - Feb 2022 (1 year 1 month)`}
        </pre>
        <pre>
          {`Leading team of Frontend developers and User experience
Played a significant role in the Core System Technology Group (CST), participating in architectural
teams and developing frameworks to address common problems/use cases.
Developed Trade Banking Applications on permissioned Blockchain, emphasizing expertise in
blockchain technology.
Designed and built React.js, Android, and Angular component libraries for widespread use within DBS
Constructed a Document Search Engine using Node.js, GraphQL, React, and ElasticSearch to create a
centralized document repository.
Created a custom Node.js CLI for a basic starter kit and templating engine support, demonstrating a
focus on automation and efficiency.
Established an Analytics Framework and a Zero Code Documentation tool, showcasing a diverse skill
set`}
        </pre>
        <h2>Staff Software Engineer</h2>
        <pre className="bold">{`Equinix
May 2016 - May 2017 (1 year 1 month)`}</pre>
        <pre>{`Specialized in profiling and enhancing performance in both Node.js and AngularJS code, showcasing
expertise in optimizing the efficiency of server-side and client-side applications.
Successfully upgraded the Oracle driver from strong-oracle to node-oracledb, demonstrating the ability
to manage and implement improvements in database connectivity.
Implemented an in-memory cache utilizing node-cache to optimize the performance of least used APIs,
highlighting a strategic approach to enhance data retrieval speed and overall system efficiency.`}</pre>
        <h2>Sr. Software Engineer</h2>
        <pre className="bold">{`TO THE NEW
Jun 2014 - Apr 2016 (1 year 11 months)`}</pre>
        <pre>{`Successfully executed a data migration initiative, transitioning from relational SQL databases to NSQL
MongoDB
Implemented ElasticSearch to optimize search functionality, achieving faster results by enabling
searches across multiple collections through aggregation and facets searching.
Established multilingual support using Angular translates, currently supporting two languages,
enhancing the accessibility and inclusivity of the application.
Introduced a chat/messenger feature, allowing users to communicate via a chatbox. The functionality
is supported by both back-end and front-end technologies, incorporating Pusher and OpenTok for realtime communication.
Implemented Node.js workers to provide dedicated worker threads, optimizing system efficiency for
heavy batch tasks, reflecting a commitment to performance optimization.
Integrated RabbitMQ for queue message support, implementing a priority-based queue system for
different tasks`}</pre>
        <h2>Module Lead</h2>
        <pre className="bold">{`NEC Corporation India Pvt Ltd.
Aug 2013 - Jun 2014 (11 months)`}</pre>
        <pre>{`- Create a Simulator to simulate the communication with external system (ACOS, WEB AP etc.)
- Creating Zimlets (Add-On) for Bmail, A new aligned project of Biglobe
- Created a Heat-map tool to trace the log of the Zimbra mail server and collect information`}</pre>

        <h3>Education</h3>
        <h2>West Bengal University of Technology, Kolkata</h2>
        <pre className="bold">
          {`Bachelor of Technology (B.Tech.), Computer and Information Sciences and Support
Services
2007 - 2011`}
        </pre>
        <pre>
          {`Bachelor of Technology with CGPA 8.2/10 (Y. 2007-2011)
Subjects: J2SE, JavaScript, Data structure, Mathematics, Automata`}
        </pre>
        <h2>West Bengal Board of Secondary Education (WBBSE)</h2>
        <pre className="bold">
          {`Higher Secondary , Physics, Maths, Chemistry
2005 - 2007`}
        </pre>
        <pre>
          {`Senior Higher Secondary (+12)
Subjects: Physics, Chemistry, Maths with CGPA 88%`}
        </pre>

        <h3>Licenses & Certifications</h3>
        <p>AWS Certified Cloud Practitioner - Amazon Web Services (AWS) Issued Aug 2023 - Expires Aug 2026</p>
        <p>Secure Code Warrior - Secure Code Warrior</p>
        <p>Blockchain Basics - University at Buffalo https://coursera.org/share/8859148d04bcbc60140ff33bdb19691c</p>
        <br />
        <button className="download button icon" onClick={download}>
          <i className="bi bi-download"></i>Save
        </button>
      </div>
      <iframe ref={iframe} style={{ height: 0, width: 0, position: "absolute", bottom: -1000 }}></iframe>
    </div>
  );
}
