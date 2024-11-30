import { useRef, useState } from "react";

import Image from "next/image";
import Link from "next/link";

const PetCard = ({ pet }) => {
  const scrollContainerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
  };

  const handleMouseLeaveOrUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Adjust scroll speed
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  // Helper function to format dates
  const formatDate = (date) => {
    return new Date(date).toLocaleDateString("id-ID", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
  };

  return (
    <div className="mx-44 inset-x-0 flex flex-col gap-y-6 h-fit bg-[#FFF2F3] rounded-2xl p-20 shadow-[0_0.52vw_1.56vw_0_rgba(0,0,0,0.15)]">
      <div className="flex flex-row items-center justify-around gap-x-8">
        {/* Pet's photo */}
        <div className="relative size-60 aspect-square rounded-2xl overflow-clip">
          <Image
            src={pet.foto}
            alt="Rabbit Image"
            fill
            style={{ objectFit: "cover" }}
            draggable="false"
          />
        </div>
        {/* Pet's biography */}
        <div className="flex flex-col items-center ">
          <h1 className="text-3xl font-bold text-[#FF8C9A]">{pet.nama}</h1>
          <div className="mt-4 flex flex-row items-center gap-x-6">
            <div className="text-lg">
              <p className="font-semibold">Tanggal Lahir</p>
              <p>{formatDate(pet.tanggal_lahir)}</p>
            </div>
            <div className="text-lg">
              <p className="font-semibold">Umur</p>
              <p>{pet.umur} Tahun</p>
            </div>
            <div className="text-lg">
              <p className="font-semibold">Breed</p>
              <p>{pet.breed}</p>
            </div>
          </div>
          <Link
            href={`/pet/add-edit-pet/${pet.tipe}/${pet.pet_id}`}
            className="flex justify-center mt-4 w-96 px-6 py-2 rounded-lg bg-pink-secondary text-white font-semibold">
            Edit Data
          </Link>
        </div>
      </div>

      {/* Daily Activities Section */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold text-[#FF8C9A]">
          Daily Activities
        </h2>
        <div
          ref={scrollContainerRef}
          className="flex flex-row mt-4 gap-8 overflow-x-auto whitespace-nowrap no-scrollbar scroll-container"
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseLeaveOrUp}
          onMouseLeave={handleMouseLeaveOrUp}
          onMouseMove={handleMouseMove}
          //   style={{ cursor: isDragging ? "grabbing" : "grab" }}
        >
          {[...pet.aktivitas]
            .sort((a, b) => new Date(b.tanggal) - new Date(a.tanggal)) // Sort from latest to oldest
            .map((activity) => (
              <Link
                href={`/pet/activity/${pet.pet_id}/${activity.aktivitas_id}`}
                key={activity.aktivitas_id}
                className="min-w-56 p-4 bg-white rounded-xl inline-flex flex-col justify-between gap-y-2">
                <div className="relative size-42 aspect-square">
                  <Image
                    src={activity.foto}
                    alt="Activity"
                    fill
                    style={{ objectFit: "cover" }}
                    draggable="false"
                  />
                </div>
                <p className="text-sm font-medium max-w-48 text-wrap italic text-gray-600">
                  &quot;{activity.caption}&quot;
                </p>
                <p className="text-xs text-gray-500">
                  {formatDate(activity.tanggal)}
                </p>
              </Link>
            ))}
        </div>
      </div>

      {/* Add Activity Button */}
      <div className="mt-8 flex justify-start">
        <Link
          href={`/pet/activity/${pet.pet_id}/new`}
          className="px-12 py-2 rounded-lg bg-pink-secondary text-white font-semibold">
          Add Activity +
        </Link>
      </div>
    </div>
  );
};

export default PetCard;
