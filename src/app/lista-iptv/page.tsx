import type { Metadata } from "next";
import Link from "next/link";
import { whatsappLink, TESTE_GRATIS_MSG } from "@/lib/data";
import { WhatsAppIcon, CheckIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Lista IPTV: o que é, como funciona e como escolher uma confiável",
  description:
    "Entenda o que é uma lista IPTV, a diferença entre listas gratuitas e listas pagas confiáveis, os riscos das listas piratas e como escolher uma lista IPTV estável para assistir sem travar.",
  alternates: { canonical: "/lista-iptv/" },
  openGraph: {
    url: "/lista-iptv/",
    title: "Lista IPTV: o que é, como funciona e como escolher uma confiável | RockBrasil IPTV",
    description:
      "Entenda o que é uma lista IPTV, a diferença entre listas gratuitas e listas pagas confiáveis, os riscos das listas piratas e como escolher uma lista IPTV estável para assistir sem travar.",
  },
  twitter: {
    title: "Lista IPTV: o que é, como funciona e como escolher uma confiável | RockBrasil IPTV",
    description:
      "Entenda o que é uma lista IPTV, a diferença entre listas gratuitas e listas pagas confiáveis, e como escolher uma lista estável para assistir sem travar.",
  },
};

export default function ListaIptvPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "O que é uma lista IPTV?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Uma lista IPTV é o conjunto de canais, filmes e séries organizados dentro de um aplicativo (player) que transmite esse conteúdo pela internet. Ela funciona como o 'catálogo' que o player carrega para exibir tudo o que está disponível no serviço.",
        },
      },
      {
        "@type": "Question",
        name: "Lista IPTV gratuita funciona bem?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Listas IPTV gratuitas costumam ficar fora do ar com frequência, sem suporte para resolver problemas e com qualidade instável, já que normalmente não há uma equipe mantendo a infraestrutura por trás delas.",
        },
      },
      {
        "@type": "Question",
        name: "Como escolher uma lista IPTV confiável?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Priorize um serviço que ofereça teste antes de pagar, suporte humano para resolver problemas, atualização constante do catálogo e transparência sobre preço e condições, sem fidelidade obrigatória.",
        },
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="hero page-hero" aria-labelledby="hero-heading">
        <div className="container">
          <div className="label">Lista IPTV explicada</div>
          <h1 className="hero-title" id="hero-heading">Lista IPTV: o que é e como escolher uma confiável</h1>
          <p className="hero-desc">
            Lista IPTV é o catálogo de canais, filmes e séries que o seu aplicativo carrega para transmitir pela internet. A diferença entre uma boa experiência e travamento constante está em quem mantém essa lista — e é isso que este guia explica.
          </p>
          <div className="page-hero-actions">
            <a href={whatsappLink(TESTE_GRATIS_MSG)} className="btn btn-primary" target="_blank" rel="noopener">
              <WhatsAppIcon width={20} height={20} />
              Solicitar Teste Grátis
            </a>
            <Link href="/planos/" className="btn btn-outline">Ver planos e preços</Link>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="conceito-heading">
        <div className="container">
          <div className="label">Conceito</div>
          <h2 className="section-heading" id="conceito-heading" style={{ marginTop: "16px" }}>O que é, de fato, uma lista IPTV</h2>
          <div className="legal-content" style={{ marginTop: "32px" }}>
            <p>Quando alguém fala em "lista IPTV", está se referindo ao catálogo de conteúdo — canais ao vivo, filmes, séries — organizado dentro de um aplicativo de streaming. É essa lista que o player consulta para saber o que exibir, em que categoria e com qual qualidade disponível.</p>
            <p>Tecnicamente, essa lista fica hospedada em servidores que entregam o conteúdo sob demanda para o aplicativo. A qualidade da experiência não depende só de quantos itens a lista tem, mas principalmente de quem mantém esses servidores atualizados, estáveis e monitorados dia a dia.</p>
            <p>É por isso que duas listas IPTV com nomes de canais parecidos podem entregar experiências completamente diferentes: uma trava nos horários de pico e outra se mantém firme, porque a infraestrutura por trás — não a lista em si — é o que realmente sustenta a transmissão.</p>
          </div>
        </div>
      </section>

      <section className="section how-bg" aria-labelledby="compare-heading">
        <div className="container">
          <div className="label">Comparativo</div>
          <h2 className="section-heading" id="compare-heading" style={{ marginTop: "16px" }}>Lista IPTV gratuita x lista paga e mantida</h2>
          <p className="section-subtext">A escolha entre uma lista gratuita e uma lista IPTV paga e mantida por uma equipe muda completamente a experiência no dia a dia.</p>

          <div className="compare-grid">
            <article className="card compare-card is-featured animate-on-scroll">
              <h3>Lista paga e mantida</h3>
              <ul>
                <li>✓ Servidores monitorados e atualizados continuamente</li>
                <li>✓ Suporte humano quando algo sai do previsto</li>
                <li>✓ Catálogo revisado, sem canais fora do ar por dias</li>
                <li>✓ Teste grátis antes de decidir</li>
              </ul>
            </article>
            <article className="card compare-card animate-on-scroll">
              <h3>Lista gratuita</h3>
              <ul>
                <li>• Servidores sobrecarregados, sem manutenção previsível</li>
                <li>• Nenhum suporte quando o canal cai</li>
                <li>• Links e canais que somem sem aviso</li>
                <li>• Qualidade que varia muito ao longo do dia</li>
              </ul>
            </article>
            <article className="card compare-card animate-on-scroll">
              <h3>Lista pirata / não verificada</h3>
              <ul>
                <li>• Origem do conteúdo não é transparente</li>
                <li>• Costuma vir cheia de anúncios e instabilidade</li>
                <li>• Some do ar sem aviso, sem forma de reclamar</li>
                <li>• Nenhuma garantia sobre segurança do aplicativo</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="checklist-heading">
        <div className="container">
          <div className="label">Checklist</div>
          <h2 className="section-heading" id="checklist-heading" style={{ marginTop: "16px" }}>Como escolher uma lista IPTV confiável</h2>
          <p className="section-subtext">Antes de assinar qualquer serviço, esses pontos ajudam a separar uma lista IPTV séria de uma que vai travar ou sumir em poucas semanas.</p>

          <div
            style={{ marginTop: "48px", background: "var(--bg-card)", border: "1px solid var(--brd)", borderRadius: "var(--r-lg)", padding: "32px 28px", maxWidth: "720px", marginInline: "auto", display: "grid", gap: "16px" }}
          >
            {[
              "Oferece teste grátis antes de qualquer pagamento, sem pedir cartão de crédito.",
              "Tem suporte humano disponível para resolver problemas de instalação e travamento.",
              "Mantém o catálogo atualizado, sem canais fora do ar por longos períodos.",
              "É transparente sobre preço, sem taxa escondida e sem fidelidade obrigatória.",
              "Explica com clareza a compatibilidade com o seu aparelho antes da contratação.",
            ].map((item) => (
              <div key={item} style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                <span style={{ color: "var(--accent)", marginTop: "4px", flexShrink: 0 }}>
                  <CheckIcon width={16} height={16} />
                </span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="final-cta" aria-labelledby="cta-heading">
        <div className="container">
          <div className="label">Teste IPTV grátis</div>
          <h2 className="section-heading" id="cta-heading" style={{ marginTop: "16px" }}>Teste a lista IPTV da RockBrasil antes de decidir</h2>
          <p className="section-subtext">Peça o teste grátis, avalie a estabilidade nos seus horários de pico e só contrate depois de ver funcionando na sua casa.</p>
          <div className="final-actions">
            <a href={whatsappLink(TESTE_GRATIS_MSG)} className="btn btn-primary" target="_blank" rel="noopener">Solicitar teste no WhatsApp</a>
            <Link href="/planos/" className="btn btn-outline">Ver planos e preços</Link>
          </div>
        </div>
      </section>
    </>
  );
}
