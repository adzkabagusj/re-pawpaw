"use client";

import { usePet } from "@/context/PetContext";
import { useState, useRef, useEffect } from "react";

import Image from "next/image";
import Link from "next/link";

import AddEditPet from "@/components/pet/AddEditPet";
import PetCard from "@/components/pet/PetCard";

const AllPet = () => {
  const petContext = usePet();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close the dropdown if the user clicks outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative w-screen max-w-full overflow-x-clip">
      {/* Rabbit Image */}
      <div className="relative flex justify-center items-center py-60">
        <div className="absolute w-screen aspect-[1441/543]">
          <Image
            src="/pet_detail/pet_details_asset.png"
            alt="Rabbit Image"
            fill
            style={{ objectFit: "contain" }}
            draggable="false"
          />
        </div>
        <div className="text-white z-10 flex flex-col items-center gap-y-6">
          <h1 className="font-bold text-6xl text-center">Pet Details</h1>
          <p className="text-xl text-center">
            Data dari hewan peliharaan yang sudah anda inputkan.
          </p>
        </div>
      </div>

      <div className="min-h-[640px]">
        {/* Header Dog Face + "Your Pet" */}
        <div className="px-44 py-12 flex gap-x-10 items-center">
          <div className="relative w-16 aspect-[51/46]">
            <Image
              src="/pet_detail/dog_face.png"
              alt="Dog Face"
              fill
              style={{ objectFit: "contain" }}
              draggable="false"
            />
          </div>
          <h2 className="font-bold text-4xl text-pink-main">Your Pet</h2>
        </div>

        {/* List of Pet Cards */}
        {petContext?.pets && petContext?.pets.length > 0 ? (
          <div className="w-full flex flex-col gap-y-12 pb-24">
            {petContext?.pets.map((value, index) => (
              <PetCard pet={value} key={index} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col size-full items-center justify-center gap-y-10 text-center text-gray-400">
            <div className="relative w-24 aspect-[136/164]">
              <Image
                src="/pet_detail/rabit_no_pet_found.png"
                alt="Pet Not Found"
                fill
                style={{ objectFit: "contain" }}
                draggable="false"
              />
            </div>
            <p>
              Belum ada hewan peliharaan <br /> yang ditambahkan.
            </p>
          </div>
        )}
      </div>

      {/* Add Pet Button */}
      <div className="fixed bottom-12 right-12 flex flex-col items-end">
        {/* Dropdown Menu */}
        {isMenuOpen && (
          <div
            className="my-4 w-40 bg-white border border-gray-300 rounded-lg shadow-lg flex flex-col"
            ref={menuRef}>
            <Link
              href="/pet/add-edit-pet/anjing/new"
              className="py-2 px-4 text-left hover:bg-pink-100">
              🐶 Anjing
            </Link>
            <Link
              href="/pet/add-edit-pet/kelinci/new"
              className="py-2 px-4 text-left hover:bg-pink-100">
              🐇 Kelinci
            </Link>
            <Link
              href="/pet/add-edit-pet/kucing/new"
              className="py-2 px-4 text-left hover:bg-pink-100">
              🐱 Kucing
            </Link>
          </div>
        )}
        {/* Pink Add Button */}
        <button
          onClick={toggleMenu}
          className="size-20 rounded-full bg-pink-main text-white text-5xl flex items-center justify-center shadow-[0_0.52vw_1.56vw_0_rgba(0,0,0,0.15)] focus:outline-none">
          +
        </button>
      </div>
    </div>
  );
};

export default AllPet;
