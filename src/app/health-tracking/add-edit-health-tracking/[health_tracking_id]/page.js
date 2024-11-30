import AddHealthTrackingForm from "@/components/health-tracking/AddHealthTrackingForm";

const page = async ({ params }) => {
  const { health_tracking_id } = await params;
  return (
    <>
      <AddHealthTrackingForm healthTrackingId={health_tracking_id} />
    </>
  );
};

export default page;
