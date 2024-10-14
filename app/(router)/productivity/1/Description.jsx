import React from "react";
import Video from "./Video";

function Description() {
  return (
    <div>
      <h2 className="text-[20px] font-semibold">1. Productive</h2>
      <h2 className="text-gray-400 text-[14px] mb-3">Easy Tiger Apps, LLC.</h2>
      <Video />

      <h2 className="mt-5 text-[20px] font-semibold">待辦事項清單 & 習慣養成 - Productive</h2>
      <p className="text-[14px] mt-5 italic">
      想要獲得創造健康日常生活的動力嗎？試試 Productive - 一個幫助您養成積極的、改變生活習慣的應用程式 透過 Productive，您可以設定個人目標、追蹤您的進度並讓您再創高峰！
      </p>
        <h2 className="mt-5 text-[20px] font-semibold">App Store : <a href="https://apps.apple.com/tw/app/%E5%BE%85%E8%BE%A6%E4%BA%8B%E9%A0%85%E6%B8%85%E5%96%AE-%E7%BF%92%E6%85%A3%E9%A4%8A%E6%88%90-productive/id983826477" target="blank" className="
        text-blue-500
        hover:underline
        ">Productive</a></h2>
    </div>
  );
}

export default Description;
