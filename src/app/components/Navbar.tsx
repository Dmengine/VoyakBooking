"use client";
import Image from "next/image";
import React from "react";
import IconWithText from "./IconWithText";
import { Button } from "./Button";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();

  const handleAddHotelClick = () => {
    router.push("/pages/hotelPage");
  };
  return (
    <nav className="flex flex-col sm:flex-row w-full h-[134px] p-4 sm:px-10 items-center">
      <div className="flex w-full sm:w-[486px] h-[56px] justify-between">
        <Image
          src="/logo.png"
          alt="logo"
          width={58}
          height={56}
          onClick={handleAddHotelClick}
        />
        <div className="relative w-[400px] h-[56px]">
          <input
            type="text"
            placeholder="Search"
            className="w-full h-full bg-customLightGray p-2 pl-10 border border-gray-300 rounded-lg focus:outline-none"
          />
          <Image
            src="/MagnifyingGlass.png"
            alt="Search"
            width={24}
            height={24}
            className="absolute left-2 top-1/2 transform -translate-y-1/2"
          />
        </div>
      </div>
      <div className=" justify-evenly w-[650px] h-[64px] ml-72 hidden sm:flex">
        <IconWithText
          iconImage="/House.png"
          iconText="Home"
          iconStyles="flex-col items-center"
          imageStyles="w-11 h-11"
          textStyles="font-medium text-base text-customGray"
        />
        <IconWithText
          iconImage="/ChartPieSlice.png"
          iconText="Dashboard"
          iconStyles="flex-col items-center space-y-1"
          imageStyles="w-10 h-10"
          textStyles="font-medium text-base text-customGray"
        />
        <IconWithText
          iconImage="/Wallet.png"
          iconText="Wallet"
          iconStyles="flex-col items-center space-y-1"
          imageStyles="w-10 h-10"
          textStyles="font-medium text-base text-customGray"
        />
        <IconWithText
          iconImage="/ListChecks.png"
          iconText="Plan a trip"
          iconStyles="flex-col items-center space-y-1"
          imageStyles="w-10 h-10 ml-3"
          textStyles="font-medium text-base text-customGray"
        />
        <IconWithText
          iconImage="/HandCoins.png"
          iconText="Commission for life"
          iconStyles="flex-col items-center space-y-1"
          imageStyles="w-10 h-10 ml-8"
          textStyles="font-medium text-base text-customGray"
        />
      </div>
      <Image
        src="/Line 213.png"
        alt="line"
        width={2}
        height={0}
        className="ml-10 hidden sm:block"
      />
      <Button
        text="Subscribe"
        buttonStyles="ml-10 w-[101px] h-[40px] border-r rounded-[4px] bg-blue-500 text-white hidden sm:block"
      />
      <div className="ml-10 justify-evenly items-center w-[500px] h-[64px] hidden sm:flex">
        <IconWithText
          iconImage="/Bell.png"
          iconText="Notification"
          iconStyles="flex-col items-center space-y-1"
          imageStyles="w-10 h-10 ml-8"
          textStyles="font-medium text-base text-customGray"
        />
        <IconWithText
          iconImage="/Basket.png"
          iconText="Carts"
          iconStyles="flex-col items-center space-y-1"
          imageStyles="w-10 h-10"
          textStyles="font-medium text-base text-customGray"
        />
        <IconWithText
          iconImage="/PlusSquare.png"
          iconText="Carts"
          iconStyles="flex-col items-center space-y-1"
          imageStyles="w-10 h-10"
          textStyles="font-medium text-base text-customGray"
        />
        <div className="flex justify-evenly w-[95px] h-[52px]">
          <Image
            src="/Ellipse 775.png"
            alt="profile"
            width={52}
            height={52}
            className="rounded-full"
          />
          <Image
            src="/CaretDown.png"
            alt="caret"
            width={40}
            height={2}
            className="w-10 h-8 mt-3"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
