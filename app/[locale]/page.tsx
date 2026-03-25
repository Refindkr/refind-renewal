import Link from "next/link";
import { getTranslations } from "next-intl/server";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function HomePage({ params }: PageProps) {
  const { locale } = await params;
  const t = await getTranslations("home");

  const coreValues = [
    { key: "innovation", icon: "💡" },
    { key: "professionalism", icon: "⭐" },
    { key: "ethics", icon: "🤝" },
    { key: "collaboration", icon: "🌐" },
    { key: "positivity", icon: "✨" },
  ] as const;

  const products = [
    { href: `/${locale}/products/robot-hand`, icon: "🤖", titleKey: "robotHand" as const, descKey: "robotHandDesc" as const },
    { href: `/${locale}/products/collaborative-robot`, icon: "🦾", titleKey: "collaborativeRobot" as const, descKey: "collaborativeRobotDesc" as const },
    { href: `/${locale}/products/physical-ai`, icon: "🧠", titleKey: "physicalAI" as const, descKey: "physicalAIDesc" as const },
    { href: `/${locale}/products/humanoid`, icon: "🚶", titleKey: "humanoid" as const, descKey: "humanoidDesc" as const },
    { href: `/${locale}/products/body-enhancement`, icon: "💪", titleKey: "bodyEnhancement" as const, descKey: "bodyEnhancementDesc" as const },
  ];

  const tn = await getTranslations("nav");
  const tp = await getTranslations("products");

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-gray-900 via-gray-800 to-primary-900 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-96 h-96 bg-primary-400/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-20 w-64 h-64 bg-primary-400/5 rounded-full blur-3xl" />
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center px-4 py-2 bg-primary-400/10 border border-primary-400/20 rounded-full mb-8">
              <span className="w-2 h-2 bg-primary-400 rounded-full mr-2 animate-pulse" />
              <span className="text-primary-400 text-sm font-medium">Refind Inc.</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6 whitespace-pre-line">
              {t("hero.title")}
            </h1>
            <p className="text-xl text-gray-300 mb-10 whitespace-pre-line">
              {t("hero.subtitle")}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href={`/${locale}/products/robot-hand`}
                className="inline-flex items-center justify-center px-8 py-4 bg-primary-400 text-white font-semibold rounded-xl hover:bg-primary-500 transition-colors"
              >
                {t("hero.cta")}
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href={`/${locale}/about`}
                className="inline-flex items-center justify-center px-8 py-4 border border-white/20 text-white font-semibold rounded-xl hover:bg-white/10 transition-colors"
              >
                {t("hero.ctaSecondary")}
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">{t("about.title")}</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-10">{t("about.description")}</p>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{t("about.vision")}</h3>
                    <p className="text-gray-600">{t("about.visionText")}</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{t("about.mission")}</h3>
                    <p className="text-gray-600">{t("about.missionText")}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Core Values */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-6">{t("about.values")}</h3>
              <div className="grid grid-cols-1 gap-4">
                {coreValues.map(({ key, icon }) => (
                  <div key={key} className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 hover:bg-primary-50 transition-colors">
                    <span className="text-2xl">{icon}</span>
                    <div>
                      <h4 className="font-semibold text-gray-900">{t(`coreValues.${key}`)}</h4>
                      <p className="text-sm text-gray-600 mt-0.5">{t(`coreValues.${key}Text`)}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t("products.title")}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { href: `/${locale}/products/robot-hand`, icon: "🤖", title: tp("robotHand.title"), desc: tp("robotHand.description") },
              { href: `/${locale}/products/collaborative-robot`, icon: "🦾", title: tp("collaborativeRobot.title"), desc: tp("collaborativeRobot.description") },
              { href: `/${locale}/products/physical-ai`, icon: "🧠", title: tp("physicalAI.title"), desc: tp("physicalAI.description") },
              { href: `/${locale}/products/humanoid`, icon: "🚶", title: tp("humanoid.title"), desc: tp("humanoid.description") },
              { href: `/${locale}/products/body-enhancement`, icon: "💪", title: tp("bodyEnhancement.title"), desc: tp("bodyEnhancement.description") },
            ].map((product) => (
              <Link
                key={product.href}
                href={product.href}
                className="group bg-white rounded-2xl p-8 border border-gray-100 hover:border-primary-300 hover:shadow-lg transition-all duration-300"
              >
                <span className="text-4xl mb-4 block">{product.icon}</span>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-400 transition-colors">
                  {product.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{product.desc}</p>
                <div className="mt-4 flex items-center text-primary-400 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  {t("products.viewAll")}
                  <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-24 bg-primary-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">{t("contact.title")}</h2>
          <p className="text-xl text-white/80 mb-10">{t("contact.description")}</p>
          <Link
            href={`/${locale}/inquiry`}
            className="inline-flex items-center px-8 py-4 bg-white text-primary-400 font-semibold rounded-xl hover:bg-gray-50 transition-colors"
          >
            {t("contact.button")}
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}
