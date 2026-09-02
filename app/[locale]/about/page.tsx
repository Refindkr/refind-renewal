import type { Metadata } from "next";
import Image from "next/image";
import { getTranslations } from "next-intl/server";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const isKo = locale === "ko";
  return {
    title: isKo ? "회사소개" : "About Us",
    description: isKo
      ? "리파인주식회사 회사 소개. Re(다시) + Find(찾다) — 역경 이후 자기 자신을 다시 발견하는 것을 돕는 첨단 로봇 기술 기업."
      : "About Refind Inc. Re + Find — a cutting-edge robotics company helping people rediscover themselves after adversity.",
  };
}

const milestones = [
  {
    year: "2020",
    items: [{ ko: "회사 설립", en: "Company founded" }],
  },
  {
    year: "2021",
    items: [{ ko: "벤처기업 인증", en: "Certified as a Venture Company" }],
  },
  {
    year: "2022",
    items: [
      { ko: "연세 미래메이커스페이스 사업단장상", en: "Yonsei Future Makerspace Program Director's Award" },
      { ko: "WMIT 제 8회 의료기기창업경진대회 우수상", en: "Excellence Award, 8th WMIT Medical Device Startup Competition" },
      { ko: "연세대학교 원주창업지원단 창업보육센터장상", en: "Yonsei University Wonju Startup Support Center Director's Award" },
      { ko: "기업부설연구소 인정(제2022110562)", en: "Certified In-house R&D Center (No. 2022110562)" },
    ],
  },
  {
    year: "2023",
    items: [
      {
        ko: "의료기기 제조업(8107)/의료기기 신고(수동식기능회복용기구)",
        en: "Registered as Medical Device Manufacturer (8107) — manual functional recovery device",
      },
    ],
  },
  {
    year: "2024",
    items: [
      {
        ko: "OYmotion(중국)의 휴머노이드 로봇 손 및 모든 제품 공식대리점 등록",
        en: "Appointed official distributor for OYmotion (China) — humanoid robot hands and full product line",
      },
      {
        ko: "University of Central Florida(미국) 납품업체등록 및 첫 수출",
        en: "Registered as supplier to University of Central Florida (USA); first export",
      },
      { ko: "지역특화 프로젝트 레전드 50+ 참여기업 선정", en: "Selected for the Regional Specialization Project \"Legend 50+\"" },
    ],
  },
  {
    year: "2025",
    items: [
      {
        ko: "Realman Robotics(중국)와 휴머노이드 로봇 공식대리점 등록",
        en: "Appointed official distributor for Realman Robotics (China) — humanoid robots",
      },
      { ko: "대표이사 원주시장(의료기기 산업) 표창", en: "CEO commended by the Mayor of Wonju (Medical Device Industry)" },
    ],
  },
] as const;

const patents = [
  {
    image: "/about/patent-1.jpg",
    number: "10-2240059",
    date: "2021.04.08",
    titleKo: "착용형 초음파 자극기",
    titleEn: "Wearable Ultrasound Stimulator",
  },
  {
    image: "/about/patent-4.jpg",
    number: "10-2467777",
    date: "2022.11.11",
    titleKo: "의지 보조기의 이용자와 제공자를 매칭하는 방법 및 디바이스",
    titleEn: "Method and Device for Matching Users and Providers of Prosthetic Assistive Devices",
  },
  {
    image: "/about/patent-2.jpg",
    number: "10-2855796",
    date: "2025.09.02",
    titleKo: "이승보조 장치에 활용되는 슬링 겸용 침대커버",
    titleEn: "Sling-Combined Bed Cover for Transfer Assist Devices",
  },
  {
    image: "/about/patent-5.jpg",
    number: "10-2946139",
    date: "2026.03.26",
    titleKo: "발목운동을 위한 근전도 피드백 시스템과 연동되는 유연로봇",
    titleEn: "Flexible Robot Linked with an EMG Feedback System for Ankle Exercise",
  },
  {
    image: "/about/patent-3.jpg",
    number: "10-2989670",
    date: "2026.07.07",
    titleKo: "사용자의 자가 자세 교정 및 고정이 가능한 로잉머신",
    titleEn: "Rowing Machine Enabling Self Posture Correction and Fixation",
  },
] as const;

const trademarks = [
  {
    image: "/about/trademark-1.jpg",
    number: "40-2038350",
    date: "2023.06.16",
    titleKo: "REFIND (로고형)",
    titleEn: "REFIND (logotype)",
  },
  {
    image: "/about/trademark-2.jpg",
    number: "40-2038349",
    date: "2023.06.16",
    titleKo: "REFIND (문자상표)",
    titleEn: "REFIND (wordmark)",
  },
  {
    image: "/about/trademark-3.jpg",
    number: "40-1721024",
    date: "2021.04.28",
    titleKo: "RF 심볼",
    titleEn: "RF Symbol",
  },
] as const;

