const navLinks = [
  { id: 1, label: "HOME", path: "/" },
  { id: 2, label: "ABOUT", path: "/about" },
  { id: 3, label: "VENTURES", path: "/works" },
  { id: 4, label: "CONTACT", path: "/contact" },
];
const homeCards = [
  {
    id: 1,
    type: "profile",
    title: "A Web Designer",
    name: "David Henderson",
    description: "I am a Web Designer based in San Francisco.",
    image: "/client.png",
  },
  {
    id: 2,
    type: "credentials",
    title: "Credentials",
    subtitle: "More About Me",
    icon: "/sign.png",
     link: "/about"
  },
  {
    id: 3,
    type: "projects",
    title: "Projects",
    subtitle: "Showcase",
    image: "/SHOWCASE.png",
    link: "/works"

  },
  {
    id: 4,
    type: "blog",
    title: "GFonts",
    subtitle: "Blog",
    icon: "/images/gfonts.png",
  },
  {
    id: 5,
    type: "services",
    title: "Services Offering",
    subtitle: "Specialization",
    icons: ["/icons/design.svg", "/icons/branding.svg"],
  },
  {
    id: 6,
    type: "profiles",
    title: "Profiles",
    subtitle: "Stay With Me",
    icons: ["/icons/dribbble.svg", "/icons/twitter.svg"],
  },
];
;

const homeStats = [
  { id: 1, value: "07", label: "Years Experience" },
  { id: 2, value: "+125", label: "Clients Worldwide" },
  { id: 3, value: "+210", label: "Total Projects" },
];

const homeCTA = {
  title: "Let's work",
  highlight: "together."
};

export { homeCards, homeStats, homeCTA };

 const headings = {
  summaryH1: "Self-summary",
  experienceH1: "Work Experience",
  educationH1: "Education",
  contactH1: "Contact Me",
  image: "images/star-2.png",
};

const worksData = [
  {
    id: 1,
    category: "WEB DESIGNING",
    title: "Dynamic",
    image: "/SHOWCASE.png",
  },
  {
    id: 2,
    category: "MOBILE DESIGNING",
    title: "Seven Studio",
    image: "/SHOWCASE.png",
  },
  {
    id: 3,
    category: "BRANDING",
    title: "Raven Studio",
    image: "/SHOWCASE.png",
  },
  {
    id: 4,
    category: "PHOTOGRAPHY",
    title: "Diesel H1",
    image: "/SHOWCASE.png",
  },
  {
    id: 5,
    category: "MOBILE DESIGNING",
    title: "Submarine",
    image: "/SHOWCASE.png",
  },
  {
    id: 6,
    category: "WEB DESIGNING",
    title: "Hydra Merc",
    image: "/SHOWCASE.png",
  },
];


const profile = {
    name: "Ankith Jain",
  description: `What excites me most is the endless potential of human innovation,  the way 
technology, intelligence, and ambition converge to create progress. To shape the 
future, we don’t wait, we build it, together. `,
  image: "/client.png",
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