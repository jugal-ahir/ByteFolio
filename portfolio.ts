import emoji from "react-easy-emoji";
import {
  EducationType,
  ExperienceType,
  FeedbackType,
  ProjectType,
  SkillsSectionType,
  SkillBarsType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
} from "./types/sections";

export const greetings: GreetingsType = {
  name: "Jugal Vaghmashi",
  title: "Hi all, I'm Jugal",
  description:
    "I'm a code-slinging Full Stack web developer with hands-on experience building Full Stack web apps using  React.js, and a sprinkle of Data Structures. I have an insatiable curiosity for the latest tech trends and love deploying them in my projects (sometimes just to see what breaks!). A self-driven problem-solver, I thrive on caffeine, collaboration, and the occasional debugging victory dance. I'm a self-motivated and hardworking individual who is always ready to learn new things and work in a team.",
  resumeLink: "https://drive.google.com/file/d/1gqjdz4xvWI2T21ey6TZkHWcYv8SemBho/view?usp=sharing",
};

export const openSource = {
  githubUserName: "jugal-ahir",
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  email: "mailto:vaghmashijugal@gmail.com",
  linkedin: "www.linkedin.com/in/jugalvaghmashi",
  github: "https://github.com/jugal-ahir",
  instagram: "https://www.instagram.com/meahir.jugal",
};

export const skillsSection: SkillsSectionType = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  data: [
    {
      title: "Full Stack Development",
      lottieAnimationFile: "/lottie/skills/fullstack.json", // Path of Lottie Animation JSON File
      skills: [
        emoji("⚡ Building full stack website using MERN Stack"),
        emoji("⚡ Building responsive web apps"),
        emoji("⚡ Mastering Data Structures and Competitive Programming"),
      ],
      softwareSkills: [
        {
          skillName: "Python",
          iconifyTag: "logos:python",
        },
        {
          skillName: "JavaScript",
          iconifyTag: "logos:javascript",
        },
        {
          skillName: "Reactjs",
          iconifyTag: "vscode-icons:file-type-reactjs",
        },
        {
          skillName: "Nextjs",
          iconifyTag: "vscode-icons:file-type-light-next",
        },

        {
          skillName: "Github",
          iconifyTag: "akar-icons:github-fill",
        },
      ],
    },
  ],
};

export const SkillBars: SkillBarsType[] = [
  {
    Stack: "Frontend/Design", //Insert stack or technology you have experience in
    progressPercentage: "85", //Insert relative proficiency in percentage
  },
  {
    Stack: "Backend",
    progressPercentage: "90",
  },
  {
    Stack: "Programming",
    progressPercentage: "95",
  },
];

export const educationInfo: EducationType[] = [
  {
    schoolName: "Ahmedabad University",
    subHeader: "Bachelor of technology in Computer Science and Engineering",
    duration: "July 2023 - April 2027",
    desc: "",
    grade: "3.3/4",
    descBullets: [], // Array of Strings
  },
  {
    schoolName: "P.P Savani, GSEB",
    subHeader: "Senior Secondary",
    duration: "2022",
    desc: "",
    grade: "80%",
    descBullets: [], // Array of Strings
  },
  {
    schoolName: "Ryan International School, ICSE",
    subHeader: "Secondary",
    duration: "2020",
    desc: "",
    grade: "94%",
    descBullets: [], // Array of Strings
  },
];

export const experience: ExperienceType[] = [
  {
    role: "Software Development Training",
    company: "Lexus Softmac",
    companyLogo: "/img/icons/common/lexus.jpg",
    date: "May 2024 - July 2024",
    desc: "During my internship at Lexus Softmac as a CSE Intern, I gained a deeper understanding of how software integrates with hardware machines. I enhanced my knowledge of software development, particularly in C++, and contributed to analyzing and improving the company's data flow systems.",
  },

];

export const projects: ProjectType[] = [
  {
    name: "My Portfolio",
    desc: "Software Developer Portfolio Template built with react.js and next.js bootstrap that helps you showcase your work and skills as a software developer.",
    github: "",
    link: "",
  },
  {
    name: "ByteCopied",
    desc: "ByteCopied is a classroom-ready platform designed for 1st-year CSE students and professors to streamline code sharing and management during programming labs. ",
    github: "https://github.com/jugal-ahir/ByteCopied",
    link: "https://jugal-ahir.github.io/ByteCopied/",
  },
  {
    name: "ByteSynced",
    desc: "ByteSynced is the ideal tool for interactive and productive coding sessions",
    github: "https://github.com/jugal-ahir/ByteSynced",
    link: "https://byte-synced.vercel.app/",
  },

];

export const feedbacks: FeedbackType[] = [
//   {
//     name: "Syed Jamal",
//     role: "Frontend Developer at Meganos Software",
//     feedback:
//       "You were a wonderful addition to our team, alhumdulillah. I'm quite impressed with your abilities and professional practices. You approach problems from a unique perspective and always ask the right question. Finding a good teammate like Hanzla is extremely difficult. He has contributed to the growth of our organization and continues to do so. May Allah bless you with everything you desire.",
//   },
//   {
//     name: "Wajahat Malek",
//     role: "CEO at Duseca Software",
//     feedback:
//       "Hanzla has a deep understanding of web development technologies and is adept at using them to build scalable, robust, and secure web applications. He has worked on various projects, ranging from small-scale to large-scale, and has shown his ability to work collaboratively with others while maintaining a high level of productivity and quality. Hanzla is a pleasure to work with, and I have no doubt that he will be an asset to any team or organization. I highly recommend Hanzla for any Full Stack Django, React.js, or Blockchain development projects, and I wish him all the best in his future endeavors.",
//   },
//   {
//     name: "Zaid Zaffar",
//     role: "CEO at ZR Technologies",
//     feedback:
//       "Very skilled at what he does and has an in depth knowledge of Django and he's always ready to handle any challenges thrown at him. He's been a valuable member of my team and i look forward to working with him in the years to come",
//   },
];

// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
  title: "Jugal Vaghmashi",
  description: greetings.description,
  author: "Jugal Vaghmashi",
  image: "https://avatars.githubusercontent.com/u/59178380?v=4",
  url: "https://developer-portfolio-1hanzla100.vercel.app",
  keywords: [
    "Jugal",
    "Jugal Vaghmashi",
    "Portfolio",
    "Jugal Portfolio ",
    "Jugal Vaghmashi Portfolio",
  ],
};
