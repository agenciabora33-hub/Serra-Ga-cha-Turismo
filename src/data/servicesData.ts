import { COMPANY_INFO } from './mockData';
import aeroportoPoaImg from '../assets/images/transfer_aeroporto_poa_g1.jpg';
import comprasGastronomiaImg from '../assets/images/compras_gastronomia_gramado_1787922063620.jpg';
import floresJardimImg from '../assets/images/flores_jardim_gramado_1787922745724.jpg';
import motoristaVipImg from '../assets/images/transfer_particular_luxo_aeroporto_1787923586899.jpg';
import motoristaPlacaImg from '../assets/images/motorista_placa_aeroporto_1787923819454.jpg';
import frotaGramadoImg from '../assets/images/frota_gramado_portico_1787948949681.jpg';
import frotaCanelaImg from '../assets/images/frota_canela_catedral_1787948964412.jpg';
import bondinhosCanelaImg from '../assets/images/bondinhos_canela_caracol_1788188070196.jpg';

export interface DetailedServiceData {
  id: string;
  slug: string;
  title: string;
  seoTitle: string;
  metaDescription: string;
  ogImage: string;
  category: 'transfer' | 'tour' | 'vip';
  badge: string;
  shortDesc: string;
  searchIntent: string;
  directAnswerAeo: string;
  heroTagline: string;
  route: string;
  duration: string;
  priceNote: string;
  quickFacts: { label: string; value: string; icon?: string }[];
  howItWorks: { step: number; title: string; desc: string }[];
  included: string[];
  notIncluded: string[];
  vehicleTypes: {
    name: string;
    capacity: string;
    luggage: string;
    description: string;
    image: string;
  }[];
  comparisonTable: {
    title: string;
    headers: string[];
    rows: { feature: string; ourService: string; competitor: string; appTaxi: string }[];
  };
  faqs: { question: string; answer: string }[];
  testimonials: {
    name: string;
    origin: string;
    rating: number;
    date: string;
    comment: string;
    avatar: string;
  }[];
  travelTips: string[];
  relatedServices: string[];
}

