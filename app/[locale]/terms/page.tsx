import type { Metadata } from "next";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const isKo = locale === "ko";
  return {
    title: isKo ? "이용약관" : "Terms of Service",
    description: isKo
      ? "리파인주식회사 웹사이트 이용약관"
      : "Refind Inc. Website Terms of Service",
  };
}

const EFFECTIVE_DATE = { ko: "2026년 8월 7일", en: "August 7, 2026" };

const SECTIONS_KO = [
  {
    title: "제1조 (목적)",
    body: [
      "이 약관은 리파인주식회사(이하 '회사')가 운영하는 웹사이트(이하 '사이트')를 이용함에 있어 회사와 이용자의 권리·의무 및 책임사항, 그 밖에 필요한 사항을 규정하는 것을 목적으로 합니다.",
    ],
  },
  {
    title: "제2조 (정의)",
    body: [
      "1. '사이트'란 회사가 제품 정보, 공지사항, 카드뉴스 등의 콘텐츠를 제공하기 위하여 운영하는 웹사이트를 말합니다.",
      "2. '이용자'란 사이트에 접속하여 이 약관에 따라 회사가 제공하는 정보 및 서비스를 이용하는 자를 말합니다.",
      "3. '관리자'란 사이트의 공지사항·카드뉴스 게시물 작성 및 관리 권한을 부여받은 회사 임직원을 말합니다.",
    ],
  },
  {
    title: "제3조 (약관의 효력 및 변경)",
    body: [
      "1. 이 약관은 사이트에 게시함으로써 효력이 발생합니다.",
      "2. 회사는 관계 법령을 위반하지 않는 범위에서 이 약관을 변경할 수 있으며, 변경 시 사이트를 통해 공지합니다.",
      "3. 변경된 약관 공지 이후에도 이용자가 사이트 이용을 계속하는 경우 변경 내용에 동의한 것으로 봅니다.",
    ],
  },
  {
    title: "제4조 (서비스의 내용)",
    body: [
      "회사는 사이트를 통해 다음과 같은 정보 및 서비스를 제공합니다.",
      "1. 회사 및 제품 소개 정보",
      "2. 공지사항 및 카드뉴스 콘텐츠",
      "3. 그 밖에 회사가 정하여 제공하는 서비스",
      "사이트는 일반 이용자를 위한 회원가입 및 게시물 작성 기능을 제공하지 않으며, 관리자 로그인은 공지사항·카드뉴스 관리 목적으로 회사 임직원에게만 부여됩니다.",
    ],
  },
  {
    title: "제5조 (서비스 이용시간 및 중단)",
    body: [
      "1. 서비스는 연중무휴, 1일 24시간 제공됨을 원칙으로 합니다.",
      "2. 회사는 시스템 점검, 서버 장애, 그 밖의 부득이한 사정이 있는 경우 서비스 제공을 일시적으로 중단할 수 있습니다.",
    ],
  },
  {
    title: "제6조 (이용자의 의무)",
    body: [
      "이용자는 사이트를 이용함에 있어 다음 행위를 하여서는 안 됩니다.",
      "1. 사이트에 게시된 콘텐츠(제품 정보, 이미지, 문서 등)를 회사의 사전 동의 없이 복제, 전송, 배포, 출판 등의 방법으로 이용하는 행위",
      "2. 사이트의 정상적인 운영을 방해하거나 서버에 부당한 부담을 주는 행위",
      "3. 관계 법령 및 이 약관에서 금지하는 행위",
    ],
  },
  {
    title: "제7조 (지식재산권)",
    body: [
      "사이트에 게시된 텍스트, 이미지, 로고, 제품 정보 등 모든 콘텐츠에 대한 저작권 및 지식재산권은 회사 또는 정당한 권리자에게 있으며, 회사의 사전 서면 동의 없이 이를 영리적 목적으로 이용할 수 없습니다.",
    ],
  },
  {
    title: "제8조 (외부 링크 및 면책)",
    body: [
      "1. 사이트는 이용자의 편의를 위해 네이버폼 등 외부 서비스로 연결되는 링크를 제공할 수 있습니다. 외부 서비스에서 발생하는 사항에는 해당 서비스의 약관 및 정책이 적용되며, 회사는 이에 대해 책임을 지지 않습니다.",
      "2. 회사는 사이트에 게시된 제품 사양·정보의 정확성을 위해 노력하나, 제품 사양은 제조사의 정책에 따라 사전 고지 없이 변경될 수 있으므로 최신 정보는 회사에 별도로 문의하여 확인하는 것을 권장합니다.",
      "3. 회사는 천재지변 등 불가항력적 사유로 인한 서비스 중단에 대해서는 책임을 지지 않습니다.",
    ],
  },
  {
    title: "제9조 (준거법 및 관할법원)",
    body: [
      "이 약관과 관련하여 회사와 이용자 간 분쟁이 발생한 경우 대한민국 법을 적용하며, 소송이 제기되는 경우 민사소송법상의 관할 법원에 제기합니다.",
    ],
  },
  {
    title: "부칙",
    body: [`이 약관은 ${EFFECTIVE_DATE.ko}부터 시행합니다.`],
  },
];

