import { ServiceItem, FleetVehicle, TestimonialItem, FaqItem } from '../types';
import aeroportoPoaImg from '../assets/images/transfer_aeroporto_poa_g1.jpg';
import porticoGramadoImg from '../assets/images/portico_gramado_entry_1787921345244.jpg';
import catedralPedraImg from '../assets/images/catedral_pedra_canela_1787921594929.jpg';
import labirintoVerdeImg from '../assets/images/labirinto_verde_novapetropolis.jpg';
import comprasGastronomiaImg from '../assets/images/compras_gastronomia_gramado_1787922063620.jpg';
import floresJardimImg from '../assets/images/flores_jardim_gramado_1787922745724.jpg';
import motoristaVipImg from '../assets/images/transfer_particular_luxo_aeroporto_1787923586899.jpg';
import motoristaPlacaImg from '../assets/images/motorista_placa_aeroporto_1787923819454.jpg';
import frotaGramadoImg from '../assets/images/frota_gramado_portico_1787948949681.jpg';
import frotaCanelaImg from '../assets/images/frota_canela_catedral_1787948964412.jpg';
import bondinhosCanelaImg from '../assets/images/bondinhos_canela_caracol_1788188070196.jpg';

export const COMPANY_INFO = {
  name: 'Serra Gaúcha Turismo',
  tagline: 'Transfer de Alto Padrão em Gramado e Canela',
  foundedYear: 2018,
  yearsOfExperience: new Date().getFullYear() - 2018,
  phoneFormatted: '(51) 99836-1117',
  phoneRaw: '5551998361117',
  whatsappUrl: 'https://wa.me/5551998361117',
  instagram: '@serra_gaucha_turismo',
  instagramUrl: 'https://instagram.com/serra_gaucha_turismo',
  address: 'Rua Adão Wilbert, 78 - Centro, Três Coroas - RS, 95660-000',
  workingHours: 'Segunda a Domingo, das 07:00 às 22:00',
  cities: ['Gramado', 'Canela', 'Porto Alegre', 'Nova Petrópolis', 'Três Coroas', 'Bento Gonçalves'],
  guarantees: [
    'Monitoramento de Voo em Tempo Real',
    'Frota Própria Revisada e Segurada (APP)',
    'Motoristas Credenciados Especialistas na Serra',
    'Suporte Humanizado das 07h às 22h no WhatsApp',
    'Facilidade: Pix ou Cartão de Crédito até 12x',
  ],
};

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: 'transfer-aeroporto-privativo',
    title: 'Transfer Aeroporto POA ⇄ Gramado / Canela (Privativo VIP)',
    category: 'transfer',
    badge: 'Mais Escolhido',
    shortDesc: 'Transporte exclusivo e sem paradas do Aeroporto Salgado Filho direto até a porta do seu hotel em Gramado ou Canela.',
    fullDesc: 'O serviço mais confortável e sem esperas. Nosso motorista recepciona você no desembarque com placa nominal, auxilia com toda a bagagem e segue em viagem privativa e tranquila pela rota mais segura e cênica da serra.',
    route: 'Aeroporto Salgado Filho (POA) ⇄ Gramado ou Canela',
    duration: 'Aprox. 1h50 a 2h10',
    highlights: [
      'Recepção VIP com placa de identificação no desembarque',
      'Monitoramento constante do seu voo (sem taxa por atraso)',
      'Veículo exclusivo apenas para você e seus acompanhantes',
      'Água mineral e Wi-Fi cortesia a bordo',
      'Cadeirinhas infantis inclusas sob solicitação prévia',
    ],
    vehicleTypes: ['Sedan Executivo', 'SUV Premium', 'Van Executiva Mercedes/Master'],
    priceInfo: 'Sob consulta com desconto exclusivo',
    imageUrl: motoristaPlacaImg,
    featured: true,
  },
  {
    id: 'assessoria-compras-gastronomia',
    title: 'Assessoria & Roteiro VIP: Compras, Fábricas & Alta Gastronomia',
    category: 'vip',
    badge: 'Concierge VIP',
    shortDesc: 'Acompanhamento exclusivo aos melhores locais de compras (fábricas de couro, malharias, chocolates e cristais) e restaurantes premiados.',
    fullDesc: 'Experiência sob medida com motorista executivo e assessoria personalizada. Conheça as melhores fábricas de couro e malhas com descontos de fábrica, lojas de cristais nobres, chocolaterias artesanais e tenha recomendações nos mais conceituados restaurantes de fondue, parrillas e alta gastronomia.',
    route: 'Boutiques de Couro, Malharias, Chocolatarias & Restaurantes Selecionados',
    duration: 'Personalizado (4h a 8h)',
    highlights: [
      'Dicas e acesso direto a lojas de fábrica (couros nobres, calçados e malhas)',
      'Degustações nas melhores chocolaterias artesanais e adegas da serra',
      'Acompanhamento e suporte no transporte e acomodação de todas as suas compras',
      'Recomendações e reservas nos melhores restaurantes, bistrôs e sequências de fondue',
      'Veículo executivo climatizado e motorista à disposição durante todo o roteiro',
    ],
    vehicleTypes: ['Sedan Executivo', 'SUV Premium', 'Van Executiva Mercedes/Master'],
    priceInfo: 'Sob consulta com roteiro personalizado',
    imageUrl: comprasGastronomiaImg,
    featured: true,
  },
  {
    id: 'city-tour-gramado-canela',
    title: 'City Tour Completo Gramado & Canela (Privativo ou Regular)',
    category: 'tour',
    badge: 'Imperdível',
    shortDesc: 'Conheça os pontos turísticos mais icônicos: Lago Negro, Catedral de Pedra de Canela, Cascata do Caracol, Rua Torta e fábricas de chocolate.',
    fullDesc: 'Um dia inesquecível explorando os principais cartões-postais da Serra Gaúcha sem se preocupar com trânsito ou estacionamentos. Roteiro dinâmico com paradas estratégicas para fotos e compras gastronômicas.',
    route: 'Pontos turísticos de Gramado e Canela',
    duration: 'Dia completo (aprox. 8 horas)',
    highlights: [
      'Lago Negro e bosques de pinheiros alemães',
      'Catedral de Pedra de Canela e centro histórico',
      'Parada para degustação de chocolates artesanais e queijos',
      'Dicas exclusivas de restaurantes locais dos nossos guias',
    ],
    vehicleTypes: ['SUV Premium', 'Van Executiva', 'Spin Especial'],
    priceInfo: 'Opções privativas ou por pessoa',
    imageUrl: floresJardimImg,
    featured: true,
  },
  {
    id: 'tour-uva-e-vinho',
    title: 'Tour Uva & Vinho com Maria Fumaça e Vale dos Vinhedos',
    category: 'tour',
    badge: 'Experiência Clássica',
    shortDesc: 'Passeio nostálgico no trem a vapor Maria Fumaça, visitação a vinícolas premiadas e almoço típico colonial italiano.',
    fullDesc: 'Embarque em uma jornada cultural e sensorial pelas origens da imigração italiana. Inclui o tradicional passeio de trem com shows artísticos, tarantela, degustação de vinhos e visita ao Parque Epopéia Italiana.',
    route: 'Gramado ⇄ Bento Gonçalves, Garibaldi e Carlos Barbosa',
    duration: 'Dia inteiro (07:30 às 18:30)',
    highlights: [
      'Ingresso do Trem Maria Fumaça incluso com degustação',
      'Visita guiada a vinícola tradicional com degustação',
      'Almoço típico italiano completo (galeto colonial e massas)',
      'Parada na fábrica de malhas e cutelaria da região',
    ],
    vehicleTypes: ['Van Executiva', 'Micro-ônibus VIP'],
    priceInfo: 'Pacote completo com ingressos',
    imageUrl: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'roteiro-personalizado-motorista',
    title: 'Motorista Particular à Disposição & Roteiro Sob Medida',
    category: 'vip',
    badge: 'Experiência VIP',
    shortDesc: 'Contrate um veículo com motorista exclusivo para montar o seu próprio roteiro no seu ritmo, sem horários fixos.',
    fullDesc: 'Para quem busca máxima flexibilidade e discrição. Perfeito para casamentos, ensaios fotográficos de pré-wedding, roteiros gastronômicos noturnos ou viagens corporativas de alto padrão.',
    route: 'À sua escolha em toda a Serra Gaúcha',
    duration: 'Diárias de 4h, 8h ou 12h',
    highlights: [
      'Total liberdade para definir paradas e horários',
      'Motorista com traje executivo, pontual e discreto',
      'Veículo abastecido, higienizado e climatizado',
      'Recomendações secretas de mirantes e alta gastronomia',
    ],
    vehicleTypes: ['Sedan Executivo', 'SUV Premium 4x4', 'Van VIP'],
    priceInfo: 'Diárias personalizadas',
    imageUrl: motoristaVipImg,
  },
  {
    id: 'venda-ingressos-parques',
    title: 'Assessoria & Venda de Ingressos para Parques e Atrações',
    category: 'vip',
    badge: 'Sem Filas',
    shortDesc: 'Garanta seus ingressos para Snowland, Acquamotion, NBA Park, Vila da Mônica, Olivas de Gramado e Natal Luz com antecedência.',
    fullDesc: 'Facilidade total na sua viagem: nós organizamos os ingressos dos principais atrativos e parques temáticos da Serra Gaúcha para você não perder tempo em bilheterias e garantir os melhores dias.',
    route: 'Atrações de Gramado, Canela e Região',
    duration: 'Atendimento e envio digital imediato',
    highlights: [
      'Entradas diretas sem filas em bilheterias',
      'Orientações sobre melhores horários de visitação',
      'Combo transfer + ingressos com condições especiais',
      'Pagamento unificado via Pix ou Cartão',
    ],
    vehicleTypes: ['Serviço Integrado'],
    priceInfo: 'Valores oficiais com atendimento VIP',
    imageUrl: bondinhosCanelaImg,
  },
];

