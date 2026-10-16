import type { Metadata } from "next";
import Image from "next/image";
import { Link } from "@/i18n/navigation";

interface PageProps { params: Promise<{ locale: string }> }
const path = "/products/physical-ai/ts-echo";
const assets = "/products/physical-ai/ts-echo";
const inquiry = "https://form.naver.com/response/WxUcn3MgR1ouvktOE4JwYA";
const source = "https://www.tashantec.com/newsDetail/74";

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const ko = locale === "ko";
  const title = ko ? "TASHAN TS-ECHO 촉각 데이터 글러브" : "TASHAN TS-ECHO Tactile Data Capture";
  const description = ko
    ? "사람의 손에 착용해 힘과 근접 정보를 수집하는 TASHAN TS-ECHO. 실제 착용 사진, 활용 분야, 제조사 공개 사양과 리파인 도입 상담."
    : "Wearable tactile data capture for human demonstrations. Explore TASHAN TS-ECHO, official specifications, application scenarios and integration inquiries.";
  return {
    title, description,
    alternates: { canonical: `${ko ? "" : "/eng"}${path}`, languages: { ko: path, en: `/eng${path}` } },
    openGraph: { title, description, url: `${ko ? "" : "/eng"}${path}`, type: "website", images: [{ url: `${assets}/demo-grasp.webp`, width: 1080, height: 720, alt: "TASHAN TS-ECHO" }] },
  };
}

