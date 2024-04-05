"use client";
import { useRef } from "react";

const toUl = (str = "") => {
  console.log(str, str.split("\n"));
  return (
    <ul>
      {str.split("\n").map((x) => (
        <li key={`html____${x}`}>{x}</li>
      ))}
    </ul>
  );
};
export default function Home() {
  const page = useRef(null);
  const iframe = useRef(null);
  // const download = () => {
  //   var pri = iframe.current.contentWindow;
  //   pri.document.open();
  //   pri.document.write(page.current.innerHTML);
  //   pri.document.close();
  //   pri.focus();
  //   pri.print();
  // };
  const download = () =>
    window.open(
      "https://drive.google.com/uc?export=download&id=1qiU3lGIXZxweoJRiptZrdjEomYkFLyr2",
    );
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
        <h2>Summary</h2>
        <hr />
        <p>
          Lead Software Engineer with 12+ years of experience developing
          solutions for enterprise applications. Proficient in blockchain tech,
          cloud migration, full-stack development, leadership, problem-solving,
          quality assurance, and adaptability. Passionate about continuous
          learning and exploring new opportunities to push the boundaries of
          technology.
        </p>
        <br />
        <h3>Key Strengths:</h3>
        <p>
          <b>Expertise in Blockchain Technology: </b> Proficient in developing
          and deploying smart contracts on Ethereum and Quorum, and experienced
          in leading the migration of microservices to AWS cloud production
          using Terraform and other cloud technologies.
        </p>
        <p>
          <b>Cloud Migration and Architecture:</b>Experienced in leading the
          migration of microservices to AWS cloud production, utilizing
          Terraform and other cloud technologies to optimize performance and
          scalability.
        </p>
        <p>
          <b>Full-Stack Development Skills:</b> Skilled in frontend and backend
          technologies such as React, Kotlin, Node.js, and Golang, with a focus
          on building user-friendly and performant applications.
        </p>
        <p>
          <b>Leadership and Collaboration:</b> Demonstrated ability to lead
          teams, facilitate cross-functional collaboration, and communicate
          effectively with stakeholders to drive project success.
        </p>
        <p>
          <b>Problem-Solving and Innovation:</b> Known for creative
          problem-solving skills and a passion for exploring innovative
          solutions to complex technical challenges.
        </p>
        <p>
          <b>Quality Assurance and Continuous Improvement:</b> Committed to
          delivering high-quality products through robust quality assurance
          processes and a culture of continuous improvement.
        </p>
        <p>
          <b>Adaptability and Learning Agility:</b> Proven ability to adapt to
          new technologies, methodologies, and business requirements, with a
          strong drive for continuous learning and professional growth.
        </p>
        <br />
        <h2>Skills</h2>
        <hr />
        <p>
          <b>Tech Stacks: </b> Javascript, React, Kotlin, Java, Node.js,
          Blockchain, Smart Contract, Ethereum, Springboot, AWS, Terraform,
        </p>
        <p>
          <b>Design Skills: </b> Financial Technology, Critical Thinking,
          Analytical Skills, TDD, DDD, Software Development, DApp, Distributed
          Application
        </p>
        <p>
          <b>Soft Skils: </b> Team Management, Communication, Critical Thinking,
          Solution Architecture, Collaborate, Agile, Communication Skills,
          Regulatory, Payment, Banking, Fintech
        </p>
        <br />
        <h2>Work Experience</h2>
        <hr />
        <h3>Lead Software Engineering, Vice President</h3>
        <pre className="bold">
          {`JPMorgan Chase & Co.
Feb 2022 - Present (${new Date().getFullYear() - 2022} years ${new Date().getMonth() - 1} Months)`}
        </pre>
        <div className="summary">
          <b> Onyx Digital Rail - Orchestration DAPP</b>
          {toUl(`Developed and deployed smart contracts on Ethereum and Quorum for enterprise applications Designed and implemented secure architecture for private blockchain networks using Quorum Integrated blockchain solutions with existing enterprise systems and APIs
Performed unit and integration testing for smart contracts and DApps
Singapore
Contributed to ongoing development and maintenance of blockchain infrastructure
Migrated multiple micro-services to Atlas Cloud (AWS) Production with zero failure
Learned Terraform in-depth and migrated multiple applications from Pivotal cloud to AWS cloud with minimal resource in strict timeline`)}
          <b> Programmable Payment</b>
          {toUl(`Improved performance of E2E assertion framework
Built frontend framework using Native Web Component/Lit Element Conducted requirement gathering from stakeholders and designed screens Led team of UI developers`)}
        </div>

        <h3 className="bold">Lead Frontend Engineer, Vice President</h3>
        <pre className="bold">
          {`DBS Bank
Feb 2021 - Feb 2022 (1 year 1 month)`}
        </pre>
        <div className="summary">
          {toUl(`Headed teams of Frontend developers and User Experience specialists
Lead a pivotal role in the Core System Technology Group (CST), contributing to architectural innovation and framework development
Developed Trade Banking Applications on permissioned Blockchain(POC) using Corda R3
Engineered and crafted React.js, Android, and Angular component libraries for widespread adoption within DBS Consumer banking applications
Developed Document Search Engine using Node.js, GraphQL, React, and ElasticSearch for centralized document management
Build custom Node.js CLI for a streamlined starter kit and templating engine support, emphasizing automation and efficiency
Established an advanced Analytics Framework and Zero Code Documentation tool, showcasing a versatile skill set`)}
        </div>
        <h3>Senior Software Engineer, Staff Software Engineer</h3>
        <pre className="bold">{`Equinix
May 2016 - May 2017 (1 year 1 month)`}</pre>
        <div className="summary">
          {toUl(`Specialized in performance profiling and enhancement for Node.js and AngularJS applications, improving the UX and customer engagement.
Upgraded Oracle driver from strong-oracle to node-oracledb, improving database connectivity with less downtime and zero failure.
Implemented in-memory cache using node-cache to optimize performance by 30% of least used APIs`)}
        </div>
        <h3>Lead UX/UI Engineer, Senior Software Engineer</h3>
        <pre className="bold">{`TO THE NEW
Jun 2014 - Apr 2016 (1 year 11 months)`}</pre>
        <div className="summary">
          {toUl(`Executed data migration from relational SQL databases to NSQL MongoDB in 2 months
Implemented ElasticSearch for optimized search functionality across multiple collections and increase the performance by 60%
Established multilingual support with Angular translates for enhanced accessibility
Introduced chat/messenger feature supported by Pusher and OpenTok for real-time communication Implemented Node.js workers for optimized system efficiency in batch tasks
Integrated RabbitMQ for a priority-based queue system
Implemented API caching at the Node.js level for improved performance`)}
        </div>
        <h3>Module Lead, Senior Software Engineer</h3>
        <pre className="bold">{`NEC Corporation India Pvt Ltd.
Aug 2013 - Jun 2014 (11 months)`}</pre>
        <div className="summary">
          {toUl(`Developed a simulator for communication with external systems (ACOS, WEB API, etc.)
Built multiple Zimlets (Add-Ons/Plugins) for Bmail(a project of Biglobe) to enhance the User Capabilities Develop a heat-map tool to trace the log of 100s of Zimbra mail servers and collect information to increase visibility`)}
        </div>
        <br />
        <h2>Projects</h2>
        <hr />
        <a href="https://decipher.dev/30-seconds-of-typescript/docs/">
          30 seconds of typescript
        </a>
        <p>
          Building website to provide developers with essential code snippets.
          Committed to improving website functionality, SEO, and promptly
          addressing coding bugs. Goal is for snippets to rank in top 5 on
          Google. Code snippets improve productivity and save time.
        </p>
        <br />
        <h2>Education</h2>
        <hr />
        <h3>West Bengal University of Technology, Kolkata</h3>
        <pre className="bold">
          {`Bachelor of Technology (B.Tech.), Computer and Information Sciences and Support
Services
2007 - 2011`}
        </pre>
        <h3>West Bengal Board of Education (WBBSE)Secondary, Kolkata</h3>
        <pre className="bold">
          {`Higher Secondary, Physics, Maths, Chemistry
2007 - 2011`}
        </pre>
        <br />
        <h2>Awards/Certificates</h2>
        <hr />
        <p>
          AWS Certified Cloud Practitioner - &nbsp;
          <a href="https://www.credly.com/badges/866ccfe3-6a5c-4c99-8736-16e38909823e/linked_in_profile">
            Amazon Web Services (AWS) Issued Aug 2023 - Expires Aug 2026
          </a>
        </p>
        <p>
          Blockchain Basics - University at Buffalo -&nbsp;
          <a href="https://coursera.org/share/8859148d04bcbc60140ff33bdb19691c">
            Certificate
          </a>
        </p>
        <br />
        <button className="download button icon" onClick={download}>
          <i className="bi bi-download"></i>Save
        </button>
      </div>
      <iframe
        ref={iframe}
        style={{ height: 0, width: 0, position: "absolute", bottom: -1000 }}
      ></iframe>
    </div>
  );
}
