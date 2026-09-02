import Link from "next/link";
import { WhatsAppIcon, LogoMarkIcon } from "@/components/Icons";
import { whatsappLink, CONTACT_EMAIL } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link href="/" className="logo" aria-label="RockBrasil IPTV — página inicial">
              <div className="logo-mark" aria-hidden="true">
                <LogoMarkIcon width={20} height={20} />
              </div>
              <span className="logo-name">
                RockBrasil <span>IPTV</span>
              </span>
            </Link>
            <p>Tecnologia de streaming com foco em estabilidade, imagem em alta definição e suporte real. Teste grátis sem compromisso.</p>
            <div className="footer-rating">
              <div className="stars" aria-label="4.9 de 5 estrelas" style={{ fontSize: ".9rem" }}>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
              </div>
              <div>
                <span className="footer-rating-score">4.9</span> <span className="footer-rating-text">de 5 · 2.300 avaliações</span>
              </div>
            </div>
          </div>

          <nav className="footer-col" aria-label="Navegação do site">
            <h4>Navegação</h4>
            <ul>
              <li><Link href="/">Início</Link></li>
              <li><Link href="/iptv/">O que é IPTV</Link></li>
              <li><Link href="/planos/">Planos IPTV</Link></li>
              <li><Link href="/teste-gratis/">Teste IPTV Grátis</Link></li>
              <li><Link href="/blog/">Blog</Link></li>
            </ul>
          </nav>

          <nav className="footer-col" aria-label="Links de ajuda">
            <h4>Ajuda</h4>
            <ul>
              <li><Link href="/faq/">Perguntas Frequentes</Link></li>
              <li><Link href="/quem-somos/">Quem Somos</Link></li>
              <li><Link href="/contato/">Contato</Link></li>
              <li><a href={whatsappLink()} target="_blank" rel="noopener">Suporte no WhatsApp</a></li>
            </ul>
          </nav>

          <nav className="footer-col" aria-label="Informações legais">
            <h4>Legal</h4>
            <ul>
              <li><Link href="/politica-de-privacidade/">Política de Privacidade</Link></li>
              <li><Link href="/termos-de-uso/">Termos de Uso</Link></li>
              <li><a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a></li>
            </ul>
          </nav>
        </div>

        <div className="footer-bottom">
          <p>
            © 2026 RockBrasil IPTV · rockbrasil40anos.com.br · Todos os direitos reservados.
            <br />
            <small style={{ color: "var(--t3)" }}>Serviço de tecnologia e suporte para aplicativos de streaming.</small>
          </p>
          <a href={whatsappLink()} className="footer-wpp" target="_blank" rel="noopener">
            <WhatsAppIcon width={18} height={18} />
            Falar no WhatsApp
          </a>
        </div>
      </div>
    </footer>
  );
}