export const FLEET_VEHICLES: FleetVehicle[] = [
  {
    id: 'sedan-executivo',
    name: 'Sedan Executivo (Chevrolet Onix Plus)',
    category: 'Casais e Viagens Corporativas',
    capacity: 'Até 3 passageiros confortáveis',
    luggageCapacity: 'Até 3 malas médias',
    comfortFeatures: [
      'Rodagem suave e silenciosa para subida da serra',
      'Ar-condicionado digital e bancos confortáveis',
      'Cadeirinha infantil disponível sob solicitação',
      'Motorista com traje social e atendimento cortês',
    ],
    idealFor: 'Casais, passageiros corporativos e traslados rápidos com excelente custo.',
    imageUrl: frotaGramadoImg,
    badge: 'Elegância e Agilidade',
  },
  {
    id: 'minivan-spin',
    name: 'Minivan Familiar (Chevrolet Spin 7 Lugares)',
    category: 'Famílias com Crianças e Grupos',
    capacity: 'Até 4 a 6 passageiros',
    luggageCapacity: 'Espaço flexível para malas e carrinhos de bebê',
    comfortFeatures: [
      'Espaço modulável ideal para malas, carrinhos e compras',
      'Ar-condicionado potente para toda a cabine',
      'Cadeirinhas e assentos de elevação higienizados',
      'Segurança total com seguro passageiro integral (APP)',
    ],
    idealFor: 'Famílias com crianças pequenas, idosos e grupos com foco em praticidade e conforto.',
    imageUrl: frotaCanelaImg,
    badge: 'Espaço e Versatilidade',
  },
];

