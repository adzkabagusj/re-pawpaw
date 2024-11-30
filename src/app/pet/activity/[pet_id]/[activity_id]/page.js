import AddEditActivity from "@/components/pet/AddEditActivity";
import React from "react";

const ActivityPage = async ({ params }) => {
  const { pet_id, activity_id } = await params;

  return (
    <>
      <AddEditActivity petId={pet_id} activityId={activity_id} />
    </>
  );
};

export default ActivityPage;
