import Image from "next/image";

const getData = async () => {
  const response = await fetch("/api/generate-wordcloud", {
    cache: "no-store",
  });
  return response;
};

const Page = async () => {
  const response = await getData();
  const blob = await response.blob();
  const url = URL.createObjectURL(blob);
  console.info("response?", url);

  return (
    <div>
      123
      {url && <Image src={url} alt="Word Cloud" width={1000} height={1300} />}
    </div>
  );
};

export default Page;
