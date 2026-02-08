import Link from "next/link";
import { SITE_NAME } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">{SITE_NAME}</h3>
            <p className="text-sm leading-relaxed">
              서울특별시 서초구 서초대로 000, 00빌딩 00층
              <br />
              대표번호: 02-000-0000
              <br />
              팩스: 02-000-0001
              <br />
              이메일: contact@roandlee.co.kr
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">전문센터</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/centers/criminal" className="hover:text-white transition-colors">
                  형사센터
                </Link>
              </li>
              <li>
                <Link href="/centers/family" className="hover:text-white transition-colors">
                  가사센터
                </Link>
              </li>
              <li>
                <Link href="/centers/corporate" className="hover:text-white transition-colors">
                  기업센터
                </Link>
              </li>
              <li>
                <Link href="/centers/immigration" className="hover:text-white transition-colors">
                  이민센터
                </Link>
              </li>
              <li>
                <Link href="/centers/realestate" className="hover:text-white transition-colors">
                  부동산센터
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">상담 안내</h3>
            <p className="text-sm leading-relaxed mb-4">
              평일 09:00 ~ 18:00
              <br />
              토요일 10:00 ~ 13:00 (예약제)
              <br />
              일요일·공휴일 휴무
            </p>
            <Link
              href="/consultation"
              className="inline-block px-4 py-2 bg-blue-700 text-white text-sm font-medium rounded-md hover:bg-blue-800 transition-colors"
            >
              온라인 상담 신청
            </Link>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} {SITE_NAME}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
