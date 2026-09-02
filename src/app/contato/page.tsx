import type { Metadata } from "next";
import Link from "next/link";
import { whatsappLink, CONTACT_EMAIL } from "@/lib/data";
import { WhatsAppIcon, EmailIcon, HelpCircleIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Contato",
  description: "Fale com a RockBrasil IPTV pelo WhatsApp ou e-mail. Atendimento humano todos os dias para tirar dúvidas, pedir teste grátis ou resolver problemas.",
  alternates: { canonical: "/contato/" },
  openGraph: {
    url: "/contato/",
    title: "Contato | RockBrasil IPTV",
    description: "Fale com a RockBrasil IPTV pelo WhatsApp ou e-mail. Atendimento humano todos os dias para tirar dúvidas, pedir teste grátis ou resolver problemas.",
  },
  twitter: {
    title: "Contato | RockBrasil IPTV",
    description: "Fale com a RockBrasil IPTV pelo WhatsApp ou e-mail. Atendimento humano todos os dias para tirar dúvidas, pedir teste grátis ou resolver problemas.",
  },
};

export default function ContatoPage() {
  return (
    <>
      <section className="hero page-hero" aria-labelledby="hero-heading">
        <div className="container">
          <div className="label">Contato</div>
          <h1 className="hero-title" id="hero-heading">Fale com a gente</h1>
          <p className="hero-desc">Atendimento humano todos os dias da semana, direto pelo WhatsApp. Dúvida, teste grátis ou suporte técnico — é o mesmo canal.</p>
        </div>
      </section>

      <section className="section" aria-labelledby="contact-heading">
        <div className="container">
          <div className="contact-grid">
            <article className="card contact-card animate-on-scroll">
              <div className="benefit-icon"><WhatsAppIcon width={22} height={22} /></div>
              <h3>WhatsApp</h3>
              <p>Canal principal de atendimento. Resposta rápida, todos os dias da semana.</p>
              <a href={whatsappLink()} className="btn btn-primary" target="_blank" rel="noopener">Chamar no WhatsApp</a>
            </article>
            <article className="card contact-card animate-on-scroll">
              <div className="benefit-icon"><EmailIcon /></div>
              <h3>E-mail</h3>
              <p>Para assuntos que preferem registro por escrito, como questões de privacidade ou contratos.</p>
              <a href={`mailto:${CONTACT_EMAIL}`} className="btn btn-outline">{CONTACT_EMAIL}</a>
            </article>
            <article className="card contact-card animate-on-scroll">
              <div className="benefit-icon"><HelpCircleIcon /></div>
              <h3>Central de dúvidas</h3>
              <p>Antes de chamar o suporte, veja se a sua pergunta já está respondida na nossa página de FAQ.</p>
              <Link href="/faq/" className="btn btn-outline">Ver perguntas frequentes</Link>
            </article>
          </div>
        </div>
      </section>

      <section className="final-cta" aria-labelledby="cta-heading">
        <div className="container">
          <div className="label">Atendimento todos os dias</div>
          <h2 className="section-heading" id="cta-heading" style={{ marginTop: "16px" }}>Sem fila de espera, sem robô</h2>
          <p className="section-subtext">Fale com uma pessoa real e resolva sua dúvida em minutos.</p>
          <div className="final-actions">
            <a href={whatsappLink()} className="btn btn-primary" target="_blank" rel="noopener">Falar no WhatsApp</a>
          </div>
        </div>
      </section>
    </>
  );
}
