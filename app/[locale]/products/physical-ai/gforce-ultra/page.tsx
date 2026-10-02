import type { Metadata } from "next";
import Image from "next/image";
import { Link } from "@/i18n/navigation";

interface PageProps { params: Promise<{ locale: string }> }
const brochure = "/downloads/gforce-ultra.pdf";
const inquiry = "https://form.naver.com/response/WxUcn3MgR1ouvktOE4JwYA";

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: "gForce Ultra EMG " + (locale === "ko" ? "암밴드" : "Armband"),
    description: locale === "ko"
      ? "OYMotion gForce Ultra. 24-bit ADC, 8채널 건식 근전도와 6축 IMU를 갖춘 암밴드. 원시 EMG와 제스처 인식 결과 동시 출력. 리파인 도입 상담 및 제품 자료."
      : "OYMotion gForce Ultra: 24-bit ADC, 8-channel dry EMG and 6-axis IMU. Simultaneous raw EMG and gesture output. Product information and inquiries from Refind.",
  };
}

export default async function GForceUltraPage({ params }: PageProps) {
  const { locale } = await params;
  const ko = locale === "ko";
  const t = (kr: string, en: string) => ko ? kr : en;
  const specs = [
    [t("EMG 전극", "EMG electrodes"), t("8채널 건식 전극", "8-channel dry electrodes")],
    [t("ADC 해상도", "ADC resolution"), "24-bit"],
    [t("ADC 샘플링 속도", "ADC sampling rate"), "1,000 Hz"],
    [t("EMG 샘플링 속도", "EMG sampling rate"), "500 Hz"],
    ["IMU", t("6축 · 50 Hz", "6-axis · 50 Hz")],
    [t("통신", "Communication"), "BLE 4.2"],
    [t("본체 크기 (L × W × H)", "Main unit (L × W × H)"), "53 × 28 × 17 mm"],
    [t("밴드 길이", "Wristband length"), "XS 190 / S 202 / M 216 / L 230 mm (±2 mm)"],
    [t("배터리", "Battery"), t("리튬 폴리머 · 200 mAh", "Lithium polymer · 200 mAh")],
    [t("작동 시간", "Operating time"), t("5시간 (제조사 표기)", "5 hours (manufacturer specification)")],
    [t("정격 전류", "Rated current"), "30 mA"],
    [t("상태 표시", "Indicators"), t("녹색 상태 LED · 주황색 충전 LED", "Green status LED · orange charging LED")],
    [t("버튼", "Button"), t("전원 켜기 / 끄기", "Power on / off")],
  ];
  const features = [
    [t("24-bit 신호 수집", "24-bit signal acquisition"), t("기존 12-bit 구조에서 24-bit ADC로 변경됐습니다. 제조사는 의료용 등급 증폭기를 적용했다고 설명하며, 더 세밀한 근전도 신호 수집을 목표로 합니다.", "Upgraded from the previous 12-bit architecture to a 24-bit ADC. The manufacturer describes a medical-grade amplifier for finer EMG signal acquisition.")],
    [t("원시 신호와 인식 결과를 동시에", "Raw signals and recognition together"), t("원시 EMG 데이터와 제스처 인식 결과를 동시에 출력합니다. 근육 신호를 분석하면서 인식 결과를 함께 기록하고, 제어 알고리즘 개발에 활용할 수 있습니다.", "Outputs raw EMG data and gesture recognition results simultaneously, enabling signal analysis alongside recognition logging and control algorithm development.")],
    [t("범용 제스처 인식 모델", "General-purpose gesture model"), t("범용 제스처 인식 모델을 지원합니다. 제조사는 향후 소프트웨어 업데이트를 통해 모델을 지속적으로 개선할 예정이라고 안내하고 있습니다.", "Supports a general-purpose gesture recognition model. The manufacturer plans continued model improvements through future software updates.")],
  ];
  return (
    <div className="pt-16 min-h-screen bg-white">
      <section className="bg-gray-950 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xs font-bold tracking-[3px] text-primary-400 mb-5">OYMotion · EMG ARMBAND</p>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-6">gForce Ultra</h1>
            <p className="text-lg leading-relaxed text-white/70 mb-8">{t("근육의 신호를 데이터와 인터랙션으로. 8채널 건식 근전도와 6축 IMU를 갖춘 새로운 암밴드로, 신호 분석부터 제스처 기반 응용 개발까지 연결합니다.", "Turn muscle signals into data and interaction. A new armband combining 8-channel dry EMG and a 6-axis IMU for signal analysis and gesture-based application development.")}</p>
            <div className="flex flex-wrap gap-2 mb-8">{["24-bit ADC", "8ch EMG", "6-axis IMU", "Raw + Gesture"].map(x => <span key={x} className="rounded-full border border-white/20 px-3 py-1 text-xs text-white/80">{x}</span>)}</div>
            <div className="flex flex-wrap gap-3">
              <a href={inquiry} target="_blank" rel="noopener noreferrer" className="rounded-full bg-white px-6 py-3 text-sm font-bold text-gray-900">{t("제품 문의하기", "Product Inquiry")}</a>
              <a href={brochure} target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/30 px-6 py-3 text-sm font-bold text-white">{t("제품 자료 PDF", "Product Brochure PDF")}</a>
            </div>
          </div>
          <a href={brochure} target="_blank" rel="noopener noreferrer" className="block max-w-sm mx-auto rounded-2xl overflow-hidden">
            <Image src="/products/physical-ai/gforce-ultra-brochure.jpg" alt={t("OYMotion gForce Ultra 공식 제품 이미지", "OYMotion gForce Ultra official product brochure")} width={1000} height={1357} priority sizes="(max-width: 768px) 90vw, 384px" className="w-full h-auto" />
          </a>
        </div>
      </section>
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-2xl font-extrabold mb-10">{t("새로워진 신호 수집과 제스처 인식", "Updated acquisition and gesture recognition")}</h2>
        <div className="grid md:grid-cols-3 gap-8">{features.map(([title, body], i) => <article key={title} className="border-t-2 border-gray-900 pt-5"><p className="text-primary-600 text-sm font-bold mb-4">0{i + 1}</p><h3 className="text-lg font-bold mb-3">{title}</h3><p className="text-sm leading-relaxed text-gray-600">{body}</p></article>)}</div>
      </section>
      <section className="bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-extrabold mb-3">{t("제품 사양", "Specifications")}</h2>
          <p className="text-sm text-gray-500 mb-8">{t("첨부 제품 자료 2쪽 기준입니다. ADC와 EMG 샘플링 속도는 구분해서 표기했습니다.", "Based on page 2 of the product brochure. ADC and EMG sampling rates are listed separately.")}</p>
          <dl className="rounded-2xl border border-gray-200 overflow-hidden bg-white divide-y divide-gray-100">{specs.map(([k, v]) => <div key={k} className="grid sm:grid-cols-[1fr_1.4fr] gap-2 px-5 py-4 text-sm"><dt className="text-gray-500">{k}</dt><dd className="font-semibold text-gray-900">{v}</dd></div>)}</dl>
          <p className="mt-5 text-sm text-gray-600">{t("스펙 근거: OYMotion gForce Ultra 제품 자료, 1–2쪽.", "Specification source: OYMotion gForce Ultra brochure, pages 1–2.")} <a href={`${brochure}#page=2`} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">{t("원문 PDF 보기", "View source PDF")}</a></p>
        </div>
      </section>
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-extrabold mb-4">{t("무선 연결 업데이트 계획", "Wireless connectivity roadmap")}</h2>
        <p className="text-sm leading-relaxed text-gray-600">{t("현재 제품 자료의 통신 사양은 BLE 4.2입니다. Bluetooth 5.0은 향후 하드웨어 개정에서 지원할 예정이며, 여러 Bluetooth 5.0 동글을 이용한 다중 장치 연결과 동기 수집도 제조사 업그레이드 안내에 포함돼 있습니다. 적용 하드웨어·동글 구성과 동기화 조건은 공급 시 확인이 필요합니다.", "The current brochure specifies BLE 4.2. Bluetooth 5.0 is planned for a future hardware revision. The upgrade announcement also describes multiple Bluetooth 5.0 dongles for multi-device connections and synchronized acquisition. Applicable hardware, dongle configuration and synchronization conditions must be confirmed for the supplied version.")}</p>
        <p className="mt-4 text-xs text-gray-500">{t("업그레이드 설명은 제조사 제공 안내 기준입니다. 의료용 등급 증폭기라는 설명은 제품의 의료기기 인증을 의미하지 않습니다.", "Upgrade descriptions follow the supplied manufacturer announcement. The amplifier description does not establish medical-device certification.")}</p>
      </section>
      <section className="bg-gray-950 py-16 text-center">
        <div className="max-w-3xl mx-auto px-6"><h2 className="text-2xl font-bold text-white mb-4">{t("연구 환경에 맞는 구성을 상담하세요", "Find the configuration for your research")}</h2><p className="text-sm text-white/60 mb-8">{t("밴드 사이즈, 데이터 수집 환경, 제스처 기반 인터페이스 개발 목적을 알려주세요.", "Tell us your band size, data acquisition setup and gesture interface development needs.")}</p><div className="flex flex-wrap justify-center gap-4"><a href={inquiry} target="_blank" rel="noopener noreferrer" className="bg-white text-gray-900 rounded-full px-7 py-3 font-bold text-sm">{t("도입 문의하기", "Contact Refind")}</a><Link href="/products/physical-ai/bcibmi" className="border border-white/30 text-white rounded-full px-7 py-3 text-sm">{t("BCI/BMI 전체 보기", "All BCI/BMI Products")}</Link></div></div>
      </section>
    </div>
  );
}
