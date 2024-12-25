// 'use client'

// import React from 'react'
// import { useEffect, useState } from 'react'

// const page = () => {
//     const [data, setData] = useState()

//     const url = 'https://booking-com15.p.rapidapi.com/api/v1/hotels/searchDestination?query=man';
//     useEffect( () => {
//       const options = {
//         method: 'GET',
//         headers: {
//           'x-rapidapi-key': '06b53e0994mshfa596a46bcee26ep1611f4jsn5d7ee5f6da5b',
//           'x-rapidapi-host': 'booking-com15.p.rapidapi.com'
//         }
//       };

//       fetch(url, options)
//         .then(response => response.json())
//         .then(response => {
//           console.log(response)
//           setData(response)
//         })
//         .catch(err => {
//           console.error(err);
//         });

//     }, [])
//   return (
//     <div>
//       {
//         data && data.map((item, index) => {
//           return (
//             <div key={index}>
//               <p>{item.name}</p>
//               <p>{item.address}</p>
//               <p>{item.rating}</p>
//               <p>{item.price}</p>
//             </div>
//           )
//         }
//       }
//     </div>
//   )
// }

// export default page