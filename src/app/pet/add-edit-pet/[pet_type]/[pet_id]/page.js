import AddEditPet from "@/components/pet/AddEditPet";
import React from "react";

const AddEditPetPage = async ({ params }) => {
  const { pet_type, pet_id } = await params;

  return (
    <>
      <AddEditPet petType={pet_type} petId={pet_id} />
    </>
  );
};

export default AddEditPetPage;
