"use client";

import { useState } from "react";
import { usePet } from "@/context/PetContext";
import { useRouter } from "next/navigation";

import Image from "next/image";

import { MdOutlineSave } from "react-icons/md";
import { FaRegTrashAlt } from "react-icons/fa";
import { LuPencilLine } from "react-icons/lu";
import { useAuth } from "@/context/AuthContext";

const newPet = {
  pet_id: "",
  tipe: "",
  nama: "",
  tanggal_lahir: null,
  umur: "",
  breed: "",
  foto: "/pet_detail/input_activity_foto_placeholder.png",
  aktivitas: [],
};

const AddEditPet = ({ petType, petId }) => {
  const authContext = useAuth();
  const petContext = usePet();
  const router = useRouter();
  const isEdit = petId !== "new";
  const [petData, setPetData] = useState(
    isEdit
      ? { ...petContext?.pets.find((p) => p.pet_id === petId) }
      : {
          ...newPet,
          pet_id: `pet_${Date.now()}`,
          user_id: authContext?.user?.user_id || "",
          tipe: petType,
        }
  );

  const isValid = () => {
    const { foto } = petData;
    return foto && foto !== "/pet_detail/input_activity_foto_placeholder.png";
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "umur") {
      const numericValue = value.replace(/[^0-9]/g, ""); // Allow only numbers for umur
      setPetData((prev) => ({ ...prev, [name]: numericValue }));
    } else {
      setPetData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSave = (e) => {
    e.preventDefault();
    if (!isValid()) {
      alert("Tolong tambahkan foto pet anda");
      return;
    }

    if (isEdit) {
      petContext?.updatePet(petData);
    } else {
      petContext?.addPet(petData);
    }
    alert("Pet data has been saved successfully!");
    router.push("/pet");
  };

  const handleRemove = () => {
    const confirmed = confirm("Are you sure you want to delete this pet?");
    if (confirmed) {
      petContext?.removePet(petId);
      alert("Pet has been removed successfully!");
      router.push("/pet");
    }
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setPetData((prev) => ({ ...prev, foto: event.target.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="relative h-[170vh] w-screen max-w-full overflow-x-clip grid place-content-center">
      <div className="h-fit py-6 px-8 w-[500px] flex flex-col items-start gap-y-4 rounded-[32px] border-[#CBD5E1] border-2 shadow-[0_0.52vw_1.56vw_0_rgba(0,0,0,0.15)] z-0">
        {/* Header + Hapus button */}
        <>
          <div className="flex justify-between items-center w-full">
            <h1 className="font-bold text-2xl text-black">{`Pet Data (${petType})`}</h1>
            {isEdit && (
              <button
                className="flex justify-center items-center gap-x-4 text-base border-2 border-pink-main rounded-full px-6 py-2 text-pink-main"
                onClick={handleRemove}>
                Hapus
                <FaRegTrashAlt />
              </button>
            )}
          </div>

          <p className="text-base text-[#475569] ">
            Isi form berikut untuk menambahkan hewan peliharaan kesayangan Anda.
          </p>
        </>

        <form
          onSubmit={handleSave}
          className="flex flex-col items-start gap-y-4 w-full">
          {/* Foto */}
          <p className="text-gray-700 font-bold -mb-2">Tambahkan Foto </p>
          <div className="relative">
            <label htmlFor="profilePhotoInput" className="cursor-pointer">
              <div className="relative w-72 aspect-square rounded-3xl object-cover overflow-clip">
                <Image
                  src={petData.foto}
                  alt="Pet Photo"
                  fill
                  style={{ objectFit: "cover" }}
                  draggable="false"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white rounded-full p-1 border-2 border-gray-300">
                <LuPencilLine className="text-pink-main text-4xl" />
              </div>
            </label>
            <input
              id="profilePhotoInput"
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handlePhotoChange}
            />
          </div>

          {/* Nama Peliharaan */}
          <div className="w-full">
            <label
              htmlFor="nama"
              className="block text-gray-700 font-bold mb-2">
              Nama Peliharaan:
            </label>
            <input
              id="nama"
              name="nama"
              type="text"
              value={petData.nama}
              onChange={handleChange}
              placeholder="Nama Peliharaan"
              required
              className="w-full px-4 py-2 border-2 border-gray-300 focus:border-pink-main focus:outline-none rounded-full"
            />
          </div>

          {/* Tanggal Lahir */}
          <div className="w-full">
            <label
              htmlFor="tanggal_lahir"
              className="block text-gray-700 font-bold mb-2">
              Tanggal Lahir
            </label>
            <input
              id="tanggal_lahir"
              name="tanggal_lahir"
              type="date"
              value={
                petData.tanggal_lahir
                  ? new Date(petData.tanggal_lahir).toISOString().split("T")[0]
                  : ""
              }
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border-2 border-gray-300 focus:border-pink-main focus:outline-none rounded-full"
            />
          </div>

          {/* Umur */}
          <div className="w-full">
            <label
              htmlFor="umur"
              className="block text-gray-700 font-bold mb-2">
              Umur (Tahun)
            </label>
            <input
              id="umur"
              name="umur"
              type="text"
              value={petData.umur}
              onChange={handleChange}
              placeholder="Umur"
              required
              className="w-full px-4 py-2 border-2 border-gray-300 focus:border-pink-main focus:outline-none rounded-full"
            />
          </div>

          {/* Breed */}
          <div className="w-full">
            <label
              htmlFor="breed"
              className="block text-gray-700 font-bold mb-2">
              Breed
            </label>
            <input
              id="breed"
              name="breed"
              type="text"
              value={petData.breed}
              onChange={handleChange}
              placeholder="Breed"
              required
              className="w-full px-4 py-2 border-2 border-gray-300 focus:border-pink-main focus:outline-none rounded-full"
            />
          </div>

          {/* Save Button */}
          <button className="mt-4 w-full flex justify-center items-center gap-x-2 text-white font-bold bg-pink-main rounded-full py-2">
            Save
            <MdOutlineSave className="text-lg text-white" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddEditPet;
