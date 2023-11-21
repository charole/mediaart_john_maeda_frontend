"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const Page = () => {
  const [url, setUrl] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api/generate-wordcloud", {
        cache: "no-store",
      });
      const blob = await response.blob();
      setUrl(URL.createObjectURL(blob));
    };
    fetchData();
  }, []);

  return (
    <div className="flex justify-center items-center h-screen">
      {url ? (
        <Image src={url} alt="Word Cloud" width={580} height={749} />
      ) : (
        <div>loading...</div>
      )}
    </div>
  );
};

export default Page;
