import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, ArrowUpRight } from 'lucide-react';
import { PORTFOLIO_DATA } from '../constants';

const Projects: React.FC = () => {
  const { projects } = PORTFOLIO_DATA;

  return (
    <section id="projects" className="bg-neutral-950 py-32 border-b border-neutral-900">
      <div className="max-w-[1800px] mx-auto px-4 md:px-12">
        {/* Section Header */}
        <div className="mb-20">
          <div className="flex items-baseline space-x-4">
            <span className="text-[#39ff14] font-mono text-sm tracking-widest uppercase">
              // INDEX.02
            </span>
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase">
              Projetos Selecionados
            </h2>
          </div>
          <p className="hidden md:block font-mono text-sm text-neutral-500 tracking-wider mt-4 ml-1">
            &gt; passe o cursor para visualizar
          </p>
        </div>

        {/* Use CSS Grid with 0 gap for the 'bordered' look */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-neutral-800">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative border-r border-b border-neutral-800 bg-neutral-950/50 aspect-[4/5] md:aspect-square overflow-hidden hover:border-[#39ff14] transition-colors duration-500"
            >
              {/* --- IMAGE LAYER --- */}
              <div className="absolute inset-0 z-0">
                {/* Base Dark Overlay - Always present but lighter on hover to show image */}
                <div className="absolute inset-0 bg-neutral-950/80 group-hover:bg-neutral-950/30 max-md:bg-neutral-950/30 transition-colors duration-500 z-10" />

                {/* Gradient Scrim - Protects text readability at the bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/60 to-transparent opacity-90 transition-opacity duration-500 z-10" />

                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 max-md:grayscale-0 max-md:opacity-100 transition-all duration-700 ease-out"
                />
              </div>

              {/* --- CONTENT OVERLAY --- */}
              <div className="absolute inset-0 z-20 p-8 flex flex-col justify-between">

                {/* Top: ID & Tech */}
                <div className="flex justify-between items-start opacity-70 group-hover:opacity-100 max-md:opacity-100 transition-opacity">
                  <span className="font-mono text-xs text-[#39ff14] tracking-widest border border-[#39ff14]/30 px-2 py-1 bg-neutral-950/50 backdrop-blur-sm">
                    PRJ :: {project.id}
                  </span>
                  <div className="flex gap-4">
                    {project.repoLink && (
                      <a href={project.repoLink} target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#39ff14] transition-colors drop-shadow-md">
                        <Github className="w-5 h-5" />
                      </a>
                    )}
                    {project.demoLink && (
                      <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#39ff14] transition-colors drop-shadow-md">
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Bottom: Title & Desc */}
                <div className="transform translate-y-4 group-hover:translate-y-0 max-md:translate-y-0 transition-transform duration-500">
                  <div className="overflow-hidden mb-2">
                    <h3 className="text-3xl font-black text-white uppercase tracking-tight leading-none transform translate-y-full group-hover:translate-y-0 max-md:translate-y-0 transition-transform duration-500 delay-100 drop-shadow-lg">
                      {project.title}
                    </h3>
                  </div>

                  <div className="h-0 group-hover:h-auto max-md:h-auto overflow-hidden transition-all duration-500">
                    <p className="text-neutral-300 font-mono text-xs pt-4 leading-relaxed line-clamp-3 drop-shadow-md">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {project.tags.map(tag => (
                        <span key={tag} className="text-[10px] font-mono text-[#39ff14] bg-[#39ff14]/10 px-1 uppercase backdrop-blur-sm">
                          [{tag}]
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Always visible arrow hint */}
                  <div className="absolute bottom-0 right-0 p-4 opacity-0 group-hover:opacity-100 max-md:opacity-100 transition-opacity delay-300 flex items-center gap-2">
                    <span className="hidden md:inline font-mono text-xs text-[#39ff14] tracking-widest uppercase drop-shadow-md">
                      Clique para ver
                    </span>
                    <ArrowUpRight className="w-10 h-10 text-[#39ff14] drop-shadow-lg" />
                  </div>
                </div>

              </div>

              {/* Scanline Effect on Hover */}
              <div className="absolute inset-0 z-10 pointer-events-none opacity-0 group-hover:opacity-20 bg-[linear-gradient(transparent_50%,rgba(57,255,20,0.25)_50%)] bg-[size:100%_4px] transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
