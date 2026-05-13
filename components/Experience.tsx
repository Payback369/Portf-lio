import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, ChevronRight } from 'lucide-react';
import { PORTFOLIO_DATA } from '../constants';

const Experience: React.FC = () => {
  const { experience } = PORTFOLIO_DATA;

  return (
    <section id="experience" className="bg-neutral-950 py-32 border-b border-neutral-900 font-mono">
      <div className="max-w-5xl mx-auto px-4 md:px-12">

        {/* Header */}
        <div className="flex items-center gap-4 mb-16 text-[#39ff14]">
          <Terminal className="w-6 h-6" />
          <h2 className="text-xl md:text-2xl font-bold tracking-widest uppercase">
            ~/trajetoria.log
          </h2>
        </div>

        <div className="space-y-12 relative border-l-2 border-dashed border-neutral-800 ml-3 md:ml-0 pl-8 md:pl-0">

          {experience.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative md:pl-12"
            >
              {/* Timeline Dot (Terminal Prompt) */}
              <div className="absolute -left-[41px] md:left-0 top-1 w-6 h-6 bg-neutral-950 border border-[#39ff14] flex items-center justify-center z-10">
                <div className="w-2 h-2 bg-[#39ff14] animate-pulse"></div>
              </div>

              <div className="bg-neutral-900/30 border border-neutral-800 p-6 md:p-8 hover:border-[#39ff14]/50 hover:bg-neutral-900/50 transition-all duration-300">
                {/* Command Line Header */}
                <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-6 text-xs md:text-sm text-neutral-500 border-b border-neutral-800 pb-4">
                  <span className="text-[#39ff14]">root@matheus:</span>
                  <span className="text-neutral-400">~/atuacao</span>
                  <span className="hidden md:inline text-neutral-700">|</span>
                  <span className="text-neutral-300">[{item.period}]</span>
                  <span className="flex-1 text-right text-[#39ff14]/50">PID: {1000 + index}</span>
                </div>

                {/* Role & Company */}
                <div className="mb-4">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 group-hover:text-[#39ff14] transition-colors">
                    {item.role}
                  </h3>
                  <div className="flex items-center gap-2 text-neutral-400">
                    <ChevronRight className="w-4 h-4 text-[#39ff14]" />
                    <span className="text-sm tracking-widest uppercase">{item.company}</span>
                  </div>
                </div>

                {/* Description (Console Output) */}
                <div className="font-mono text-sm leading-relaxed text-neutral-400 pl-4 border-l border-[#39ff14]/30 mb-6">
                  <span className="text-[#39ff14 opacity-50 block mb-2">// resumo:</span>
                  {item.description}
                </div>

                {/* Tags (Array format) */}
                <div className="flex flex-wrap gap-3">
                  {item.skills.map(skill => (
                    <span key={skill} className="text-xs text-[#39ff14] bg-[#39ff14]/5 px-2 py-1 border border-[#39ff14]/20">
                      {`"${skill}"`}
                    </span>
                  ))}
                </div>

              </div>
            </motion.div>
          ))}

          {/* End of Log blinking cursor */}
          <div className="md:pl-12 pt-8">
            <span className="text-[#39ff14] animate-pulse">_</span>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;
