"use client";

import { FaRegTrashAlt } from "react-icons/fa";
import React, { useState } from "react";
import { useHealthTracking } from "@/context/HealthTrackingContext";
import { useRouter } from "next/navigation";
import { usePet } from "@/context/PetContext";
import { useAuth } from "@/context/AuthContext";

const new_tracking = {
  tracking_id: "",
  pet_id: "",
  nama: "",
  riwayat_penyakit: "",
  alergi: "",
  vaksinasi: "",
};

export default function AddHealthTrackingForm({ healthTrackingId }) {
  const healthTrackingContext = useHealthTracking();
  const petContext = usePet();
  const authContext = useAuth();

  const router = useRouter();
  const isEdit = healthTrackingId !== "new";

  // Get user pets
  const userPets = petContext?.pets.filter(
    (pet) => pet.user_id === authContext?.user.user_id
  );

  const [trackingData, setTrackingData] = useState(() => {
    return isEdit
      ? {
          ...healthTrackingContext?.healthTrackings.find(
            (h) => h.tracking_id === healthTrackingId
          ),
        }
      : {
          ...new_tracking,
          tracking_id: `tracking_${Date.now()}`,
        };
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "pet_id") {
      const selectedPet = userPets.find((pet) => pet.pet_id === value);
      setTrackingData((prev) => ({
        ...prev,
        pet_id: value,
        nama: selectedPet?.nama || "",
      }));
    } else {
      setTrackingData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEdit) {
      healthTrackingContext?.updateHealthTracking(trackingData);
    } else {
      healthTrackingContext?.addHealthTracking(trackingData);
    }
    router.push("/health-tracking");
  };

  const handleRemove = () => {
    if (isEdit) {
      const confirmed = confirm("Are you sure you want to delete this record?");
      if (confirmed) {
        healthTrackingContext?.removeHealthTracking(trackingData.tracking_id);
        alert("Health tracking record removed successfully!");
        router.push("/health-tracking");
      }
    }
  };

  return (
    <div className="min-h-screen bg-white relative pt-[100px] overflow-x-clip">
      <main className="container mx-auto px-6 flex-grow flex flex-col items-center py-12">
        <div className="bg-white w-full max-w-2xl p-8 rounded-[30px] shadow-[0_0.52vw_1.56vw_0_rgba(0,0,0,0.15)]">
          <div className="flex justify-between items-center w-full">
            <h1 className="font-bold text-2xl text-black">Health Data</h1>
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
            Isi data kesehatan hewan peliharaan Pawrents.
          </p>
          <form onSubmit={handleSubmit} className="space-y-4 mt-4">
            <div className="space-y-4">
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
                    value={trackingData.nama}
                    readOnly
                    className="w-full px-4 py-2 border rounded-[120px] bg-gray-200 focus:outline-none text-[14px]"
                  />
                ) : (
                  <select
                    name="pet_id"
                    id="pet_id"
                    value={trackingData.pet_id}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-[120px] focus:outline-none focus:ring-2 focus:ring-[#FFBCC3] text-[14px]">
                    {userPets.map((pet) => (
                      <option key={pet.pet_id} value={pet.pet_id}>
                        {pet.nama}
                      </option>
                    ))}
                  </select>
                )}
              </div>

              {/* Other fields */}
              {["riwayat_penyakit", "alergi", "vaksinasi"].map((field) => (
                <div key={field}>
                  <label
                    className="block text-gray-700 text-[14px] font-bold mb-2"
                    htmlFor={field}>
                    {field.replace("_", " ").toUpperCase()}
                  </label>
                  <textarea
                    name={field}
                    id={field}
                    value={trackingData[field]}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-[20px] focus:outline-none focus:ring-2 focus:ring-[#FFBCC3] text-[14px]"
                    placeholder={`Masukkan ${field.replace("_", " ")}`}
                    rows="3"
                  />
                </div>
              ))}
            </div>

            <button
              type="submit"
              className="w-full bg-[#FFBCC3] text-white py-3 rounded-[120px] font-bold text-[16px] hover:bg-[#F3AAB5] transition-colors mt-6">
              Simpan
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}
