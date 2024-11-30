"use client";

import React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-[#FFBCC3] text-[#ffffff] flex flex-col md:flex-row items-center justify-between px-8 rounded-t-[30px] z-100">
      <div className="text-[16px] text-white mt-4 md:mt-0">
        &copy; 2024 PawPaw. All rights reserved.
      </div>
      <Link
        href="/"
        className="relative flex items-center w-72 aspect-[182.45/100]">
        {/* <img src="/icons/FooterLogo.png" alt="Paw Icon" className="h-[140px]" />{" "} */}
        <Image
          src="/icons/FooterLogo.png"
          alt="Paw Ico"
          fill
          style={{ objectFit: "contain" }}
          draggable="false"
        />
        {/* Sesuaikan path icon */}
      </Link>
      <div className="flex space-x-4 text-[16px] text-white mt-4 md:mt-0 gap-[50px]">
        <Link href="/" className="hover:underline cursor-default">
          Terms of Service
        </Link>
        <Link href="/" className="hover:underline cursor-default">
          Privacy Policy
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
