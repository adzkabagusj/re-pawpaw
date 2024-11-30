"use client";

import React, { useState } from "react";
import { useSchedule } from "@/context/ScheduleContext";
import { usePet } from "@/context/PetContext";
import { FaRegTrashAlt } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import Image from "next/image";

const new_schedule = {
  schedule_id: "",
  pet_id: "",
  nama: "",
  tanggal: "",
  jam: "",
  tempat: "",
  catatan: "",
};

export default function AddScheduleForm({ scheduleId }) {
  const scheduleContext = useSchedule();
  const petContext = usePet();
  const authContext = useAuth();

  const router = useRouter();
  const isEdit = scheduleId !== "new";

  // Get user pets
  const userPets = petContext?.pets.filter(
    (pet) => pet.user_id === authContext?.user.user_id
  );

  const [scheduleData, setScheduleData] = useState(() => {
    return isEdit
      ? {
          ...scheduleContext?.schedules.find(
            (s) => s.schedule_id === scheduleId
          ),
        }
      : {
          ...new_schedule,
          schedule_id: `schedule_${Date.now()}`,
        };
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setScheduleData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEdit) {
      scheduleContext?.updateSchedule(scheduleData);
    } else {
      scheduleContext?.addSchedule(scheduleData);
    }
    router.push("/grooming");
  };

  const handleRemove = () => {
    const confirmed = confirm("Are you sure you want to delete this schedule?");
    if (confirmed) {
      scheduleContext?.removeSchedule(scheduleData.schedule_id);
      alert("Schedule has been removed successfully!");
      router.push("/grooming");
    }
  };

  return (
    <div className="min-h-screen bg-white relative pt-[80px]">
      <main className="container mx-auto px-6 flex-grow flex flex-col items-center py-12">
        <div className="bg-white w-full max-w-2xl p-8 rounded-[30px] shadow-[0_0.52vw_1.56vw_0_rgba(0,0,0,0.15)]">
          <div className="flex justify-between items-center w-full">
            <h1 className="font-bold text-2xl text-black">Detail Grooming</h1>
            {isEdit && (
              <button
                className="flex justify-center items-center gap-x-4 text-base border-2 border-pink-main rounded-full px-6 py-2 text-pink-main"
                onClick={handleRemove}>
                Hapus
                <FaRegTrashAlt />
              </button>
            )}
          </div>
          <p className="text-base text-[#475569]">
            Isi data Grooming hewan peliharaan Anda.
          </p>
          <form onSubmit={handleSubmit} className="space-y-4 mt-6">
            <div className="space-y-4">
              {/* Nama Peliharaan */}
              <div>
                <label
                  htmlFor="nama"
                  className="block text-gray-700 text-[14px] font-bold mb-2">
                  Nama Peliharaan
                </label>
                {isEdit ? (
                  <input
                    type="text"
                    name="nama"
                    id="nama"
                    value={scheduleData.nama}
                    disabled
                    className="w-full px-4 py-2 border rounded-[120px] bg-gray-100 focus:outline-none text-[14px]"
                  />
                ) : (
                  <select
                    name="pet_id"
                    id="pet_id"
                    value={scheduleData.pet_id}
                    onChange={(e) => {
                      const selectedPet = userPets.find(
                        (pet) => pet.pet_id === e.target.value
                      );
                      setScheduleData((prev) => ({
                        ...prev,
                        pet_id: e.target.value,
                        nama: selectedPet?.nama || "",
                      }));
                    }}
                    className="w-full px-4 py-2 border rounded-[120px] focus:outline-none focus:ring-2 focus:ring-[#FFBCC3] text-[14px]"
                    required>
                    {userPets?.map((pet) => (
                      <option key={pet.pet_id} value={pet.pet_id}>
                        {pet.nama}
                      </option>
                    ))}
                  </select>
                )}
              </div>

              {/* Tanggal */}
              <div>
                <label
                  htmlFor="tanggal"
                  className="block text-gray-700 text-[14px] font-bold mb-2">
                  Tanggal
                </label>
                <input
                  type="date"
                  name="tanggal"
                  id="tanggal"
                  value={
                    scheduleData.tanggal
                      ? new Date(scheduleData.tanggal)
                          .toISOString()
                          .split("T")[0]
                      : ""
                  }
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-[120px] focus:outline-none focus:ring-2 focus:ring-[#FFBCC3] text-[14px]"
                  required
                />
              </div>

              {/* Jam */}
              <div>
                <label
                  htmlFor="jam"
                  className="block text-gray-700 text-[14px] font-bold mb-2">
                  Jam
                </label>
                <input
                  type="time"
                  name="jam"
                  id="jam"
                  value={scheduleData.jam}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-[120px] focus:outline-none focus:ring-2 focus:ring-[#FFBCC3] text-[14px]"
                  required
                />
              </div>

              {/* Tempat */}
              <div>
                <label
                  htmlFor="tempat"
                  className="block text-gray-700 text-[14px] font-bold mb-2">
                  Tempat
                </label>
                <input
                  type="text"
                  name="tempat"
                  id="tempat"
                  value={scheduleData.tempat}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-[120px] focus:outline-none focus:ring-2 focus:ring-[#FFBCC3] text-[14px]"
                  placeholder="Lokasi Grooming"
                  required
                />
              </div>

              {/* Catatan */}
              <div>
                <label
                  htmlFor="catatan"
                  className="block text-gray-700 text-[14px] font-bold mb-2">
                  Catatan
                </label>
                <textarea
                  name="catatan"
                  id="catatan"
                  value={scheduleData.catatan}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-[20px] focus:outline-none focus:ring-2 focus:ring-[#FFBCC3] text-[14px]"
                  placeholder="Catatan kondisi peliharaan anda"
                  rows="3"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-[#FFBCC3] text-white py-3 rounded-[120px] font-bold text-[16px] hover:bg-[#F3AAB5] transition-colors mt-6">
              Simpan
            </button>
          </form>
        </div>
      </main>

      <>
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
      </>
    </div>
  );
}
