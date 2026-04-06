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
type Page = 'about' | 'project' | 'reflection';

// --- Components ---

const Navbar = ({ activePage, setActivePage }: { activePage: Page, setActivePage: (p: Page) => void }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center p-6">
      <div className="glass px-6 py-3 rounded-full flex items-center gap-8">
        <button 
          onClick={() => setActivePage('about')}
          className={`text-sm font-medium transition-colors ${activePage === 'about' ? 'text-sky-400' : 'text-slate-400 hover:text-white'}`}
        >
          About me
        </button>
        <button 
          onClick={() => setActivePage('project')}
          className={`text-sm font-medium transition-colors ${activePage === 'project' ? 'text-sky-400' : 'text-slate-400 hover:text-white'}`}
        >
          Capstone Project
        </button>
        <button 
          onClick={() => setActivePage('reflection')}
          className={`text-sm font-medium transition-colors ${activePage === 'reflection' ? 'text-sky-400' : 'text-slate-400 hover:text-white'}`}
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
        <h1 className="text-5xl font-bold mb-4">Capstone: <span className="text-sky-400">Smart Grid Monitoring System</span></h1>
        <p className="text-slate-400 text-xl">An IoT-enabled solution for real-time power distribution analysis and fault detection.</p>
      </div>

      {/* Narrative Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
        <div className="lg:col-span-2 space-y-8">
          <section>
            <h3 className="text-sky-400 font-mono text-sm uppercase tracking-widest mb-4">The Narrative</h3>
            <div className="prose prose-invert max-w-none text-slate-300 leading-relaxed">
              <p>
                As urban energy demands skyrocket, traditional power grids struggle with efficiency and rapid fault response. 
                My Capstone project focused on developing a <strong>Smart Grid Monitoring System</strong> that bridges the gap 
                between legacy infrastructure and modern IoT capabilities.
              </p>
              <p>
                <strong>The Objective:</strong> To create a low-cost, scalable sensor network capable of detecting line faults 
                within milliseconds while providing utility engineers with a granular view of power consumption patterns.
              </p>
              <p>
                <strong>The Process:</strong> The journey began with mathematical modeling of distribution losses in MATLAB. 
                This evolved into a series of hardware iterations—from breadboard prototypes using ESP32 microcontrollers 
                to a final custom PCB design integrated with high-precision current transformers.
              </p>
            </div>
          </section>

          <section>
            <h3 className="text-sky-400 font-mono text-sm uppercase tracking-widest mb-4">Engineering Perspective</h3>
            <div className="glass p-6 rounded-xl space-y-6">
              <div className="aspect-video bg-slate-900 rounded-lg flex items-center justify-center border border-white/5 overflow-hidden">
                <img 
                  src="https://picsum.photos/seed/circuit/1200/800" 
                  alt="Circuit Diagram" 
                  className="w-full h-full object-cover opacity-50"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                   <div className="text-center">
                    <Zap className="mx-auto mb-2 text-sky-400" size={48} />
                    <p className="font-mono text-xs text-slate-500">SYSTEM ARCHITECTURE DIAGRAM V4.2</p>
                   </div>
                </div>
              </div>
              <p className="text-sm text-slate-400 italic text-center">Figure 1: High-level schematic showing the integration of the sensing nodes with the central data gateway via LoRaWAN protocol.</p>
            </div>
          </section>
        </div>

        <div className="space-y-8">
          <div className="glass p-6 rounded-xl">
            <h4 className="font-bold mb-4 flex items-center gap-2"><Briefcase size={18} /> Project Stats</h4>
            <div className="space-y-4 text-sm">
              <div className="flex justify-between">
                <span className="text-slate-500">Duration</span>
                <span>8 Months</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Role</span>
                <span>Lead Hardware Engineer</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Tech Stack</span>
                <span>C++, Python, KiCad</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Outcome</span>
                <span>98% Fault Accuracy</span>
              </div>
            </div>
          </div>

          <div className="glass p-6 rounded-xl">
            <h4 className="font-bold mb-4 flex items-center gap-2"><Code size={18} /> Key Contributions</h4>
            <ul className="text-sm space-y-3 text-slate-400">
              <li>• Designed multi-layer PCB for noise isolation</li>
              <li>• Developed edge-computing algorithm for fault classification</li>
              <li>• Integrated AWS IoT Core for real-time dashboarding</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Iteration Gallery */}
      <div className="space-y-8 mb-20">
        <h3 className="text-2xl font-bold">Design Evolution</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: "Phase 1: Concept", img: "https://picsum.photos/seed/sketch/400/300", desc: "Initial low-fidelity sketches focusing on sensor placement." },
            { title: "Phase 2: Prototype", img: "https://picsum.photos/seed/proto/400/300", desc: "Breadboard testing of the ESP32 and CT sensor integration." },
            { title: "Phase 3: Final", img: "https://picsum.photos/seed/final/400/300", desc: "The final 3D-printed enclosure and custom PCB assembly." }
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

      {/* Call to Action */}
      <div className="glass p-12 rounded-3xl text-center space-y-6">
        <h2 className="text-3xl font-bold">Interested in the technical details?</h2>
        <p className="text-slate-400 max-w-xl mx-auto">The full source code, schematics, and testing reports are available on my GitHub repository for peer review.</p>
        <button className="bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-sky-400 hover:text-white transition-all flex items-center gap-2 mx-auto">
          <Github size={20} /> View on GitHub
        </button>
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
          {activePage === 'project' && <ProjectEntry key="project" />}
          {activePage === 'reflection' && <Reflection key="reflection" />}
        </AnimatePresence>
      </main>

      <footer className="py-12 text-center text-slate-600 text-sm">
        <p>© 2026 Chirag Das. Built with technical precision.</p>
      </footer>
    </div>
  );
}
