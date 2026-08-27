# Refind 웹사이트 리뉴얼 프로젝트

## DB 안전 규칙 — 반드시 준수

### 절대 실행 금지 명령어
다음 명령어는 어떤 상황에서도 실행하지 말 것:
- `prisma migrate reset`
- `prisma db push --force-reset`
- `DROP TABLE`, `TRUNCATE` (SQL 직접 실행)
- `DELETE FROM` (WHERE 조건 없는 전체 삭제)
- `prisma db seed` (프로덕션 환경에서)

### DB 작업 원칙
- 스키마 변경 시 반드시 사용자에게 먼저 설명하고 승인받을 것
- `prisma migrate dev`는 개발 DB에서만 실행
- 프로덕션 DB URL(`DATABASE_URL`)로 직접 데이터 조작 금지
- 마이그레이션 실행 전 현재 스키마 상태 확인 필수

---

## 프로젝트 개요

리파인주식회사(https://products.refind.kr/) 공식 웹사이트 리뉴얼 프로젝트.
기존 사이트의 콘텐츠와 사이트맵을 유지하면서 관리자 전용 로그인, 공지사항·카드뉴스 게시판(DB),
한국어/영어 다국어를 추가한 풀스택 웹사이트.

> 회원가입/문의게시판(DB) 기능은 제거됨 — 로그인은 관리자 계정 전용이고, 고객 문의는 네이버폼
> 외부 링크로 받는다. 자세한 내용은 "인증 & 문의" 섹션 참고.

---

## 기술 스택

| 항목 | 기술 |
|------|------|
| 프레임워크 | Next.js 15 (App Router) |
| 언어 | TypeScript |
| 스타일 | Tailwind CSS v3 |
| 다국어 | next-intl v3 (ko / en) |
| 인증 | NextAuth.js v4 (Credentials Provider) |
| ORM | Prisma v5 |
| DB | PostgreSQL (Supabase, 개발·배포 공통 — pooler 경유) |
| 리치 텍스트 에디터 | Tiptap v3 |
| 이미지 저장소 | Supabase Storage (`post-images` 버킷) |

---

## 디렉토리 구조

```
refind-renewal/
├── app/
│   ├── layout.tsx
│   ├── [locale]/                           # locale=ko는 URL 접두사 없이 서빙 (as-needed)
│   │   ├── layout.tsx                      # Navbar, Footer, Provider
│   │   ├── globals.css
│   │   ├── page.tsx                        # 홈페이지
│   │   ├── about/page.tsx                  # 회사소개
│   │   ├── products/
│   │   │   ├── robot-hand/
│   │   │   │   ├── page.tsx               # 로봇핸드 카테고리
│   │   │   │   ├── a001/page.tsx
│   │   │   │   ├── ap001/page.tsx
│   │   │   │   ├── ap002/page.tsx
│   │   │   │   └── lite/page.tsx
│   │   │   ├── collaborative-robot/
│   │   │   │   ├── page.tsx               # 협동로봇 카테고리
│   │   │   │   ├── realman/page.tsx
│   │   │   │   ├── elephant-robotics/page.tsx
│   │   │   │   └── myagv/page.tsx
│   │   │   ├── humanoid/
│   │   │   │   ├── page.tsx               # 휴머노이드 카테고리
│   │   │   │   ├── realbot/page.tsx
│   │   │   │   ├── embodied-dual-arm/page.tsx
│   │   │   │   └── lifting-platform/page.tsx
│   │   │   ├── body-enhancement/
│   │   │   │   └── page.tsx               # 개인 신체 증강 기기 대메뉴 개요
│   │   │   │                                (전자의수/BCI-BMI/로봇보조기 3개 서브 카테고리로 링크)
│   │   │   ├── prosthetic/
│   │   │   │   ├── page.tsx               # 전자의수 카테고리 (신체증강기기 서브)
│   │   │   │   ├── ohand/page.tsx
│   │   │   │   ├── ohand-s001/page.tsx
│   │   │   │   └── ohandlite/page.tsx
│   │   │   ├── robot-support/page.tsx      # 로봇 보조기 (신체증강기기 서브)
│   │   │   └── physical-ai/
│   │   │       ├── page.tsx               # 피지컬 AI 카테고리
│   │   │       ├── gforcepro/page.tsx
│   │   │       └── bcibmi/page.tsx
│   │   └── auth/
│   │       └── login/page.tsx              # 관리자 전용 로그인 (회원가입 없음)
│   └── api/
│       ├── auth/[...nextauth]/route.ts
│       ├── notice/route.ts
│       ├── card-news/route.ts
│       └── upload/route.ts
├── components/
│   ├── SessionProvider.tsx
│   ├── layout/
│   │   ├── Navbar.tsx                      # 대메뉴 + 호버 서브메뉴
│   │   └── Footer.tsx
│   └── ui/
│       ├── ProductPage.tsx
│       ├── ProductCategoryPage.tsx
│       ├── ComingSoonProduct.tsx
│       ├── PostForm.tsx
│       └── RichTextEditor.tsx
├── i18n/
│   ├── routing.ts
│   └── request.ts
├── lib/
│   ├── prisma.ts
│   └── auth.ts
├── messages/
│   ├── ko.json
│   └── en.json
├── prisma/
│   ├── schema.prisma
│   └── dev.db
├── public/
│   ├── logo.png                            # 리파인 로고
│   └── products/
│       ├── robot-hand/
│       ├── prosthetic/
│       ├── collaborative-robot/
│       ├── humanoid/
│       ├── body-enhancement/
│       ├── sensors/
│       └── platform/
├── img/                                    # 원본 이미지 소스 폴더 (public에 복사해서 사용)
├── .env
├── middleware.ts
├── next.config.ts
├── tailwind.config.ts
└── tsconfig.json
```

---

## 네비게이션 구조 (현재)

기존 노션 사이트(products.refind.kr)의 메뉴 이름·순서와 동일하게 맞춰져 있음 (SEO·사용자 혼란 방지 목적).

```
[피지컬 AI & 로봇부속]   [휴머노이드 로봇손]   [협동로봇]              [휴머노이드 로봇]              [개인 신체 증강 기기]     | [회사소개] [게시판]
├ 액추에이터             ├ ROH-A002          ├ RM65/75              ├ REALMAN ─────────           전자의수 ─────────
├ 플랫폼                 ├ ROH-AP001         ├ RML63                ├ REALBOT S2                  ├ Ohand
├ AVR/AMR               ├ ROH-AP002         └ ECO 62/63/65          ├ REALBOT L2                  ├ OhandLite
└ Tashan 센서            └ ROH-Lite                                 ├ REALBOT 01                  ─────────────
                                                                    ├ Dual arm vertical Lift       BCI/BMI ─────────
                                                                    └ Single arm vertical lift     ├ Wearable EEG
                                                                                                   ├ GForcePro+
                                                                    └ 로봇암(RX 시리즈) (준비중)     └ HD EMG
                                                                                                   ─────────────
                                                                                                   └ 로봇보조기
                                                                                                     ├ HYBRIDEX
                                                                                                     └ STEP BOOSTER
```

- "로봇운동기"(ORE-3000, OYFM-7000)는 실제 판매 상품이 아니라 리뉴얼 중 잘못 추가된 항목이라 삭제됨
- "Guohua Robot"은 더 이상 취급하지 않는 상품이라 페이지·네비바·사이트맵에서 완전히 삭제됨
- 로봇암(RX 시리즈 4개 모델: RX75, RX75S, RX75-비전형, RX71) / Ohand S001은 실제 사진·스펙 확보 완료되어
  정식 상세 페이지로 전환됨 (RX 시리즈는 `humanoid/robot-arm` 카테고리 페이지에 4개 모델 비교표 포함)
- "개인 신체 증강 기기" 대메뉴는 하위 서브카테고리(전자의수/BCI-BMI/로봇보조기)가 3개나 있음에도
  대메뉴 링크가 곧바로 `products/prosthetic`(전자의수)로 연결되어 다른 서브카테고리가 보이지 않는
  버그가 있었음 → `products/body-enhancement`에 3개 서브카테고리로 링크하는 개요 페이지를 신설하고
  Navbar/Footer/홈페이지의 대메뉴 링크를 전부 이 페이지로 수정
- REALBOT L2 / REALBOT 01은 실제 사진·스펙 확보 완료되어 정식 상세 페이지로 전환됨
  (RealBot S2/L2/01 비교표를 세 페이지 모두에 포함, 서로 링크)
- "플랫폼"은 카테고리 페이지(`products/physical-ai/platform`)로, 하위에 듀얼암 로봇 플랫폼
  (`platform/dual-arm`)과 원격조작 키트(`platform/teleoperation-kit`) 2개 상세 페이지를 둠
- 휴머노이드 로봇손에 ROH-AP003(자기식 촉각 센서, `robot-hand/ap003`)과 모션 캡처 글러브
  (`robot-hand/motion-capture-glove`) 추가. 실제 제품 사진이 없어 카테고리 그리드에서는
  `/products/coming-soon.svg`를 사용 (다른 미확보 이미지 제품과 동일한 방식)
- "협동로봇" 대메뉴는 취급 브랜드가 REALMAN 하나뿐이라(Elephant Robotics 취급 종료 이후) 중간
  브랜드 페이지(`collaborative-robot/realman`) 없이 카테고리 페이지(`products/collaborative-robot`)에서
  바로 RM65/75(`collaborative-robot/realman/rm65-75`), RML63(`.../realman/rml63`),
  ECO 62/63/65(`.../realman/eco`) 3개 상세 페이지로 연결됨 (상세 페이지 URL 자체는 유지, 목록
  페이지만 통합)
- "AVR/AMR"도 카테고리 페이지(`physical-ai/avr-amr`)로, 하위에 모바일 로봇 플랫폼/myAGV 2023
  (`avr-amr/myagv`)과 모바일 섀시(`avr-amr/mobile-chassis`) 2개 상세 페이지를 둠
- "게시판" 하위의 "문의게시판"은 내부 페이지가 아니라 **네이버폼 외부 링크**(새 탭)로 연결됨 —
  자세한 내용은 아래 "인증 & 문의" 섹션 참고

---

## 사이트맵

> **URL 언어 접두사**: 한국어(기본 언어)는 접두사 없이 노출되고(`/about`), 영어만 `/eng` 접두사가
> 붙는다(`/eng/about`). `[locale]` 라우트 세그먼트 자체의 값은 내부적으로 여전히 `ko`/`en`을 쓰지만
> (메시지 로딩·`isKo` 분기 등), 브라우저 주소창에 보이는 실제 URL은 이 규칙을 따른다. 쿠키/브라우저
> 언어 기반 자동 감지는 꺼두어(`localeDetection: false`) 주소가 곧 언어를 그대로 나타내도록 함 —
> `i18n/routing.ts` 참고. 내부 링크는 전부 `i18n/navigation.ts`(next-intl `createNavigation`)의
> `Link`/`redirect`/`useRouter`를 사용하며, 언어 전환 버튼만은 접두사를 직접 계산해 일반 `<a>` 태그로
> 렌더링한다(`Link`의 `locale` prop 전환 시 커스텀 접두사가 두 번 붙는 next-intl 이슈 회피).

```
/[locale]                  홈  (locale=ko일 때 URL은 접두사 없이 "/")
/[locale]/about            회사소개  (ko: /about, en: /eng/about)
/[locale]/products/physical-ai
/[locale]/products/physical-ai/actuator
/[locale]/products/physical-ai/platform
/[locale]/products/physical-ai/platform/dual-arm
/[locale]/products/physical-ai/platform/teleoperation-kit
/[locale]/products/physical-ai/avr-amr
/[locale]/products/physical-ai/avr-amr/myagv
/[locale]/products/physical-ai/avr-amr/mobile-chassis
/[locale]/products/physical-ai/tashan
/[locale]/products/physical-ai/gforcepro
/[locale]/products/physical-ai/bcibmi
/[locale]/products/physical-ai/eeg
/[locale]/products/robot-hand
/[locale]/products/robot-hand/a002
/[locale]/products/robot-hand/ap001
/[locale]/products/robot-hand/ap002
/[locale]/products/robot-hand/ap003
/[locale]/products/robot-hand/lite
/[locale]/products/robot-hand/motion-capture-glove
/[locale]/products/collaborative-robot
/[locale]/products/collaborative-robot/realman/rm65-75
/[locale]/products/collaborative-robot/realman/rml63
/[locale]/products/collaborative-robot/realman/eco
/[locale]/products/humanoid
/[locale]/products/humanoid/realbot            (REALBOT S2)
/[locale]/products/humanoid/realbot-l2
/[locale]/products/humanoid/realbot-01
/[locale]/products/humanoid/embodied-dual-arm  (Dual arm vertical Lift)
/[locale]/products/humanoid/lifting-platform   (Single arm vertical lift)
/[locale]/products/humanoid/robot-arm          (로봇암 RX 시리즈 카테고리)
/[locale]/products/humanoid/robot-arm/rx71
/[locale]/products/humanoid/robot-arm/rx75s
/[locale]/products/humanoid/robot-arm/rx75
/[locale]/products/humanoid/robot-arm/rx75-vision
/[locale]/products/body-enhancement            (개인 신체 증강 기기 대메뉴 개요)
/[locale]/products/prosthetic
/[locale]/products/prosthetic/ohand
/[locale]/products/prosthetic/ohand-s001
/[locale]/products/prosthetic/ohandlite
/[locale]/products/robot-support
/[locale]/products/robot-support/hybridex
/[locale]/products/robot-support/step-booster
/[locale]/notice           공지사항 목록
/[locale]/card-news        카드뉴스 목록
/[locale]/auth/login       관리자 전용 로그인 (회원가입 없음)

/<slug>                    공지사항·카드뉴스 상세 (flat URL, locale 접두사 없음)
                            예: /notice1, /card1
```

### 공지사항·카드뉴스 flat URL (SEO 유지)

기존 노션 사이트(`products.refind.kr/<페이지ID>`)와 동일하게, 공지사항·카드뉴스 게시글은
`/ko/notice/...` 같은 locale 접두사 없이 도메인 바로 아래 `/<slug>` 형태로 노출된다 (기존
구글 색인 URL 구조를 그대로 유지해 검색 순위 하락을 방지하기 위함).

- DB: `Notice`, `CardNews` 모델에 사람이 읽을 수 있는 `slug`(예: `notice1`, `card1`) 필드 보유
- 실제 라우트: `app/[locale]/post/[slug]/page.tsx` (내부적으로 `locale="ko"` 고정)
- `middleware.ts`가 예약어(`about`, `products`, `inquiry`, `notice`, `card-news`, `auth`,
  `admin`, `post`)가 아닌 단일 세그먼트 경로를 `/ko/post/<slug>`로 **rewrite**(URL 표시는
  그대로 유지, 리다이렉트 아님) 처리
- 새 게시글 slug를 예약어와 겹치지 않게 관리 (겹치면 그 슬러그는 접근 불가)

### 공지사항·카드뉴스 작성 (관리자 전용)

- `/[locale]/admin/notice/new`, `/[locale]/admin/card-news/new` — 슬러그 수동 입력 + 리치 텍스트
  에디터([Tiptap](https://tiptap.dev)) 작성 폼. 네이버 블로그 등에서 복사한 서식(굵게/이미지 등)을
  그대로 붙여넣기 가능 (붙여넣은 이미지가 외부 CDN URL이면 그 링크를 그대로 참조 — 우리 Storage로
  자동 재업로드는 하지 않음)
- 이미지는 에디터 툴바의 "이미지 업로드" 버튼 또는 대표 이미지 필드의 "업로드" 버튼으로 파일 선택 →
  `POST /api/upload` → **Supabase Storage**(`post-images` 버킷, public)에 저장 → 공개 URL을
  콘텐츠/썸네일에 삽입
- `Notice.content`, `CardNews.content`는 plain text가 아니라 **HTML 문자열**로 저장됨.
  상세 페이지(`app/[locale]/post/[slug]/page.tsx`)에서 `isomorphic-dompurify`로 sanitize한 뒤
  `dangerouslySetInnerHTML`로 렌더링. 목록 페이지 미리보기는 `lib/html.ts`의 `stripHtml()`로
  태그 제거 후 표시
- 버킷은 `scripts/setup-storage-bucket.mjs`로 생성됨 (service_role 키로 1회 실행, 재실행해도 안전)

---

## 인증 & 문의

- **회원가입 없음** — 공개 회원가입 폼(`/auth/register`, `POST /api/register`)은 완전히 제거됨.
  로그인은 `/[locale]/auth/login` 하나뿐이고, DB에 미리 존재하는 `role: "admin"` 계정으로만 가능.
- **관리자 계정 생성/재설정**: `scripts/create-admin.mjs`를 직접 실행해서 upsert.
  ```bash
  ADMIN_EMAIL='...' ADMIN_PASSWORD='...' node --env-file=.env scripts/create-admin.mjs
  ```
  (Node 20.6+ 의 `--env-file` 플래그로 `.env`를 로드 — dotenv 패키지 불필요)
- **내부 문의게시판 제거됨** — 기존 `/inquiry`, `/inquiry/new`, `/inquiry/[id]` 페이지와
  `app/api/inquiry/*` API, `AdminAnswerForm.tsx`는 전부 삭제됨. 사이트 전체의 "문의하기" CTA와
  네비바 "게시판 > 문의게시판" 메뉴는 모두 **네이버폼 외부 링크**
  (`https://form.naver.com/response/WxUcn3MgR1ouvktOE4JwYA`, 새 탭)로 연결됨.
  - `Navbar.tsx`의 `INQUIRY_FORM_URL` 상수에서 관리
  - Prisma의 `Inquiry`/`Answer` 모델과 `User.inquiries`/`answers` 관계, 그리고 실제 DB 테이블은
    **의도적으로 그대로 남겨둠** (스키마 변경·마이그레이션 없이 코드만 제거하는 방식으로 리스크 없이
    진행). 필요 시 별도로 스키마 정리(테이블 drop)를 요청할 것 — DB 안전 규칙에 따라 사전 승인 필수.
- `/admin` 대시보드는 더 이상 문의 관리 화면이 아니라 공지사항/카드뉴스 관리로 가는 허브 페이지.

---

## API 엔드포인트

| Method | 경로 | 설명 | 인증 필요 |
|--------|------|------|----------|
| POST | `/api/auth/[...nextauth]` | 로그인/세션 | X |
| GET / POST | `/api/notice` | 공지사항 목록 / 작성 | POST만 관리자 |
| GET / POST | `/api/card-news` | 카드뉴스 목록 / 작성 | POST만 관리자 |
| POST | `/api/upload` | 이미지 업로드 (Supabase Storage) | ✅ 관리자 |

---

## DB 스키마 (Prisma)

> `Inquiry`/`Answer` 모델은 코드에서는 더 이상 사용되지 않음 (내부 문의게시판 제거, 위 "인증 & 문의"
> 참고). 스키마·DB 테이블은 그대로 남아있음 — 데이터 손실 없이 안전하게 두는 쪽을 선택함.

```prisma
model User {
  id        String   @id @default(cuid())
  name      String
  email     String   @unique
  password  String
  company   String?
  phone     String?
  role      String   @default("user")  // "user" | "admin"
  createdAt DateTime @default(now())
  inquiries Inquiry[]
  answers   Answer[]
}

model Inquiry {
  id        String   @id @default(cuid())
  category  String
  subject   String
  content   String
  isPrivate Boolean  @default(false)
  status    String   @default("pending")
  authorId  String
  answer    Answer?
}

model Answer {
  id        String   @id @default(cuid())
  content   String
  inquiryId String   @unique
  authorId  String
}

// content는 HTML 문자열 (리치 텍스트 에디터 출력) — 상세 페이지에서 sanitize 후 렌더링
model Notice {
  id        String   @id @default(cuid())
  slug      String   @unique
  title     String
  content   String
  thumbnail String?
  authorId  String
}

model CardNews {
  id        String   @id @default(cuid())
  slug      String   @unique
  title     String
  content   String
  thumbnail String?
  authorId  String
}
```

---

## 환경변수 (.env)

```env
DATABASE_URL="postgresql://...pooler.supabase.com:6543/postgres?pgbouncer=true"  # Transaction pooler (앱 런타임 쿼리용)
DIRECT_URL="postgresql://...pooler.supabase.com:5432/postgres"                   # Session pooler (마이그레이션/db push 전용)
NEXTAUTH_SECRET="..."                    # 랜덤 base64 문자열
NEXTAUTH_URL="http://localhost:3000"     # 배포 시 실제 도메인으로 변경
SUPABASE_URL="https://xrtzdjkixwruetjgclwu.supabase.co"  # Storage 업로드용 (서버 전용)
SUPABASE_SERVICE_ROLE_KEY="sb_secret_..."                 # service_role — 절대 클라이언트 노출 금지
```

> **왜 pooler 주소를 쓰는가**: Supabase의 Direct connection(`db.<ref>.supabase.co:5432`)은 기본이 IPv6 전용이라, IPv6 라우팅이 안 되는 네트워크에서는 연결 자체가 안 된다. 대신 IPv4 호환되는 pooler 주소를 사용한다.
> - `DATABASE_URL`(Transaction pooler, 6543)은 prepared statement를 재사용 못 해서 `?pgbouncer=true` 옵션이 필수 (없으면 `prepared statement already exists` 에러 발생).
> - `DIRECT_URL`(Session pooler, 5432)은 `prisma db push` / `prisma migrate`처럼 DDL이 필요한 스키마 변경 전용. `schema.prisma`의 `datasource db`에 `directUrl = env("DIRECT_URL")`로 연결돼 있음.
> - 이 프로젝트는 마이그레이션 히스토리 없이 `prisma db push`로 스키마를 관리 중 (`prisma/migrations` 폴더 없음, `migrate dev`는 비대화형 환경에서 에러 발생하므로 사용 금지).

---

## 개발 서버 실행

```bash
cd "C:\Users\riner\정태성\claude\refind-renewal"
npm run dev
# → http://localhost:3000
```

---

## 디자인 시스템

- **Primary 색상**: `#669DFD` (파란색 계열)
- **폰트**: Pretendard Variable (CDN), Inter (폴백)
- **히어로**: 블랙 배경 + 우측 제품 이미지 (invert 처리)
- **카드 스타일**: 흰 배경 + `rounded-2xl` + 얇은 보더

---

## 배포 현황

### ✅ 완료
- [x] Next.js 프로젝트 생성 및 전체 코드 작성
- [x] 로컬 개발 서버 실행 확인
- [x] GitHub 저장소 생성 및 코드 업로드
  - 저장소: https://github.com/taeseong88/refind-renewal
- [x] Supabase 프로젝트 생성 및 DB 테이블 생성
- [x] 전체 제품 페이지 (카테고리 + 상세) 작성
- [x] 네비게이션 대메뉴 + 호버 서브메뉴 구현
- [x] 실제 로고 이미지 적용 (Navbar, About 페이지)
- [x] 홈 히어로 배경 이미지 적용
- [x] 게시판 메뉴 개편 (네비바 "게시판" 드롭다운: 문의게시판/공지사항/카드뉴스, 공지사항·카드뉴스 페이지 및 관리자 작성 폼 제작)
- [x] 회원가입 제거, 관리자 전용 로그인 구조로 전환 (내부 문의게시판 삭제, 문의는 네이버폼 외부 링크로 대체)

### 📋 다음 작업 (우선순위 순)
- [ ] **이미지 교체**
  - ORE-3000 이미지 변경 (현재 HDE.jpg 잘못 사용 중)
  - OYFM-7000 이미지 변경 (현재 HDE.jpg 잘못 사용 중)
- [ ] **SEO 설정**
  - `app/sitemap.ts` 생성
  - `app/robots.ts` 생성
  - 각 페이지별 `metadata` (title, description) 개별 설정
- [ ] **Vercel 배포**
  - vercel.com → GitHub 저장소 연결
  - 환경변수 설정 (DATABASE_URL, NEXTAUTH_SECRET, NEXTAUTH_URL)
- [ ] **배포 후 작업**
  - 구글서치콘솔 사이트맵 제출
  - Supabase DB 비밀번호 변경 (보안)
  - CLAUDE.md NEXTAUTH_URL 실제 도메인으로 업데이트

---

## 배포 계획

| 항목 | 서비스 | 비고 |
|------|--------|------|
| 프론트+백엔드 | Vercel | Next.js 공식 플랫폼, 무료 |
| 데이터베이스 | Supabase (PostgreSQL) | 무료 500MB |
| 도메인 | 카페24 도메인 연결 | DNS A레코드 변경 |

---

## 회사 정보

- **회사명**: 리파인주식회사 (Refind Inc.)
- **슬로건**: Re(다시) + Find(찾다) — 역경 이후 자기 자신을 다시 발견
- **주소**: 강원특별자치도 원주시 지정면 기업도시로 200
- **전화**: 070-4837-2829
- **이메일**: refind@refind.kr
- **설립**: 2020년
- **참고 사이트**: https://products.refind.kr/
