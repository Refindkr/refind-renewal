import Image from "next/image";
import { Link } from "@/i18n/navigation";

interface ProductCard {
  slug: string;
  href?: string;
  name: string;
  nameEn: string;
  tagline: string;
  image: string;
  tags: string[];
}

interface ProductCategoryPageProps {
  locale: string;
  title: string;
  titleEn: string;
  description: string;
  products: ProductCard[];
  categorySlug: string;
}

export default function ProductCategoryPage({
  locale,
  title,
  titleEn,
  description,
  products,
  categorySlug,
}: ProductCategoryPageProps) {
  return (
    <div className="pt-16 min-h-screen bg-white">
      {/* Hero */}
      <section className="py-20 bg-gray-950 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: "radial-gradient(circle at 20% 50%, #E1251B 0%, transparent 50%), radial-gradient(circle at 80% 20%, #E1251B 0%, transparent 40%)",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-6">
          <p className="text-xs font-bold tracking-[3px] text-[#E1251B] uppercase mb-4">
            Products · {titleEn}
          </p>
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-5 tracking-tight">
            {title}
          </h1>
          <p className="text-lg text-white/60 max-w-2xl leading-relaxed">{description}</p>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <Link
                key={product.slug}
                href={product.href ?? `/products/${categorySlug}/${product.slug}`}
                className="group bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl hover:-translate-y-1 hover:border-primary-200 transition-all duration-300"
              >
                {/* Image */}
                <div className="relative h-56 bg-gray-50 p-4">
                  <div className="relative h-full w-full rounded-xl bg-white overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-contain p-5 group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {product.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-primary-50 text-primary-600 tracking-wide"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{product.name}</h3>
                  <p className="text-xs text-gray-400 mb-3">{product.nameEn}</p>
                  <p className="text-sm text-gray-500 leading-relaxed">{product.tagline}</p>

                  <div className="mt-5 flex items-center gap-1 text-sm font-semibold text-primary-500 group-hover:gap-2 transition-all">
                    {locale === "ko" ? "자세히 보기" : "Learn more"}
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            {locale === "ko" ? "제품에 대해 궁금한 점이 있으신가요?" : "Have questions about our products?"}
          </h2>
          <p className="text-gray-500 mb-6 text-sm">
            {locale === "ko"
              ? "전문가가 직접 상담해드립니다. 지금 문의해주세요."
              : "Our experts are ready to help. Contact us today."}
          </p>
          <a
            href="https://form.naver.com/response/WxUcn3MgR1ouvktOE4JwYA"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-3.5 bg-gray-900 text-white font-semibold rounded-full hover:bg-gray-700 transition-colors text-sm"
          >
            {locale === "ko" ? "협업 문의하기" : "Contact Us"}
          </a>
        </div>
      </section>
    </div>
  );
}
