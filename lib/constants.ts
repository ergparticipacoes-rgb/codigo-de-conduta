export const PRODUCT_NAME = "Código de Conduta Masculina";

/**
 * URL do checkout. Preferir `NEXT_PUBLIC_CHECKOUT_URL` no deploy; o fallback evita build quebrado.
 */
export const CHECKOUT_URL =
  process.env.NEXT_PUBLIC_CHECKOUT_URL?.trim() || "https://SEU-LINK-AQUI";

/** CTA fixo mobile — decisão + ação */
export const STICKY_MOBILE_CTA_LABEL = "Corrigir o padrão — acesso imediato";

/** Metadados SEO — reutilizados no layout */
export const SITE_META = {
  titleSuffix: "Comportamento, controle, posicionamento",
  description:
    "E-book para homem maduro: parar de repetir erro sob impulso, sustentar decisão e postura, agir com controle — método direto, sem coach.",
} as const;

export const NAV = {
  ctaLabel: "Obter o Código agora",
  ctaHref: CHECKOUT_URL,
} as const;

export const HERO = {
  headline:
    "Você não está sem sorte. Está repetindo o mesmo erro — e isso tem correção.",
  subheadline:
    "E-book direto para homens que lidam com consequência real: cortar o loop de impulso e arrependimento, sustentar decisões e manter postura no dia seguinte. Leitura enxuta para aplicar na semana — sem guru, sem teatro.",
  primaryCta: "Corrigir o padrão — ir ao checkout",
  primaryCtaHref: CHECKOUT_URL,
  secondaryCta: "Ver se isso é sobre mim",
  secondaryCtaHref: "#identificacao",
  primaryCtaHint: "Acesso após pagamento · leitura objetiva · ferramentas na hora do aperto",
  support:
    "Nada de manual infinito: capítulos curtos, síntese para revisar rápido e prompts para quando a emoção apertar. Você aplica; o código sustenta o padrão.",
  card: {
    kicker: "Dentro do método",
    chapters: [
      {
        n: "I",
        title: "Onde você perde o controle (e retoma antes do erro)",
        detail:
          "Identifique o ponto exato em que o impulso entra — e como interromper antes de virar consequência.",
      },
      {
        n: "II",
        title: "O que sua conduta realmente comunica",
        detail:
          "Alinhe postura e ação para não parecer uma coisa e agir como outra.",
      },
      {
        n: "III",
        title: "Decidir, fechar e não voltar atrás",
        detail:
          "Estruture decisões que não se desfazem na primeira pressão ou recaída.",
      },
    ],
  },
} as const;

export const PAIN_POINTS = {
  badge: "Onde dói de verdade",
  title: "Se isso vira rotina, o problema não é 'detalhe' — é padrão",
  subtitle:
    "Não é destino nem falta de gente certa. É padrão repetido — e só muda quando você nomeia e corta com regra.",
  items: [
    {
      title: "Você já sabe como termina — e ainda entra",
      description:
        "Você reconhece o padrão antes de acontecer. Mesmo assim, entra. Depois vem o mesmo roteiro: fala dura, decisão no impulso, silêncio pesado — e o custo chega.",
    },
    {
      title: "O impulso decide antes de você assumir o controle",
      description:
        "Mensagem enviada, decisão no calor, reação fora de hora. Quando a lucidez entra, já foi. E o replay começa — com impacto real em respeito, dinheiro ou vínculo.",
    },
    {
      title: "Você fala uma coisa — e sustenta outra",
      description:
        "A incoerência não passa despercebida. Quem está perto sente. Confiança não quebra de uma vez — ela desgasta, decisão após decisão.",
    },
    {
      title: "Não é mais um erro isolado — é padrão instalado",
      description:
        "Deixa de ser um episódio e vira histórico. E cada repetição reforça a mesma leitura: não é falta de oportunidade — é falta de controle.",
    },
  ],
} as const;

export const BREAK_BELIEF = {
  badge: "Verdade desconfortável",
  title: "Não é o mundo conspirando — é o script que você rodou de novo",
  lead:
    "Fase ruim, cansaço e pessoas difíceis existem — mas não explicam o mesmo final se repetindo.\n\nQuando o roteiro volta, não é o cenário. É o padrão.",
  emphasis:
    "O motor é outro:\n\ncomportamento não ajustado, emoção no comando e falta de direção clara.\n\nSem corrigir isso, o próximo erro não é surpresa — é sequência.",
  contrast: {
    mythLabel: "A história que alivia",
    myth: "“Quando aparecer a oportunidade certa… a pessoa certa… o momento certo…”",
    truthLabel: "O que muda o resultado",
    truth:
      "Conduta deliberada: limite claro, coerência entre fala e ação — e decisão que você sustenta depois, sem renegociar no silêncio.",
  },
} as const;

