import type { Metadata } from "next";
import Link from "next/link";
import { whatsappLink } from "@/lib/data";
import { blogPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Blog RockBrasil IPTV — Dicas de IPTV, streaming e tecnologia",
  description: "Artigos práticos sobre configuração de dispositivos, internet para streaming, solução de travamentos e boas práticas de uso do IPTV.",
  alternates: { canonical: "/blog/" },
  openGraph: {
    url: "/blog/",
    title: "Blog RockBrasil IPTV — Dicas de IPTV, streaming e tecnologia",
    description: "Artigos práticos sobre configuração de dispositivos, internet para streaming, solução de travamentos e boas práticas de uso do IPTV.",
  },
  twitter: {
    title: "Blog RockBrasil IPTV — Dicas de IPTV, streaming e tecnologia",
    description: "Artigos práticos sobre configuração de dispositivos, internet para streaming, solução de travamentos e boas práticas de uso do IPTV.",
  },
};

export default function BlogPage() {
  return (
    <>
      <section className="hero page-hero" aria-labelledby="hero-heading">
        <div className="container">
          <div className="label">Blog</div>
          <h1 className="hero-title" id="hero-heading">Dicas práticas sobre IPTV, streaming e tecnologia</h1>
          <p className="hero-desc">
            Artigos sobre configuração de dispositivos, internet para streaming e boas práticas de uso do IPTV — escritos para resolver problemas de verdade, sem enrolação.
          </p>
        </div>
      </section>

      <section className="section" aria-labelledby="posts-heading">
        <div className="container">
          <div className="label">Artigos</div>
          <h2 className="section-heading" id="posts-heading" style={{ marginTop: "16px" }}>Últimas publicações</h2>

          <div className="blog-grid" style={{ marginTop: "48px" }}>
            {blogPosts.map((post) => (
              <Link href={`/blog/${post.slug}/`} className="card blog-card animate-on-scroll" key={post.slug}>
                <span className="blog-card-badge">{post.badge}</span>
                <h3>{post.title}</h3>
                <p>{post.description}</p>
              </Link>
            ))}
          </div>

          <p className="blog-notice">
            Quer sugerir um tema específico? Mande a ideia pelo{" "}
            <a href={whatsappLink()} target="_blank" rel="noopener" style={{ color: "var(--accent)" }}>WhatsApp</a> — priorizamos os temas mais pedidos.
          </p>
        </div>
      </section>
    </>
  );
}
