"use client";

import Link from "next/link";
import React from "react";

export default function ScheduleCard({ schedules }) {
  const formatDay = (dateString) => {
    const date = new Date(dateString);
    return date.getDate();
  };

  const formatMonth = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("id-ID", { month: "short" }).toUpperCase();
  };

  return (
    <div className="flex flex-col gap-6">
      {schedules
        .sort((a, b) => new Date(a.tanggal) - new Date(b.tanggal))
        .map((schedule) => (
          <Link
            href={`/grooming/schedule/${schedule.schedule_id}`}
            key={schedule.schedule_id}
            className="flex flex-wrap items-center bg-[#FFF2F3] rounded-lg shadow-md h-[120px]">
            <div className="relative top-0 left-0 w-[4px] h-[120px] bg-[#FFBCC3] rounded-l-lg"></div>

            {/* Kolom Tanggal */}
            <div className="flex flex-col items-center justify-center text-[#FFBCC3] ml-36 flex-shrink-0">
              <span className="text-[40px] font-bold">
                {formatDay(schedule.tanggal)}
              </span>
              <span className="text-[26px] font-bold">
                {formatMonth(schedule.tanggal)}
              </span>
            </div>

            {/* Baris Nama */}
            <div className="flex items-center justify-start text-[#FFBCC3] ml-36 text-[40px] font-bold w-64 flex-shrink-0">
              {schedule.nama}
            </div>

            {/* Baris waktu, lokasi */}
            <div className="flex flex-col text-[#949191] ml-20 w-20 flex-shrink-0">
              <span className="text-[16px] font-medium">{schedule.jam}</span>
              <span className="text-[16px] font-medium">{schedule.tempat}</span>
            </div>

            {/* Baris Catatan */}
            {schedule.catatan && (
              <div className="flex flex-col text-[16px] text-[#949191] ml-32 flex-shrink-0">
                <strong>Catatan:</strong> {schedule.catatan}
              </div>
            )}
          </Link>
        ))}
    </div>
  );
}
