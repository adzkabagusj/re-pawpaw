"use client";

import { useSchedule } from "@/context/ScheduleContext";
import React from "react";
import ScheduleCard from "@/components/grooming/ScheduleCard";
import Image from "next/image";
import Link from "next/link";

export default function Grooming() {
  const scheduleContext = useSchedule();

  return (
    <div className="min-h-screen bg-white relative pt-[80px]">
      {/* Header Section */}
      <header
        className="relative w-full min-h-[500px] bg-cover bg-center"
        style={{ backgroundImage: `url('/bgGrooming.png')` }}>
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
          <h1 className="text-[60px] font-bold mt-[180px]">
            Grooming Schedule
          </h1>
          <p className="text-[20px]">
            Pengatur jadwal grooming hewan peliharaan kesayangan Pawrents
          </p>
        </div>
      </header>

      {/* Schedule Section */}
      <section className="p-6 sm:p-12 min-h-[500px] relative mt-2">
        <h2 className="flex items-center gap-2 text-3xl font-bold text-[#FFBCC3] ml-16">
          {/* Ikon Clock */}
          <div className="relative w-7 aspect-square">
            <Image
              src="/icons/clock.png"
              alt="Clock Icon"
              fill
              style={{ objectFit: "contain" }}
              draggable="false"
            />
          </div>
          Your Schedule
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

        {/* Schedule Card */}
        <div className="p-[60px] bg-white rounded-lg">
          {scheduleContext?.schedules &&
          scheduleContext?.schedules.length > 0 ? (
            // Jika ada jadwal, tampilkan ScheduleCard
            <ScheduleCard schedules={scheduleContext?.schedules} />
          ) : (
            // Jika tidak ada jadwal, tampilkan pesan
            <div className="flex flex-col gap-y-2 items-center justify-center text-center text-[#FFBCC3]">
              <div className="relative w-24 aspect-square">
                <Image
                  src="/icons/NoSchedule.png"
                  alt="No Schedule"
                  fill
                  style={{ objectFit: "contain" }}
                  draggable="false"
                />
              </div>
              <p className="text-[25px] text-black/50">
                Belum ada <br /> jadwal Grooming.
              </p>
            </div>
          )}
        </div>

        {/* Add Button */}
        <Link
          href="/grooming/schedule/new"
          className="fixed bottom-8 right-8 bg-[#FFBCC3] text-white w-16 h-16 rounded-[30] shadow-md flex items-center justify-center text-[30px] font-bold hover:bg-[#F3AAB5] transition">
          +
        </Link>
      </section>
    </div>
  );
}
