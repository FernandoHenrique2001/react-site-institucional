import Image, { StaticImageData } from "next/image";

export default function Portfolio({ url }: { url: StaticImageData }) {
  return (
    <div className="flex justify-center items-center flex-col w-200 h-200 flex-shrink-0 border border-white">
      <Image alt="Portifolio" src={url} width={200} height={200} />
    </div>
  );
}
