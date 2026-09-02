import type { Metadata } from "next";
import Link from "next/link";
import { whatsappLink, TESTE_GRATIS_MSG } from "@/lib/data";

export const metadata: Metadata = {
  title: "Quem Somos",
  description: "Conheça a RockBrasil IPTV: um serviço focado em estabilidade, qualidade de imagem e suporte humano de verdade para quem quer assistir sem travar.",
  alternates: { canonical: "/quem-somos/" },
  openGraph: {
    url: "/quem-somos/",
    title: "Quem Somos | RockBrasil IPTV",
    description: "Conheça a RockBrasil IPTV: um serviço focado em estabilidade, qualidade de imagem e suporte humano de verdade para quem quer assistir sem travar.",
  },
  twitter: {
    title: "Quem Somos | RockBrasil IPTV",
    description: "Conheça a RockBrasil IPTV: um serviço focado em estabilidade, qualidade de imagem e suporte humano de verdade para quem quer assistir sem travar.",
  },
};

export default function QuemSomosPage() {
  return (
    <>
      <section className="hero page-hero" aria-labelledby="hero-heading">
        <div className="container">
          <div className="label">Quem somos</div>
          <h1 className="hero-title" id="hero-heading">Uma equipe focada em uma coisa só: streaming que funciona</h1>
          <p className="hero-desc">Não vendemos dez produtos diferentes. Existimos para entregar uma experiência de IPTV estável, com suporte de gente de verdade.</p>
        </div>
      </section>

      <section className="section" aria-labelledby="story-heading">
        <div className="container">
          <div className="label">Nossa forma de trabalhar</div>
          <h2 className="section-heading" id="story-heading" style={{ marginTop: "16px" }}>Por que a RockBrasil existe</h2>
          <div className="legal-content" style={{ marginTop: "32px" }}>
            <p>A RockBrasil IPTV nasceu de um problema simples de descrever e chato de viver: serviço de streaming que trava justamente na hora que mais importa — no jogo decisivo, na estreia da série, no fim de semana em família.</p>
            <p>Por isso, a operação é construída em torno de três prioridades: infraestrutura monitorada de perto (especialmente em horários de pico), atendimento feito por pessoas que conhecem o serviço de verdade, e transparência total sobre preço e condições — sem letra miúda.</p>
            <p>Preferimos crescer devagar e manter a qualidade do que prometer mais do que conseguimos entregar. É por isso que o teste grátis existe: para você ver a estabilidade funcionando antes de decidir.</p>
          </div>
        </div>
      </section>

      <section className="section how-bg" aria-labelledby="values-heading">
        <div className="container">
          <div className="label">O que nos guia</div>
          <h2 className="section-heading" id="values-heading" style={{ marginTop: "16px" }}>Princípios que aparecem no dia a dia</h2>

          <div className="diff-grid" style={{ marginTop: "48px" }}>
            <article className="card diff-card animate-on-scroll">
              <div className="diff-num">01</div>
              <h3>Foco em uma coisa só</h3>
              <p>Toda a operação existe para entregar streaming estável — sem distração de outros produtos.</p>
            </article>
            <article className="card diff-card animate-on-scroll">
              <div className="diff-num">02</div>
              <h3>Monitoramento contínuo</h3>
              <p>Acompanhamos a infraestrutura ao longo do dia, com atenção redobrada em horários de pico e grandes eventos.</p>
            </article>
            <article className="card diff-card animate-on-scroll">
              <div className="diff-num">03</div>
              <h3>Atendimento por pessoas reais</h3>
              <p>Quem responde no WhatsApp conhece o serviço e testa junto com você. Sem bot, sem fila longa.</p>
            </article>
            <article className="card diff-card animate-on-scroll">
              <div className="diff-num">04</div>
              <h3>Transparência total</h3>
              <p>Preço publicado, condições claras, sem fidelidade obrigatória e sem promessa que não conseguimos cumprir.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="final-cta" aria-labelledby="cta-heading">
        <div className="container">
          <div className="label">Teste IPTV grátis</div>
          <h2 className="section-heading" id="cta-heading" style={{ marginTop: "16px" }}>Vem ver como funciona</h2>
          <p className="section-subtext">Peça o teste grátis e avalie a estabilidade na sua própria casa.</p>
          <div className="final-actions">
            <a href={whatsappLink(TESTE_GRATIS_MSG)} className="btn btn-primary" target="_blank" rel="noopener">Solicitar teste no WhatsApp</a>
            <Link href="/planos/" className="btn btn-outline">Ver planos e preços</Link>
          </div>
        </div>
      </section>
    </>
  );
}
