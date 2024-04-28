import React from "react";
import bg from "../../assests/masque.png";
import Image from "next/image";
const SupportCard = () => {
  return (
    <div className="relative z-0 mt-6 text-white min-h-64 ">
      <div className="absolute -right-4 -bottom-4 w-[50%] md:w-[60%] md:h-[60%] z-0">
        <Image src={bg} alt="bg" className="w-full h-rull" />
      </div>
      <div className="relative z-10 p-4 bg-[#2B9E76] bg-opacity-85 rounded-2xl min-h-64">
        <p>আপনিও সদাকায়ে জারিয়াতে অংশ নিন</p>
        <p className="my-4 text-xs">
          আপনার দান, সেটা ছোট হলেও, ইসলামের বার্তা ও হাদিস প্রচারে সহায়তা করবে।
          আমাদের কাজের অংশ হতে এবং এই গুরুত্বপূর্ন কাজে সাহায্য করতে আমাদের
          প্রজেক্টে হাদিয়া দিন। ইনশাআল্লাহ এইটি সদাকায়ে জারিয়াহ হিসেবে আল্লাহর
          কাছে কবুল হবে।
        </p>
        <div className="text-center ">
          <button className="px-4 py-2 text-sm bg-white rounded-lg primary-color ">
            সাপোর্ট করুন
          </button>
        </div>
      </div>
    </div>
  );
};

export default SupportCard;
