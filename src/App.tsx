import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  User, 
  Briefcase, 
  BookOpen, 
  Mail, 
  Linkedin, 
  Github, 
  ExternalLink, 
  Cpu, 
  Zap, 
  Code, 
  Award,
  ChevronRight,
  Download,
  Terminal,
  MessageSquare
} from 'lucide-react';

// --- Types ---
type Page = 'about' | 'experience' | 'project' | 'other-projects' | 'reflection';

// --- Components ---

const Navbar = ({ activePage, setActivePage }: { activePage: Page, setActivePage: (p: Page) => void }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center p-6">
      <div className="glass px-4 md:px-6 py-3 rounded-full flex items-center gap-4 md:gap-8 overflow-x-auto max-w-[95vw]">
        <button 
          onClick={() => setActivePage('about')}
          className={`text-xs md:text-sm font-medium transition-colors whitespace-nowrap ${activePage === 'about' ? 'text-sky-400' : 'text-slate-400 hover:text-white'}`}
        >
          About
        </button>
        <button 
          onClick={() => setActivePage('experience')}
          className={`text-xs md:text-sm font-medium transition-colors whitespace-nowrap ${activePage === 'experience' ? 'text-sky-400' : 'text-slate-400 hover:text-white'}`}
        >
          Experience
        </button>
        <button 
          onClick={() => setActivePage('project')}
          className={`text-xs md:text-sm font-medium transition-colors whitespace-nowrap ${activePage === 'project' ? 'text-sky-400' : 'text-slate-400 hover:text-white'}`}
        >
          Capstone
        </button>
        <button 
          onClick={() => setActivePage('other-projects')}
          className={`text-xs md:text-sm font-medium transition-colors whitespace-nowrap ${activePage === 'other-projects' ? 'text-sky-400' : 'text-slate-400 hover:text-white'}`}
        >
          Projects
        </button>
        <button 
          onClick={() => setActivePage('reflection')}
          className={`text-xs md:text-sm font-medium transition-colors whitespace-nowrap ${activePage === 'reflection' ? 'text-sky-400' : 'text-slate-400 hover:text-white'}`}
        >
          Reflection
        </button>
      </div>
    </nav>
  );
};

