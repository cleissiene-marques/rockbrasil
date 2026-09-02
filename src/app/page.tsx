import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { whatsappLink, TESTE_GRATIS_MSG } from "@/lib/data";
import PlansGrid from "@/components/PlansGrid";
import {
  WhatsAppIcon,
  ArrowRightIcon,
  CheckIcon,
  BroadcastIcon,
  ClapperboardIcon,
  LayersIcon,
  TrophyIcon,
  SmileIcon,
  MicIcon,
  TvIcon,
  BoxIcon,
  AndroidTvIcon,
  FlameIcon,
  CastIcon,
  RemoteIcon,
  SmartphoneIcon,
  LaptopIcon,
  ProjectorIcon,
  WifiIcon,
  TabletIcon,
  LinkIcon,
} from "@/components/Icons";
import FaqAccordion from "@/components/FaqAccordion";
import BlogPreview from "@/components/BlogPreview";

export const metadata: Metadata = {
  title: "RockBrasil IPTV – Teste Grátis | IPTV Estável em HD, Full HD e 4K",
  description:
    "RockBrasil IPTV: transmissão estável em HD, Full HD e 4K com suporte humano no WhatsApp todos os dias. Peça seu teste grátis agora. Planos a partir de R$ 25/mês, sem fidelidade.",
  alternates: { canonical: "/" },
  openGraph: {
    url: "/",
    title: "RockBrasil IPTV – Teste Grátis | IPTV Estável em HD, Full HD e 4K",
    description:
      "RockBrasil IPTV: transmissão estável em HD, Full HD e 4K com suporte humano no WhatsApp. Peça seu teste grátis agora. Planos a partir de R$ 25/mês, sem fidelidade.",
  },
  twitter: {
    title: "RockBrasil IPTV – Teste Grátis | IPTV Estável em HD, Full HD e 4K",
    description: "RockBrasil IPTV: transmissão estável em HD, Full HD e 4K com suporte humano no WhatsApp.",
  },
};

const homeFaqs = [
  {
    pergunta: "Como funciona o teste IPTV grátis da RockBrasil?",
    resposta:
      "Você clica em qualquer botão do site e envia uma mensagem no WhatsApp. Informamos qual aparelho vai usar, nossa equipe indica o player certo e envia o acesso de teste sem custo. Não pedimos cartão de crédito nem cadastro extenso.",
  },
  {
    pergunta: "Qual velocidade de internet preciso para assistir sem travamentos?",
    resposta:
      "Para IPTV HD, cerca de 15 Mbps de velocidade real já entregam uma experiência confortável. Para Full HD, recomendamos 25 Mbps, e para 4K, pelo menos 45 Mbps. Nossa equipe ajusta a qualidade conforme a sua conexão.",
  },
  {
    pergunta: "Em quais aparelhos a RockBrasil IPTV funciona?",
    resposta:
      "Funciona em Smart TV (Samsung, LG, TCL), TV Box, Android TV, Fire TV Stick, Chromecast com Google TV, Roku, celulares Android e iPhone, notebook e PC. Ficou em dúvida? Mande o nome do aparelho no WhatsApp antes de contratar.",
  },
  {
    pergunta: "Existe fidelidade ou multa por cancelamento?",
    resposta:
      "Não. Nenhum plano tem fidelidade obrigatória. Você contrata pelo período escolhido e decide livremente se renova ou não ao final.",
  },
  {
    pergunta: "Posso assistir em mais de uma tela ao mesmo tempo?",
    resposta:
      "Sim. O acesso padrão é individual, mas é possível contratar telas adicionais para que várias pessoas assistam ao mesmo tempo em aparelhos diferentes.",
  },
  {
    pergunta: "Como é feito o pagamento?",
    resposta: "Aceitamos Pix, cartão de crédito e boleto bancário. A ativação ocorre em poucos minutos após a confirmação do pagamento.",
  },
];

