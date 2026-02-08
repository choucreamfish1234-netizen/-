import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CENTERS, CenterSlug, SITE_NAME } from "@/lib/constants";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return Object.keys(CENTERS).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const center = CENTERS[params.slug as CenterSlug];
  if (!center) return {};

  return {
    title: `${center.title} - ${center.subtitle}`,
    description: center.description,
    openGraph: {
      title: `${center.title} | ${SITE_NAME}`,
      description: center.description,
    },
  };
}

export default function CenterPage({ params }: Props) {
  const center = CENTERS[params.slug as CenterSlug];

  if (!center) {
    notFound();
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-4xl mb-4">{center.icon}</div>
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">{center.title}</h1>
          <p className="text-xl text-blue-100">{center.subtitle}</p>
        </div>
      </section>

      {/* Description */}
      <section className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">센터 소개</h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              {center.description}
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-12 lg:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">주요 업무 분야</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {center.services.map((service) => (
              <div
                key={service}
                className="bg-white p-5 rounded-lg border border-gray-200 flex items-start gap-3"
              >
                <svg
                  className="w-5 h-5 text-blue-700 mt-0.5 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-gray-800 font-medium">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">상담 절차</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "상담 접수", desc: "온라인 또는 전화로 상담을 신청합니다" },
              { step: "02", title: "사건 분석", desc: "전문 변호사가 사건을 면밀히 분석합니다" },
              { step: "03", title: "전략 수립", desc: "최적의 법률 전략을 수립합니다" },
              { step: "04", title: "사건 진행", desc: "체계적으로 사건을 진행합니다" },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-12 h-12 bg-blue-700 text-white rounded-full flex items-center justify-center mx-auto mb-3 text-lg font-bold">
                  {item.step}
                </div>
                <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold mb-4">
            {center.title} 전문 변호사에게 상담하세요
          </h2>
          <p className="text-blue-100 mb-6">
            풍부한 경험의 전문 변호사가 최선의 결과를 이끌어냅니다.
          </p>
          <Link
            href="/consultation"
            className="inline-flex items-center px-6 py-3 bg-white text-blue-700 font-bold rounded-md hover:bg-blue-50 transition-colors"
          >
            무료 상담 신청하기
          </Link>
        </div>
      </section>
    </>
  );
}
