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
  /** Navbar mobile — curto para não competir com a marca */
  ctaLabelShort: "Obter agora",
  ctaHref: CHECKOUT_URL,
} as const;

export const HERO = {
  headline:
    "Você não está sem sorte. Está repetindo o mesmo erro — e isso tem correção.",
  subheadline:
    "E-book para homens com consequência real: cortar o loop de impulso, sustentar decisões e postura no dia seguinte. Leitura enxuta na semana — sem guru, sem teatro.",
  primaryCta: "Corrigir o padrão — ir ao checkout",
  primaryCtaHref: CHECKOUT_URL,
  secondaryCta: "Ver se isso é sobre mim",
  secondaryCtaHref: "#identificacao",
  primaryCtaHint: "Acesso após pagamento · leitura objetiva · ferramentas na hora do aperto",
  support:
    "Capítulos curtos, síntese rápida e prompts para quando a emoção apertar. Você aplica; o código sustenta o padrão.",
  card: {
    kicker: "Dentro do método",
    chapters: [
      {
        n: "I",
        title: "Onde você perde o controle (e retoma antes do erro)",
        detail:
          "Onde o impulso entra — e como interromper antes da consequência.",
      },
      {
        n: "II",
        title: "O que sua conduta realmente comunica",
        detail:
          "Alinhar postura e ação — sem parecer uma coisa e agir como outra.",
      },
      {
        n: "III",
        title: "Decidir, fechar e não voltar atrás",
        detail:
          "Decisões que não se desfazem na primeira pressão.",
      },
    ],
  },
} as const;

export const PAIN_POINTS = {
  badge: "Onde dói de verdade",
  title: "Se isso vira rotina, o problema não é 'detalhe' — é padrão",
  subtitle:
    "Não é destino nem 'gente certa'. É padrão — e só muda quando você nomeia e corta com regra.",
  items: [
    {
      title: "Você já sabe como termina — e ainda entra",
      description:
        "Você vê o padrão antes — e entra mesmo assim. Depois: fala dura, decisão no impulso, silêncio — e o custo.",
    },
    {
      title: "O impulso decide antes de você assumir o controle",
      description:
        "Mensagem no calor, reação fora de hora. Quando a lucidez entra, já foi — com impacto em respeito, dinheiro ou vínculo.",
    },
    {
      title: "Você fala uma coisa — e sustenta outra",
      description:
        "Quem está perto sente a incoerência. Confiança desgasta decisão após decisão — não quebra de uma vez.",
    },
    {
      title: "Não é mais um erro isolado — é padrão instalado",
      description:
        "Vira histórico. Cada repetição reforça: não é falta de oportunidade — é falta de controle.",
    },
  ],
} as const;

export const BREAK_BELIEF = {
  badge: "Verdade desconfortável",
  title: "Não é o mundo conspirando — é o script que você rodou de novo",
  lead:
    "Fase ruim e pessoas difíceis existem — mas não explicam o mesmo final em loop.\n\nQuando o roteiro volta, não é o cenário. É o padrão.",
  emphasis:
    "O motor é outro:\n\ncomportamento sem ajuste, emoção no comando, direção fraca.\n\nSem corrigir isso, o próximo erro é sequência — não surpresa.",
  contrast: {
    mythLabel: "A história que alivia",
    myth: "“Quando aparecer a oportunidade certa… a pessoa certa… o momento certo…”",
    truthLabel: "O que muda o resultado",
    truth:
      "Conduta deliberada: limite claro, fala alinhada à ação — e decisão que você sustenta, sem renegociar no silêncio.",
  },
} as const;

export const PRODUCT_SOLUTION = {
  badge: "O que muda na prática",
  title: "Depois do material, o alvo é simples: menos sabotagem, mais consistência",
  subtitle:
    "Critérios claros, ordem prática e verificação. Você não depende de motivação — depende do que faz, com consistência.",
  authorityNote: "",
  benefits: [
    {
      title: "Antes do estrago: freio visível",
      description:
        "Reconhece o padrão antes do prejuízo — e corta a reação que define o que você perde depois.",
    },
    {
      title: "Postura que se sustenta",
      description:
        "Critérios para alinhar postura e mensagem — sem falar firme e agir fraco (ou o inverso que te expõe).",
    },
    {
      title: "Padrão identificado, narrativa encerrada",
      description:
        "O “foi mais uma vez” deixa de ser neblina. Você enxerga o roteiro e escolhe outro movimento — com consciência, não no impulso.",
    },
    {
      title: "Decisão que se mantém",
      description:
        "Decidir sob pressão, encerrar o que precisa — e não voltar atrás na primeira instabilidade.",
    },
  ],
} as const;

