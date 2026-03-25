import Link from "next/link";
import { getTranslations } from "next-intl/server";

interface FooterProps {
  locale: string;
}

export default async function Footer({ locale }: FooterProps) {
  const t = await getTranslations("footer");
  const tn = await getTranslations("nav");

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <span className="text-2xl font-bold text-primary-400">refind</span>
            <p className="mt-2 text-sm text-gray-400">{t("company")}</p>
            <p className="mt-4 text-sm text-gray-400 leading-relaxed">
              {t("address")}
            </p>
            <div className="mt-3 space-y-1">
              <p className="text-sm text-gray-400">
                <span className="text-gray-500">{t("phone")}: </span>
                {t("phone") === "전화" ? "070-4837-2829" : "070-4837-2829"}
              </p>
              <p className="text-sm text-gray-400">
                <span className="text-gray-500">{t("email")}: </span>
                refind@refind.kr
              </p>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-white font-semibold mb-4">{tn("products")}</h3>
            <ul className="space-y-2">
              {[
                { href: `/${locale}/products/robot-hand`, label: tn("robotHand") },
                { href: `/${locale}/products/collaborative-robot`, label: tn("collaborativeRobot") },
                { href: `/${locale}/products/physical-ai`, label: tn("physicalAI") },
                { href: `/${locale}/products/humanoid`, label: tn("humanoid") },
                { href: `/${locale}/products/body-enhancement`, label: tn("bodyEnhancement") },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-gray-400 hover:text-primary-400 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4">{tn("about")}</h3>
            <ul className="space-y-2">
              <li>
                <Link href={`/${locale}/about`} className="text-sm text-gray-400 hover:text-primary-400 transition-colors">
                  {tn("about")}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/inquiry`} className="text-sm text-gray-400 hover:text-primary-400 transition-colors">
                  {tn("inquiry")}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">{t("copyright")}</p>
          <div className="flex gap-4">
            <Link href={`/${locale}/privacy`} className="text-sm text-gray-500 hover:text-gray-300 transition-colors">
              {t("links.privacy")}
            </Link>
            <Link href={`/${locale}/terms`} className="text-sm text-gray-500 hover:text-gray-300 transition-colors">
              {t("links.terms")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
