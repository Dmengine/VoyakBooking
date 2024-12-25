import React from 'react'
import IconWithText from './IconWithText'
import Image from 'next/image'


const SideNav = () => {
  return (
    <div className='hidden md:block flex-col w-[300px] h-[800px] ml-10 border-2 mt-10 bg-white'>
        <div className=' w-[252px] h-[532px] justify-evenly flex flex-col ml-5 mt-5'>
            <IconWithText 
                iconImage='/RoadHorizon.png'
                iconText='Activities'
                iconStyles='flex items-center'
                imageStyles='w-11 h-11'
                textStyles='font-medium text-base text-customGray '
            />
            <IconWithText 
                iconImage='/Buildings.png'
                iconText='Hotels'
                iconStyles='flex items-center'
                imageStyles='w-11 h-11'
                textStyles='font-medium text-base text-customGray '
            />
            <IconWithText 
            iconImage='/AirplaneTilt.png'
            iconText='Flights'
            iconStyles='flex items-center'
            imageStyles='w-11 h-11'
            textStyles='font-medium text-base text-customGray '
        />
        <IconWithText 
            iconImage='/Student.png'
            iconText='Study'
            iconStyles='flex items-center'
            imageStyles='w-11 h-11'
            textStyles='font-medium text-base text-customGray '
        />
        <IconWithText 
            iconImage='/NewspaperClipping.png'
            iconText='Visa'
            iconStyles='flex items-center'
            imageStyles='w-11 h-11'
            textStyles='font-medium text-base text-customGray '
        />
        <IconWithText 
            iconImage='/SuitcaseRolling.png'
            iconText='Immigration'
            iconStyles='flex items-center'
            imageStyles='w-11 h-11'
            textStyles='font-medium text-base text-customGray '
        />
        <IconWithText 
            iconImage='/FirstAidKit.png'
            iconText='Medical'
            iconStyles='flex items-center'
            imageStyles='w-11 h-11'
            textStyles='font-medium text-base text-customGray '
        />
        <IconWithText 
            iconImage='/Package.png'
            iconText='Vacation Packages'
            iconStyles='flex items-center'
            imageStyles='w-11 h-11'
            textStyles='font-medium text-base text-customGray '
        />
        </div>
        <div className='w-[252px] h-[86px] bg-customLightGray flex items-center justify-center ml-5 mt-14'>
            <div className='w-[216px] h-[50px] flex items-center justify-start space-x-1'>
                <div className='w-[50px] h-[50px] text-white text-base flex items-center justify-center bg-blue-700'>
                    GO
                </div>
                <h2 className='text-customGray'>Personal Account</h2>
                <Image
                    src='/CaretUpDown.png'
                    width={24}
                    height={24}
                    alt='caret' 
                />
            </div>
        </div>
    </div>
  )
}

export default SideNav