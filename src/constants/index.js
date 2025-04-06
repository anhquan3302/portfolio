import project1 from "../assets/projects/project-1.webp";
import project2 from "../assets/projects/project-2.webp";
import project3 from "../assets/projects/project-3.webp";
import project4 from "../assets/projects/project-4.webp";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 5 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "MAY 2023 - SEP 2023",
    role: "Back-end develop",
    company: "FPT SOFTWARE ",
    description: `Engineered an internship management system using Spring Boot and MySQL, implementing role-based access control that reduced administrative workload by 25% and increased resource utilization by 30% among interns`,
    technologies: ["JAVA", "React.js", "Springboot", "MySQL","AWS", ],
  },
];

export const PROJECTS = [
  {
    title: "EFURNITURE",
    image: project1,
    description:
      " E-commerce platform specializing in furniture retail with advanced product ltering, secure checkout, and responsive design optimized for furniture browsing and purchasing.",
    technologies: [ "React JS", "Springboot", "MySQL"],
  },
  {
    title: " AUCTION - SECOND - HAND",
    image: project2,
    description:
      "Online auction platform enabling users to buy and sell second-hand items through real-time bidding with secure transactions and automated winner selection.",
    technologies: ["Springboot", "ReactJS","TailwindCSS", "MySQL"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "TailwindCSS",],
  },

];

export const CONTACT = {
  address: "Vinhome GrandPark , Thu Duc city ",
  phoneNo: "+84 937 534 654 ",
  email: "quananh.it.work@gmail.com",
};
