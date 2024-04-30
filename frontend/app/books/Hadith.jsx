import React from "react";
import { GoGear } from "react-icons/go";
import { TbBookmark, TbCopy, TbExternalLink, TbShare } from "react-icons/tb";
import { PiWarningOctagonLight } from "react-icons/pi";

const Hadith = () => {
  return (
    <div className="flex flex-col w-full gap-4 p-3 bg-white rounded-lg">
      <div className="flex items-center gap-2 font-bold text-primary md:gap-4">
        <GoGear className="text-xl" />
        <span>১</span>
      </div>
      <div>
        <p className="text-right">
          حَدَّثَنَا الْحُمَيْدِيُّ عَبْدُ اللَّهِ بْنُ الزُّبَيْرِ، قَالَ
          حَدَّثَنَا سُفْيَانُ، قَالَ حَدَّثَنَا يَحْيَى بْنُ سَعِيدٍ
          الأَنْصَارِيُّ، قَالَ أَخْبَرَنِي مُحَمَّدُ بْنُ إِبْرَاهِيمَ
          التَّيْمِيُّ، أَنَّهُ سَمِعَ عَلْقَمَةَ بْنَ وَقَّاصٍ اللَّيْثِيَّ،
          يَقُولُ سَمِعْتُ عُمَرَ بْنَ الْخَطَّابِ ـ رضى الله عنه ـ عَلَى
          الْمِنْبَرِ قَالَ سَمِعْتُ رَسُولَ اللَّهِ صلى الله عليه وسلم يَقُولُ
          ‏ "‏ إِنَّمَا الأَعْمَالُ بِالنِّيَّاتِ، وَإِنَّمَا لِكُلِّ امْرِئٍ
          مَا نَوَى، فَمَنْ كَانَتْ هِجْرَتُهُ إِلَى دُنْيَا يُصِيبُهَا أَوْ
          إِلَى امْرَأَةٍ يَنْكِحُهَا فَهِجْرَتُهُ إِلَى مَا هَاجَرَ إِلَيْهِ
        </p>
      </div>
      <div className="flex flex-col gap-3 text-sm">
        <p className="font-semibold text-primary">
          ‘আলক্বামাহ ইব্‌নু ওয়াক্কাস আল-লায়সী (রহঃ) থেকে বর্ণিত:
        </p>
        <p>
          আমি ‘উমর ইব্‌নুল খাত্তাব (রাঃ)-কে মিম্বারের উপর দাঁড়িয়ে বলতে শুনেছিঃ
          আমি আল্লাহর রসূল (সাল্লাল্লাহু ‘আলাইহি ওয়া সাল্লাম)-কে বলতে শুনেছিঃ
          কাজ (এর প্রাপ্য হবে) নিয়ত অনুযায়ী। আর মানুষ তার নিয়ত অনুযায়ী প্রতিফল
          পাবে। তাই যার হিজরত হবে ইহকাল লাভের অথবা কোন মহিলাকে বিবাহ করার
          উদ্দেশ্যে- তবে তার হিজরত সে উদ্দেশ্যেই হবে, যে জন্যে, সে হিজরত করেছে।
          (৫৪, ২৫২৯, ৩৮৯৮, ৫০৭০, ৬৬৮৯, ৬৯৫৩; মুসলিম ২৩/৪৫ হাঃ ১৯০৭, আহমাদ ১৬৮) (
          আধুনিক প্রকাশনী- ১, ইসলামিক ফাউন্ডেশন ১)
        </p>
      </div>
      <div className="flex items-center justify-between mt-4 mb-2 ">
        <p className="text-sm ">
          হাদিসের নাম:{" "}
          <span className="px-2 py-1 text-white rounded-md bg-primary">
            সহিহ হাদিস
          </span>
        </p>
        <div className="flex gap-4">
          <TbCopy />
          <TbBookmark />
          <TbShare />
          <PiWarningOctagonLight />
          <TbExternalLink />
        </div>
      </div>
    </div>
  );
};

export default Hadith;
