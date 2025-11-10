export const translations = {
  en: {
    nav: {
      about: 'About',
      experience: 'Experience',
      skills: 'Skills',
      aiProjects: 'AI Projects',
      newsletter: 'Newsletter',
      contact: 'Contact',
      letsTalk: "Let's Talk",
    },
    hero: {
      badge: 'Open to Product & AI Projects',
      title: 'Andre Ganske',
      subtitle: 'Intelligent systems for people & bussiness',
      description: 'Senior Product Manager | Product-Led Growth | Human-Centered IA',
      cta1: 'Get in Touch',
      cta2: 'View My Work',
    },
    about: {
      title: 'About Me',
      p1: 'I enjoy turning complex problems into solutions that create real value for people, for the business, and for the team.',
      p2: "I've been working in tech for over 15 years, building a background that combines product strategy, technical knowledge, and hands-on entrepreneurial experience. As a Product Manager, I've led end-to-end product development: from user discovery to delivery and continuous improvement at scale.",
      p3: 'I thrive in environments where I can build with clarity, autonomy, and purpose. I enjoy working with collaborative teams that value open communication, thoughtful decision-making, and consistent delivery.',
      p4: "If you believe in meaningful products and strong, aligned teams let's connect.",
    },
    experience: {
      title: 'Experience & Focus',
      aiRisk: {
        title: 'AI & Risk Intelligence',
        items: [
          'Leading AI-powered risk and anti-fraud product initiatives',
          'Building intelligent systems for fraud detection and prevention',
          'Implementing ML models for risk assessment at scale',
        ],
      },
      productStrategy: {
        title: 'Product Strategy & Delivery',
        items: [
          'End-to-end product development from discovery to delivery',
          'Product-Led Growth strategies and continuous discovery',
          'Data-driven decision making and metric definition',
        ],
      },
      teamLeadership: {
        title: 'Team Leadership',
        items: [
          'Cross-functional team collaboration and alignment',
          'Mentoring and developing product talent',
          'Building high-performing, autonomous teams',
        ],
      },
    },
    skills: {
      title: 'Skills & Expertise',
      productManagement: {
        title: 'Product Management',
        items: ['Product Strategy', 'User Research & Discovery', 'Product-Led Growth', 'Roadmap Planning', 'Stakeholder Management', 'Agile/Scrum'],
      },
      aiData: {
        title: 'AI & Data',
        items: ['AI/ML Product Development', 'Risk Modeling', 'Data-Driven Decision Making', 'A/B Testing', 'Analytics & Metrics', 'Fraud Detection Systems'],
      },
      technical: {
        title: 'Technical',
        items: ['API Design', 'System Architecture', 'SQL & Data Analysis', 'Technical Documentation', 'Integration Strategy', 'Performance Optimization'],
      },
      leadership: {
        title: 'Leadership',
        items: ['Team Building', 'Cross-functional Collaboration', 'Mentoring', 'Strategic Communication', 'Conflict Resolution', 'Change Management'],
      },
    },
    aiProjects: {
      badge: 'AI Explorations',
      title: 'Building with AI',
      subtitle: 'Exploring the intersection of AI and product innovation through hands-on projects',
      description: 'Each project is an experiment in applying AI to solve real-world problems, from mental health to financial wellness and security.',
      projects: {
        mindbloom: {
          name: 'Mind Bloom / Call Confidence',
          description: 'AI micro-SaaS that helps sales professionals overcome cold-call anxiety through simulated coaching, tone analysis, and cognitive reframing.',
          detail: 'Explores affective computing, emotion recognition, and behavioral reinforcement to improve confidence and communication performance.',
        },
        attractor: {
          name: 'Attractor',
          description: 'AI-driven finance app for couples — aligning emotional and financial decision-making through shared transparency.',
          detail: 'Applies behavioral economics, explainable AI, and relationship psychology to build trust around money decisions.',
        },
        radarpx: {
          name: 'Radar PX',
          description: 'Modular risk-intelligence platform integrating enrichment, cognitive profiling, and behavioral scoring to classify driver risk at scale.',
          detail: 'Connects operational data with psychological insight to anticipate risk patterns before they happen — reducing fraud by 20% and saving R$1.5M/year through intelligent automation.',
        },
        digha: {
          name: 'Digha.app',
          description: 'AI-powered assistant for 1:1 meetings and self-reflection, designed to help teams turn conversations into measurable growth.',
          detail: 'Built to transform leadership rituals into feedback loops — summarizing insights, tracking progress, and improving how managers listen and coach. Although discontinued, it proved how AI can nurture healthier teams.',
        },
        pmfofo: {
          name: 'PM Fofo',
          description: 'LLM-based assistant that helps Product Managers translate messy discovery sessions into structured, shareable artifacts.',
          detail: 'Automates the creation of RFCs, BDDs, and opportunity statements — freeing PMs to focus on insight and alignment instead of formatting.',
        },
        adalbertoc4: {
          name: 'Adalberto the C4',
          description: 'Conversational AI specialized in software architecture, helping teams describe and visualize systems through the C4 modeling approach.',
          detail: 'Acts as a concise, human-like software architect — guiding the creation of Context, Container, Component, and Code diagrams with clarity and consistency. Designed to make architecture communication accessible to both engineers and product stakeholders.',
        },
        adalbertorfc: {
          name: 'Adalberto the RFC',
          description: 'Conversational AI trained on real product documents to create RFCs and specs that sound human — not robotic.',
          detail: 'Brings structure, empathy, and consistency to technical writing by learning from your tone, frameworks, and context.',
        },
        aiplayground: {
          name: 'AI Research Playground',
          description: 'Internal R&D hub for prototyping AI capabilities in risk analysis, legal-text understanding, and human-in-the-loop model evaluation.',
          detail: 'Serves as the incubation layer for next-generation features — bridging research and production through continuous experimentation.',
        },
        riskgpt: {
          name: 'RiskGPT',
          description: 'Specialized AI agent that interprets judicial and behavioral data to classify transport-related risks with contextual accuracy.',
          detail: 'Enhances decision engine by extracting nuanced legal signals and explaining model reasoning in plain language for audit-ready insights.',
        },
        featuregpt: {
          name: 'FeatureGPT',
          description: 'AI writing companion that powers the "Feature ou Bug" newsletter — translating real product lessons into clear, narrative-driven insights.',
          detail: 'Blends storytelling and strategy to turn data into meaning — helping PMs communicate outcomes, not outputs.',
        },
      },
    },
    newsletter: {
      badge: 'Newsletter',
      title: 'Feature or Bug Newsletter',
      subtitle: 'Real product management insights from the trenches no buzzwords, no fluff.',
      description: 'A biweekly newsletter about product management in real life, written by someone who lives it every day.',
      whatToExpect: 'What to expect:',
      items: [
        'Continuous value delivery and the ship or improve dilemma',
        'Decision-making in complex environments',
        'Experimentation, risk, and learning',
        'Product with SQL, AI, data, and continuous discovery',
        'Mistakes that became jokes and lessons',
      ],
      cta: 'Subscribe to Newsletter',
      ctaSubtext: 'Join readers getting biweekly insights on real PM work',
    },
    contact: {
      title: "Let's Connect",
      subtitle: "Interested in working together or just want to chat about product, AI, or tech? I'd love to hear from you.",
      sendEmail: 'Send Email',
      linkedin: 'LinkedIn',
      copyright: 'Copyright {year} Andre Ganske. All rights reserved.',
    },
    footer: {
      quickLinks: 'Quick Links',
      connect: 'Connect',
      language: 'Language',
      home: 'Home',
      about: 'About',
      work: 'Work',
      newsletter: 'Newsletter',
      contact: 'Contact',
      aiGenerated: 'This site was created with AI assistance',
      madeWith: 'Built with {nextjs} and {ai}',
    },
  },
  pt: {
    nav: {
      about: 'Sobre',
      experience: 'Experiência',
      skills: 'Habilidades',
      aiProjects: 'Projetos IA',
      newsletter: 'Newsletter',
      contact: 'Contato',
      letsTalk: 'Vamos Conversar',
    },
    hero: {
      badge: 'Aberto a projetos de Produto e IA',
      title: 'Andre Ganske',
      subtitle: 'Sistemas inteligentes para pessoas & negócios',
      description: 'Senior Product Manager | Product-Led Growth | IA Centrada no Humano',
      cta1: 'Entrar em Contato',
      cta2: 'Ver Meu Trabalho',
    },
    about: {
      title: 'Sobre Mim',
      p1: 'Gosto de transformar problemas complexos em soluções que criam valor real para as pessoas, para o negócio e para o time.',
      p2: 'Trabalho com tecnologia há mais de 15 anos, construindo uma bagagem que combina estratégia de produto, conhecimento técnico e experiência empreendedora hands-on. Como Product Manager, liderei desenvolvimento de produto end-to-end: desde a descoberta do usuário até a entrega e melhoria contínua em escala.',
      p3: 'Prospero em ambientes onde posso construir com clareza, autonomia e propósito. Gosto de trabalhar com times colaborativos que valorizam comunicação aberta, tomada de decisão ponderada e entrega consistente.',
      p4: 'Se você acredita em produtos significativos e times fortes e alinhados vamos conectar.',
    },
    experience: {
      title: 'Experiência & Foco',
      aiRisk: {
        title: 'IA & Inteligência de Risco',
        items: [
          'Liderando iniciativas de produto de risco e anti-fraude com IA',
          'Construindo sistemas inteligentes para detecção e prevenção de fraudes',
          'Implementando modelos de ML para avaliação de risco em escala',
        ],
      },
      productStrategy: {
        title: 'Estratégia & Entrega de Produto',
        items: [
          'Desenvolvimento de produto end-to-end da descoberta à entrega',
          'Estratégias de Product-Led Growth e descoberta contínua',
          'Tomada de decisão orientada por dados e definição de métricas',
        ],
      },
      teamLeadership: {
        title: 'Liderança de Times',
        items: [
          'Colaboração e alinhamento de times multifuncionais',
          'Mentoria e desenvolvimento de talentos em produto',
          'Construção de times autônomos de alta performance',
        ],
      },
    },
    skills: {
      title: 'Habilidades & Expertise',
      productManagement: {
        title: 'Gestão de Produto',
        items: ['Estratégia de Produto', 'Pesquisa & Discovery', 'Product-Led Growth', 'Planejamento de Roadmap', 'Gestão de Stakeholders', 'Agile/Scrum'],
      },
      aiData: {
        title: 'IA & Dados',
        items: ['Desenvolvimento de Produto IA/ML', 'Modelagem de Risco', 'Decisões Data-Driven', 'Testes A/B', 'Analytics & Métricas', 'Sistemas de Detecção de Fraude'],
      },
      technical: {
        title: 'Técnico',
        items: ['Design de API', 'Arquitetura de Sistemas', 'SQL & Análise de Dados', 'Documentação Técnica', 'Estratégia de Integração', 'Otimização de Performance'],
      },
      leadership: {
        title: 'Liderança',
        items: ['Construção de Times', 'Colaboração Multifuncional', 'Mentoria', 'Comunicação Estratégica', 'Resolução de Conflitos', 'Gestão de Mudanças'],
      },
    },
    aiProjects: {
      badge: 'Explorações com IA',
      title: 'Construindo com IA',
      subtitle: 'Explorando a interseção entre IA e inovação em produto através de projetos práticos',
      description: 'Cada projeto é um experimento em aplicar IA para resolver problemas do mundo real, desde saúde mental até bem-estar financeiro e segurança.',
      projects: {
        mindbloom: {
          name: 'Mind Bloom / Call Confidence',
          description: 'Micro-SaaS de IA que ajuda profissionais de vendas a superar ansiedade de cold-calls através de coaching simulado, análise de tom e reestruturação cognitiva.',
          detail: 'Explora computação afetiva, reconhecimento de emoções e reforço comportamental para melhorar confiança e performance de comunicação.',
        },
        attractor: {
          name: 'Attractor',
          description: 'App financeiro impulsionado por IA para casais — alinhando tomada de decisão emocional e financeira através de transparência compartilhada.',
          detail: 'Aplica economia comportamental, IA explicável e psicologia de relacionamentos para construir confiança em torno de decisões financeiras.',
        },
        radarpx: {
          name: 'Radar PX',
          description: 'Plataforma modular de inteligência de risco integrando enriquecimento, perfilamento cognitivo e pontuação comportamental para classificar risco de motoristas em escala.',
          detail: 'Conecta dados operacionais com insights psicológicos para antecipar padrões de risco antes que aconteçam — reduzindo fraude em 20% e economizando R$1,5M/ano através de automação inteligente.',
        },
        digha: {
          name: 'Digha.app',
          description: 'Assistente alimentado por IA para reuniões 1:1 e auto-reflexão, projetado para ajudar times a transformar conversas em crescimento mensurável.',
          detail: 'Construído para transformar rituais de liderança em loops de feedback — resumindo insights, rastreando progresso e melhorando como gestores escutam e orientam. Embora descontinuado, provou como IA pode nutrir times mais saudáveis.',
        },
        pmfofo: {
          name: 'PM Fofo',
          description: 'Assistente baseado em LLM que ajuda Product Managers a traduzir sessões de discovery bagunçadas em artefatos estruturados e compartilháveis.',
          detail: 'Automatiza a criação de RFCs, BDDs e declarações de oportunidade — liberando PMs para focar em insights e alinhamento ao invés de formatação.',
        },
        adalbertoc4: {
          name: 'Adalberto do C4',
          description: 'IA conversacional especializada em arquitetura de software, ajudando times a descrever e visualizar sistemas através da abordagem de modelagem C4.',
          detail: 'Age como um arquiteto de software conciso e humanizado — guiando a criação de diagramas de Contexto, Container, Componente e Código com clareza e consistência. Projetado para tornar a comunicação de arquitetura acessível tanto para engenheiros quanto para stakeholders de produto.',
        },
        adalbertorfc: {
          name: 'Adalberto do RFC',
          description: 'IA conversacional treinada em documentos de produto reais para criar RFCs e specs que soam humanas — não robóticas.',
          detail: 'Traz estrutura, empatia e consistência à escrita técnica aprendendo do seu tom, frameworks e contexto.',
        },
        aiplayground: {
          name: 'AI Research Playground',
          description: 'Hub interno de P&D para prototipagem de capacidades de IA em análise de risco, compreensão de texto legal e avaliação de modelos com humano no loop.',
          detail: 'Serve como camada de incubação para recursos de próxima geração — conectando pesquisa e produção através de experimentação contínua.',
        },
        riskgpt: {
          name: 'RiskGPT',
          description: 'Agente de IA especializado que interpreta dados judiciais e comportamentais para classificar riscos relacionados a transporte com precisão contextual.',
          detail: 'Aprimora motor de decisão extraindo sinais legais nuançados e explicando raciocínio do modelo em linguagem clara para insights auditáveis.',
        },
        featuregpt: {
          name: 'FeatureGPT',
          description: 'Companheiro de escrita com IA que alimenta a newsletter "Feature ou Bug" — traduzindo lições reais de produto em insights claros e narrativos.',
          detail: 'Mistura storytelling e estratégia para transformar dados em significado — ajudando PMs a comunicar resultados, não outputs.',
        },
      },
    },
    newsletter: {
      badge: 'Newsletter',
      title: 'Feature ou Bug Newsletter',
      subtitle: 'Insights reais de gestão de produto das trincheiras sem buzzwords, sem enrolação.',
      description: 'Uma newsletter quinzenal sobre gestão de produto na vida real, escrita por alguém que vive isso todos os dias.',
      whatToExpect: 'O que esperar:',
      items: [
        'Entrega contínua de valor e o dilema entregar ou melhorar',
        'Tomada de decisão em ambientes complexos',
        'Experimentação, risco e aprendizado',
        'Produto com SQL, IA, dados e descoberta contínua',
        'Erros que viraram piadas e lições',
      ],
      cta: 'Assinar Newsletter',
      ctaSubtext: 'Junte-se aos leitores que recebem insights quinzenais sobre trabalho real de PM',
    },
    contact: {
      title: 'Vamos Conectar',
      subtitle: 'Interessado em trabalhar junto ou só quer conversar sobre produto, IA ou tech? Adoraria ouvir de você.',
      sendEmail: 'Enviar Email',
      linkedin: 'LinkedIn',
      copyright: 'Copyright {year} Andre Ganske. Todos os direitos reservados.',
    },
    footer: {
      quickLinks: 'Links Rápidos',
      connect: 'Conectar',
      language: 'Idioma',
      home: 'Início',
      about: 'Sobre',
      work: 'Trabalho',
      newsletter: 'Newsletter',
      contact: 'Contato',
      aiGenerated: 'Este site foi criado com assistência de IA',
      madeWith: 'Feito com {nextjs} e {ai}',
    },
  },
}

export type Language = 'en' | 'pt'
export type TranslationKey = keyof typeof translations.en

export function getTranslation(lang: Language, key: string): any {
  const keys = key.split('.')
  let value: any = translations[lang]

  for (const k of keys) {
    value = value?.[k]
  }

  return value
}