export const PRODUCT_SOLUTION = {
  badge: "O que muda na prática",
  title: "Depois do material, o alvo é simples: menos sabotagem, mais consistência",
  subtitle:
    "O método é simples de aplicar e completo: critérios claros, ordem prática e verificação. Você não depende de motivação nem de exceção — depende do que faz, de forma consistente.",
  authorityNote: "",
  benefits: [
    {
      title: "Antes do estrago: freio visível",
      description:
        "Você passa a reconhecer o padrão antes do prejuízo — e corta a reação que hoje define o que você perde depois.",
    },
    {
      title: "Postura que se sustenta",
      description:
        "Critérios para alinhar postura e mensagem — parar de falar firme e agir fraco (ou o contrário que te expõe).",
    },
    {
      title: "Padrão identificado, narrativa encerrada",
      description:
        "O “foi mais uma vez” deixa de ser confusão. Você enxerga o roteiro e escolhe outro movimento com consciência — não no impulso.",
    },
    {
      title: "Decisão que se mantém",
      description:
        "Estrutura para decidir sob pressão, encerrar o que precisa ser encerrado e não voltar atrás na primeira instabilidade.",
    },
  ],
} as const;

export const AUDIENCE = {
  badge: "Fit honesto",
  title: "Para quem é — e para quem não é",
  forWho: {
    title: "Faz sentido se você…",
    lines: [
      "Lida com consequência real (trabalho, vínculos, reputação) e já reconhece o desfecho antes dele acontecer.",
      "Quer corrigir conduta — não apenas aliviar o emocional por um fim de semana e voltar ao mesmo padrão na segunda.",
      "Assume responsabilidade pelo próprio comportamento e está disposto a ajustar o que repete, sem terceirizar culpa.",
    ],
  },
  notFor: {
    title: "Não é para você se…",
    lines: [
      "Procura atalho, promessa de mudança rápida ou validação para continuar igual.",
      "Busca linguagem de guru, “alfa” caricato ou performance para impressionar.",
      "Não está disposto a assumir o próprio padrão — sem isso, nenhum método se sustenta.",
    ],
  },
} as const;

export const TESTIMONIALS = {
  title: "O que muda quando você aplica",
  items: [
    {
      quote:
        "Eu já sabia onde errava, mas continuava fazendo igual. O material me fez travar antes da decisão, não depois.",
      firstName: "Ricardo",
      lastName: "Almeida",
      profession: "Advogado",
    },
    {
      quote:
        "Não é motivacional. É desconfortável — mas funciona. Comecei a perceber o padrão antes de repetir.",
      firstName: "Fernando",
      lastName: "Moura",
      profession: "Gerente de operações",
    },
    {
      quote:
        "O maior ganho foi parar de voltar atrás no dia seguinte. Decidi e sustentei.",
      firstName: "Paulo Henrique",
      lastName: "Lopes",
      profession: "Engenheiro civil",
    },
    {
      quote:
        "Achei que era sobre relacionamento. No fim, era sobre comportamento em tudo — trabalho, dinheiro e postura.",
      firstName: "Marcelo",
      lastName: "Duarte",
      profession: "Empresário",
    },
    {
      quote: "Direto ao ponto. Sem enrolação. Usei na mesma semana.",
      firstName: "André",
      lastName: "Cunha",
      profession: "Analista de sistemas",
    },
    {
      quote:
        "Não resolve sozinho — mas mostra exatamente onde você está se sabotando.",
      firstName: "Lucas",
      lastName: "Ferreira",
      profession: "Contador",
    },
  ],
} as const;

