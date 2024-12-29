/* eslint-disable react/no-unescaped-entities */

import Image from "next/image";
import React from "react";
import IconWithText from "./IconWithText";

export const AttractionsCard = () => {
  return (
    <div className="overflow-hidden pl-2 w-[320px] md:w-[1366px] h-[530px] md:h-[274px] md:flex justify-between bg-white">
      <div className="ml-7 w-[320px] md:w-[1280px] h-[274px] md:flex items-center justify-between">
        <div className="mt-7 md:mt-2 -ml-6  flex justify-center items-center w-full relative md:w-[232px] h-[224px]">
          <Image
            src="/Rectangle 34371.png"
            width={232}
            height={224}
            alt="Rectangle"
          />
          <Image
            src="/CaretCircleRight.png"
            width={32}
            height={32}
            alt="caret"
            className="absolute top-24 left-14 md:left-6"
          />
          <Image
            src="/CaretCircleRight.png"
            width={32}
            height={32}
            alt="caret"
            className="absolute top-24 md:right-6 right-14 scale-x-[-1]"
          />
        </div>
        <div className="-ml-6 mt-2 md:mb-5 md:mr w-[360px] md:block md:w-[1000px] md:h-[224px]">
          <div className="w-full md:w-[1000px] md:h-1/2 md:items-center md:flex md:justify-between">
            <div className="h-[110px] w-[350px] mt-7 flex-col space-y-2 md:w-1/2 md:h-full">
              <h2 className="font-semibold text-xl">
                The Museum of Modern Art
              </h2>
              <p className="w-[300px] h-[65px] text-sm md:w-[445px] md:text-base font-medium">
                Works from Van Gogh to Warhol & beyond plus a sculpture garden,
                2 cafes & The modern restaurant
              </p>
              <div className="w-[300px] md:w-[360px] h-[24px] flex justify-between">
                <IconWithText
                  iconImage="/Map.png"
                  iconText="Directions"
                  iconStyles="flex items-center space-x-1"
                  textStyles="text-base font-medium text-blue-600"
                  imageStyles="h-[16.31px] w-[12.94px]  "
                />
                <IconWithText
                  iconImage="/star.png"
                  iconText="4.5 (436)"
                  iconStyles="flex items-center space-x-1"
                  textStyles="text-base font-medium"
                  imageStyles="h-[16.31px] w-[12.94px]"
                />
                <IconWithText
                  iconImage="/Clock.png"
                  iconText="1 Hour"
                  iconStyles="flex items-center space-x-1"
                  textStyles="text-base font-medium"
                  imageStyles="h-[16.31px] w-[12.94px]"
                />
              </div>
            </div>
            <div className="w-[310px] mt-7 mb-4 md:w-1/3 flex md:flex-col justify-start md:items-center h-full">
              <h2 className="w-[176px] h-[36px] font-semibold text-lg md:text-[28px]">
                ₦123,450.00
              </h2>
              <p className="text-sm md:text-base font-medium md:ml-5">
                10:30 AM on Mar 19
              </p>
            </div>
          </div>
          <div className="w-full h-[65px] mt-7 hidden md:flex justify-between items-center">
            <div className="w-[552] h-[26px] flex justify-between">
              <p className="w-[135px] h-[26px] font-medium text-lg">
                What's Included:
              </p>
              <p className="w-[314px] h-[26px] font-medium text-lg">
                Admission to the Empire State Building
              </p>
              <p className="w-[79px] h-[26px] font-medium text-lg text-blue-500">
                See more
              </p>
            </div>
            <div className="w-[80px] h-[50px] flex space-x-1 items-center">
              <div className="w-[46px] h-[30px] bg-customBlueDark rounded-[4px] text-white text-sm flex items-center justify-center">
                Day 1
              </div>
              <div className="flex-col">
                <IconWithText
                  iconImage="/CaretCircleUp.png"
                  imageStyles="h-5 w-5"
                />
                <IconWithText
                  iconImage="/CaretCircleDown.png"
                  imageStyles="h-5 w-5"
                />
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center w-[300px] md:w-full h-10">
            <div className="w-[180px] md:w-[234px] h-[26px] flex justify-between items-center">
              <h2 className="font-semibold text-base text-blue-600">
                Hotel details
              </h2>
              <h2 className="font-semibold text-base text-blue-600">
                Price details
              </h2>
            </div>
            <h2 className="font-semibold text-base text-blue-600">
              Edit details
            </h2>
          </div>
        </div>
      </div>
      <div className="w-[46px] h-[272px] bg-customRed hidden md:flex justify-center items-center">
        <Image src="/X.png" width={24} height={24} alt="Vector" />
      </div>
    </div>
  );
};
