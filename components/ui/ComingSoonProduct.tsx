import Link from "next/link";

interface Props {
  locale: string;
  category: string;
  categoryLabel: string;
  name: string;
  tagline: string;
}

export default function ComingSoonProduct({ locale, category, categoryLabel, name, tagline }: Props) {
  const isKo = locale === "ko";

  return (
    <div className="pt-16 min-h-screen bg-white">
      <section className="py-24 bg-gray-950 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 50%, #E1251B 0%, transparent 50%), radial-gradient(circle at 80% 20%, #E1251B 0%, transparent 40%)",
          }}
        />
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <p className="text-xs font-bold tracking-[3px] text-[#E1251B] uppercase mb-4">
            {categoryLabel}
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-5 tracking-tight">
            {name}
          </h1>
          <p className="text-lg text-white/60 leading-relaxed mb-4">{tagline}</p>
          <span className="inline-block px-4 py-1.5 text-xs font-bold rounded-full bg-white/10 text-white/50">
            {isKo ? "상세 페이지 준비 중" : "Detail Page Coming Soon"}
          </span>
        </div>
      </section>

      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            {isKo ? "제품에 대해 궁금한 점이 있으신가요?" : "Have questions about this product?"}
          </h2>
          <p className="text-gray-500 mb-6 text-sm">
            {isKo
              ? "상세 스펙은 준비 중이지만, 지금 바로 문의하시면 담당자가 안내해드립니다."
              : "The detail page is still in progress — contact us and our team will help right away."}
          </p>
          <div className="flex justify-center gap-3">
            <a
              href="https://form.naver.com/response/WxUcn3MgR1ouvktOE4JwYA"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-3.5 bg-gray-900 text-white font-semibold rounded-full hover:bg-gray-700 transition-colors text-sm"
            >
              {isKo ? "문의하기" : "Contact Us"}
            </a>
            <Link
              href={`/${locale}/products/${category}`}
              className="inline-flex items-center px-8 py-3.5 border border-gray-200 text-gray-600 font-semibold rounded-full hover:bg-gray-50 transition-colors text-sm"
            >
              {categoryLabel}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
