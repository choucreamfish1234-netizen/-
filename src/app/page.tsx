import Link from "next/link";
import { CENTERS, SITE_NAME } from "@/lib/constants";

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
              당신의 권리를 지키는
              <br />
              가장 든든한 파트너
            </h1>
            <p className="text-lg lg:text-xl text-blue-100 mb-8 leading-relaxed">
              {SITE_NAME}은 형사, 가사, 기업, 이민, 부동산 분야의 전문 변호사들이
              의뢰인의 권익 보호를 위해 최선을 다합니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/consultation"
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-blue-700 font-bold rounded-md hover:bg-blue-50 transition-colors"
              >
                무료 상담 신청
              </Link>
              <Link
                href="/lawyers"
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-white font-bold rounded-md hover:bg-white/10 transition-colors"
              >
                변호사 소개
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Centers Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">전문 센터</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              각 분야 전문 변호사가 최적의 법률 서비스를 제공합니다
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.values(CENTERS).map((center) => (
              <Link
                key={center.slug}
                href={`/centers/${center.slug}`}
                className="group bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100"
              >
                <div className="text-3xl mb-3">{center.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors">
                  {center.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {center.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {SITE_NAME}을 선택하는 이유
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">풍부한 경험</h3>
              <p className="text-gray-600 text-sm">
                다양한 분야에서 수천 건의 사건을 성공적으로 처리한 경험이 있습니다.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">전문 분야별 팀</h3>
              <p className="text-gray-600 text-sm">
                각 분야별 전문 변호사 팀이 체계적으로 사건을 관리합니다.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">신속한 대응</h3>
              <p className="text-gray-600 text-sm">
                24시간 내 초기 상담을 제공하며 신속하게 사건에 착수합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">지금 바로 상담하세요</h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            법률 문제로 고민하고 계신가요? 전문 변호사가 무료로 초기 상담을 도와드립니다.
          </p>
          <Link
            href="/consultation"
            className="inline-flex items-center px-8 py-3 bg-white text-blue-700 font-bold rounded-md hover:bg-blue-50 transition-colors"
          >
            무료 상담 신청하기
          </Link>
        </div>
      </section>
    </>
  );
}
