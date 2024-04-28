import React from "react";
import { GrDatabase } from "react-icons/gr";
import { TbBookmark, TbCopy, TbExternalLink, TbShare } from "react-icons/tb";
import { PiWarningOctagonLight } from "react-icons/pi";

const Hadith = async ({ section_id }) => {
  const response = await fetch("http://localhost:5000/hadith");
  const data = await response.json();

  const filteredHatidth = data.hadith.filter(
    (hadith) => hadith.section_id === section_id
  );

  console.log(filteredHatidth);
  return (
    <div>
      <div className="p-4 mb-6 bg-white rounded-2xl">
        {filteredHatidth.map((hadith) => (
          <div>
            <div>
              <p className="text-xl text-right">{hadith.ar}</p>
              <p className="my-4 text-sm text-green-600">
                {hadith.narrator} থেকে বর্ণিত:
              </p>

              <p>{hadith.bn}</p>
            </div>
            <div className="flex items-center justify-between">
              <p className="my-6 text-sm">
                হাদিসের নাম:{" "}
                <span className="p-2 text-white bg-green-600 rounded-md">
                  {hadith.grade}
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
        ))}
      </div>
    </div>
  );
};

export default Hadith;