const reviews = [
  {
    quote:
      "Já tinha passado por dois serviços antes e sempre travava justamente no segundo tempo do jogo. A RockBrasil é diferente — nem nos jogos de domingo à noite trava. Renovei pelo segundo semestre sem pensar duas vezes.",
    initials: "BT",
    name: "Bruno Tavares",
    location: "Campo Grande, MS · Assinante há 8 meses",
    stars: 5,
  },
  {
    quote:
      "Confesso que sou péssima com tecnologia e imaginei que ia precisar chamar meu sobrinho pra instalar. Mas o suporte ficou comigo pelo WhatsApp do começo ao fim. Em 10 minutos estava assistindo na Smart TV.",
    initials: "FR",
    name: "Fernanda Rocha",
    location: "Niterói, RJ · Assinante há 6 meses",
    stars: 5,
  },
  {
    quote:
      "Uso um Fire TV Stick 4K na sala e o celular quando estou na estrada. O que mais me chamou atenção foi a consistência — a qualidade é a mesma em HD independente do horário que eu ligo.",
    initials: "TA",
    name: "Thiago Almeida",
    location: "Uberlândia, MG · Assinante há 9 meses",
    stars: 5,
  },
  {
    quote:
      "Somos quatro em casa e cada um quer uma coisa. Meu marido nos esportes, eu nas séries e as crianças nos desenhos. A RockBrasil tem tudo isso organizado direitinho. Sem briga pelo controle.",
    initials: "RS",
    name: "Renata Souza Lima",
    location: "Joinville, SC · Assinante há 7 meses",
    stars: 5,
  },
  {
    quote:
      "O que me segurou aqui foi o atendimento. Tive um problema com o aplicativo depois de uma atualização e em menos de 15 minutos resolveram, de madrugada mesmo. Isso vale mais do que qualquer desconto.",
    initials: "EN",
    name: "Eduardo Nascimento",
    location: "João Pessoa, PB · Assinante há 10 meses",
    stars: 5,
  },
  {
    quote:
      "Comecei no plano mensal porque desconfio de tudo que promete demais. Fiquei dois meses testando, gostei da consistência e migrei pro semestral. Qualidade não cai com o tempo — isso é raro.",
    initials: "VC",
    name: "Vanessa Cordeiro",
    location: "Ribeirão Preto, SP · Assinante há 5 meses",
    stars: 4,
  },
  {
    quote:
      "Assisto muito depois da meia-noite, depois que os pequenos dormem, e é justamente aí que outros serviços costumavam cair. Com a RockBrasil nunca precisei ficar reiniciando o app no meio de um filme.",
    initials: "GP",
    name: "Gustavo Pires",
    location: "Londrina, PR · Assinante há 8 meses",
    stars: 5,
  },
  {
    quote:
      "Troquei do plano mensal pro anual assim que vi que a qualidade se mantinha igual mês após mês. Mandei mensagem perguntando sobre a troca e resolveram na hora, sem burocracia.",
    initials: "IM",
    name: "Isabela Martins",
    location: "Natal, RN · Assinante há 4 meses",
    stars: 5,
  },
  {
    quote:
      "Tenho uma TV Box antiga que eu achava que não ia aguentar mais nada. O suporte indicou o player certo pra ela e funcionou de primeira, sem travar. Nem precisei comprar aparelho novo.",
    initials: "RF",
    name: "Rodrigo Farias",
    location: "Caxias do Sul, RS · Assinante há 12 meses",
    stars: 5,
  },
  {
    quote:
      "O catálogo é organizado de um jeito que eu acho o que quero em segundos, sem ficar rolando lista infinita. Pequeno detalhe que faz muita diferença no dia a dia.",
    initials: "DX",
    name: "Débora Xavier",
    location: "São Luís, MA · Assinante há 6 meses",
    stars: 5,
  },
];

