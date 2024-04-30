import React from "react";
import { MdOutlineMenuBook } from "react-icons/md";

const Section = () => {
  return (
    <div className="p-3 bg-white rounded-lg">
      <div>
        <div className="flex items-center gap-2 md:gap-4 ">
          <MdOutlineMenuBook className="text-3xl text-primary" />
          <p className="font-semibold">১/১. অধ্যায়</p>
        </div>
        <div>
          <p className="mt-2 text-sm font-medium">
            আল্লাহ্‌র রসূল (সাল্লাল্লাহু 'আলাইহি ওয়া সাল্লাম)- এর প্রতি কীভাবে
            ওয়াহী [১] শুরু হয়েছিল।
          </p>
          <hr className="w-full my-5" />
          <p className="text-sm">
            এ মর্মে আল্লাহ তা’আলার বাণীঃ “নিশ্চয়ই আমি আপনার প্রতি সেরূপ ওয়াহী
            প্রেরণ করেছি যেরূপ নূহ ও তাঁর পরবর্তী নবীদের প্রতি ওয়াহী প্রেরণ
            করেছিলাম”। (সূরা আন-নিসা ৪/১৬৩)
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section;
