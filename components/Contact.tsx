import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, MessageSquare, ArrowRight, Smartphone } from 'lucide-react';
import { PORTFOLIO_DATA } from '../constants';

const Contact: React.FC = () => {
    const { profile } = PORTFOLIO_DATA;

    // Form State
    const [formState, setFormState] = useState({
        name: '',
        subject: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        });
    };

    // WhatsApp Handler
    const handleWhatsApp = () => {
        const text = `Olá Matheus, meu nome é ${formState.name || 'Visitante'}. ${formState.message ? `Gostaria de falar sobre: ${formState.message}` : 'Gostaria de entrar em contato através do seu portfólio.'}`;
        const encodedText = encodeURIComponent(text);
        window.open(`https://wa.me/${profile.contact?.whatsapp}?text=${encodedText}`, '_blank');
    };

    // Mailto Handler
    const handleEmail = (e: React.FormEvent) => {
        e.preventDefault();
        if (!profile.contact?.email) return;

        const subject = formState.subject || `Contato de ${formState.name}`;
        const body = `Nome: ${formState.name}%0D%0A%0D%0AMensagem:%0D%0A${formState.message}`;

        window.location.href = `mailto:${profile.contact.email}?subject=${encodeURIComponent(subject)}&body=${body}`;
    };

    return (
        <section id="contact" className="bg-neutral-950 py-32 border-b border-neutral-900 relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#39ff14]/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-6xl mx-auto px-4 md:px-12 relative z-10">

                {/* Header */}
                <div className="flex items-baseline space-x-4 mb-20">
                    <span className="text-[#39ff14] font-mono text-sm tracking-widest uppercase">
            // CONTACT.04
                    </span>
                    <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase">
                        Let's Talk
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">

                    {/* Left Column: Info & Direct Actions */}
                    <div className="space-y-12">
                        <div>
                            <p className="text-neutral-400 text-lg leading-relaxed mb-8">
                                Estou disponível para projetos de consultoria em IA, automação e desenvolvimento.
                                Tem uma ideia ou desafio? Vamos construir a solução.
                            </p>

                            {/* WhatsApp Card */}
                            <motion.button
                                onClick={handleWhatsApp}
                                whileHover={{ scale: 1.02, borderColor: '#39ff14' }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full bg-neutral-900/50 border border-neutral-800 p-6 rounded-xl text-left group transition-all duration-300 relative overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-[#39ff14]/5 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500" />
                                <div className="flex items-center justify-between relative z-10">
                                    <div className="flex items-center gap-4">
                                        <div className="p-3 bg-[#39ff14]/10 rounded-full text-[#39ff14]">
                                            <MessageSquare className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h4 className="text-white font-bold text-lg">Me chame no Zap</h4>
                                            <p className="text-neutral-500 text-sm font-mono mt-1">Resposta rápida</p>
                                        </div>
                                    </div>
                                    <ArrowRight className="text-neutral-600 group-hover:text-[#39ff14] transition-colors" />
                                </div>
                            </motion.button>
                        </div>

                        {/* Social Links */}
                        <div>
                            <h4 className="text-white font-mono text-sm uppercase tracking-widest mb-6 border-b border-neutral-800 pb-2 inline-block">
                                Social Networks
                            </h4>
                            <div className="flex flex-col gap-4">
                                {profile.socials.map((social) => (
                                    <a
                                        key={social.platform}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-4 text-neutral-400 hover:text-white transition-colors group"
                                    >
                                        <span className="w-2 h-2 bg-neutral-800 group-hover:bg-[#39ff14] transition-colors rounded-full" />
                                        <span className="font-mono text-sm group-hover:translate-x-2 transition-transform duration-300">
                                            /{social.platform.toUpperCase()}
                                        </span>
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Contact Details */}
                        <div className="pt-8 border-t border-neutral-800">
                            <div className="flex items-center gap-3 text-neutral-400 mb-2">
                                <MessageSquare className="w-4 h-4 text-[#39ff14]" />
                                <span className="font-mono text-sm">{profile.contact?.email}</span>
                            </div>
                            <div className="flex items-center gap-3 text-neutral-400">
                                <Smartphone className="w-4 h-4 text-[#39ff14]" />
                                <span className="font-mono text-sm">{profile.contact?.whatsappDisplay}</span>
                            </div>
                        </div>

                    </div>

                    {/* Right Column: Email Form */}
                    <div className="bg-neutral-900/30 border border-neutral-800 p-8 rounded-2xl backdrop-blur-sm relative">
                        <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                            <Mail className="w-5 h-5 text-[#39ff14]" />
                            Enviar Email
                        </h3>

                        <form onSubmit={handleEmail} className="space-y-6">
                            <div className="space-y-2">
                                <label className="text-xs font-mono text-neutral-500 uppercase tracking-wider">Seu Nome</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formState.name}
                                    onChange={handleChange}
                                    placeholder="Nome Exemplo"
                                    className="w-full bg-neutral-950/50 border border-neutral-800 rounded-lg p-3 text-white focus:border-[#39ff14] focus:outline-none focus:ring-1 focus:ring-[#39ff14]/50 transition-all placeholder:text-neutral-700"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-mono text-neutral-500 uppercase tracking-wider">Assunto</label>
                                <input
                                    type="text"
                                    name="subject"
                                    value={formState.subject}
                                    onChange={handleChange}
                                    placeholder="Projeto de Automação..."
                                    className="w-full bg-neutral-950/50 border border-neutral-800 rounded-lg p-3 text-white focus:border-[#39ff14] focus:outline-none focus:ring-1 focus:ring-[#39ff14]/50 transition-all placeholder:text-neutral-700"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-mono text-neutral-500 uppercase tracking-wider">Mensagem</label>
                                <textarea
                                    name="message"
                                    value={formState.message}
                                    onChange={handleChange}
                                    rows={4}
                                    placeholder="Como posso te ajudar?"
                                    className="w-full bg-neutral-950/50 border border-neutral-800 rounded-lg p-3 text-white focus:border-[#39ff14] focus:outline-none focus:ring-1 focus:ring-[#39ff14]/50 transition-all resize-none placeholder:text-neutral-700"
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-[#39ff14] text-neutral-950 font-bold py-4 rounded-lg hover:bg-[#32e010] transition-colors flex items-center justify-center gap-2 uppercase tracking-wide text-sm"
                            >
                                <Send className="w-4 h-4" />
                                Iniciar Conversa
                            </button>

                            <p className="text-center text-neutral-600 text-xs mt-4">
                                Redireciona para o seu cliente de email padrão.
                            </p>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Contact;
