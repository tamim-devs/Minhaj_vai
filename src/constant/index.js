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

const worksData = [
  {
    id: 1,
    category: "WEB DESIGNING",
    title: "Dynamic",
    image: "../../public/SHOWCASE.png",
  },
  {
    id: 2,
    category: "MOBILE DESIGNING",
    title: "Seven Studio",
    image: "../../public/SHOWCASE.png",
  },
  {
    id: 3,
    category: "BRANDING",
    title: "Raven Studio",
    image: "../../public/SHOWCASE.png",
  },
  {
    id: 4,
    category: "PHOTOGRAPHY",
    title: "Diesel H1",
    image: "../../public/SHOWCASE.png",
  },
  {
    id: 5,
    category: "MOBILE DESIGNING",
    title: "Submarine",
    image: "../../public/SHOWCASE.png",
  },
  {
    id: 6,
    category: "WEB DESIGNING",
    title: "Hydra Merc",
    image: "../../public/SHOWCASE.png",
  },
];


const profile = {
    name: "Ankith Jain",
  description: `What excites me most is the endless potential of human innovation,  the way 
technology, intelligence, and ambition converge to create progress. To shape the 
future, we don’t wait, we build it, together. `,
  image: "../../public/dp.png",
};

const experience = [
  {
    year: "Envision",
    role: "“Imagine. Innovate. Accelerate.” ",
    company: ""
  },
  {
    year: "Collaborate ",
    role: "“Connect. Create. Transform.” ",
    company: ""
  },
  {
    year: "Implement ",
    role: "“Execute. Elevate. Sustain.” ",
    company: ""
  }
];


const education = [
  {
    year: "2009 – 2013",
    degree: "Venture Foundations ",
    
  },
  {
    year: "2014 – 2018",
    degree: " Ecosystem Building ",
    
  },
  {
    year: "2019 – Present",
    degree: " Frontier Investments",
    
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


export { navLinks,experience,worksData, profile,education,cta,socialLinks, headings  };