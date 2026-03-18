// import React from 'react';
// import { services } from '../assets/assets.js';

// const Container = () => {
//   return (
//     <div className="w-full bg-gray-50 py-16">
//       <div className="container mx-auto px-4">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {services.map((service) => {
//             const IconComponent = service.icon;
//             return (
//               <div 
//                 key={service.id} 
//                 className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:-translate-y-2"
//               >
//                 <div className="w-14 h-14 bg-amber-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-amber-400 transition-colors duration-300">
//                   <IconComponent className="text-2xl text-amber-600 group-hover:text-white" />
//                 </div>
//                 <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
//                 <p className="text-gray-600 leading-relaxed">{service.description}</p>
//                 <div className="mt-6 flex items-center text-amber-600 font-semibold cursor-pointer hover:text-amber-700 transition-colors">
//                   <span>Learn More</span>
//                   <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                   </svg>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Container;



import React from 'react'
import { services } from '../assets/assets.js'

export default function Container() {
  return (
    <div className='mt-8 border-2 w-full'>
      <div className='container mx-auto py-10 px-6 sm:px-12 md:px-24 lg:px-40 border-2'>
        
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          {
            services.map((val,index)=>(
              <div key={val.id} className='border-2 rounded-xl border-amber-400 flex flex-col md:flex-row items-center gap-5 hover:scale-105 duration-300 transition-all'>
                
                {/* service image icon */}
                <div className='flex-shrink-0 w-20 h-20 rounded-full flex items-center justify-center'>
                  <val.icon />
                </div>

                {/* service title and description */}
                <div className='text-center md:text-start'>
                   <h1 className='text-xl text-balck/50 font-bold'>{val.title}</h1>
                   <p className='text-cayn-200'>{val.description}</p>
                </div>

              </div>
            ))
          }
        </div>

      </div>
    </div>
  )
}
