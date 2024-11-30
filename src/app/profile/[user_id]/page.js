import Profile from "@/components/auth/Profile";
import React from "react";

const ProfilePage = async ({ params }) => {
  const { user_id } = await params;
  return (
    <>
      <Profile />
    </>
  );
};

export default ProfilePage;
