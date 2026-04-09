export const PRODUCT_NAME = "Código de Conduta Masculina";

/**
 * URL do checkout. Preferir `NEXT_PUBLIC_CHECKOUT_URL` no deploy; o fallback evita build quebrado.
 */
export const CHECKOUT_URL =
  process.env.NEXT_PUBLIC_CHECKOUT_URL?.trim() || "https://SEU-LINK-AQUI";

/** Metadados SEO — reutilizados no layout */
export const SITE_META = {
  titleSuffix: "Controle no decisivo · acesso imediato",
  description:
    "Pare de reagir no impulso. Guia direto para decidir com clareza e sustentar postura — PDF, síntese e prompts. Tráfego pago, conversão real.",
} as const;

export const NAV = {
  ctaLabel: "Corrigir o padrão — acesso imediato",
  ctaHref: CHECKOUT_URL,
} as const;

export const HERO = {
  headline:
    "Você sabe o que fazer.\nO problema é fazer certo na hora que importa.",
  subheadline:
    'Se a resposta for "nem sempre", o problema não é falta de informação.\nÉ falta de controle no momento decisivo.',
  primaryCta: "Corrigir o padrão — acesso imediato",
  primaryCtaHref: CHECKOUT_URL,
  secondaryCta: "Ver se isso é para mim",
  secondaryCtaHref: "#identificacao",
  primaryCtaHint: "Acesso imediato · leitura prática · sem enrolação",
  support:
    "Um guia direto para parar de reagir no impulso, decidir com clareza e sustentar sua postura — na vida real.",
  card: {
    kicker: "3 fases",
    chapters: [
      {
        n: "I",
        title: "Leitura",
        detail: "Cenário claro antes de mexer.",
      },
      {
        n: "II",
        title: "Controle",
        detail: "Impulso fora do comando.",
      },
      {
        n: "III",
        title: "Sustentação",
        detail: "Decisão que você mantém depois.",
      },
    ],
  },
} as const;

export const PAIN_POINTS = {
  badge: "Identificação",
  title: "Seja honesto",
  subtitle: "",
  items: [
    {
      title: "Quantas vezes você já:",
      description:
        "• soube o que fazer — e não fez\n• decidiu certo — e voltou atrás\n• percebeu o erro — depois que já tinha feito\n\nIsso não é azar.\n\nÉ padrão — e padrão se corrige.",
    },
  ],
} as const;

export const BREAK_BELIEF = {
  badge: "Causa",
  title: "O problema não é saber",
  lead:
    "Você até entende o que deveria fazer.\n\nConta como você se conduz quando:\n\n• a pressão aparece\n• a emoção sobe\n• a decisão pesa",
  emphasis:
    "Sem controle, a decisão perde qualidade.\n\nSem critério, a consequência assume.",
} as const;

export const PRODUCT_SOLUTION = {
  badge: "Método",
  mechanismTitle: "Método de Conduta Masculina — 3 Fases",
  mechanismBody:
    "• Leitura — entender o cenário antes de agir\n• Controle — não reagir no impulso\n• Sustentação — manter a decisão depois\n\nA maioria falha aqui.\n\nQuem acerta, muda o resultado.",
  title: "Um guia para se conduzir melhor",
  subtitle: "O Código de Conduta Masculina foi feito para você:",
  authorityNote:
    "Sem teoria desnecessária.\n\nSem motivação vazia.\n\nSó aplicação.\n\nPrincípios simples. Aplicação direta. Resultado consistente.",
  benefits: [
    {
      title: "Agir com clareza",
      description: "Menos automático, mais critério no movimento.",
    },
    {
      title: "Decidir com firmeza",
      description: "Fechar sem ficar renegociando com você mesmo.",
    },
    {
      title: "Se posicionar melhor",
      description: "Falar e sustentar o que assume.",
    },
    {
      title: "Sustentar o que escolhe",
      description: "Manter a linha depois da decisão.",
    },
  ],
  howItWorksTitle: "Onde isso entra na sua vida",
  howItWorksBody:
    "Antes de responder uma mensagem importante\nAntes de tomar uma decisão que envolve dinheiro\nAntes de reagir em uma situação emocional\nAntes de se posicionar onde não pode falhar\n\nÉ nesse momento que o padrão muda.",
  visualizationTitle: "O que muda na prática",
  visualizationBody:
    "• menos erro por impulso\n• mais controle nas decisões\n• mais respeito na forma como você se posiciona\n• menos desgaste desnecessário\n\nVocê para de reagir.\n\nE passa a se conduzir.",
  resultsTitle: "A diferença é simples",
  resultsBody:
    "A maioria reage.\n\nPoucos se conduzem com consciência.\n\nO que você recebe:\n\n• E-book direto (PDF)\n• Folhas de síntese\n• Checklists e prompts de decisão\n\nLeu → aplicou → ajustou.",
} as const;

