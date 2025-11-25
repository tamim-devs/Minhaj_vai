const navLinks = [
  { id: 1, label: "HOME", path: "/" },
  { id: 2, label: "ABOUT", path: "/about" },
  { id: 3, label: "VENTURES", path: "/works" },
  { id: 4, label: "CONTACT", path: "/contact" },
];

 const headings = {
  summaryH1: "Self-summary",
  experienceH1: "Work Experience",
  educationH1: "Education",
  contactH1: "Contact Me",
  image: "../../public/images/star-2.png",
  img2: "../../public/images/down arrorw star.png"
};



const profile = {
    name: "David Henderson",
  description: `I am a San Francisco-based product designer with a focus on
web design, illustration, and visual development. I have a diverse range of
experience having worked across various fields and industries.`,
  image: "../../public/images/me2.png",
};

const experience = [
  {
    year: "2007 - 2017",
    role: "Framer Designer & Developer",
    company: "Bluebase Designs"
  },
  {
    year: "2017 - 2023",
    role: "Front-End Developer",
    company: "Larsen & Toubro"
  }
];


const education = [
  {
    year: "2004 - 2007",
    degree: "Bachelor Degree in Psychology",
    school: "University of California"
  },
  {
    year: "2007 - 2009",
    degree: "Master Degree in Designing",
    school: "University of Texas"
  }
];

const socialLinks = [
  { icon: "twitter", url: "https://twitter.com/" },
  { icon: "globe", url: "https://myportfolio.com" }
];

const cta = {
  title: "Let's work",
  highlight: "together."
};


export { navLinks,experience, profile,education,cta,socialLinks, headings  };