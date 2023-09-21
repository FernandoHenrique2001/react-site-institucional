import Image, { StaticImageData } from "next/image";

export default function Services({ url }: { url: StaticImageData }) {
  return (
    <div className="flex justify-center items-center flex-col flex-shrink">
      <Image
        alt="services"
        className="w-40 h-40 rounded-full"
        src={url}
        width={500}
        height={500}
      />
      <h1 className="mt-4 text-base">Lorem Ipsum</h1>
    </div>
  );
}
