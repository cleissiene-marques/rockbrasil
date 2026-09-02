import type { Metadata } from "next";
import Link from "next/link";
import { whatsappLink, TESTE_GRATIS_MSG } from "@/lib/data";
import { WhatsAppIcon, CheckIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Teste IPTV Grátis — Peça agora pelo WhatsApp",
  description: "Peça seu teste IPTV grátis da RockBrasil em minutos. Sem cartão de crédito, sem cadastro extenso. Veja a qualidade antes de contratar.",
  alternates: { canonical: "/teste-gratis/" },
  openGraph: {
    url: "/teste-gratis/",
    title: "Teste IPTV Grátis — Peça agora pelo WhatsApp | RockBrasil IPTV",
    description: "Peça seu teste IPTV grátis da RockBrasil em minutos. Sem cartão de crédito, sem cadastro extenso. Veja a qualidade antes de contratar.",
  },
  twitter: {
    title: "Teste IPTV Grátis — Peça agora pelo WhatsApp | RockBrasil IPTV",
    description: "Peça seu teste IPTV grátis da RockBrasil em minutos. Sem cartão de crédito, sem cadastro extenso. Veja a qualidade antes de contratar.",
  },
};

export default function TesteGratisPage() {
  return (
    <>
      <section className="hero page-hero" aria-labelledby="hero-heading">
        <div className="container">
          <div className="label">Teste grátis antes de contratar</div>
          <h1 className="hero-title" id="hero-heading">Peça seu teste IPTV grátis agora</h1>
          <p className="hero-desc">
            Sem cadastro extenso, sem cartão de crédito e sem compromisso. Você fala com um atendente real pelo WhatsApp e recebe o acesso de teste em poucos minutos.
          </p>
          <div className="page-hero-actions">
            <a href={whatsappLink(TESTE_GRATIS_MSG)} className="btn btn-primary" target="_blank" rel="noopener">
              <WhatsAppIcon width={20} height={20} />
              Solicitar teste no WhatsApp
            </a>
          </div>
          <div className="final-trust" style={{ marginTop: "32px" }}>
            <span className="trust-item"><CheckIcon width={16} height={16} />Sem cartão de crédito</span>
            <span className="trust-item"><CheckIcon width={16} height={16} />Ativação em minutos</span>
            <span className="trust-item"><CheckIcon width={16} height={16} />Suporte humano 7 dias</span>
          </div>
        </div>
      </section>

      <section className="section how-bg" aria-labelledby="how-heading">
        <div className="container">
          <div className="label">Como funciona</div>
          <h2 className="section-heading" id="how-heading" style={{ marginTop: "16px" }}>Do pedido à primeira sessão em 4 passos</h2>

          <div className="steps-grid">
            <article className="step animate-on-scroll">
              <div className="step-num" aria-hidden="true">1</div>
              <h3>Solicite o teste grátis</h3>
              <p>Clique no botão do WhatsApp e informe qual aparelho vai usar — e só isso.</p>
            </article>
            <article className="step animate-on-scroll">
              <div className="step-num" aria-hidden="true">2</div>
              <h3>Receba o acesso</h3>
              <p>Nossa equipe indica o player mais adequado ao seu dispositivo e envia os dados de acesso.</p>
            </article>
            <article className="step animate-on-scroll">
              <div className="step-num" aria-hidden="true">3</div>
              <h3>Instale em minutos</h3>
              <p>A configuração leva cerca de cinco minutos, com o suporte acompanhando em tempo real.</p>
            </article>
            <article className="step animate-on-scroll">
              <div className="step-num" aria-hidden="true">4</div>
              <h3>Assista e decida com calma</h3>
              <p>Explore canais, filmes, séries e esportes durante o teste. Gostando, é só escolher o plano.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="checklist-heading">
        <div className="container">
          <div className="label">Antes de pedir</div>
          <h2 className="section-heading" id="checklist-heading" style={{ marginTop: "16px" }}>O que você precisa ter em mãos</h2>
          <ul className="plan-features" style={{ marginTop: "32px", maxWidth: "520px" }}>
            <li className="plan-feat">O aparelho que vai usar (Smart TV, TV Box, celular, Fire TV Stick, PC etc.)</li>
            <li className="plan-feat">Internet com pelo menos 15 Mbps reais para uma experiência confortável em HD</li>
            <li className="plan-feat">Acesso ao WhatsApp para falar com o suporte durante a instalação</li>
            <li className="plan-feat">Alguns minutos livres para configurar o player junto com a equipe</li>
          </ul>
        </div>
      </section>

      <section className="final-cta" aria-labelledby="cta-heading">
        <div className="container">
          <div className="label">Teste IPTV grátis</div>
          <h2 className="section-heading" id="cta-heading" style={{ marginTop: "16px" }}>Pronto para ver funcionando?</h2>
          <p className="section-subtext">Fale com a gente agora e comece o teste ainda hoje.</p>
          <div className="final-actions">
            <a href={whatsappLink(TESTE_GRATIS_MSG)} className="btn btn-primary" target="_blank" rel="noopener">Solicitar teste no WhatsApp</a>
            <Link href="/planos/" className="btn btn-outline">Ver planos e preços</Link>
          </div>
        </div>
      </section>
    </>
  );
}