const SECTIONS_EN = [
  {
    title: "Article 1 (Purpose)",
    body: [
      "These Terms of Service (the \"Terms\") govern the rights, obligations, and responsibilities of Refind Inc. (the \"Company\") and users in connection with the use of the website operated by the Company (the \"Site\").",
    ],
  },
  {
    title: "Article 2 (Definitions)",
    body: [
      "1. \"Site\" means the website operated by the Company to provide content such as product information, notices, and card news.",
      "2. \"User\" means any person who accesses the Site and uses the information and services provided by the Company under these Terms.",
      "3. \"Administrator\" means a Company staff member granted permission to create and manage Notice and Card News posts on the Site.",
    ],
  },
  {
    title: "Article 3 (Effect and Amendment of the Terms)",
    body: [
      "1. These Terms take effect upon being posted on the Site.",
      "2. The Company may amend these Terms to the extent permitted by applicable law, and will announce any amendment on the Site.",
      "3. If a User continues to use the Site after an amendment is announced, the User is deemed to have agreed to the amended Terms.",
    ],
  },
  {
    title: "Article 4 (Description of Service)",
    body: [
      "The Company provides the following information and services through the Site:",
      "1. Information about the Company and its products",
      "2. Notice and Card News content",
      "3. Other services determined by the Company",
      "The Site does not offer public user registration or posting features. Administrator login is granted only to Company staff for the purpose of managing Notice and Card News content.",
    ],
  },
  {
    title: "Article 5 (Service Hours and Suspension)",
    body: [
      "1. The Service is, in principle, available 24 hours a day, year-round.",
      "2. The Company may temporarily suspend the Service in the event of system maintenance, server failure, or other unavoidable circumstances.",
    ],
  },
  {
    title: "Article 6 (User Obligations)",
    body: [
      "Users shall not engage in any of the following while using the Site:",
      "1. Reproducing, transmitting, distributing, or publishing content posted on the Site (product information, images, documents, etc.) without the Company's prior consent",
      "2. Interfering with the normal operation of the Site or placing an unreasonable burden on its servers",
      "3. Any act prohibited by applicable law or these Terms",
    ],
  },
  {
    title: "Article 7 (Intellectual Property)",
    body: [
      "Copyright and other intellectual property rights in all content posted on the Site — including text, images, logos, and product information — belong to the Company or the applicable rights holder, and may not be used for commercial purposes without the Company's prior written consent.",
    ],
  },
  {
    title: "Article 8 (External Links and Disclaimer)",
    body: [
      "1. The Site may provide links to external services, such as Naver Form, for the User's convenience. Matters arising from the use of such external services are governed by that service's own terms and policies, and the Company assumes no responsibility for them.",
      "2. The Company strives for accuracy in the product specifications and information posted on the Site; however, specifications may change without prior notice based on the manufacturer's policy, and Users are advised to contact the Company separately for the most current information.",
      "3. The Company is not liable for service disruptions caused by force majeure, including natural disasters.",
    ],
  },
  {
    title: "Article 9 (Governing Law and Jurisdiction)",
    body: [
      "Any dispute between the Company and a User in connection with these Terms shall be governed by the laws of the Republic of Korea, and any lawsuit shall be filed with the court of competent jurisdiction under the Civil Procedure Act.",
    ],
  },
  {
    title: "Supplementary Provision",
    body: [`These Terms are effective as of ${EFFECTIVE_DATE.en}.`],
  },
];

export default async function TermsPage({ params }: PageProps) {
  const { locale } = await params;
  const isKo = locale === "ko";
  const sections = isKo ? SECTIONS_KO : SECTIONS_EN;

  return (
    <div className="pt-16">
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 py-24">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="text-4xl font-bold text-white mb-3">
            {isKo ? "이용약관" : "Terms of Service"}
          </h1>
          <p className="text-gray-400">
            {isKo ? "리파인주식회사" : "Refind Inc."}
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-6 prose prose-sm sm:prose-base prose-headings:font-bold prose-headings:text-gray-900 text-gray-700">
          {sections.map((section) => (
            <div key={section.title} className="mb-10">
              <h2>{section.title}</h2>
              {section.body.map((line, i) => (
                <p key={i}>{line}</p>
              ))}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
