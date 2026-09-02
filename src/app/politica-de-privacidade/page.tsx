import type { Metadata } from "next";
import { whatsappLink, CONTACT_EMAIL } from "@/lib/data";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description: "Saiba como a RockBrasil IPTV coleta, usa e protege seus dados pessoais, em conformidade com a Lei Geral de Proteção de Dados (LGPD).",
  alternates: { canonical: "/politica-de-privacidade/" },
  openGraph: {
    url: "/politica-de-privacidade/",
    title: "Política de Privacidade | RockBrasil IPTV",
    description: "Saiba como a RockBrasil IPTV coleta, usa e protege seus dados pessoais, em conformidade com a Lei Geral de Proteção de Dados (LGPD).",
  },
  twitter: {
    title: "Política de Privacidade | RockBrasil IPTV",
    description: "Saiba como a RockBrasil IPTV coleta, usa e protege seus dados pessoais, em conformidade com a Lei Geral de Proteção de Dados (LGPD).",
  },
};

export default function PoliticaDePrivacidadePage() {
  return (
    <>
      <section className="section page-hero" style={{ paddingTop: "64px" }} aria-labelledby="hero-heading">
        <div className="container">
          <div className="label">Legal</div>
          <h1 className="hero-title" id="hero-heading" style={{ fontSize: "clamp(1.8rem,4vw,2.5rem)" }}>Política de Privacidade</h1>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="legal-content">
            <p className="legal-updated">Última atualização: 31 de agosto de 2026</p>

            <h2>1. Quem somos</h2>
            <p>Esta política explica como a RockBrasil IPTV (rockbrasil40anos.com.br) coleta, usa e protege os dados pessoais de quem solicita informações, teste grátis ou contrata nossos planos, em conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018 — LGPD).</p>

            <h2>2. Quais dados coletamos</h2>
            <ul>
              <li>Nome e número de WhatsApp, fornecidos ao solicitar teste grátis ou suporte;</li>
              <li>Informações sobre o aparelho utilizado (ex: modelo de Smart TV, TV Box), para indicar o player correto;</li>
              <li>Dados de pagamento, processados por instituições financeiras parceiras — não armazenamos número completo de cartão em nossos sistemas;</li>
              <li>E-mail, quando enviado voluntariamente por esse canal.</li>
            </ul>

            <h2>3. Para que usamos esses dados</h2>
            <ul>
              <li>Ativar e liberar o acesso de teste ou assinatura;</li>
              <li>Prestar suporte técnico via WhatsApp;</li>
              <li>Processar pagamentos e emitir comprovantes;</li>
              <li>Comunicar renovações e mudanças relevantes no serviço.</li>
            </ul>

            <h2>4. Compartilhamento com terceiros</h2>
            <p>Não vendemos nem compartilhamos seus dados com terceiros para fins de marketing. Dados de pagamento são compartilhados apenas com processadores de pagamento (Pix, cartão ou boleto) na medida necessária para concluir a transação.</p>

            <h2>5. Seus direitos, conforme a LGPD</h2>
            <p>Você pode, a qualquer momento, solicitar:</p>
            <ul>
              <li>Confirmação de que tratamos seus dados e acesso a eles;</li>
              <li>Correção de dados incompletos ou desatualizados;</li>
              <li>Exclusão dos dados, quando não houver obrigação legal de retenção;</li>
              <li>Portabilidade dos dados a outro fornecedor;</li>
              <li>Revogação do consentimento dado anteriormente.</li>
            </ul>
            <p>
              Para exercer qualquer um desses direitos, envie um e-mail para{" "}
              <a href={`mailto:${CONTACT_EMAIL}`} style={{ color: "var(--accent)" }}>{CONTACT_EMAIL}</a>.
            </p>

            <h2>6. Segurança e retenção</h2>
            <p>Adotamos medidas técnicas e organizacionais razoáveis para proteger seus dados contra acesso não autorizado. Mantemos os dados apenas pelo tempo necessário para as finalidades descritas nesta política ou conforme exigido por lei.</p>

            <h2>7. Cookies</h2>
            <p>Este site pode utilizar cookies estritamente técnicos para seu funcionamento básico. Não utilizamos cookies de rastreamento de terceiros para publicidade.</p>

            <h2>8. Alterações desta política</h2>
            <p>Podemos atualizar esta política periodicamente. A data da última atualização estará sempre indicada no topo desta página.</p>

            <h2>9. Contato</h2>
            <p>
              Dúvidas sobre esta política podem ser enviadas para{" "}
              <a href={`mailto:${CONTACT_EMAIL}`} style={{ color: "var(--accent)" }}>{CONTACT_EMAIL}</a> ou pelo{" "}
              <a href={whatsappLink()} target="_blank" rel="noopener" style={{ color: "var(--accent)" }}>WhatsApp</a>.
            </p>

            <div className="legal-note">Este documento é um modelo inicial de política de privacidade e deve ser revisado por um profissional jurídico antes da publicação oficial, para garantir aderência total à LGPD e às práticas reais de tratamento de dados da empresa.</div>
          </div>
        </div>
      </section>
    </>
  );
}
