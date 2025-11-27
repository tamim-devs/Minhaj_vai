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
    image: "/images/client.png",
  },
  {
    id: 2,
    type: "credentials",
    title: "Credentials",
    subtitle: "More About Me",
    icon: "/images/sign.png",
     link: "/aboutme"
  },
  {
    id: 3,
    type: "projects",
    title: "Projects",
    subtitle: "Showcase",
    image: "/images/SHOWCASE.png",
    link: "/works"

  },
  {
    id: 4,
    type: "blog",
    title: "GFonts",
    subtitle: "Blog",
    icon: "../../public/images/gfonts.png",
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
    image: "/images/SHOWCASE.png",
  },
  {
    id: 2,
    category: "MOBILE DESIGNING",
    title: "Seven Studio",
    image: "/images/SHOWCASE.png",
  },
  {
    id: 3,
    category: "BRANDING",
    title: "Raven Studio",
    image: "/images/SHOWCASE.png",
  },
  {
    id: 4,
    category: "PHOTOGRAPHY",
    title: "Diesel H1",
    image: "/images/SHOWCASE.png",
  },
  {
    id: 5,
    category: "MOBILE DESIGNING",
    title: "Submarine",
    image: "/images/SHOWCASE.png",
  },
  {
    id: 6,
    category: "WEB DESIGNING",
    title: "Hydra Merc",
    image: "/images/SHOWCASE.png",
  },
];


const profile = {
    name: "Ankith Jain",
  description: `What excites me most is the endless potential of human innovation,  the way 
technology, intelligence, and ambition converge to create progress. To shape the 
future, we don’t wait, we build it, together. `,
  image: "/images/client.png",
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


const aboutSummary = `
Sit amet luctussd fav venenatis, lectus magna fringilla inis urna, porttitor
rhoncus dolor purus non enim praesent in elementum sahas facilisis leo, vel
fringilla est ullamcorper eget nulla facilisi etisam dignissim diam quis enim
lobortis viverra orci sagittis eu volutpat odio facilisis mauris sit.

Scelerisque fermentum duisi faucibus in ornare quam sisd sit amet luctussd fav
venenatis, lectus magna fringilla zac urna, porttitor rhoncus dolor purus non
enim praesent cuz elementum sahas facilisis leot.
`;

 const aboutExperience = [
  {
    year: "2007 - 2017",
    role: "Framer Designer & Developer",
    company: "Bluebase Designs",
    desc: `Sit amet luctussd fav venenatis, lectus magna fringilla inis urna, porttitor
rhoncus dolor purus non enim praesent in elementum sahas facilisis leo, vel
fringilla est ullamcorper eget nulla facilisi etisam dignissim diam quis enim
lobortis viverra orci sagittis eu volutpat odio facilisis mauris sit.`,
  },
  {
    year: "2017 - 2023",
    role: "Front-End Developer",
    company: "Larsen & Toubro",
    desc: `Sit amet luctussd fav venenatis, lectus magna fringilla inis urna, porttitor
rhoncus dolor purus non enim praesent in elementum sahas facilisis leo, vel
fringilla est ullamcorper eget nulla facilisi etisam dignissim diam quis enim
lobortis viverra orci sagittis eu volutpat odio facilisis mauris sit.`,
  },
];

const aboutEducation = [
  {
    year: "2004 - 2007",
    degree: "Bachelor Degree in Psychology",
    institute: "University of California",
    desc: `Sit amet luctussd fav venenatis, lectus magna fringilla inis urna, porttitor
rhoncus dolor purus non enim praesent in elementum sahas facilisis leo.`,
  },
  {
    year: "2007 - 2009",
    degree: "Master Degree in Designing",
    institute: "University of Texas",
    desc: `Sit amet luctussd fav venenatis, lectus magna fringilla inis urna, porttitor
rhoncus dolor purus non enim praesent in elementum sahas facilisis leo.`,
  },
];

 const aboutSkills = [
  { label: "JavaScript", percent: 85, desc: "Non enim praesent" },
  { label: "Python", percent: 78, desc: "Non enim praesent" },
  { label: "Figma", percent: 92, desc: "Non enim praesent" },
  { label: "WordPress", percent: 90, desc: "Non enim praesent" },
  { label: "React", percent: 81, desc: "Non enim praesent" },
  { label: "Adobe XD", percent: 87, desc: "Non enim praesent" },
];

const aboutAwards = [
  { date: "14 May 2020", award: "Bluebase", desc: "Non enim praesent" },
  { date: "26 June 2018", award: "Demble", desc: "Non enim praesent" },
];

export {aboutSummary , aboutEducation, aboutExperience, aboutSkills ,aboutAwards, navLinks,experience,worksData, profile,education,cta,socialLinks, headings  };