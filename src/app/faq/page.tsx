import type { Metadata } from "next";
import Link from "next/link";
import { whatsappLink } from "@/lib/data";
import FaqAccordion from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "Perguntas Frequentes sobre IPTV",
  description:
    "Tire suas dúvidas sobre teste grátis, velocidade de internet, aparelhos compatíveis, preços, pagamento, fidelidade e suporte da RockBrasil IPTV.",
  alternates: { canonical: "/faq/" },
  openGraph: {
    url: "/faq/",
    title: "Perguntas Frequentes sobre IPTV | RockBrasil IPTV",
    description:
      "Tire suas dúvidas sobre teste grátis, velocidade de internet, aparelhos compatíveis, preços, pagamento, fidelidade e suporte da RockBrasil IPTV.",
  },
  twitter: {
    title: "Perguntas Frequentes sobre IPTV | RockBrasil IPTV",
    description:
      "Tire suas dúvidas sobre teste grátis, velocidade de internet, aparelhos compatíveis, preços, pagamento, fidelidade e suporte da RockBrasil IPTV.",
  },
};

const faqs = [
  {
    pergunta: "Como funciona o teste IPTV grátis da RockBrasil?",
    resposta:
      "Você clica em qualquer botão de WhatsApp do site e informa qual aparelho vai usar. Nossa equipe indica o player certo e envia o acesso de teste sem custo, sem pedir cartão de crédito ou cadastro extenso. O teste é liberado em até 10 minutos.",
  },
  {
    pergunta: "Qual velocidade de internet preciso para assistir sem travamentos?",
    resposta:
      "Para IPTV HD, cerca de 15 Mbps de velocidade real já entregam uma experiência confortável. Para Full HD, recomendamos 25 Mbps, e para 4K, pelo menos 45 Mbps. Nossa equipe ajusta a qualidade do player conforme a sua conexão real — não a velocidade contratada.",
  },
  {
    pergunta: "Em quais aparelhos a RockBrasil IPTV funciona?",
    resposta:
      "Funciona em Smart TV (Samsung, LG, TCL, Philco), TV Box, Android TV, Fire TV Stick, Chromecast com Google TV, Roku, celulares Android e iPhone, notebook e PC, além de tablets e projetores smart. Ficou em dúvida? Mande o nome do aparelho no WhatsApp antes de contratar.",
  },
  {
    pergunta: "Quanto custa a assinatura depois do teste?",
    resposta:
      "Os planos são: Mensal por R$ 25, Trimestral por R$ 65 (equivale a R$ 21,67/mês), Semestral por R$ 130 (equivale a R$ 21,67/mês) e Anual por R$ 250 (o mais escolhido, equivale a R$ 20,83/mês). Todos incluem o mesmo acesso completo — a diferença está só no período e no valor final.",
  },
  {
    pergunta: "Quais formas de pagamento vocês aceitam?",
    resposta: "Aceitamos Pix, cartão de crédito e boleto bancário. A ativação ocorre em poucos minutos após a confirmação do pagamento.",
  },
  {
    pergunta: "Posso assistir em mais de uma tela ao mesmo tempo?",
    resposta:
      "Sim. O acesso padrão é individual, mas é possível contratar telas adicionais para que várias pessoas assistam ao mesmo tempo em aparelhos diferentes. Pergunte no WhatsApp sobre as opções de múltiplas telas.",
  },
  {
    pergunta: "Existe fidelidade ou multa por cancelamento?",
    resposta:
      "Não. Nenhum plano tem fidelidade obrigatória. Você contrata pelo período escolhido e decide livremente se renova ou não ao final. Não cobramos multa nem taxa de cancelamento.",
  },
  {
    pergunta: "O que acontece quando o plano vence?",
    resposta: "O acesso é interrompido até a renovação. Não há cobrança automática: você decide se e quando renovar.",
  },
  {
    pergunta: "Posso trocar de dispositivo depois de contratar?",
    resposta: "Sim, sem custo adicional. Basta avisar o suporte no WhatsApp informando o novo aparelho, e ajustamos o player correspondente.",
  },
  {
    pergunta: "Que tipo de conteúdo está disponível?",
    resposta:
      "Canais ao vivo (abertos e fechados), filmes sob demanda, séries com temporadas completas, esportes com prioridade de servidor em horários de pico, conteúdo infantil e documentários/variedades.",
  },
  {
    pergunta: "Como funciona o suporte?",
    resposta:
      "Atendimento humano pelo WhatsApp, todos os dias da semana. Cobrimos dúvidas de instalação, troca de aparelho, ajuste de qualidade e problemas técnicos pontuais.",
  },
  {
    pergunta: "Meus dados ficam seguros?",
    resposta: (
      <>
        Sim. Coletamos apenas o necessário para ativar e dar suporte ao seu acesso, seguindo a LGPD. Não compartilhamos dados com terceiros
        para fins de marketing. Veja mais na nossa{" "}
        <Link href="/politica-de-privacidade/" style={{ color: "var(--accent)" }}>
          Política de Privacidade
        </Link>
        .
      </>
    ),
    respostaTexto:
      "Sim. Coletamos apenas o necessário para ativar e dar suporte ao seu acesso, seguindo a LGPD. Não compartilhamos dados com terceiros para fins de marketing. Veja mais na nossa Política de Privacidade.",
  },
];

export default function FaqPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.pergunta,
      acceptedAnswer: {
        "@type": "Answer",
        text: "respostaTexto" in f ? f.respostaTexto : (f.resposta as string),
      },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="hero page-hero" aria-labelledby="hero-heading">
        <div className="container">
          <div className="label">FAQ</div>
          <h1 className="hero-title" id="hero-heading">Perguntas frequentes</h1>
          <p className="hero-desc">Reunimos as dúvidas que mais chegam no WhatsApp antes e depois da contratação.</p>
        </div>
      </section>

      <section className="section" aria-labelledby="faq-list-heading">
        <div className="container">
          <h2 className="section-heading" id="faq-list-heading" style={{ textAlign: "center" }}>Dúvidas rápidas sobre a RockBrasil IPTV</h2>
          <FaqAccordion items={faqs} />
          <p className="faq-footer">
            Não encontrou o que precisava? <a href={whatsappLink()} target="_blank" rel="noopener">Pergunte direto no WhatsApp</a> — respondemos todos os dias.
          </p>
        </div>
      </section>
    </>
  );
}