export const OFFER = {
  badge: "Oferta",
  title: "O Código para ler, aplicar e sustentar — sem enrolação",
  microLine: "Você lê uma vez. Aplica várias.",
  description:
    "Aplicação direta. Correção imediata.\nEntra exatamente onde você costuma errar — e muda o que você faz na hora decisiva.\nResultado vem da aplicação — não da intenção.",
  includesTitle: "O que você recebe e como usa",
  includes: [
    {
      title: "Código de Conduta Masculina (PDF)",
      detail:
        "Leitura direta para sair do automático e ajustar comportamento na prática.",
    },
    {
      title: "Folhas de síntese",
      detail:
        "Para revisar em minutos — antes de conversa difícil ou decisão que costuma sair errado.",
    },
    {
      title: "Checklists e prompts de decisão",
      detail:
        "Para usar no momento em que você normalmente repete o erro.",
    },
    {
      title: "Acesso imediato",
      detail: "Sem aula. Sem espera. Você usa no momento em que precisa decidir e sustentar.",
    },
  ],
  mockupEyebrow: "E-book digital",
  mockupStrapline: "Controle · Postura · Decisão",
  /**
   * Arte da capa no mockup: arquivo em `/public` (ex.: `/ebook-cover.jpg`) ou URL https.
   * Preferir cena low-key (decisão, tensão interna) — evitar livros, acadêmico ou estilo “coach”.
   * Foto atual: silhueta masculina à janela, cidade à noite (Unsplash — Zoshua Colah).
   */
  mockupCoverImageSrc:
    "https://images.unsplash.com/photo-1751150495510-5d56d31a9051?auto=format&fit=crop&w=1600&q=82",
  mockupNote:
    "Capa ilustrativa — entrega é o conteúdo e a estrutura de uso.",
  decisionReinforcement:
    "O investimento aqui não é só financeiro. É a decisão de fazer diferente quando mais importa.",
  priceLabel: "Investimento",
  priceWas: "R$ 197",
  priceCurrent: "R$ 39",
  priceNote: "Menos do que costuma custar repetir o mesmo erro.",
  cta: "Quero acesso imediato",
  ctaHref: CHECKOUT_URL,
  ctaHint: "Acesso liberado na hora · sem mensalidade · aplicação direta",
} as const;

export const UPSELL = {
  badge: "Opcional",
  title: "Consultoria para aplicar no seu caso real",
  description:
    "Alguns homens preferem sair do conceito e ajustar direto na própria situação: decisões, cortes e postura no cenário que já está acontecendo.\n\nA consultoria acelera quem já decidiu fazer o trabalho — não substitui o e-book.",
  points: [
    "Sessões focadas no seu contexto e nos seus gatilhos reais — sem roteiro genérico",
    "Direcionamento claro: o que fazer, o que parar e o que sustentar",
    "Ajustes práticos para evitar repetir o mesmo erro no mesmo cenário",
    "Comunicação objetiva entre encontros, com limites definidos",
  ],
  note: "Volume limitado. Indicado depois de absorver o material-base — o sistema já está no e-book.",
  cta: "Quero falar sobre minha situação no WhatsApp",
  ctaHref: "https://wa.me/5513982259477",
} as const;

export const GUARANTEE = {
  title: "Risco transparente",
  body:
    "Se, no prazo e nas condições publicadas no checkout, o material não trouxer diretrizes aplicáveis e clareza útil, você solicita reembolso pela plataforma de pagamento. Processo explícito — sem fantasia, sem letra miúda no tom.",
} as const;

export const FAQ = {
  badge: "Objeções",
} as const;

export const FAQ_ITEMS = [
  {
    q: "Isso é só sobre relacionamento?",
    a: "Não. Relacionamento é onde aparece — o problema é padrão. O material corrige comportamento que impacta trabalho, reputação e vínculos.",
  },
  {
    q: "É teoria ou uso no dia a dia?",
    a: "Uso direto. Você lê e já aplica na mesma semana.",
  },
  {
    q: "Funciona se eu me sinto perdido?",
    a: "Sim. Ele organiza direção e reduz erro por impulso.",
  },
  {
    q: "Preciso estar em crise?",
    a: "Não. Serve para corrigir e para evitar repetir.",
  },
  {
    q: "Quanto tempo leva para ler?",
    a: "Leitura rápida. Aplicação imediata.",
  },
  {
    q: "É só PDF? Funciona no celular?",
    a: "Sim. Acesso digital, direto no celular.",
  },
  {
    q: "Como é o reembolso?",
    a: "Solicitação direta pela plataforma, dentro do prazo informado no checkout.",
  },
  {
    q: "A consultoria é obrigatória?",
    a: "Não. O método já está no e-book. A consultoria acelera.",
  },
  {
    q: "Isso substitui terapia ou tratamento médico?",
    a: "Não. É material educacional e comportamental.",
  },
  {
    q: "Isso resolve tudo sozinho?",
    a: "Não. O resultado vem da aplicação.",
  },
] as const;

export const FINAL_CTA = {
  title:
    "Cada temporada no mesmo padrão é juro sobre o que você já perdeu — e o próximo capítulo já está escrito.",
  subtitle:
    "O Código de Conduta Masculina não vende milagre. Entrega método para você parar de pagar duas vezes pelo mesmo movimento: ação com controle, decisão sustentada, menos vergonha na segunda.",
  cta: "Assumir o controle — obter o Código",
  ctaHref: CHECKOUT_URL,
  ctaHint: "Um clique · mesmo preço de referência no checkout · acesso após pagamento",
} as const;

export const FOOTER = {
  tagline:
    "Clareza na conduta. Firmeza na decisão. Consistência no resultado.",
  legal:
    "© {year} Código de Conduta Masculina. Todos os direitos reservados. Conteúdo educacional.",
} as const;
