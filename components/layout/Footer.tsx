import Link from "next/link";
import { getTranslations } from "next-intl/server";

interface FooterProps {
  locale: string;
}

export default async function Footer({ locale }: FooterProps) {
  const t = await getTranslations("footer");
  const tn = await getTranslations("nav");

  return (
    <footer className="bg-[#0a0a0a] text-white/40">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-5">
            <span className="text-2xl font-bold text-white tracking-tight">refind</span>
            <p className="mt-1 text-xs text-white/30 mb-6">{t("company")}</p>
            <p className="text-sm leading-relaxed mb-4">{t("address")}</p>
            <div className="space-y-1 text-sm">
              <p>070-4837-2829</p>
              <p>refind@refind.kr</p>
            </div>
          </div>

          {/* Products */}
          <div className="md:col-span-4">
            <h3 className="text-white text-xs font-semibold tracking-[0.15em] uppercase mb-5">
              {tn("products")}
            </h3>
            <ul className="space-y-3">
              {[
                { href: `/${locale}/products/physical-ai`, label: tn("physicalAI") },
                { href: `/${locale}/products/robot-hand`, label: tn("robotHand") },
                { href: `/${locale}/products/collaborative-robot`, label: tn("collaborativeRobot") },
                { href: `/${locale}/products/humanoid`, label: tn("humanoid") },
                { href: `/${locale}/products/prosthetic`, label: tn("bodyEnhancement") },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="md:col-span-3">
            <h3 className="text-white text-xs font-semibold tracking-[0.15em] uppercase mb-5">
              Company
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href={`/${locale}/about`}
                  className="text-sm hover:text-white transition-colors duration-200"
                >
                  {tn("about")}
                </Link>
              </li>
              <li>
                <a
                  href="https://form.naver.com/response/WxUcn3MgR1ouvktOE4JwYA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm hover:text-white transition-colors duration-200"
                >
                  {tn("inquiry")}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs">{t("copyright")}</p>
          <div className="flex gap-6">
            <Link
              href={`/${locale}/privacy`}
              className="text-xs hover:text-white/60 transition-colors"
            >
              {t("links.privacy")}
            </Link>
            <Link
              href={`/${locale}/terms`}
              className="text-xs hover:text-white/60 transition-colors"
            >
              {t("links.terms")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
