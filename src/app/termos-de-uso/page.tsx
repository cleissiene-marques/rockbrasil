import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Termos de Uso",
  description: "Termos e condições de uso do serviço RockBrasil IPTV: contratação, pagamento, cancelamento, responsabilidades e limitações.",
  alternates: { canonical: "/termos-de-uso/" },
  openGraph: {
    url: "/termos-de-uso/",
    title: "Termos de Uso | RockBrasil IPTV",
    description: "Termos e condições de uso do serviço RockBrasil IPTV: contratação, pagamento, cancelamento, responsabilidades e limitações.",
  },
  twitter: {
    title: "Termos de Uso | RockBrasil IPTV",
    description: "Termos e condições de uso do serviço RockBrasil IPTV: contratação, pagamento, cancelamento, responsabilidades e limitações.",
  },
};

export default function TermosDeUsoPage() {
  return (
    <>
      <section className="section page-hero" style={{ paddingTop: "64px" }} aria-labelledby="hero-heading">
        <div className="container">
          <div className="label">Legal</div>
          <h1 className="hero-title" id="hero-heading" style={{ fontSize: "clamp(1.8rem,4vw,2.5rem)" }}>Termos de Uso</h1>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="legal-content">
            <p className="legal-updated">Última atualização: 31 de agosto de 2026</p>

            <h2>1. Aceitação dos termos</h2>
            <p>Ao solicitar o teste grátis, contratar um plano ou utilizar este site, você concorda com os termos descritos abaixo. Se não concordar com algum ponto, recomendamos não utilizar o serviço.</p>

            <h2>2. Descrição do serviço</h2>
            <p>A RockBrasil IPTV oferece tecnologia e suporte para acesso a conteúdo de streaming via aplicativo (player), compatível com Smart TVs, TV Box, celulares e outros dispositivos. O serviço depende de conexão de internet própria do usuário.</p>

            <h2>3. Contratação e pagamento</h2>
            <p>
              Os planos disponíveis (Mensal, Trimestral, Semestral e Anual) e seus respectivos valores estão publicados na página de{" "}
              <Link href="/planos/" style={{ color: "var(--accent)" }}>Planos</Link>. O pagamento pode ser feito via Pix, cartão de crédito ou boleto bancário, e a ativação ocorre após a confirmação do pagamento.
            </p>

            <h2>4. Teste grátis</h2>
            <p>O teste grátis é oferecido por tempo limitado, sem custo e sem necessidade de cartão de crédito, com o objetivo de permitir a avaliação da qualidade do serviço antes da contratação. A liberação do teste está sujeita à disponibilidade.</p>

            <h2>5. Cancelamento e renovação</h2>
            <p>Nenhum plano possui fidelidade obrigatória. Ao final do período contratado, o acesso é interrompido automaticamente, sem cobrança adicional, salvo se o usuário optar por renovar.</p>

            <h2>6. Responsabilidades do usuário</h2>
            <ul>
              <li>Fornecer informações corretas sobre o aparelho utilizado, para viabilizar o suporte;</li>
              <li>Manter conexão de internet compatível com a qualidade desejada (HD, Full HD ou 4K);</li>
              <li>Não compartilhar credenciais de acesso com terceiros fora do combinado no plano contratado;</li>
              <li>Utilizar o serviço de forma pessoal, respeitando a legislação aplicável.</li>
            </ul>

            <h2>7. Limitação de responsabilidade</h2>
            <p>A qualidade da transmissão pode ser afetada por fatores fora do nosso controle, como a conexão de internet do usuário, o desempenho do aparelho utilizado ou instabilidades pontuais de rede. Nos comprometemos a manter monitoramento contínuo e suporte ativo para minimizar impactos.</p>

            <h2>8. Propriedade intelectual</h2>
            <p>A marca RockBrasil IPTV, o layout e os textos deste site são de uso exclusivo da empresa. É proibida a reprodução total ou parcial sem autorização prévia.</p>

            <h2>9. Alterações nos termos</h2>
            <p>Estes termos podem ser atualizados periodicamente. Recomendamos revisar esta página com frequência. A data da última atualização está indicada no topo.</p>

            <h2>10. Legislação aplicável</h2>
            <p>Estes termos são regidos pelas leis da República Federativa do Brasil, incluindo o Código de Defesa do Consumidor e a LGPD, sendo eleito o foro do domicílio do usuário para dirimir eventuais controvérsias, quando aplicável.</p>

            <div className="legal-note">Este documento é um modelo inicial de termos de uso e deve ser revisado por um profissional jurídico antes da publicação oficial, considerando as regras específicas de contratação, reembolso e distribuição de conteúdo aplicáveis ao negócio.</div>
          </div>
        </div>
      </section>
    </>
  );
}
