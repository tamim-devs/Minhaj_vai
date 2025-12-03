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
    title: "",
    name: "Ankith Jain",
    description: "Omni-Investor | Visionary Leader | Futurist",
    image: "/images/client.png",
  },
  {
    id: 2,
    type: "credentials",
    title: "Impact",
    subtitle: "MORE ABOUT ME",
    icon: "/images/Impact.png",
     link: "/aboutme"
  },
  {
    id: 3,
    type: "projects",
    title: "My Ventures",
    subtitle: "SHOWCASE",
    image: "/images/My-Venture.png",
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
  image: "/images/2.png",
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
I am a serial technopreneur, investor, philanthropist, and futurist whose journey embodies
vision and purpose. By the age of 32, I have built a diverse portfolio across technology,
artificial intelligence, real estate, and frontier industries, driven by one guiding principle: to
create value that endures.
Since launching my first venture in 2012, I have learned to recognize opportunities where
others see uncertainty, turning bold ideas into thriving ecosystems. Often referred to as an
Omni-Investor, I connect industries, technologies, and people to uncover possibilities that
redefine progress.
My philosophy extends beyond capital. I mentor founders, empower leadership, and help
teams navigate complexity with clarity and foresight. My approach blends strategic
investment with human insight, building ventures that are resilient, adaptive, and
transformative.
Rooted in curiosity and purpose, I continue to explore how innovation can drive a more
connected, sustainable, and intelligent world. My philanthropic efforts mirror this ethos by
prioritizing progress that uplifts rather than disrupts.
”True leadership is not about predicting the future. It is about building it with
vision, courage, and collective action.”

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
  { label: "Foresight and Future Mapping", percent: '92', desc: "Non enim Anticipating emerging trends." },
  { label: "Strategic Investment", percent: 90, desc: "Allocating capital with purpose" },
  { label: "Systems Thinking", percent: 88, desc: "Understanding interconnected environments." },
  { label: "Technical Fluency", percent: 87, desc: "Adapting to evolving technologies" },
  { label: "Visionary Leadership", percent: 85, desc: " Guiding teams toward long-term outcomes." },
  { label: "Network Orchestration XD", percent: 83, desc: "Building collaborative ecosystems." },
];

const aboutAwards = [
  { date: "14 May 2020", award: "Bluebase", desc: "Non enim praesent" },
  { date: "26 June 2018", award: "Demble", desc: "Non enim praesent" },
];




//blog

const blogPosts = [
  {
    id: 1,
    image: "/images/blog1.png",
    title: "The Rise of the Omni Investors: Why the Future Belongs to Cross Industry Thinkers",
    sections: [
      {
        heading: "",
        content: [
          { type: "text", value: "In a world where industries blend, technology accelerates and old boundaries fade, a new type of investor is emerging. This investor moves across multiple domains, connecting ideas and people to create lasting value" },
          { type: "br" },
          { type: "text", value: "The Omni Investor sees the entire landscape rather than isolated parts. They understand that real innovation appears at the intersections where sectors meet. Artificial intelligence " },
          { type: "br" },
          { type: "text", value: "transforms healthcare, automation reshapes real estate, and sustainability influences manufacturing. As industries become increasingly interconnected, those who can navigate these intersections will lead the next wave of progress" },
        ]
      },
      {
        heading: "The Intersections Where Innovation Happens",
        content: [
          { type: "text", value: "The power of cross industry thinking comes from the realisation that the most transformative breakthroughs arise when different disciplines meet. Consider these intersections."},
          { type: "br" },
          
        ]
      },
      {
        heading: "",
        content: [
           { type: "bold",  value: "Technology with healthcare" },
           { type: "br" },
        ]
      },
      {
        heading: "",
        content: [
           { type: "text",  value: "AI driven diagnostics, robotic surgeries and personalised treatments are possible because medical science merged with technological innovation." },
           { type: "br" },
        ]
      },
     
       {
        heading: "",
        content: [
           { type: "bold",  value: "Real estate with automation" },
           { type: "br" },
        ]
      },
      {
        heading: "",
        content: [
           { type: "text",  value: "Smart buildings, energy efficient homes and automated security systems exist because construction combined with digital technology." },
           { type: "br" },
        ]
      },

       {
        heading: "",
        content: [
           { type: "bold",  value: "Education with artificial intelligence" },
           { type: "br" },
        ]
      },
      {
        heading: "",
        content: [
           { type: "text",  value: "Adaptive learning, remote classrooms and personalised skill development emerged when teaching methods intersected with data and automation.." },
           { type: "br" },
           {type: 'text', value:"In each case, value was created not by mastering one field but by understanding how multiple fields influence one another. The Omni Investor thrives in this environment. They look beyond the obvious, anticipate hidden connections and recognise possibilities long before others see them."}
        ]
      },

       {
        heading: "The Core Mindset of an Omni Investor",
        content: [
           { type: "text",  value: "An Omni Investor is shaped by a particular way of thinking. It is not only about investing money. It is about investing vision, intent and insight." },
           { type: "br" },
           {type: 'text', value:"Here are key elements of their mindset."},
            { type: "br" },
           
        ]
      },
       {
        heading: "",
        content: [
           { type: "text",  value: "Adaptive learning, remote classrooms and personalised skill development emerged when teaching methods intersected with data and automation.." },
           { type: "br" },
           {type: 'text', value:"In each case, value was created not by mastering one field but by understanding how multiple fields influence one another. The Omni Investor thrives in this environment. They look beyond the obvious, anticipate hidden connections and recognise possibilities long before others see them."}
        ]
      },

    ]
  }
];



// 🔍 RIGHT SIDEBAR — SEARCH PLACEHOLDER
const blogSearchPlaceholder = "Search here...";


// 📌 RECENT POSTS
const recentPosts = [
  "Consulted admitting is power acuteness.",
  "Unsatiable entreaties may collecting power.",
  "Discovery incomode earnestly he commanded",
  "Unsatiable entreaties may collecting power",
];


// 📂 CATEGORIES
const blogCategories = [
  "Analysis",
  "Firewall",
  "IT Solutions",
  "Security",
  "Technology",
];


// 🏷 TAGS
const blogTags = [
  "SaaS",
  "UI/UX",
  "Web",
  "Java",
  "Figma",
  "Development",
];



export {blogSearchPlaceholder, aboutSummary ,blogPosts, blogTags,blogCategories, recentPosts,  aboutEducation, aboutExperience, aboutSkills ,aboutAwards, navLinks,experience,worksData, profile,education,cta,socialLinks, headings  };