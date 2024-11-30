import AddScheduleForm from "@/components/grooming/AddScheduleForm";

const AddEditSchedulePage = async ({ params }) => {
  const { schedule_id } = await params;

  return (
    <>
      <AddScheduleForm scheduleId={schedule_id} />
    </>
  );
};

export default AddEditSchedulePage;
