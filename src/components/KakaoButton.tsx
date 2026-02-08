"use client";

import { KAKAO_CHANNEL_ID } from "@/lib/constants";

export default function KakaoButton() {
  const handleClick = () => {
    if (KAKAO_CHANNEL_ID) {
      window.open(
        `https://pf.kakao.com/${KAKAO_CHANNEL_ID}/chat`,
        "_blank",
        "noopener,noreferrer"
      );
    } else {
      alert("카카오톡 채널 ID가 설정되지 않았습니다.");
    }
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-4 py-3 bg-[#FEE500] text-[#3C1E1E] font-medium rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105"
      aria-label="카카오톡 상담"
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 3C6.48 3 2 6.58 2 10.9C2 13.7 3.88 16.15 6.68 17.52L5.72 21.08C5.64 21.38 5.98 21.62 6.24 21.44L10.52 18.64C11 18.7 11.5 18.74 12 18.74C17.52 18.74 22 15.16 22 10.84C22 6.58 17.52 3 12 3Z"
          fill="#3C1E1E"
        />
      </svg>
      <span className="hidden sm:inline text-sm">카카오톡 상담</span>
    </button>
  );
}
