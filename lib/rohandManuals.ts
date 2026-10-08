export const rohandManuals = {
  a001: { model: "ROH-A001", version: "V1.3.3", pages: "3–4", pdfPage: 5, file: "20260302100756ROH-A001-Dexterous-Hand-V1.3.3.pdf" },
  a002: { model: "ROH-A002", version: "V1.1.5", pages: "3–4", pdfPage: 5, file: "20260908160054ROH-A002-Dexterous-Hand-V1.1.5.pdf" },
  ap001: { model: "ROH-AP001", version: "V1.0.8", pages: "3–5", pdfPage: 5, file: "20260908160022ROH-AP001-Dexterous-Hand-V1.0.8.pdf" },
  ap002: { model: "ROH-AP002", version: "V1.0.2", pages: "3–5", pdfPage: 5, url: "https://oymotion.github.io/en/ROHand/imgs/ROH-AP002-Dexterous-Hand-V1.0.2.pdf" },
  lite: { model: "ROH-LiteS001", version: "V1.0.8", pages: "4–6", pdfPage: 6, file: "20260908155921ROH-LiteS001-Dexterous-Hand-V1.0.8.pdf" },
} as const;

export type ROHandManualModel = keyof typeof rohandManuals;
export function rohandManualUrl(model: ROHandManualModel) {
  const manual = rohandManuals[model];
  return "url" in manual ? manual.url : `https://www.oymotion.com/upload/files/${manual.file}`;
}
