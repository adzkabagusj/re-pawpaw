"use client";

import { createContext, useContext, useState, useEffect } from "react";

const mock_pet_data = [
  {
    pet_id: "pet1",
    user_id: "user1",
    tipe: "Kucing",
    nama: "Milo",
    tanggal_lahir: new Date("2021-03-15"),
    umur: 3,
    breed: "Persian",
    foto: "/icons/SmallPawSolid.png",
    aktivitas: [
      {
        aktivitas_id: "aktivitas1",
        foto: "/DefaultProfilePicture.png",
        caption: "Bermain dengan bola wool",
        tanggal: new Date("2024-02-15"),
      },
      {
        aktivitas_id: "aktivitas2",
        foto: "/DefaultProfilePicture.png",
        caption: "Tidur siang di jendela",
        tanggal: new Date("2024-03-01"),
      },
      {
        aktivitas_id: "aktivitas3",
        foto: "/DefaultProfilePicture.png",
        caption: "Tidur siang di jendela",
        tanggal: new Date("2024-05-01"),
      },
      // {
      //   aktivitas_id: "aktivitas4",
      //   foto: "/DefaultProfilePicture.png",
      //   caption: "Tidur siang di jendela",
      //   tanggal: new Date("2024-07-01"),
      // },
      // {
      //   aktivitas_id: "aktivitas5",
      //   foto: "/DefaultProfilePicture.png",
      //   caption: "Tidur siang di jendela",
      //   tanggal: new Date("2024-07-02"),
      // },
      // {
      //   aktivitas_id: "aktivitas6",
      //   foto: "/DefaultProfilePicture.png",
      //   caption: "Tidur siang di jendela",
      //   tanggal: new Date("2024-09-01"),
      // },
    ],
  },
  {
    pet_id: "pet2",
    user_id: "user1",
    tipe: "Anjing",
    nama: "Rocky",
    tanggal_lahir: new Date("2020-08-22"),
    umur: 3,
    breed: "Golden Retriever",
    foto: "/icons/SmallPawSolid.png",
    aktivitas: [
      {
        aktivitas_id: "aktivitas7",
        foto: "/DefaultProfilePicture.png",
        caption: "Bermain di pantai",
        tanggal: new Date("2024-01-20"),
      },
      {
        aktivitas_id: "aktivitas8",
        foto: "/DefaultProfilePicture.png",
        caption: "Sesi latihan mingguan",
        tanggal: new Date("2024-02-28"),
      },
    ],
  },
  {
    pet_id: "pet3",
    user_id: "user1",
    tipe: "Kelinci",
    nama: "Snowball",
    tanggal_lahir: new Date("2022-11-30"),
    umur: 1,
    breed: "Holland Lop",
    foto: "/icons/SmallPawSolid.png",
    aktivitas: [
      {
        aktivitas_id: "aktivitas9",
        foto: "/DefaultProfilePicture.png",
        caption: "Makan wortel segar",
        tanggal: new Date("2024-02-10"),
      },
      {
        aktivitas_id: "aktivitas10",
        foto: "/DefaultProfilePicture.png",
        caption: "Bermain di kebun belakang",
        tanggal: new Date("2024-03-05"),
      },
    ],
  },
];

const PetContext = createContext(undefined);

export const PetProvider = ({ children }) => {
  const [pets, setPets] = useState(mock_pet_data);

  // Create a new Pet
  const addPet = (newPet) => {
    setPets((prev) => [...prev, newPet]);
  };

  // TO-DO: Read Pets

  // Update an existing pet
  const updatePet = (updatedPet) => {
    setPets((prev) =>
      prev.map((pet) =>
        pet.pet_id === updatedPet.pet_id ? { ...updatedPet } : pet
      )
    );
  };

  // Delete a pet by its ID
  const removePet = (petId) => {
    setPets((prev) => prev.filter((pet) => pet.pet_id !== petId));
  };

  // Create a new activity to a pet
  const addActivity = (petId, newActivity) => {
    setPets((prev) =>
      prev.map((pet) =>
        pet.pet_id === petId
          ? { ...pet, aktivitas: [...pet.aktivitas, newActivity] }
          : pet
      )
    );
  };

  // TO-DO: Read Activities

  // Update an existing activity
  const updateActivity = (petId, updatedActivity) => {
    setPets((prev) =>
      prev.map((pet) =>
        pet.pet_id === petId
          ? {
              ...pet,
              aktivitas: pet.aktivitas.map((activity) =>
                activity.aktivitas_id === updatedActivity.aktivitas_id
                  ? { ...updatedActivity }
                  : activity
              ),
            }
          : pet
      )
    );
  };

  // Delete an activity from a pet
  const removeActivity = (petId, activityId) => {
    setPets((prev) =>
      prev.map((pet) =>
        pet.pet_id === petId
          ? {
              ...pet,
              aktivitas: pet.aktivitas.filter(
                (activity) => activity.aktivitas_id !== activityId
              ),
            }
          : pet
      )
    );
  };

  return (
    <PetContext.Provider
      value={{
        pets,
        setPets,

        addPet,
        updatePet,
        removePet,

        addActivity,
        updateActivity,
        removeActivity,
      }}>
      {children}
    </PetContext.Provider>
  );
};

export const usePet = () => useContext(PetContext);