export default async function AboutPage({ params }: PageProps) {
  const { locale } = await params;
  const isKo = locale === "ko";
  const t = await getTranslations("about");

  const coreValues = [
    "innovation",
    "professionalism",
    "ethics",
    "collaboration",
    "positivity",
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">{t("philosophy.title")}</h2>
              <div className="space-y-8">
                <div className="border-l-2 border-primary-400 pl-6">
                  <h3 className="text-xs font-bold text-primary-500 uppercase tracking-widest mb-2">
                    {t("philosophy.vision")}
                  </h3>
                  <p className="text-gray-700">{t("philosophy.visionText")}</p>
                </div>
                <div className="border-l-2 border-gray-200 pl-6">
                  <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">
                    {t("philosophy.mission")}
                  </h3>
                  <p className="text-gray-700">{t("philosophy.missionText")}</p>
                </div>
              </div>
            </div>

            <div className="border-t-2 border-gray-900 pt-6">
              <h3 className="text-xl font-bold text-gray-900 mb-6">{t("ci.title")}</h3>
              <div className="flex items-center justify-center mb-6 py-6">
                <Image
                  src="/brand-symbol.jpg"
                  alt="Refind Brand Symbol"
                  width={600}
                  height={400}
                  className="h-40 w-auto object-contain"
                />
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">{t("ci.description")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* History / Milestones */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">{isKo ? "주요 연혁" : "Milestones"}</h2>
          <div className="space-y-10">
            {milestones.map((m) => (
              <div key={m.year} className="grid grid-cols-1 sm:grid-cols-[7rem_1fr] gap-3 sm:gap-8 border-t-2 border-gray-900 pt-4">
                <div className="text-2xl font-bold text-gray-900">{m.year}</div>
                <ul className="space-y-1.5">
                  {m.items.map((item) => (
                    <li key={item.ko} className="text-gray-700 text-sm sm:text-base">
                      {isKo ? item.ko : item.en}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Core Values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {coreValues.map((key, i) => (
              <div key={key} className="border-t-2 border-gray-900 pt-4">
                <div className="text-xs font-bold text-gray-300 mb-3">{String(i + 1).padStart(2, "0")}</div>
                <h3 className="font-bold text-gray-900 mb-2">{th(key)}</h3>
                <p className="text-sm text-gray-500">{th(`${key}Text`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Patents & Trademarks */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">{isKo ? "특허 및 상표" : "Patents & Trademarks"}</h2>
          <p className="text-gray-500 mb-12">
            {isKo
              ? "리파인(주)이 보유한 지식재산권입니다."
              : "Intellectual property registered to Refind Inc."}
          </p>

          <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-6">
            {isKo ? "특허" : "Patents"}
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 mb-16">
            {patents.map((p) => (
              <div key={p.number} className="group">
                <a href={p.image} target="_blank" rel="noopener noreferrer" className="block relative aspect-[785/1114] rounded-lg overflow-hidden border border-gray-200 mb-3">
                  <Image
                    src={p.image}
                    alt={isKo ? p.titleKo : p.titleEn}
                    width={785}
                    height={1114}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                  />
                </a>
                <p className="text-xs text-gray-400 mb-0.5">
                  {isKo ? "특허" : "Patent"} {p.number} · {p.date}
                </p>
                <p className="text-sm font-medium text-gray-900 leading-snug">{isKo ? p.titleKo : p.titleEn}</p>
              </div>
            ))}
          </div>

          <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-6">
            {isKo ? "상표" : "Trademarks"}
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
            {trademarks.map((tm) => (
              <div key={tm.number} className="group">
                <a href={tm.image} target="_blank" rel="noopener noreferrer" className="block relative aspect-[785/1114] rounded-lg overflow-hidden border border-gray-200 mb-3">
                  <Image
                    src={tm.image}
                    alt={isKo ? tm.titleKo : tm.titleEn}
                    width={785}
                    height={1114}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                  />
                </a>
                <p className="text-xs text-gray-400 mb-0.5">
                  {isKo ? "상표" : "Trademark"} {tm.number} · {tm.date}
                </p>
                <p className="text-sm font-medium text-gray-900 leading-snug">{isKo ? tm.titleKo : tm.titleEn}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Contact</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { label: t("founded"), value: t("foundedYear") },
              { label: t("location"), value: t("locationText") },
              { label: t("phone"), value: "070-4837-2829" },
              { label: t("email"), value: "refind@refind.kr" },
            ].map((item) => (
              <div key={item.label} className="border-t-2 border-gray-900 pt-4">
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