export default async function TSEchoPage({ params }: PageProps) {
  const { locale } = await params;
  const ko = locale === "ko";
  const t = (kr: string, en: string) => ko ? kr : en;
  const features = [
    ["01", t("닿기 전부터, 잡고 놓을 때까지", "From approach to release"), t("물체와 가까워지는 순간의 근접 정보와 접촉 이후의 3차원 힘을 수집합니다. 눈으로 보는 손동작에 실제 접촉 정보를 더합니다.", "Capture proximity before contact and three-dimensional forces during interaction. Add physical contact information to visible hand movements.")],
    ["02", t("사람이 직접 보여주는 작업", "Learn from human demonstrations"), t("사람의 손에 착용하는 방식으로, 로봇을 직접 움직이지 않고도 일상적인 물체 조작에서 촉각 데이터를 수집할 수 있습니다.", "Wear the system on a human hand to collect tactile data from everyday object manipulation without operating a robot for each demonstration.")],
    ["03", t("다른 감각 데이터와 함께", "Connect multiple data streams"), t("제조사는 비전·동작 데이터와의 시간 동기화 및 SDK 연동을 안내합니다. 카메라와 기록 시스템을 연결해 연구 목적에 맞는 수집 환경을 구성합니다.", "The manufacturer describes time synchronization with vision and motion data, along with SDK integration. Build a capture setup around your cameras and recording system.")],
  ];
  const specs = [
    [t("힘 분해능", "Force resolution"), "≤ 0.02 N"],
    [t("최소 감지 힘", "Minimum detectable force"), "≤ 0.1 N"],
    [t("최대 측정 범위", "Maximum measuring range"), "30 N"],
    [t("근접 감지 거리", "Proximity sensing distance"), "≥ 10 mm"],
    [t("정확도", "Accuracy"), "≤ 5% FS"],
    [t("샘플링 속도", "Sampling rate"), "≥ 100 Hz"],
    [t("내구 시험", "Durability test"), t("1,000,000회", "1,000,000 cycles")],
    [t("연속 수집 시간", "Continuous acquisition"), t("≥ 4시간", "≥ 4 hours")],
    [t("무게", "Weight"), "< 100 g"],
  ];
  const applications = [
    [t("로봇 조작 학습", "Robot manipulation learning"), t("물체를 잡고 옮기고 놓는 사람의 시연에서 접촉 정보를 기록합니다. 모방학습용 데이터셋을 구성하는 데 활용할 수 있습니다.", "Record contact during human grasping, transfer and release demonstrations for imitation-learning datasets.")],
    [t("대학·연구기관", "Universities & research labs"), t("촉각·비전 융합, 파지 전략, 사람과 물체의 상호작용을 연구하는 실험 환경에 활용합니다.", "Support experiments on tactile-visual fusion, grasping strategies and human-object interaction.")],
    [t("멀티모달 데이터 수집", "Multimodal data collection"), t("작업 영상과 촉각 신호를 함께 기록하는 수집 환경을 구성합니다. 시간 동기화와 데이터 형식은 사용하는 장비에 맞춰 확인합니다.", "Build capture environments combining task videos and tactile signals. Confirm timing and data formats for your equipment.")],
  ];
  return (
    <div className="pt-28 bg-white text-slate-900">
      <section className="bg-[#0c1722] text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 pt-8 pb-14 md:pb-20">
          <nav aria-label={t("현재 위치", "Breadcrumb")} className="flex flex-wrap gap-2 text-xs text-slate-400 mb-12">
            <Link href="/products/physical-ai" className="hover:text-white">Physical AI</Link><span>/</span><Link href="/products/physical-ai/tashan" className="hover:text-white">TASHAN</Link><span>/</span><span className="text-white">TS-ECHO</span>
          </nav>
          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-14 items-center">
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] text-sky-300 mb-6">TASHAN · WEARABLE TACTILE SENSING</p>
              <h1 className="text-6xl md:text-7xl font-extrabold tracking-tight">TS-ECHO</h1>
              <p className="mt-4 text-sm text-slate-400">{t("촉각 데이터 글러브 · 핑거 슬리브", "Tactile data capture · Finger sleeves")}</p>
              <h2 className="text-3xl md:text-4xl font-bold leading-snug mt-9 mb-6 break-keep">{t("손끝의 경험을,", "From human touch,")}<br /><span className="text-sky-300">{t("로봇을 위한 데이터로.", "to data for robots.")}</span></h2>
              <p className="text-base leading-8 text-slate-300 max-w-lg break-keep">{t("사람의 손에 착용해 물체를 잡고 다룰 때의 힘과 근접 정보를 수집합니다. 실제 작업에서 얻은 촉각 데이터를 피지컬 AI 연구에 연결하세요.", "Capture forces and proximity as people grasp and manipulate objects. Bring tactile data from real interactions into physical AI research.")}</p>
              <div className="flex flex-wrap gap-3 mt-8">
                <a href={inquiry} target="_blank" rel="noopener noreferrer" className="rounded-full bg-white text-slate-950 font-bold text-sm px-6 py-3.5 hover:bg-sky-100">{t("제품 도입 문의", "Discuss your project")} ↗</a>
                <a href="#specifications" className="rounded-full border border-white/30 px-6 py-3.5 text-sm hover:bg-white/10">{t("사양 살펴보기", "Explore specifications")} ↓</a>
              </div>
            </div>
            <figure>
              <div className="rounded-2xl overflow-hidden bg-slate-800 border border-white/10">
                <Image src={`${assets}/demo-grasp-retouched-v2.webp`} width={1536} height={1024} alt={t("TS-ECHO 양손 착용 시연 — 제조사 사진 AI 보정", "TS-ECHO demonstration on both hands — AI-retouched manufacturer photograph")} priority sizes="(max-width: 1024px) 100vw, 660px" className="w-full h-auto" />
              </div>
              <figcaption className="mt-4 flex flex-wrap justify-between gap-3 text-xs text-slate-400"><span>{t("TASHAN 공식 시연 사진 · AI 보정", "TASHAN demonstration · AI retouched")}</span><a href={`${assets}/demo-grasp.webp`} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">{t("원본 사진 보기", "View original photo")} ↗</a></figcaption>
            </figure>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-14 pt-8 border-t border-white/15">
            {[["3D Force", t("3차원 힘 수집", "Three-dimensional forces")], ["≥ 100 Hz", t("샘플링 속도", "Sampling rate")], ["< 100 g", t("제조사 표기 무게", "Manufacturer-stated weight")], ["≥ 4 h", t("연속 데이터 수집", "Continuous acquisition")]].map(([value, label]) => <div key={value}><p className="text-2xl md:text-3xl font-semibold tracking-tight">{value}</p><p className="mt-2 text-xs text-slate-400">{label}</p></div>)}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20 md:py-28">
        <p className="text-xs text-primary-600 font-bold tracking-[0.2em] mb-5">BEYOND MOTION</p>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-snug break-keep">{t("움직임에, 접촉의 정보를 더하다", "Add the sense of touch to motion")}</h2>
        <p className="mt-5 max-w-2xl text-slate-500 leading-8 break-keep">{t("영상에는 손의 움직임이 담깁니다. TS-ECHO는 그 움직임 속에서 물체에 언제 닿았고, 어떤 힘이 가해졌는지 파악할 수 있는 촉각 정보를 수집합니다.", "Video shows how a hand moves. TS-ECHO collects tactile information that helps identify when contact occurs and what forces act during that movement.")}</p>
        <div className="grid md:grid-cols-3 gap-9 mt-12">{features.map(([number, title, body]) => <article key={number} className="border-t border-slate-300 pt-6"><span className="font-mono text-sm text-primary-600">{number}</span><h3 className="font-bold text-xl mt-5 mb-4 break-keep">{title}</h3><p className="text-sm leading-7 text-slate-500 break-keep">{body}</p></article>)}</div>
      </section>

      <section className="bg-[#f3f5f7] py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-[1.15fr_0.85fr] gap-10 lg:gap-16 items-center">
          <figure><Image src={`${assets}/demo-capture.webp`} width={1080} height={720} alt={t("손가락과 손목에 장착한 TS-ECHO 및 전시 현장의 데이터 시연 화면", "TS-ECHO finger and wrist components alongside a data demonstration display")} sizes="(max-width: 1024px) 100vw, 700px" className="w-full h-auto rounded-2xl" /><figcaption className="text-xs text-slate-500 mt-3">{t("제조사 공개 시연 사진. 사진 속 주변 장비의 기본 포함 여부는 별도 확인이 필요합니다.", "Manufacturer demonstration. Inclusion of surrounding equipment in the supplied package must be confirmed.")}</figcaption></figure>
          <div><p className="text-xs text-primary-600 font-bold tracking-[0.2em] mb-5">CAPTURE IN CONTEXT</p><h2 className="text-3xl font-bold leading-snug mb-8 break-keep">{t("손에 착용하고,", "Wear it.")}<br />{t("실제 작업을 기록하세요.", "Capture real interactions.")}</h2>
            <ol className="space-y-7">{[
              [t("착용", "Wear"), t("손가락과 손목에 장치를 장착하고 수집 환경을 준비합니다.", "Fit the finger and wrist components and prepare your recording setup.")],
              [t("작업 시연", "Demonstrate"), t("물체를 잡고 옮기는 작업을 사람이 직접 수행합니다.", "Perform the grasping and manipulation task with your own hands.")],
              [t("데이터 활용", "Build your dataset"), t("촉각 신호를 기록하고, 필요한 비전·동작 데이터와 연결해 분석과 학습에 활용합니다.", "Record tactile signals and integrate relevant vision and motion data for analysis and learning.")],
            ].map(([title, body], i) => <li key={title} className="flex gap-4"><span className="flex-shrink-0 flex items-center justify-center w-8 h-8 border border-slate-300 rounded-full text-xs font-mono">0{i + 1}</span><div><h3 className="font-bold mb-1">{title}</h3><p className="text-sm leading-7 text-slate-500 break-keep">{body}</p></div></li>)}</ol>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20 md:py-24">
        <p className="text-xs text-primary-600 font-bold tracking-[0.2em] mb-5">APPLICATIONS</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-10 break-keep">{t("촉각 데이터가 필요한 연구 현장에", "For research that needs tactile data")}</h2>
        <div className="grid md:grid-cols-3 gap-5">{applications.map(([title, body], i) => <article key={title} className="rounded-2xl bg-slate-50 p-7 md:p-8"><p className="text-xs font-mono text-slate-400 mb-8">USE CASE / 0{i + 1}</p><h3 className="text-xl font-bold mb-4">{title}</h3><p className="text-sm leading-7 text-slate-500 break-keep">{body}</p></article>)}</div>
      </section>

      <section id="specifications" className="scroll-mt-28 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-[0.7fr_1.3fr] gap-10 lg:gap-20">
          <div><p className="text-xs text-primary-600 font-bold tracking-[0.2em] mb-5">SPECIFICATIONS</p><h2 className="text-3xl md:text-4xl font-bold mb-5">{t("제품 사양", "Technical specifications")}</h2><p className="text-sm leading-7 text-slate-500 break-keep">{t("TASHAN의 WRC 2026 공식 발표에 포함된 공개 사양표 기준입니다. 매뉴얼 검증 수치가 아니며, 공급 버전과 측정 조건은 도입 상담 시 확인해 주세요.", "Based on the specification panel in TASHAN’s official WRC 2026 announcement, rather than a product manual. Confirm the supplied revision and measurement conditions when planning your project.")}</p><a href={`${assets}/specifications.webp`} target="_blank" rel="noopener noreferrer" className="inline-block mt-6 text-sm font-semibold underline underline-offset-4">{t("제조사 사양표 원본 보기", "View original specification panel")} ↗</a></div>
          <div><dl className="border-t-2 border-slate-900">{specs.map(([label, value]) => <div key={label} className="grid grid-cols-2 gap-4 py-4 px-2 border-b border-slate-200 text-sm"><dt className="text-slate-500">{label}</dt><dd className="font-semibold">{value}</dd></div>)}</dl><p className="text-xs text-slate-500 mt-5 leading-6">{t("FS는 전체 측정 범위(Full Scale)를 뜻합니다. 무게에 포함되는 구성품, 수집 시간의 시험 조건과 SDK 제공 범위는 공급 구성에 맞춰 확인합니다.", "FS means Full Scale. Confirm the components included in the stated weight, operating-time test conditions and SDK scope for your configuration.")}</p></div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="border border-slate-200 rounded-2xl p-6 md:p-9 grid md:grid-cols-2 gap-8">
          <div><h2 className="text-lg font-bold mb-4">{t("도입 전 함께 확인할 내용", "Plan your integration")}</h2><p className="text-sm leading-7 text-slate-500 break-keep">{t("한 손·양손 구성, 센서 수, 연결 방식, SDK와 데이터 출력 형식, 카메라 동기화 환경을 연구 목적에 맞게 상담합니다. 로봇 원격 제어나 ROS 2 연동은 사용할 시스템에 따라 별도 검토가 필요합니다.", "Discuss one- or two-hand configurations, sensor count, connectivity, SDK, data formats and camera synchronization. Robot teleoperation and ROS 2 integration require a review of your intended system.")}</p></div>
          <div><h2 className="text-lg font-bold mb-4">{t("자료 및 출처", "Official sources")}</h2><ul className="text-sm space-y-3 text-slate-600"><li><a href={source} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">{t("TASHAN TS-ECHO · WRC 2026 발표 및 사양", "TASHAN TS-ECHO · WRC 2026 announcement")} ↗</a></li><li><a href="https://www.tashantec.com/newsDetail/52" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">{t("TactileEcho Capture · 제품 소개", "TactileEcho Capture · Product introduction")} ↗</a></li></ul><p className="text-xs text-slate-400 mt-5">{t("사진·사양 출처: TASHAN. 상단 사진은 AI 보정본이며, 제품의 세부 구조는 연결된 원본 사진을 참고해 주세요. 본문의 활용 설명은 리파인이 한국어로 재구성했습니다.", "Source images and specifications: TASHAN. The hero photograph is AI retouched; refer to the linked original for product details. Application descriptions adapted by Refind.")}</p></div>
        </div>
      </section>

      <section className="bg-[#0c1722] text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row md:items-center justify-between gap-8"><div><p className="text-sky-300 text-xs tracking-[0.2em] mb-4">START WITH YOUR RESEARCH</p><h2 className="text-2xl md:text-3xl font-bold mb-4 break-keep">{t("어떤 손동작을 데이터로 남기고 싶으신가요?", "What interaction do you want to capture?")}</h2><p className="text-sm leading-7 text-slate-400">{t("연구 목적과 사용 장비를 알려주시면, 적합한 도입 구성을 함께 확인하겠습니다.", "Tell us about your research and equipment so we can review a suitable configuration.")}</p></div><a href={inquiry} target="_blank" rel="noopener noreferrer" className="self-start md:self-auto flex-shrink-0 bg-white text-slate-950 rounded-full px-8 py-4 text-sm font-bold hover:bg-sky-100">{t("리파인에 문의하기", "Contact Refind")} ↗</a></div>
      </section>
    </div>
  );
}
