/**
 * config.js - Conteúdo Variável do Site de Luxo de Harmonização Facial
 * Documento de configuração individual por profissional.
 * Para trocar de doutora, edite este arquivo e substitua as imagens na pasta /img.
 */

export const SITE = {
  doutora: {
    nome: 'Dra. Dálete Silveira',
    cidade: 'Sobral - CE',
    registro: 'CRO/CE 14621',
    instagram: 'dradaletesilveira',
    instagramUrl: 'https://www.instagram.com/dradaletesilveira/',
    whatsapp: '5588996079291',
    whatsappLink: 'https://api.whatsapp.com/send?phone=5588996079291&text=Vim+do+Insta+e+quero+agendar+minha+consulta+com+a+Dra.+D%C3%A1lete%21+%F0%9F%8C%9F',
    telefone: '(88) 99607-9291'
  },
  hero: {
    titulo: 'Seu rosto, na sua melhor <span class="hero-gold-script">versão.</span>',
    subtitulo: 'Harmonização facial para realçar o que já é seu: proporção, frescor e naturalidade. Cada plano nasce de uma avaliação individual com a Dra. Dálete.',
    cards: ['Resultado natural', 'Avaliação personalizada', '+5 anos de experiência'],
    foto: '/img/doutora_dalete.webp',
    arco: 'HARMONIA ✦ NATURALIDADE ✦ ELEGÂNCIA ✦ CUIDADO ✦ CONFIANÇA ✦ '
  },
  faixa: ['Beauty', 'Harmonia', 'Naturalidade', 'Elegância', 'Cuidado', 'Confiança'],
  transformacao: {
    antes: '/img/antes.webp',
    depois: '/img/depois.webp',
    legenda: 'Resultados variam de pessoa para pessoa.'
  },
  servicos: [
    {
      id: 'full',
      rotulo: 'Full face',
      nome: 'Full face',
      foto: '/img/full-1.webp',
      fotos: [
        '/img/full-1.webp',
        '/img/full-2.webp',
        '/img/full-3.webp'
      ],
      foco: [50, 42],
      durabilidade: '12 a 24 meses',
      recuperacao: 'Planejada em etapas confortáveis',
      indicacao: 'Rejuvenescimento global integrado, perda de sustentação e flacidez moderada.',
      descricao: 'Planejamento completo do rosto, combinando técnicas para rejuvenescer com coerência entre todas as regiões.',
      beneficios: [
        'Rosto harmônico, descansado e rejuvenescido',
        'Resultado integrado em equilíbrio estético',
        'Plano personalizado executado em etapas seguras',
        'Associação de preenchedores reabsorvíveis e bioestimuladores'
      ]
    },
    {
      id: 'labial',
      rotulo: 'Lábios',
      nome: 'Preenchimento labial',
      foto: '/img/s-labial.svg',
      foco: [50, 45],
      durabilidade: '10 a 16 meses',
      recuperacao: 'Imediata (leve edema transitório em 24h)',
      indicacao: 'Lábios desidratados, assimetrias anatômicas e perda de contorno pelo tempo.',
      descricao: 'Contorno, volume e hidratação na medida do seu rosto, respeitando a proporção entre os lábios superior e inferior.',
      beneficios: [
        'Lábios mais jovens, hidratados e volumizados',
        'Simetria e contorno nítido do arco do cupido',
        'Acabamento discreto sem efeito artificial',
        'Uso de ácido hialurônico de alta biocompatibilidade com lidocaína'
      ]
    },
    {
      id: 'mento',
      rotulo: 'Mento',
      nome: 'Preenchimento de mento',
      foto: '/img/s-mento.svg',
      foco: [50, 56],
      durabilidade: '14 a 18 meses',
      recuperacao: 'Sem afastamento do trabalho',
      indicacao: 'Queixo retraído, falta de projeção no perfil e harmonia do terço inferior.',
      descricao: 'Projeta e alinha o queixo para equilibrar o perfil e a harmonia entre nariz, lábios e mandíbula.',
      beneficios: [
        'Mais expressão e definição no perfil',
        'Equilíbrio e alinhamento dos terços faciais',
        'Contorno elegante da linha da mandíbula',
        'Estruturação com sustentação óssea anatômica precisa'
      ]
    },
    {
      id: 'botox',
      rotulo: 'Botox',
      nome: 'Botox',
      foto: '/img/s-botox.svg',
      foco: [50, 26],
      durabilidade: '4 a 6 meses',
      recuperacao: 'Retorno imediato às atividades normais',
      indicacao: 'Rugas na testa, glabela (entre as sobrancelhas) e pés de galinha ao redor dos olhos.',
      descricao: 'Relaxa a musculatura das linhas de expressão da testa e do olhar, sem congelar a sua expressão.',
      beneficios: [
        'Olhar descansado, leve e jovial',
        'Prevenção ativa de novas marcas e vincos',
        'Resultado perceptível em poucos dias',
        'Técnica de dosagem personalizada para manter a mímica natural'
      ]
    },
    {
      id: 'olheira',
      rotulo: 'Olheiras',
      nome: 'Preenchimento de olheira',
      foto: '/img/s-olheira.svg',
      foco: [50, 36],
      durabilidade: '12 a 18 meses',
      recuperacao: 'Sem necessidade de repouso',
      indicacao: 'Sulco nasojugal profundo, sombras sob os olhos e aspecto crônico de cansaço.',
      descricao: 'Suaviza a sombra e o aspecto de cansaço sob os olhos, devolvendo luz e frescor ao olhar.',
      beneficios: [
        'Olhar iluminado e livre de sombras profundas',
        'Rosto descansado com frescor imediato',
        'Ácido hialurônico específico para a área periocular',
        'Aplicação atraumática com microcânula flexível'
      ]
    }
  ],
  galeria: [
    { src: '/img/g1.webp', legenda: 'Harmonização facial com proporção áurea e naturalidade' },
    { src: '/img/g2.webp', legenda: 'Preenchimento labial com contorno e hidratação' },
    { src: '/img/g3.webp', legenda: 'Alinhamento de perfil e projeção mandibular' },
    { src: '/img/g4.webp', legenda: 'Suavização de olheiras e descanso do olhar' },
    { src: '/img/g5.webp', legenda: 'Planejamento Full Face integrado e elegante' },
    { src: '/img/g6.webp', legenda: 'Tratamento preventivo e rejuvenescimento' },
    { src: '/img/g7.webp', legenda: 'Definição e sustentação anatômica facial' },
    { src: '/img/g8.webp', legenda: 'Equilíbrio e harmonia individualizada' }
  ],
  sobre: {
    titulo: 'Sua beleza é <span class="hero-gold-script">única.</span> O cuidado também.',
    subtitulo: 'Conheça a Dra. Dálete, especialista em harmonização facial.',
    emocional: 'Acredito que nenhum rosto precisa ser copiado. Cada traço conta uma história, e o meu trabalho é revelar o que já existe em você, com delicadeza e escuta. Quando uma paciente se olha no espelho e se reconhece, mais descansada, mais confiante e ainda assim ela mesma, sei que fiz meu papel. Aqui você não é um procedimento: é uma pessoa com expectativas, receios e um jeito único de ser bonita.',
    tecnico: 'Sou especialista em Harmonização Orofacial com mais de 5 anos de dedicação exclusiva à estética e rejuvenescimento facial. Mantenho rigor técnico e científico constante em biossegurança, anatomia vascular e nos materiais de preenchimento reabsorvíveis de maior prestígio internacional.',
    citacao: '“Harmonizar não é transformar você em outra pessoa — é devolver ao espelho a sua versão mais descansada, elegante e confiante.”',
    numeros: [
      { v: 5, sufixo: '+', rotulo: 'anos de experiência' },
      { v: 800, sufixo: '+', rotulo: 'pacientes atendidas' },
      { v: 5, sufixo: '.0', rotulo: 'avaliação média' }
    ]
  },
  instagram: {
    video: 'https://www.instagram.com/reel/Db3LL9OO5zs/',
    embedId: 'Db3LL9OO5zs',
    perfil: 'dradaletesilveira',
    perfilUrl: 'https://www.instagram.com/dradaletesilveira/'
  },
  feedbacks: [
    {
      nome: 'Mariana Silveira',
      servico: 'Preenchimento labial',
      texto: 'Saí me sentindo eu mesma, só mais descansada. Ninguém sabe exatamente o que fiz, só me dizem que estou ótima e iluminada!'
    },
    {
      nome: 'Camila Albuquerque',
      servico: 'Preenchimento de mento',
      texto: 'O alinhamento do meu queixo mudou completamente a harmonia das fotos de perfil. Um resultado impecável e super sutil.'
    },
    {
      nome: 'Patrícia Novaes',
      servico: 'Botox preventivo',
      texto: 'Eu tinha muito medo de ficar com o rosto congelado, mas o resultado da Dra. Dálete é leveza pura. As linhas sumiram naturalmente.'
    },
    {
      nome: 'Beatriz M. Castro',
      servico: 'Preenchimento de olheira',
      texto: 'Adeus corretivo pesado todo dia! A sombra sob os olhos suavizou tanto que pareço ter dormido 10 horas todos os dias.'
    },
    {
      nome: 'Renata V. Guimarães',
      servico: 'Full face',
      texto: 'Fizemos o plano em etapas com muita calma e transparência. Hoje me olho no espelho e vejo a minha melhor versão aos 43 anos.'
    },
    {
      nome: 'Juliana Mendes',
      servico: 'Preenchimento labial',
      texto: 'Volume na medida certa, sem bico exagerado. Meus lábios ficaram hidratados e com o arco do cupido desenhado com delicadeza.'
    },
    {
      nome: 'Larissa Fontes',
      servico: 'Botox & Olheiras',
      texto: 'O atendimento da Dra. Dálete é acolhedor e super seguro. Ela explica cada detalhe anatômico e passa uma tranquilidade ímpar.'
    },
    {
      nome: 'Sofia Leite',
      servico: 'Full face',
      texto: 'Profissionalismo de altíssimo nível. O estúdio é um refúgio de paz, café delicioso e o resultado superou todas as expectativas.'
    },
    {
      nome: 'Fernanda Dantas',
      servico: 'Preenchimento labial & mento',
      texto: 'A sutileza no trabalho dela é impressionante. Recuperei a definição do meu queixo e meus lábios rejuvenesceram anos sem perder a identidade.'
    },
    {
      nome: 'Carolina Meirelles',
      servico: 'Rinomodelação & Full Face',
      texto: 'A Dra. Dálete tem mãos de fada! Não senti dor alguma e o planejamento facial respeitou cada proporção minha com muita sofisticação.'
    },
    {
      nome: 'Luciana Barreto',
      servico: 'Preenchimento de olheiras',
      texto: 'O olhar cansado me incomodava há mais de cinco anos. O procedimento foi rápido, indolor e o efeito iluminador ficou surpreendente.'
    },
    {
      nome: 'Gabriela Vasconcelos',
      servico: 'Rejuvenescimento facial',
      texto: 'Equipe impecável e pós-atendimento atencioso demais. É muito gratificante encontrar uma profissional que prioriza a elegância e a naturalidade.'
    }
  ],
  estudio: {
    fotos: [
      { src: '/img/studio-1.svg', titulo: 'Sala de Avaliação Privativa', legenda: 'Ambiente acolhedor e privativo para planejamento anatômico detalhado' },
      { src: '/img/studio-2.svg', titulo: 'Recepção VIP & Lounge', legenda: 'Espaço exclusivo com café especial, conforto e controle de acesso' },
      { src: '/img/studio-3.svg', titulo: 'Consultório de Procedimentos', legenda: 'Biossegurança hospitalar rigorosa e tecnologia de ponta para sua segurança' },
      { src: '/img/studio-4.svg', titulo: 'Espaço de Relaxamento', legenda: 'Privacidade e acolhimento total antes e após cada atendimento' }
    ],
    endereco: 'Rua Santo Antônio, 1739 — Centro',
    cidade: 'Acaraú - CE, CEP 62580-000',
    horario: 'Segunda a Sexta, das 09h às 19h • Atendimento exclusivo com hora marcada',
    dica: 'Atendimento exclusivo com hora marcada, localização central e recepção acolhedora.',
    mapsEmbed: 'https://maps.google.com/maps?q=Rua+Santo+Ant%C3%B4nio,+1739+-+Centro,+Acara%C3%BA+-+CE,+62580-000&t=&z=16&ie=UTF8&iwloc=&output=embed',
    mapsLink: 'https://maps.google.com/?q=Rua+Santo+Ant%C3%B4nio,+1739+Centro+Acara%C3%BA+CE+62580-000',
    wazeLink: 'https://waze.com/ul?q=Rua+Santo+Ant%C3%B4nio,+1739+Centro+Acara%C3%BA+CE+62580-000'
  },
  atendimento: [
    {
      passo: '01',
      titulo: 'Conte o que te incomoda',
      descricao: 'Envie sua mensagem ou inicie uma conversa no WhatsApp informando seus objetivos e queixas principais.'
    },
    {
      passo: '02',
      titulo: 'Envie fotos guiadas',
      descricao: 'Nossa equipe orienta fotos simples de frente e perfil para fazermos uma pré-análise personalizada da sua anatomia.'
    },
    {
      passo: '03',
      titulo: 'Receba a orientação inicial',
      descricao: 'Esclarecemos dúvidas, alinhamos expectativas e apresentamos as possibilidades de tratamento seguras.'
    },
    {
      passo: '04',
      titulo: 'Venha para a avaliação presencial',
      descricao: 'No estúdio, realizamos a consulta de planejamento detalhada e iniciamos seu plano de harmonização com conforto.'
    }
  ],
  simulador: {
    antes: '/img/antes.webp',
    depois: '/img/depois.webp',
    regioes: {
      labios: { x: 50, y: 44, rx: 17, ry: 8, servico: 'Preenchimento labial', rotulo: 'Olhar descansado' },
      queixo: { x: 50, y: 56, rx: 21, ry: 9, servico: 'Preenchimento de mento', rotulo: 'Mais boca' },
      olhos: [
        { x: 45, y: 36, rx: 11, ry: 6 },
        { x: 55, y: 36, rx: 11, ry: 6 }
      ],
      full: { x: 50, y: 42, rx: 32, ry: 38, servico: 'Full face', rotulo: 'Rejuvenescer tudo' }
    }
  },
  faq: [
    {
      p: 'Fico com aspecto artificial?',
      r: 'Não. O trabalho da Dra. Dálete é pautado pela proporção, sofisticação e escuta ativa. O objetivo nunca é transformar ou padronizar seu rosto, mas sim devolver frescor, definição e descanso aos seus próprios traços anatômicos.'
    },
    {
      p: 'Quanto tempo dura o procedimento?',
      r: 'Procedimentos à base de ácido hialurônico (como lábios, olheiras e mento) têm durabilidade média de 10 a 18 meses, sendo absorvidos gradativamente pelo organismo. A toxina botulínica (Botox) dura entre 3 e 5 meses conforme o metabolismo individual.'
    },
    {
      p: 'O procedimento dói?',
      r: 'O procedimento é extremamente tolerável e confortável. Empregamos anestésicos tópicos hospitalares de alta eficácia e técnicas com microcânulas atraumáticas. Além disso, as seringas já contêm lidocaína na própria composição.'
    },
    {
      p: 'Qual o tempo de recuperação?',
      r: 'A recuperação é rápida. A grande maioria das pacientes retoma suas atividades de trabalho no mesmo dia ou no dia seguinte. Pode ocorrer leve edema ou pequenos hematomas transitórios nas primeiras 48h.'
    },
    {
      p: 'Posso voltar às atividades no mesmo dia?',
      r: 'Sim! Recomendamos apenas repouso de atividades físicas vigorosas, abstenção de ingestão alcoólica e evitar calor excessivo (sauna ou sol direto) pelas primeiras 24 a 48 horas.'
    },
    {
      p: 'Como sei qual procedimento é o ideal para mim?',
      r: 'Na consulta de avaliação é realizada uma análise facial minuciosa dos terços faciais, mímica muscular e suporte ósseo. A Dra. Dálete desenha uma proposta individual, explicando o que trará maior benefício sem excessos.'
    },
    {
      p: 'Quem realiza o meu atendimento?',
      r: 'Exclusivamente a Dra. Dálete Silveira, em todas as etapas: desde a avaliação diagnóstica minuciosa até a aplicação e o retorno de acompanhamento após 15 a 30 dias.'
    },
    {
      p: 'Quais os cuidados antes e depois?',
      r: 'Antes: não consumir bebidas alcoólicas e evitar aspirina ou anti-inflamatórios 48h antes. Depois: não pressionar as áreas tratadas, usar filtro solar e seguir as recomendações de hidratação prescritas.'
    },
    {
      p: 'Posso parcelar o tratamento?',
      r: 'Sim, disponibilizamos condições facilitadas de pagamento com parcelamento em até 12 vezes nos cartões de crédito e condições personalizadas para planos de tratamento integrados.'
    }
  ],
  analytics: { ga4: '', pixel: '' }
};
