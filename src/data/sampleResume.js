export const sampleResume = {
  personalInfo: {
    name: "Alex Morgan",
    title: "Senior Full Stack Engineer",
    email: "alex.morgan@email.com",
    phone: "+1 (555) 019-2834",
    location: "San Francisco, CA",
    website: "alexmorgan.dev",
    linkedin: "linkedin.com/in/alexmorgan",
    github: "github.com/alexmorgan",
    summary: "Passionate and detail-oriented Software Engineer with 8+ years of experience building scalable web applications and distributed systems. Expert in React, Node.js, and cloud architecture, with a proven track record of mentoring teams and leading projects from conception to launch."
  },
  workExperience: [
    {
      id: "exp-1",
      role: "Senior Software Engineer",
      company: "TechCorp Solutions",
      location: "San Francisco, CA",
      startDate: "2021-06",
      endDate: "Present",
      description: "• Led the migration of a legacy monolithic application to a microservices architecture, reducing latency by 40%.\n• Built and maintained reusable React components, establishing a custom UI design system utilized by 15+ internal developers.\n• Architected real-time dashboard systems using WebSocket and Node.js to monitor server performance metrics."
    },
    {
      id: "exp-2",
      role: "Software Engineer II",
      company: "Innovate Labs",
      location: "Boston, MA",
      startDate: "2018-03",
      endDate: "2021-05",
      description: "• Developed client-facing features using React and Redux, improving user engagement by 25%.\n• Optimized database queries in PostgreSQL, reducing load times on reports by 50%.\n• Collaborated with product managers and UX designers to define technical requirements and create interactive mockups."
    }
  ],
  education: [
    {
      id: "edu-1",
      degree: "M.S. in Computer Science",
      school: "Stanford University",
      location: "Stanford, CA",
      startDate: "2016-09",
      endDate: "2018-03",
      description: "Specialized in Artificial Intelligence and Distributed Systems. Teaching Assistant for Database Systems."
    },
    {
      id: "edu-2",
      degree: "B.S. in Computer Science & Engineering",
      school: "University of Michigan",
      location: "Ann Arbor, MI",
      startDate: "2012-09",
      endDate: "2016-06",
      description: "Graduated Magna Cum Laude. Member of the Association for Computing Machinery (ACM)."
    }
  ],
  projects: [
    {
      id: "proj-1",
      name: "CloudScribe",
      role: "Creator & Lead Developer",
      link: "github.com/alexmorgan/cloudscribe",
      description: "A collaborative markdown editor utilizing Conflict-free Replicated Data Types (CRDTs) for conflict-free real-time text editing. Built with React, WebRTC, and Go."
    },
    {
      id: "proj-2",
      name: "QueryOptim",
      role: "Contributor",
      link: "github.com/alexmorgan/queryoptim",
      description: "An open-source PostgreSQL query visualizer and performance tuning tool, generating recommended indexes based on query execution plans."
    }
  ],
  skills: [
    {
      id: "skill-1",
      category: "Languages",
      items: "JavaScript (ES6+), TypeScript, Python, Go, SQL, HTML5/CSS3"
    },
    {
      id: "skill-2",
      category: "Frameworks & Libraries",
      items: "React, Next.js, Redux, Node.js, Express, Fastify, Jest"
    },
    {
      id: "skill-3",
      category: "DevOps & Cloud",
      items: "AWS (S3, EC2, Lambda), Docker, Kubernetes, CI/CD (GitHub Actions), Git"
    }
  ],
  languages: [
    {
      id: "lang-1",
      name: "English",
      level: "Native"
    },
    {
      id: "lang-2",
      name: "Spanish",
      level: "Conversational"
    }
  ],
  certifications: [
    {
      id: "cert-1",
      name: "AWS Certified Solutions Architect - Associate",
      issuer: "Amazon Web Services",
      date: "2023-08"
    },
    {
      id: "cert-2",
      name: "Certified ScrumMaster (CSM)",
      issuer: "Scrum Alliance",
      date: "2022-01"
    }
  ],
  settings: {
    template: "academic",
    themeColor: "#0f172a",
    fontFamily: "serif",
    fontSize: "medium",
    lineSpacing: "normal",
    margins: "normal",
    sectionOrder: ["summary", "experience", "education", "projects", "skills", "certifications", "languages"]
  }
};
