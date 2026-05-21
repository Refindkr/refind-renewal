# Refind 웹사이트 리뉴얼 프로젝트

## 프로젝트 개요

리파인주식회사(https://products.refind.kr/) 공식 웹사이트 리뉴얼 프로젝트.
기존 사이트의 콘텐츠와 사이트맵을 유지하면서 회원가입, 문의게시판(DB), 한국어/영어 다국어를 추가한 풀스택 웹사이트.

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
| DB (개발) | SQLite (`prisma/dev.db`) |
| DB (배포) | PostgreSQL (Supabase) |

---

## 디렉토리 구조

```
refind-renewal/
├── app/
│   ├── layout.tsx
│   ├── page.tsx                            # / → /ko 리다이렉트
│   ├── [locale]/
│   │   ├── layout.tsx                      # Navbar, Footer, Provider
│   │   ├── globals.css
│   │   ├── page.tsx                        # 홈페이지
│   │   ├── about/page.tsx                  # 회사소개
│   │   ├── inquiry/
│   │   │   ├── page.tsx                    # 문의게시판 목록
│   │   │   ├── new/page.tsx                # 문의 작성
│   │   │   └── [id]/page.tsx              # 문의 상세
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
│   │   │   ├── guohua-robot/page.tsx       # Guohua Robot (휴머노이드 서브)
│   │   │   ├── body-enhancement/
│   │   │   │   ├── page.tsx               # 신체증강기기 카테고리
│   │   │   │   ├── ore-3000/page.tsx
│   │   │   │   └── oyfm-7000/page.tsx
│   │   │   ├── prosthetic/
│   │   │   │   ├── page.tsx               # 전자의수 카테고리 (신체증강기기 서브)
│   │   │   │   ├── ohand/page.tsx
│   │   │   │   └── ohandlite/page.tsx
│   │   │   ├── robot-support/page.tsx      # 로봇 보조기 (신체증강기기 서브)
│   │   │   └── physical-ai/
│   │   │       ├── page.tsx               # 피지컬 AI 카테고리
│   │   │       ├── gforcepro/page.tsx
│   │   │       └── bcibmi/page.tsx
│   │   └── auth/
│   │       ├── login/page.tsx
│   │       └── register/page.tsx
│   └── api/
│       ├── auth/[...nextauth]/route.ts
│       ├── register/route.ts
│       └── inquiry/
│           ├── route.ts
│           └── [id]/route.ts
├── components/
│   ├── SessionProvider.tsx
│   ├── layout/
│   │   ├── Navbar.tsx                      # 대메뉴 + 호버 서브메뉴
│   │   └── Footer.tsx
│   └── ui/
│       ├── ProductPage.tsx
│       ├── ProductCategoryPage.tsx
│       └── AdminAnswerForm.tsx
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

```
[로봇핸드]          [협동로봇]              [휴머노이드 로봇]         [신체증강기기]          [피지컬 AI]     | [회사소개] [게시판*]
├ ROH-A001         ├ Realman              ├ Realbot               전자의수 ─────────     ├ gForcePro+
├ ROH-AP001        ├ Elephant Robotics    ├ Guohua Robot          ├ Ohand               └ BCI/BMI
├ ROH-AP002        └ MyAGV               ├ Embodied Dual Arm      ├ OhandLite
└ ROH-Lite                               └ Lifting Platform       ─────────────
                                                                  ├ ORE-3000
                                                                  ├ OYFM-7000
                                                                  ─────────────
                                                                  └ 로봇 보조기

* 게시판은 아직 "문의게시판" 단일 → 변경 예정
```

---

## 사이트맵

```
/                          → /ko (자동 리다이렉트)
/[locale]                  홈
/[locale]/about            회사소개
/[locale]/products/robot-hand
/[locale]/products/robot-hand/a001
/[locale]/products/robot-hand/ap001
/[locale]/products/robot-hand/ap002
/[locale]/products/robot-hand/lite
/[locale]/products/collaborative-robot
/[locale]/products/collaborative-robot/realman
/[locale]/products/collaborative-robot/elephant-robotics
/[locale]/products/collaborative-robot/myagv
/[locale]/products/humanoid
/[locale]/products/humanoid/realbot
/[locale]/products/humanoid/embodied-dual-arm
/[locale]/products/humanoid/lifting-platform
/[locale]/products/guohua-robot
/[locale]/products/body-enhancement
/[locale]/products/body-enhancement/ore-3000
/[locale]/products/body-enhancement/oyfm-7000
/[locale]/products/prosthetic
/[locale]/products/prosthetic/ohand
/[locale]/products/prosthetic/ohandlite
/[locale]/products/robot-support
/[locale]/products/physical-ai
/[locale]/products/physical-ai/gforcepro
/[locale]/products/physical-ai/bcibmi
/[locale]/inquiry          문의게시판 목록
/[locale]/inquiry/new      문의 작성 (로그인 필요)
/[locale]/inquiry/[id]     문의 상세
/[locale]/auth/login
/[locale]/auth/register
```

---

## API 엔드포인트

| Method | 경로 | 설명 | 인증 필요 |
|--------|------|------|----------|
| POST | `/api/register` | 회원가입 | X |
| POST | `/api/auth/[...nextauth]` | 로그인/세션 | X |
| GET | `/api/inquiry` | 문의 목록 | X (비공개 제외) |
| POST | `/api/inquiry` | 문의 작성 | ✅ |
| GET | `/api/inquiry/[id]` | 문의 상세 | X (비공개 제외) |

---

## DB 스키마 (Prisma)

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
```

---

## 환경변수 (.env)

```env
DATABASE_URL="postgresql://..."          # Supabase PostgreSQL
NEXTAUTH_SECRET="..."                    # 랜덤 base64 문자열
NEXTAUTH_URL="http://localhost:3000"     # 배포 시 실제 도메인으로 변경
```

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

### 📋 다음 작업 (우선순위 순)
- [ ] **게시판 메뉴 개편**
  - 네비바 "문의게시판" → "게시판"으로 변경
  - 게시판 하위 메뉴 3개 추가: 문의게시판 / 공지사항 / 카드뉴스
  - 공지사항 페이지 신규 제작
  - 카드뉴스 페이지 신규 제작
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
- **주소**: 강원도 원주시 지정면 기업도시대로 200
- **전화**: 070-4837-2829
- **이메일**: refind@refind.kr
- **설립**: 2020년
- **참고 사이트**: https://products.refind.kr/
