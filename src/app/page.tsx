"use client";

import { useEffect, useState } from "react";
import styles from "./fadeout.module.css";
import { useRouter } from "next/navigation";

export default function Home() {
  const [styled, setStyled] = useState("");
  const router = useRouter();

  useEffect(() => {
    const fadeTimeout = setTimeout(() => {
      setStyled(styles.fadeOut);
    }, 2000);

    const navigateTimeout = setTimeout(() => {
      router.push("/nextpage");
    }, 4000);

    return () => {
      clearTimeout(fadeTimeout);
      clearTimeout(navigateTimeout);
    };
  }, [router]);

  return (
    <div
      className={`${styled} flex flex-col justify-center items-center h-screen gap-[1rem]`}
    >
      <h1 className="text-6xl font-bold outline-0">당신이 생각하는 디자인의</h1>
      <h1 className="text-6xl font-bold outline-0">
        중요한 키워드는 무엇인가요?
      </h1>
    </div>
  );
}
