import React from 'react';
import { Heart, ArrowUp, Instagram, Github, Linkedin, MapPin, Mail } from 'lucide-react';
import { PORTFOLIO_DATA } from '../constants';

const Footer: React.FC = () => {
  const { profile } = PORTFOLIO_DATA;
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialIcons: Record<string, React.ReactNode> = {
    "Instagram": <Instagram className="w-5 h-5" />,
    "GitHub": <Github className="w-5 h-5" />,
    "LinkedIn": <Linkedin className="w-5 h-5" />
  };

  return (
    <footer id="footer" className="bg-neutral-950 border-t border-neutral-800 pt-20 pb-10 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#39ff14]/5 rounded-full blur-[120px] pointer-events-none translate-y-1/2" />

      <div className="max-w-[1800px] mx-auto px-4 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-20">

          {/* Column 1: Brand */}
          <div className="space-y-6">
            <span className="text-2xl font-black tracking-tighter text-white">
              MM<span className="text-[#39ff14]">.</span>
            </span>
            <p className="text-neutral-400 text-sm leading-relaxed max-w-xs">
              {profile.tagline}
            </p>
            <div className="flex items-center gap-2 text-neutral-500 text-xs font-mono border border-neutral-800 rounded-full px-3 py-1 w-fit">
              <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
              Open to Work
            </div>
          </div>

          {/* Column 2: Sitemap */}
          <div>
            <h4 className="text-white font-mono text-xs uppercase tracking-widest mb-6">Sitemap</h4>
            <ul className="space-y-4">
              {[
                { name: 'Projetos', href: '#projects' },
                { name: 'Experiência', href: '#experience' },
                { name: 'Sobre', href: '#hero' },
                { name: 'Contato', href: '#contact' }
              ].map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-neutral-500 hover:text-[#39ff14] text-sm transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Socials */}
          <div>
            <h4 className="text-white font-mono text-xs uppercase tracking-widest mb-6">Connect</h4>
            <ul className="space-y-4">
              {profile.socials.map((social) => (
                <li key={social.platform}>
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 text-neutral-500 hover:text-white transition-colors"
                  >
                    <span className="group-hover:text-[#39ff14] transition-colors">
                      {socialIcons[social.platform] || <Github className="w-5 h-5" />}
                    </span>
                    <span className="text-sm">{social.platform}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Info */}
          <div>
            <h4 className="text-white font-mono text-xs uppercase tracking-widest mb-6">Info</h4>
            <ul className="space-y-4 text-sm text-neutral-500">
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#39ff14]" />
                <a href={`mailto:${profile.contact?.email}`} className="hover:text-white transition-colors">
                  {profile.contact?.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-[#39ff14]" />
                <span>São Luis - MA</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-neutral-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-neutral-600 text-xs">
            &copy; {currentYear} {profile.name}. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 text-neutral-600 text-xs text-center md:text-right">
              <span>Desenvolvido com</span>
              <Heart className="w-3 h-3 text-red-500 fill-current" />
              <span className="hidden md:inline">e Inteligência Artificial</span>
              <span className="md:hidden">e IA</span>
            </div>

            <button
              onClick={scrollToTop}
              className="group bg-neutral-900 hover:bg-[#39ff14] border border-neutral-800 hover:border-[#39ff14] p-3 rounded-full transition-all duration-300"
              aria-label="Voltar ao topo"
            >
              <ArrowUp className="w-4 h-4 text-neutral-400 group-hover:text-black transition-colors" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
