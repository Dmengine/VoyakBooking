"use client";
import Image from "next/image";
import React from "react";
import Card from "./components/Card";
import IconWithText from "./components/IconWithText";
import { Button } from "./components/Button";
import FlightCard from "./components/FlightCard";
import { HotelsCard } from "./components/HotelsCard";
import { AttractionsCard } from "./components/AttractionsCard";
import { useRouter } from "next/navigation";

const MainPage = () => {
  const router = useRouter();

  const handleAddFlightsClick = () => {
    router.push("/pages/flightPage");
  };

  const handleAddHotelClick = () => {
    router.push("/pages/hotelPage");
  };

  const handleAddActtivitiesPage = () => {
    router.push("/pages/activitiesPage");
  };

  return (
    <div className="ml-6 mr-6 mt-10 w-[340px] md:w-[1478px] h-[3316px] bg-white">
      <div className="relative md:w-[1412px] mt-5 md:ml-6">
        <Image
          src="/banner.png"
          width={1412}
          height={200}
          alt="banner"
          className="h-20 w-full md:w-[1412px] md:h-[200px]"
        />
        <div className="items-center justify-center flex md:w-16 md:h-16 w-3 h-3 top-7 left-2 absolute md:top-5 md:left-6">
          <Image src="/ArrowLeft.png" width={24} height={24} alt="arrow" />
        </div>
      </div>

      <div className="items-center p-4 ga md:flex justify-between">
        <div className=" h-[94px] md:w-[341px]">
          <div className="w-[250px] h-[30px] bg-orange-200 flex justify-evenly items-center">
            <Image
              src="/CalendarBlank.png"
              width={20}
              height={16}
              alt="calendar"
            />
            <h3 className="text-sm font-medium text-customBrown">
              21 March 2024
            </h3>
            <Image src="/ArrowRight.png" width={16} height={16} alt="arrow" />
            <h4 className="text-sm font-medium text-customBrown">
              21 April 2024
            </h4>
          </div>
          <h2 className="text-[24px] font-semibold">Bahamas Family Trip</h2>
          <div className="flex justify-start items-center space-x-1">
            <p className="text-customSlate font-medium text-sm md:text-base">
              New York, United States Of America
            </p>
            <Image src="/line.png" width={3} height={4} alt="line" />
            <p className="text-customSlate font-normal md:font-medium text-sm md:text-base">
              Solo Trip
            </p>
          </div>
        </div>
        <div className="h-11 hidden md:w-[192px] md:flex space-x-2">
          <div className="bg-customBlue flex items-center justify-center md:w-[160px] h-10">
            <Image src="/UserPlus.png" width={20} height={20} alt="user" />
          </div>
          <div className="flex justify-center items-center">
            <Image src="/DotsThree.png" width={32} height={32} alt="dot" />
          </div>
        </div>
      </div>

      {/* card */}
      <div className="md:w-[1420px] ml-6 md:h-[193px] flex justify-between mt-5 flex-col md:flex-row space-y-4 md:space-y-0">
        <div className="md:space-x-2 md:flex w-full md:w-[830px] md:h-[193px] h-[615px] space-y-4 md:space-y-0">
          <Card
            text="Activities"
            Ptext="Build, personalize, and optimize your itineraries with our trip planner."
            Btext="Add Activities"
            Bstyle="w-[242px] h-[46px] rounded-[4px] bg-blue-500 text-white mt-5"
            onClick={handleAddActtivitiesPage}
          />
          <Card
            text="Hotels"
            Ptext="Build, personalize, and optimize your itineraries with our trip planner."
            Btext="Add Hotels"
            cardStyles="bg-customBlue w-[270px] h-[193px] p-4 rounded-[4px]"
            h2Style="text-black text-base font-bold mb-3"
            textStyles="text-black text-sm font-medium"
            Bstyle="w-[242px] h-[46px] rounded-[4px] bg-blue-500 text-white mt-5"
            onClick={handleAddHotelClick}
          />
          <Card
            text="Flights"
            Ptext="Build, personalize, and optimize your itineraries with our trip planner."
            Btext="Add Flights"
            cardStyles="bg-blue-500 w-[270px] h-[193px] p-4 rounded-[4px]"
            Bstyle="w-[242px] h-[46px] rounded-[4px] bg-white text-customBrown mt-5"
            onClick={handleAddFlightsClick}
          />
        </div>
        <div className="w-[109px] h-[40px] hidden md:flex justify-between items-center -mt-5">
          <div className="w-full h-[40px] hidden md:flex justify-between items-center -mt-5">
            <Image src="/box.png" width={40} height={40} alt="box" />
            <Image src="/set.png" width={40} height={40} alt="set" />
          </div>
        </div>
      </div>

      <div className="w-[213px] h-[52px] ml-6 mt-24">
        <h2 className="text-xl font-semibold">Trip itineraries</h2>
        <p className="text-xs text-customGrayBlue font-medium">
          Your trip itineraries are placed here
        </p>
      </div>

      <div className="bg-customLightGray w-full md:w-[1412px] h-[900px] md:h-[710px] flex flex-col items-center">
        <div className="w-full md:w-[1366px] h-[46px] mt-5 flex justify-between ">
          <div className="w-[110px] h-11">
            <IconWithText
              iconImage="/AirplaneInFlight.png"
              iconText="Flights"
              iconStyles="flex items-center justify-between"
              textStyles="font-semibold text-lg "
              imageStyles="w-10 h-10"
            />
          </div>
          <Button
            text="Add Flights"
            buttonStyles="w-[153px] h-[43px]  text-base font-semibold rounded-[4px] bg-white text-blue-600"
            onClick={handleAddFlightsClick}
          />
        </div>
        <div className="w-full md:w-[1366px] h-[572px] mr-3 mt-7 space-y-4">
          <FlightCard />
          <FlightCard />
        </div>
      </div>

      {/* HotelCard */}
      <div className="bg-customBlack md:w-[1412px] h-[1200px] md:h-[710px] flex flex-col items-center">
        <div className="w-full md:w-[1366px] h-[46px] mt-5 flex justify-between ">
          <div className="w-[110px] h-11">
            <IconWithText
              iconImage="/Warehouse.png"
              iconText="Hotels"
              iconStyles="flex items-center justify-between"
              textStyles="font-semibold text-lg text-white"
              imageStyles="w-10 h-10"
            />
          </div>
          <Button
            text="Add Hotels"
            buttonStyles="w-[153px] h-[43px]  text-base font-semibold rounded-[4px] bg-white text-blue-600"
            onClick={handleAddHotelClick}
          />
        </div>
        <div className="w-[320px] md:w-[1366px] h-[572px] mt-7 space-y-6">
          <HotelsCard />
          <HotelsCard />
        </div>
      </div>

      {/* Activities */}
      <div className="bg-blue-600 md:w-[1412px] h-[1200px] md:h-[710px] flex flex-col items-center">
        <div className="w-full md:w-[1366px] h-[46px] mt-5 flex justify-between ">
          <div className="w-[110px] h-11">
            <IconWithText
              iconImage="/RoadHorizon.png"
              iconText="Activities"
              iconStyles="flex items-center justify-between"
              textStyles="font-semibold text-lg text-white"
              imageStyles="w-10 h-10"
            />
          </div>
          <Button
            text="Add Activities"
            buttonStyles="w-[153px] h-[43px]  text-base font-semibold rounded-[4px] bg-white text-blue-600"
            onClick={handleAddActtivitiesPage}
          />
        </div>
        <div className="w-[320px] md:w-[1366px] h-[572px] mt-7 space-y-6">
          <AttractionsCard />
          <AttractionsCard />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