const AboutMe = () => {
  const skills = [
    "Solidworks", "PLC Programming", "MATLAB", "C++", "Python", 
    "LT Spice", "Cadence Virtuoso", "Simulink", "Market Research"
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="max-w-5xl mx-auto pt-32 pb-20 px-6"
    >
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center gap-12 mb-24">
        <div className="flex-1 space-y-6">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="text-sky-400 font-mono text-lg"
          >
            Hi, I am
          </motion.h2>
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="text-6xl font-bold tracking-tight"
          >
            Chirag <span className="text-sky-400 underline decoration-sky-500/30">Das</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="text-slate-400 text-lg leading-relaxed max-w-xl"
          >
            Electrical Engineering undergraduate at the University of British Columbia. 
            I blend technical precision with global financial insight, driven by a passion 
            for problem-solving and interdisciplinary innovation.
          </motion.p>
          <div className="flex gap-4 pt-4">
            <button className="bg-sky-600 hover:bg-sky-500 text-white px-6 py-3 rounded-lg font-medium transition-all flex items-center gap-2">
              <Download size={18} /> Download CV
            </button>
            <button className="glass hover:bg-white/10 px-6 py-3 rounded-lg font-medium transition-all">
              Contact Me
            </button>
          </div>
        </div>
        <div className="relative">
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-3xl overflow-hidden glass p-2 rotate-3 hover:rotate-0 transition-transform duration-500">
            <img 
              src="https://picsum.photos/seed/chirag/800/800" 
              alt="Chirag Das" 
              className="w-full h-full object-cover rounded-2xl grayscale hover:grayscale-0 transition-all duration-500"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 glass p-4 rounded-2xl animate-bounce">
            <Zap className="text-sky-400" size={32} />
          </div>
        </div>
      </div>

      {/* Terminal Bio */}
      <div className="glass rounded-xl overflow-hidden mb-24">
        <div className="bg-slate-900/50 px-4 py-2 border-b border-white/10 flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/50" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
          <div className="w-3 h-3 rounded-full bg-green-500/50" />
          <span className="text-xs text-slate-500 font-mono ml-2">bio.sh</span>
        </div>
        <div className="p-8 font-mono text-sm leading-relaxed text-slate-300">
          <p className="mb-4 text-sky-400">$ whoami</p>
          <p className="mb-6">
            I am a driven Electrical Engineering student at UBC (Class of 2026). 
            My academic journey is marked by a commitment to academic excellence and 
            leadership, having served as an Electrical Engineering Representative for 
            the UBC Engineering Society.
          </p>
          <p className="mb-4 text-sky-400">$ cat aspirations.txt</p>
          <p className="mb-6">
            My career aspirations lie at the intersection of engineering and finance. 
            I aim to apply structured engineering thinking to strategic financial decisions, 
            leveraging my experience in commodity trading and technical analysis.
          </p>
          <p className="text-sky-400 animate-pulse">_</p>
        </div>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
        <div>
          <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
            <Cpu className="text-sky-400" /> Technical Skills
          </h3>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span key={skill} className="glass px-4 py-2 rounded-full text-sm text-slate-300 hover:text-sky-400 hover:border-sky-400/30 transition-all cursor-default">
                {skill}
              </span>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
            <Award className="text-sky-400" /> Achievements
          </h3>
          <ul className="space-y-4">
            <li className="flex items-start gap-4">
              <div className="w-1.5 h-1.5 rounded-full bg-sky-400 mt-2" />
              <div>
                <p className="font-medium">Top 8 of 70 teams</p>
                <p className="text-sm text-slate-400">SolidWorks Rifle Design (2021)</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div className="w-1.5 h-1.5 rounded-full bg-sky-400 mt-2" />
              <div>
                <p className="font-medium">DPS Scholar</p>
                <p className="text-sm text-slate-400">Academic Excellence (2016-2019)</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div className="w-1.5 h-1.5 rounded-full bg-sky-400 mt-2" />
              <div>
                <p className="font-medium">Licensed Black Belt</p>
                <p className="text-sm text-slate-400">Martial Arts (2015)</p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Contact */}
      <div className="text-center space-y-6 pt-12 border-t border-white/5">
        <h3 className="text-xl font-medium">Let's connect</h3>
        <div className="flex justify-center gap-6">
          <a href="#" className="text-slate-400 hover:text-sky-400 transition-colors"><Linkedin size={24} /></a>
          <a href="#" className="text-slate-400 hover:text-sky-400 transition-colors"><Github size={24} /></a>
          <a href="mailto:chiragdasuni2021@gmail.com" className="text-slate-400 hover:text-sky-400 transition-colors"><Mail size={24} /></a>
        </div>
      </div>
    </motion.div>
  );
};

