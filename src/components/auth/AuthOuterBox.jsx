import Image from "next/image";

const AuthOuterBox = ({ auth, children }) => {
  return (
    <div className="h-fit py-6 px-8 w-[440px] flex flex-col items-start gap-y-6 rounded-[32px] border-[#CBD5E1] border-2 shadow-[0_0.52vw_1.56vw_0_rgba(0,0,0,0.15)] z-0">
      <div className="relative w-40 aspect-[318/116] mt-4">
        <Image
          src="/icons/Logo.png"
          alt="PawPaw Logo"
          fill
          style={{ objectFit: "contain" }}
          draggable="false"
        />
      </div>
      <div className="flex flex-col gap-y-2">
        <h1 className="font-bold text-black text-3xl">
          {auth === "sign in"
            ? "Sign In to Your Account."
            : "Sign Up For Free."}
        </h1>
        <p className="text-base text-[#475569]">
          Experience a new way of caring for your beloved pets.
        </p>
      </div>
      {children}
    </div>
  );
};

export default AuthOuterBox;
