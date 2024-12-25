import Image from 'next/image'
import React from 'react'
import IconWithText from './IconWithText'

export const HotelsCard = () => {
  return (
    <div className='w-[1366px] h-[274px] flex justify-between bg-white'>
        <div className='ml-6 w-[1280px] h-[274px] flex items-center justify-between'>
            <div className='relative w-[232px] h-[224px]'>
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
                    className='absolute top-24 left-6'
                />
                <Image
                    src='/CaretCircleRight.png'
                    width={32}
                    height={32}
                    alt='caret'
                    className='absolute top-24 right-6 scale-x-[-1]'
                />
            </div>
            <div className='w-[1000px] h-[224px]'>
                <div className='w-[1000px] h-1/2 flex justify-between items-center'>
                    <div className='w-1/2 h-full'>
                        <h2 className='font-semibold text-xl'>Riviera Resort, Lekki</h2>
                        <p className='text-base font-medium w-[445px] h-[48px]'>18, Kenneth Agbakuru Street, Off Access Bank Admiralty Way, Lekki Phase1</p>
                        <div className='flex w-[361px] h-[24px] justify-between'>
                            <IconWithText
                                iconImage='/Map.png'
                                iconText='Show in map'
                                iconStyles='flex items-center space-x-1'
                                textStyles='text-base font-medium text-blue-600'
                                imageStyles='h-[16.31px] w-[12.94px]'
                            />
                            <IconWithText
                                iconImage='/star.png'
                                iconText='8.5 (436)'
                                iconStyles='flex items-center space-x-1'
                                textStyles='text-base font-medium'
                                imageStyles='h-[16.31px] w-[12.94px]'
                            />
                            <IconWithText
                                iconImage='/Bed.png'
                                iconText='King size room'
                                iconStyles='flex items-center space-x-1'
                                textStyles='text-base font-medium'
                                imageStyles='h-[16.31px] w-[12.94px]'
                            />
                        </div>
                    </div>
                    <div className='w-1/3 flex flex-col justify-start items-center h-full'>
                        <h2 className='w-[176px] h-[36px] font-semibold text-[28px]'>₦123,450.00</h2>
                        <p className='text-base font-medium'>Total Price: NGN 560,000</p>
                        <p className='text-base font-medium'>1 room x 10 nights incl. taxes</p>
                    </div>
                </div>
                <div className='w-[925px] h-[78px] mt-5 flex justify-between items-center'>
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
                <div className='flex justify-between items-center w-full h-10'>
                    <div className='w-[234px] h-[26px] flex justify-between items-center'>
                        <h2 className='font-semibold text-base text-blue-600'>Hotel details</h2>
                        <h2 className='font-semibold text-base text-blue-600'>Price details</h2>
                    </div>
                    <h2 className='font-semibold text-base text-blue-600'>Edit details</h2>
                </div>
            </div>
        </div>
        <div className='w-[46px] h-[272px] bg-customRed flex justify-center items-center'>
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