export const DIFFERENTIALS_LIST = [
  {
    title: 'Monitoramento de Voo em Tempo Real',
    desc: 'Se o seu voo no Aeroporto Salgado Filho (POA) adiantar ou atrasar, nós rastreamos pelo radar aeronáutico. Seu motorista estará esperando no desembarque sem qualquer cobrança por hora extra de atraso da companhia aérea.',
    iconName: 'PlaneTakeoff',
  },
  {
    title: 'Especialistas nas Rodovias da Serra Gaúcha',
    desc: 'A serra possui curvas sinuosas, trechos de neblina e variações de clima. Nossos motoristas são nativos da região, credenciados e rigorosamente treinados em direção defensiva e segurança serrana.',
    iconName: 'ShieldCheck',
  },
  {
    title: 'Pontualidade Britânica Comprovada',
    desc: 'Desde 2018, prezamos pelo horário exato tanto no seu embarque no aeroporto quanto no retorno para não haver risco de perder voo. Chegamos com 15 minutos de antecedência ao seu hotel.',
    iconName: 'Clock',
  },
  {
    title: 'Frota Própria 100% Revisada e Higienizada',
    desc: 'Não terceirizamos o padrão. Nossos veículos passam por inspeções mecânicas periódicas rigorosas, possuem seguro total de passageiros (APP) e são higienizados detalhadamente a cada viagem.',
    iconName: 'Car',
  },
  {
    title: 'Atendimento Humanizado no WhatsApp das 07h às 22h',
    desc: 'Você fala diretamente com a nossa equipe local que conhece cada canto de Gramado e Canela. Suporte rápido para dúvidas, dicas de restaurantes e alterações de itinerário.',
    iconName: 'MessageSquareText',
  },
  {
    title: 'Facilidade de Pagamento Transparente',
    desc: 'Valores claros e fechados, sem taxas surpresa de pedágio ou combustível. Pagamento descomplicado via Pix com confirmação imediata ou Cartão de Crédito parcelado.',
    iconName: 'CreditCard',
  },
];

