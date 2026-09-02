import type { Metadata } from "next";
import { whatsappLink } from "@/lib/data";
import { CheckIcon } from "@/components/Icons";
import FaqAccordion from "@/components/FaqAccordion";
import PlansGrid from "@/components/PlansGrid";

export const metadata: Metadata = {
  title: "Planos IPTV a partir de R$ 25/mês",
  description:
    "Conheça os planos IPTV da RockBrasil: Mensal, Trimestral, Semestral e Anual, todos com acesso completo, sem fidelidade. Pagamento via Pix, cartão ou boleto.",
  alternates: { canonical: "/planos/" },
  openGraph: {
    url: "/planos/",
    title: "Planos IPTV a partir de R$ 25/mês | RockBrasil IPTV",
    description:
      "Conheça os planos IPTV da RockBrasil: Mensal, Trimestral, Semestral e Anual, todos com acesso completo, sem fidelidade. Pagamento via Pix, cartão ou boleto.",
  },
  twitter: {
    title: "Planos IPTV a partir de R$ 25/mês | RockBrasil IPTV",
    description:
      "Conheça os planos IPTV da RockBrasil: Mensal, Trimestral, Semestral e Anual, todos com acesso completo, sem fidelidade. Pagamento via Pix, cartão ou boleto.",
  },
};

const payFaqs = [
  {
    pergunta: "Quais formas de pagamento vocês aceitam?",
    resposta: "Aceitamos Pix, cartão de crédito e boleto bancário. A ativação ocorre em poucos minutos após a confirmação do pagamento.",
  },
  {
    pergunta: "Posso trocar de plano depois de contratar?",
    resposta:
      "Sim. Você pode migrar para um plano mais longo a qualquer momento, aproveitando o tempo já pago no plano atual. É só falar com o suporte no WhatsApp.",
  },
  {
    pergunta: "O que acontece quando o plano vence?",
    resposta: "O acesso é interrompido até a renovação. Não há cobrança automática: você decide se e quando renovar, sem multa por não continuar.",
  },
];

export default function PlanosPage() {
  return (
    <>
      <section className="hero page-hero" aria-labelledby="hero-heading">
        <div className="container">
          <div className="label">Planos</div>
          <h1 className="hero-title" id="hero-heading">Planos IPTV para todo tipo de assinante</h1>
          <p className="hero-desc">
            Todos os planos incluem o mesmo acesso completo a canais, filmes e séries. A diferença está no tempo de contratação — e na economia que você faz escolhendo períodos maiores. Sem fidelidade em nenhum deles.
          </p>
        </div>
      </section>

      <section className="section" aria-labelledby="plans-heading">
        <div className="container">
          <PlansGrid />

          <div className="plans-footer">
            <span className="plans-footer-item"><CheckIcon width={14} height={14} />Pix, cartão ou boleto</span>
            <span className="plans-footer-item"><CheckIcon width={14} height={14} />Ativação em minutos</span>
            <span className="plans-footer-item"><CheckIcon width={14} height={14} />Sem fidelidade</span>
            <span className="plans-footer-item"><CheckIcon width={14} height={14} />Suporte 7 dias por semana</span>
          </div>
        </div>
      </section>

      <section className="section how-bg" aria-labelledby="pay-faq-heading">
        <div className="container">
          <div style={{ textAlign: "center" }}>
            <div className="label">Dúvidas</div>
            <h2 className="section-heading" id="pay-faq-heading" style={{ marginTop: "16px" }}>Perguntas sobre pagamento e planos</h2>
          </div>

          <FaqAccordion items={payFaqs} />

          <p className="faq-footer">
            Ainda com dúvida sobre qual plano escolher? <a href={whatsappLink()} target="_blank" rel="noopener">Fale com a gente no WhatsApp</a>.
          </p>
        </div>
      </section>
    </>
  );
}