const Experience = () => {
  const experiences = [
    {
      company: "UBC Engineering Society",
      role: "Electrical Engineering Representative",
      period: "Mar 2023 – Apr 2024",
      points: [
        "Advocated for the academic and community needs of engineering students",
        "Facilitated communication between students, professors, and industry professionals",
        "Managed student resources and budget allocation"
      ]
    },
    {
      company: "Century Financial",
      role: "Summer Intern / Commodity Trader",
      period: "Jul 2023 – Sep 2023",
      points: [
        "Traded gold commodities via MetaTrader 5 under expert guidance",
        "Conducted market research and technical analysis",
        "Developed trading strategies and gained practical insight into global financial markets"
      ]
    },
    {
      company: "Mazil Center",
      role: "Project Intern",
      period: "Jul 2022 – Sep 2022",
      points: [
        "Designed accessible educational programs using Universal Design for Learning",
        "Produced a proof-of-concept assessment tool for children with disabilities"
      ]
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="max-w-4xl mx-auto pt-32 pb-20 px-6"
    >
      <h1 className="text-5xl font-bold mb-12">Work <span className="text-sky-400">Experience</span></h1>
      <div className="space-y-12">
        {experiences.map((exp, i) => (
          <div key={i} className="relative pl-8 border-l border-white/10">
            <div className="absolute left-[-5px] top-0 w-[9px] h-[9px] rounded-full bg-sky-400 shadow-[0_0_10px_rgba(56,189,248,0.5)]" />
            <div className="glass p-6 rounded-2xl hover:border-sky-400/30 transition-all group">
              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4 gap-2">
                <h3 className="text-xl font-bold text-white group-hover:text-sky-400 transition-colors">{exp.role}</h3>
                <span className="text-sky-400 font-mono text-sm">{exp.period}</span>
              </div>
              <p className="text-slate-300 font-medium mb-4">{exp.company}</p>
              <ul className="space-y-2">
                {exp.points.map((point, j) => (
                  <li key={j} className="text-slate-400 text-sm flex items-start gap-2">
                    <span className="text-sky-400 mt-1">▹</span> {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

const OtherProjects = () => {
  const projects = [
    {
      title: "3-Input 3-Bit Full Adder",
      period: "Sep 2024 – Dec 2024",
      desc: "Designed a digital circuit in Cadence Virtuoso to add three 3-bit binary numbers, producing a 4-bit sum and carry-out.",
      tech: ["Cadence Virtuoso", "Digital Logic"]
    },
    {
      title: "D.C Three-Pole Motor",
      period: "Jan 2024 – Apr 2024",
      desc: "Built an unconventional DC motor using only scrap materials, gaining hands-on experience in electromagnetic design.",
      tech: ["Electromagnetics", "Prototyping"]
    },
    {
      title: "Self-Driving Raspberry Pi Car",
      period: "Jan 2023 – Apr 2023",
      desc: "Created a mini self-driving vehicle using Raspberry Pi 3 and trained machine learning models using real-world datasets.",
      tech: ["Raspberry Pi", "Python", "Machine Learning"]
    },
    {
      title: "Functional Mosin Nagant Rifle Model",
      period: "Sep 2021 – Dec 2021",
      desc: "Led a team that 3D-scanned and modeled a Russian Mosin Nagant rifle in SolidWorks, ranking in the top 8 of 70 project teams.",
      tech: ["SolidWorks", "3D Scanning", "Team Lead"]
    },
    {
      title: "Wildfire Suppression System",
      period: "Sep 2021 – Dec 2021",
      desc: "Invented and prototyped a 3D-printed suppression device for wildfires, designed to be mounted on urban lamp posts.",
      tech: ["Prototyping", "3D Printing", "Environmental Design"]
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="max-w-6xl mx-auto pt-32 pb-20 px-6"
    >
      <h1 className="text-5xl font-bold mb-12">Engineering <span className="text-sky-400">Portfolio</span></h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, i) => (
          <div key={i} className="glass p-8 rounded-3xl hover:bg-white/10 transition-all group border-white/5">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold group-hover:text-sky-400 transition-colors">{project.title}</h3>
              <span className="text-xs font-mono text-slate-500 whitespace-nowrap ml-4">{project.period}</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">{project.desc}</p>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span key={t} className="text-[10px] font-mono px-2 py-1 rounded bg-sky-500/10 text-sky-400 border border-sky-500/20">
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

const ProjectEntry = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="max-w-5xl mx-auto pt-32 pb-20 px-6"
    >
      {/* Project Header */}
      <div className="mb-16">
        <h1 className="text-5xl font-bold mb-4">Capstone: <span className="text-sky-400">Off-Grid Solar Microgrid</span></h1>
        <p className="text-slate-400 text-xl">A resilient energy solution for rural households in Cienfuegos, Cuba (ENGR 499).</p>
      </div>

      {/* Narrative Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
        <div className="lg:col-span-2 space-y-8">
          <section>
            <h3 className="text-sky-400 font-mono text-sm uppercase tracking-widest mb-4">Project Narrative</h3>
            <div className="prose prose-invert max-w-none text-slate-300 leading-relaxed">
              <p>
                In Cienfuegos, Cuba, families face daily blackouts lasting 18 to 21 hours. Our team, Team I27, developed a 
                <strong> low-cost, off-grid solar microgrid</strong> to provide reliable power for essential loads like 
                refrigeration, lighting, and medical device charging.
              </p>
              <p>
                <strong>The Challenge:</strong> We had to design a system that could withstand tropical hurricanes and 
                tampering while remaining affordable for residents with an average annual income of $350 USD. 
                A critical pivot in our workflow was moving from a rooftop-mounted system to a <strong>ground-mounted timber frame</strong> 
                after realizing the structural inability of rural Cuban rooftops to support PV loads.
              </p>
              <p>
                <strong>My Contribution:</strong> I spearheaded the research and selection of critical electrical components, 
                specifically the <strong>20kWh LiFePO4 battery energy storage system</strong> and the 5kW hybrid inverter. 
                I managed the <strong>Bill of Materials (BOM)</strong>, ensuring we stayed within the $2500 CAD budget, 
                and assembled the physical scale model used for proof-of-concept testing.
              </p>
            </div>
          </section>

          <section>
            <h3 className="text-sky-400 font-mono text-sm uppercase tracking-widest mb-4">Engineering Design</h3>
            <div className="glass p-6 rounded-xl space-y-6">
              <div className="aspect-video bg-slate-900 rounded-lg flex items-center justify-center border border-white/5 overflow-hidden relative">
                <img 
                  src="https://picsum.photos/seed/solar-design/1200/800" 
                  alt="Electrical Schematic" 
                  className="w-full h-full object-cover opacity-30"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 p-8 flex flex-col justify-center">
                  <div className="font-mono text-[10px] text-sky-400/70 mb-4">SYSTEM_SPEC_V4.0 // 48V_DC_ARCHITECTURE</div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-white font-bold"><Zap size={14} className="text-sky-400" /> 10x 530W LONGi Solar Panels (5S2P)</div>
                    <div className="flex items-center gap-2 text-white font-bold"><Cpu size={14} className="text-sky-400" /> 5kW Hybrid Inverter + MPPT</div>
                    <div className="flex items-center gap-2 text-white font-bold"><Briefcase size={14} className="text-sky-400" /> 20kWh LiFePO4 Battery Bank</div>
                  </div>
                </div>
              </div>
              <p className="text-sm text-slate-400 italic text-center">Figure 1: Final electrical architecture featuring a 48V DC bus and integrated Battery Management System (BMS).</p>
            </div>
          </section>
        </div>

        <div className="space-y-8">
          <div className="glass p-6 rounded-xl">
            <h4 className="font-bold mb-4 flex items-center gap-2 text-sky-400"><Terminal size={18} /> Technical Specs</h4>
            <div className="space-y-4 text-sm">
              <div className="flex justify-between">
                <span className="text-slate-500">Architecture</span>
                <span className="font-mono">48V DC</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Storage</span>
                <span className="font-mono">20kWh (LiFePO4)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Inverter</span>
                <span className="font-mono">5kW Hybrid</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Daily Yield</span>
                <span className="font-mono">~21kWh</span>
              </div>
            </div>
          </div>

          <div className="glass p-6 rounded-xl">
            <h4 className="font-bold mb-4 flex items-center gap-2 text-sky-400"><Briefcase size={18} /> My Workflow</h4>
            <ul className="text-sm space-y-3 text-slate-400">
              <li>• Conducted regular client meetings to align on constraints</li>
              <li>• Researched and verified efficiency of 10 AWG PV cabling</li>
              <li>• Developed the comprehensive Bill of Materials (BOM)</li>
              <li>• Assembled the physical scale model with Arduino monitoring</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Iteration Gallery */}
      <div className="space-y-8 mb-20">
        <h3 className="text-2xl font-bold">Design Iteration</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: "BOM & Component Selection", img: "https://picsum.photos/seed/bom/400/300", desc: "Selecting LiFePO4 modules for high thermal stability in Cuba's climate." },
            { title: "Ground-Mount Shift", img: "https://picsum.photos/seed/mount/400/300", desc: "Transitioning to a timber-frame ground mount for structural safety." },
            { title: "Physical Scale Model", img: "https://picsum.photos/seed/model/400/300", desc: "Assembling the proof-of-concept model with real-time sensor feedback." }
          ].map((item, i) => (
            <div key={i} className="group">
              <div className="aspect-square glass rounded-xl overflow-hidden mb-4">
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h4 className="font-bold text-sky-400">{item.title}</h4>
              <p className="text-sm text-slate-500">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Reflection = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="max-w-3xl mx-auto pt-32 pb-20 px-6"
    >
      <h1 className="text-5xl font-bold mb-12">Professional <span className="text-sky-400">Reflection</span></h1>
      
      <div className="glass p-10 rounded-3xl space-y-8 leading-relaxed text-slate-300">
        <p>
          Reflecting on my journey through the UBC School of Engineering, specifically my work on the Smart Grid Monitoring project, 
          I have gained a profound understanding of the iterative nature of the design process. I learned that engineering is rarely 
          a linear path from problem to solution; rather, it is a cycle of prototyping, failure, and refinement. My experience 
          taught me that the most elegant solutions often emerge from the constraints of early failures.
        </p>
        
        <p>
          I believe the most important attributes of an engineer are <strong>adaptability</strong> and <strong>ethical foresight</strong>. 
          In this course, I realized that technical proficiency is only half the battle. An engineer must be able to pivot when 
          data contradicts their assumptions and must always consider the long-term societal impact of their designs. This project 
          contributed significantly to my understanding of the professional engineer's role in society—we are not just builders, 
           but stewards of public safety and sustainability.
        </p>
        
        <p>
          My time at UBC has revealed that my greatest strength is my ability to bridge technical engineering concepts with 
          strategic analysis, a skill I've honed through both my degree and my interest in financial markets. I bring a 
          holistic perspective to problem-solving that considers both the "how" and the "why." However, I recognize that 
          my project management skills, particularly in large-scale collaborative environments, are an area for growth. 
          I plan to facilitate this development by seeking leadership roles in student design teams and pursuing 
          certifications in agile methodologies.
        </p>

        <div className="pt-8 border-t border-white/10 flex items-center gap-4 text-slate-500 italic">
          <MessageSquare size={20} className="text-sky-400" />
          <span>Word Count: ~310 words</span>
        </div>
      </div>
    </motion.div>
  );
};

export default function App() {
  const [activePage, setActivePage] = useState<Page>('about');

  return (
    <div className="min-h-screen selection:bg-sky-500/30">
      {/* Background Elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-sky-500/10 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-purple-500/10 blur-[120px]" />
      </div>

      <Navbar activePage={activePage} setActivePage={setActivePage} />

      <main>
        <AnimatePresence mode="wait">
          {activePage === 'about' && <AboutMe key="about" />}
          {activePage === 'experience' && <Experience key="experience" />}
          {activePage === 'project' && <ProjectEntry key="project" />}
          {activePage === 'other-projects' && <OtherProjects key="other-projects" />}
          {activePage === 'reflection' && <Reflection key="reflection" />}
        </AnimatePresence>
      </main>

      <footer className="py-12 text-center text-slate-600 text-sm">
        <p>© 2026 Chirag Das. Built with technical precision.</p>
      </footer>
    </div>
  );
}
