import React from "react";

const resumeData = {
  personal_info: {
    name: "Deepak Vishwakarma",
    location: "Singapore (Open for relocation)",
    email: "deepak.m.shrma@gmail.com",
    phone: "+65-81241172",
    linkedin: "https://linkedin.com/in/xdeepakv",
    github: "https://github.com/deepakshrma",
    portfolio: "decipherdev",
  },
  summary:
    "Lead Software Engineer with 13+ years of experience building scalable, high-performance enterprise applications. I have a strong background in full-stack development, Blockchain, UX/UI, and cloud migration. I have led a team of 20+ developers to build and integrate with a large-scale application. Proficient in React, Node.js, Go, Kotlin, Java, Ethereum(Solidity), Blockchain Tools, AWS, Terraform, Docker, and Kubernetes. Hands-on experience in Infra as Code(IaC) and DevOps tools like Terraform, ArgoCD, Jenkins",
  skills: {
    design_skills: [
      "Fintech",
      "Critical Thinking",
      "Analytical Skills",
      "TDD",
      "DDD",
      "Software Development",
      "DApp",
      "Distributed Application",
      "Troubleshooting",
      "Cryptography",
      "Programming",
    ],
    tech_stacks: [
      "Go",
      "Kotlin",
      "JavaScript",
      "TypeScript",
      "React.js",
      "Java",
      "Node.js",
      "Solidity",
      "Blockchain",
      "Smart Contract",
      "Ethereum",
      "Springboot",
      "AWS",
      "Terraform",
      "Docker",
      "Kubernetes",
      "Kafka",
      "NoSQL",
      "SQL",
      "CI/CD",
    ],
    soft_skills: [
      "Team Management",
      "Communication",
      "Critical Thinking",
      "Solution Architecture",
      "Collaboration",
      "Agile",
      "Regulatory",
      "Payment",
      "Banking",
      "Fintech",
    ],
  },
  work_experience: [
    {
      title: "Lead Software Engineer, Vice President",
      company: "JPMorgan Chase & Co.",
      location: "Singapore",
      duration: "Feb 2022 - Present",
      responsibilities: [
        "Architected a Golang-based Kinexys Message Gateway (KMG) for high-performance path-based routing and authorization across distributed services.",
        "Engineered multi-version APIs in Golang, ensuring backward compatibility and scalability for future enhancements.",
        "Designed a Golang-powered Reference Data service, enabling efficient, consistent access to shared application data across enterprise systems.",
        "Developed a Kotlin-based domain-specific language (DSL) for Kinexys Programmable Payments, supporting features like scheduled payments and Uniswap.",
        "Built a UI playground with a Lego-like interface using building-block components, enhancing user interaction with Kinexys payment logic.",
        "Engineered enterprise-grade DApps and smart contracts on Quorum Blockchain, enabling real-time settlement, digital asset issuance, and token lifecycle management in regulated environments, tokenization (REPO).",
        "Developed multiple Java/Kotlin-based regulatory reports, optimizing workflows for client operations and internal teams.",
        "Led UX/UI design for asset tokenization, driving financial market liquidity initiatives.",
        "Directed a UX/UI team to build a core frontend framework and Design System using Lit Element, with optimized E2E assertions for Kinexys Programmable Payments.",
        "Spearheaded application migration from Pivotal Cloud to AWS, leveraging Terraform and AWS services under tight deadlines.",
        "Established unit-testing and integration testing standards with Cucumber and Cypress.io, ensuring robust security and system reliability.",
      ],
      skills: [
        "Golang",
        "Kotlin",
        "Java",
        "Solidity",
        "Quorum Blockchain",
        "AWS",
        "Terraform",
        "Lit Element",
        "Cucumber",
        "Cypress.io",
        "smart-contract development",
      ],
    },
    {
      title: "Lead Software Engineer, Vice President",
      company: "DBS Bank",
      location: "Singapore",
      duration: "Jun 2017 - Feb 2022",
      responsibilities: [
        "Led a team of core developers and UX specialists to deliver the initial MVP for the DBS Taiwan Treasury application.",
        "Guided the Singapore-based DBS Taiwan team through requirement gathering, feature development, and successful MVP launch, followed by multiple sprints.",
        "Contributed to project effort estimation and conducted team performance reviews to ensure alignment with goals.",
        "Oversaw daily code reviews and upheld quality assurance standards for the core development team.",
        "Engineered Proof-of-Concept (POC) applications for Trade Banking on the permissioned Corda R3 blockchain, showcasing innovative financial solutions.",
        "Developed reusable React.js, Android Native (Kotlin), and Angular core libraries for DBS Consumer Banking, accelerating development cycles and powering multiple DBS websites and mobile applications.",
        "Drove architectural innovation and framework enhancements to boost system performance.",
        "Built a centralized document management system using Java/Kotlin, Node.js, GraphQL, React, and Elasticsearch, improving document retrieval efficiency and usability.",
        "Crafted a custom CLI tool with Golang, Kotlin, and Node.js/JavaScript, automating workflows, templating processes, and minimizing manual errors.",
        "Designed an advanced analytics framework and a zero-code documentation tool, enhancing data accessibility and user engagement.",
        "Implemented A/B testing to optimize the application's UX, delivering measurable improvements in user satisfaction and interaction.",
      ],
      skills: [
        "Golang",
        "Kotlin",
        "Java",
        "React.js",
        "Node.js",
        "GraphQL",
        "Elasticsearch",
        "Corda R3 blockchain",
      ],
    },
    {
      title: "Senior Software Engineer",
      company: "Equinix (Contract)",
      location: "Singapore",
      duration: "May 2016 - May 2017",
      responsibilities: [
        "Contributed to daily code reviews and upheld quality assurance standards within the core development team.",
        "Led requirement gathering with multiple clients, driving projects to completion and crafting the initial architecture with precision.",
        "Played a key role in project effort estimation and conducted team performance reviews to ensure excellence.",
        "Specializing in performance profiling and optimization for Node.js and AngularJS applications, enhancing UX and boosting customer engagement.",
        "Upgraded the Oracle driver from strong-oracle to node-oracledb, achieving seamless database connectivity with minimal downtime and zero failures.",
        "Implemented an in-memory cache using node-cache, improving API performance by 30% for high-traffic endpoints.",
      ],
      skills: [
        "Node.js",
        "AngularJS",
        "code reviews",
        "requirement gathering",
        "performance optimization",
        "UX improvement",
      ],
    },
    {
      title: "Lead Software Engineer",
      company: "To The New Digital",
      location: "Noida, India",
      duration: "Jun 2014 - Apr 2016",
      responsibilities: [
        "Executed data migration from relational SQL databases to NoSQL MongoDB in 2 months.",
        "Implemented ElasticSearch for optimized search functionality across multiple collections and increased the performance by 60%.",
        "Established multilingual support with Angular translations for enhanced accessibility.",
        "Introduced chat/messenger feature supported by Pusher and OpenTok for real-time communication.",
        "Implemented Node.js workers for optimized system efficiency in batch tasks.",
        "Integrated RabbitMQ for a priority-based queue system.",
        "Implemented API caching at the Node.js level for improved performance.",
      ],
    },
    {
      title: "Module Lead, Senior Software Engineer",
      company: "NEC Technologies India Pvt. Ltd",
      location: "Noida, India",
      duration: "Aug 2011 - Jun 2014",
      responsibilities: [
        "Developed a simulator for communication with external systems (ACOS, WEB API, etc.).",
        "Built multiple Zimlets (Add-Ons/Plugins) for Bmail (a project of Biglobe) to enhance the User Capabilities.",
        "Developed a heat-map tool to trace the log of 100s of Zimbra mail servers and collect information to increase visibility.",
      ],
    },
  ],
  projects: [
    {
      name: "30 seconds of typescript",
      duration: "Jan 2020 - Mar 2024",
      description:
        "Building a website to provide developers with essential code snippets. Committed to improving the website's functionality and SEO, and promptly addressing coding bugs. The goal is for snippets to rank in the top 5 on Google. Code snippets improve productivity and save time.",
    },
  ],
  languages: [
    {
      language: "Hindi",
      proficiency: "Native proficiency",
    },
    {
      language: "English",
      proficiency: "Full professional proficiency",
    },
  ],
  awards: [
    {
      name: "Bugathon Winner",
      organization: "DBS Bank",
      date: "Jan 2018",
      description:
        "Member of the Winning team of the Hackathon challenge to find an innovative way to Test Applications",
    },
    {
      name: "Customer Delight App",
      organization: "DBS Bank",
      date: "Jan 2017",
      description: "Member of the winning team on DBS First Hackathon",
    },
    {
      name: "Winner of Techathon",
      organization: "TO THE NEW and Shopclues",
      date: "Jan 2015",
      description: "Member of the First Winning team of Techathon/Hackathon",
    },
    {
      name: "Team Oscar",
      organization: "NEC Technologies India Pvt Ltd.",
      date: "Jan 2013",
      description: "Team Oscar, Yearly Recognition",
    },
    {
      name: "Emerging Employee of the year",
      organization: "NEC Technologies India Pvt Ltd.",
      date: "Jan 2012",
      description: "Emerging Employee of the year, Yearly Recognition",
    },
  ],
  education: {
    degree: "Bachelor of Technology (B.Tech.)",
    institution: "West Bengal University of Technology, Kolkata",
    duration: "Jan 2007 - Jan 2011",
    gpa: "8.2",
    description:
      "The Computer and Information Sciences program at WBUT (MAKAUT) focuses on computer science, software development, networking, and IT support. Programming & Software Development - Learning languages like Java, C, and C++",
  },
  certifications: [
    {
      name: "AWS Certified Cloud Practitioner",
      organization: "Amazon Web Services (AWS)",
      date: "Aug 2023",
    },
    {
      name: "Decentralized Applications (Dapps)",
      organization: "University at Buffalo",
      date: "Aug 2021",
      credential_id: "6ce52ed2183110d1a379e251c51973ff",
    },
    {
      name: "Smart Contracts",
      organization: "University at Buffalo",
      date: "Aug 2021",
      credential_id: "8c43e8b78308253b87ebb59f32414032",
    },
  ],
  references: [
    {
      name: "Nitin Muthyala",
      title: "Co-Founder and CTO @ HitPay (YC S21)",
      email: "nitinmuthyala@gmail.com",
    },
  ],
};
const Section = ({ title, children }) => (
  <section className={`section ${title}`}>
    <h2>{title}</h2>
    {children}
  </section>
);
const SimpleList = ({ items, renderItem }) => (
  <ul className="list">
    {items.map((item, index) => (
      <li key={index}>{renderItem(item)}</li>
    ))}
  </ul>
);
const ItemList = ({ items, renderItem }) => (
  <>
    {items.map((item, index) => (
      <div key={index} className="item">
        {renderItem(item)}
      </div>
    ))}
  </>
);
function App() {
  return (
    <div className="resume">
      <div className="container">
        <h1 className="name">{resumeData.personal_info.name}</h1>
        <p className="location">{resumeData.personal_info.location}</p>
        <p className="contact">
          <a target="_blank" href={`mailto:${resumeData.personal_info.email}`}>
            {resumeData.personal_info.email}
          </a>{" "}
          |{" "}
          <a target="_blank" href={resumeData.personal_info.linkedin}>
            LinkedIn
          </a>{" "}
          |{" "}
          <a target="_blank" href={resumeData.personal_info.github}>
            GitHub
          </a>
        </p>
        <section className="section">
          <h2>Summary</h2>
          <p>{resumeData.summary}</p>
        </section>
        <section className="section">
          <h2>Skills</h2>
          {Object.entries(resumeData.skills).map(([title, skills]) => (
            <>
              <h3>{title.split("_").join(" ").toUpperCase()}</h3>
              <small>{skills.join(", ")}</small>
            </>
          ))}
        </section>

        <section className="section">
          <h2>Experience</h2>
          {resumeData.work_experience.map((job, index) => (
            <div className="job" key={index}>
              <h3>
                {job.title} – {job.company}
              </h3>
              <p className="meta">
                {job.duration} | {job.location}
              </p>

              <ul>
                {job.responsibilities.map((task, i) => (
                  <li key={i}>{task}</li>
                ))}
              </ul>
              <ul className="skills">
                {job?.skills && (
                  <li>
                    <strong>Skills: </strong>
                  </li>
                )}
                {job?.skills?.map((skill, i) => (
                  <li key={i} className="pill">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>
        {/* Projects */}
        <Section title="Projects">
          <ItemList
            items={resumeData.projects}
            renderItem={(project) => (
              <>
                <h3>{project.name}</h3>
                <p className="duration">{project.duration}</p>
                <p>{project.description}</p>
              </>
            )}
          />
        </Section>

        {/* Languages */}
        <Section title="Languages">
          <SimpleList
            items={resumeData.languages}
            renderItem={(lang) => `${lang.language} - ${lang.proficiency}`}
          />
        </Section>

        {/* Awards */}
        <Section title="Awards">
          <ItemList
            items={resumeData.awards}
            renderItem={(award) => (
              <>
                <h3>{award.name}</h3>
                <p className="organization">
                  {award.organization} | {award.date}
                </p>
                <p>{award.description}</p>
              </>
            )}
          />
        </Section>

        {/* Education */}
        <Section title="Education">
          <div className="item">
            <h3>{resumeData.education.degree}</h3>
            <p className="institution">{resumeData.education.institution}</p>
            <p className="duration">
              {resumeData.education.duration} | GPA: {resumeData.education.gpa}
            </p>
            <p>{resumeData.education.description}</p>
          </div>
        </Section>

        {/* Certifications */}
        <Section title="Certifications">
          <SimpleList
            items={resumeData.certifications}
            renderItem={(cert) => (
              <>
                {cert.name} - {cert.organization} ({cert.date})
                {cert.credential_id && (
                  <span> | Credential ID: {cert.credential_id}</span>
                )}
              </>
            )}
          />
        </Section>

        {/* References */}
        <Section title="References">
          <ItemList
            items={resumeData.references}
            renderItem={(ref) => (
              <>
                <h3>{ref.name}</h3>
                <p>{ref.title}</p>
                <p>Email: {ref.email}</p>
              </>
            )}
          />
        </Section>
      </div>
    </div>
  );
}

export default App;
