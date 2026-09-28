export const resumeData = {
  personal: {
    name: "Nitesh Kumar",
    firstName: "Nitesh",
    lastName: "Kumar",
    role: "Software Engineer & Full Stack Developer",
    subtitle: "Full Stack Development & Test Automation (SDET)",
    bio: "I build modern, scalable web applications, robust test automation frameworks, and intelligent machine learning solutions that solve real problems.",
    aboutIntro:
      "Creative, analytical, and results-driven Software Engineer with a strong foundation in full-stack architecture, automated quality engineering, and data-driven systems.",
    aboutLong:
      "I'm a Computer Science & Engineering graduate from Haldia Institute of Technology (CGPA 8.59), passionate about building reliable software and solving real-world technical problems.\n\nMy experience spans Java, JavaScript, web development, and SDET practices, with hands-on work in Selenium, TestNG, Cucumber, Maven, Jenkins, and CI/CD. I enjoy turning requirements into clean, maintainable applications and efficient automation solutions.\n\nI'm currently looking for opportunities where I can contribute, keep learning, and grow as a software developer and SDET.",
    email: "nk1711336@gmail.com",
    phone: "+91 9334129956",
    location: "Haldia / Bihar, India",
    linkedin: "https://www.linkedin.com/in/nitesh-kumar-d/",
    github: "https://github.com/kumarnitesh345",
    status: "Available for Full-time Roles",
    avatar: "/profile.png",
    resumePdf: "/resume.pdf",
  },

  stats: [
    { label: "Regression Reduced", value: "85%+", icon: "code" },
    { label: "Projects & Modules", value: "10+", icon: "folder" },
    { label: "B.Tech CGPA / Honors", value: "8.59", icon: "award" },
  ],

  experience: [
    {
      id: "wipro-sdet-training",
      title: "Wipro SDET Professional Training",
      role: "SDET Trainee",
      organization: "Wipro",
      period: "Mar 2026 – Jun 2026",
      duration: "Intensive Program",
      type: "Professional Training",
      description: [
        "Completed rigorous SDET corporate training covering Core Java, Object-Oriented Architecture, and enterprise test automation design patterns.",
        "Engineered behavioral-driven test harnesses leveraging Selenium WebDriver, Cucumber BDD, TestNG, and Maven build automation.",
        "Built continuous testing workflows integrating Jenkins CI/CD pipelines, Docker containers, and automated HTML/Extent execution reporting.",
      ],
      technologies: [
        "Java",
        "Selenium",
        "Cucumber",
        "TestNG",
        "Maven",
        "Jenkins",
        "Git",
        "API Testing",
      ],
      metrics: [
        { label: "Training Focus", value: "SDET & Automation" },
        { label: "Framework Style", value: "BDD & Cucumber" },
        { label: "Build Tool", value: "Apache Maven" },
      ],
    },
    {
      id: "aicte-internship",
      title: "Full Stack Web Development Intern",
      role: "Full Stack Intern",
      organization: "AICTE Next Gen Employability Program",
      period: "Feb 2025 - Apr 2025",
      duration: "3 months",
      type: "Internship",
      description: [
        "Architected and deployed a full-stack web application using MongoDB, Express.js, Node.js, and JavaScript, streamlining data management for 500+ users and reducing data retrieval times by 30%.",
        "Delivered 10+ projects integrating backend data processing with Node.js and Express, improving server-side logic and reducing API response times by 35% for enhanced application performance.",
      ],
      technologies: [
        "Node.js",
        "Express.js",
        "MongoDB",
        "JavaScript",
        "REST APIs",
      ],
      metrics: [
        { label: "Active Users", value: "500+" },
        { label: "Data Retrieval Cut", value: "30%" },
        { label: "API Latency Cut", value: "35%" },
        { label: "Delivered Projects", value: "10+" },
      ],
    },
    {
      id: "infosys-internship",
      title: "Autonomous Driving System",
      role: "Machine Learning Intern",
      organization: "Infosys Springboard 5.0 Internship",
      period: "Oct 2024 – Dec 2024",
      duration: "3 months",
      type: "Internship",
      description: [
        "Formulated a convolutional neural network (CNN) for traffic sign recognition using TensorFlow and OpenCV; boosted recognition accuracy to 98% on a diverse dataset of 10,000+ images.",
        "Optimized object detection model, decreasing inference time by 15% while maintaining 95% accuracy, ensuring faster real-time decision-making capabilities within the autonomous navigation system.",
      ],
      technologies: [
        "TensorFlow",
        "OpenCV",
        "CNN",
        "Computer Vision",
        "Python",
      ],
      metrics: [
        { label: "Recognition Accuracy", value: "98%" },
        { label: "Inference Speedup", value: "+15%" },
        { label: "Dataset Scale", value: "10,000+ Images" },
      ],
    },
  ],

  projects: [
    {
      id: "mri-insights",
      title: "MRI Insights",
      tagline:
        "Deep learning & web-based healthcare intelligence platform for automated brain MRI scan analysis.",
      category: "Healthcare AI & Full Stack",
      featured: true,
      technologies: [
        "Python",
        "TensorFlow",
        "OpenCV",
        "CNN",
        "Flask",
        "React.js",
      ],
      details: [
        "Architected an end-to-end medical imaging diagnostic application to analyze brain MRI scans, identifying pathological abnormalities with 98% classification accuracy.",
        "Engineered computer vision preprocessing pipelines using OpenCV and deep Convolutional Neural Networks (CNN), optimizing inference speed by 25% for real-time clinical screening.",
        "Developed a high-performance web dashboard allowing medical practitioners to upload scans, visualize probability distributions, and generate automated diagnostic summaries.",
      ],
      metrics: [
        { label: "Diagnostic Accuracy", value: "98%" },
        { label: "Inference Speedup", value: "+25%" },
        { label: "Analysis Pipeline", value: "Real-time" },
      ],
      architecture:
        "Deep Convolutional Neural Network (CNN) + OpenCV + React Dashboard",
      githubUrl: "https://github.com/kumarnitesh345/mri-insights",
      liveUrl: "",
    },
    {
      id: "hospital-management-system",
      title: "Hospital Management System",
      tagline:
        "Modular Java & MySQL healthcare platform managing records, appointments, and billing.",
      category: "Java & Database Management",
      featured: true,
      technologies: ["Core Java", "JDBC", "MySQL", "OOP"],
      details: [
        "Developed a Hospital Management System using Java, JDBC, and MySQL, managing 100+ patient records, appointment scheduling, billing, and secure staff authentication through a menu-driven application.",
        "Implemented CRUD operations, JDBC-based database integration, and PreparedStatement for secure SQL execution, reducing manual record management effort by 70% while ensuring reliable data handling.",
        "Designed a modular service-based architecture with 5+ service classes (Patient, Appointment, Billing, Login, and Database Connection), improving code maintainability, scalability, and simplifying database operations.",
      ],
      metrics: [
        { label: "Manual Effort Cut", value: "70%" },
        { label: "Patient Records", value: "100+" },
        { label: "Service Modules", value: "5+ Classes" },
      ],
      architecture: "Layered Service Architecture + DAO + PreparedStatements",
      githubUrl: "https://github.com/kumarnitesh345/Hospital-Managemnet-System",
      liveUrl: "",
    },
    {
      id: "guru99-bank-automation",
      title: "GURU99 Bank Automation Testing Framework",
      tagline:
        "Enterprise Page Object Model (POM) test framework with automated CI/CD pipelines.",
      category: "Test Automation & QA",
      featured: true,
      technologies: [
        "Java",
        "Selenium",
        "TestNG",
        "Cucumber",
        "Maven",
        "Jenkins",
        "Docker",
        "Apache POI",
      ],
      details: [
        "Developed a Page Object Model (POM) automation framework with 25+ reusable classes to automate 8+ core banking modules, reducing regression testing effort by 85% and improving code maintainability.",
        "Automated 12+ functional and negative test cases using Selenium WebDriver, TestNG, Cucumber, and Apache POI, validating 100+ test data combinations with 100% test pass rate.",
        "Integrated Jenkins, Docker, GitHub, Maven, and Extent Reports for CI/CD automation, generating detailed execution reports with logs and screenshots. Reduced manual testing effort by 80% and debugging time by 60%.",
      ],
      metrics: [
        { label: "Regression Reduced", value: "85%" },
        { label: "Test Pass Rate", value: "100%" },
        { label: "Manual Testing Cut", value: "80%" },
        { label: "Debug Time Cut", value: "60%" },
      ],
      architecture:
        "Page Object Model (POM) + BDD Cucumber + Maven + Jenkins CI/CD",
      githubUrl:
        "https://github.com/kumarnitesh345/Guru99Bank-Automation-Testing-Framework",
      liveUrl: "",
    },
  ],

  // Skills icon cards matching the screenshot + newly requested skills: C++, Testing, Cucumber, Maven, JUnit
  skillsList: [
    { name: "Java", category: "Language", color: "#f89820", badge: "Java" },
    { name: "C++", category: "Language", color: "#00599c", badge: "C++" },
    { name: "Python", category: "Language", color: "#3776ab", badge: "Python" },
    { name: "JavaScript", category: "Language", color: "#f7df1e", badge: "JS" },
    { name: "React", category: "Frontend", color: "#61dafb", badge: "React" },
    { name: "HTML5", category: "Frontend", color: "#e34f26", badge: "HTML5" },
    { name: "CSS3", category: "Frontend", color: "#1572b6", badge: "CSS3" },
    { name: "SQL", category: "Database", color: "#00758f", badge: "SQL" },
    {
      name: "Selenium",
      category: "QA & Testing",
      color: "#43B02A",
      badge: "Selenium",
    },
    {
      name: "Testing",
      category: "QA & Testing",
      color: "#00df81",
      badge: "QA Testing",
    },
    {
      name: "Cucumber",
      category: "QA & Testing",
      color: "#23D96C",
      badge: "Cucumber",
    },
    {
      name: "TestNG",
      category: "QA & Testing",
      color: "#cb2431",
      badge: "TestNG",
    },
    {
      name: "JUnit",
      category: "QA & Testing",
      color: "#25a162",
      badge: "JUnit",
    },
    { name: "Maven", category: "Build Tool", color: "#C71A36", badge: "Maven" },
    { name: "Git", category: "DevOps", color: "#f05032", badge: "Git" },
    { name: "Docker", category: "DevOps", color: "#2496ed", badge: "Docker" },
    { name: "Jenkins", category: "DevOps", color: "#d24939", badge: "Jenkins" },
    { name: "VS Code", category: "Tool", color: "#007acc", badge: "VS Code" },
    {
      name: "Node.js",
      category: "Backend",
      color: "#339933",
      badge: "Node.js",
    },
    {
      name: "Express.js",
      category: "Backend",
      color: "#ffffff",
      badge: "Express",
    },
    {
      name: "MongoDB",
      category: "Database",
      color: "#47A248",
      badge: "MongoDB",
    },
    {
      name: "TensorFlow",
      category: "Machine Learning",
      color: "#ff6f00",
      badge: "TensorFlow",
    },
    {
      name: "Pandas",
      category: "Machine Learning",
      color: "#150458",
      badge: "Pandas",
    },
    {
      name: "NumPy",
      category: "Machine Learning",
      color: "#013243",
      badge: "NumPy",
    },
  ],

  skillsCategorized: {
    programming: ["Java", "C++", "Python", "JavaScript", "HTML", "CSS", "SQL"],
    testingAndQA: [
      "Software Testing",
      "Selenium WebDriver",
      "Cucumber BDD",
      "JUnit",
      "TestNG",
      "Page Object Model (POM)",
      "Data-Driven Testing",
      "API Testing",
    ],
    frameworksAndTools: [
      "React.js",
      "Node.js",
      "Express.js",
      "Apache Maven",
      "VS Code",
      "Eclipse",
    ],
    devopsAndCI: [
      "Git",
      "GitHub",
      "Jenkins",
      "Docker",
      "CI/CD Pipelines",
      "Jira",
    ],
    databases: ["MySQL", "MongoDB"],
    machineLearning: [
      "TensorFlow",
      "Keras",
      "Scikit-learn",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn",
    ],
    coursework: [
      "OOP",
      "DBMS",
      "Data Structures & Algorithms",
      "Computer Networks",
      "Operating Systems",
    ],
  },

  education: [
    {
      degree: "Bachelor of Technology (Computer Science & Engineering)",
      institution: "HALDIA INSTITUTE OF TECHNOLOGY, HALDIA",
      period: "2021 - 2025",
      score: "CGPA: 8.59",
      scoreType: "CGPA",
      details:
        "Comprehensive coursework in Systems Engineering, Test Automation, Database Architecture, and Distributed Algorithms.",
    },
    {
      degree: "Senior Secondary Education (Class XII)",
      institution: "D K C RESI HIGH SCHOOL NH-30 BHELAI BHOJPUR BIHAR",
      period: "2019 - 2021",
      score: "Percentage: 74.4%",
      scoreType: "Percentage",
      details:
        "Higher secondary curriculum focusing on Mathematics, Physics, Chemistry, and Analytical Sciences.",
    },
    {
      degree: "Higher Secondary Education (Class X)",
      institution: "ST PAULS SCHOOL G T ROAD SASARAM ROHTAS BIHAR",
      period: "2018 - 2019",
      score: "Percentage: 88.6%",
      scoreType: "Percentage",
      details:
        "Secondary foundational education with academic distinction in Mathematics and Computer Applications.",
    },
  ],

  leadership: [
    {
      organization: "NEEDS",
      role: "Head Of Public Relations, Content Writer",
      period: "2022 - 2025",
      description:
        "Led charity campaigns and creative content initiatives to support underprivileged children; Facilitated group discussions and contributed to collaborative decision-making.",
      points: [
        "Organized charity campaigns and creative content initiatives to support underprivileged children.",
        "Facilitated group discussions and contributed to collaborative decision-making.",
      ],
    },
  ],

  achievements: [
    {
      id: "hackathon-winner",
      title: "Winner of Internal Hackathon",
      organization: "Smart India Hackathon (SIH)",
      description:
        "Won internal institutional hackathon and was selected to represent at Smart India Hackathon.",
      badge: "Winner & SIH Nominee",
    },
    {
      id: "chess-runner-up",
      title: "2nd Prize in Inter-College Chess Competition",
      organization: "Inter-College Sports & Strategy Meet",
      description:
        "Secured 2nd Prize among 150+ participants demonstrating tactical foresight and composure under pressure.",
      badge: "2nd Prize (150+ Participants)",
    },
  ],
};
