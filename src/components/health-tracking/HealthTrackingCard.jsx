"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePet } from "@/context/PetContext";

export default function HealthTrackingCard({ healthTrackings }) {
  const petContext = usePet();

  return (
    <div className="flex flex-col gap-6">
      {healthTrackings.map((tracking, index) => {
        const pet = petContext?.pets.find((p) => p.pet_id === tracking.pet_id);
        const foto = pet?.foto || "/icons/SmallPawSolid.png";

        return (
          <div
            key={index}
            className="relative flex flex-wrap items-center bg-[#FFF2F3] rounded-[25px] shadow-md">
            {/* Garis di kiri card */}
            <div className="absolute top-0 left-0 w-[10px] bg-[#FFBCC3] rounded-l-lg h-full"></div>

            {/* Foto dan Nama Hewan */}
            <div className="flex flex-col p-8 ml-8">
              {/* Nama Hewan */}
              <h2 className="text-[50px] font-bold text-[#FFBCC3]">
                {tracking.nama}
              </h2>

              {/* Foto Hewan */}
              <div className="relative h-[280px] w-[280px] rounded-[20px] overflow-hidden">
                <Image
                  src={foto}
                  alt={`${tracking.nama}'s photo`}
                  fill
                  style={{ objectFit: "cover" }}
                  draggable={false}
                />
                <div className="absolute bottom-[-10px] right-[-10px] w-[50px] aspect-[56.18/55.06]">
                  <Image
                    src="/icons/SmallPawSolid.png"
                    alt="Paw Decoration"
                    fill
                    style={{ objectFit: "contain" }}
                    draggable="false"
                  />
                </div>
              </div>
            </div>

            {/* Informasi Detail */}
            <div className="text-[#3A3A3A] text-[16px] flex flex-col gap-4 ml-8">
              <div>
                <strong>Riwayat Penyakit:</strong>{" "}
                {tracking.riwayat_penyakit
                  ? tracking.riwayat_penyakit.split("\n").map((record, i) => (
                      <div key={i} className="ml-4 list-disc">
                        • {record}
                      </div>
                    ))
                  : "Tidak ada riwayat penyakit"}
              </div>
              <div>
                <strong>Alergi:</strong>{" "}
                {tracking.alergi
                  ? tracking.alergi.split("\n").map((allergy, i) => (
                      <div key={i} className="ml-4 list-disc">
                        • {allergy}
                      </div>
                    ))
                  : "Tidak ada alergi tercatat"}
              </div>
              <div>
                <strong>Vaksinasi:</strong>{" "}
                {tracking.vaksinasi
                  ? tracking.vaksinasi.split("\n").map((vaccine, i) => (
                      <div key={i} className="ml-4 list-disc">
                        • {vaccine}
                      </div>
                    ))
                  : "Tidak ada data vaksinasi"}
              </div>
            </div>

            {/* Tombol Edit */}
            <Link
              href={`/health-tracking/add-edit-health-tracking/${tracking.tracking_id}`}
              className="absolute bottom-6 right-6 bg-[#FFBCC3] text-white text-[16px] font-bold py-2 px-6 rounded-[50px] shadow-lg hover:bg-[#F3AAB5] transition-all">
              Edit Data
            </Link>
          </div>
        );
      })}
    </div>
  );
}
