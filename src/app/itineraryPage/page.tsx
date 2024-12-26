'use client'

import React from 'react'
import { Button } from '../components/Button'
import IconWithText from '../components/IconWithText'
import {useEffect, useState} from 'react'
import Image from 'next/image'

interface Item {
    id: number;
    name: string;
    imageUrl?: string; 
  }


  const ItineraryPage = () => {


    const [hotels, setHotels] = useState<Item[]>([]);
    const [flights, setFlights] = useState<Item[]>([]);
    const [activities, setActivities] = useState<Item[]>([]);
    const [itinerary, setItinerary] = useState<Item[]>([]);
  
    useEffect(() => {
      fetchHotels();
      fetchFlights();
      fetchActivities();
    }, []);

    const fetchHotels = async () => {
        const hotelUrl =
          'https://booking-com15.p.rapidapi.com/api/v1/hotels/searchDestination?query=man';
          const options = {
            method: 'GET',
            headers: {
              'x-rapidapi-key': '06b53e0994mshfa596a46bcee26ep1611f4jsn5d7ee5f6da5b',
              'x-rapidapi-host': 'booking-com15.p.rapidapi.com'
            }
          };
    
        fetch(hotelUrl, options)
          .then((response) => response.json())
          .then((response) => {
            console.log(response);
            console.log(hotels.length);
            setHotels(response.hotels || []);
          })
          .catch((err) => {
            console.error(err);
          });
    };

    const fetchFlights = async () => {
        const flightUrl = 'https://booking-com15.p.rapidapi.com/api/v1/flights/searchDestination?query=new';
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': '8bd6944521msh95586e87e3799b9p19060cjsn149cfc58fe79',
                'x-rapidapi-host': 'booking-com15.p.rapidapi.com',
            },
        };
        fetch(flightUrl, options).then((response) => response.json())
        .then((response) => {
            console.log(response);
            setFlights(response.flights || []);
        }).catch((err) => {
            console.error(err);
        });
    }

    const fetchActivities = async () => {
        const activityUrl = 'https://booking-com15.p.rapidapi.com/api/v1/attraction/searchLocation?query=new&languagecode=en-us';
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': '8bd6944521msh95586e87e3799b9p19060cjsn149cfc58fe79',
                'x-rapidapi-host': 'booking-com15.p.rapidapi.com',
            },
        };
        fetch(activityUrl, options).then((response) => response.json())
        .then((response) => {
            console.log(response);
            setActivities(response.activities || []);
        }).catch((err) => {
            console.error(err);
        });
    }

    const addToItinerary = (item: Item) => {
        if (!itinerary.find((it) => it.id === item.id)) {
          setItinerary((prev) => [...prev, item]);
        }
      };

      const removeFromItinerary = (id: number) => {
        setItinerary((prev) => prev.filter((item) => item.id !== id));
      };

    
  return (
    <div className='ml-6 flex flex-col py-5 items-center'>
        <h1 className='font-bold text-2xl font-poppins'>Itinerary</h1>

        <div className='bg-customLightGray w-[1412px] h-auto flex flex-col items-center'>
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
                <div className='h-[274px] w-full bg-white'></div>
            </div>
        </div>

        
        <div className='bg-customBlack mt-5 w-[1412px] h-auto flex flex-col items-center'>
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
                <div className='h-[274px] w-full bg-white flex justify-between'>
                    <div className='w-[232px] h-[224px]'>
                        <Image
                            src='/'
                            width={232}
                            height={224}
                            alt='Rectangle'    
                        />
                    </div>
                </div>
            </div>
        </div>

        <div className='border-2 border-blue-500 bg-blue-600 mt-5 w-[1412px] h-auto flex flex-col items-center'>
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
                <div className='h-[274px] w-full bg-white'></div>
            </div>
        </div>
    </div>
  )
}

export default ItineraryPage