export const TESTIMONIALS_LIST: TestimonialItem[] = [
  {
    id: 'test-1',
    name: 'Mariana & Rodrigo Silveira',
    originCity: 'São Paulo - SP',
    tripType: 'Lua de Mel em Gramado',
    rating: 5,
    date: 'Fevereiro de 2026',
    comment: 'Nosso voo atrasou quase 2 horas em Porto Alegre e estávamos super apreensivos. Quando saímos no saguão, o motorista da Serra Gaúcha Turismo estava lá com a placa com nosso nome, super solícito e gentil. A van era novíssima, com água gelada e ar perfeito. Foi o melhor começo de viagem possível!',
    serviceUsed: 'Transfer Privativo Aeroporto POA ⇄ Gramado',
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
  },
  {
    id: 'test-2',
    name: 'Carlos Eduardo Mendes',
    originCity: 'Rio de Janeiro - RJ',
    tripType: 'Família (5 pessoas + 2 crianças)',
    rating: 5,
    date: 'Janeiro de 2026',
    comment: 'Viajar com crianças e muitas malas costuma ser um estresse, mas a equipe facilitou tudo. Disponibilizaram duas cadeirinhas perfeitamente instaladas e limpas, sem custo extra. O motorista dirigiu com extrema prudência na subida com neblina da serra. Empresa séria e nota 10!',
    serviceUsed: 'Van Executiva Privativa + City Tour Canela',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
  },
  {
    id: 'test-3',
    name: 'Patrícia Alencar de Castro',
    originCity: 'Belo Horizonte - MG',
    tripType: 'Grupo de Amigas',
    rating: 5,
    date: 'Dezembro de 2025',
    comment: 'Fizemos o Tour Uva e Vinho com Maria Fumaça e contratamos todos os transfers com eles. Pontualidade impecável, atendimento atencioso pelo WhatsApp em qualquer horário e dicas maravilhosas de restaurantes em Canela. Recomendo de olhos fechados!',
    serviceUsed: 'Tour Uva e Vinho + Transfer Regular',
    avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
  },
  {
    id: 'test-4',
    name: 'Dr. Fernando Albuquerque',
    originCity: 'Brasília - DF',
    tripType: 'Viagem Corporativa & Lazer',
    rating: 5,
    date: 'Novembro de 2025',
    comment: 'Utilizo os serviços da Serra Gaúcha Turismo desde 2021 em todas as minhas idas a trabalho e férias com a esposa. O padrão executivo dos carros e o profissionalismo dos motoristas são comparáveis aos melhores serviços de transfer do mundo.',
    serviceUsed: 'Motorista Particular VIP (Sedan Executivo)',
    avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
  },
];

