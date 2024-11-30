"use client";

import { useState } from "react";
import { usePet } from "@/context/PetContext";
import { useRouter } from "next/navigation";

import Image from "next/image";

import { MdOutlineSave } from "react-icons/md";
import { FaRegTrashAlt } from "react-icons/fa";
import { LuPencilLine } from "react-icons/lu";

const AddEditActivity = ({ petId, activityId }) => {
  const petContext = usePet();
  const router = useRouter();
  const isEdit = activityId !== "new";
  const [activityData, setActivityData] = useState(() => {
    const matchedPet = petContext?.pets.find((p) => p.pet_id === petId);

    if (isEdit && matchedPet) {
      const matchedActivity = matchedPet.aktivitas.find(
        (a) => a.aktivitas_id === activityId
      );
      return matchedActivity ? { ...matchedActivity } : null;
    } else if (matchedPet) {
      return {
        aktivitas_id: `aktivitas_${Date.now()}`,
        foto: "/pet_detail/input_activity_foto_placeholder.png",
        caption: "",
        tanggal: new Date(),
      };
    }
    return null;
  });

  const isValid = () => {
    // Check if all required fields are filled
    const { foto, caption } = activityData;
    return foto && caption;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setActivityData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setActivityData((prev) => ({ ...prev, foto: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    if (!isValid()) {
      alert("Please fill in all required fields!");
      return;
    }

    if (isEdit) {
      petContext?.updateActivity(petId, activityData);
    } else {
      petContext?.addActivity(petId, activityData);
    }
    router.push(`/pet`);
  };

  const handleRemove = () => {
    const confirmed = confirm("Are you sure you want to delete this activity?");
    if (confirmed) {
      petContext?.removeActivity(petId, activityId);
      alert("activity has been removed successfully!");
      router.push("/pet");
    }
  };

  if (!activityData) {
    return <div>Data not found</div>;
  }

  return (
    <div className="relative h-[120vh] w-screen max-w-full overflow-x-clip grid place-content-center">
      <div className="h-fit py-6 px-8 w-[500px] flex flex-col items-start gap-y-4 rounded-[32px] border-[#CBD5E1] border-2 shadow-[0_0.52vw_1.56vw_0_rgba(0,0,0,0.15)] z-0">
        {/* Header + Remove button */}
        <div className="flex justify-between items-center w-full">
          <h1 className="font-bold text-2xl text-black">Daily Activities</h1>
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
          Unggah kenangan bersama hewan peliharaan Anda.
        </p>

        {/* Photo */}
        <p className="text-gray-700 font-bold -mb-2">Tambahkan Foto </p>
        <div className="relative">
          <label htmlFor="profilePhotoInput" className="cursor-pointer">
            <div className="relative w-72 aspect-square rounded-3xl object-cover overflow-clip">
              <Image
                src={activityData.foto}
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

        {/* Caption */}
        <div className="w-full">
          <label
            htmlFor="caption"
            className="block text-gray-700 font-bold mb-2">
            Caption
          </label>
          <input
            id="caption"
            name="caption"
            type="text"
            value={activityData.caption}
            onChange={handleChange}
            placeholder="Ceritakan momen ini ..."
            className="w-full px-4 py-2 border-2 border-gray-300 focus:border-pink-main focus:outline-none rounded-full"
          />
        </div>

        {/* Save Button */}
        <button
          className="mt-4 w-full flex justify-center items-center gap-x-4 text-base border-2 border-pink-main rounded-full px-6 py-2 bg-pink-main text-white"
          onClick={handleSave}>
          Simpan
          <MdOutlineSave />
        </button>
      </div>
    </div>
  );
};

export default AddEditActivity;
