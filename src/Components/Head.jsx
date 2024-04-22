import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Head = () => {
  return (
    <>
      <div className="p-6 ">
        <div className="typing-demo">
          <p className="text-4xl mt-10 mb-10 md:text-6xl lg:text-8xl">
            I am Oluwaseyi Adedotun, a Frontend Developer with 1 year experience
            proficiently building software with the following frontend
            technologies, Javascript, React.js, Next.js, Redux, Bootstrap,
            Tailwind CSS and others. I am constantly working on myself to
            improve my skills and I also love learning new technologies to add
            to my stack!
          </p>

          <div className="mt-10">
            <Link
              className="t-[200px] hover:cursor-pointer rounded-xl  border-2 border-blue-500 p-2 hover:bg-blue-500 hover:text-white hover:border-2  text-2xl"
              target="_blank"
              to="https://portfolio-two-lac-63.vercel.app/"
            >
              Résumé
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Head;
