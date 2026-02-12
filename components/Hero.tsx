import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Terminal, Cpu, Instagram, MessageCircle } from 'lucide-react';
import { PORTFOLIO_DATA } from '../constants';

const Hero: React.FC = () => {
  const { profile } = PORTFOLIO_DATA;
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  // Terminal Scramble Effect
  const [roleText, setRoleText] = useState(profile.role);
  const roles = [
    "AI ENGINEER",
    "SYSTEM ARCHITECT",
    "FULL STACK DEV",
    "NEURAL NETWORKS"
  ];

  useEffect(() => {
    let interval: NodeJS.Timeout;
    let index = 0;

    interval = setInterval(() => {
      index = (index + 1) % roles.length;
      let scrambleCount = 0;
      const targetRole = roles[index];
      const scrambleInterval = setInterval(() => {
        setRoleText(prev => targetRole.split('').map((char, i) => {
          if (i < scrambleCount) return targetRole[i];
          return String.fromCharCode(65 + Math.random() * 26);
        }).join(''));

        scrambleCount += 1 / 2; // Speed of resolve
        if (scrambleCount > targetRole.length) clearInterval(scrambleInterval);
      }, 50);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-neutral-950">
      {/* --- BACKGROUND GRID & NOISE --- */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_50%,#39ff141a,transparent)]"></div>
      </div>

      {/* Scanline Overlay */}
      <div className="absolute inset-0 z-10 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
      <div className="absolute inset-0 z-10 pointer-events-none animate-scanline bg-gradient-to-b from-transparent via-[#39ff1410] to-transparent h-[10px] w-full blur-sm"></div>

      <div className="relative z-20 max-w-[1800px] w-full px-4 md:px-12 flex flex-col justify-center min-h-screen">

        {/* --- DECORATIVE TOP DATA --- */}
        <div className="absolute top-32 left-8 md:left-12 flex items-center gap-2 text-[#39ff14]/60 font-mono text-xs tracking-widest">
          <Terminal className="w-3 h-3" />
          <span>SYS.READY :: V.2.0.25</span>
        </div>

        {/* --- MASSIVE TYPOGRAPHY --- */}
        <div className="flex flex-col select-none mix-blend-difference">
          {/* FIRST NAME - OUTLINED */}
          <motion.h1
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            style={{ y: y1 }}
            className="text-[15vw] leading-[0.8] font-black text-transparent stroke-text tracking-tighter opacity-50 hover:opacity-100 transition-opacity duration-500"
          >
            MATHEUS
          </motion.h1>

          {/* LAST NAME - SOLID NEON */}
          <motion.h1
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            style={{ y: y2 }}
            className="text-[15vw] leading-[0.8] font-black text-white mix-blend-overlay tracking-tighter ml-[10vw] relative"
          >
            <span className="relative z-10">MACÁRIO</span>
            <span className="absolute top-1 left-1 text-[#39ff14] z-[-1] opacity-70 blur-sm">MACÁRIO</span>
          </motion.h1>
        </div>

        {/* --- INFO BLOCK --- */}
        <motion.div
          style={{ opacity }}
          className="mt-12 md:mt-0 md:absolute md:bottom-24 md:right-24 max-w-md w-full space-y-6 bg-neutral-950/80 backdrop-blur-sm p-8 border-l-2 border-[#39ff14]"
        >
          {/* Glitching Role */}
          <div className="flex items-center gap-3">
            <Cpu className="text-[#39ff14] w-5 h-5 animate-pulse" />
            <h2 className="text-xl md:text-2xl font-mono font-bold text-[#39ff14] tracking-widest">
              {roleText}
            </h2>
          </div>

          <p className="text-neutral-400 font-mono text-sm leading-relaxed">
            Construindo sistemas inteligentes que unem a intenção humana à execução da máquina.
          </p>

          <div className="flex gap-4 pt-4">
            <a
              href="#projects"
              className="group flex-1 flex items-center justify-center gap-3 bg-white text-black px-6 py-3 font-bold tracking-widest hover:bg-[#39ff14] transition-colors"
            >
              <span>PROJETOS</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="https://www.instagram.com/ms.matheus0/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center px-4 py-3 font-bold tracking-widest text-white border border-neutral-700 hover:border-[#39ff14] hover:text-[#39ff14] transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>

            <a
              href="https://wa.me/5598970045720"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center px-4 py-3 font-bold tracking-widest text-white border border-neutral-700 hover:border-[#39ff14] hover:text-[#39ff14] transition-colors"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-5 h-5" />
            </a>
          </div>
        </motion.div>

      </div>

      <style>{`
        .stroke-text {
          -webkit-text-stroke: 2px rgba(255, 255, 255, 0.3);
        }
        .stroke-text:hover {
          -webkit-text-stroke: 2px #39ff14;
        }
        @keyframes scanline {
          0% { transform: translateY(-100vh); }
          100% { transform: translateY(100vh); }
        }
        .animate-scanline {
          animation: scanline 8s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;
