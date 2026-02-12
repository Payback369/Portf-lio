import { PortfolioData } from './types';

export const PORTFOLIO_DATA: PortfolioData = {
  profile: {
    name: "Matheus Macário",
    role: "Especialista em IA & Marketing",
    tagline: "Engenharia de Inteligência Artificial aplicada ao Marketing Digital.",
    about: "Apaixonado por Marketing, Inovação e Tecnologia. Já atuei em vários mercados do Digital como prestador de serviços. Ao longo dessa jornada desenvolvi uma série de habilidades em todos os ambitos.",
    avatarUrl: "/photo_2025-11-01_12-18-34.jpg",
    contact: {
      email: "matheusmakario@gmail.com",
      whatsapp: "5598970045720",
      whatsappDisplay: "+55 (98) 97004-5720"
    },
    socials: [
      { platform: "Instagram", url: "https://www.instagram.com/ms.matheus0/", icon: "Instagram" },
      { platform: "GitHub", url: "https://github.com/Payback369", icon: "Github" },
      { platform: "LinkedIn", url: "https://www.linkedin.com/in/matheus-mac%C3%A1rio-69632038a/", icon: "Linkedin" },
    ]
  },
  skills: [
    "Google Gemini",
    "N8N",
    "Supabase",
    "Framer Motion",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Python",
    "PostgreSQL",
    "Docker",
    "Next.js",
    "Figma"
  ],
  projects: [
    {
      id: "1",
      title: "AdaptaCast",
      description: "Podcast criado 100% com IA utilizando AI Studio, Gemini, Whisk e Capcut. O sistema gera roteiros, vozes sintéticas e edita o vídeo automaticamente.",
      tags: ["AI Studio", "Gemini", "Whisk", "CapCut"],
      repoLink: "https://github.com",
      demoLink: "https://youtube.com",
      image: "/Projeto1.png"
    },
    {
      id: "2",
      title: "Agente Pessoal Financeiro",
      description: "Automação financeira via WhatsApp integrada ao N8N e Supabase. O agente processa linguagem natural para categorizar gastos e gerar relatórios em tempo real.",
      tags: ["N8N", "Supabase", "WhatsApp API", "PostgreSQL"],
      repoLink: "https://github.com",
      demoLink: "#",
      image: "/Projeto2.jpeg"
    },
    {
      id: "3",
      title: "Canal Dark Youtube",
      description: "Monetizei esse canal utilizando apenas ferramentas de IA, desde a definição do Branding até a geração de roteiros e imagens. Pude aprender na prática a utilizar as melhores ferramentas do mercado para desenvolver esse Projeto.",
      tags: ["Claude Code", "Whisk", "Automation", "YouTube API"],
      repoLink: "https://github.com",
      demoLink: "https://youtube.com",
      image: "/Projeto3.jpeg"
    }
  ],
  experience: [
    {
      id: "exp1",
      role: "Especialista em IA & Automação",
      company: "Freelance / Consultoria",
      period: "2025 - Presente",
      description: "Desenvolvimento de Agentes Autônomos, integração de LLMs (Gemini, Claude, OpenAI) em fluxos de trabalho empresariais e consultoria técnica para implementação de IA.",
      skills: ["LLMs", "Agentic AI", "Python", "RAG"]
    },
    {
      id: "exp2",
      role: "Especialista em Marketing Digital",
      company: "Várias Agências",
      period: "2023 - 2024",
      description: "Atuação multidisciplinar envolvendo Tráfego Pago, Copywriting e Design. Otimização de funis de vendas e estratégias de growth.",
      skills: ["Facebook Ads", "Copywriting", "Analytics", "CRM"]
    }
  ]
};

export const SYSTEM_INSTRUCTION = `
Você é o Agente de IA do portfólio de Matheus Macário.
Seu objetivo é agir como um assistente profissional, respondendo perguntas sobre a carreira, habilidades e projetos do Matheus.

Aqui estão os dados completos do portfólio:
${JSON.stringify(PORTFOLIO_DATA, null, 2)}

Diretrizes:
1. Responda de forma concisa, educada e profissional (Persona: Tech-Savvy, moderno).
2. Se perguntarem sobre tecnologias, destaque o stack mencionado (N8N, Gemini, React, etc.).
3. Se perguntarem sobre contato, sugira baixar o currículo ou usar os links sociais.
4. Use formatação Markdown simples (negrito, listas) para facilitar a leitura.
5. Fale sempre em Português do Brasil.
6. Se a pergunta não for relacionada ao Matheus ou tecnologia, responda educadamente que você está aqui apenas para falar sobre o perfil profissional dele.
`;
