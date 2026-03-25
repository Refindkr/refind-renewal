import { getTranslations } from "next-intl/server";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function AboutPage({ params }: PageProps) {
  await params;
  const t = await getTranslations("about");

  const coreValues = [
    { key: "innovation", icon: "💡", color: "bg-yellow-50 border-yellow-200" },
    { key: "professionalism", icon: "⭐", color: "bg-blue-50 border-blue-200" },
    { key: "ethics", icon: "🤝", color: "bg-green-50 border-green-200" },
    { key: "collaboration", icon: "🌐", color: "bg-purple-50 border-purple-200" },
    { key: "positivity", icon: "✨", color: "bg-pink-50 border-pink-200" },
  ] as const;

  const th = await getTranslations("home.coreValues");

  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold text-white mb-4">{t("title")}</h1>
          <p className="text-xl text-gray-400">{t("companyName")}</p>
        </div>
      </section>

      {/* Company Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">{t("philosophy.title")}</h2>
              <div className="space-y-6">
                <div className="p-6 bg-primary-50 rounded-2xl border border-primary-100">
                  <h3 className="text-lg font-bold text-primary-600 mb-2">{t("philosophy.vision")}</h3>
                  <p className="text-gray-700">{t("philosophy.visionText")}</p>
                </div>
                <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">{t("philosophy.mission")}</h3>
                  <p className="text-gray-700">{t("philosophy.missionText")}</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-3xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">{t("ci.title")}</h3>
              <div className="flex items-center justify-center mb-6">
                <span className="text-6xl font-black text-primary-400">rf</span>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">{t("ci.description")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Core Values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {coreValues.map(({ key, icon, color }) => (
              <div key={key} className={`p-6 rounded-2xl border ${color} text-center`}>
                <span className="text-4xl mb-3 block">{icon}</span>
                <h3 className="font-bold text-gray-900 mb-2">{th(key)}</h3>
                <p className="text-sm text-gray-600">{th(`${key}Text`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Contact</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: t("founded"), value: t("foundedYear"), icon: "📅" },
              { label: t("location"), value: t("locationText"), icon: "📍" },
              { label: t("phone"), value: "070-4837-2829", icon: "📞" },
              { label: t("email"), value: "refind@refind.kr", icon: "✉️" },
            ].map((item) => (
              <div key={item.label} className="p-6 bg-gray-50 rounded-2xl">
                <span className="text-2xl mb-3 block">{item.icon}</span>
                <p className="text-sm text-gray-500 mb-1">{item.label}</p>
                <p className="font-medium text-gray-900">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
