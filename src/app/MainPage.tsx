import Image from 'next/image'
import React from 'react'
import Card from './components/Card'
import IconWithText from './components/IconWithText'
import { Button } from './components/Button'
import FlightCard from './components/FlightCard'
import { HotelsCard } from './components/HotelsCard'
import { AttractionsCard } from './components/AttractionsCard'

const MainPage = () => {
  return (
    <div className='ml-6 mr-6 mt-10 w-[1478px] h-[3316px] bg-white'>
        <div className='relative border-2 w-[1412px] h-[3295px] mt-5 ml-6'>
            <Image
                src='/banner.png'
                width={1412}
                height={200}
                alt='banner'
            />
            <div className='items-center justify-center flex w-16 h-16 absolute top-5 left-6'>
                <Image
                    src='/ArrowLeft.png'
                    width={24}
                    height={24}
                    alt='arrow'
                />
            </div>
            <div className='flex mt-5 justify-between'>
                <div className='w-[341px] h-[94px]'>
                    <div className='w-[250px] h-[30px] bg-orange-200 flex justify-evenly items-center'>
                        <Image
                            src='/CalendarBlank.png'
                            width={20}
                            height={16}
                            alt='calendar'
                        />
                        <h3 className='text-sm font-medium text-customBrown'>21 March 2024</h3>
                        <Image
                            src='/ArrowRight.png'
                            width={16}
                            height={16}
                            alt='arrow'
                        />
                        <h4 className='text-sm font-medium text-customBrown'>21 April 2024</h4>
                    </div>
                    <h2 className='text-[24px] font-semibold'>Bahamas Family Trip</h2>
                    <div className='flex justify-start items-center space-x-1'>
                        <p className='text-customSlate font-medium text-base'>New York, United States Of America</p>
                        <Image
                            src='/line.png'
                            width={3}
                            height={4}
                            alt='line'
                        />
                        <p className='text-customSlate font-medium text-base'>Solo Trip</p>
                    </div>
                </div>
                <div className='flex space-x-2'>
                    <div className='bg-customBlue flex items-center justify-center w-[160px] h-10'>
                        <Image
                                src='/UserPlus.png'
                                width={20}
                                height={20}
                                alt='user'
                            />
                    </div>
                    <div className='flex justify-center items-center h-20'>
                        <Image
                            src='/DotsThree.png'
                            width={32}
                            height={32}
                            alt='dot'
                        />
                    </div>
                </div>
            </div>
            <div className='flex justify-between h-50 mt-5'>
                <div className='flex w-[810px] h-[193px]'>
                    <Card
                        text='Activities'
                        Ptext='Build, personalize, and optimize your itineraries with our trip planner.'
                        Btext='Add Activities'
                        Bstyle = 'w-[242px] h-[46px] rounded-[4px] bg-blue-500 text-white mt-5'
                    />
                    <Card
                        text='Hotels'
                        Ptext='Build, personalize, and optimize your itineraries with our trip planner.'
                        Btext='Add Hotels'
                        cardStyles='bg-customBlue w-[270px] h-[193px] p-4 rounded-[4px]'
                        h2Style = 'text-black text-base font-bold mb-3'
                        textStyles='text-black text-sm font-medium'
                        Bstyle = 'w-[242px] h-[46px] rounded-[4px] bg-blue-500 text-white mt-5'
                    />
                    <Card
                        text='Flights'
                        Ptext='Build, personalize, and optimize your itineraries with our trip planner.'
                        Btext='Add Flights'
                        cardStyles='bg-blue-500 w-[270px] h-[193px] p-4 rounded-[4px]'
                        Bstyle = 'w-[242px] h-[46px] rounded-[4px] bg-white text-customBrown mt-5'
                    />
                </div>
                <div className='w-[109px] h-[40px] flex justify-between items-center -mt-5'>
                    <Image
                        src='/box.png'
                        width={40}
                        height={40}
                        alt='box'
                    />
                    <Image
                        src='/set.png'
                        width={40}
                        height={40}
                        alt='set'
                    />
                </div>
            </div>
            <div className='w-[213px] h-[52px] mt-24'>
                <h2 className='text-xl font-semibold'>Trip itineraries</h2>
                <p className='text-xs text-customGrayBlue font-medium'>Your trip itineraries are placed here</p>
            </div>
            <div className='bg-customLightGray w-[1412px] h-[710px] flex flex-col items-center'>
                <div className='w-[1366px] h-[46px] mt-5 flex justify-between '>
                    <div className='w-[110px] h-11'>
                        <IconWithText
                            iconImage='/AirplaneInFlight.png'
                            iconText='Flights'
                            iconStyles='flex items-center justify-between'
                            textStyles='font-semibold text-lg '
                            imageStyles='w-10 h-10'
                        />
                    </div>
                    <Button
                        text='Add Flights'
                        buttonStyles='w-[153px] h-[43px]  text-base font-semibold rounded-[4px] bg-white text-blue-600'
                    />
                </div>
                <div className='w-[1366px] h-[572px] mt-7 space-y-4'>
                    <FlightCard />
                    <FlightCard />
                </div>
            </div>
            <div className='bg-customBlack mt-5 w-[1412px] h-[710px] flex flex-col items-center'>
                <div className='w-[1366px] h-[46px] mt-5 flex justify-between '>
                    <div className='w-[110px] h-11'>
                        <IconWithText
                            iconImage='/Warehouse.png'
                            iconText='Hotels'
                            iconStyles='flex items-center justify-between'
                            textStyles='font-semibold text-lg text-white'
                            imageStyles='w-10 h-10'
                        />
                    </div>
                    <Button
                        text='Add Hotel'
                        buttonStyles='w-[153px] h-[43px]  text-base font-semibold rounded-[4px] bg-white text-customBlueDark'
                    />
                </div>
                <div className='w-[1366px] h-[572px] mt-7 space-y-4'>
                    <HotelsCard />
                    <HotelsCard />
                </div>
            </div>
            <div className='border-2 border-blue-500 bg-blue-600 mt-5 w-[1412px] h-[1044px] flex flex-col items-center'>
                <div className='w-[1366px] h-[46px] mt-5 flex justify-between '>
                    <div className='w-[110px] h-11'>
                        <IconWithText
                            iconImage='/RoadHorizon.png'
                            iconText='Activities'
                            iconStyles='flex items-center justify-between'
                            textStyles='font-semibold text-lg text-white'
                            imageStyles='w-10 h-10 '
                        />
                    </div>
                    <Button
                        text='Add Activities'
                        buttonStyles='w-[153px] h-[43px]  text-base font-semibold rounded-[4px] bg-white text-customBlueDark'
                    />
                </div>
                <div className='w-[1366px] h-[572px] mt-7 space-y-4'>
                    <AttractionsCard />
                    <AttractionsCard />
                    <AttractionsCard />
                </div>
            </div>
        </div>
    </div>
  )
}

export default MainPage