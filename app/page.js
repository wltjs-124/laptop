"use client";

import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center bg-white p-8 rounded-lg">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-6">
  <span className="block md:inline">지능형 얼굴</span>
  <span className="block md:inline">가명처리 플랫폼</span>
</h1>
        <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-8">
          개인정보를 안전하게 보호하면서도
          <br />
          AI 학습에 유용한 얼굴 데이터를 생성합니다.
        </p>
        <Link href="/login">
          <button className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition">
            시작하기
          </button>
        </Link>
      </div>
    </main>
  );
}
