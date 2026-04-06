import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  User, 
  Briefcase, 
  BookOpen, 
  Mail, 
  Linkedin, 
  Youtube, 
  ExternalLink, 
  Cpu, 
  Zap, 
  Code, 
  Award,
  ChevronRight,
  Download,
  Terminal,
  MessageSquare,
  GraduationCap
} from 'lucide-react';

// --- Types ---
type Page = 'about' | 'experience' | 'project' | 'other-projects' | 'reflection';

// --- Components ---

const Navbar = ({ activePage, setActivePage }: { activePage: Page, setActivePage: (p: Page) => void }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center p-6">
      <div className="glass px-4 md:px-6 py-3 rounded-full flex items-center gap-4 md:gap-8 overflow-x-auto max-w-[95vw] border-gold-500/20">
        <button 
          onClick={() => setActivePage('about')}
          className={`text-xs md:text-sm font-bold transition-colors whitespace-nowrap ${activePage === 'about' ? 'text-gold-500' : 'text-slate-400 hover:text-white'}`}
        >
          About
        </button>
        <button 
          onClick={() => setActivePage('experience')}
          className={`text-xs md:text-sm font-bold transition-colors whitespace-nowrap ${activePage === 'experience' ? 'text-gold-500' : 'text-slate-400 hover:text-white'}`}
        >
          Experience
        </button>
        <button 
          onClick={() => setActivePage('project')}
          className={`text-xs md:text-sm font-bold transition-colors whitespace-nowrap ${activePage === 'project' ? 'text-gold-500' : 'text-slate-400 hover:text-white'}`}
        >
          Capstone
        </button>
        <button 
          onClick={() => setActivePage('other-projects')}
          className={`text-xs md:text-sm font-bold transition-colors whitespace-nowrap ${activePage === 'other-projects' ? 'text-gold-500' : 'text-slate-400 hover:text-white'}`}
        >
          Projects
        </button>
        <button 
          onClick={() => setActivePage('reflection')}
          className={`text-xs md:text-sm font-bold transition-colors whitespace-nowrap ${activePage === 'reflection' ? 'text-gold-500' : 'text-slate-400 hover:text-white'}`}
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
      <div className="flex flex-col items-center text-center gap-12 mb-24">
        <div className="space-y-6">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gold-500 font-bold text-lg tracking-widest uppercase"
          >
            Electrical Engineer & Strategist
          </motion.h2>
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-7xl md:text-8xl font-bold tracking-tighter"
          >
            Chirag <span className="gold-gradient">Das</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-slate-400 text-xl leading-relaxed max-w-2xl mx-auto"
          >
            Bridging the gap between technical engineering precision and global financial insight. 
            UBC Electrical Engineering '26.
          </motion.p>
          <div className="flex justify-center gap-4 pt-4">
            <a 
              href="mailto:chiragdasuni2021@gmail.com"
              className="gold-button flex items-center gap-2"
            >
              <Download size={18} /> Download CV
            </a>
            <a 
              href="mailto:chiragdasuni2021@gmail.com"
              className="glass hover:bg-white/10 px-6 py-3 rounded-lg font-bold transition-all border-gold-500/20"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>

      {/* Bio Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
        <div className="glass p-8 rounded-3xl space-y-4 border-t-2 border-t-gold-500/30">
          <h3 className="text-xl font-bold text-gold-400 flex items-center gap-2">
            <User size={20} /> Professional Bio
          </h3>
          <p className="text-slate-300 leading-relaxed">
            I am a driven Electrical Engineering student at the University of British Columbia. 
            My academic journey is marked by a commitment to technical excellence and 
            leadership, having served as an Electrical Engineering Representative for 
            the UBC Engineering Society. I specialize in control systems, power electronics, 
            and quantitative analysis.
          </p>
        </div>
        <div className="glass p-8 rounded-3xl space-y-4 border-t-2 border-t-gold-500/30">
          <h3 className="text-xl font-bold text-gold-400 flex items-center gap-2">
            <Zap size={20} /> My Aspirations
          </h3>
          <p className="text-slate-300 leading-relaxed">
            My career aspirations lie at the intersection of engineering and finance. 
            I aim to apply structured engineering methodologies to strategic financial decisions, 
            leveraging my experience in commodity trading and technical analysis to solve 
            complex global challenges in energy and infrastructure.
          </p>
        </div>
      </div>

      {/* Education & Achievements */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
        <div>
          <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
            <GraduationCap className="text-gold-500" /> Education
          </h3>
          <div className="glass p-6 rounded-2xl border-l-4 border-l-gold-500">
            <p className="font-bold text-lg">Bachelor of Applied Science</p>
            <p className="text-gold-400">Electrical Engineering</p>
            <p className="text-sm text-slate-400 mt-2">University of British Columbia | Class of 2026</p>
            <p className="text-xs text-slate-500 mt-4 leading-relaxed">
              Focusing on power systems, renewable energy integration, and control theory. 
              Active member of the engineering community and student leadership.
            </p>
          </div>
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
            <Award className="text-gold-500" /> Achievements
          </h3>
          <ul className="space-y-4">
            <li className="flex items-start gap-4">
              <div className="w-1.5 h-1.5 rounded-full bg-gold-500 mt-2" />
              <div>
                <p className="font-bold">Top 8 of 70 teams</p>
                <p className="text-sm text-slate-400">SolidWorks Rifle Design (2021)</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div className="w-1.5 h-1.5 rounded-full bg-gold-500 mt-2" />
              <div>
                <p className="font-bold">DPS Scholar</p>
                <p className="text-sm text-slate-400">Academic Excellence (2016-2019)</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div className="w-1.5 h-1.5 rounded-full bg-gold-500 mt-2" />
              <div>
                <p className="font-bold">Licensed Black Belt</p>
                <p className="text-sm text-slate-400">Martial Arts (2015)</p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Skills Grid */}
      <div className="mb-24">
        <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
          <Cpu className="text-gold-500" /> Technical Expertise
        </h3>
        <div className="flex flex-wrap gap-3">
          {skills.map((skill) => (
            <span key={skill} className="glass px-5 py-2.5 rounded-full text-sm font-bold text-slate-300 hover:text-gold-400 hover:border-gold-400/30 transition-all cursor-default border-gold-500/10">
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Footer Contact */}
      <div className="text-center space-y-6 pt-12 border-t border-white/5">
        <h3 className="text-xl font-medium text-gold-400">Let's connect</h3>
        <div className="flex justify-center gap-6">
          <a 
            href="https://www.linkedin.com/in/chirag-das-541a2117b/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B1dPhOKGNRsuv9%2BLO%2BImF0w%3D%3D" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-gold-500 transition-colors"
          >
            <Linkedin size={28} />
          </a>
          <a href="https://www.youtube.com/@chiragdas9289" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-gold-500 transition-colors"><Youtube size={28} /></a>
          <a href="mailto:chiragdasuni2021@gmail.com" className="text-slate-400 hover:text-gold-500 transition-colors"><Mail size={28} /></a>
        </div>
      </div>
    </motion.div>
  );
};

const Experience = () => {
  const experiences = [
    {
      company: "Al Matuco Tobacco Company FZE",
      role: "Project Manager (Internship)",
      period: "May 2025 - Sep 2025",
      points: [
        "Designed and set up the complete nicotine pouch production line controlled by Siemens PLC, including packaging systems and workflow optimization.",
        "Developed the business model, ROI analysis, and market research to ensure the project’s financial feasibility.",
        "Completed the full foundation in 5 months and continue to support the company as it begins manufacturing."
      ]
    },
    {
      company: "XAU/USD trader",
      role: "Futures Trader (Self-employed)",
      period: "Jul 2024 - Present",
      points: [
        "Online trading focusing on gold (XAU/USD) futures.",
        "Applied technical analysis and risk management strategies to navigate global financial markets."
      ]
    },
    {
      company: "UBC Okanagan (ENGR 499)",
      role: "Electrical Engineer (Capstone)",
      period: "Sep 2024 - Apr 2025",
      points: [
        "Spearheaded the research and selection of critical electrical components for an off-grid solar microgrid in Cuba.",
        "Designed a 20kWh LiFePO4 battery energy storage system and integrated a 5kW hybrid inverter.",
        "Managed the Bill of Materials (BOM) and stayed within the $2500 CAD budget per building."
      ]
    },
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
      company: "Manzil Center",
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
      <h1 className="text-5xl font-bold mb-12">Work <span className="gold-gradient">Experience</span></h1>
      <div className="space-y-12">
        {experiences.map((exp, i) => (
          <div key={i} className="relative pl-8 border-l border-white/10">
            <div className="absolute left-[-5px] top-0 w-[9px] h-[9px] rounded-full bg-gold-500 shadow-[0_0_10px_rgba(217,119,6,0.5)]" />
            <div className="glass p-6 rounded-2xl hover:border-gold-400/30 transition-all group border-gold-500/10">
              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4 gap-2">
                <h3 className="text-xl font-bold text-white group-hover:text-gold-400 transition-colors">{exp.role}</h3>
                <span className="text-gold-400 font-mono text-sm">{exp.period}</span>
              </div>
              <p className="text-slate-300 font-medium mb-4">{exp.company}</p>
              <ul className="space-y-2">
                {exp.points.map((point, j) => (
                  <li key={j} className="text-slate-400 text-sm flex items-start gap-2">
                    <span className="text-gold-400 mt-1">▹</span> {point}
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
      title: "Futures Trading Algorithm",
      period: "Aug 2025 – Present",
      desc: "Designed and implemented an automated gold trading algorithm in Python, combining trading expertise with quantitative coding. Applied a dip-buying strategy supported by Bollinger Bands, market downtrend detectors, and market structure break detectors.",
      tech: ["Python", "MetaTrader", "Quantitative Finance"]
    },
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
      <h1 className="text-5xl font-bold mb-12">Engineering <span className="gold-gradient">Portfolio</span></h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, i) => (
          <div key={i} className="glass p-8 rounded-3xl hover:bg-white/10 transition-all group border-gold-500/10">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold group-hover:text-gold-400 transition-colors">{project.title}</h3>
              <span className="text-xs font-bold text-slate-500 whitespace-nowrap ml-4 uppercase tracking-widest">{project.period}</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">{project.desc}</p>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span key={t} className="text-[10px] font-bold px-2 py-1 rounded bg-gold-500/10 text-gold-400 border border-gold-500/20 uppercase tracking-tighter">
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
      className="max-w-6xl mx-auto pt-32 pb-20 px-6"
    >
      {/* Project Header */}
      <div className="mb-20 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="inline-block px-4 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-500 text-xs font-bold uppercase tracking-[0.3em] mb-8"
        >
          Capstone Engineering Thesis • ENGR 499
        </motion.div>
        <h1 className="text-6xl md:text-7xl font-bold mb-8 tracking-tighter">
          Resilient <span className="gold-gradient">Solar Microgrids</span>
        </h1>
        <p className="text-slate-400 text-xl max-w-3xl mx-auto leading-relaxed">
          A comprehensive engineering solution for decentralized energy production in hurricane-prone rural Cuba, 
          balancing extreme environmental resilience with strict socio-economic constraints.
        </p>
      </div>

      {/* Executive Summary: The Core Story */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
        <div className="glass p-10 rounded-[2.5rem] border-t-2 border-t-gold-500/30 relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
            <Zap size={80} className="text-gold-500" />
          </div>
          <h3 className="text-2xl font-bold text-gold-400 mb-6 flex items-center gap-3">
            <Zap size={24} /> The Mission
          </h3>
          <p className="text-slate-300 leading-relaxed">
            In Cienfuegos, Cuba, infrastructure decay leads to blackouts exceeding 20 hours daily. 
            Our objective was to engineer a <strong>fully autonomous, off-grid microgrid</strong> 
            capable of sustaining critical medical and domestic loads for households with 
            minimal financial resources.
          </p>
        </div>
        <div className="glass p-10 rounded-[2.5rem] border-t-2 border-t-gold-500/30 relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
            <Award size={80} className="text-gold-500" />
          </div>
          <h3 className="text-2xl font-bold text-gold-400 mb-6 flex items-center gap-3">
            <Award size={24} /> The Outcome
          </h3>
          <p className="text-slate-300 leading-relaxed">
            We delivered a high-efficiency <strong>20kWh LiFePO4 storage system</strong> 
            paired with a 5kW hybrid inverter. The system provides 100% energy autonomy 
            for essential loads, validated through rigorous simulation and physical scale prototyping 
            within a <strong>$2,500 CAD budget</strong>.
          </p>
        </div>
        <div className="glass p-10 rounded-[2.5rem] border-t-2 border-t-gold-500/30 relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
            <Code size={80} className="text-gold-500" />
          </div>
          <h3 className="text-2xl font-bold text-gold-400 mb-6 flex items-center gap-3">
            <Code size={24} /> My Role
          </h3>
          <p className="text-slate-300 leading-relaxed">
            As the <strong>Lead Electrical Architect</strong>, I specialized in the 
            DC-coupled storage architecture and battery management. I conducted 
            the thermal stability analysis, component lifecycle verification, and 
            managed the complex Bill of Materials (BOM) to ensure project viability.
          </p>
        </div>
      </div>

      {/* Methodology Section */}
      <div className="mb-32">
        <h3 className="text-3xl font-bold mb-12 flex items-center gap-4">
          <Terminal className="text-gold-500" /> Engineering <span className="gold-gradient">Methodology</span>
        </h3>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {[
            { step: "01", title: "Site Analysis", desc: "Evaluating solar irradiance data and structural integrity of rural Cuban dwellings." },
            { step: "02", title: "Simulation", desc: "Modeling transient responses and load profiles using MATLAB and Simulink." },
            { step: "03", title: "Prototyping", desc: "Assembling a 1:10 scale model with Arduino-based sensors for real-time data logging." },
            { step: "04", title: "Validation", desc: "Stress-testing the electrical architecture against simulated grid failures and surges." }
          ].map((item, i) => (
            <div key={i} className="glass p-8 rounded-3xl border-gold-500/10 hover:border-gold-500/30 transition-all">
              <span className="text-4xl font-black text-gold-500/20 block mb-4">{item.step}</span>
              <h4 className="text-lg font-bold text-white mb-2">{item.title}</h4>
              <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Iterative Design: Deep Dive */}
      <div className="space-y-32 mb-32">
        {/* Iteration 1 */}
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 space-y-8">
            <div className="inline-block px-3 py-1 rounded bg-gold-500/10 text-gold-500 text-[10px] font-bold uppercase tracking-widest">Structural Pivot</div>
            <h3 className="text-4xl font-bold gold-gradient leading-tight">From Rooftop Vulnerability to Ground-Mounted Resilience</h3>
            <p className="text-slate-400 text-lg leading-relaxed">
              Our initial design assumed a standard rooftop PV installation. However, field data revealed that 
              rural Cuban rooftops often consist of degraded timber or corrugated metal, incapable of 
              withstanding the <strong>250km/h wind loads</strong> common during hurricane season.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-6 glass rounded-2xl border-l-4 border-l-gold-500">
                <p className="text-slate-300 italic leading-relaxed">
                  "We recognized that a rooftop failure would not only destroy the microgrid but potentially 
                  the entire home. The pivot to a <strong>timber-frame ground mount</strong> was an ethical 
                  necessity for public safety."
                </p>
              </div>
            </div>
          </div>
          <div className="flex-1 w-full">
            <div className="glass p-6 rounded-[3rem] border-gold-500/10 group">
              <div className="aspect-video bg-slate-900 rounded-[2rem] overflow-hidden relative">
                <img 
                  src="/mounting.jpeg" 
                  alt="Ground Mount Iteration" 
                  className="w-full h-full object-contain transition-transform duration-1000 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-10">
                  <div className="space-y-2">
                    <p className="text-gold-500 font-bold uppercase tracking-widest text-xs">Design Iteration v2.0</p>
                    <p className="text-white text-sm font-medium">Ground-mounted timber structure designed for 250km/h wind resistance.</p>
                  </div>
                </div>
              </div>
              <p className="text-xs text-slate-500 mt-6 text-center uppercase tracking-[0.2em] font-medium">Figure 1: Transitioning to structural ground mounts for hurricane resilience.</p>
            </div>
          </div>
        </div>

        {/* Iteration 2 */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
          <div className="flex-1 space-y-8">
            <div className="inline-block px-3 py-1 rounded bg-gold-500/10 text-gold-500 text-[10px] font-bold uppercase tracking-widest">Electrical Optimization</div>
            <h3 className="text-4xl font-bold gold-gradient leading-tight">Optimizing Storage for Thermal Stability</h3>
            <p className="text-slate-400 text-lg leading-relaxed">
              Standard Lead-Acid batteries were initially considered for their low cost. However, Cuba's 
              high ambient temperatures and humidity would reduce their lifespan to less than 2 years. 
              We pivoted to <strong>LiFePO4 (Lithium Iron Phosphate)</strong> modules.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="glass p-6 rounded-2xl border border-gold-500/10">
                <p className="text-3xl font-bold text-gold-500 mb-1">10yr+</p>
                <p className="text-[10px] text-slate-500 uppercase tracking-widest">Projected Lifespan</p>
              </div>
              <div className="glass p-6 rounded-2xl border border-gold-500/10">
                <p className="text-3xl font-bold text-gold-500 mb-1">60°C</p>
                <p className="text-[10px] text-slate-500 uppercase tracking-widest">Thermal Threshold</p>
              </div>
            </div>
          </div>
          <div className="flex-1 w-full">
            <div className="glass p-6 rounded-[3rem] border-gold-500/10 group">
              <div className="aspect-video bg-slate-900 rounded-[2rem] overflow-hidden relative">
                <img 
                  src="/bom.jpeg" 
                  alt="Electrical Architecture" 
                  className="w-full h-full object-contain transition-transform duration-1000 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-10">
                  <div className="space-y-2">
                    <p className="text-gold-500 font-bold uppercase tracking-widest text-xs">Technical Architecture</p>
                    <p className="text-white text-sm font-medium">Integrated Battery Management System (BMS) with 48V DC-coupled architecture.</p>
                  </div>
                </div>
              </div>
              <p className="text-xs text-slate-500 mt-6 text-center uppercase tracking-[0.2em] font-medium">Figure 2: Final electrical BOM and system architecture diagram.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Engineering Specifications: The Deep Dive */}
      <div className="glass p-16 rounded-[4rem] border-gold-500/10 mb-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/5 blur-[100px] -z-10" />
        
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-16 gap-8">
          <div>
            <h3 className="text-4xl font-bold mb-3">Technical <span className="gold-gradient">Specifications</span></h3>
            <p className="text-slate-400 text-lg">A detailed performance analysis for industry professionals.</p>
          </div>
          <div className="flex flex-wrap gap-4">
            <div className="px-6 py-3 bg-gold-500/10 rounded-2xl border border-gold-500/20 text-gold-500 text-xs font-bold uppercase tracking-widest">
              System Efficiency: 94.2%
            </div>
            <div className="px-6 py-3 bg-gold-500/10 rounded-2xl border border-gold-500/20 text-gold-500 text-xs font-bold uppercase tracking-widest">
              Operating Temp: -10°C to 55°C
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {[
            { label: "Photovoltaic Array", value: "5.4kWp", sub: "Monocrystalline Silicon", detail: "Optimized for low-light performance" },
            { label: "Energy Storage", value: "20kWh", sub: "LiFePO4 (48V Nominal)", detail: "Integrated BMS with cell balancing" },
            { label: "Power Conversion", value: "5kW", sub: "Hybrid Pure Sine Inverter", detail: "Parallel-ready for future expansion" },
            { label: "Environmental Rating", value: "IP65", sub: "Corrosion Resistant", detail: "Salt-spray tested for coastal regions" }
          ].map((spec, i) => (
            <div key={i} className="space-y-4">
              <p className="text-slate-500 text-xs uppercase tracking-[0.2em] font-bold">{spec.label}</p>
              <p className="text-4xl font-bold text-white tracking-tighter">{spec.value}</p>
              <div className="space-y-1">
                <p className="text-xs text-gold-500 font-mono">{spec.sub}</p>
                <p className="text-[10px] text-slate-500 leading-relaxed">{spec.detail}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 pt-16 border-t border-white/5">
          <div className="space-y-6">
            <h4 className="text-xl font-bold text-gold-400 flex items-center gap-3">
              <Terminal size={24} /> Design Constraints & Compliance
            </h4>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="w-1 h-1 rounded-full bg-gold-500 mt-2.5 shrink-0" />
                <p className="text-slate-400 text-sm leading-relaxed">
                  <strong>Economic Threshold:</strong> Total system cost capped at <strong>$2,500 CAD</strong> per unit, 
                  requiring aggressive vendor negotiation and component-level optimization.
                </p>
              </div>
              <div className="flex gap-4">
                <div className="w-1 h-1 rounded-full bg-gold-500 mt-2.5 shrink-0" />
                <p className="text-slate-400 text-sm leading-relaxed">
                  <strong>Safety Standards:</strong> Compliant with <strong>IEC 61215</strong> for PV modules and 
                  <strong>UL 1973</strong> for battery energy storage systems.
                </p>
              </div>
              <div className="flex gap-4">
                <div className="w-1 h-1 rounded-full bg-gold-500 mt-2.5 shrink-0" />
                <p className="text-slate-400 text-sm leading-relaxed">
                  <strong>User Interface:</strong> Designed for <strong>zero-maintenance operation</strong>, 
                  featuring automated fault detection and simple LED-based status indicators.
                </p>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <h4 className="text-xl font-bold text-gold-400 flex items-center gap-3">
              <MessageSquare size={24} /> Social & Economic Impact
            </h4>
            <p className="text-slate-400 text-sm leading-relaxed">
              Beyond the technical specifications, this project addresses a fundamental human right: 
              <strong> access to reliable energy</strong>. By providing consistent power, we enable 
              refrigeration for medicine and food, lighting for education, and communication for 
              emergency services. This decentralized approach empowers communities to remain 
              resilient in the face of centralized infrastructure failure.
            </p>
            <div className="p-6 bg-gold-500/5 rounded-2xl border border-gold-500/10">
              <p className="text-xs text-gold-500 font-bold uppercase tracking-widest mb-2">Key Outcome</p>
              <p className="text-sm text-slate-300">
                Projected to reduce household energy costs by 85% while increasing essential load uptime from 15% to 99.9%.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Final Call to Action */}
      <div className="text-center space-y-8">
        <h3 className="text-2xl font-bold">Interested in the <span className="gold-gradient">Technical Documentation?</span></h3>
        <p className="text-slate-400 max-w-xl mx-auto">
          I have prepared a full technical report including circuit diagrams, simulation data, and the complete BOM.
        </p>
        <div className="flex justify-center gap-6">
          <a 
            href="mailto:chiragdasuni2021@gmail.com" 
            className="gold-button inline-flex items-center gap-3 px-12 py-5 text-lg"
          >
            Request Full Report <ExternalLink size={20} />
          </a>
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
      <h1 className="text-5xl font-bold mb-12">Professional <span className="gold-gradient">Reflection</span></h1>
      
      <div className="glass p-10 rounded-3xl space-y-8 leading-relaxed text-slate-300 border-gold-500/10">
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
          <MessageSquare size={20} className="text-gold-500" />
          <span>Reflective analysis of professional growth and societal impact.</span>
        </div>
      </div>
    </motion.div>
  );
};

export default function App() {
  const [activePage, setActivePage] = useState<Page>('about');

  return (
    <div className="min-h-screen selection:bg-gold-500/30">
      {/* Background Elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-gold-500/5 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-gold-600/5 blur-[120px]" />
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

      <footer className="py-20 text-center space-y-8 border-t border-white/5">
        <div className="flex justify-center gap-8">
          <a 
            href="https://www.linkedin.com/in/chirag-das-541a2117b/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B1dPhOKGNRsuv9%2BLO%2BImF0w%3D%3D" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 hover:text-gold-500 transition-colors"
          >
            <Linkedin size={24} />
          </a>
          <a href="#" className="text-slate-500 hover:text-gold-500 transition-colors"><Youtube size={24} /></a>
          <a href="mailto:chiragdasuni2021@gmail.com" className="text-slate-500 hover:text-gold-500 transition-colors"><Mail size={24} /></a>
        </div>
        <div className="text-slate-600 text-sm">
          <p>© 2026 Chirag Das. All rights reserved.</p>
          <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.2em] opacity-50">Engineering Excellence • Financial Strategy</p>
        </div>
      </footer>
    </div>
  );
}
