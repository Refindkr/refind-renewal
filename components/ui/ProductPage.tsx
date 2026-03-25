import Link from "next/link";

interface ProductItem {
  name: string;
  description: string;
}

interface ProductPageProps {
  locale: string;
  title: string;
  description: string;
  items: ProductItem[];
  icon: string;
  color: string;
}

export default function ProductPage({ locale, title, description, items, icon, color }: ProductPageProps) {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className={`py-24 ${color}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-5xl">{icon}</span>
          </div>
          <h1 className="text-5xl font-bold text-white mb-4">{title}</h1>
          <p className="text-xl text-white/80 max-w-2xl">{description}</p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((item, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-md hover:border-primary-200 transition-all duration-300">
                <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center mb-4">
                  <span className="text-primary-400 font-bold text-lg">{String(idx + 1).padStart(2, "0")}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.name}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            {locale === "ko" ? "제품에 대해 궁금한 점이 있으신가요?" : "Have questions about our products?"}
          </h2>
          <Link
            href={`/${locale}/inquiry`}
            className="inline-flex items-center px-8 py-4 bg-primary-400 text-white font-semibold rounded-xl hover:bg-primary-500 transition-colors"
          >
            {locale === "ko" ? "문의하기" : "Contact Us"}
          </Link>
        </div>
      </section>
    </div>
  );
}
