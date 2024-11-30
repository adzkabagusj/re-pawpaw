"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { MdOutlineSave } from "react-icons/md";
import { LuPencilLine } from "react-icons/lu";

const AddProfilePhoto = () => {
  const router = useRouter();
  const [profilePhoto, setProfilePhoto] = useState(
    "/DefaultProfilePicture.png"
  );
  const [isLoading, setIsLoading] = useState(false);

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setProfilePhoto(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSavePhoto = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("/api/auth/update-profile-photo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ profilePhoto }),
      });

      const result = await response.json();

      if (response.ok) {
        router.push("/");
      } else {
        console.error(result.error);
      }
    } catch (error) {
      console.error("Profile photo upload error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative w-screen max-w-full h-[95vh] py-40 overflow-x-clip grid place-content-center mt-10">
      <div className="h-fit py-6 px-8 w-[440px] flex flex-col items-center gap-y-6 rounded-[32px] border-[#CBD5E1] border-2 shadow-[0_0.52vw_1.56vw_0_rgba(0,0,0,0.15)] z-0">
        <h1 className="font-bold text-3xl text-black">
          Add Your Profile Photo!
        </h1>

        {/* Profile photo container */}
        <div className="relative">
          <label htmlFor="profilePhotoInput" className="cursor-pointer">
            <div className="relative w-28 aspect-square rounded-full object-cover border-2 border-gray-300">
              <Image
                src={profilePhoto}
                alt="Profile"
                fill
                style={{ objectFit: "cover" }}
                draggable="false"
              />
            </div>
            {/* Edit icon */}
            <div className="absolute bottom-0 right-0 bg-white rounded-full p-1 border-2 border-gray-300">
              <LuPencilLine className="text-pink-main text-2xl" />
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

        {/* Save button */}
        <button
          onClick={handleSavePhoto}
          disabled={isLoading}
          className="w-full flex justify-center items-center gap-x-2 text-white font-bold bg-pink-main rounded-full py-2 disabled:opacity-50">
          {isLoading ? "Saving..." : "Save"}
          <MdOutlineSave className="text-lg text-white" />
        </button>

        {/* Skip button */}
        <Link
          href="/"
          className="w-full flex justify-center items-center gap-x-2 text-pink-main font-bold bg-white rounded-full py-2 border-2 border-pink-main">
          Skip for now
        </Link>
      </div>
    </div>
  );
};

export default AddProfilePhoto;
