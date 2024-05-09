import {
  mobile,
  backend,
  back,
  creator,
  web,
  javascript,
  typescript,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  docker,
  phonepe,
  sprinklr,
  tigerhall,
  parivaar,
  rnsb,
  rnsh,
  rnec,
  portfolio,
  mmecGPT,
  pdfGPT,
  lego,
  aiPedia,
  aipedia2,
  threejs,
  frontend,
  // backend,
  fullstack,
  tindog,
  amazon,
  aip,
  gym,

  postgres,
  sql,
  mongod,
  restful,
  next,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  // {
  //   id: "works",
  //   title: "Works",
  // },
  {
    id: "contact",
    title: "Contact",
  },
  {
    id: "linkedIn",
    title: "LinkedIn",
    isExternal: true,
    link: "https://www.linkedin.com/in/tufail-ahmed-bargir-848844230/",
  },

  {
    id: "github",
    title: "Github",
    isExternal: true,
    link: "https://github.com/Tufailahmed-Bargir",
  },
  {
    id: "resume",
    title: "Resume",
    isExternal: true,
    link: "https://drive.google.com/file/d/1Y0v6pECnidlb-nD8zT8uerdRF3H1XlxQ/view?usp=sharing",
  },
];

const services = [
  {
    title: "Full Stack web developer",
    icon: fullstack,
  },
  {
    title: "Frontend Developer",
    icon: frontend,
  },
  {
    title: "Backend Developer",
    icon: back,
  },
  {
    title: "UI/UX Designer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "JavaScript",
    icon: javascript,
  },
  // {
  //   name: "React native",
  //   icon: reactjs,
  // },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  // {
  //   name: "Redux Toolkit",
  //   icon: redux,
  // },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Figma",
    icon: figma,
  },
  {
    name: "Docker",
    icon: docker,
  },
  {
    name: "postgres",
    icon: postgres,
  },
  {
    name: "Sql",
    icon: sql,
  },
  {
    name: "Mongodb",
    icon: mongod,
  },
  {
    name: "RESTFull API",
    icon: restful,
  },
  {
    name: "Next JS",
    icon: next,
  },
];

const blogs = [
  {
    title: "First Blog",
    description: "First Blog Description",
    datePublished: "2021-10-10",
  },
  {
    title: "Second Blog",
    description: "Second Blog Description",
    datePublished: "2021-10-10",
  },
];

// const experiences = [
//   {
//     title: "Founder",
//     company_name: "Parivaar",
//     icon: parivaar,
//     iconBg: "#E6DEDD",
//     date: "June 2023 - Present",
//     points: [
//       `Founded Parivaar, an online community management platform.`,
//       `Utilized Expo for rapid Android and iOS app deployment.`,
//       `Implemented various modules including self onboarding, directory management, user filtering, community management, dynamic flags.`,
//       `Scaled to 10K users, acquired 5 clients in 3 months, enhancing community engagement.`,
//     ],
//   },

//   {
//     title: "Mobile Lead Engineer",
//     company_name: "Tigerhall",
//     icon: tigerhall,
//     iconBg: "#383E56",
//     date: "August 2020 - June 2023",
//     points: [
//       "Spearheaded end-to-end development and launch of mobile products with user-centric design",
//       "Fostered cross-departmental collaboration, particularly with Customer Support.",
//       "Mentored development teams, ensuring proficiency in iOS/Android and agile methodologies while managing project timelines and milestones.",
//     ],
//   },

//   {
//     title: "Senior Software Engineer",
//     company_name: "Phonepe",
//     icon: phonepe,
//     iconBg: "#E6DEDD",
//     date: "Feb 2018 - May 2020",
//     points: [
//       "Developed React Native microapps within the PhonePe ecosystem.",
//       "Leveraged expertise in React Native and native development to deliver high-quality microapps.",
//       "Collaborated closely with native developers to integrate microapps smoothly.",
//     ],
//   },

//   {
//     title: "Product Engineer",
//     company_name: "Sprinklr",
//     icon: sprinklr,
//     iconBg: "#383E56",
//     date: "Jan 2015 - Feb 2018",
//     points: [
//       "Began career at Sprinklr maintaining iOS apps in Objective-C.",
//       "Leveraged expertise in both Objective-C and React Native to troubleshoot and optimize apps. Played a pivotal role in maintaining and evolving Sprinklr's React Native mobile offerings.",
//     ],
//   },
// ];

