import React from 'react';
import { PORTFOLIO_DATA } from '../constants';

const TechStack: React.FC = () => {
  const { skills } = PORTFOLIO_DATA;

  // Mapping names to Simple Icons slugs
  const getIconSlug = (name: string) => {
    const map: Record<string, string> = {
      'React': 'react',
      'TypeScript': 'typescript',
      'Tailwind CSS': 'tailwindcss',
      'Python': 'python',
      'PostgreSQL': 'postgresql',
      'Docker': 'docker',
      'Next.js': 'nextdotjs',
      'Figma': 'figma',
      'N8N': 'n8n',
      'Supabase': 'supabase',
      'Google Gemini': 'google',
      'Framer Motion': 'framer',
      'AI Studio': 'googlegemini',
      'Node.js': 'nodedotjs'
    };
    return map[name] || name.toLowerCase().replace(/\s+/g, '');
  };

  // Duplicate for seamless loop
  const duplicatedSkills = [...skills, ...skills, ...skills, ...skills];

  return (
    <div className="relative w-full bg-neutral-950 border-y border-neutral-800 overflow-hidden py-6 md:py-8">
      {/* Decorative Label */}
      <div className="absolute top-0 left-4 text-[10px] text-neutral-600 font-mono tracking-widest uppercase py-1 z-20 bg-neutral-950">
        Stack :: Core & Tools
      </div>

      <div className="flex w-full select-none">
        <div className="flex animate-[infinite-scroll_60s_linear_infinite] whitespace-nowrap">
          {duplicatedSkills.map((skill, index) => (
            <div
              key={`${skill}-${index}`}
              className="flex items-center space-x-6 md:space-x-8 px-8 group border-r border-neutral-900 last:border-r-0"
            >
              {/* Icon - Grayscale to Neon */}
              <img
                src={`https://cdn.simpleicons.org/${getIconSlug(skill)}/FFFFFF`}
                alt={skill}
                className="w-6 h-6 md:w-8 md:h-8 opacity-40 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300 filter"
                style={{
                  filter: 'grayscale(100%) brightness(0.7)',
                  transition: 'filter 0.3s'
                }}
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
                onMouseOver={(e) => {
                  (e.currentTarget as HTMLImageElement).style.filter = 'drop-shadow(0 0 5px #39ff14) grayscale(0%) brightness(1)';
                  (e.currentTarget as HTMLImageElement).src = `https://cdn.simpleicons.org/${getIconSlug(skill)}/39ff14`;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLImageElement).style.filter = 'grayscale(100%) brightness(0.7)';
                  (e.currentTarget as HTMLImageElement).src = `https://cdn.simpleicons.org/${getIconSlug(skill)}/FFFFFF`;
                }}
              />

              {/* Text - Neutral to Neon */}
              <span className="text-sm md:text-base font-mono font-bold text-neutral-600 group-hover:text-[#39ff14] transition-colors uppercase tracking-widest">
                {skill}
              </span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes infinite-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-25%); }
        }
      `}</style>
    </div>
  );
};

export default TechStack;
