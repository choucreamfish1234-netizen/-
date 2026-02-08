import { Metadata } from "next";

export const metadata: Metadata = {
  title: "변호사 소개",
  description:
    "법무법인 로앤리의 전문 변호사를 소개합니다. 각 분야별 전문성을 갖춘 변호사들이 의뢰인의 권익을 보호합니다.",
};

const LAWYERS = [
  {
    name: "홍길동",
    position: "대표 변호사",
    specialty: "형사법 전문",
    education: [
      "서울대학교 법학과 졸업",
      "서울대학교 법학전문대학원 졸업",
      "사법시험 제00회 합격",
    ],
    career: [
      "서울중앙지방법원 판사 역임",
      "대한변호사협회 형사법 분과위원",
      "법무법인 로앤리 설립",
    ],
  },
  {
    name: "김변호",
    position: "파트너 변호사",
    specialty: "가사법 전문",
    education: [
      "고려대학교 법학과 졸업",
      "고려대학교 법학전문대학원 졸업",
      "변호사시험 제00회 합격",
    ],
    career: [
      "가정법원 조정위원",
      "한국가사법학회 정회원",
      "이혼·상속 관련 저서 다수",
    ],
  },
  {
    name: "이법률",
    position: "파트너 변호사",
    specialty: "기업법무 전문",
    education: [
      "연세대학교 법학과 졸업",
      "미국 Georgetown Law School LL.M.",
      "변호사시험 제00회 합격",
    ],
    career: [
      "대기업 법무팀 근무",
      "M&A 전문 법률자문",
      "대한상사중재원 중재인",
    ],
  },
  {
    name: "박해외",
    position: "수석 변호사",
    specialty: "이민법 전문",
    education: [
      "한양대학교 법학과 졸업",
      "한양대학교 법학전문대학원 졸업",
      "변호사시험 제00회 합격",
    ],
    career: [
      "출입국·외국인정책본부 자문위원",
      "이민법 전문 연수 수료",
      "다문화가정 법률지원 활동",
    ],
  },
  {
    name: "최부동",
    position: "수석 변호사",
    specialty: "부동산법 전문",
    education: [
      "성균관대학교 법학과 졸업",
      "성균관대학교 법학전문대학원 졸업",
      "변호사시험 제00회 합격",
    ],
    career: [
      "건설·부동산 관련 소송 다수",
      "재개발·재건축 전문 자문",
      "부동산법학회 정회원",
    ],
  },
];

export default function LawyersPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">변호사 소개</h1>
          <p className="text-xl text-blue-100">
            각 분야별 전문성을 갖춘 변호사들이 함께합니다
          </p>
        </div>
      </section>

      <section className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {LAWYERS.map((lawyer) => (
              <div
                key={lawyer.name}
                className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow"
              >
                <div className="bg-gray-200 h-48 flex items-center justify-center">
                  <svg
                    className="w-20 h-20 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
                <div className="p-6">
                  <div className="mb-3">
                    <h3 className="text-xl font-bold text-gray-900">
                      {lawyer.name}
                    </h3>
                    <p className="text-blue-700 font-medium text-sm">
                      {lawyer.position}
                    </p>
                    <span className="inline-block mt-1 px-2 py-0.5 bg-blue-50 text-blue-700 text-xs font-medium rounded">
                      {lawyer.specialty}
                    </span>
                  </div>

                  <div className="mb-3">
                    <h4 className="text-sm font-bold text-gray-700 mb-1">학력</h4>
                    <ul className="text-sm text-gray-600 space-y-0.5">
                      {lawyer.education.map((edu) => (
                        <li key={edu}>{edu}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-sm font-bold text-gray-700 mb-1">주요 경력</h4>
                    <ul className="text-sm text-gray-600 space-y-0.5">
                      {lawyer.career.map((c) => (
                        <li key={c}>{c}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
