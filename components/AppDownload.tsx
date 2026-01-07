'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone } from 'lucide-react';
import Image from 'next/image';

// ===========================================
// App Download Section
// ===========================================
const AppDownload = () => {
  return (
    <section className="bg-blue-950 py-24 overflow-hidden relative">
       <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
       <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl -ml-20 -mb-20"></div>

       <div className="max-w-7xl mx-auto px-6 relative z-10">
         <div className="grid lg:grid-cols-2 gap-12 items-center">
           
           <div className="text-center lg:text-left">
             <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-900 text-blue-200 rounded-full text-sm font-bold mb-6 border border-blue-800">
               <Smartphone size={16} />
               <span>Learning in your pocket</span>
             </div>
             
             <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
               Go at your own rhythm.<br />
               <motion.span
                    className="inline-block"
                    style={{
                        backgroundImage: "linear-gradient(90deg, #f97316 0%, #f97316 40%, #ffffff 50%, #f97316 60%, #f97316 100%)",
                        backgroundSize: "200% 100%",
                        WebkitBackgroundClip: "text",
                        backgroundClip: "text",
                        color: "transparent"
                    }}
                    animate={{
                        backgroundPosition: ["200% 0%", "-200% 0%"]
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    >
                    24/7 Access from anywhere.
                </motion.span>
             </h2>
             
             <p className="text-blue-200 text-lg mb-10 max-w-xl mx-auto lg:mx-0">
               Download the Skillsnap Learning App – India's Out-of-the-Box Learning Platform.
               Watch lectures, take quizzes, and track progress on the go.
             </p>

             <div className="flex flex-col sm:flex-row items-center lg:items-start gap-4 justify-center lg:justify-start">
               <button className="flex items-center gap-3 bg-white text-gray-900 px-6 py-3 rounded-xl hover:scale-105 transition-transform duration-300 font-medium w-full sm:w-auto justify-center sm:justify-start">
                 <Image 
                  src="/google-play-store-logo.png" 
                  alt="Google Play" 
                  width={48}
                  height={48}
                  className="w-6 h-6 shrink-0 object-contain"
                />
                 <div className="text-left">
                   <div className="text-[10px] uppercase font-bold text-gray-500 leading-none">GET IT ON</div>
                   <div className="text-base font-bold leading-none mt-0.5">Google Play</div>
                 </div>
               </button>

               <button className="flex items-center gap-3 bg-[#083e99] text-white border border-white/20 px-6 py-3 rounded-xl hover:bg-[#083e99] hover:scale-105 transition-all duration-300 font-medium backdrop-blur-sm w-full sm:w-auto justify-center sm:justify-start">
                 <Image 
                  src="/app-play-store-logo.png" 
                  alt="App Store" 
                  width={48}
                  height={48}
                  className="w-6 h-6 shrink-0 object-contain brightness-0 invert"
                />
                 <div className="text-left">
                   <div className="text-[10px] uppercase font-bold text-gray-400 leading-none">Download on the</div>
                   <div className="text-base font-bold leading-none mt-0.5">App Store</div>
                 </div>
               </button>
             </div>
           </div>

           <div className="relative mx-auto w-full max-w-md lg:max-w-full font-sans">
             <div className="absolute top-10 -left-6 z-20 bg-white p-3 rounded-xl shadow-xl animate-bounce duration-[3000ms]">
                <div className="flex items-center gap-2">
                   <div className="w-3 h-3 rounded-full bg-green-500"></div>
                   <span className="text-xs font-bold text-gray-800">Anytime, Anywhere</span>
                </div>
             </div>
             
             <div 
                className="relative rounded-3xl overflow-hidden border-4 border-white/10 shadow-2xl group cursor-pointer"
                onClick={(e) => {
                    const target = e.currentTarget;
                    target.classList.toggle('is-zoomed');
                }}
                >
                <Image 
                  src="/girl-holding-phone.jpg" 
                  alt="Happy Indian student showing learning app on phone" 
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover transition-all duration-500 ease-out group-hover:scale-110 group-hover:brightness-110 group-[.is-zoomed]:scale-110 group-[.is-zoomed]:brightness-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-950/40 to-transparent transition-opacity duration-500 group-hover:opacity-70 group-[.is-zoomed]:opacity-70"></div>
            </div>
           </div>

         </div>
       </div>
    </section>
  )
}

export default AppDownload;
