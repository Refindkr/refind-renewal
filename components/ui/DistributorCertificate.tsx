import Image from "next/image";

interface Props {
  image: string;
  imageWidth: number;
  imageHeight: number;
  imageWidthClass?: string;
  brand: string;
  isKo: boolean;
  descriptionKo: string;
  descriptionEn: string;
}

// 브랜드 공식 대리점 인증서를 보여주는 섹션 — 로봇핸드(OYmotion), 협동로봇/휴머노이드(RealMan),
// 촉각센서(Tashan) 등 여러 제품 페이지에서 공통으로 사용
export default function DistributorCertificate({
  image,
  imageWidth,
  imageHeight,
  imageWidthClass = "w-56",
  brand,
  isKo,
  descriptionKo,
  descriptionEn,
}: Props) {
  return (
    <section className="py-16 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-8 bg-gray-50 rounded-2xl border border-gray-100 p-8">
          <a href={image} target="_blank" rel="noopener noreferrer" className="shrink-0">
            <Image
              src={image}
              alt={isKo ? `${brand} 공식 대리점 인증서` : `${brand} Authorized Distributor Certificate`}
              width={imageWidth}
              height={imageHeight}
              className={`${imageWidthClass} rounded-lg border border-gray-200 shadow-sm`}
            />
          </a>
          <div>
            <p className="text-xs font-bold text-primary-500 uppercase tracking-widest mb-2">
              {isKo ? "공식 대리점 인증" : "Authorized Distributor"}
            </p>
            <h3 className="text-xl font-bold text-gray-900 mb-2">{brand}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{isKo ? descriptionKo : descriptionEn}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
