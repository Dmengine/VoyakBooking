import Image from 'next/image'
import React from 'react'
import IconWithText from './IconWithText'

export const HotelsCard = () => {
  return (
    <div className='overflow-hidden pl-2 w-[320px] md:w-[1366px] h-[530px] md:h-[275px] md:flex justify-between bg-white'>
        <div className='ml-6 w-[320px] md:w-[1280px] h-[274px] md:flex items-center md:justify-between'>
            <div className='mt-3 -ml-6 flex justify-center items-center relative w-full md:w-[232px] h-[224px]'>
                <Image
                    src='/Rectangle 3437.png'
                    width={232}
                    height={224}
                    alt='Rectangle'
                />
                <Image
                    src='/CaretCircleRight.png'
                    width={32}
                    height={32}
                    alt='caret'
                    className='absolute top-24 left-14 md:left-6'
                />
                <Image
                    src='/CaretCircleRight.png'
                    width={32}
                    height={32}
                    alt='caret'
                    className='absolute top-24 md:right-6 right-14 scale-x-[-1]'
                />
            </div>
            <div className='-ml-7 mt-2 md:mb-5 md:mr w-[360px] flex-col md:block md:w-[1000px] md:h-[224px]'>
                <div className='w-full md:w-[1000px] md:h-1/2  md:flex md:justify-between md:items-center'>
                    <div className='w-[350px] space-y-2 md:w-1/2 md:h-full'>
                        <h2 className='font-semibold text-xl'>Riviera Resort, Lekki</h2>
                        <p className='md:text-base font-medium w-[320px] md:w-[445px] h-[48px]'>18, Kenneth Agbakuru Street, Off Access Bank  Admiralty Way, Lekki Phase1</p>
                        <div className='flex w-[300px] md:w-[360px] h-[24px] justify-between'>
                            <IconWithText
                                iconImage='/Map.png'
                                iconText='Show in map'
                                iconStyles='flex items-center space-x-1'
                                textStyles='text-sm md:text-base md:font-medium text-blue-600'
                                imageStyles='h-[16.31px] w-[8px] md:w-[12.94px]'
                            />
                            <IconWithText
                                iconImage='/star.png'
                                iconText='8.5 (436)'
                                iconStyles='flex items-center space-x-1'
                                textStyles='text-sm md:text-base font-medium'
                                imageStyles='h-[16.31px] w-[px] md:w-[12.94px]'
                            />
                            <IconWithText
                                iconImage='/Bed.png'
                                iconText='King size room'
                                iconStyles='flex items-center space-x-1'
                                textStyles='text-sm md:text-base font-medium'
                                imageStyles='h-[16.31px] w-[]8px md:w-[12.94px]'
                            />
                        </div>
                    </div>
                    <div className='w-[226px] my-3 md:w-1/3 flex flex-col justify-start md:items-center h-full'>
                        <h2 className='w-[176px] h-[36px] font-semibold text-[28px]'>₦123,450.00</h2>
                        <p className='text-base font-medium'>Total Price: NGN 560,000</p>
                        <p className='text-base font-medium'>1 room x 10 nights incl. taxes</p>
                    </div>
                </div>
                <div className='w-full h-[78px] mt-5 hidden md:flex justify-between items-center'>
                    <p className='text-customSlate font-medium text-lg'>Facilities:</p>
                    <div className='w-[129px] h-[26px] flex items-center justify-between'>
                        <IconWithText
                            iconImage='/SwimmingPool.png'
                            iconText='Pool'
                            iconStyles='flex items-center space-x-1'
                            textStyles='font-medium text-lg text-customSlate'
                            imageStyles='w-4 h-4'
                        />
                        <IconWithText
                            iconImage='/Wine.png'
                            iconText='Bar'
                            iconStyles='flex items-center space-x-1'
                            textStyles='font-medium text-lg text-customSlate'
                            imageStyles='w-4 h-4'
                        />
                    </div>
                    <div className='w-[437px] h-[26px] ml-80 flex justify-between'>
                        <IconWithText
                            iconImage='/CalendarBlank.png'
                            iconText='Check In: 20-04-2024'
                            iconStyles='flex items-center space-x-1'
                            textStyles='font-medium text-lg text-customSlate'
                            imageStyles='w-5 h-5'
                        />
                        <IconWithText
                            iconImage='/CalendarBlank.png'
                            iconText='Check In: 20-04-2024'
                            iconStyles='flex items-center space-x-1'
                            textStyles='font-medium text-lg text-customSlate'
                            imageStyles='w-5 h-5'
                        />
                    </div>
                </div>
                <div className='flex justify-between items-center w-[300px] md:w-full h-10'>
                    <div className='w-[180px] md:w-[234px] h-[26px] flex justify-between items-center'>
                        <h2 className='font-semibold text-base text-blue-600'>Hotel details</h2>
                        <h2 className='font-semibold text-base text-blue-600'>Price details</h2>
                    </div>
                    <h2 className='font-semibold text-base text-blue-600'>Edit details</h2>
                </div>
            </div>
        </div>
        <div className='w-[46px] h-[272px] bg-customRed hidden md:flex justify-center items-center'>
            <Image
                src='/X.png'
                width={24}
                height={24}
                alt='Vector'
            />
        </div>
    </div>
  )
}
