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
| DB (배포) | PostgreSQL (Supabase 예정) |

---

## 디렉토리 구조

```
refind-renewal/
├── app/
│   ├── layout.tsx                          # 루트 레이아웃 (/ → /ko 리다이렉트)
│   ├── page.tsx                            # 루트 페이지 (/ → /ko 리다이렉트)
│   ├── [locale]/
│   │   ├── layout.tsx                      # 로케일 레이아웃 (Navbar, Footer, Provider 포함)
│   │   ├── globals.css                     # 전역 스타일 (Tailwind + Pretendard 폰트)
│   │   ├── page.tsx                        # 홈페이지
│   │   ├── about/page.tsx                  # 회사소개
│   │   ├── inquiry/
│   │   │   ├── page.tsx                    # 문의게시판 목록
│   │   │   ├── new/page.tsx                # 문의 작성 (로그인 필요)
│   │   │   └── [id]/page.tsx              # 문의 상세
│   │   ├── products/
│   │   │   ├── robot-hand/page.tsx         # 로봇핸드
│   │   │   ├── collaborative-robot/page.tsx # 협동로봇
│   │   │   ├── physical-ai/page.tsx        # 피지컬 AI
│   │   │   ├── humanoid/page.tsx           # 휴머노이드 로봇
│   │   │   └── body-enhancement/page.tsx   # 신체증강기기
│   │   └── auth/
│   │       ├── login/page.tsx              # 로그인
│   │       └── register/page.tsx           # 회원가입
│   └── api/
│       ├── auth/[...nextauth]/route.ts     # NextAuth API
│       ├── register/route.ts               # 회원가입 API
│       └── inquiry/
│           ├── route.ts                    # 문의 목록/작성 API
│           └── [id]/route.ts              # 문의 상세 API
├── components/
│   ├── SessionProvider.tsx                 # NextAuth 세션 클라이언트 프로바이더
│   ├── layout/
│   │   ├── Navbar.tsx                      # 네비게이션 바 (드롭다운, 모바일 메뉴, 언어 전환)
│   │   └── Footer.tsx                      # 푸터
│   └── ui/
│       └── ProductPage.tsx                 # 제품 페이지 공통 컴포넌트
├── i18n/
│   ├── routing.ts                          # 로케일 라우팅 설정 (ko, en)
│   └── request.ts                          # next-intl 서버 설정
├── lib/
│   ├── prisma.ts                           # Prisma 클라이언트 싱글톤
│   └── auth.ts                             # NextAuth 옵션 (authOptions)
├── messages/
│   ├── ko.json                             # 한국어 번역
│   └── en.json                             # 영어 번역
├── prisma/
│   ├── schema.prisma                       # DB 스키마 (User, Inquiry, Answer)
│   └── dev.db                              # SQLite DB 파일 (개발용)
├── .env                                    # 환경변수
├── middleware.ts                           # next-intl 미들웨어 (로케일 라우팅)
├── next.config.ts                          # Next.js + next-intl 설정
├── tailwind.config.ts                      # Tailwind 설정 (primary 컬러: #669DFD)
└── tsconfig.json
```

---

## 사이트맵

```
/                          → /ko (자동 리다이렉트)
/ko                        홈 (한국어)
/en                        홈 (영어)
/[locale]/about            회사소개
/[locale]/products/robot-hand
/[locale]/products/collaborative-robot
/[locale]/products/physical-ai
/[locale]/products/humanoid
/[locale]/products/body-enhancement
/[locale]/inquiry          문의게시판 목록
/[locale]/inquiry/new      문의 작성 (로그인 필요)
/[locale]/inquiry/[id]     문의 상세
/[locale]/auth/login       로그인
/[locale]/auth/register    회원가입
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
  password  String   // bcrypt 해시
  company   String?
  phone     String?
  role      String   @default("user")  // "user" | "admin"
  createdAt DateTime @default(now())
  inquiries Inquiry[]
  answers   Answer[]
}

model Inquiry {
  id        String   @id @default(cuid())
  category  String   // product | purchase | as | partnership | other
  subject   String
  content   String
  isPrivate Boolean  @default(false)
  status    String   @default("pending")  // pending | answered
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
DATABASE_URL="file:./dev.db"                    # 개발: SQLite
NEXTAUTH_SECRET="변경필요-랜덤문자열"              # 배포 시 반드시 변경
NEXTAUTH_URL="http://localhost:3000"             # 배포 시 실제 도메인으로 변경
```

---

## 개발 서버 실행

```bash
cd "C:\Users\riner\정태성\claude\refind-renewal"
npm run dev
# → http://localhost:3000
```

## 빌드

```bash
npm run build
npm run start
```

## DB 초기화 / 스키마 변경 시

```bash
npx prisma db push       # 스키마 → DB 동기화
npx prisma studio        # DB GUI 관리 도구
```

---

## 디자인 시스템

- **Primary 색상**: `#669DFD` (파란색 계열)
- **폰트**: Pretendard Variable (CDN), Inter (폴백)
- **다크 배경**: 히어로/헤더 섹션 `from-gray-900 to-gray-800`
- **카드 스타일**: 흰 배경 + `rounded-2xl` + 얇은 보더

---

## 배포 계획

| 항목 | 서비스 | 비고 |
|------|--------|------|
| 프론트+백엔드 | Vercel | Next.js 공식 플랫폼, 무료 |
| 데이터베이스 | Supabase (PostgreSQL) | 무료 500MB |
| 도메인 | 카페24 도메인 연결 가능 | DNS A레코드 변경 |

### Supabase 전환 시 변경 사항
1. `.env`의 `DATABASE_URL`을 Supabase PostgreSQL 연결 문자열로 교체
2. `npx prisma db push` 실행
3. `prisma/schema.prisma`의 `provider = "sqlite"` → `"postgresql"` 변경

---

## 회사 정보

- **회사명**: 리파인주식회사 (Refind Inc.)
- **슬로건**: Re(다시) + Find(찾다) — 역경 이후 자기 자신을 다시 발견
- **주소**: 강원도 원주시 지정면 기업도시대로 200
- **전화**: 070-4837-2829
- **이메일**: refind@refind.kr
- **설립**: 2021년
- **참고 사이트**: https://products.refind.kr/
