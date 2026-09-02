"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { WhatsAppIcon, LogoMarkIcon, CloseIcon } from "@/components/Icons";
import { whatsappLink, TESTE_GRATIS_MSG } from "@/lib/data";

const navLinks = [
  { href: "/", label: "Início" },
  { href: "/iptv/", label: "O que é IPTV" },
  { href: "/planos/", label: "Planos" },
  { href: "/teste-gratis/", label: "Teste Grátis" },
  { href: "/blog/", label: "Blog" },
  { href: "/faq/", label: "FAQ" },
  { href: "/quem-somos/", label: "Quem Somos" },
  { href: "/contato/", label: "Contato" },
];

export default function Header() {
  const [menuAberto, setMenuAberto] = useState(false);
  const pathname = usePathname();

  const [prevPathname, setPrevPathname] = useState(pathname);
  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setMenuAberto(false);
  }

  useEffect(() => {
    document.body.style.overflow = menuAberto ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuAberto]);

  return (
    <>
      <div className="announcement-bar" role="region" aria-label="Aviso de atendimento">
        Atendimento humano no WhatsApp todos os dias ·{" "}
        <a href={whatsappLink(TESTE_GRATIS_MSG)} target="_blank" rel="noopener">
          Peça seu teste IPTV grátis agora →
        </a>
      </div>

      <header className="site-header">
        <div className="container header-inner">
          <Link href="/" className="logo" aria-label="RockBrasil IPTV — página inicial">
            <div className="logo-mark" aria-hidden="true">
              <LogoMarkIcon width={20} height={20} />
            </div>
            <span className="logo-name">
              RockBrasil <span>IPTV</span>
            </span>
          </Link>

          <nav className="nav-links" aria-label="Navegação principal">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className={pathname === link.href ? "active" : ""}>
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="header-cta">
            <a href={whatsappLink(TESTE_GRATIS_MSG)} className="btn btn-primary" target="_blank" rel="noopener">
              <WhatsAppIcon />
              Teste Grátis
            </a>
          </div>

          <button
            className="hamburger"
            aria-label={menuAberto ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuAberto}
            onClick={() => setMenuAberto(true)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>

      <nav className={`mobile-nav${menuAberto ? " open" : ""}`} aria-label="Menu mobile">
        <div className="mobile-nav-head">
          <Link href="/" className="logo" onClick={() => setMenuAberto(false)}>
            <div className="logo-mark" aria-hidden="true">
              <LogoMarkIcon width={20} height={20} />
            </div>
            <span className="logo-name">
              RockBrasil <span>IPTV</span>
            </span>
          </Link>
          <button aria-label="Fechar menu" onClick={() => setMenuAberto(false)}>
            <CloseIcon />
          </button>
        </div>
        {navLinks.map((link) => (
          <Link key={link.href} href={link.href} onClick={() => setMenuAberto(false)}>
            {link.label}
          </Link>
        ))}
        <a href={whatsappLink(TESTE_GRATIS_MSG)} className="btn btn-primary" target="_blank" rel="noopener">
          Solicitar Teste Grátis
        </a>
      </nav>
    </>
  );
}
