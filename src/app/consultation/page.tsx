import { Metadata } from "next";
import ConsultationForm from "./ConsultationForm";

export const metadata: Metadata = {
  title: "상담 신청",
  description:
    "법무법인 로앤리에 무료 법률 상담을 신청하세요. 전문 변호사가 24시간 내 연락드립니다.",
};

export default function ConsultationPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">상담 신청</h1>
          <p className="text-xl text-blue-100">
            전문 변호사가 24시간 내 연락드립니다
          </p>
        </div>
      </section>

      <section className="py-12 lg:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-gray-200 rounded-lg p-6 lg:p-8">
            <h2 className="text-xl font-bold text-gray-900 mb-6">
              상담 신청서 작성
            </h2>
            <ConsultationForm />
          </div>

          <div className="mt-8 bg-gray-50 border border-gray-200 rounded-lg p-6">
            <h3 className="font-bold text-gray-900 mb-3">상담 안내</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-start gap-2">
                <span className="text-blue-700 mt-0.5">&bull;</span>
                상담 신청 후 24시간 이내에 담당 변호사가 연락드립니다.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-700 mt-0.5">&bull;</span>
                초기 상담은 무료이며, 사건 수임 시 별도 안내됩니다.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-700 mt-0.5">&bull;</span>
                긴급한 상담이 필요하시면 대표번호 02-000-0000으로 연락 주세요.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-700 mt-0.5">&bull;</span>
                모든 상담 내용은 변호사-의뢰인 비밀유지 의무에 따라 보호됩니다.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
