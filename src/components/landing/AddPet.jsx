"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

const AddPet = () => {
  return (
    <div
      id="AddPet"
      className="relative bg-white min-h-screen flex flex-col items-center py-12 px-6 overflow-hidden">
      {/* Background Images */}
      <>
        <div className="absolute w-[65px] aspect-square top-[15%] -right-4 z-10">
          <Image
            src="/ornament1.png"
            alt="Bone Right"
            fill
            style={{ objectFit: "contain" }}
            draggable="false"
          />
        </div>
        <div className="absolute w-48 aspect-square top-[50%] -left-8 z-10">
          <Image
            src="/ornament2.png"
            alt="Bone Left"
            fill
            style={{ objectFit: "contain" }}
            draggable="false"
          />
        </div>
        <div
          className="absolute inset-0 bg-cover bg-top z-1"
          style={{
            backgroundImage: "url(/bgImagePink.png)",
            height: "100%",
            backgroundPosition: "top",
          }}></div>
      </>

      {/* Title */}
      <h2 className="text-4xl font-bold text-white mb-10 text-center z-10 mt-10">
        Add Your Pets
      </h2>

      {/* Pet Cards Container */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-[70px] z-10 mt-5">
        {/* Card 1: Anjing */}
        <div
          className="bg-white rounded-[30px] shadow-md p-7 text-center w-[298px] h-[363px] flex flex-col items-center justify-between"
          style={{
            borderTopLeftRadius: "30px",
            borderTopRightRadius: "30px",
            borderBottomLeftRadius: "100px",
            borderBottomRightRadius: "30px",
          }}>
          <h3 className="text-[25px] font-bold text-[#F3AAB5] mb-1">Anjing</h3>
          <div className="relative w-[243px] aspect-[243/160] mb-4 rounded-lg overflow-clip">
            <Image
              src="/Anjing.png"
              alt="Anjing"
              fill
              style={{ objectFit: "contain" }}
              draggable="false"
            />
          </div>
          <p className="text-[12px] text-gray-700">
            Isi detail lengkap Anjing kesayangan Anda untuk menambahkannya ke
            dalam daftar.
          </p>
          <Link
            href="/pet"
            className="bg-[#FFBCC3] text-white w-[51px] h-[51px] rounded-[12px] mt-2 flex items-center justify-center text-3xl hover:scale-105">
            +
          </Link>
        </div>

        {/* Card 2: Kelinci */}
        <div className="bg-white rounded-[30px] shadow-md p-7 text-center w-[298px] h-[363px] flex flex-col items-center justify-between">
          <h3 className="text-[25px] font-bold text-[#F3AAB5] mb-1">Kelinci</h3>
          <div className="relative w-[243px] aspect-[243/160] mb-4 rounded-lg overflow-clip">
            <Image
              src="/Kelinci.png"
              alt="Kelinci"
              fill
              style={{ objectFit: "contain" }}
              draggable="false"
            />
          </div>
          <p className="text-[12px] text-gray-700">
            Isi detail lengkap Kelinci kesayangan Anda untuk menambahkannya ke
            dalam daftar.
          </p>
          <Link
            href="/pet"
            className="bg-[#FFBCC3] text-white w-[51px] h-[51px] rounded-[12px] mt-2 flex items-center justify-center text-3xl hover:scale-105">
            +
          </Link>
        </div>

        {/* Card 3: Kucing */}
        <div
          className="bg-white rounded-[30px] shadow-md p-7 text-center w-[298px] h-[363px] flex flex-col items-center justify-between"
          style={{
            borderTopLeftRadius: "30px",
            borderTopRightRadius: "30px",
            borderBottomLeftRadius: "30px",
            borderBottomRightRadius: "100px",
          }}>
          <h3 className="text-[25px] font-bold text-[#F3AAB5] mb-1">Kucing</h3>
          <div className="relative w-[243px] aspect-[243/160] mb-4 rounded-lg overflow-clip">
            <Image
              src="/Kucing.png"
              alt="Kucing"
              fill
              style={{ objectFit: "contain" }}
              draggable="false"
            />
          </div>
          <p className="text-[12px] text-gray-700">
            Isi detail lengkap Kucing kesayangan Anda untuk menambahkannya ke
            dalam daftar.
          </p>
          <Link
            href="/pet"
            className="bg-[#FFBCC3] text-white w-[51px] h-[51px] rounded-[12px] mt-2 flex items-center justify-center text-3xl hover:scale-105">
            +
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AddPet;
