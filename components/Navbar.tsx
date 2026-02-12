import React, { useState } from 'react';
import { Menu, X, ArrowUpRight, Github, Linkedin, Mail, Download, Instagram } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'PROJETOS', href: '#projects', id: '01' },
  { name: 'EXPERIÊNCIA', href: '#experience', id: '02' },
  { name: 'SOBRE', href: '#about', id: '03' },
  { name: 'CONTATO', href: '#footer', id: '04' },
];

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Animation variants
  const menuVariants = {
    closed: { y: '-100%', transition: { type: 'tween', ease: [0.76, 0, 0.24, 1], duration: 0.8 } },
    open: { y: '0%', transition: { type: 'tween', ease: [0.76, 0, 0.24, 1], duration: 0.8 } },
  };

  const linkVariants = {
    closed: { opacity: 0, y: -20 },
    open: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.4 + i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    }),
  };

  return (
    <>
      {/* --- RADICAL ISLAND (DOCK) --- */}
      <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] md:w-auto">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex items-center justify-between md:justify-start gap-4 md:gap-8 px-6 py-3 md:px-8 md:py-4 bg-neutral-950/80 backdrop-blur-md border border-[#39ff14] shadow-[4px_4px_0px_#39ff14]"
        >
          <a href="#" className="flex items-center space-x-2 mr-0 md:mr-4 group">
            <span className="text-lg font-bold tracking-tighter text-white group-hover:text-[#39ff14] transition-colors">
              MM<span className="text-[#39ff14] group-hover:text-white transition-colors">.</span>
            </span>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-bold tracking-widest text-neutral-400 hover:text-[#39ff14] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            {/* Mobile Menu Trigger */}
            <button
              onClick={() => setIsMenuOpen(true)}
              className="md:hidden text-neutral-400 hover:text-[#39ff14]"
            >
              <Menu className="w-6 h-6" />
            </button>

            <a href="https://drive.google.com/drive/folders/1ehOqYkmlcIDFmunQ-QbYeBwF5qflrQ-G?usp=drive_link" target="_blank" rel="noopener noreferrer" className="hidden md:flex items-center gap-2 bg-[#39ff14] text-black px-4 py-1.5 text-xs font-bold tracking-widest hover:bg-white hover:shadow-[0_0_15px_rgba(57,255,20,0.5)] transition-all">
              <span>CV</span>
              <Download className="w-3 h-3" />
            </a>
          </div>
        </motion.div>
      </div>

      {/* --- FULL SCREEN MENU (Mobile & Overlay) --- */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed inset-0 z-[100] bg-neutral-950 flex flex-col"
          >
            {/* Header in Menu */}
            <div className="flex justify-between items-center p-6 border-b border-neutral-900">
              <span className="text-xl font-bold text-white">MENU</span>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-2 text-neutral-400 hover:text-[#39ff14] transition-colors"
              >
                <X className="w-8 h-8" />
              </button>
            </div>

            {/* Menu Content */}
            <div className="flex-1 flex flex-col justify-center px-8">
              <div className="flex flex-col space-y-6">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.name}
                    custom={i}
                    variants={linkVariants}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="group flex items-center justify-between py-2"
                  >
                    <span className="text-5xl font-black tracking-tighter text-neutral-300 hover:text-[#39ff14] group-hover:text-[#39ff14] transition-colors duration-300">
                      {link.name}
                    </span>
                    <ArrowUpRight className="w-8 h-8 text-neutral-800 group-hover:text-[#39ff14] opacity-0 group-hover:opacity-100 transition-all duration-300" />
                  </motion.a>
                ))}
              </div>

              {/* Mobile Socials */}
              <div className="mt-12 flex gap-6">
                <a href="https://www.instagram.com/ms.matheus0/" target="_blank" className="text-neutral-500 hover:text-[#39ff14] p-2 border border-neutral-800 hover:border-[#39ff14] transition-all">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="https://github.com/Payback369" target="_blank" className="text-neutral-500 hover:text-[#39ff14] p-2 border border-neutral-800 hover:border-[#39ff14] transition-all">
                  <Github className="w-6 h-6" />
                </a>
                <a href="https://www.linkedin.com/in/matheus-mac%C3%A1rio-69632038a/" target="_blank" className="text-neutral-500 hover:text-[#39ff14] p-2 border border-neutral-800 hover:border-[#39ff14] transition-all">
                  <Linkedin className="w-6 h-6" />
                </a>
              </div>
            </div>

            <div className="p-6 border-t border-neutral-900">
              <a href="https://drive.google.com/drive/folders/1ehOqYkmlcIDFmunQ-QbYeBwF5qflrQ-G?usp=drive_link" target="_blank" rel="noopener noreferrer" className="block w-full text-center bg-[#39ff14] text-black font-bold py-4 tracking-widest hover:bg-white transition-colors">
                BAIXAR CURRÍCULO
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
