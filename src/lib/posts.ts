export type BlogSection = {
  heading?: string;
  paragraphs?: string[];
  list?: string[];
};

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  badge: string;
  date: string;
  readTime: string;
  excerpt: string;
  sections: BlogSection[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "lista-iptv-o-que-e-e-como-escolher",
    title: "Lista IPTV: o que é e como escolher uma confiável",
    description:
      "Entenda o que é uma lista IPTV, a diferença entre listas gratuitas e listas pagas mantidas por uma equipe, e os pontos que evitam travamento e canais fora do ar.",
    badge: "Guia de decisão",
    date: "2026-09-09",
    readTime: "6 min",
    excerpt:
      "Toda lista IPTV promete o mesmo catálogo de canais. A diferença real aparece em quem mantém a infraestrutura por trás dela — e é isso que decide se vai travar ou não.",
    sections: [
      {
        paragraphs: [
          "\"Lista IPTV\" é o termo usado para o catálogo de canais, filmes e séries que um aplicativo de streaming carrega para exibir. É comum ver o termo associado só ao número de canais, mas o que realmente define a experiência é a estrutura por trás dessa lista — não a lista em si.",
        ],
      },
      {
        heading: "O que compõe uma lista IPTV",
        paragraphs: [
          "Na prática, uma lista IPTV reúne três tipos de conteúdo: canais ao vivo (abertos e fechados), filmes sob demanda e séries organizadas por temporada. Essa lista fica hospedada em servidores que entregam o conteúdo para o aplicativo em tempo real, conforme o usuário assiste.",
          "Duas listas com nomes de canais parecidos podem entregar experiências bem diferentes, porque o que sustenta a transmissão é a infraestrutura — servidores monitorados, banda dedicada, atualização constante — e não apenas a quantidade de itens listados.",
        ],
      },
      {
        heading: "Lista gratuita x lista paga e mantida",
        paragraphs: [
          "Listas IPTV gratuitas costumam ser mantidas sem uma equipe dedicada, o que gera três problemas recorrentes:",
        ],
        list: [
          "Servidores sobrecarregados nos horários de maior audiência, já que não há investimento contínuo em capacidade.",
          "Canais que somem sem aviso, porque ninguém monitora e substitui fontes que caem.",
          "Nenhum suporte disponível quando o problema aparece — o usuário fica por conta própria.",
        ],
      },
      {
        heading: "Riscos de listas piratas ou não verificadas",
        paragraphs: [
          "Além da instabilidade, listas de origem não verificada costumam vir carregadas de anúncios invasivos e não oferecem qualquer garantia sobre a segurança do aplicativo usado para acessá-las. Como não há uma empresa por trás para reclamar ou pedir suporte, o usuário assume sozinho qualquer risco.",
        ],
      },
      {
        heading: "Como identificar uma lista IPTV confiável",
        paragraphs: [
          "Alguns sinais ajudam a diferenciar um serviço sério de uma lista descartável:",
        ],
        list: [
          "Oferece teste grátis antes de qualquer cobrança, sem pedir cartão de crédito.",
          "Tem suporte humano acessível para resolver travamentos e dúvidas de instalação.",
          "Mantém o catálogo revisado com frequência, sem canais fora do ar por dias seguidos.",
          "É transparente sobre preço e condições, sem fidelidade obrigatória escondida em letra miúda.",
        ],
      },
      {
        paragraphs: [
          "No fim, a pergunta certa não é \"quantos canais tem essa lista IPTV\", e sim \"quem mantém essa lista funcionando todos os dias\". É essa resposta que decide se a experiência vai ser estável ou se vai travar justamente na hora que você mais quer assistir.",
        ],
      },
    ],
  },
  {
    slug: "como-configurar-iptv-na-smart-tv",
    title: "Como configurar IPTV na Smart TV sem complicação",
    description:
      "Passo a passo para instalar e configurar IPTV em Smart TVs Samsung, LG, TCL e outras marcas, com os ajustes que realmente evitam travamento.",
    badge: "Configuração",
    date: "2026-08-03",
    readTime: "6 min",
    excerpt:
      "A maior parte dos problemas de instalação não é sobre o aplicativo — é sobre três ajustes que quase ninguém verifica antes de começar.",
    sections: [
      {
        paragraphs: [
          "Instalar IPTV numa Smart TV costuma ser mais rápido do que parece: o gargalo raramente é o aplicativo em si, e sim três detalhes que passam batido — a versão do sistema da TV, a origem do app e a rede em que o aparelho está conectado.",
        ],
      },
      {
        heading: "Antes de instalar qualquer coisa",
        paragraphs: [
          "Verifique se a TV está atualizada. Modelos com firmware antigo às vezes travam na abertura do player mesmo com internet perfeita, porque o navegador interno do sistema está desatualizado.",
          "Confirme também de onde o app será instalado. Em TVs com loja de aplicativos própria (Samsung Tizen, LG webOS, TVs com Android TV nativo), prefira sempre a loja oficial do sistema. Só recorra a instalação manual via USB quando o app não estiver disponível na loja — e, nesse caso, baixe o arquivo apenas de fontes confiáveis.",
        ],
      },
      {
        heading: "Passo a passo por tipo de TV",
        paragraphs: [
          "Em TVs com Android TV ou Google TV nativo, o caminho é: abrir a Play Store, buscar o player recomendado pelo seu serviço, instalar e fazer login com os dados enviados pelo suporte. Depois disso, vale entrar nas configurações do próprio app e ativar qualquer opção de 'buffer' ou 'cache' — isso reduz engasgos em conexões um pouco mais instáveis.",
          "Em Samsung (Tizen) e LG (webOS), o processo é parecido, mas a loja tem menos players de terceiros disponíveis. Se o aplicativo desejado não aparecer na busca, a alternativa mais comum é instalar via um app de terceiros já disponível na loja (como Downloader) e apontar para o arquivo de instalação — sempre seguindo as instruções específicas passadas pelo suporte do seu serviço.",
          "Em TVs mais antigas, sem loja de aplicativos robusta, o caminho costuma ser usar um TV Box ou Fire TV Stick conectado na TV, o que também resolve o problema de desempenho de hardware fraco.",
        ],
      },
      {
        heading: "Ajustes que evitam travamento depois da instalação",
        paragraphs: [
          "Depois de instalado, três ajustes fazem diferença real no dia a dia:",
        ],
        list: [
          "Definir a qualidade de vídeo como 'automática' em vez de forçar 4K o tempo todo — isso permite que o player reduza a qualidade momentaneamente em vez de travar quando a rede oscila.",
          "Conectar por cabo de rede sempre que possível, principalmente se a TV estiver longe do roteador.",
          "Reiniciar o aplicativo (não só a TV) pelo menos uma vez por semana, já que alguns players acumulam cache que pode causar lentidão com o tempo.",
        ],
      },
      {
        heading: "Se travar mesmo assim",
        paragraphs: [
          "Se depois de tudo isso o conteúdo ainda travar, o problema provavelmente não está na instalação — é rede, dispositivo ou operadora. Vale testar o mesmo canal em outro aparelho conectado no mesmo Wi-Fi antes de concluir que é falha do serviço.",
        ],
      },
    ],
  },
  {
    slug: "quanto-de-internet-voce-precisa-para-4k",
    title: "Quanto de internet você realmente precisa para assistir em HD, Full HD e 4K",
    description:
      "Entenda a diferença entre velocidade contratada e velocidade real, e quantos Mbps são realmente necessários para IPTV sem travar.",
    badge: "Internet",
    date: "2026-07-22",
    readTime: "5 min",
    excerpt:
      "O plano de internet contratado quase nunca é o número que importa. O que decide se vai travar é a velocidade que sobra depois de todo mundo em casa.",
    sections: [
      {
        paragraphs: [
          "Uma dúvida comum antes de assinar qualquer serviço de streaming é: 'minha internet aguenta?'. A resposta certa não é só sobre o plano contratado — é sobre quanto dessa velocidade realmente chega até o aparelho que está assistindo.",
        ],
      },
      {
        heading: "Consumo aproximado por qualidade",
        paragraphs: [
          "Como referência prática (os valores variam conforme a compressão do conteúdo):",
        ],
        list: [
          "HD (720p): entre 3 e 5 Mbps por tela.",
          "Full HD (1080p): entre 6 e 10 Mbps por tela.",
          "4K: entre 15 e 25 Mbps por tela, em conteúdo bem otimizado.",
        ],
      },
      {
        heading: "Por que a velocidade contratada engana",
        paragraphs: [
          "Se o plano é de 100 Mbps, isso não significa 100 Mbps dedicados ao IPTV. Esse total é dividido entre todos os dispositivos conectados — celulares fazendo backup, jogos online, outra TV ligada na sala ao lado. Some ainda a distância até o roteador e o número de paredes no caminho do sinal, que reduzem a velocidade real do Wi-Fi.",
          "Por isso, a regra prática mais segura é: para assistir em Full HD com folga, o ideal é ter pelo menos 20-30 Mbps disponíveis exclusivamente para o streaming, considerando outros usos simultâneos na casa. Para 4K, essa margem sobe para 40-50 Mbps se houver mais de uma tela ativa.",
        ],
      },
      {
        heading: "Como saber se a internet é o problema",
        paragraphs: [
          "Um teste simples: rode um teste de velocidade no mesmo dispositivo, no mesmo horário em que o travamento acontece. Se o resultado estiver bem abaixo do plano contratado, o gargalo está na rede local (Wi-Fi congestionado, roteador antigo, muitos dispositivos), não no serviço de streaming em si.",
          "Também vale testar por cabo de rede quando possível: se o travamento desaparece, o problema é praticamente sempre o Wi-Fi.",
        ],
      },
    ],
  },
  {
    slug: "tv-box-ou-fire-tv-stick-qual-escolher",
    title: "TV Box ou Fire TV Stick: qual escolher para assistir IPTV",
    description:
      "Comparação prática entre TV Box, Fire TV Stick e Android TV nativo para quem quer decidir qual aparelho comprar para assistir IPTV.",
    badge: "Dispositivos",
    date: "2026-07-10",
    readTime: "5 min",
    excerpt:
      "Não existe resposta única — a escolha certa depende de quanto sua TV já é 'smart' e de quanto processamento o aparelho atual aguenta.",
    sections: [
      {
        paragraphs: [
          "Essa é uma das perguntas mais frequentes de quem está montando a configuração de IPTV pela primeira vez. A resposta muda dependendo de três coisas: a idade da TV, o orçamento e a prioridade entre praticidade e desempenho.",
        ],
      },
      {
        heading: "Fire TV Stick",
        paragraphs: [
          "É o caminho mais simples para quem tem uma TV comum (sem sistema smart robusto) e quer algo compacto, plugado direto na entrada HDMI. A instalação é rápida, a interface é conhecida e o suporte a apps é amplo. O ponto de atenção é o processamento: os modelos de entrada podem engasgar em 4K com várias abas de player abertas ao mesmo tempo, então vale considerar a versão 4K Max se o objetivo é ultra alta definição.",
        ],
      },
      {
        heading: "TV Box (Android)",
        paragraphs: [
          "Costuma entregar mais processamento pelo mesmo preço, o que ajuda bastante quem assiste em 4K ou usa múltiplos aplicativos. Também tende a ter mais portas (Ethernet incluso, o que resolve boa parte dos problemas de instabilidade por Wi-Fi) e mais espaço de armazenamento para outros apps.",
          "A desvantagem é a variação de qualidade entre marcas: existem TV Boxes excelentes e outras com componentes fracos vendidos com specs infladas. Vale pesquisar o modelo específico antes de comprar, em vez de confiar só na caixa.",
        ],
      },
      {
        heading: "Android TV / Google TV nativo",
        paragraphs: [
          "Se a TV já tem Android TV ou Google TV embutido, normalmente não vale a pena comprar um aparelho extra — a menos que o processador da TV seja antigo e esteja engasgando. Nesse caso, um TV Box ou Fire TV Stick mais recente pode até superar o desempenho do sistema nativo da TV.",
        ],
      },
      {
        heading: "Resumo prático",
        paragraphs: [
          "Para TV comum, sem smart: Fire TV Stick pela simplicidade. Para quem assiste em 4K com frequência ou quer conexão por cabo: TV Box com Ethernet. Para quem já tem Android TV: só trocar se o desempenho atual já estiver ruim.",
        ],
      },
    ],
  },
  {
    slug: "wifi-ou-cabo-o-que-muda-na-estabilidade",
    title: "Wi-Fi ou cabo de rede: o que muda de verdade na estabilidade do IPTV",
    description:
      "Entenda quando vale a pena trocar o Wi-Fi por cabo de rede para assistir IPTV, e como melhorar o sinal quando o cabo não é uma opção.",
    badge: "Rede",
    date: "2026-06-28",
    readTime: "5 min",
    excerpt:
      "Cabo de rede não é sobre velocidade máxima — é sobre estabilidade. E é a estabilidade, não a velocidade, que evita o travamento no meio do jogo.",
    sections: [
      {
        paragraphs: [
          "Uma internet rápida no teste de velocidade não garante streaming sem travar. O motivo é simples: teste de velocidade mede um pico em um instante; assistir IPTV depende de uma conexão estável ao longo de horas, sem microquedas.",
        ],
      },
      {
        heading: "Por que o cabo costuma resolver",
        paragraphs: [
          "Uma conexão por cabo de rede (Ethernet) elimina as principais causas de instabilidade do Wi-Fi: interferência de outros aparelhos (roteadores vizinhos, micro-ondas, telefones sem fio), distância até o roteador e paredes no caminho do sinal. É por isso que, quando um problema de travamento não tem explicação clara, ligar o aparelho por cabo costuma resolver de imediato — e serve inclusive como teste de diagnóstico.",
        ],
      },
      {
        heading: "Quando o Wi-Fi é suficiente",
        paragraphs: [
          "Nem toda casa precisa de cabo. Se o roteador está a poucos metros do aparelho, sem muitas paredes no meio, e a banda de 5GHz está disponível (mais rápida e menos congestionada que a de 2.4GHz em áreas urbanas densas), o Wi-Fi tende a funcionar bem.",
        ],
      },
      {
        heading: "Como melhorar o Wi-Fi quando o cabo não é opção",
        paragraphs: [
          "Quando puxar um cabo até a sala não é viável, alguns ajustes reduzem bastante a instabilidade:",
        ],
        list: [
          "Trocar o roteador de posição — de preferência centralizado na casa e longe de paredes grossas ou eletrodomésticos.",
          "Usar a banda de 5GHz para o aparelho de streaming, reservando 2.4GHz para dispositivos que precisam de alcance (como sensores e câmeras).",
          "Considerar um adaptador Powerline (que usa a fiação elétrica da casa) como alternativa intermediária entre Wi-Fi puro e cabo direto.",
          "Reiniciar o roteador periodicamente — modems que ficam meses ligados sem reiniciar acumulam falhas de memória que degradam a conexão aos poucos.",
        ],
      },
    ],
  },
  {
    slug: "iptv-travando-causas-e-solucoes",
    title: "IPTV travando? As causas mais comuns e como resolver cada uma",
    description:
      "Guia de diagnóstico para quem está com IPTV travando ou congelando: da rede ao aparelho, veja o que checar antes de trocar de serviço.",
    badge: "Solução de problemas",
    date: "2026-06-05",
    readTime: "7 min",
    excerpt:
      "Antes de concluir que é o serviço, existe uma lista curta de causas que resolve a maioria dos casos de travamento em poucos minutos.",
    sections: [
      {
        paragraphs: [
          "Travamento em streaming raramente tem uma causa só. Mas a maioria dos casos se resolve seguindo uma ordem lógica de diagnóstico — da causa mais provável para a menos provável.",
        ],
      },
      {
        heading: "1. Rede congestionada",
        paragraphs: [
          "É a causa mais comum. Muitos dispositivos conectados ao mesmo tempo, alguém fazendo download pesado ou jogando online na mesma rede consomem banda que faria falta ao streaming. Solução: testar em horário de menor uso da casa e ver se o problema desaparece.",
        ],
      },
      {
        heading: "2. Wi-Fi fraco no ponto do aparelho",
        paragraphs: [
          "Se o sinal chega fraco onde o dispositivo está, a qualidade do vídeo cai automaticamente e pode travar. Testar com o aparelho mais próximo do roteador (ou por cabo) ajuda a confirmar essa hipótese rapidamente.",
        ],
      },
      {
        heading: "3. Aplicativo ou dispositivo desatualizado",
        paragraphs: [
          "Players desatualizados às vezes têm bugs conhecidos de travamento que já foram corrigidos em versões mais novas. Verificar atualização do app e do sistema do aparelho é um passo rápido e frequentemente resolutivo.",
        ],
      },
      {
        heading: "4. Cache acumulado",
        paragraphs: [
          "Assim como qualquer aplicativo, players de IPTV acumulam dados temporários com o uso. Limpar o cache do app (nas configurações do próprio aparelho) costuma resolver travamentos que foram piorando aos poucos, sem explicação aparente.",
        ],
      },
      {
        heading: "5. Roteador precisando reiniciar",
        paragraphs: [
          "Roteadores ligados por semanas sem reiniciar acumulam falhas de memória. Um reinício simples — desligar da tomada, esperar 30 segundos, ligar de novo — resolve mais casos do que parece.",
        ],
      },
      {
        heading: "6. Instabilidade pontual do provedor de internet",
        paragraphs: [
          "Se nenhum dos pontos acima resolver, vale checar se outros serviços (sites, outros apps de streaming) também estão lentos no mesmo momento. Se sim, o problema é da operadora de internet, não do IPTV.",
        ],
      },
      {
        paragraphs: [
          "Se depois de passar por essa lista o travamento continuar isolado no IPTV, aí sim faz sentido acionar o suporte do serviço — de preferência informando em qual desses pontos o problema persistiu, o que acelera bastante o diagnóstico.",
        ],
      },
    ],
  },
  {
    slug: "teste-gratis-de-iptv-como-avaliar",
    title: "Teste grátis de IPTV: como avaliar antes de assinar",
    description:
      "O que observar durante um teste grátis de IPTV para decidir com segurança antes de contratar um plano — estabilidade, catálogo e suporte.",
    badge: "Antes de contratar",
    date: "2026-05-20",
    readTime: "5 min",
    excerpt:
      "O teste grátis só é útil se for usado nos horários certos e prestando atenção nas coisas certas. Veja um roteiro simples para não perder tempo.",
    sections: [
      {
        paragraphs: [
          "Testar antes de assinar é a forma mais segura de avaliar um serviço de IPTV — mas só funciona se o teste for usado com intenção, e não só ligado no fundo da sala por alguns minutos.",
        ],
      },
      {
        heading: "Teste nos horários de pico",
        paragraphs: [
          "Qualquer serviço funciona bem às 10h da manhã de terça-feira. O teste real acontece à noite, nos horários de maior audiência, e principalmente durante eventos ao vivo — é aí que a infraestrutura de um serviço se revela.",
        ],
      },
      {
        heading: "O que observar durante o teste",
        list: [
          "Estabilidade em horário de pico: travou, engasgou ou manteve a qualidade?",
          "Tempo de carregamento ao trocar de canal — deve ser rápido, sem travar por vários segundos.",
          "Qualidade real da imagem, não só o rótulo. Um canal marcado como 'Full HD' que constantemente comprime a imagem não está entregando o prometido.",
          "Cobertura do catálogo que você realmente usa: canais específicos, pacotes esportivos, conteúdo internacional — teste exatamente o que pretende assistir no dia a dia.",
          "Velocidade e qualidade do atendimento durante o teste. Como o suporte responde às suas dúvidas nesse período é um bom indicativo de como será depois de assinar.",
        ],
      },
      {
        heading: "Sinais de alerta",
        paragraphs: [
          "Desconfie de testes que 'sempre funcionam perfeitamente' mas têm prazo muito curto para avaliação, ou de serviços que evitam responder perguntas diretas sobre estabilidade e suporte. Transparência sobre limitações reais é, paradoxalmente, um bom sinal — nenhum serviço é infalível 100% do tempo, e quem admite isso costuma ser mais confiável.",
        ],
      },
      {
        heading: "Depois do teste",
        paragraphs: [
          "Se a estabilidade se manteve nos horários de pico e o suporte foi ágil durante o período de avaliação, essas duas coisas juntas costumam prever bem a experiência depois da assinatura — muito mais do que qualquer lista de canais.",
        ],
      },
    ],
  },
  {
    slug: "como-escolher-o-melhor-iptv",
    title: "Como escolher o melhor serviço de IPTV: critérios que realmente importam",
    description:
      "Checklist para avaliar um serviço de IPTV antes de contratar, além do preço: estabilidade, suporte, transparência e compatibilidade.",
    badge: "Guia de decisão",
    date: "2026-05-02",
    readTime: "6 min",
    excerpt:
      "Preço baixo e catálogo grande são os critérios mais fáceis de comparar — e os menos importantes no dia a dia depois que a assinatura já está ativa.",
    sections: [
      {
        paragraphs: [
          "É fácil comparar serviços de IPTV pelo preço e pelo número de canais anunciados. É bem mais difícil comparar o que realmente define a experiência no dia a dia: estabilidade, suporte e transparência. Veja os critérios que valem mais peso nessa decisão.",
        ],
      },
      {
        heading: "1. Estabilidade em horário de pico",
        paragraphs: [
          "Qualquer serviço consegue rodar bem fora de horário de pico. O que separa um bom serviço de um ruim é o que acontece às sextas e sábados à noite, ou durante um jogo decisivo, quando a demanda por infraestrutura é maior. Peça referências ou use o período de teste grátis exatamente nesses momentos.",
        ],
      },
      {
        heading: "2. Suporte humano e ágil",
        paragraphs: [
          "Streaming eventualmente apresenta algum problema — é uma questão de tecnologia, não de qualidade do serviço. O que diferencia é a velocidade e a qualidade da resposta quando isso acontece. Atendimento feito por pessoas que entendem o serviço tende a resolver mais rápido do que fluxos automatizados genéricos.",
        ],
      },
      {
        heading: "3. Transparência nas condições",
        paragraphs: [
          "Preço publicado com clareza, sem letra miúda sobre reajustes, fidelidade ou taxas escondidas. Serviços sérios não têm problema em explicar exatamente o que está incluso no plano antes da contratação.",
        ],
      },
      {
        heading: "4. Compatibilidade com os aparelhos que você já tem",
        paragraphs: [
          "Antes de assinar, confirme se o serviço funciona bem nos dispositivos que você realmente usa em casa — Smart TV, TV Box, celular, computador. Compatibilidade ampla evita ter que comprar equipamento extra logo de cara.",
        ],
      },
      {
        heading: "5. Qualidade de imagem consistente",
        paragraphs: [
          "Full HD e 4K só valem a pena se forem entregues de forma consistente, e não apenas como rótulo em canais que na prática comprimem bastante a imagem. Isso só se confirma testando na prática, de preferência durante o teste grátis.",
        ],
      },
      {
        paragraphs: [
          "No fim, o 'melhor IPTV' não é o mais barato nem o com mais canais no papel — é o que entrega consistência nos momentos em que você mais quer assistir, com um suporte que resolve rápido quando algo sai do previsto.",
        ],
      },
    ],
  },
  {
    slug: "perguntas-comuns-primeiro-dia-de-uso",
    title: "Perguntas mais comuns no primeiro dia de uso do IPTV",
    description:
      "As dúvidas que mais aparecem na primeira semana de quem assina IPTV pela primeira vez, e as respostas diretas para cada uma.",
    badge: "Primeiros passos",
    date: "2026-04-15",
    readTime: "4 min",
    excerpt:
      "Um resumo direto das dúvidas que mais chegam ao suporte na primeira semana — para adiantar as respostas antes mesmo de você precisar perguntar.",
    sections: [
      {
        paragraphs: [
          "Depois de acompanhar centenas de novas assinaturas, algumas perguntas se repetem quase sempre nos primeiros dias. Reunimos as mais comuns aqui, com respostas diretas.",
        ],
      },
      {
        heading: "\"Em quantos aparelhos posso usar ao mesmo tempo?\"",
        paragraphs: [
          "Depende do plano contratado — verifique o limite de telas simultâneas no seu plano específico. Usar além do limite costuma derrubar uma das sessões ativas, não travar o conteúdo.",
        ],
      },
      {
        heading: "\"Por que um canal específico está com qualidade pior que os outros?\"",
        paragraphs: [
          "Cada canal vem de uma fonte diferente, então pode haver variação pontual de qualidade entre eles — isso é normal em qualquer serviço de IPTV. Se um canal específico estiver consistentemente pior por vários dias, vale reportar ao suporte, que costuma ter uma fonte alternativa para o mesmo canal.",
        ],
      },
      {
        heading: "\"Preciso reinstalar o aplicativo depois de trocar de Wi-Fi?\"",
        paragraphs: [
          "Não. O login fica salvo independentemente da rede. Só é necessário reinstalar em caso de troca de aparelho ou se o app apresentar erro que não se resolve com um reinício simples.",
        ],
      },
      {
        heading: "\"O que fazer se travar durante um jogo ou evento ao vivo?\"",
        paragraphs: [
          "Primeiro, feche e reabra o aplicativo — resolve boa parte dos casos rapidamente. Se persistir, trocar de canal e voltar ao original costuma reconectar num servidor mais estável. Eventos ao vivo têm pico de acesso simultâneo, então pequenas instabilidades pontuais são mais prováveis nesses momentos do que no dia a dia comum.",
        ],
      },
      {
        heading: "\"Como entro em contato se algo der errado?\"",
        paragraphs: [
          "O canal mais rápido é sempre o WhatsApp do suporte, informado no momento da assinatura. Quanto mais detalhes você conseguir passar (canal, horário, aparelho usado), mais rápido o diagnóstico.",
        ],
      },
    ],
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}