// const testimonials = [
//   {
//     testimonial:
//       "If you're looking for a person who is hardworking, prioritizes user experience, and has great technical skills, Ronak is the one! He is someone who always takes the initiative to optimize processes and prioritize work based on delivering maximum value to the end user. I could count on him to explain technical knowledge in a simple manner for me to understand. A great leader, team player, and friend working with Ronak has been such a wonderful experience!",
//     name: "Aishwarya Sriram",
//     designation: "Product Manager",
//     company: "Tigerhall",
//     image: "https://randomuser.me/api/portraits/women/1.jpg",
//   },
//   {
//     testimonial: `He led our squad! 
// From the very beginning of my onboarding process, Ronak took the initiative to ensure that I had all the necessary information about the products and services we offer. His ability to create a positive and inclusive team culture fosters collaboration and promotes a sense of belonging among team members.
// His dedication to helping others, exceptional knowledge, and outstanding leadership qualities make him an invaluable asset to any team`,
//     name: "Heena",
//     designation: "Frontend Lead",
//     company: "Tigerhall",
//     image: "https://randomuser.me/api/portraits/women/4.jpg",
//   },
//   {
//     testimonial: `Ronak is an experienced mobile and front-end engineer, and definitely a great guy! He always delivers high-quality work with humility, focus and integrity. He has been an incredible colleague at Tigerhall, a pleasure to work with him, always ready to help others and share his insights, open to give and receive feedback.

// Good technical skills can be developed easily, but humility and integrity not. He has it all!`,
//     name: "Carlos Fernandez",
//     designation: "Frontend Lead",
//     company: "Tigerhall",
//     image: "https://randomuser.me/api/portraits/men/4.jpg",
//   },
// ];

const projects = [
  {
    name: "mmecGPT",
    description:
      "Open Source mmecGPT is the clone of the chatGPT .",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "Express",
        color: "blue-text-gradient",
      },
      {
        name: "Axios",
        color: "green-text-gradient",
      },
      {
        name: "openAI API",
        color: "pink-text-gradient",
      },
    ],
    image: mmecGPT,
    source_code_link: "https://github.com/Tufailahmed-Bargir/mmecGPT_final",
  },

  // 2nd project

  {
    name: "Portfolio",
    description:
      "This portfolio is also one of my project i build.",
    tags: [
      {
        name: "NextJs",
        color: "green-text-gradient",
      },
      // {
      //   name: "",
      //   color: "pink-text-gradient",
      // },
    ],
    image: portfolio,
    source_code_link:
      "https://github.com/Tufailahmed-Bargir/portfolio",
  },
  {
    name: "aipedia",
    description:
      "aiPedia an ai tool store/directory for the students to leverage the students productivity.",
    tags: [
      {
        name: "nextJs",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "green-text-gradient",
      },
      {
        name: "RESTFull API",
        color: "pink-text-gradient",
      },
    ],
    image: aip,
    source_code_link:
      "https://github.com/Tufailahmed-Bargir/aipedia",
  },

  // 4th project
  {
    name: "amazon clone",
    description:
      "cloned the landing page of amazon",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      // {
      //   name: "RESTFull API",
      //   color: "pink-text-gradient",
      // },
    ],
    image: amazon,
    source_code_link:
      "https://github.com/Tufailahmed-Bargir/amazon_clone",
  },
  // 5th project
  {
    name: "Nearby Pets Exploring app",
    description:
      "aiPedia an ai tool store/directory for the students to leverage the students productivity.",
    tags: [
      {
        name: "nextJs",
        color: "blue-text-gradient",
      },
    ],
    image: tindog,
    source_code_link:
      "https://github.com/Tufailahmed-Bargir/tindog",
  },

  // 6th
  {
    name: "fitness club gym website",
    description:
      "aiPedia an ai tool store/directory for the students to leverage the students productivity.",
    tags: [
      {
        name: "nextJs",
        color: "blue-text-gradient",
      },
    ],
    image: gym,
    source_code_link:
      "https://github.com/Tufailahmed-Bargir/gym_website",
  },
  // 7th project
  {
  name: "pdfGPT",
  description:
    "pdfGPT is the ai tool which allows users to chat with pdf and also allows users to ask the questions  .",
  tags: [
    {
      name: "express",
      color: "blue-text-gradient",
    },
    {
      name: "Ejs",
      color: "blue-text-gradient",
    },
  
    {
      name: "Gemini API",
      color: "pink-text-gradient",
    },
  ],
  image: pdfGPT,
  source_code_link: "https://github.com/Tufailahmed-Bargir/pdfGPT",
},
// 8th project
{
  name: "Lego",
  description:
    "Lego is the Legacy code converter which takes the legacy code and converts it into the modern codes",
  tags: [
    {
      name: "express",
      color: "blue-text-gradient",
    },
    {
      name: "Ejs",
      color: "blue-text-gradient",
    },
  
    {
      name: "Gemini API",
      color: "pink-text-gradient",
    },
  ],
  image: lego,
  source_code_link: "https://github.com/Tufailahmed-Bargir/lego",
}
  
];

export { services, technologies,  projects, blogs };
