import { rohandManuals, rohandManualUrl, type ROHandManualModel } from "@/lib/rohandManuals";

export default function ROHandSpecSource({ models, isKo }: { models: ROHandManualModel[]; isKo: boolean }) {
  return (
    <aside className="max-w-7xl mx-auto px-6 py-8" aria-label={isKo ? "사양 출처" : "Specification sources"}>
      <div className="border-t border-gray-200 pt-5 text-sm text-gray-600">
        <h2 className="font-semibold text-gray-900 mb-3">{isKo ? "스펙 근거 · 제조사 공식 매뉴얼" : "Specifications · Official manufacturer manuals"}</h2>
        <ul className="space-y-2">
          {models.map(model => {
            const manual = rohandManuals[model];
            return <li key={model}><a href={`${rohandManualUrl(model)}#page=${manual.pdfPage}`} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:text-gray-900">{manual.model} · {manual.version} · {isKo ? `본문 ${manual.pages}쪽` : `printed pp. ${manual.pages}`} (PDF)</a></li>;
          })}
        </ul>
        <p className="mt-4">{isKo ? "무게는 손목 포함 기준입니다. 수동 하중은 명시된 손가락 자세에서 버티는 하중이며, 모터가 능동적으로 쥐는 힘이나 로봇팔의 가반하중과 다릅니다." : "Weights include the wrist. Passive load is the supported load in the specified finger posture, not active gripping force or robot-arm payload."}</p>
        <p className="mt-2">{isKo ? "가동 관절 11개와 능동 자유도 6개를 구분합니다. 통신은 제품 버전에 따라 다르며, 모델명 끝의 -C는 CAN 버전입니다. 주문 시 해당 모델과 인터페이스를 확인하세요." : "11 movable joints and 6 active degrees of freedom are distinct. Interfaces depend on the variant; the -C suffix denotes CAN. Confirm the model and interface when ordering."}</p>
        <p className="mt-2 text-xs text-gray-500">{isKo ? "위에 표시된 제조사 매뉴얼 버전 기준" : "Based on the manufacturer manual versions listed above"}</p>
      </div>
    </aside>
  );
}
