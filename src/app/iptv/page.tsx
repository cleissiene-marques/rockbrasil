import type { Metadata } from "next";
import Link from "next/link";
import { whatsappLink, TESTE_GRATIS_MSG } from "@/lib/data";
import { WhatsAppIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "O que é IPTV? Como funciona a tecnologia",
  description:
    "Entenda o que é IPTV, como funciona a transmissão via internet, a diferença para TV a cabo e streaming tradicional, e a velocidade de internet necessária para assistir sem travar.",
  alternates: { canonical: "/iptv/" },
  openGraph: {
    url: "/iptv/",
    title: "O que é IPTV? Como funciona a tecnologia | RockBrasil IPTV",
    description:
      "Entenda o que é IPTV, como funciona a transmissão via internet, a diferença para TV a cabo e streaming tradicional, e a velocidade de internet necessária para assistir sem travar.",
  },
  twitter: {
    title: "O que é IPTV? Como funciona a tecnologia | RockBrasil IPTV",
    description:
      "Entenda o que é IPTV, como funciona a transmissão via internet, a diferença para TV a cabo e streaming tradicional, e a velocidade de internet necessária para assistir sem travar.",
  },
};

export default function IptvPage() {
  return (
    <>
      <section className="hero page-hero" aria-labelledby="hero-heading">
        <div className="container">
          <div className="label">IPTV explicado</div>
          <h1 className="hero-title" id="hero-heading">O que é IPTV e como funciona na prática</h1>
          <p className="hero-desc">
            IPTV (Internet Protocol Television) é a transmissão de canais, filmes e séries pela internet, em vez de antena ou cabo tradicional. Você assiste pelo aplicativo, no aparelho que já tem, com a mesma lógica de qualquer serviço de streaming.
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
          <h2 className="section-heading" id="conceito-heading" style={{ marginTop: "16px" }}>Da antena ao aplicativo: como a transmissão chega até você</h2>
          <div className="legal-content" style={{ marginTop: "32px" }}>
            <p>Na TV tradicional, o sinal chega por antena ou cabo físico até um decodificador. No IPTV, o mesmo tipo de conteúdo — canais ao vivo, filmes, séries — é entregue através da sua conexão de internet, como qualquer outro serviço de streaming que você já usa.</p>
            <p>Isso significa que não existe instalação de cabo nem equipamento específico obrigatório: o acesso acontece por um aplicativo (player), instalado no aparelho que você já tem em casa — Smart TV, TV Box, celular, notebook ou Fire TV Stick, por exemplo.</p>
            <p>A qualidade da imagem depende de dois fatores principais: a estabilidade da infraestrutura que entrega o conteúdo e a velocidade real da sua internet no momento em que você assiste.</p>
          </div>
        </div>
      </section>

      <section className="section how-bg" aria-labelledby="compare-heading">
        <div className="container">
          <div className="label">Comparativo</div>
          <h2 className="section-heading" id="compare-heading" style={{ marginTop: "16px" }}>IPTV, TV a cabo e streaming tradicional</h2>
          <p className="section-subtext">Cada formato tem uma lógica diferente de entrega e de custo. Veja onde o IPTV se encaixa.</p>

          <div className="compare-grid">
            <article className="card compare-card is-featured animate-on-scroll">
              <h3>IPTV</h3>
              <ul>
                <li>✓ Canais ao vivo, filmes e séries em um único aplicativo</li>
                <li>✓ Funciona em Smart TV, TV Box, celular e PC</li>
                <li>✓ Sem instalação de cabo ou antena</li>
                <li>✓ Planos mensais sem fidelidade</li>
              </ul>
            </article>
            <article className="card compare-card animate-on-scroll">
              <h3>TV a cabo</h3>
              <ul>
                <li>• Depende de instalação física e visita técnica</li>
                <li>• Pacotes fechados, difíceis de personalizar</li>
                <li>• Contratos com fidelidade comuns</li>
                <li>• Sinal restrito ao endereço instalado</li>
              </ul>
            </article>
            <article className="card compare-card animate-on-scroll">
              <h3>Streaming tradicional</h3>
              <ul>
                <li>• Um aplicativo por serviço (vários assinaturas)</li>
                <li>• Catálogo próprio, sem TV ao vivo na maioria dos casos</li>
                <li>• Boa parte não tem canais de TV aberta</li>
                <li>• Custo soma quando você assina vários ao mesmo tempo</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="speed-heading">
        <div className="container">
          <div className="label">Internet necessária</div>
          <h2 className="section-heading" id="speed-heading" style={{ marginTop: "16px" }}>Quanto de internet você precisa</h2>
          <p className="section-subtext">A referência abaixo considera velocidade real de conexão, não apenas o plano contratado com a operadora.</p>

          <div
            className="stats-grid"
            style={{ marginTop: "48px", background: "var(--bg-card)", border: "1px solid var(--brd)", borderRadius: "var(--r-lg)", padding: "32px 12px" }}
          >
            <div className="stat-item animate-on-scroll">
              <div className="stat-val">15 Mbps</div>
              <div className="stat-label">Recomendado para HD</div>
            </div>
            <div className="stat-item animate-on-scroll">
              <div className="stat-val">25 Mbps</div>
              <div className="stat-label">Recomendado para Full HD</div>
            </div>
            <div className="stat-item animate-on-scroll">
              <div className="stat-val">45 Mbps</div>
              <div className="stat-label">Recomendado para 4K</div>
            </div>
            <div className="stat-item animate-on-scroll">
              <div className="stat-val">Wi-Fi ou cabo</div>
              <div className="stat-label">Ambos funcionam bem se a conexão for estável</div>
            </div>
          </div>
        </div>
      </section>

      <section className="final-cta" aria-labelledby="cta-heading">
        <div className="container">
          <div className="label">Teste IPTV grátis</div>
          <h2 className="section-heading" id="cta-heading" style={{ marginTop: "16px" }}>Quer ver funcionando antes de decidir?</h2>
          <p className="section-subtext">Peça o teste grátis, instale em minutos e avalie a qualidade na sua própria casa, sem compromisso.</p>
          <div className="final-actions">
            <a href={whatsappLink(TESTE_GRATIS_MSG)} className="btn btn-primary" target="_blank" rel="noopener">Solicitar teste no WhatsApp</a>
            <Link href="/planos/" className="btn btn-outline">Ver planos e preços</Link>
          </div>
        </div>
      </section>
    </>
  );
}
