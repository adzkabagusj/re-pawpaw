import Image from "next/image";
import React from "react";

const NotFound = () => {
  return (
    <div className="relative w-screen max-w-full h-screen py-40 overflow-x-clip grid place-content-center">
      <div className="flex flex-col items-center gap-y-2">
        <div className="w-40 aspect-[166/163] relative mb-4">
          <Image
            src="/fish_404.png"
            alt="404"
            fill
            style={{ objectFit: "contain" }}
            draggable="false"
          />
        </div>
        <h1 className="text-black font-bold text-4xl">404</h1>
        <p className="text-black opacity-50 text-2xl">Oops.. page not found.</p>
        <p className="text-black opacity-50 text-lg">
          The resource requested could not be found on this server!
        </p>
      </div>

      {/* Decor */}
      <div className="absolute left-0 bottom-0 w-40 aspect-[97/202]">
        <Image
          src="/decor/paw_kiri_bawah_pink.png"
          alt="decoration"
          fill
          style={{ objectFit: "contain" }}
          draggable="false"
        />
      </div>
      <div className="absolute right-0 top-20 w-20 aspect-[99/261]">
        <Image
          src="/decor/tulang_kanan_pink.png"
          alt="decoration"
          fill
          style={{ objectFit: "contain" }}
          draggable="false"
        />
      </div>
    </div>
  );
};

export default NotFound;
