"use client";

import { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signupSchema } from "@/lib/validation/auth";

import AuthOuterBox from "./AuthOuterBox";
import { MdOutlineEmail } from "react-icons/md";
import { FiLock } from "react-icons/fi";
import { MdLogin } from "react-icons/md";
import { FaRegUser } from "react-icons/fa6";
import { useRouter } from "next/navigation";

const Signup = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(signupSchema),
  });

  const onSubmit = async (data) => {
    setIsLoading(true);
    try {
      const response = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      // if (response.ok) {
      //   router.push("/signup/user-info");
      if (response.ok) {
        router.push("/");
      } else {
        // Handle errors (e.g., show error message)
        console.error(result.error);
      }
    } catch (error) {
      console.error("Signup error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative w-screen max-w-full h-[110vh] py-40 overflow-x-clip grid place-content-center mt-10">
      <form onSubmit={handleSubmit(onSubmit)}>
        <AuthOuterBox auth="sign up">
          {/* Username */}
          <div className="w-full flex flex-col gap-y-2">
            <label htmlFor="username" className="text-black text-base">
              Username
            </label>
            <div className="relative w-full">
              <input
                {...register("username")}
                id="username"
                placeholder="username"
                spellCheck="false"
                className="py-2 pl-14 flex items-center border-[#CBD5E1] focus:border-pink-main border-2 rounded-full text-black text-base outline-none w-full"
              />
              <FaRegUser className="absolute left-4 bottom-1/2 translate-y-1/2 text-xl" />
            </div>
            {errors.username && (
              <p className="text-red-500 text-sm">{errors.username.message}</p>
            )}
          </div>

          {/* Email */}
          <div className="w-full flex flex-col gap-y-2">
            <label htmlFor="email" className="text-black text-base">
              Email Address
            </label>
            <div className="relative w-full">
              <input
                {...register("email")}
                id="email"
                placeholder="youremail@gmail.com"
                spellCheck="false"
                className="py-2 pl-14 flex items-center border-[#CBD5E1] focus:border-pink-main border-2 rounded-full text-black text-base outline-none w-full"
              />
              <MdOutlineEmail className="absolute left-4 bottom-1/2 translate-y-1/2 text-xl" />
            </div>
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>

          {/* Password */}
          <div className="w-full flex flex-col gap-y-2">
            <label htmlFor="password" className="text-black text-base">
              Password
            </label>
            <div className="relative w-full">
              <input
                {...register("password")}
                type="password"
                id="password"
                placeholder="********"
                spellCheck="false"
                className="pr-4 py-2 pl-14 flex items-center border-[#CBD5E1] focus:border-pink-main border-2 rounded-full text-black text-base outline-none w-full"
              />
              <FiLock className="absolute left-4 bottom-1/2 translate-y-1/2 text-xl" />
            </div>
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password.message}</p>
            )}
          </div>

          {/* Sign Up Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full flex justify-center items-center gap-x-2 text-white font-bold bg-pink-main rounded-full py-2 disabled:opacity-50">
            {isLoading ? "Signing Up..." : "Sign Up"}
            <MdLogin className="text-lg text-white" />
          </button>

          {/* Have an Account */}
          <div className="w-full flex justify-center items-center gap-x-2 text-sm text-black font-bold">
            Already have an account?{" "}
            <Link href="/login" className="text-pink-main">
              Sign In
            </Link>
          </div>
        </AuthOuterBox>
      </form>
    </div>
  );
};

export default Signup;
