export const SITE_NAME = "법무법인 로앤리";
export const SITE_URL = "https://roandlee.co.kr";
export const SITE_DESCRIPTION =
  "법무법인 로앤리 - 형사, 가사, 기업, 이민, 부동산 분야 전문 법률 서비스를 제공합니다.";

export const KAKAO_CHANNEL_ID = process.env.NEXT_PUBLIC_KAKAO_CHANNEL_ID || "";

export const NAV_LINKS = [
  { href: "/", label: "홈" },
  { href: "/centers/criminal", label: "형사센터" },
  { href: "/centers/family", label: "가사센터" },
  { href: "/centers/corporate", label: "기업센터" },
  { href: "/centers/immigration", label: "이민센터" },
  { href: "/centers/realestate", label: "부동산센터" },
  { href: "/lawyers", label: "변호사 소개" },
  { href: "/blog", label: "블로그" },
  { href: "/consultation", label: "상담신청" },
] as const;

export const CENTERS = {
  criminal: {
    slug: "criminal",
    title: "형사센터",
    subtitle: "형사 사건 전문 변호사가 함께합니다",
    description:
      "폭행, 사기, 횡령, 성범죄, 마약, 음주운전 등 모든 형사 사건에 대해 풍부한 경험을 바탕으로 최선의 결과를 이끌어냅니다.",
    services: [
      "폭행·상해 사건",
      "사기·횡령·배임",
      "성범죄 사건",
      "마약 사건",
      "음주운전·교통사고",
      "기업 형사 사건",
    ],
    icon: "⚖️",
  },
  family: {
    slug: "family",
    title: "가사센터",
    subtitle: "가정의 평화를 되찾아 드립니다",
    description:
      "이혼, 양육권, 재산분할, 상속 등 가사 사건 전반에 걸쳐 의뢰인의 권익을 보호합니다.",
    services: [
      "협의이혼·재판이혼",
      "양육권·양육비",
      "재산분할",
      "위자료 청구",
      "상속·유류분",
      "가정보호 사건",
    ],
    icon: "🏠",
  },
  corporate: {
    slug: "corporate",
    title: "기업센터",
    subtitle: "기업의 성장을 법률로 지원합니다",
    description:
      "기업 설립부터 M&A, 계약 검토, 노동 분쟁까지 기업 경영에 필요한 종합 법률 서비스를 제공합니다.",
    services: [
      "기업 설립·법인 등기",
      "계약서 검토·작성",
      "M&A·투자 유치",
      "노동·인사 분쟁",
      "지식재산권 보호",
      "기업 소송·중재",
    ],
    icon: "🏢",
  },
  immigration: {
    slug: "immigration",
    title: "이민센터",
    subtitle: "새로운 시작을 함께합니다",
    description:
      "비자 발급, 영주권, 귀화, 외국인 체류 관련 문제를 전문적으로 처리합니다.",
    services: [
      "취업비자·투자비자",
      "영주권 취득",
      "귀화 신청",
      "외국인 체류 연장",
      "난민 신청",
      "출입국 관련 분쟁",
    ],
    icon: "🌏",
  },
  realestate: {
    slug: "realestate",
    title: "부동산센터",
    subtitle: "부동산 거래의 안전을 책임집니다",
    description:
      "매매, 임대차, 재개발·재건축, 등기 관련 문제까지 부동산 분야의 모든 법률 서비스를 제공합니다.",
    services: [
      "매매 계약 검토",
      "임대차 분쟁",
      "재개발·재건축",
      "등기·소유권 분쟁",
      "건축 관련 분쟁",
      "토지 수용·보상",
    ],
    icon: "🏗️",
  },
} as const;

export type CenterSlug = keyof typeof CENTERS;
