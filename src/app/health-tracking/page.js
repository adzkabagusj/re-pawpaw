"use client";

import React from "react";
import HealthTrackingCard from "@/components/health-tracking/HealthTrackingCard";
import { useHealthTracking } from "@/context/HealthTrackingContext";
import Image from "next/image";
import Link from "next/link";

export default function HealthTracking() {
  const HealthTrackingContext = useHealthTracking();

  return (
    <div className="min-h-screen bg-white relative pt-[80px] overflow-x-clip">
      {/* Header Section */}
      <header
        className="relative w-full min-h-[500px] bg-cover bg-center"
        style={{ backgroundImage: `url('/bgHealthTracking.png')` }}>
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
          <h1 className="text-[60px] font-bold mt-[180px]">Health Tracking</h1>
          <p className="text-[20px]">
            Pantau kesehatan hewan peliharaan kesayangan Pawrents
          </p>
        </div>
      </header>

      {/* Health Tracking Section */}
      <section className="p-6 sm:p-12 min-h-[500px] relative mt-2">
        <h2 className="flex items-center gap-2 text-3xl font-bold text-[#FFBCC3] ml-16">
          {/* Ikon Clock */}
          <div className="">
            <div className="relative w-7 aspect-square">
              <Image
                src="/icons/HealthData.png"
                alt="Health Data Icon"
                fill
                style={{ objectFit: "contain" }}
                draggable="false"
              />
            </div>
          </div>
          Data Kesehatan
        </h2>

        {/* Dekorasi Kanan 1 */}
        <div className="absolute top-[420px] -right-10 w-36 z-0 aspect-[53.71/52.64]">
          <Image
            src="/icons/SmallPaw1.png"
            alt="Small Paw Right 1"
            fill
            style={{ objectFit: "contain" }}
            draggable="false"
          />
        </div>
        {/* Dekorasi Kanan 2 */}
        <div className="absolute top-[580px] right-[20px] w-16 z-0 aspect-[53.71/52.64]">
          <Image
            src="/icons/SmallPaw2.png"
            alt="Small Paw Right 2"
            fill
            style={{ objectFit: "contain" }}
            draggable="false"
          />
        </div>
        {/* Dekorasi Kiri */}
        <div className="absolute top-[100px] -left-12 w-48 z-0 aspect-[53.71/52.64]">
          <Image
            src="/icons/BlurPaw.png"
            alt="Blur Paw"
            fill
            style={{ objectFit: "contain" }}
            draggable="false"
          />
        </div>

        {/* Health Tracking Card */}
        <div className="p-[60px] bg-white rounded-lg">
          {HealthTrackingContext?.healthTrackings &&
          HealthTrackingContext?.healthTrackings.length > 0 ? (
            // Jika ada data kesehatan, maka ditampilkan
            <HealthTrackingCard
              healthTrackings={HealthTrackingContext?.healthTrackings}
            />
          ) : (
            // Jika tidak ada, tampilkan pesan
            <div className="flex flex-col items-center justify-center text-center text-[#FFBCC3]">
              <div className="relative w-24 aspect-square">
                <Image
                  src="/icons/NoHealthTracking.png"
                  alt="No HealthTracking"
                  fill
                  style={{ objectFit: "contain" }}
                  draggable="false"
                />
              </div>
              <p className="text-[28px] text-black/50">
                Belum ada data kesehatan.
              </p>
            </div>
          )}
        </div>

        {/* Add Button */}
        <Link
          href="/health-tracking/add-edit-health-tracking/new"
          className="fixed bottom-8 right-8 bg-[#FFBCC3] text-white w-16 h-16 rounded-[30] shadow-md flex items-center justify-center text-[30px] font-bold hover:bg-[#F3AAB5] transition">
          +
        </Link>
      </section>
    </div>
  );
}
