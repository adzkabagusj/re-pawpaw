"use client";

import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "@/lib/validation/auth";
import { useRouter } from "next/navigation";

import AuthOuterBox from "./AuthOuterBox";
import { MdOutlineEmail } from "react-icons/md";
import { FiLock } from "react-icons/fi";
import { MdLogin } from "react-icons/md";
import Link from "next/link";

const Login = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      rememberMe: false,
    },
  });

  const isPasswordRemembered = watch("rememberMe");

  const onSubmit = async (data) => {
    setIsLoading(true);
    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        // Redirect to home or dashboard
        router.push("/");
      } else {
        // Handle login errors
        console.error(result.error);
        // You might want to set an error state to show to the user
      }
    } catch (error) {
      console.error("Login error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative w-screen max-w-full h-[110vh] py-40 overflow-x-clip grid place-content-center mt-10">
      <form onSubmit={handleSubmit(onSubmit)}>
        <AuthOuterBox auth="sign in">
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
                className="py-2 pl-14 flex items-center border-[#CBD5E1] focus:border-pink-main border-2 rounded-full text-black text-base outline-none w-full"
              />
              <FiLock className="absolute left-4 bottom-1/2 translate-y-1/2 text-xl" />
            </div>
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password.message}</p>
            )}

            <div className="flex justify-between w-full mt-1">
              {/* Remember Password Checkbox */}
              <div className="flex gap-x-2">
                <input
                  type="checkbox"
                  {...register("rememberMe")}
                  id="rememberMe"
                  className="size-4 cursor-pointer"
                />
                <label
                  htmlFor="rememberMe"
                  className="text-sm text-black cursor-pointer">
                  Remember For 30 Days
                </label>
              </div>

              {/* Forgot Password */}
              <button
                type="button"
                className="text-pink-main font-bold text-sm">
                Forgot Password
              </button>
            </div>
          </div>

          {/* Signin Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full flex justify-center items-center gap-x-2 text-white font-bold bg-pink-main rounded-full py-2 disabled:opacity-50">
            {isLoading ? "Signing In..." : "Sign In"}
            <MdLogin className="text-lg text-white" />
          </button>

          {/* Don't Have an Account */}
          <div className="w-full flex justify-center items-center gap-x-2 text-sm text-black font-bold">
            Don&apos;t have an account?{" "}
            <Link href="/signup" className="text-pink-main">
              Sign Up
            </Link>
          </div>
        </AuthOuterBox>
      </form>

      {/* Background Decor */}
      <div className="absolute left-0 bottom-0 w-40 aspect-[97/202]">
        <Image
          src="/decor/paw_kiri_bawah_pink.png"
          alt="decoration"
          fill
          style={{ objectFit: "contain" }}
          draggable="false"
        />
      </div>
      <div className="absolute right-0 top-20 w-20 aspect-[99/261]">
        <Image
          src="/decor/tulang_kanan_pink.png"
          alt="decoration"
          fill
          style={{ objectFit: "contain" }}
          draggable="false"
        />
      </div>
    </div>
  );
};

export default Login;
