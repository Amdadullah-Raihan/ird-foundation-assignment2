import React, { useEffect, useState } from "react";
import ChapterItem from "./ChapterItem";

const ChaptersTOC = () => {
  const [chapters, setChapters] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/chapter")
      .then((res) => res.json())
      .then((data) => {
        setChapters(data.chapter);
      });
  }, []);

  return (
    <div>
      {chapters.map((chapter) => (
        <ChapterItem key={chapter.book_name} chapter={chapter} />
      ))}
    </div>
  );
};

export default ChaptersTOC;
