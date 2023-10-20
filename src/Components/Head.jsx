import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Head = () => {
  const [text1] = useState("Hello...");
  const [text2, setText2] = useState("");
  const [typingComplete, setTypingComplete] = useState(false);

  const fullText =
    `I am <span style="color:#2b7bd7;"> Amarachi Nwokocha </span>, a <span class="blue-text"> Frontend Developer </span> with 1 year  experience proficiently  building software with the following frontend technologies, <span class="blue-text">Javascript, React.js, Next.js, Redux, Bootstrap, Tailwind CSS and others.</span> I am constantly working on myself to improve my skills and I also love learning new technologies to add to my stack!`;

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setText2(fullText.substring(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        setTypingComplete(true);
      }
    }, 25);
  }, []);

  return (
    <>
      <div className="p-6 ">
        <img src="" alt="" />
        <div className="typing-demo">
          <p className="text-4xl mt-10 mb-10 md:text-6xl lg:text-8xl">{text1}</p>
          <p className="text-2xl">
            <span
              className="inline-block text-md md:text-2xl lg:text-3xl"
              dangerouslySetInnerHTML={{ __html: text2 }}
            />
          </p>
          {typingComplete && (
            <div className="mt-10">            
            <Link
              className="t-[200px] hover:cursor-pointer rounded-xl  border-2 border-blue-500 p-2 hover:bg-blue-500 hover:text-white hover:border-2  text-2xl"
              target="_blank"
              to="https://portfolio-two-lac-63.vercel.app/"
            >
              Résumé
            </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Head;