export const DETAILED_SERVICES: Record<string, DetailedServiceData> = {
  'transfer-aeroporto-porto-alegre-gramado': {
    id: 'transfer-aeroporto-privativo',
    slug: 'transfer-aeroporto-porto-alegre-gramado',
    title: 'Transfer Aeroporto Porto Alegre ⇄ Gramado e Canela (Privativo VIP)',
    seoTitle: 'Transfer Porto Alegre Gramado | Privativo Aeroporto POA',
    metaDescription: 'Transfer executivo privativo do Aeroporto de Porto Alegre (POA) para Gramado e Canela. Recepção no desembarque, rastreamento de voo e van/sedan VIP.',
    ogImage: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1200&q=80',
    category: 'transfer',
    badge: 'Mais Escolhido • Sem Espera',
    heroTagline: 'Transporte Executivo Direto da Pista ao seu Hotel na Serra Gaúcha',
    shortDesc: 'Transporte privativo do Aeroporto Internacional Salgado Filho (POA) para hotéis em Gramado e Canela, com recepção nominal e monitoramento de voo.',
    searchIntent: 'Passageiros que chegam pelo Aeroporto Salgado Filho (POA) e buscam a rota mais rápida, confortável e segura até Gramado sem fila ou atrasos.',
    directAnswerAeo: 'O transfer privativo entre o Aeroporto de Porto Alegre (POA) e Gramado ou Canela tem duração média de 1h50 a 2h10 (cerca de 115 km pela rota segura RS-239/RS-115). O motorista aguarda no saguão de desembarque com placa nominal e monitora o radar de voos, garantindo tolerância total para atrasos sem cobrança extra. O veículo é de uso exclusivo, climatizado, com água mineral cortesia e cadeirinhas infantis sob pedido prévio.',
    route: 'Aeroporto Salgado Filho (POA) ⇄ Hotéis de Gramado & Canela',
    duration: '1h50 a 2h10 (sem paradas não planejadas)',
    priceNote: 'Valores fechados com pedágios e combustível inclusos. Orçamento rápido no WhatsApp.',
    quickFacts: [
      { label: 'Distância da Rota', value: '115 km a 125 km (conforme o hotel)' },
      { label: 'Tempo Médio', value: '1h50 a 2h10 direto' },
      { label: 'Ponto de Encontro', value: 'Saguão de desembarque com placa nominal' },
      { label: 'Atraso de Voo', value: 'Monitoramento no radar sem taxa de espera' },
      { label: 'Veículos', value: 'Sedan Executivo, Minivan Spin 7L e Vans VIP' },
      { label: 'Bagagens', value: 'Até 15 malas médias dependendo do veículo' },
    ],
    howItWorks: [
      {
        step: 1,
        title: 'Reserva e Dados de Voo',
        desc: 'Você informa o número do voo, data, horário e hotel. Confirmamos sua reserva com recibo oficial.',
      },
      {
        step: 2,
        title: 'Monitoramento do Radar',
        desc: 'Nossa equipe acompanha o horário real do pouso. Se adiantar ou atrasar, nos ajustamos automaticamente.',
      },
      {
        step: 3,
        title: 'Recepção VIP no Desembarque',
        desc: 'Ao cruzar a esteira de bagagens para o saguão, seu motorista estará com uma placa de identificação com seu nome.',
      },
      {
        step: 4,
        title: 'Viagem Confortável e Segura',
        desc: 'Embarque imediato no veículo exclusivo climatizado com água gelada, sem esperas ou paradas em outros hotéis.',
      },
    ],
    included: [
      'Recepção personalizada no desembarque com placa nominal',
      'Monitoramento de voo em tempo real (tolerância total por atrasos)',
      'Veículo 100% privativo exclusivo para o seu grupo familiar',
      'Água mineral cortesia para todos os passageiros',
      'Cadeirinhas de bebê e assentos de elevação inclusos mediante pedido',
      'Seguro total de passageiros (APP) e pedágios já inclusos',
      'Auxílio completo no manuseio de todas as bagagens',
    ],
    notIncluded: [
      'Ingressos de atrações turísticas',
      'Refeições e paradas gastronômicas não programadas',
    ],
    vehicleTypes: [
      {
        name: 'Sedan Executivo (Chevrolet Onix Plus)',
        capacity: 'Até 3 passageiros',
        luggage: '3 malas médias',
        description: 'Ideal para casais ou viagens a trabalho que buscam agilidade e conforto na subida da serra.',
        image: frotaGramadoImg,
      },
      {
        name: 'Minivan Familiar (Chevrolet Spin 7 Lugares)',
        capacity: 'Até 4 a 6 passageiros',
        luggage: 'Espaço modulável para malas e carrinhos',
        description: 'Perfeito para famílias com crianças, acomodando cadeirinhas infantis com conforto extra.',
        image: frotaCanelaImg,
      },
      {
        name: 'Van Executiva de Luxo (Mercedes-Benz / Master)',
        capacity: 'Até 15 passageiros',
        luggage: 'Porta-malas espaçoso para bagagens volumosas',
        description: 'Bancos reclináveis soft, ar-condicionado digital duto central e máximo espaço para grupos e famílias grandes.',
        image: motoristaPlacaImg,
      },
    ],
    comparisonTable: {
      title: 'Comparativo: Transfer Privativo vs Outras Opções',
      headers: ['Critério', 'Transfer Privativo VIP', 'Transfer Regular / Compartilhado', 'Táxi / Aplicativo'],
      rows: [
        {
          feature: 'Tempo de Espera no Aeroporto',
          ourService: 'Zero espera: embarque imediato no pouso',
          competitor: 'De 40 min a 1h30 aguardando outros voos',
          appTaxi: 'Fila física e instabilidade de cancelamento',
        },
        {
          feature: 'Recepção no Saguão',
          ourService: 'Motorista com placa nominal segurando seu nome',
          competitor: 'Check-in em balcão compartilhado',
          appTaxi: 'Caminhar até o ponto de embarque na rua',
        },
        {
          feature: 'Se o Voo Atrasar',
          ourService: 'Monitoramos pelo radar sem taxa extra',
          competitor: 'Remanejamento para próximo ônibus se houver vaga',
          appTaxi: 'Corrida cancelada pelo motorista',
        },
        {
          feature: 'Paradas no Caminho',
          ourService: 'Direto na recepção do seu hotel',
          competitor: 'Passa por 5 a 12 hotéis antes do seu',
          appTaxi: 'Direto, porém motoristas sem experiência na serra',
        },
        {
          feature: 'Cadeirinha Infantil',
          ourService: 'Inclusa, higienizada e instalada com antecedência',
          competitor: 'Cobrada à parte ou indisponível',
          appTaxi: 'Quase nunca disponível em apps',
        },
      ],
    },
    faqs: [
      {
        question: 'Quanto tempo dura a viagem do Aeroporto de Porto Alegre até Gramado?',
        answer: 'O tempo médio de trajeto varia entre 1h50 e 2h10 em condições normais de tráfego, percorrendo aproximadamente 115 km pela Rota Romântica e RS-239/RS-115.',
      },
      {
        question: 'Como encontro o motorista na minha chegada em Porto Alegre?',
        answer: 'Nosso motorista estará aguardando você com uma placa de identificação bem legível com o seu nome assim que você sai da esteira de bagagens para o saguão público de desembarque. Você também recebe o WhatsApp dele minutos antes do pouso.',
      },
      {
        question: 'O que acontece se meu voo atrasar ou for adiantado?',
        answer: 'Nossa equipe acompanha o radar de voos continuamente. Se o voo sofrer atrasos da companhia aérea, não há qualquer taxa de espera e seu motorista estará posicionado no exato momento da chegada real da aeronave.',
      },
      {
        question: 'Qual a vantagem do transfer privativo comparado ao compartilhado?',
        answer: 'No privativo o veículo é exclusivo para você e seus acompanhantes, sem aguardar passageiros de outros voos no aeroporto e sem precisar fazer parada em múltiplos hotéis até chegar ao seu destino.',
      },
      {
        question: 'Vocês disponibilizam cadeirinha ou assento de elevação para crianças?',
        answer: 'Sim! Fornecemos bebê-conforto, cadeirinha ou booster devidamente certificados e higienizados. Basta nos informar a faixa etária e peso no momento do agendamento.',
      },
      {
        question: 'Como funciona o pagamento do transfer?',
        answer: 'Você pode realizar a reserva mediante sinal via Pix e quitar o restante antes ou no início do traslado. Também parcelamos no Cartão de Crédito em até 12x.',
      },
    ],
    testimonials: [
      {
        name: 'Mariana & Rodrigo Silveira',
        origin: 'São Paulo - SP',
        rating: 5,
        date: 'Fevereiro de 2026',
        comment: 'Nosso voo atrasou 2h em Porto Alegre. Quando saímos no saguão com nossos dois filhos pequenos, o motorista estava lá com o nosso nome na placa, super calmo e atencioso. As duas cadeirinhas estavam impecáveis. Foi um alívio enorme!',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
      },
      {
        name: 'Carlos Eduardo Mendes',
        origin: 'Rio de Janeiro - RJ',
        rating: 5,
        date: 'Janeiro de 2026',
        comment: 'Carro cheiroso, motorista dirigiu com muita prudência na serra e chegamos em Gramado descansados. O atendimento pelo WhatsApp antes da viagem tirou todas as dúvidas. Vale cada centavo.',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
      },
    ],
    travelTips: [
      'Reserve seu transfer assim que emitir as passagens aéreas para garantir o veículo ideal para o tamanho da sua bagagem.',
      'Na volta de Gramado para Porto Alegre, recomendamos sair do hotel com pelo menos 4h30 a 5h de antecedência em relação ao horário do voo.',
      'Se viaja com idosos ou crianças, a viagem sem paradas do transfer privativo evita enjoos e cansaço excessivo.',
    ],
    relatedServices: [
      'city-tour-gramado-canela',
      'tour-uva-e-vinho-maria-fumaca',
      'roteiro-compras-gastronomia-gramado',
    ],
  },

  'roteiro-compras-gastronomia-gramado': {
    id: 'assessoria-compras-gastronomia',
    slug: 'roteiro-compras-gastronomia-gramado',
    title: 'Assessoria & Roteiro VIP: Compras, Fábricas & Alta Gastronomia',
    seoTitle: 'Roteiro Compras e Gastronomia Gramado | Assessoria VIP',
    metaDescription: 'Roteiro exclusivo de compras e gastronomia em Gramado e Canela. Fábricas de couro e malhas, chocolatarias artesanais e os melhores fondues da serra.',
    ogImage: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80',
    category: 'vip',
    badge: 'Concierge VIP • Preço de Fábrica',
    heroTagline: 'Economize nas Melhores Fábricas e Desfrute dos Restaurantes Mais Nobres',
    shortDesc: 'Acompanhamento exclusivo com motorista executivo às melhores fábricas de couros, malharias, chocolates artesanais e restaurantes premiados.',
    searchIntent: 'Turistas que desejam fazer compras de casacos de couro, malhas e chocolates sem intermediários caros e buscam alta gastronomia em Gramado.',
    directAnswerAeo: 'O Roteiro VIP de Compras e Alta Gastronomia é um serviço com motorista privativo e assessoria local que conduz você direto às fábricas de couro, confecções de malhas com preço de fábrica, lojas nobres de cristais e renomadas chocolaterias de Gramado e Canela. Além da economia real nas compras, você recebe reservas e recomendações nos restaurantes e fondues mais conceituados, com transporte porta a porta e acomodação de todas as suas compras no veículo.',
    route: 'Lojas de Fábrica, Boutiques de Couro, Chocolatarias & Restaurantes Selecionados',
    duration: '4h (meio período) ou 8h (dia completo personalizado)',
    priceNote: 'Roteiro flexível montado sob o perfil dos seus interesses e compras desejadas.',
    quickFacts: [
      { label: 'Duração', value: '4h ou 8h de total dedicação' },
      { label: 'Economia', value: 'Acesso a valores diretos de fábrica em couros e malhas' },
      { label: 'Gastronomia', value: 'Recomendações nas melhores sequências de fondue e adegas' },
      { label: 'Comodidade', value: 'Motorista guarda e protege todas as suas compras no veículo' },
      { label: 'Veículo', value: 'Sedan Executivo, Minivan ou SUV climatizado' },
    ],
    howItWorks: [
      {
        step: 1,
        title: 'Alinhamento de Interesses',
        desc: 'Entendemos o que você procura: casacos de couro nobre, malhas da serra, calçados, chocolates ou uma sequência de fondue inesquecível.',
      },
      {
        step: 2,
        title: 'Montagem do Roteiro Cênico',
        desc: 'Organizamos as paradas na ordem mais eficiente para você não perder tempo em trânsito.',
      },
      {
        step: 3,
        title: 'Transporte VIP Porta a Porta',
        desc: 'O motorista busca você no hotel, aguarda durante cada visita e armazena todas as suas sacolas no porta-malas com segurança.',
      },
      {
        step: 4,
        title: 'Gastronomia e Degustações',
        desc: 'Paradas estratégicas em chocolaterias artesanais com degustação e reservas nas mesas mais disputadas.',
      },
    ],
    included: [
      'Veículo executivo à disposição durante todo o período contratado',
      'Motorista com conhecimento profundo das lojas de fábrica com real desconto',
      'Acesso a lojas de fábrica de couros e malharias tradicionais',
      'Degustações nas melhores marcas artesanais de chocolates da serra',
      'Auxílio no transporte e guarda de todas as sacolas de compras',
      'Recomendações e auxílio nas reservas de fondues e restaurantes conceituados',
    ],
    notIncluded: [
      'Valores das compras de mercadorias pessoais',
      'Consumo de refeições e bebidas nos restaurantes',
    ],
    vehicleTypes: [
      {
        name: 'Sedan Executivo Climatizado',
        capacity: 'Até 3 pessoas',
        luggage: 'Porta-malas para sacolas de compras',
        description: 'Ideal para casais que buscam uma tarde agradável de compras e jantar refinado.',
        image: comprasGastronomiaImg,
      },
      {
        name: 'Minivan Familiar Spin',
        capacity: 'Até 6 pessoas',
        luggage: 'Espaço generoso para compras volumosas',
        description: 'Perfeito para famílias que pretendem renovar o guarda-roupa de inverno nas malharias.',
        image: frotaCanelaImg,
      },
    ],
    comparisonTable: {
      title: 'Comprar por Conta Própria vs Assessoria VIP',
      headers: ['Aspecto', 'Assessoria VIP Serra Gaúcha', 'Compras Sozinho / Táxi'],
      rows: [
        {
          feature: 'Preço dos Produtos',
          ourService: 'Descontos de lojas de fábrica direto do produtor',
          competitor: 'Lojas centrais com margem inflacionada para turista',
          appTaxi: 'Lojas centrais comuns',
        },
        {
          feature: 'Transporte de Sacolas',
          ourService: 'Motorista guarda tudo no carro, você anda livre',
          competitor: 'Carregar dezenas de sacolas a pé na rua',
          appTaxi: 'Ficar chamando aplicativo a cada loja visitada',
        },
        {
          feature: 'Escolha Gastronômica',
          ourService: 'Dicas locais testadas, fondues sem decepções',
          competitor: 'Risco de cair em pegadinhas gastronômicas',
          appTaxi: 'Sem recomendações personalizadas',
        },
      ],
    },
    faqs: [
      {
        question: 'Vale a pena comprar roupas de couro e malhas em Gramado?',
        answer: 'Sim, a Serra Gaúcha é o maior polo coureiro e malheiro do Sul do Brasil. Com nosso roteiro em lojas de fábrica especializadas, você encontra peças com acabamento impecável por preços consideravelmente inferiores aos de shoppings nas capitais.',
      },
      {
        question: 'Podemos escolher quais lojas e fábricas queremos visitar?',
        answer: 'Com certeza! O roteiro é 100% flexível e personalizado. Apresentamos nossas melhores sugestões de qualidade e preço, mas você decide onde parar e quanto tempo ficar em cada lugar.',
      },
      {
        question: 'O motorista fica esperando enquanto fazemos compras e almoçamos?',
        answer: 'Sim, o motorista e o veículo permanecem à sua inteira disposição durante todas as horas contratadas, guardando suas compras com segurança no porta-malas.',
      },
    ],
    testimonials: [
      {
        name: 'Patrícia Alencar de Castro',
        origin: 'Belo Horizonte - MG',
        rating: 5,
        date: 'Dezembro de 2025',
        comment: 'Compramos jaquetas de couro lindas direto da fábrica por metade do preço que pagaríamos em BH. E a indicação do fondue foi a melhor noite da nossa viagem!',
        avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80',
      },
    ],
    travelTips: [
      'Reserve uma tarde livre para não fazer compras com pressa.',
      'Aproveite para comprar casacos de lã pura e calçados confortáveis para usar durante os próprios passeios da serra.',
    ],
    relatedServices: [
      'transfer-aeroporto-porto-alegre-gramado',
      'city-tour-gramado-canela',
      'motorista-particular-gramado',
    ],
  },

  'city-tour-gramado-canela': {
    id: 'city-tour-gramado-canela',
    slug: 'city-tour-gramado-canela',
    title: 'City Tour Completo Gramado & Canela (Privativo e Regular)',
    seoTitle: 'City Tour Gramado e Canela | Passeio Completo e Guiado',
    metaDescription: 'City Tour em Gramado e Canela. Conheça Lago Negro, Catedral de Pedra, Cascata do Caracol, Rua Torta e fábricas de chocolates com motorista e guia.',
    ogImage: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80',
    category: 'tour',
    badge: 'Imperdível • Dia Completo',
    heroTagline: 'Os Principais Cartões-Postais da Serra sem Estresse de Estacionamento',
    shortDesc: 'Visite Lago Negro, Catedral de Pedra de Canela, Cascata do Caracol, Rua Torta e os melhores atrativos com comodidade e fotos incríveis.',
    searchIntent: 'Turistas procurando saber o que fazer em Gramado e Canela em 1 dia, melhores pontos turísticos e como fazer o tour com conforto.',
    directAnswerAeo: 'O City Tour Gramado e Canela é o passeio turístico mais clássico da Serra Gaúcha, cobrindo os atrativos mais famosos em aproximadamente 8 horas de roteiro. Estão incluídas paradas no Lago Negro, Catedral de Pedra de Canela, mirantes da Cascata do Caracol, Rua Torta, Praça das Etnias e chocolateria artesanal. O passeio conta com embarque e retorno no seu hotel, eliminando despesas de estacionamento e trânsito.',
    route: 'Principais atrativos de Gramado e Canela com paradas para fotos',
    duration: 'Dia completo (aprox. 8 horas de duração)',
    priceNote: 'Opções privativas (no seu ritmo) ou regulares compartilhadas.',
    quickFacts: [
      { label: 'Duração', value: 'Aproximadamente 8 horas (08:30 às 17:00)' },
      { label: 'Atrativos', value: '7 a 9 principais pontos turísticos' },
      { label: 'Embarque', value: 'Na recepção do seu hotel em Gramado ou Canela' },
      { label: 'Modalidades', value: 'Privativo VIP ou Regular em Van' },
      { label: 'Almoço', value: 'Parada em restaurante colonial típico selecionado' },
    ],
    howItWorks: [
      {
        step: 1,
        title: 'Embarque no seu Hotel',
        desc: 'Buscamos você na recepção do seu hotel ou pousada em Gramado ou Canela no horário combinado.',
      },
      {
        step: 2,
        title: 'Manhã em Gramado',
        desc: 'Visita ao tranquilo Lago Negro com hortênsias, Rua Torta, Praça das Etnias e parada para degustação de chocolates.',
      },
      {
        step: 3,
        title: 'Almoço Típico',
        desc: 'Pausa para um almoço saboroso com buffet colonial da culinária típica alemã e italiana.',
      },
      {
        step: 4,
        title: 'Tarde em Canela',
        desc: 'Deslumbrante Catedral de Pedra de Canela, mirante do Vale da Ferradura ou Cascata do Caracol e retorno tranquilo ao hotel.',
      },
    ],
    included: [
      'Transporte executivo com ar-condicionado durante todo o dia',
      'Motorista/Guia credenciado com histórias e dicas secretas da região',
      'Busca e retorno direto na recepção do seu hotel',
      'Paradas programadas para fotografias e compras',
      'Parada para degustação de chocolates artesanais e queijos',
    ],
    notIncluded: [
      'Ingressos opcionais de parques internos (ex: Skyglass, bondinhos)',
      'Almoço e bebidas',
    ],
    vehicleTypes: [
      {
        name: 'Minivan Familiar Spin (Privativo)',
        capacity: 'Até 6 passageiros',
        luggage: 'Espaço para mochilas e carrinhos',
        description: 'Para você curtir cada ponto turístico no seu próprio tempo com sua família.',
        image: frotaCanelaImg,
      },
      {
        name: 'Van Executiva Mercedes/Master',
        capacity: 'Até 15 passageiros',
        luggage: 'Conforto coletivo',
        description: 'Excelente para quem prefere opção regular compartilhada ou grupos de amigos.',
        image: floresJardimImg,
      },
    ],
    comparisonTable: {
      title: 'City Tour com Nossa Agência vs Carro Alugado',
      headers: ['Aspecto', 'City Tour Agência', 'Carro Alugado / Sozinho'],
      rows: [
        {
          feature: 'Estacionamento & Trânsito',
          ourService: 'Zero estresse: motorista desembarca você na porta',
          competitor: 'Vagas pagas difíceis e caras no centro de Gramado',
          appTaxi: 'Ficar esperando transporte em pontos turísticos afastados',
        },
        {
          feature: 'Conhecimento dos Locais',
          ourService: 'Dicas históricas e melhores ângulos de fotos',
          competitor: 'Dependência exclusiva de GPS',
          appTaxi: 'Sem guia turístico',
        },
        {
          feature: 'Tranquilidade e Degustações',
          ourService: 'Você pode degustar vinhos e chocolates à vontade',
          competitor: 'Quem dirige não pode beber',
          appTaxi: 'Aplicativos cobram taxas dinâmicas em dias de chuva',
        },
      ],
    },
    faqs: [
      {
        question: 'Quais pontos turísticos são visitados no City Tour?',
        answer: 'Visitamos os principais ícones: Lago Negro, Catedral de Pedra de Canela, mirante da Cascata do Caracol, Rua Torta, Praça das Etnias e chocolateria com degustação.',
      },
      {
        question: 'Os ingressos dos atrativos estão incluídos?',
        answer: 'As paradas em atrativos públicos contemplativos são livres. Caso deseje entrar em atrações com bilheteria paga (como Skyglass ou bondinhos), auxiliamos na aquisição sem filas.',
      },
      {
        question: 'É melhor fazer o City Tour Privativo ou Regular?',
        answer: 'O regular é ótimo para quem quer economizar. O privativo é ideal para quem quer escolher quanto tempo ficar em cada ponto, ótimo para famílias com crianças ou idosos.',
      },
    ],
    testimonials: [
      {
        name: 'Carlos Eduardo Mendes',
        origin: 'Rio de Janeiro - RJ',
        rating: 5,
        date: 'Janeiro de 2026',
        comment: 'Fizemos o City Tour privativo com as crianças. O motorista tirou fotos maravilhosas da família no Lago Negro e na Catedral de Pedra. Experiência nota 10!',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
      },
    ],
    travelTips: [
      'Leve agasalho leve mesmo no verão, pois o início da manhã no Lago Negro costuma ser fresco.',
      'Carregue a bateria do celular para registrar todas as fotos nos mirantes.',
    ],
    relatedServices: [
      'transfer-aeroporto-porto-alegre-gramado',
      'tour-uva-e-vinho-maria-fumaca',
      'ingressos-parques-gramado-canela',
    ],
  },

  'tour-uva-e-vinho-maria-fumaca': {
    id: 'tour-uva-e-vinho',
    slug: 'tour-uva-e-vinho-maria-fumaca',
    title: 'Tour Uva & Vinho com Maria Fumaça e Vale dos Vinhedos',
    seoTitle: 'Tour Uva e Vinho Maria Fumaça | Vale dos Vinhedos Bento',
    metaDescription: 'Passeio Maria Fumaça com degustação de vinhos, almoço colonial italiano e visita a vinícolas premiadas no Vale dos Vinhedos. Saída de Gramado.',
    ogImage: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1200&q=80',
    category: 'tour',
    badge: 'Mais Famoso • Ingresso Incluso',
    heroTagline: 'A Tradicional Viagem no Trem a Vapor com Degustações e Cultura Italiana',
    shortDesc: 'Passeio completo de trem Maria Fumaça entre Bento Gonçalves e Carlos Barbosa, show de tarantela, almoço colonial e visitação em vinícola.',
    searchIntent: 'Turistas que buscam informações sobre o passeio de Maria Fumaça saindo de Gramado, preço, o que está incluso e como reservar os bilhetes.',
    directAnswerAeo: 'O Tour Uva e Vinho com Trem Maria Fumaça é uma experiência de dia inteiro que parte de Gramado com destino a Bento Gonçalves, Garibaldi e Carlos Barbosa. O pacote inclui bilhete oficial do trem a vapor com degustações a bordo de vinhos, espumantes e suco de uva, ingresso para o espetáculo do Parque Epopéia Italiana, almoço colonial típico italiano completo (galeto e massas) e visita guiada a uma vinícola tradicional da serra.',
    route: 'Gramado ⇄ Bento Gonçalves, Garibaldi e Carlos Barbosa',
    duration: 'Dia inteiro (aproximadamente 07:30 às 18:30)',
    priceNote: 'Pacote tudo incluso: transporte executivo + bilhete de trem + almoço + vinícola.',
    quickFacts: [
      { label: 'Duração', value: 'Dia todo (~07:30 às 18:30)' },
      { label: 'Ingresso do Trem', value: 'Incluso no pacote oficial' },
      { label: 'Almoço Colonial', value: 'Incluso (típico italiano completo)' },
      { label: 'Degustações', value: 'Sucos de uva, vinhos e espumantes nas estações' },
      { label: 'Cidades', value: 'Bento Gonçalves, Garibaldi e Carlos Barbosa' },
    ],
    howItWorks: [
      {
        step: 1,
        title: 'Embarque Matutino em Gramado',
        desc: 'Buscamos você no seu hotel em van executiva climatizada com saída por volta das 07h30.',
      },
      {
        step: 2,
        title: 'Trem Maria Fumaça',
        desc: 'Embarque no clássico trem a vapor com shows artísticos, tarantela ao vivo e degustação de vinhos e sucos nas plataformas.',
      },
      {
        step: 3,
        title: 'Epopéia Italiana e Almoço',
        desc: 'Visita ao parque temático da imigração italiana e um farto almoço colonial com sopa de capeletti, galeto e massas.',
      },
      {
        step: 4,
        title: 'Vinícola & Retorno Panorâmico',
        desc: 'Visitação a vinícola tradicional com explicações do enólogo e retorno tranquilo a Gramado no fim da tarde.',
      },
    ],
    included: [
      'Transporte executivo ida e volta a partir do seu hotel em Gramado ou Canela',
      'Bilhete oficial do Trem Maria Fumaça',
      'Degustações de sucos e vinhos nas estações ferroviárias',
      'Ingresso do Parque Epopéia Italiana',
      'Almoço típico italiano colonial completo',
      'Visita guiada com degustação a vinícola tradicional da serra',
      'Parada na loja de fábrica de malhas e cutelaria',
    ],
    notIncluded: [
      'Bebidas consumidas durante o almoço',
      'Compras pessoais de garrafas de vinhos',
    ],
    vehicleTypes: [
      {
        name: 'Van Executiva Mercedes/Master',
        capacity: 'Até 15 passageiros',
        luggage: 'Conforto total',
        description: 'Bancos soft reclináveis e ar-condicionado para um trajeto relaxante até a região dos vinhedos.',
        image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=800&q=80',
      },
    ],
    comparisonTable: {
      title: 'Pacote Oficial Serra Gaúcha Turismo vs Ir de Conta Própria',
      headers: ['Detalhe', 'Nosso Tour Oficial', 'Ir Sozinho de Carro'],
      rows: [
        {
          feature: 'Ingresso do Trem Maria Fumaça',
          ourService: 'Garantido com assento reservado com antecedência',
          competitor: 'Esgota semanas antes em alta temporada',
          appTaxi: 'Risco de não conseguir bilhete na bilheteria',
        },
        {
          feature: 'Degustações de Vinho',
          ourService: 'Você aproveita todas as taças com segurança total',
          competitor: 'Quem dirige não pode degustar vinhos e espumantes',
          appTaxi: 'Táxis de Gramado a Bento custam fortuna',
        },
        {
          feature: 'Almoço e Parque Inclusos',
          ourService: 'Tudo resolvido em uma única reserva transparente',
          competitor: 'Filas longas e cobranças separadas em cada atração',
          appTaxi: 'Sem logística integrada',
        },
      ],
    },
    faqs: [
      {
        question: 'O bilhete do Trem Maria Fumaça já está incluso no valor do tour?',
        answer: 'Sim! Nosso pacote inclui o ingresso oficial da Maria Fumaça, as degustações nas plataformas, a entrada na Epopéia Italiana, o almoço colonial e a vinícola.',
      },
      {
        question: 'Crianças pagam ingresso no Trem Maria Fumaça?',
        answer: 'Crianças de colo até 5 anos no colo dos pais não pagam ingresso. A partir de 6 anos o valor do assento é integral.',
      },
      {
        question: 'Quanto tempo antes devo reservar esse passeio?',
        answer: 'Recomendamos reservar com a maior antecedência possível, principalmente para viagens entre outubro e janeiro (Natal Luz) ou julho, quando os bilhetes de trem costumam esgotar rapidamente.',
      },
    ],
    testimonials: [
      {
        name: 'Fernando Albuquerque & Família',
        origin: 'Brasília - DF',
        rating: 5,
        date: 'Novembro de 2025',
        comment: 'O trem é emocionante, a tarantela diverte todo mundo e a comida do almoço colonial foi espetacular. A pontualidade da van na busca do hotel foi impecável.',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80',
      },
    ],
    travelTips: [
      'Alimente-se com café da manhã reforçado no hotel, pois o almoço é servido após o percurso do trem.',
      'Aproveite a parada na vinícola para despachar caixas de vinho direto para sua casa.',
    ],
    relatedServices: [
      'transfer-aeroporto-porto-alegre-gramado',
      'city-tour-gramado-canela',
      'roteiro-compras-gastronomia-gramado',
    ],
  },

  'motorista-particular-gramado': {
    id: 'roteiro-personalizado-motorista',
    slug: 'motorista-particular-gramado',
    title: 'Motorista Particular VIP & Carro à Disposição em Gramado',
    seoTitle: 'Motorista Particular Gramado | Carro à Disposição VIP',
    metaDescription: 'Contrate motorista particular em Gramado e Canela por diária ou horas. Veículos executivos para casamentos, ensaios fotográficos e passeios VIP.',
    ogImage: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1200&q=80',
    category: 'vip',
    badge: 'Exclusividade Total • Diária Flexível',
    heroTagline: 'Total Liberdade de Horários com Motorista Executivo no seu Ritmo',
    shortDesc: 'Carro executivo exclusivo com motorista experiente à disposição para montar o seu próprio itinerário sem horários engessados.',
    searchIntent: 'Pessoas e famílias que desejam alugar carro com motorista particular em Gramado e Canela para diárias, casamentos, fotos ou restaurantes.',
    directAnswerAeo: 'O serviço de Motorista Particular à Disposição em Gramado oferece um veículo executivo revisado e higienizado com condutor profissional credenciado em traje social durante diárias de 4h, 8h ou 12h. Você define as paradas, os horários e o ritmo do seu dia, seja para restaurantes noturnos, ensaios de fotos de casamento, reuniões corporativas ou visitas a vinícolas e mirantes exclusivos da serra.',
    route: 'Gramado, Canela, Nova Petrópolis ou qualquer destino da Serra',
    duration: 'Diárias de 4 horas, 8 horas ou 12 horas sob medida',
    priceNote: 'Diárias personalizadas com combustível e motorista inclusos.',
    quickFacts: [
      { label: 'Formatos', value: 'Diárias de 4h, 8h ou 12h' },
      { label: 'Frota Disponível', value: 'Sedan Executivo, Minivan Spin e Vans VIP' },
      { label: 'Condutor', value: 'Traje social, discrição e pontualidade britânica' },
      { label: 'Liberdade', value: 'Você escolhe todos os destinos e o tempo de cada parada' },
      { label: 'Segurança', value: 'Seguro integral de passageiros (APP)' },
    ],
    howItWorks: [
      {
        step: 1,
        title: 'Definição da Carga Horária',
        desc: 'Você escolhe se precisa de 4 horas para um jantar e compras, 8 horas para um dia de passeios ou 12 horas completas.',
      },
      {
        step: 2,
        title: 'Escolha do Veículo Ideal',
        desc: 'Sedan executivo para casais, Minivan 7 lugares para famílias ou Van espaçosa para grupos.',
      },
      {
        step: 3,
        title: 'Apresentação do Motorista',
        desc: 'No horário e local exato solicitado, seu motorista estará posicionado pronto para atender você.',
      },
      {
        step: 4,
        title: 'Passeio Sem Limites',
        desc: 'Circule com tranquilidade, sabendo que seu carro estará sempre à sua espera na porta de cada atração.',
      },
    ],
    included: [
      'Veículo executivo abastecido e higienizado com ar-condicionado',
      'Motorista profissional credenciado com atendimento de alto padrão',
      'Flexibilidade absoluta de paradas e horários',
      'Seguro total de passageiros e pedágios da região inclusos',
      'Água mineral a bordo',
    ],
    notIncluded: [
      'Ingressos e consumos pessoais em atrativos ou restaurantes',
    ],
    vehicleTypes: [
      {
        name: 'Sedan Executivo (Chevrolet Onix Plus)',
        capacity: 'Até 3 passageiros',
        luggage: 'Conforto e discrição',
        description: 'Perfeito para jantares românticos, fondues noturnos e eventos corporativos.',
        image: motoristaVipImg,
      },
      {
        name: 'Minivan Familiar Spin (7 Lugares)',
        capacity: 'Até 6 passageiros',
        luggage: 'Excelente espaço interno',
        description: 'Ideal para famílias que querem visitar parques e restaurantes com crianças pequenas.',
        image: frotaCanelaImg,
      },
    ],
    comparisonTable: {
      title: 'Motorista Particular Dedicado vs Aplicativos na Serra',
      headers: ['Situação', 'Motorista Particular VIP', 'Aplicativos / Táxis Avulsos'],
      rows: [
        {
          feature: 'Disponibilidade Noturna',
          ourService: 'Garantida: o motorista espera você sair do restaurante',
          competitor: 'Demora e cancelamentos em horários de pico e chuva',
          appTaxi: 'Falta crônica de carros em Canela e bairros afastados',
        },
        {
          feature: 'Padrão do Veículo',
          ourService: 'Carro limpo, revisado, com ar perfeito e água gelada',
          competitor: 'Veículos populares sem controle de padrão',
          appTaxi: 'Condições variáveis e cheiro desagradável',
        },
        {
          feature: 'Conhecimento da Serra',
          ourService: 'Motoristas locais especialistas em neblina e curvas',
          competitor: 'Muitos motoristas novatos perdidos com GPS',
          appTaxi: 'Insegurança em vias sinuosas',
        },
      ],
    },
    faqs: [
      {
        question: 'Posso contratar o motorista para sair à noite para jantar em Gramado?',
        answer: 'Sim! É uma das maiores procuras. Você não precisa se preocupar com quem vai dirigir após tomar um bom vinho e não fica esperando na chuva por aplicativo que não aparece.',
      },
      {
        question: 'O motorista pode nos levar para cidades vizinhas como Nova Petrópolis ou Três Coroas?',
        answer: 'Certamente! O serviço cobre qualquer rota dentro da Serra Gaúcha durante o período contratado.',
      },
      {
        question: 'Como é calculada a diária?',
        answer: 'Temos pacotes de 4h, 8h ou 12h contínuas com combustível e condutor já inclusos, sem taxas surpresa.',
      },
    ],
    testimonials: [
      {
        name: 'Dr. Fernando Albuquerque',
        origin: 'Brasília - DF',
        rating: 5,
        date: 'Novembro de 2025',
        comment: 'Contratamos para nossos ensaios fotográficos de pré-wedding e jantares. O motorista foi pontual ao extremo, paciente e nos levou aos mirantes mais secretos.',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80',
      },
    ],
    travelTips: [
      'Monte sua lista de desejos de restaurantes e atrações que nosso concierge ajuda a encaixar nos melhores horários.',
      'Para ensaios fotográficos, agende o início do roteiro nas primeiras horas da manhã para aproveitar a luz dourada sem multidões.',
    ],
    relatedServices: [
      'transfer-aeroporto-porto-alegre-gramado',
      'city-tour-gramado-canela',
      'roteiro-compras-gastronomia-gramado',
    ],
  },

  'ingressos-parques-gramado-canela': {
    id: 'venda-ingressos-parques',
    slug: 'ingressos-parques-gramado-canela',
    title: 'Assessoria & Ingressos para Parques e Atrações de Gramado',
    seoTitle: 'Ingressos Parques Gramado e Canela | Assessoria VIP',
    metaDescription: 'Garanta ingressos para Snowland, Acquamotion, Natal Luz, Skyglass e parques de Gramado sem filas. Assessoria gratuita e entrega digital imediata.',
    ogImage: 'https://images.unsplash.com/photo-1513889961551-628c1e5e2ee9?auto=format&fit=crop&w=1200&q=80',
    category: 'vip',
    badge: 'Sem Filas • 100% Digital',
    heroTagline: 'Economize Tempo nas Bilheterias e Garanta as Melhores Datas da Serra',
    shortDesc: 'Assessoria completa para escolha e compra dos melhores atrativos: Snowland, Acquamotion, Natal Luz, Olivas, Skyglass e NBA Park.',
    searchIntent: 'Turistas procurando onde comprar ingressos com desconto para parques de Gramado e Canela sem pegar filas nas bilheterias.',
    directAnswerAeo: 'A Assessoria de Ingressos da Serra Gaúcha Turismo permite adquirir vouchers digitais para os principais parques temáticos e espetáculos de Gramado e Canela (como Snowland, Acquamotion, espetáculos do Natal Luz, Skyglass, Vila da Mônica, Olivas de Gramado e NBA Park) com emissão antecipada. Você evita filas demoradas nas bilheterias presenciais, recebe consultoria gratuita de roteiro e pode parcelar compras unificadas no cartão ou Pix.',
    route: 'Atrações e Parques Temáticos de Gramado e Canela',
    duration: 'Emissão e envio digital instantâneo via WhatsApp / E-mail',
    priceNote: 'Valores oficiais com assessoria de cronograma gratuita e combos com transfer.',
    quickFacts: [
      { label: 'Formato', value: 'Vouchers 100% digitais no WhatsApp' },
      { label: 'Vantagem', value: 'Entrada direta na catraca sem filas de bilheteria' },
      { label: 'Assessoria', value: 'Dicas de quais parques visitar em cada dia' },
      { label: 'Parques Parceiros', value: 'Snowland, Acquamotion, Natal Luz, Skyglass, Olivas e mais' },
      { label: 'Combos', value: 'Descontos especiais combinando Transfer + Ingressos' },
    ],
    howItWorks: [
      {
        step: 1,
        title: 'Envie sua Lista de Desejos',
        desc: 'Fale pelo WhatsApp quais atrações quer visitar ou a idade das crianças da família.',
      },
      {
        step: 2,
        title: 'Sugestão de Cronograma Ideal',
        desc: 'Aconselhamos os dias ideais para cada parque, evitando feriados lotados ou dias de fechamento.',
      },
      {
        step: 3,
        title: 'Emissão Segura dos Vouchers',
        desc: 'Seus ingressos são emitidos diretamente no sistema oficial e enviados para seu celular.',
      },
      {
        step: 4,
        title: 'Acesso Direto nas Atrações',
        desc: 'Chegue ao parque e apresente o QR code no seu smartphone na catraca sem esperar em bilheterias.',
      },
    ],
    included: [
      'Assessoria gratuita de cronograma e compatibilidade de parques',
      'Ingressos oficiais com QR code para entrada direta nas catracas',
      'Suporte humanizado no WhatsApp caso precise de orientações no parque',
      'Condições especiais para pacotes que incluam transfer',
    ],
    notIncluded: [
      'Gastos de alimentação e armários locados dentro dos parques',
    ],
    vehicleTypes: [
      {
        name: 'Serviço Integrado de Logística & Ingressos',
        capacity: 'Para casais, famílias e grupos',
        luggage: 'Conveniência total',
        description: 'Combine o transporte do seu hotel até a porta dos parques com seus ingressos já emitidos.',
        image: bondinhosCanelaImg,
      },
    ],
    comparisonTable: {
      title: 'Comprar com Nossa Assessoria vs Bilheteria no Parque',
      headers: ['Vantagem', 'Com Assessoria Serra Gaúcha', 'Bilheteria Física no Parque'],
      rows: [
        {
          feature: 'Tempo em Filas',
          ourService: 'Zero fila: entra direto com o voucher digital no celular',
          competitor: 'Filas de até 1h a 2h em dias de alta temporada',
          appTaxi: 'Perda de tempo precioso das férias',
        },
        {
          feature: 'Garantia de Vaga',
          ourService: 'Garantido mesmo com capacidade diária limitada',
          competitor: 'Risco de chegar ao parque e encontrar lotação esgotada',
          appTaxi: 'Ingressos do dia esgotados',
        },
        {
          feature: 'Planejamento de Roteiro',
          ourService: 'Consultoria para não cansar as crianças em dias seguidos',
          competitor: 'Nenhum suporte de roteiro',
          appTaxi: 'Sem assessoria',
        },
      ],
    },
    faqs: [
      {
        question: 'Os ingressos dão acesso direto sem fila na bilheteria?',
        answer: 'Sim! Com o voucher digital oficial enviado pela nossa equipe, você vai direto para a catraca de acesso com seu celular.',
      },
      {
        question: 'Vale a pena comprar ingressos do Natal Luz com antecedência?',
        answer: 'Com certeza! Os espetáculos do Natal Luz (como Grande Desfile de Natal e Nativitaten) costumam ter ingressos esgotados com semanas de antecedência nos setores nobres.',
      },
      {
        question: 'Tem desconto para crianças e idosos?',
        answer: 'Sim, aplicamos todas as regras oficiais de meia-entrada e gratuidades infantis das atrações de acordo com a idade e documentos.',
      },
    ],
    testimonials: [
      {
        name: 'Carlos & Família',
        origin: 'Curitiba - PR',
        rating: 5,
        date: 'Janeiro de 2026',
        comment: 'Compramos os ingressos do Snowland e do Skyglass com a equipe. Fomos direto pra catraca enquanto a fila da bilheteria dava a volta no quarteirão. Sensacional!',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
      },
    ],
    travelTips: [
      'No Snowland, lembre-se de ir com meias grossas mesmo alugando as roupas térmicas do parque.',
      'Evite agendar dois parques grandes e cansativos no mesmo dia se estiver com crianças pequenas.',
    ],
    relatedServices: [
      'transfer-aeroporto-porto-alegre-gramado',
      'city-tour-gramado-canela',
      'motorista-particular-gramado',
    ],
  },
};