export default function HomePage() {
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "RockBrasil IPTV",
    description: "Serviço de IPTV com transmissão estável em HD, Full HD e 4K, suporte humano no WhatsApp e planos sem fidelidade.",
    brand: { "@id": "https://rockbrasil40anos.com.br/#organization" },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "2300",
      bestRating: "5",
    },
    offers: [
      { "@type": "Offer", name: "Plano Mensal", price: "25.00", priceCurrency: "BRL", availability: "https://schema.org/InStock" },
      { "@type": "Offer", name: "Plano Trimestral", price: "65.00", priceCurrency: "BRL", availability: "https://schema.org/InStock" },
      { "@type": "Offer", name: "Plano Semestral", price: "130.00", priceCurrency: "BRL", availability: "https://schema.org/InStock" },
      { "@type": "Offer", name: "Plano Anual", price: "250.00", priceCurrency: "BRL", availability: "https://schema.org/InStock" },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: homeFaqs.map((f) => ({
      "@type": "Question",
      name: f.pergunta,
      acceptedAnswer: { "@type": "Answer", text: f.resposta },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* ===== HERO ===== */}
      <section className="hero" aria-labelledby="hero-heading">
        <div className="container">
          <div className="hero-grid">
            <div className="hero-content">
              <div className="hero-badge">
                <span className="label">Teste grátis antes de contratar</span>
              </div>

              <h1 className="hero-title" id="hero-heading">
                IPTV <span className="hl-1">estável</span> em<br />
                HD, Full HD e <span className="hl-2">4K</span><br />
                sem travar
              </h1>

              <p className="hero-desc">
                A RockBrasil IPTV reúne canais ao vivo, filmes, séries, esportes e conteúdo infantil com transmissão firme nos horários de pico e suporte humano no WhatsApp todos os dias. Peça o teste, instale em minutos e só decida depois de ver funcionando na sua casa.
              </p>

              <div className="hero-actions">
                <a href={whatsappLink(TESTE_GRATIS_MSG)} className="btn btn-primary" target="_blank" rel="noopener">
                  <WhatsAppIcon width={20} height={20} />
                  Solicitar Teste Grátis
                </a>
                <Link href="/planos/" className="btn btn-outline">
                  Ver planos e preços
                  <ArrowRightIcon />
                </Link>
              </div>

              <div className="hero-social-proof">
                <div className="hero-rating">
                  <div className="stars" aria-label="4.9 de 5 estrelas">
                    <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                  </div>
                  <div>
                    <div className="hero-rating-score">4.9/5</div>
                    <div className="hero-rating-text">2.300 avaliações de assinantes</div>
                  </div>
                </div>
                <div className="hero-divider-v" aria-hidden="true"></div>
                <p className="hero-proof-item"><strong>+5.000</strong> assinantes ativos</p>
                <div className="hero-divider-v" aria-hidden="true"></div>
                <p className="hero-proof-item">Ativação em <strong>&lt;10 min</strong></p>
              </div>
            </div>

            {/* Stability Monitor */}
            <div className="hero-visual" aria-hidden="true">
              <div className="hero-mockup">
                <div className="monitor-bar">
                  <span className="monitor-live-dot"></span>
                  <span className="monitor-bar-label">Monitor de transmissão</span>
                  <span className="monitor-bar-status">Operacional</span>
                </div>
                <div className="monitor-body">
                  <div className="monitor-graph-head">
                    <div>
                      <div className="monitor-graph-title">Estabilidade do sinal</div>
                      <div className="monitor-graph-sub">Últimas 24 horas</div>
                    </div>
                    <div className="monitor-uptime">
                      <span className="monitor-uptime-val">99.9%</span>
                      <span className="monitor-uptime-lbl">sem quedas</span>
                    </div>
                  </div>

                  <svg className="monitor-graph" viewBox="0 0 320 80" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="graphFill" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.35" />
                        <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    <path d="M0,32 C40,28 60,34 100,29 C140,24 160,30 200,26 C240,22 260,27 320,24 L320,80 L0,80 Z" fill="url(#graphFill)" />
                    <path d="M0,32 C40,28 60,34 100,29 C140,24 160,30 200,26 C240,22 260,27 320,24" fill="none" stroke="var(--accent)" strokeWidth="2.5" strokeLinecap="round" />
                  </svg>

                  <div className="monitor-now">
                    <span className="monitor-now-dot"></span>
                    <div>
                      <strong>Futebol ao vivo — Transmissão em destaque</strong>
                      <span>Transmitindo em 4K · 0 travamentos hoje</span>
                    </div>
                  </div>

                  <div className="mockup-stats">
                    <div className="mstat"><div className="mstat-val">0</div><div className="mstat-lbl">Travamentos hoje</div></div>
                    <div className="mstat"><div className="mstat-val">4K</div><div className="mstat-lbl">Máx. resolução</div></div>
                    <div className="mstat"><div className="mstat-val">24/7</div><div className="mstat-lbl">Monitorado</div></div>
                  </div>
                </div>
              </div>
              <div className="hero-floating">
                <div className="hf-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="M12 6v6l4 2"/></svg>
                </div>
                <div className="hf-text">
                  <strong>Teste ativado em &lt;10 min</strong>
                  <span>sem cartão de crédito</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== STATS STRIP ===== */}
      <section className="stats-strip" aria-label="Números da RockBrasil IPTV">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item animate-on-scroll">
              <div className="stat-val">4.9/5</div>
              <div className="stat-label">Avaliação média em 2.300 avaliações</div>
            </div>
            <div className="stat-item animate-on-scroll">
              <div className="stat-val">&lt;10 min</div>
              <div className="stat-label">Do pedido do teste à primeira imagem na tela</div>
            </div>
            <div className="stat-item animate-on-scroll">
              <div className="stat-val">7 dias</div>
              <div className="stat-label">Suporte no WhatsApp todos os dias da semana</div>
            </div>
            <div className="stat-item animate-on-scroll">
              <div className="stat-val">R$ 20,83</div>
              <div className="stat-label">Menor valor por mês no plano anual</div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== LIFESTYLE ===== */}
      <section className="lifestyle-section" aria-labelledby="lifestyle-heading">
        <div className="lifestyle-media">
          <Image
            src="/images/sala-sofa.webp"
            alt="Sala de estar à noite, iluminada apenas pela luz da TV"
            fill
            sizes="100vw"
            className="lifestyle-img"
            priority
          />
          <div className="lifestyle-overlay" aria-hidden="true"></div>
        </div>
        <div className="container lifestyle-inner">
          <div className="lifestyle-content">
            <div className="label">Sem pressa, sem travar</div>
            <h2 className="section-heading" id="lifestyle-heading" style={{ marginTop: "16px" }}>
              Feito pra ficar ligado o quanto você quiser
            </h2>
            <p className="section-subtext" style={{ marginTop: "16px", marginInline: 0 }}>
              Sem correr pra reiniciar o app no meio do episódio, sem justificar travamento pro resto da família. É só sentar e assistir.
            </p>
            <div className="hero-actions">
              <a href={whatsappLink(TESTE_GRATIS_MSG)} className="btn btn-primary" target="_blank" rel="noopener">
                <WhatsAppIcon width={20} height={20} />
                Solicitar Teste Grátis
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PLANS ===== */}
      <section className="section how-bg" aria-labelledby="plans-heading">
        <div className="container">
          <div className="label">Planos</div>
          <h2 className="section-heading" id="plans-heading" style={{ marginTop: "16px" }}>
            Planos IPTV a partir de R$ 25 por mês
          </h2>
          <p className="plans-note">
            Quatro opções de assinatura, todas com o mesmo catálogo e suporte via WhatsApp.
          </p>

          <PlansGrid />

          <div className="plans-footer">
            <span className="plans-footer-item"><CheckIcon width={14} height={14} />Pix, cartão ou boleto</span>
            <span className="plans-footer-item"><CheckIcon width={14} height={14} />Ativação em minutos</span>
            <span className="plans-footer-item"><CheckIcon width={14} height={14} />Sem fidelidade</span>
            <span className="plans-footer-item"><CheckIcon width={14} height={14} />Suporte 7 dias por semana</span>
          </div>
        </div>
      </section>

      {/* ===== BENEFITS ===== */}
      <section className="section" aria-labelledby="benefits-heading">
        <div className="container">
          <div className="label">Benefícios</div>
          <h2 className="section-heading" id="benefits-heading" style={{ marginTop: "16px" }}>
            Por que escolher a RockBrasil IPTV
          </h2>
          <p className="section-subtext">
            Reunimos em um único serviço os pontos que mais pesam na experiência de quem assiste todos os dias: estabilidade, qualidade de imagem, suporte real e preço justo.
          </p>

          <div className="benefits-grid">
            <article className="card benefit-card animate-on-scroll">
              <div className="benefit-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              </div>
              <h3>Estabilidade em primeiro lugar</h3>
              <p>Infraestrutura distribuída e balanceamento de carga para manter a transmissão firme nos horários de pico — final de semana, jogo decisivo, horário nobre.</p>
            </article>
            <article className="card benefit-card animate-on-scroll">
              <div className="benefit-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>
              </div>
              <h3>HD, Full HD e 4K quando disponível</h3>
              <p>Cada conteúdo é entregue na melhor definição possível para a sua conexão. Você assiste em HD, Full HD ou 4K sem precisar ajustar nada manualmente.</p>
            </article>
            <article className="card benefit-card animate-on-scroll">
              <div className="benefit-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
              </div>
              <h3>Instalação simples, sem técnico</h3>
              <p>Nada de antena, cabo ou visita agendada. A configuração é feita pelo próprio aparelho. Se preferir, o suporte acompanha em tempo real pelo WhatsApp.</p>
            </article>
            <article className="card benefit-card animate-on-scroll">
              <div className="benefit-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 6h16M4 10h16M4 14h10M4 18h6"/></svg>
              </div>
              <h3>Catálogo atualizado de verdade</h3>
              <p>Filmes, temporadas novas e categorias recebem manutenção constante. Você abre o aplicativo e encontra o que procura, com qualidade e organização.</p>
            </article>
            <article className="card benefit-card animate-on-scroll">
              <div className="benefit-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
              </div>
              <h3>Suporte que responde de verdade</h3>
              <p>Atendimento humano, em português, todos os dias da semana. Dúvida de instalação, troca de aparelho ou ajuste de qualidade: resolvemos junto com você.</p>
            </article>
            <article className="card benefit-card animate-on-scroll">
              <div className="benefit-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="5" y="2" width="14" height="20" rx="2"/><path d="M12 18h.01"/></svg>
              </div>
              <h3>Compatibilidade ampla</h3>
              <p>IPTV para Smart TV, TV Box, Android TV, Fire TV Stick, Roku, Chromecast, celulares Android, iPhone, notebook e PC. Funciona no aparelho que você já tem.</p>
            </article>
            <article className="card benefit-card animate-on-scroll">
              <div className="benefit-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M1.05 12S5 4.05 12 4.05 22.95 12 22.95 12 19 19.95 12 19.95 1.05 12 1.05 12z"/><circle cx="12" cy="12" r="3"/></svg>
              </div>
              <h3>Funciona com internet comum</h3>
              <p>A partir de 15 Mbps já é possível assistir com conforto em HD. Nossa equipe ajusta o player conforme a sua velocidade real, não a contratada.</p>
            </article>
            <article className="card benefit-card animate-on-scroll">
              <div className="benefit-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
              </div>
              <h3>Privacidade e dados protegidos</h3>
              <p>Coletamos o mínimo necessário para ativar e dar suporte ao seu acesso, seguindo a LGPD. Nada de cadastro desnecessário ou dados compartilhados com terceiros.</p>
            </article>
            <article className="card benefit-card animate-on-scroll">
              <div className="benefit-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
              </div>
              <h3>Preço claro, sem surpresa</h3>
              <p>Os valores estão publicados nesta página e não mudam depois da contratação. Sem taxa de adesão, sem reajuste surpresa, sem fidelidade obrigatória.</p>
            </article>
          </div>
        </div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section className="section how-bg" aria-labelledby="how-heading">
        <div className="container">
          <div className="label">Como funciona</div>
          <h2 className="section-heading" id="how-heading" style={{ marginTop: "16px" }}>
            Do primeiro contato à primeira sessão em 4 passos
          </h2>
          <p className="section-subtext">
            Você não precisa entender de tecnologia para começar. O processo inteiro acontece pelo WhatsApp e costuma levar menos de 10 minutos.
          </p>

          <div className="steps-grid">
            <article className="step animate-on-scroll">
              <div className="step-num" aria-hidden="true">1</div>
              <h3>Solicite o teste grátis</h3>
              <p>Clique em qualquer botão do site e envie uma mensagem no WhatsApp. Você informa qual aparelho vai usar — e só isso.</p>
            </article>
            <article className="step animate-on-scroll">
              <div className="step-num" aria-hidden="true">2</div>
              <h3>Receba o acesso</h3>
              <p>Nossa equipe indica o player mais adequado ao seu dispositivo e envia os dados de acesso junto com o guia de instalação.</p>
            </article>
            <article className="step animate-on-scroll">
              <div className="step-num" aria-hidden="true">3</div>
              <h3>Instale em minutos</h3>
              <p>A configuração leva cerca de cinco minutos. O suporte acompanha em tempo real e valida a qualidade da imagem com você.</p>
            </article>
            <article className="step animate-on-scroll">
              <div className="step-num" aria-hidden="true">4</div>
              <h3>Assista e decida com calma</h3>
              <p>Explore canais ao vivo, filmes, séries e esportes durante o teste. Gostando, é só escolher o plano. Sem pressão.</p>
            </article>
          </div>

          <div className="steps-cta">
            <a href={whatsappLink(TESTE_GRATIS_MSG)} className="btn btn-primary" target="_blank" rel="noopener">
              <WhatsAppIcon width={20} height={20} />
              Começar pelo teste grátis
            </a>
          </div>
        </div>
      </section>

      {/* ===== DIFFERENTIATION ===== */}
      <section className="section" aria-labelledby="diff-heading">
        <div className="container">
          <div className="diff-intro">
            <div>
              <div className="label">Diferenciais</div>
              <h2 className="section-heading" id="diff-heading" style={{ marginTop: "16px" }}>
                Por que a RockBrasil é diferente de qualquer outro IPTV
              </h2>
            </div>
            <div>
              <p className="section-subtext" style={{ marginTop: 0 }}>
                Qualquer serviço promete estabilidade. A diferença aparece na rotina: no jogo de domingo às 22h, na madrugada de sábado, quando o sistema trava e você precisa de alguém. É aí que a RockBrasil se separa do resto.
              </p>
            </div>
          </div>

          <div className="diff-grid">
            <article className="card diff-card animate-on-scroll">
              <div className="diff-num">01</div>
              <h3>Foco em uma coisa só</h3>
              <p>Não vendemos dez serviços diferentes. Nossa operação existe para entregar uma experiência de streaming que funciona de verdade, sem distração de produto.</p>
            </article>
            <article className="card diff-card animate-on-scroll">
              <div className="diff-num">02</div>
              <h3>Monitoramento contínuo</h3>
              <p>A infraestrutura é acompanhada ao longo do dia, com atenção redobrada nos horários de pico e em grandes eventos esportivos e estreias.</p>
            </article>
            <article className="card diff-card animate-on-scroll">
              <div className="diff-num">03</div>
              <h3>Atendimento por pessoas reais</h3>
              <p>Quem responde conhece o serviço, testa junto com você e sabe indicar o aplicativo certo para cada aparelho. Sem bot, sem fila de espera longa.</p>
            </article>
            <article className="card diff-card animate-on-scroll">
              <div className="diff-num">04</div>
              <h3>Onboarding acompanhado</h3>
              <p>O primeiro acesso é acompanhado do começo ao fim: instalação, ajuste de qualidade e dicas de uso no WhatsApp. Você nunca fica sem resposta.</p>
            </article>
            <article className="card diff-card animate-on-scroll">
              <div className="diff-num">05</div>
              <h3>Transparência total</h3>
              <p>Preço publicado, condições claras, sem fidelidade obrigatória e sem promessa que a gente não consegue cumprir. O que está nesta página é o que você recebe.</p>
            </article>
            <article className="card diff-card animate-on-scroll">
              <div className="diff-num">06</div>
              <h3>Clientes que ficam e voltam</h3>
              <p>Boa parte de quem entra pelo teste renova e continua. A avaliação média de 4.9/5 vem justamente de quem usa no dia a dia, não apenas nos primeiros dias.</p>
            </article>
          </div>
        </div>
      </section>

      {/* ===== CONTENT CATEGORIES ===== */}
      <section className="section content-bg" aria-labelledby="content-heading">
        <div className="container">
          <div className="label">Conteúdo</div>
          <h2 className="section-heading" id="content-heading" style={{ marginTop: "16px" }}>
            Tudo separado por categoria, do jeito que se acha rápido
          </h2>
          <p className="section-subtext">
            A navegação foi pensada para você chegar ao que quer assistir em poucos cliques, sem se perder em listas infinitas.
          </p>

          <div className="categories-grid">
            <article className="card cat-card animate-on-scroll">
              <span className="cat-emoji" aria-hidden="true"><BroadcastIcon width={22} height={22} /></span>
              <div className="cat-badge">AO VIVO</div>
              <h3>Canais ao vivo</h3>
              <p>Programação aberta e fechada organizada por categoria, com troca rápida entre canais e guia de programação atualizado.</p>
            </article>
            <article className="card cat-card animate-on-scroll">
              <span className="cat-emoji" aria-hidden="true"><ClapperboardIcon width={22} height={22} /></span>
              <div className="cat-badge">+50k títulos</div>
              <h3>Filmes sob demanda</h3>
              <p>Um acervo amplo de longas separados por gênero, ano e coleção, com lançamentos entrando de forma contínua.</p>
            </article>
            <article className="card cat-card animate-on-scroll">
              <span className="cat-emoji" aria-hidden="true"><LayersIcon width={22} height={22} /></span>
              <div className="cat-badge">Séries</div>
              <h3>Séries e temporadas</h3>
              <p>Episódios organizados por temporada, com marcação de onde você parou e adição de episódios novos ao lançamento.</p>
            </article>
            <article className="card cat-card animate-on-scroll">
              <span className="cat-emoji" aria-hidden="true"><TrophyIcon width={22} height={22} /></span>
              <div className="cat-badge">Prioridade HD</div>
              <h3>Esportes</h3>
              <p>Transmissões esportivas com prioridade de servidor nos horários de maior audiência, para reduzir travamentos no momento decisivo.</p>
            </article>
            <article className="card cat-card animate-on-scroll">
              <span className="cat-emoji" aria-hidden="true"><SmileIcon width={22} height={22} /></span>
              <div className="cat-badge">Infantil</div>
              <h3>Conteúdo infantil</h3>
              <p>Uma área dedicada com desenhos e conteúdo educativo, fácil de navegar até para quem ainda não sabe ler direito.</p>
            </article>
            <article className="card cat-card animate-on-scroll">
              <span className="cat-emoji" aria-hidden="true"><MicIcon width={22} height={22} /></span>
              <div className="cat-badge">Variedades</div>
              <h3>Documentários e variedades</h3>
              <p>Documentários, culinária, natureza, tecnologia e programas de auditório reunidos em categorias próprias para facilitar a busca.</p>
            </article>
          </div>
        </div>
      </section>

      {/* ===== COMPATIBILITY ===== */}
      <section className="section" aria-labelledby="compat-heading">
        <div className="container">
          <div className="label">Compatibilidade</div>
          <h2 className="section-heading" id="compat-heading" style={{ marginTop: "16px" }}>
            Funciona no aparelho que você já tem
          </h2>
          <p className="section-subtext">
            IPTV para Smart TV, TV Box, Android TV, Fire TV Stick, Roku, Chromecast, celulares e mais. Sem comprar nada novo.
          </p>

          <div className="compat-grid">
            <div className="compat-item animate-on-scroll">
              <div className="compat-icon"><TvIcon width={20} height={20} /></div>
              <div className="compat-info">
                <strong>Smart TV</strong>
                <span>Samsung, LG, TCL, Philco e outras</span>
              </div>
            </div>
            <div className="compat-item animate-on-scroll">
              <div className="compat-icon"><BoxIcon width={20} height={20} /></div>
              <div className="compat-info">
                <strong>TV Box</strong>
                <span>Aparelhos Android que transformam qualquer TV</span>
              </div>
            </div>
            <div className="compat-item animate-on-scroll">
              <div className="compat-icon"><AndroidTvIcon width={20} height={20} /></div>
              <div className="compat-info">
                <strong>Android TV</strong>
                <span>TVs e receptores com Google Play</span>
              </div>
            </div>
            <div className="compat-item animate-on-scroll">
              <div className="compat-icon"><FlameIcon width={20} height={20} /></div>
              <div className="compat-info">
                <strong>Fire TV Stick</strong>
                <span>Lite ao 4K Max, todos os modelos</span>
              </div>
            </div>
            <div className="compat-item animate-on-scroll">
              <div className="compat-icon"><CastIcon width={20} height={20} /></div>
              <div className="compat-info">
                <strong>Chromecast</strong>
                <span>Com Google TV ou espelhando o celular</span>
              </div>
            </div>
            <div className="compat-item animate-on-scroll">
              <div className="compat-icon"><RemoteIcon width={20} height={20} /></div>
              <div className="compat-info">
                <strong>Roku</strong>
                <span>Roku Express, Streaming Stick e Roku TV</span>
              </div>
            </div>
            <div className="compat-item animate-on-scroll">
              <div className="compat-icon"><SmartphoneIcon width={20} height={20} /></div>
              <div className="compat-info">
                <strong>Android e iPhone</strong>
                <span>Celulares e tablets com dados ou Wi-Fi</span>
              </div>
            </div>
            <div className="compat-item animate-on-scroll">
              <div className="compat-icon"><LaptopIcon width={20} height={20} /></div>
              <div className="compat-info">
                <strong>Notebook e PC</strong>
                <span>Windows, macOS e Linux via player</span>
              </div>
            </div>
            <div className="compat-item animate-on-scroll">
              <div className="compat-icon"><ProjectorIcon width={20} height={20} /></div>
              <div className="compat-info">
                <strong>Projetores smart</strong>
                <span>Modelos com Android TV embarcado</span>
              </div>
            </div>
            <div className="compat-item animate-on-scroll">
              <div className="compat-icon"><WifiIcon width={20} height={20} /></div>
              <div className="compat-info">
                <strong>Rede doméstica</strong>
                <span>Wi-Fi ou cabo, uso simultâneo por plano</span>
              </div>
            </div>
            <div className="compat-item animate-on-scroll">
              <div className="compat-icon"><TabletIcon width={20} height={20} /></div>
              <div className="compat-info">
                <strong>iPad e Apple TV</strong>
                <span>Compatível via App Store e players</span>
              </div>
            </div>
            <div className="compat-item animate-on-scroll">
              <div className="compat-icon"><LinkIcon width={20} height={20} /></div>
              <div className="compat-info">
                <strong>Outros dispositivos</strong>
                <span>Confirme no WhatsApp antes de contratar</span>
              </div>
            </div>
          </div>
          <p className="compat-note">
            Ficou em dúvida sobre o seu modelo?{" "}
            <a href={whatsappLink()} target="_blank" rel="noopener">Mande o nome do aparelho no WhatsApp</a>{" "}
            e confirmamos a compatibilidade antes de qualquer pagamento.
          </p>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="section reviews-bg" aria-labelledby="reviews-heading">
        <div className="container">
          <div className="label">Avaliações</div>
          <h2 className="section-heading" id="reviews-heading" style={{ marginTop: "16px" }}>
            O que dizem os assinantes da RockBrasil IPTV
          </h2>

          <div className="reviews-header">
            <p className="section-subtext" style={{ marginTop: "16px" }}>
              Depoimentos de clientes reais sobre estabilidade, instalação, qualidade de imagem e atendimento.
            </p>
            <div className="review-agg" aria-label="Avaliação média">
              <div className="stars" aria-hidden="true"><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div>
              <div className="review-agg-score">4.9</div>
              <div className="review-agg-sub">Avaliação média de 4.9 de 5</div>
              <div className="review-agg-count">Baseada em 2.300 avaliações de assinantes</div>
              <br />
              <a href={whatsappLink(TESTE_GRATIS_MSG)} className="btn btn-primary" style={{ fontSize: ".85rem", padding: "10px 20px" }} target="_blank" rel="noopener">Quero testar grátis</a>
            </div>
          </div>

          <div className="reviews-grid">
            {reviews.map((review) => (
              <article className="card review-card animate-on-scroll" key={review.name}>
                <div className="review-stars" aria-label={`${review.stars} de 5 estrelas`}>
                  <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                </div>
                <p className="review-quote">{review.quote}</p>
                <div className="review-author">
                  <div className="review-avatar" aria-hidden="true">{review.initials}</div>
                  <div>
                    <div className="review-name">{review.name}</div>
                    <div className="review-location">{review.location}</div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <BlogPreview />

      {/* ===== FAQ ===== */}
      <section className="section" aria-labelledby="faq-heading">
        <div className="container">
          <div style={{ textAlign: "center" }}>
            <div className="label">FAQ</div>
            <h2 className="section-heading" id="faq-heading" style={{ marginTop: "16px" }}>
              Dúvidas sobre a RockBrasil IPTV
            </h2>
            <p className="section-subtext" style={{ marginInline: "auto" }}>
              Reunimos as perguntas que mais chegam no WhatsApp. A lista completa está na página de{" "}
              <Link href="/faq/" style={{ color: "var(--accent)" }}>perguntas frequentes</Link>.
            </p>
          </div>

          <FaqAccordion items={homeFaqs} />

          <p className="faq-footer">
            Não encontrou o que precisava?{" "}
            <a href={whatsappLink()} target="_blank" rel="noopener">Pergunte direto no WhatsApp</a> — respondemos todos os dias.
          </p>
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section className="final-cta" aria-labelledby="cta-heading">
        <div className="container">
          <div className="label">Teste IPTV grátis</div>
          <h2 className="section-heading" id="cta-heading" style={{ marginTop: "16px" }}>
            Peça agora o seu teste IPTV grátis
          </h2>
          <p className="section-subtext">
            Sem cadastro extenso, sem cartão de crédito e sem compromisso. Você fala com um atendente real e recebe o acesso em menos de 10 minutos.
          </p>

          <div className="final-actions">
            <a href={whatsappLink(TESTE_GRATIS_MSG)} className="btn btn-primary" target="_blank" rel="noopener">
              <WhatsAppIcon width={20} height={20} />
              Solicitar teste no WhatsApp
            </a>
            <Link href="/planos/" className="btn btn-outline">
              Ver planos e preços
              <ArrowRightIcon />
            </Link>
          </div>

          <div className="final-trust">
            <span className="trust-item"><CheckIcon width={16} height={16} />Sem cartão de crédito</span>
            <span className="trust-item"><CheckIcon width={16} height={16} />Ativação em menos de 10 minutos</span>
            <span className="trust-item"><CheckIcon width={16} height={16} />Suporte humano 7 dias por semana</span>
            <span className="trust-item"><CheckIcon width={16} height={16} />Sem fidelidade obrigatória</span>
          </div>
        </div>
      </section>
    </>
  );
}
