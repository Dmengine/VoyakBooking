import React from "react";
import Image from "next/image";
import { Button } from "./Button";
import IconWithText from "./IconWithText";

const FlightCard = () => {
  return (
    <div className="overflow-hidden w-[360px] md:w-[1366px] md:h-[275px] h-[390px] flex fex-col justify-between bg-white">
      <div className="flex-col justify-center w-full items-center md:w-[1280px] h-[274px] md:ml-6">
        <div className="w-[350px] md:w-[1248px] h-[290px] md:h-[78px] mt-5 md:flex md:justify-between justify-center items-center">
          <div className="w-[200px] flex justify-between md:w-[211px] md:h-[62px] md:flex items-center md:justify-evenly">
            <Image
              src="/american_airlines_symbol.svg.png"
              width={24}
              height={24}
              alt="airline"
            />
            <div>
              <div className="md:flex justify-start items-center space-x-1">
                <p className="text-black font-semibold text-base">
                  American Airlines
                </p>
              </div>
              <div className="flex w-[146px] h-[30px] justify-between items-center">
                <p className="font-medium text-base text-customSlate">AA-829</p>
                <Button
                  text="First Class"
                  buttonStyles="bg-customBlueDark text-sm text-white w-[73px] h-[30px] rounded-[4px]"
                />
              </div>
            </div>
          </div>
          <div className="w-full items-center justify-center flex md:block md:w-[77px] h-[56px]">
            <h2 className="font-semibold text-2xl">08:35</h2>
            <p className="font-medium text-xs text-customSlate">Sun, 20 Aug</p>
          </div>
          <div className="w-[350px] md:w-[387px] h-[78px]">
            <div className="flex w-[387px] h-[24px] justify-evenly md:justify-between md:items-center mt-2">
              <Image
                src="/AirplaneTakeoff.png"
                width={20}
                height={20}
                alt="line"
              />
              <p className="text-customSlate">Duration: 1h 45m</p>
              <Image
                src="/AirplaneLanding.png"
                width={20}
                height={20}
                alt="line"
              />
            </div>
            <Image src="/Group 9.png" width={387} height={8} alt="line" className="w-[387px]"/>
            <div className="flex w-[330px] md:w-[387px] h-[24px] justify-between items-center">
              <h2 className="font-semibold text-base ml-10 md:-ml-[2px]">LOS</h2>
              <p className="font-medium text-base text-customSlate">Direct</p>
              <h2 className="font-semibold text-base">SIN</h2>
            </div>
          </div>
          <div className="w-full items-center flex md:block justify-center md:w-[77px] h-[56px]">
            <h2 className="font-semibold text-2xl">09:55</h2>
            <p className="font-medium text-xs text-customSlate">Sun, 20 Aug</p>
          </div>
          <div className="flex justify-center items-center text-sm md:w-[176px] h-[36px] font-semibold md:text-[28px]">
            ₦123,450.00
          </div>
        </div>
        <div className="hidden w-[925px] h-[78px] mt-5 md:flex justify-evenly items-center">
          <p className="text-customSlate font-medium text-lg">Facilities:</p>
          <div className="w-[808px] h-[26px] flex justify-between">
            <IconWithText
              iconImage="/SuitcaseRolling.png"
              iconText="Baggage: 20kg, Cabin Baggage: 8kg"
              iconStyles="flex items-center space-x-1"
              textStyles="font-medium text-lg text-customSlate"
              imageStyles="w-5 h-5"
            />
            <IconWithText
              iconImage="/FilmSlate.png"
              iconText="In flight entertainment"
              iconStyles="flex items-center space-x-1"
              textStyles="font-medium text-lg text-customSlate"
              imageStyles="w-5 h-5"
            />
            <IconWithText
              iconImage="/ForkKnife.png"
              iconText="In flight meal"
              iconStyles="flex items-center space-x-1"
              textStyles="font-medium text-lg text-customSlate"
              imageStyles="w-5 h-5"
            />
            <IconWithText
              iconImage="/Usb.png"
              iconText="USB Port"
              iconStyles="flex items-center space-x-1"
              textStyles="font-medium text-lg text-customSlate"
              imageStyles="w-5 h-5"
            />
          </div>
        </div>
        <div className="flex justify-between items-center w-full h-16">
          <div className="w-[234px] h-[26px] flex justify-between items-center">
            <h2 className="font-semibold text-base text-blue-600">
              Flight details
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
      <div className="w-[46px] hidden h-[272px] bg-customRed md:flex justify-center items-center">
        <Image src="/X.png" width={24} height={24} alt="Vector" />
      </div>
    </div>
  );
};

export default FlightCard;
