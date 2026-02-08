import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "법률 블로그",
  description:
    "법무법인 로앤리의 법률 블로그입니다. 최신 법률 정보와 판례 분석, 생활 법률 상식을 제공합니다.",
};

const BLOG_POSTS = [
  {
    id: 1,
    title: "2024년 개정 형법 주요 내용 정리",
    excerpt:
      "올해 개정된 형법의 주요 변경사항을 알기 쉽게 정리했습니다. 양형 기준 변경, 새로운 범죄 유형 추가 등 핵심 내용을 확인하세요.",
    category: "형사법",
    date: "2024-01-15",
    slug: "criminal-law-2024-changes",
  },
  {
    id: 2,
    title: "이혼 시 재산분할 기준과 절차",
    excerpt:
      "이혼 시 재산분할은 어떤 기준으로 이루어지는지, 어떤 절차를 거쳐야 하는지 실무 경험을 바탕으로 설명합니다.",
    category: "가사법",
    date: "2024-01-10",
    slug: "divorce-property-division",
  },
  {
    id: 3,
    title: "스타트업을 위한 법인 설립 가이드",
    excerpt:
      "스타트업 창업 시 법인 설립 절차와 주의사항, 그리고 투자 유치를 위한 법적 준비사항을 안내합니다.",
    category: "기업법무",
    date: "2024-01-05",
    slug: "startup-incorporation-guide",
  },
  {
    id: 4,
    title: "외국인 취업비자(E-7) 발급 요건 변경",
    excerpt:
      "2024년 변경된 E-7 비자 발급 요건과 준비 서류, 심사 기준에 대해 상세히 안내합니다.",
    category: "이민법",
    date: "2024-01-02",
    slug: "e7-visa-requirements-2024",
  },
  {
    id: 5,
    title: "부동산 매매 계약 시 꼭 확인해야 할 사항",
    excerpt:
      "부동산 매매 계약 전 반드시 확인해야 할 등기부등본, 공시지가, 도시계획 등 핵심 체크리스트를 공유합니다.",
    category: "부동산법",
    date: "2023-12-28",
    slug: "real-estate-contract-checklist",
  },
  {
    id: 6,
    title: "상속 포기와 한정 승인의 차이",
    excerpt:
      "상속 포기와 한정 승인의 차이점, 신청 기한, 절차에 대해 구체적으로 설명합니다.",
    category: "가사법",
    date: "2023-12-20",
    slug: "inheritance-renunciation-vs-limited-acceptance",
  },
];

export default function BlogPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">법률 블로그</h1>
          <p className="text-xl text-blue-100">
            최신 법률 정보와 판례 분석을 제공합니다
          </p>
        </div>
      </section>

      <section className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {BLOG_POSTS.map((post) => (
              <article
                key={post.id}
                className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow"
              >
                <div className="bg-gray-100 h-40 flex items-center justify-center">
                  <svg
                    className="w-12 h-12 text-gray-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1}
                      d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                    />
                  </svg>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2 py-0.5 bg-blue-50 text-blue-700 text-xs font-medium rounded">
                      {post.category}
                    </span>
                    <time className="text-xs text-gray-400">{post.date}</time>
                  </div>
                  <h2 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                    {post.title}
                  </h2>
                  <p className="text-sm text-gray-600 line-clamp-3 mb-3">
                    {post.excerpt}
                  </p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-sm text-blue-700 font-medium hover:underline"
                  >
                    자세히 보기 &rarr;
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
