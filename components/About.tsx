import React from 'react';
import { motion } from 'framer-motion';
import { PORTFOLIO_DATA } from '../constants';
import { User, Sparkles } from 'lucide-react';

const About: React.FC = () => {
    const { profile } = PORTFOLIO_DATA;

    return (
        <section id="about" className="relative py-20 bg-neutral-900 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#39ff14]/5 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/2" />

            <div className="max-w-[1200px] mx-auto px-4 md:px-12 relative z-10">
                <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">

                    {/* Image Column */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-full md:w-1/2 flex justify-center md:justify-end"
                    >
                        <div className="relative group">
                            {/* Image Container with Neon Border */}
                            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden border-2 border-neutral-800 group-hover:border-[#39ff14] transition-colors duration-500">
                                <img
                                    src={profile.avatarUrl}
                                    alt={profile.name}
                                    className="w-full h-full object-cover transition-all duration-500 scale-100 group-hover:scale-110"
                                />
                            </div>

                            {/* Decorative Elements */}
                            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#39ff14]/20 rounded-full blur-xl -z-10 group-hover:bg-[#39ff14]/40 transition-colors" />
                            <div className="absolute -top-4 -left-4 w-12 h-12 border-t-2 border-l-2 border-[#39ff14] rounded-tl-xl opacity-50 group-hover:opacity-100 transition-opacity" />
                            <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b-2 border-r-2 border-[#39ff14] rounded-br-xl opacity-50 group-hover:opacity-100 transition-opacity" />
                        </div>
                    </motion.div>

                    {/* Text Column */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="w-full md:w-1/2 space-y-6 text-center md:text-left"
                    >
                        <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
                            <User className="w-6 h-6 text-[#39ff14]" />
                            <h2 className="text-3xl md:text-4xl font-black text-white tracking-tighter">
                                SOBRE <span className="text-[#39ff14]">MIM</span>
                            </h2>
                        </div>

                        <p className="text-neutral-400 text-lg leading-relaxed">
                            {profile.about}
                        </p>

                        <div className="pt-4 flex flex-col md:flex-row items-center gap-6">
                            <div className="flex items-center gap-2 text-[#39ff14] text-sm font-bold tracking-widest uppercase">
                                <Sparkles className="w-4 h-4" />
                                <span>AI Specialist</span>
                            </div>
                            <div className="h-px w-12 bg-neutral-800 hidden md:block" />
                            <div className="flex items-center gap-2 text-[#39ff14] text-sm font-bold tracking-widest uppercase">
                                <Sparkles className="w-4 h-4" />
                                <span>Marketing Strategist</span>
                            </div>
                        </div>

                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default About;