export const AUDIENCE = {
  badge: "Fit honesto",
  title: "Para quem é — e para quem não é",
  forWho: {
    title: "Faz sentido se você…",
    lines: [
      "Lida com consequência real (trabalho, vínculos, reputação) e já antecipa o desfecho.",
      "Quer corrigir conduta — não só aliviar o fim de semana e voltar ao mesmo padrão na segunda.",
      "Assume responsabilidade pelo comportamento e ajusta o que repete, sem terceirizar culpa.",
    ],
  },
  notFor: {
    title: "Não é para você se…",
    lines: [
      "Quer atalho, mudança mágica ou validação para continuar igual.",
      "Busca guru, “alfa” caricato ou performance para impressionar.",
      "Não assume o próprio padrão — sem isso, nenhum método se sustenta.",
    ],
  },
} as const;

export const TESTIMONIALS = {
  title: "O que muda quando você aplica",
  items: [
    {
      quote:
        "Eu sabia onde errava e repetia. O material me fez travar antes da decisão, não depois.",
      firstName: "Ricardo",
      lastName: "Almeida",
      profession: "Advogado",
    },
    {
      quote:
        "Desconfortável — mas funciona. Passo a perceber o padrão antes de repetir.",
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
        "Pensei que era relacionamento. Era comportamento — trabalho, dinheiro, postura.",
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
        "Não resolve sozinho — mas mostra onde você se sabota.",
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
    "Aplicação direta. Correção imediata.\nOnde você costuma errar — e o que fazer na hora decisiva.\nResultado vem da aplicação, não da intenção.",
  includesTitle: "O que você recebe e como usa",
  includes: [
    {
      title: "Código de Conduta Masculina (PDF)",
      detail:
        "Sair do automático e ajustar comportamento na prática.",
    },
    {
      title: "Folhas de síntese",
      detail:
        "Revisão em minutos antes de conversa difícil ou decisão que costuma sair errada.",
    },
    {
      title: "Checklists e prompts de decisão",
      detail:
        "No momento em que você normalmente repete o erro.",
    },
    {
      title: "Acesso imediato",
      detail: "Sem aula nem espera — no momento em que precisa decidir e sustentar.",
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
    "Não é só financeiro — é decidir fazer diferente quando mais importa.",
  priceLabel: "Investimento",
  priceWas: "R$ 197",
  priceCurrent: "R$ 39",
  priceNote: "Menos do que costuma custar repetir o mesmo erro.",
  cta: "Quero acesso imediato",
  ctaHref: CHECKOUT_URL,
  ctaHint: "Acesso liberado na hora · sem mensalidade · aplicação direta",
} as const;

export const GUARANTEE = {
  title: "Risco transparente",
  body:
    "No prazo e condições do checkout, se não trouxer diretrizes aplicáveis e clareza útil, solicite reembolso na plataforma. Processo explícito — sem letra miúda no tom.",
} as const;

export const FAQ = {
  badge: "Objeções",
} as const;

export const FAQ_ITEMS = [
  {
    q: "Isso é só sobre relacionamento?",
    a: "Não. Relacionamento é onde aparece — o núcleo é padrão. Impacta trabalho, reputação e vínculos.",
  },
  {
    q: "É teoria ou uso no dia a dia?",
    a: "Uso direto. Leitura e aplicação na mesma semana.",
  },
  {
    q: "Funciona se eu me sinto perdido?",
    a: "Sim. Organiza direção e reduz erro por impulso.",
  },
  {
    q: "Preciso estar em crise?",
    a: "Não. Para corrigir e evitar repetir.",
  },
  {
    q: "Quanto tempo leva para ler?",
    a: "Rápido. Aplicação na hora.",
  },
  {
    q: "É só PDF? Funciona no celular?",
    a: "Sim. Acesso digital, direto no celular.",
  },
  {
    q: "Como é o reembolso?",
    a: "Pela plataforma, no prazo do checkout.",
  },
  {
    q: "O e-book já traz o método completo?",
    a: "Sim. Estrutura e ferramentas estão no material — um passo só.",
  },
  {
    q: "Isso substitui terapia ou tratamento médico?",
    a: "Não. Material educacional e comportamental.",
  },
  {
    q: "Isso resolve tudo sozinho?",
    a: "Não. Resultado vem da aplicação.",
  },
] as const;

export const FINAL_CTA = {
  title:
    "Cada temporada no mesmo padrão é juro sobre o que você já perdeu — e o próximo capítulo já está escrito.",
  subtitle:
    "Sem milagre — método para parar de pagar duas vezes pelo mesmo movimento: controle na ação, decisão sustentada, menos vergonha na segunda.",
  cta: "Assumir o controle — obter o Código",
  ctaHref: CHECKOUT_URL,
  ctaHint: "Um clique · mesmo preço de referência no checkout · acesso após pagamento",
} as const;

export const FOOTER = {
  tagline:
    "Clareza na conduta, firmeza na decisão, consistência no resultado.",
  legal:
    "© {year} Código de Conduta Masculina. Todos os direitos reservados. Conteúdo educacional.",
} as const;