export const AUDIENCE = {
  badge: "Fit",
  title: "É para você se",
  forWho: {
    title: "Faz sentido quando",
    lines: [
      "você quer resultado na hora — não discurso depois",
      "você cansa de repetir o mesmo padrão",
      "você assume que conduta é treino, não sorte",
    ],
  },
  notFor: {
    title: "Pula fora se",
    lines: [
      "você quer milagre sem aplicar nada.",
      "você busca desculpa — não critério.",
    ],
  },
} as const;

export const TESTIMONIALS = {
  title: "Depoimentos",
  items: [
    {
      quote:
        "Eu já sabia o que fazer.\nMas não fazia na hora certa.\nIsso mudou.",
      firstName: "Ricardo",
      lastName: "Almeida",
      profession: "Advogado",
    },
    {
      quote:
        "Direto. Menos reação automática, mais controle no que faço em seguida.",
      firstName: "Fernando",
      lastName: "Moura",
      profession: "Gerente de operações",
    },
    {
      quote: "Decidi e sustentei. Sem voltar atrás na primeira pressão.",
      firstName: "Paulo Henrique",
      lastName: "Lopes",
      profession: "Engenheiro civil",
    },
    {
      quote:
        "Um critério só: trabalho, dinheiro, relação. Mesma postura.",
      firstName: "Marcelo",
      lastName: "Duarte",
      profession: "Empresário",
    },
    {
      quote: "Curto. Usei na mesma semana. Sem enrolação.",
      firstName: "André",
      lastName: "Cunha",
      profession: "Analista de sistemas",
    },
    {
      quote: "Mostra onde você falha na conduta. O resto é aplicação.",
      firstName: "Lucas",
      lastName: "Ferreira",
      profession: "Contador",
    },
  ],
} as const;

export const OFFER = {
  badge: "Oferta",
  title: "Código de Conduta Masculina",
  microLine: "Controle · Decisão · Postura",
  description: "Aplicação prática para decisões reais.",
  includesTitle: "O que você recebe e como usa",
  includes: [
    {
      title: "Código de Conduta Masculina (PDF)",
      detail: "Direto ao ponto — para ler e aplicar.",
    },
    {
      title: "Folhas de síntese",
      detail: "Revisão rápida antes do movimento.",
    },
    {
      title: "Checklists e prompts de decisão",
      detail: "No momento em que o impulso quer mandar.",
    },
    {
      title: "Acesso imediato",
      detail: "Libera após o pagamento.",
    },
  ],
  mockupEyebrow: "E-book digital",
  mockupStrapline: "Controle · Decisão · Postura",
  /**
   * Arte da capa no mockup: arquivo em `/public` (ex.: `/ebook-cover.jpg`) ou URL https.
   * Preferir cena low-key (decisão, tensão interna) — evitar livros, acadêmico ou estilo “coach”.
   * Foto atual: silhueta masculina à janela, cidade à noite (Unsplash — Zoshua Colah).
   */
  mockupCoverImageSrc:
    "https://images.unsplash.com/photo-1751150495510-5d56d31a9051?auto=format&fit=crop&w=1600&q=82",
  mockupNote:
    "Capa ilustrativa — entrega é o conteúdo e a estrutura de uso.",
  decisionReinforcement: "Decisão real. Aplicação real.",
  priceLabel: "Investimento",
  priceWas: "R$ 197",
  priceCurrent: "R$ 39",
  priceNote:
    "Menos do que custa uma única decisão mal tomada.\nE muito menos do que continuar repetindo o mesmo padrão.",
  cta: "Quero acesso imediato",
  ctaHref: CHECKOUT_URL,
  ctaHint: "Acesso liberado na hora · sem mensalidade",
} as const;

export const GUARANTEE = {
  title: "Garantia",
  body:
    "Se não fizer sentido, você pode solicitar reembolso dentro do prazo da plataforma.\n\nSimples.",
} as const;

export const FAQ = {
  badge: "FAQ",
} as const;

export const FAQ_ITEMS = [
  {
    q: "Isso é só sobre relacionamento?",
    a: "Não. É comportamento aplicado à vida.",
  },
  {
    q: "É teórico ou prático?",
    a: "Prático.",
  },
  {
    q: "Preciso estar em crise?",
    a: "Não. Quanto antes aplicar, melhor.",
  },
  {
    q: "Isso realmente funciona na prática?",
    a: "Funciona se for aplicado. O material foi feito para uso direto em situações reais — não depende de teoria, depende de execução.",
  },
  {
    q: "Em quanto tempo começo a perceber resultado?",
    a: "Desde a primeira aplicação. O ganho é imediato quando você passa a agir com mais controle e critério nas decisões.",
  },
] as const;

export const FINAL_CTA = {
  title: "A decisão é simples",
  subtitle: "Continuar reagindo\n\nou\n\ncomeçar a se conduzir",
  cta: "Começar a se conduzir melhor — acesso imediato",
  ctaHref: CHECKOUT_URL,
  ctaHint: "Um clique · acesso após pagamento",
} as const;

export const FOOTER = {
  tagline:
    "Conduta com clareza.\nDecisão com critério.\nVida com direção.",
  legal:
    "© {year} Código de Conduta Masculina. Todos os direitos reservados. Conteúdo educacional.",
} as const;
