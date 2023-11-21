"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

function Page() {
  const router = useRouter();
  const [isScattered, setIsScattered] = useState(false);
  const [isAnimation, setIsAnimation] = useState(false);

  const scatterButtons = () => {
    setIsScattered(true);
  };

  const randomPosition = () => {
    const x = Math.random() * (window.innerWidth - 500);
    const y = Math.random() * (window.innerHeight - 50);
    return { top: y + "px", left: x + "px" };
  };

  const nextPage = () => {
    router.push("/wordcloud");
  };

  useEffect(() => {
    if (isScattered) {
      setTimeout(() => {
        setIsAnimation(true);
      }, 100);
    }
  }, [isScattered]);

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      {isScattered ? (
        <>
          {[...Array(4)].map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={nextPage}
              style={{
                ...(isAnimation ? randomPosition() : {}),
              }}
              className={`fixed top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] transition-all duration-[1.5s] bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full shadow-lg hover:-translate-y-1 hover:scale-110`}
            >
              Click me
            </button>
          ))}
        </>
      ) : (
        <button type="button" onClick={scatterButtons}>
          test
        </button>
      )}
    </div>
  );
}

export default Page;
