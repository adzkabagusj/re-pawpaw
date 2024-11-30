"use client";

import Image from "next/image";
import { useState } from "react";

import AuthOuterBox from "./AuthOuterBox";
import { MdOutlineEmail } from "react-icons/md";
import { FiLock } from "react-icons/fi";
import { MdLogin } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";

const Login = () => {
  const [loginData, setLoginData] = useState();
  const [isPasswordRemembered, setIsPasswordRemembered] = useState(false);
  const handleInputChange = () => {};

  return (
    <div className="relative w-screen max-w-full h-[110vh] py-40 overflow-x-clip grid place-content-center mt-10">
      <AuthOuterBox auth="sign in">
        {/* Email */}
        <div className="w-full flex flex-col gap-y-2">
          <label htmlFor="email" className="text-black text-base">
            Email Address
          </label>
          <div className="relative w-full">
            <input
              id="email"
              name="email"
              onChange={handleInputChange}
              value={loginData}
              placeholder="youremail@gmail.com"
              spellCheck="false"
              className="py-2 pl-14 flex items-center border-[#CBD5E1] focus:border-pink-main border-2 rounded-full text-black text-base outline-none w-full"
            />
            <MdOutlineEmail className="absolute left-4 bottom-1/2 translate-y-1/2 text-xl" />
          </div>
        </div>

        {/* Password */}
        <div className="w-full flex flex-col gap-y-2">
          <label htmlFor="password" className="text-black text-base">
            Password
          </label>
          <div className="relative w-full">
            <input
              id="password"
              name="password"
              onChange={handleInputChange}
              value={loginData}
              placeholder="********"
              spellCheck="false"
              className="py-2 pl-14 flex items-center border-[#CBD5E1] focus:border-pink-main border-2 rounded-full text-black text-base outline-none w-full"
            />
            <FiLock className="absolute left-4 bottom-1/2 translate-y-1/2 text-xl" />
          </div>
          <div className="flex justify-between w-full mt-1">
            {/* Remember Passowrd Radio Btn */}
            <div className="flex gap-x-2">
              <input
                type="radio"
                checked={isPasswordRemembered === true}
                onChange={() => setIsPasswordRemembered(!isPasswordRemembered)}
                id="isPasswordRemembered"
                name="isPasswordRemembered"
                value={isPasswordRemembered}
                className="size-4 cursor-pointer"
              />
              <label
                htmlFor="isPasswordRemembered"
                className="text-sm text-black cursor-pointer">
                Remember For 30 Days
              </label>
            </div>

            {/* Forgot Password */}
            <button className="text-pink-main font-bold text-sm">
              Forgot Password
            </button>
          </div>
        </div>

        {/* Sin Button */}
        <Link
          href="/"
          className="w-full flex justify-center items-center gap-x-2 text-white font-bold bg-pink-main rounded-full py-2">
          Sign In
          <MdLogin className="text-lg text-white" />
        </Link>

        {/* Don't Have an Account */}
        <div className="w-full flex justify-center items-center gap-x-2 text-sm text-black font-bold">
          Don&apos;t have an account?{" "}
          <Link href="/signup" className="text-pink-main">
            Sign Up
          </Link>
        </div>

        <div className="w-full h-4 relative flex items-center">
          <span className="w-full h-[1px] bg-[#CBD5E1]"></span>
          <p className="absolute left-1/2 -translate-x-1/2 bg-white h-4 w-8 font-bold text-[#94A3B8] grid place-content-center text-sm">
            OR
          </p>
        </div>

        {/* Sign In with Google */}
        <Link
          href="/"
          className="w-full flex justify-center items-center gap-x-2 text-black font-bold bg-white rounded-full py-2 border-2 border-[#CBD5E1]">
          <FcGoogle className="text-lg" />
          Sign In With Google
        </Link>
      </AuthOuterBox>

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
