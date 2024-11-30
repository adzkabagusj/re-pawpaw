import Image from "next/image";
import React from "react";

const gallery_images_path = [
  "/gallery_section/gallery-1.png",
  "/gallery_section/gallery-2.png",
  "/gallery_section/gallery-3.png",
  "/gallery_section/gallery-4.png",
  "/gallery_section/gallery-5.png",
];

const Galeri = () => {
  return (
    <div id="Galeri" className="relative flex flex-col w-screen justify-center items-center gap-y-10 max-w-full h-[600px] bg-pink-main overflow-clip rounded-2xl">
      <h2 className="text-white font-bold text-5xl">Gallery</h2>
      <div className="w-[80vw] relative h-fit flex gap-x-6">
        {gallery_images_path.map((value, index) => (
          <div className="w-[20vw] relative aspect-[248/340]" key={index}>
            <Image
              src={value}
              alt={`gallery image-${index + 1}`}
              fill
              style={{ objectFit: "contain" }}
              draggable="false"
            />
          </div>
        ))}
      </div>
      <div className="absolute left-0 top-0 w-[7vw] aspect-[78/107]">
        <Image
          src="/decor/gallery_decor_left.png"
          alt="decoration"
          fill
          style={{ objectFit: "contain" }}
          draggable="false"
        />
      </div>

      <div className="absolute right-0 bottom-0 w-[7vw] aspect-[78/107]">
        <Image
          src="/decor/gallery_decor_right.png"
          alt="decoration"
          fill
          style={{ objectFit: "contain" }}
          draggable="false"
        />
      </div>
    </div>
  );
};

export default Galeri;
