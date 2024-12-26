/* eslint-disable react/no-unescaped-entities */

import Image from 'next/image'
import React from 'react'
import IconWithText from './IconWithText'

export const AttractionsCard = () => {
  return (
    <div className='w-[1366px] h-[274px] flex justify-between bg-white'>
        <div className='ml-6 w-[1280px] h-[274px] flex items-center justify-between'>
            <div className='relative w-[232px] h-[224px]'>
              <Image
                src='/Rectangle34371.png'
                width={232}
                height={224}
                alt='Rectangle'
                className='w-[232px] h-[224px]'
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
              <div className='flex justify-between'>
                <div className='h-[110px] flex-col space-y-1'>
                  <h2 className='font-semibold text-xl'>The Museum of Modern Art</h2>
                  <p className='w-[445px] text-base font-medium'>Works from Van Gogh to Warhol & 
                    beyond plus a sculpture garden, 2 cafes & The modern restaurant
                  </p>
                  <div className='w-[275px] h-[24px] flex justify-between'>
                  <IconWithText
                      iconImage='/Map.png'
                      iconText='Directions'
                      iconStyles='flex items-center space-x-1'
                      textStyles='text-base font-medium text-blue-600'
                      imageStyles='h-[16.31px] w-[12.94px]'
                    />
                    <IconWithText
                      iconImage='/star.png'
                      iconText='4.5 (436)'
                      iconStyles='flex items-center space-x-1'
                      textStyles='text-base font-medium'
                      imageStyles='h-[16.31px] w-[12.94px]'
                    />
                    <IconWithText
                      iconImage='/Clock.png'
                      iconText='1 Hour'
                      iconStyles='flex items-center space-x-1'
                      textStyles='text-base font-medium'
                      imageStyles='h-[16.31px] w-[12.94px]'
                    />
                  </div>
                </div>
                <div className='h-full'>
                  <h2 className='w-[176px] h-[36px] font-semibold text-[28px]'>₦123,450.00</h2>
                  <p className='text-base font-medium ml-5'>10:30 AM on Mar 19</p>
                </div>
              </div>
              <div className='w-full h-[65px] flex justify-between items-center'>
                <div className='w-[552] h-[26px] flex justify-between'>
                  <p className='w-[135px] h-[26px] font-medium text-lg'>What's Included:</p>
                  <p className='w-[314px] h-[26px] font-medium text-lg'>Admission to the Empire State Building</p>
                  <p className='w-[79px] h-[26px] font-medium text-lg text-blue-500'>See more</p>
                </div>
                <div className='w-[80px] h-[50px] flex space-x-1 items-center'>
                  <div className='w-[46px] h-[30px] bg-customBlueDark rounded-[4px] text-white text-sm flex items-center justify-center'>Day 1</div>
                  <div className='flex-col'>
                    <IconWithText
                      iconImage='/CaretCircleUp.png'
                      imageStyles='h-5 w-5'
                    />
                    <IconWithText
                      iconImage='/CaretCircleDown.png'
                      imageStyles='h-5 w-5'
                    />
                  </div>
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
