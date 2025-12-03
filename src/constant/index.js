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
   
        content: [
           { type: "br" },
           {type: 'text', value:"Here are key elements of their mindset."},
            { type: "br" },
           
        ]
      },
        {
   
        content: [
           { type: "br" },
           {type: 'bold', value:"Curiosity that never stops "},
            { type: "br" },
           
        ]
      },
       {
   
        content: [
           { type: "br" },
           {type: 'text', value:"They constantly explore new ideas, not because they must, but because they are genuinely fascinated by how the world works. Curiosity helps them connect unrelated dots."},
            { type: "br" },
           
        ]
      },
    {
   
        content: [
           { type: "br" },
           {type: 'bold', value:"Comfort with uncertainty"},
            { type: "br" },
           
        ]
      },

       {
   
        content: [
           {type: 'text', value:"Most people step back when they cannot predict the outcome. Omni Investors step forward. They understand that uncertainty often hides the biggest opportunities."},
            { type: "br" },
           
           
        ]
      },
       {
   
        content: [
          { type: "br" },
                {type: 'bold', value:"Holistic evaluation of opportunitie"},
            {type: 'text', value: "Instead of analysing a venture through a single lens, they evaluate how technology, behaviour, policy and global trends influence it together."},

           { type: "br" },
           
        ]
      },

    
         {
   
        content: [
          { type: "br" },
                {type: 'bold', value:"Value creation over quick returns"},
            {type: 'text', value: "Omni Investors prioritise ventures with long term potential. Their focus is on building ecosystems, not just making fast profits."},

           { type: "br" },
           
        ]
      },


        {
   
        content: [
          { type: "br" },
                {type: 'bold', value:"Human insight combined with data"},
            {type: 'text', value: "Even with all the data in the world, they rely on intuition, emotional intelligence and human connection to guide their choices."},

           { type: "br" },
           
        ]
      },
        {
   
        content: [
          { type: "br" },
            
            {type: 'text', value: "This mindset allows them to move across industries with clarity rather than confusion. They become bridges between domains that rarely communicate with each other"},

           { type: "br" },
           
        ]
      },

     {
        heading: "Why the Future Belongs to Cross Industry Thinkers",
        content: [
          { type: "text", value: "The coming decades will reward those who understand complexity rather than avoid it. Here are the major reasons cross industry thinkers are becoming the leaders of the future."},
          { type: "br" },
          
        ]
      },
         {
   
        content: [
          { type: "br" },
                {type: 'bold', value:"Everything is becoming interconnected"},
            {type: 'text', value: "No industry operates alone anymore. Digital infrastructure powers every business. Sustainability influences every decision. Data shapes every strategy. The person who sees the largest picture makes the soundest choices."},

           { type: "br" },
           
        ]
      },

        {
   
        content: [
          { type: "br" },
                {type: 'bold', value:"Innovation is accelerating at the edges"},
            {type: 'text', value: "No industry operates alone anymore. Digital infrastructure powers every business. Sustainability influences every decision. Data shapes every strategy. The person who sees the largest picture makes the soundest choices."},

           { type: "br" },
           
        ]
      },


        {
   
        content: [
          { type: "br" },
                {type: 'bold', value:"The demand for adaptable thinking is rising"},
            {type: 'text', value: "When market conditions shift, specialised thinkers struggle. Omni Investors adapt quickly because they already operate across varied environments. Their exposure to different sectors enhances their resilience."},

           { type: "br" },
           
        ]
      }, 

      {
        heading: "Examples of Cross Industry Thinking in Action",
        content: [
          { type: "text", value: "To understand the impact of Omni Investors, consider a few scenarios."},
          { type: "br" },
          
        ]
      }, 

        {
   
        content: [
                {type: 'text', value:"A tech entrepreneur invests in sustainable agriculture because they recognise how climate technology will reshape food systems."},

           { type: "br" },
           
        ]
      }, 
      

       {
   
        content: [
          { type: "br" },
                {type: 'text', value:"A real estate developer partners with an AI company to design safe and intelligent living spaces."},

           { type: "br" },
           
        ]
      }, 


         {
   
        content: [
        
                {type: 'text', value:"An investor with experience in education collaborates with a healthcare startup to build mental wellness solutions for students."},

           { type: "br" },
           
        ]
      }, 

        {
   
        content: [
          
                {type: 'text', value:"None of these moves are random. They emerge from an understanding that progress happens when diverse areas strengthen one another. This is the essence of Omni Investment philosophy"},

           { type: "br" },
           
        ]
      }, 

      {
        heading: "How to Develop the Omni Investor Mindset",
        content: [
          { type: "text", value: "The Even if someone is rooted in one field, the Omni mindset can be developed through consistent effort."},
          { type: "br" },
          
        ]
      },

         {
   
        content: [
        
                {type: 'bold', value:"Learn across disciplines"},

           { type: "br" },
           
        ]
      },


         {
   
        content: [
        
                {type: 'text', value:"Read and follow advancements in various sectors. A broader knowledge base builds insight."},

           { type: "br" },
           
        ]
      },
         {
   
        content: [
        
                {type: 'bold', value:"Surround yourself with diverse thinkers"},

           { type: "br" },
           
        ]
      },

          {
   
        content: [
        
                {type: 'text', value:"Innovation grows when you interact with people who think differently."},

           { type: "br" },
           
        ]
      },

     {
   
        content: [
        
                {type: 'bold', value:"Ask bigger questions."},

           { type: "br" },
           
        ]
      },
      {
   
        content: [
        
                {type: 'text', value:"Instead of focusing on short term problems, explore why certain challenges exist. This leads to strategic clarity."},

           { type: "br" },
           
        ]
      },
      {
   
        content: [
        
                {type: 'bold', value:"Invest time before investing money"},

           { type: "br" },
           
        ]
      },

      {
   
        content: [
        
                {type: 'text', value:"Understanding the long term impact of an idea is more important than quick decision making."},

           { type: "br" },
           
        ]
      },


        {
   
        content: [
        
                {type: 'text', value:"By cultivating these practices, anyone can strengthen their ability to think beyond boundaries."},

           { type: "br" },
           
        ]
      },

      {
        heading: "Bottom Line",
        content: [
          { type: "text", value: "The Omni Investor represents the future of leadership and innovation. In a rapidly evolving world, those who can connect industries, understand systems and create value across diverse areas will shape the next phase of global progress. Their power lies not in specialising narrowly, but in embracing a mindset that blends curiosity, courage and collective vision."},
          { type: "br" },
          
        ]
      },
    ]
  },
{
    id: 2,
    image: "/images/blog2.png",
    title: "Turning Uncertainty Into Opportunity: The Mindset Behind Building Resilient Ventures",
    sections: [
      {
        heading: "",
        content: [
          { type: "text", value: "Uncertainty is often seen as a barrier. It makes people hesitate, rethink and sometimes walk away from possibilities. Yet throughout history, the most meaningful breakthroughs have emerged not during moments of comfort but in times filled with unpredictability. Markets shift, technologies advance, consumer behaviour changes and global events disrupt established systems. While many view uncertainty as a threat, resilient leaders and entrepreneurs see it as a source of opportunity." },
          { type: "br" },
          { type: "text", value: "The act of building a resilient venture is not rooted in avoiding uncertainty. It is rooted in understanding it, adapting to it and using it as a catalyst for growth. This mindset sets apart those who survive from those who succeed."},
        ]
      },
      {
        heading: "Why Uncertainty Is Not the Enemyhe Intersections Where Innovation Happens",
        content: [
          { type: "text", value: "Many assume that uncertainty means instability. But in reality, uncertainty simply means a situation where outcomes are unknown. Unknown outcomes can lead to challenges, but they also open the door to ideas that would never emerge in predictable conditions. Whenever industries become too comfortable, innovation slows. Disruption brings new thinking and fresh possibilities."},
          { type: "br" },
          { type: "text", value: "For entrepreneurs, uncertainty provides two clear advantages. First, it filters out those who are afraid to try. Second, it forces creativity and reinvention. When everything is certain, there is little need to innovate. When nothing is certain, innovation becomes essential. This is why resilient ventures often emerge from challenging environments."},
          { type: "br" },
          
        ]
      },
      {
        heading: "The Shift Toward a Resilient Mindset",
        content: [
           { type: "text",  value: "A resilient mindset begins with perspective. Instead of asking why uncertainty exists, resilient leaders ask how it can be used. They understand that conditions will always change, and they prepare for this reality rather than resisting it." },
           { type: "br" },
           { type: "text",  value: "Here are core elements of the resilient mindset." },
           { type: "br" },
           { type: "text",  value: "They accept that uncertainty is permanent." },
           { type: "br" },
           { type: "text",  value: "They stay flexible in their approach and are willing to redesign strategies when needed." },
           { type: "br" },
           { type: "text",  value: "They view setbacks as information rather than failures." },
           { type: "br" },
           { type: "text",  value: "They stay committed to the larger purpose of the venture instead of reacting emotionally to short term fluctuations." },
           { type: "br" },
           { type: "text",  value: "This perspective prevents panic and builds clarity even in unpredictable environments." },
           { type: "br" },
        ]
      },
      {
        heading: "Opportunities Hidden Inside Uncertainty",
        content: [
           { type: "text",  value: "Uncertainty often reveals opportunities that are not visible during stable times. These opportunities usually fall into three categories." },
           { type: "br" },
           { type: "bold",  value: "Emerging needs" },
           { type: "br" },
           { type: "text",  value: "When circumstances shift, people develop new needs. These needs become openings for new ventures. For example, when remote work began to rise, businesses that offered tools for digital collaboration quickly became essential." },
           { type: "br" },
           { type: "bold",  value: "Market gaps" },
           { type: "br" },
           { type: "text",  value: "Disruptions expose inefficiencies in existing systems. Resilient leaders identify these weaknesses and create solutions that others overlook." },
           { type: "br" },
           { type: "bold",  value: "Acceleration of change" },
           { type: "br" },
           { type: "text",  value: "Technological and behavioural changes that would normally take years often speed up during uncertain periods. This creates an environment where early movers can grow rapidly." },
           { type: "br" },
           { type: "text",  value: "In each case, uncertainty becomes a force that expands possibility for those willing to explore it." },
           { type: "br" },
        ]
      },
     
       {
        heading: "Thinking Long Term When Everything Feels Unstable",
        content: [
           { type: "text",  value: "One of the biggest challenges during uncertain times is maintaining a long term view. Many people focus on short term survival and make decisions based on fear. Resilient ventures do the opposite. They think ahead even when the present is turbulent." },
           { type: "br" },
           { type: "text",  value: "A long term perspective includes several practices." },
           { type: "br" },
           { type: "text",  value: "Understanding the core purpose of the venture and staying aligned with it." },
           { type: "br" },
           { type: "text",  value: "Investing in capabilities rather than chasing every trend." },
           { type: "br" },
           { type: "text",  value: "Studying broader shifts in society, technology and human behaviour." },
           { type: "br" },
           { type: "text",  value: "Preparing for multiple possible futures rather than depending on one." },
           { type: "br" },
           { type: "text",  value: "Long term thinking gives a venture stability even when the environment feels unstable. It becomes the compass that guides decisions." },
           { type: "br" },
    
        ]
      },
      {
        heading: "Adaptability: The Central Strength of Resilient Ventures",
        content: [
           { type: "text",  value: "Adaptability is the ability to adjust quickly without losing identity. It is not about constantly changing direction. It is about responding intelligently to new information." },
           { type: "br" },
           { type: "text",  value: "A venture becomes adaptable when it follows key principles." },
           { type: "br" },
           { type: "text",  value: "Listening closely to the market rather than making assumptions." },
           { type: "br" },
           { type: "text",  value: "Encouraging innovation and experimentation." },
           { type: "br" },
           { type: "text",  value: "Building teams that can learn fast and respond fast." },
           { type: "br" },
           { type: "text",  value: "Keeping processes flexible so adjustments can happen without disruption." },
           { type: "br" },
           { type: "text",  value: "Adaptability transforms uncertainty into momentum. Instead of resisting change, resilient ventures move with it." },
           { type: "br" },
          
        ]
      },

       {
        heading: "The Role of Leadership in Uncertain Times",
        content: [
           { type: "text",  value: "Leadership carries greater weight during periods of unpredictability. Teams look for direction, reassurance and clarity. A resilient leader does not pretend to have all the answers. Instead, they create a culture where learning is encouraged and challenges are shared openly." },
           { type: "br" },
           { type: "text",  value: "Effective leadership during uncertainty includes these qualities." },
           { type: "br" },
           { type: "text",  value: "Clarity in communication even when situations shift." },
           { type: "br" },
           { type: "text",  value: "Courage to make decisions despite incomplete information." },
           { type: "br" },
           { type: "text",  value: "Empathy and emotional intelligence to support the team." },
           { type: "br" },
           { type: "text",  value: "Curiosity to explore possibilities rather than shutting them down." },
           { type: "br" },
           { type: "text",  value: "When leaders demonstrate stability through their mindset, teams become more confident in navigating uncertainty." },
           { type: "br" },
          
        ]
      },
      {
        heading: "Building Systems That Withstand Change",
        content: [
            { type: "text",  value: "A resilient venture is not built only on mindset. It is also built on systems designed to evolve. " },
           { type: "br" },
           { type: "text",  value: "These systems act as the backbone that supports long term growth." },
           { type: "br" },
           { type: "text",  value: "Important systems include:" },
           { type: "br" },
           { type: "text",  value: "A financial structure that balances growth with stability." },
           { type: "br" },
           { type: "text",  value: "Technology platforms that can integrate new tools and scale easily." },
           { type: "br" },
           { type: "text",  value: "A culture where feedback is valued and adjustments happen quickly." },
           { type: "br" },
            { type: "text",  value: "Partnerships that expand possibilities and reduce risk." },
           { type: "br" },
            { type: "text",  value: "These systems do not eliminate uncertainty, but they reduce the negative impact of unpredictable events." },
           { type: "br" },
           
          ]
      },

       {
        heading: "When Uncertainty Becomes a Competitive Advantage",
        content: [
            { type: "text",  value: "Some of the most successful ventures in the world rose to prominence during uncertain periods. What set them apart was not luck. It was their ability to read shifts early, move confidently and adapt while others hesitated." },
           { type: "br" },
           { type: "text",  value: "When a venture develops the ability to operate in uncertain environments, it gains advantages." },
           { type: "br" },
           { type: "text",  value: "Faster decision making" },
           { type: "br" },
           { type: "text",  value: "Greater resilience" },
           { type: "br" },
           { type: "text",  value: "Higher levels of innovation" },
           { type: "br" },
           { type: "text",  value: "Stronger long term positioning" },
           { type: "br" },
           { type: "text",  value: "A deeper understanding of market behaviour" },
           { type: "br" },
           { type: "text",  value: "These advantages compound over time and create lasting value." },
           { type: "br" },
           
        ]
      },
       {
        heading: "Conclusion",
        content: [
           { type: "text",  value: "Uncertainty will always exist. It cannot be removed, controlled or predicted. But it can be understood, embraced and transformed. A resilient venture is not built by avoiding the unknown. It is built by stepping into it with clarity, curiosity and purpose." },
           { type: "br" },
           { type: "text",  value: "When leaders learn to see uncertainty as a space filled with potential rather than fear, they unlock opportunities that others cannot see. The mindset behind resilient ventures is simple. Do not resist uncertainty. Learn from it, adapt to it and let it push you toward innovation. That is how strong, enduring ventures are built." },
           { type: "br" },
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