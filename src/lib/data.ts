export const SITE_URL = "https://rockbrasil40anos.com.br";
export const SITE_NAME = "RockBrasil IPTV";
export const WHATSAPP_NUMBER = "5511950599356";
export const CONTACT_EMAIL = "contato@rockbrasil40anos.com.br";
export const GA_MEASUREMENT_ID = "G-JJK0NWX4DS";

export const TESTE_GRATIS_MSG = "Olá! Quero solicitar o teste grátis da RockBrasil IPTV.";

export function planMsg(plano: string): string {
  return `Olá! Quero contratar o plano ${plano} da RockBrasil IPTV.`;
}

export function whatsappLink(mensagem?: string): string {
  if (!mensagem) return `https://wa.me/${WHATSAPP_NUMBER}`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(mensagem)}`;
}

export type Plan = {
  slug: string;
  eyebrow: string;
  name: string;
  price: string;
  period: string;
  equiv: string;
  features: string[];
  featured?: boolean;
  badge?: string;
};

const baseFeatures = [
  "Canais, filmes e séries em SD, HD, Full HD e 4K",
  "Compatível com Smart TV, TV Box e celular",
  "Guia de programação (EPG)",
];

export const PLANS: Plan[] = [
  {
    slug: "Mensal",
    eyebrow: "Para começar",
    name: "Plano Mensal",
    price: "25,00",
    period: "/1 mês",
    equiv: "R$ 25,00 por mês",
    features: [...baseFeatures, "Suporte via WhatsApp 7 dias por semana"],
  },
  {
    slug: "Trimestral",
    eyebrow: "Economia inicial",
    name: "Plano Trimestral",
    price: "65,00",
    period: "/3 meses",
    equiv: "≈ R$ 21,67 por mês",
    features: [...baseFeatures, "Suporte via WhatsApp 7 dias por semana"],
  },
  {
    slug: "Semestral",
    eyebrow: "Equilíbrio",
    name: "Plano Semestral",
    price: "130,00",
    period: "/6 meses",
    equiv: "≈ R$ 21,67 por mês",
    features: [...baseFeatures, "Suporte via WhatsApp 7 dias por semana"],
  },
  {
    slug: "Anual",
    eyebrow: "Melhor custo-benefício",
    name: "Plano Anual",
    price: "250,00",
    period: "/12 meses",
    equiv: "≈ R$ 20,83 por mês",
    features: [...baseFeatures, "Suporte via WhatsApp prioritário 7 dias por semana"],
    featured: true,
    badge: "Mais escolhido",
  },
];