export const FAQ_LIST: FaqItem[] = [
  {
    category: 'voo',
    question: 'E se o meu voo atrasar ou adiantar no Aeroporto Salgado Filho?',
    answer: 'Você não precisa se preocupar. Nós solicitamos o número do seu voo e nossa central faz o monitoramento em tempo real do radar de pousos. Seu motorista estará posicionado no saguão de desembarque no momento em que seu avião pousar, sem qualquer taxa ou cobrança adicional de espera.',
  },
  {
    category: 'transfer',
    question: 'Como encontro o motorista na minha chegada ao aeroporto?',
    answer: 'Assim que você retirar as bagagens na esteira e sair na área pública do saguão de desembarque do Aeroporto Internacional Salgado Filho (POA), nosso motorista estará aguardando segurando uma placa de identificação bem visível com o seu nome ou o logo da Serra Gaúcha Turismo. Além disso, enviamos o contato direto do motorista via WhatsApp minutos antes do seu pouso.',
  },
  {
    category: 'transfer',
    question: 'Qual a diferença entre o Transfer Privativo e o Regular?',
    answer: 'No Transfer Privativo, o veículo (Sedan, SUV ou Van) é exclusivo para o seu grupo, sem espera por outros passageiros e com saída imediata assim que você desembarca, levando você direto ao seu hotel. No Transfer Regular (compartilhado), a viagem é feita com outros turistas com horários sincronizados de saídas em vans executivas confortáveis.',
  },
  {
    category: 'transfer',
    question: 'Vocês disponibilizam cadeirinha ou bebê-conforto para crianças?',
    answer: 'Sim! A segurança dos pequenos é nossa prioridade absoluta. Disponibilizamos bebê-conforto, cadeirinha para crianças pequenas ou assento de elevação (booster) devidamente higienizados. Basta nos avisar a idade e peso da criança no momento da reserva.',
  },
  {
    category: 'pagamento',
    question: 'Como funcionam os pagamentos e reservas?',
    answer: 'Para sua comodidade e segurança, você pode garantir sua reserva com um pequeno sinal via Pix ou cartão, e quitar o restante antes ou no início do serviço. Aceitamos Pix, transferência e Cartão de Crédito com opção de parcelamento.',
  },
  {
    category: 'passeios',
    question: 'Quanto tempo antes devo reservar meu transfer ou passeio?',
    answer: 'Recomendamos reservar com a maior antecedência possível, especialmente em períodos de alta temporada na Serra Gaúcha (como Natal Luz de outubro a janeiro, férias de julho e feriados prolongados), para garantir a disponibilidade dos melhores veículos da frota e assentos no Trem Maria Fumaça.',
  },
];

export const SCENIC_LOCATIONS = [
  {
    title: 'Gramado',
    subtitle: 'O charme europeu no Brasil',
    image: porticoGramadoImg,
    tags: ['Lago Negro', 'Rua Coberta', 'Mini Mundo', 'Gastronomia'],
  },
  {
    title: 'Canela',
    subtitle: 'Natureza exuberante & monumentos',
    image: catedralPedraImg,
    tags: ['Catedral de Pedra', 'Cascata do Caracol', 'Skyglass', 'Parques'],
  },
  {
    title: 'Vale dos Vinhedos',
    subtitle: 'Tradição italiana e vinícolas nobres',
    image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=800&q=80',
    tags: ['Maria Fumaça', 'Degustações', 'Queijarias', 'Cantinas'],
  },
  {
    title: 'Nova Petrópolis & Três Coroas',
    subtitle: 'Cultura alemã, templos e aventura',
    image: labirintoVerdeImg,
    tags: ['Labirinto Verde', 'Templo Budista', 'Rafting', 'Compras Malhas'],
  },
];
