import { useState } from "react"
import './OurTestimonials.css'

function OurTestimonials() {

   let [temp, setTemp] = useState(0)
   let [state, setState] = useState(0)
   function leftClick() {
      if (state > -3) {
         setTemp(temp + 380)
         setState(state - 1)
      }
   }
   function rightClick() {
      if (state < 3) {
         setTemp(temp - 380)
         setState(state + 1)
      }
   }

   return (
      <section className="flex flex-col gap-[60px] lg:gap-20 px-4 lg:px-20">
         {/* title */}
         <div className="flex flex-col lg:flex-row justify-between gap-5 lg:gap-[150px] items-center lg:items-end">
            <div className="flex flex-col items-center lg:items-start gap-[10px]">
               <div className="text-[28px] lg:text-[38px] LexendFontRegular text-white leading-[1.5] transition-all duration-300">
                  Our <span className="text-green-60">Testimonials</span>
               </div>
               <div className="text-grey-70 leading-[1.5] LexendFontLight text-sm lg:text-base text-center lg:text-start">
                  Discover how YourBank has transformed lives with innovative digital solutions and personalized customer service. See why our clients trust us for a secure and prosperous financial journey
               </div>
            </div>
            <div className="flex-none flex text-sm LexendFontRegular p-3 bg-grey-11 border border-grey-15 rounded-full">
               <div className="flex-none py-[10px] px-[18px] rounded-full leading-5 cursor-pointer transition-all duration-300 hover:scale-105 bg-green-60 text-grey-11">For Individuals</div>
               <div className="flex-none py-[10px] px-[18px] rounded-full leading-5 cursor-pointer transition-all duration-300 hover:scale-105 text-white">For Businesses</div>
            </div>
         </div>
         <div className="flex justify-center relative lg:overflow-x-hidden">
            {/* cards */}
            <div
               className="flex items-start justify-center flex-row max-lg:p-5 max-lg:rounded-xl max-lg:border max-lg:border-grey-15 max-lg:overflow-x-hidden gap-[60px] max-lg:max-w-[358px] relative overflow-hidden"
               >
               {/* a card */}
               <div className="flex-none flex flex-col gap-10 w-[320px] transition-all duration-500 group hover:bg-dark-green hover:rounded-3xl hover:w-[400px] hover:px-2 hover:shadow-shadowCardTestimonialsLg hover:h-[120%] hover:outline hover:outline-1 hover:outline-green-60" style={{ transform: `translateX(${temp}px)` }}>
                  <div className="flex items-center justify-between gap-4 w-[320px] mx-auto group-hover:translate-y-[260px] transition-all duration-700">
                     <div className="w-32 h-[1px] group-hover:h-[2px] transition-all duration-500 group-hover:bg-green-60 bg-grey-15"></div>
                     <div>
                        <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path d="M4.84402 20.9212L4.84401 20.9212L4.84306 20.924C3.97266 23.4974 3.53369 25.9874 3.53369 28.3915V35.5374C3.53369 36.3658 4.20526 37.0374 5.03369 37.0374H14.2309C15.0593 37.0374 15.7309 36.3658 15.7309 35.5374L15.7309 28.3116L15.7308 28.3074C15.7054 25.2764 16.1886 22.5199 17.1727 20.0314C18.0778 17.7775 19.1728 15.6054 20.4579 13.5149C20.8813 12.8261 20.699 11.9128 20.0145 11.4567L14.9228 8.06382L14.9228 8.06382C14.3741 7.69814 13.6366 7.72756 13.1287 8.17732C11.4242 9.68636 9.87445 11.4881 8.4778 13.579L8.47711 13.58C6.95041 15.878 5.73918 18.3253 4.84402 20.9212ZM24.5557 20.9212L24.5547 20.924C23.6843 23.4974 23.2454 25.9874 23.2454 28.3915V35.5374C23.2454 36.3658 23.917 37.0374 24.7454 37.0374H33.9425C34.771 37.0374 35.4425 36.3658 35.4425 35.5374L35.4426 28.3116L35.4425 28.3074C35.4171 25.2765 35.9003 22.5201 36.8843 20.0317C37.7894 17.7777 38.8844 15.6055 40.1696 13.5149C40.593 12.8261 40.4107 11.9128 39.7261 11.4567L34.6345 8.06382L34.6345 8.06382C34.0858 7.69814 33.3483 7.72756 32.8403 8.17732L33.1718 8.55167L32.8403 8.17732C31.1359 9.68636 29.5861 11.4881 28.1895 13.579L28.1888 13.58C26.6621 15.878 25.4509 18.3253 24.5557 20.9212Z" fill="url(#paint0_linear_108_2662)" stroke="#CAFF33" />
                           <defs>
                              <linearGradient id="paint0_linear_108_2662" x1="22.1513" y1="8.06677" x2="22.1513" y2="36.5374" gradientUnits="userSpaceOnUse">
                                 <stop stop-color="#CAFF33" />
                                 <stop offset="1" stop-color="#191919" />
                              </linearGradient>
                           </defs>
                        </svg>
                     </div>
                     <div className="w-32 h-[1px] group-hover:h-[2px] transition-all duration-500 group-hover:bg-green-60 bg-grey-15"></div>
                  </div>
                  <p className="LexendFontRegular leading-[1.5] text-center text-white max-lg:text-sm group-hover:-translate-y-0 group-hover:text-lg transition-all duration-700">
                     I recently started my own business, and YourBank has been instrumental in helping me set up my business accounts and secure the financing I needed. Their expert guidance and tailored solutions have been invaluable.
                  </p>
                  <span className="LexendFontRegular leading-[1.5] text-center text-green-60 group-hover:-translate-y-[260px] group-hover:scale-110 group-hover:rounded-lg group-hover:p-1 group-hover:text-xl transition-all duration-700">John D1</span>
               </div>
               {/* a card */}
               <div className="flex-none flex flex-col gap-10 w-[320px] transition-all duration-500 group hover:bg-dark-green hover:rounded-3xl hover:w-[400px] hover:px-2 hover:shadow-shadowCardTestimonialsLg hover:h-[120%] hover:outline hover:outline-1 hover:outline-green-60" style={{ transform: `translateX(${temp}px)` }}>
                  <div className="flex items-center justify-between gap-4 w-[320px] mx-auto group-hover:translate-y-[260px] transition-all duration-700">
                     <div className="w-32 h-[1px] group-hover:h-[2px] transition-all duration-500 group-hover:bg-green-60 bg-grey-15"></div>
                     <div>
                        <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path d="M4.84402 20.9212L4.84401 20.9212L4.84306 20.924C3.97266 23.4974 3.53369 25.9874 3.53369 28.3915V35.5374C3.53369 36.3658 4.20526 37.0374 5.03369 37.0374H14.2309C15.0593 37.0374 15.7309 36.3658 15.7309 35.5374L15.7309 28.3116L15.7308 28.3074C15.7054 25.2764 16.1886 22.5199 17.1727 20.0314C18.0778 17.7775 19.1728 15.6054 20.4579 13.5149C20.8813 12.8261 20.699 11.9128 20.0145 11.4567L14.9228 8.06382L14.9228 8.06382C14.3741 7.69814 13.6366 7.72756 13.1287 8.17732C11.4242 9.68636 9.87445 11.4881 8.4778 13.579L8.47711 13.58C6.95041 15.878 5.73918 18.3253 4.84402 20.9212ZM24.5557 20.9212L24.5547 20.924C23.6843 23.4974 23.2454 25.9874 23.2454 28.3915V35.5374C23.2454 36.3658 23.917 37.0374 24.7454 37.0374H33.9425C34.771 37.0374 35.4425 36.3658 35.4425 35.5374L35.4426 28.3116L35.4425 28.3074C35.4171 25.2765 35.9003 22.5201 36.8843 20.0317C37.7894 17.7777 38.8844 15.6055 40.1696 13.5149C40.593 12.8261 40.4107 11.9128 39.7261 11.4567L34.6345 8.06382L34.6345 8.06382C34.0858 7.69814 33.3483 7.72756 32.8403 8.17732L33.1718 8.55167L32.8403 8.17732C31.1359 9.68636 29.5861 11.4881 28.1895 13.579L28.1888 13.58C26.6621 15.878 25.4509 18.3253 24.5557 20.9212Z" fill="url(#paint0_linear_108_2662)" stroke="#CAFF33" />
                           <defs>
                              <linearGradient id="paint0_linear_108_2662" x1="22.1513" y1="8.06677" x2="22.1513" y2="36.5374" gradientUnits="userSpaceOnUse">
                                 <stop stop-color="#CAFF33" />
                                 <stop offset="1" stop-color="#191919" />
                              </linearGradient>
                           </defs>
                        </svg>
                     </div>
                     <div className="w-32 h-[1px] group-hover:h-[2px] transition-all duration-500 group-hover:bg-green-60 bg-grey-15"></div>
                  </div>
                  <p className="LexendFontRegular leading-[1.5] text-center text-white max-lg:text-sm group-hover:-translate-y-0 group-hover:text-lg transition-all duration-700">
                     I recently started my own business, and YourBank has been instrumental in helping me set up my business accounts and secure the financing I needed. Their expert guidance and tailored solutions have been invaluable.
                  </p>
                  <span className="LexendFontRegular leading-[1.5] text-center text-green-60 group-hover:-translate-y-[260px] group-hover:scale-110 group-hover:rounded-lg group-hover:p-1 group-hover:text-xl transition-all duration-700">John D2</span>
               </div>
               {/* a card */}
               <div className="flex-none flex flex-col gap-10 w-[320px] transition-all duration-500 group hover:bg-dark-green hover:rounded-3xl hover:w-[400px] hover:px-2 hover:shadow-shadowCardTestimonialsLg hover:h-[120%] hover:outline hover:outline-1 hover:outline-green-60" style={{ transform: `translateX(${temp}px)` }}>
                  <div className="flex items-center justify-between gap-4 w-[320px] mx-auto group-hover:translate-y-[260px] transition-all duration-700">
                     <div className="w-32 h-[1px] group-hover:h-[2px] transition-all duration-500 group-hover:bg-green-60 bg-grey-15"></div>
                     <div>
                        <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path d="M4.84402 20.9212L4.84401 20.9212L4.84306 20.924C3.97266 23.4974 3.53369 25.9874 3.53369 28.3915V35.5374C3.53369 36.3658 4.20526 37.0374 5.03369 37.0374H14.2309C15.0593 37.0374 15.7309 36.3658 15.7309 35.5374L15.7309 28.3116L15.7308 28.3074C15.7054 25.2764 16.1886 22.5199 17.1727 20.0314C18.0778 17.7775 19.1728 15.6054 20.4579 13.5149C20.8813 12.8261 20.699 11.9128 20.0145 11.4567L14.9228 8.06382L14.9228 8.06382C14.3741 7.69814 13.6366 7.72756 13.1287 8.17732C11.4242 9.68636 9.87445 11.4881 8.4778 13.579L8.47711 13.58C6.95041 15.878 5.73918 18.3253 4.84402 20.9212ZM24.5557 20.9212L24.5547 20.924C23.6843 23.4974 23.2454 25.9874 23.2454 28.3915V35.5374C23.2454 36.3658 23.917 37.0374 24.7454 37.0374H33.9425C34.771 37.0374 35.4425 36.3658 35.4425 35.5374L35.4426 28.3116L35.4425 28.3074C35.4171 25.2765 35.9003 22.5201 36.8843 20.0317C37.7894 17.7777 38.8844 15.6055 40.1696 13.5149C40.593 12.8261 40.4107 11.9128 39.7261 11.4567L34.6345 8.06382L34.6345 8.06382C34.0858 7.69814 33.3483 7.72756 32.8403 8.17732L33.1718 8.55167L32.8403 8.17732C31.1359 9.68636 29.5861 11.4881 28.1895 13.579L28.1888 13.58C26.6621 15.878 25.4509 18.3253 24.5557 20.9212Z" fill="url(#paint0_linear_108_2662)" stroke="#CAFF33" />
                           <defs>
                              <linearGradient id="paint0_linear_108_2662" x1="22.1513" y1="8.06677" x2="22.1513" y2="36.5374" gradientUnits="userSpaceOnUse">
                                 <stop stop-color="#CAFF33" />
                                 <stop offset="1" stop-color="#191919" />
                              </linearGradient>
                           </defs>
                        </svg>
                     </div>
                     <div className="w-32 h-[1px] group-hover:h-[2px] transition-all duration-500 group-hover:bg-green-60 bg-grey-15"></div>
                  </div>
                  <p className="LexendFontRegular leading-[1.5] text-center text-white max-lg:text-sm group-hover:-translate-y-0 group-hover:text-lg transition-all duration-700">
                     I recently started my own business, and YourBank has been instrumental in helping me set up my business accounts and secure the financing I needed. Their expert guidance and tailored solutions have been invaluable.
                  </p>
                  <span className="LexendFontRegular leading-[1.5] text-center text-green-60 group-hover:-translate-y-[260px] group-hover:scale-110 group-hover:rounded-lg group-hover:p-1 group-hover:text-xl transition-all duration-700">John D3</span>
               </div>
               {/* a card */}
               <div className="flex-none flex flex-col gap-10 w-[320px] transition-all duration-500 group hover:bg-dark-green hover:rounded-3xl hover:w-[400px] hover:px-2 hover:shadow-shadowCardTestimonialsLg hover:h-[120%] hover:outline hover:outline-1 hover:outline-green-60" style={{ transform: `translateX(${temp}px)` }}>
                  <div className="flex items-center justify-between gap-4 w-[320px] mx-auto group-hover:translate-y-[260px] transition-all duration-700">
                     <div className="w-32 h-[1px] group-hover:h-[2px] transition-all duration-500 group-hover:bg-green-60 bg-grey-15"></div>
                     <div>
                        <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path d="M4.84402 20.9212L4.84401 20.9212L4.84306 20.924C3.97266 23.4974 3.53369 25.9874 3.53369 28.3915V35.5374C3.53369 36.3658 4.20526 37.0374 5.03369 37.0374H14.2309C15.0593 37.0374 15.7309 36.3658 15.7309 35.5374L15.7309 28.3116L15.7308 28.3074C15.7054 25.2764 16.1886 22.5199 17.1727 20.0314C18.0778 17.7775 19.1728 15.6054 20.4579 13.5149C20.8813 12.8261 20.699 11.9128 20.0145 11.4567L14.9228 8.06382L14.9228 8.06382C14.3741 7.69814 13.6366 7.72756 13.1287 8.17732C11.4242 9.68636 9.87445 11.4881 8.4778 13.579L8.47711 13.58C6.95041 15.878 5.73918 18.3253 4.84402 20.9212ZM24.5557 20.9212L24.5547 20.924C23.6843 23.4974 23.2454 25.9874 23.2454 28.3915V35.5374C23.2454 36.3658 23.917 37.0374 24.7454 37.0374H33.9425C34.771 37.0374 35.4425 36.3658 35.4425 35.5374L35.4426 28.3116L35.4425 28.3074C35.4171 25.2765 35.9003 22.5201 36.8843 20.0317C37.7894 17.7777 38.8844 15.6055 40.1696 13.5149C40.593 12.8261 40.4107 11.9128 39.7261 11.4567L34.6345 8.06382L34.6345 8.06382C34.0858 7.69814 33.3483 7.72756 32.8403 8.17732L33.1718 8.55167L32.8403 8.17732C31.1359 9.68636 29.5861 11.4881 28.1895 13.579L28.1888 13.58C26.6621 15.878 25.4509 18.3253 24.5557 20.9212Z" fill="url(#paint0_linear_108_2662)" stroke="#CAFF33" />
                           <defs>
                              <linearGradient id="paint0_linear_108_2662" x1="22.1513" y1="8.06677" x2="22.1513" y2="36.5374" gradientUnits="userSpaceOnUse">
                                 <stop stop-color="#CAFF33" />
                                 <stop offset="1" stop-color="#191919" />
                              </linearGradient>
                           </defs>
                        </svg>
                     </div>
                     <div className="w-32 h-[1px] group-hover:h-[2px] transition-all duration-500 group-hover:bg-green-60 bg-grey-15"></div>
                  </div>
                  <p className="LexendFontRegular leading-[1.5] text-center text-white max-lg:text-sm group-hover:-translate-y-0 group-hover:text-lg transition-all duration-700">
                     I recently started my own business, and YourBank has been instrumental in helping me set up my business accounts and secure the financing I needed. Their expert guidance and tailored solutions have been invaluable.
                  </p>
                  <span className="LexendFontRegular leading-[1.5] text-center text-green-60 group-hover:-translate-y-[260px] group-hover:scale-110 group-hover:rounded-lg group-hover:p-1 group-hover:text-xl transition-all duration-700">John D4</span>
               </div>
               {/* a card */}
               <div className="flex-none flex flex-col gap-10 w-[320px] transition-all duration-500 group hover:bg-dark-green hover:rounded-3xl hover:w-[400px] hover:px-2 hover:shadow-shadowCardTestimonialsLg hover:h-[120%] hover:outline hover:outline-1 hover:outline-green-60" style={{ transform: `translateX(${temp}px)` }}>
                  <div className="flex items-center justify-between gap-4 w-[320px] mx-auto group-hover:translate-y-[260px] transition-all duration-700">
                     <div className="w-32 h-[1px] group-hover:h-[2px] transition-all duration-500 group-hover:bg-green-60 bg-grey-15"></div>
                     <div>
                        <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path d="M4.84402 20.9212L4.84401 20.9212L4.84306 20.924C3.97266 23.4974 3.53369 25.9874 3.53369 28.3915V35.5374C3.53369 36.3658 4.20526 37.0374 5.03369 37.0374H14.2309C15.0593 37.0374 15.7309 36.3658 15.7309 35.5374L15.7309 28.3116L15.7308 28.3074C15.7054 25.2764 16.1886 22.5199 17.1727 20.0314C18.0778 17.7775 19.1728 15.6054 20.4579 13.5149C20.8813 12.8261 20.699 11.9128 20.0145 11.4567L14.9228 8.06382L14.9228 8.06382C14.3741 7.69814 13.6366 7.72756 13.1287 8.17732C11.4242 9.68636 9.87445 11.4881 8.4778 13.579L8.47711 13.58C6.95041 15.878 5.73918 18.3253 4.84402 20.9212ZM24.5557 20.9212L24.5547 20.924C23.6843 23.4974 23.2454 25.9874 23.2454 28.3915V35.5374C23.2454 36.3658 23.917 37.0374 24.7454 37.0374H33.9425C34.771 37.0374 35.4425 36.3658 35.4425 35.5374L35.4426 28.3116L35.4425 28.3074C35.4171 25.2765 35.9003 22.5201 36.8843 20.0317C37.7894 17.7777 38.8844 15.6055 40.1696 13.5149C40.593 12.8261 40.4107 11.9128 39.7261 11.4567L34.6345 8.06382L34.6345 8.06382C34.0858 7.69814 33.3483 7.72756 32.8403 8.17732L33.1718 8.55167L32.8403 8.17732C31.1359 9.68636 29.5861 11.4881 28.1895 13.579L28.1888 13.58C26.6621 15.878 25.4509 18.3253 24.5557 20.9212Z" fill="url(#paint0_linear_108_2662)" stroke="#CAFF33" />
                           <defs>
                              <linearGradient id="paint0_linear_108_2662" x1="22.1513" y1="8.06677" x2="22.1513" y2="36.5374" gradientUnits="userSpaceOnUse">
                                 <stop stop-color="#CAFF33" />
                                 <stop offset="1" stop-color="#191919" />
                              </linearGradient>
                           </defs>
                        </svg>
                     </div>
                     <div className="w-32 h-[1px] group-hover:h-[2px] transition-all duration-500 group-hover:bg-green-60 bg-grey-15"></div>
                  </div>
                  <p className="LexendFontRegular leading-[1.5] text-center text-white max-lg:text-sm group-hover:-translate-y-0 group-hover:text-lg transition-all duration-700">
                     I recently started my own business, and YourBank has been instrumental in helping me set up my business accounts and secure the financing I needed. Their expert guidance and tailored solutions have been invaluable.
                  </p>
                  <span className="LexendFontRegular leading-[1.5] text-center text-green-60 group-hover:-translate-y-[260px] group-hover:scale-110 group-hover:rounded-lg group-hover:p-1 group-hover:text-xl transition-all duration-700">John D5</span>
               </div>
               {/* a card */}
               <div className="flex-none flex flex-col gap-10 w-[320px] transition-all duration-500 group hover:bg-dark-green hover:rounded-3xl hover:w-[400px] hover:px-2 hover:shadow-shadowCardTestimonialsLg hover:h-[120%] hover:outline hover:outline-1 hover:outline-green-60" style={{ transform: `translateX(${temp}px)` }}>
                  <div className="flex items-center justify-between gap-4 w-[320px] mx-auto group-hover:translate-y-[260px] transition-all duration-700">
                     <div className="w-32 h-[1px] group-hover:h-[2px] transition-all duration-500 group-hover:bg-green-60 bg-grey-15"></div>
                     <div>
                        <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path d="M4.84402 20.9212L4.84401 20.9212L4.84306 20.924C3.97266 23.4974 3.53369 25.9874 3.53369 28.3915V35.5374C3.53369 36.3658 4.20526 37.0374 5.03369 37.0374H14.2309C15.0593 37.0374 15.7309 36.3658 15.7309 35.5374L15.7309 28.3116L15.7308 28.3074C15.7054 25.2764 16.1886 22.5199 17.1727 20.0314C18.0778 17.7775 19.1728 15.6054 20.4579 13.5149C20.8813 12.8261 20.699 11.9128 20.0145 11.4567L14.9228 8.06382L14.9228 8.06382C14.3741 7.69814 13.6366 7.72756 13.1287 8.17732C11.4242 9.68636 9.87445 11.4881 8.4778 13.579L8.47711 13.58C6.95041 15.878 5.73918 18.3253 4.84402 20.9212ZM24.5557 20.9212L24.5547 20.924C23.6843 23.4974 23.2454 25.9874 23.2454 28.3915V35.5374C23.2454 36.3658 23.917 37.0374 24.7454 37.0374H33.9425C34.771 37.0374 35.4425 36.3658 35.4425 35.5374L35.4426 28.3116L35.4425 28.3074C35.4171 25.2765 35.9003 22.5201 36.8843 20.0317C37.7894 17.7777 38.8844 15.6055 40.1696 13.5149C40.593 12.8261 40.4107 11.9128 39.7261 11.4567L34.6345 8.06382L34.6345 8.06382C34.0858 7.69814 33.3483 7.72756 32.8403 8.17732L33.1718 8.55167L32.8403 8.17732C31.1359 9.68636 29.5861 11.4881 28.1895 13.579L28.1888 13.58C26.6621 15.878 25.4509 18.3253 24.5557 20.9212Z" fill="url(#paint0_linear_108_2662)" stroke="#CAFF33" />
                           <defs>
                              <linearGradient id="paint0_linear_108_2662" x1="22.1513" y1="8.06677" x2="22.1513" y2="36.5374" gradientUnits="userSpaceOnUse">
                                 <stop stop-color="#CAFF33" />
                                 <stop offset="1" stop-color="#191919" />
                              </linearGradient>
                           </defs>
                        </svg>
                     </div>
                     <div className="w-32 h-[1px] group-hover:h-[2px] transition-all duration-500 group-hover:bg-green-60 bg-grey-15"></div>
                  </div>
                  <p className="LexendFontRegular leading-[1.5] text-center text-white max-lg:text-sm group-hover:-translate-y-0 group-hover:text-lg transition-all duration-700">
                     I recently started my own business, and YourBank has been instrumental in helping me set up my business accounts and secure the financing I needed. Their expert guidance and tailored solutions have been invaluable.
                  </p>
                  <span className="LexendFontRegular leading-[1.5] text-center text-green-60 group-hover:-translate-y-[260px] group-hover:scale-110 group-hover:rounded-lg group-hover:p-1 group-hover:text-xl transition-all duration-700">John D6</span>
               </div>
               {/* a card */}
               <div className="flex-none flex flex-col gap-10 w-[320px] transition-all duration-500 group hover:bg-dark-green hover:rounded-3xl hover:w-[400px] hover:px-2 hover:shadow-shadowCardTestimonialsLg hover:h-[120%] hover:outline hover:outline-1 hover:outline-green-60" style={{ transform: `translateX(${temp}px)` }}>
                  <div className="flex items-center justify-between gap-4 w-[320px] mx-auto group-hover:translate-y-[260px] transition-all duration-700">
                     <div className="w-32 h-[1px] group-hover:h-[2px] transition-all duration-500 group-hover:bg-green-60 bg-grey-15"></div>
                     <div>
                        <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path d="M4.84402 20.9212L4.84401 20.9212L4.84306 20.924C3.97266 23.4974 3.53369 25.9874 3.53369 28.3915V35.5374C3.53369 36.3658 4.20526 37.0374 5.03369 37.0374H14.2309C15.0593 37.0374 15.7309 36.3658 15.7309 35.5374L15.7309 28.3116L15.7308 28.3074C15.7054 25.2764 16.1886 22.5199 17.1727 20.0314C18.0778 17.7775 19.1728 15.6054 20.4579 13.5149C20.8813 12.8261 20.699 11.9128 20.0145 11.4567L14.9228 8.06382L14.9228 8.06382C14.3741 7.69814 13.6366 7.72756 13.1287 8.17732C11.4242 9.68636 9.87445 11.4881 8.4778 13.579L8.47711 13.58C6.95041 15.878 5.73918 18.3253 4.84402 20.9212ZM24.5557 20.9212L24.5547 20.924C23.6843 23.4974 23.2454 25.9874 23.2454 28.3915V35.5374C23.2454 36.3658 23.917 37.0374 24.7454 37.0374H33.9425C34.771 37.0374 35.4425 36.3658 35.4425 35.5374L35.4426 28.3116L35.4425 28.3074C35.4171 25.2765 35.9003 22.5201 36.8843 20.0317C37.7894 17.7777 38.8844 15.6055 40.1696 13.5149C40.593 12.8261 40.4107 11.9128 39.7261 11.4567L34.6345 8.06382L34.6345 8.06382C34.0858 7.69814 33.3483 7.72756 32.8403 8.17732L33.1718 8.55167L32.8403 8.17732C31.1359 9.68636 29.5861 11.4881 28.1895 13.579L28.1888 13.58C26.6621 15.878 25.4509 18.3253 24.5557 20.9212Z" fill="url(#paint0_linear_108_2662)" stroke="#CAFF33" />
                           <defs>
                              <linearGradient id="paint0_linear_108_2662" x1="22.1513" y1="8.06677" x2="22.1513" y2="36.5374" gradientUnits="userSpaceOnUse">
                                 <stop stop-color="#CAFF33" />
                                 <stop offset="1" stop-color="#191919" />
                              </linearGradient>
                           </defs>
                        </svg>
                     </div>
                     <div className="w-32 h-[1px] group-hover:h-[2px] transition-all duration-500 group-hover:bg-green-60 bg-grey-15"></div>
                  </div>
                  <p className="LexendFontRegular leading-[1.5] text-center text-white max-lg:text-sm group-hover:-translate-y-0 group-hover:text-lg transition-all duration-700">
                     I recently started my own business, and YourBank has been instrumental in helping me set up my business accounts and secure the financing I needed. Their expert guidance and tailored solutions have been invaluable.
                  </p>
                  <span className="LexendFontRegular leading-[1.5] text-center text-green-60 group-hover:-translate-y-[260px] group-hover:scale-110 group-hover:rounded-lg group-hover:p-1 group-hover:text-xl transition-all duration-700">John D7</span>
               </div>
               {/* shadow box sm */}
               <div className="lg:hidden absolute w-full h-full max-lg:shadow-shadowCardTestimonialsLg"></div>
            </div>
            {/* left & right arrows */}
            <div className="flex justify-between absolute max-lg:-bottom-[90px] lg:top-[120px] w-[124px] lg:w-full lg:left-0">
               {/* left arrow */}
               <div onClick={() => { leftClick() }} className="bg-grey-11 text-green-60 border border-grey-15 rounded-full w-fit p-3 lg:shadow-shadowCardTestimonials cursor-pointer hover:bg-dark-green active:bg-green-60 active:text-grey-11 transition-all duration-300">
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M21.5833 14H7M7 14L14 7M7 14L14 21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
               </div>
               {/* right arrow */}
               <div onClick={() => { rightClick() }} className="bg-grey-11 text-green-60 border border-grey-15 rounded-full w-fit p-3 lg:shadow-shadowCardTestimonials cursor-pointer hover:bg-dark-green active:bg-green-60 active:text-grey-11 transition-all duration-300">
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M6.99968 14H21.583M21.583 14L14.583 7M21.583 14L14.583 21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
               </div>
            </div>
         </div>
         <div className="bgStart flex flex-col lg:flex-row gap-6 lg:gap-[150px] justify-center lg:justify-between items-center mt-[120px] lg:mt-10 rounded-[20px] border border-grey-15 p-[30px] lg:p-[60px] bgCTA bg-grey-11 bg-no-repeat">
            <div className="flex flex-col gap-[14px] lg:gap-[10px] max-lg:text-center">
               <div className="LexendFontRegular text-2xl lg:text-3xl text-white leading-[1.5]">Start your financial journey with <span className="text-green-60">YourBank today!</span></div>
               <div className="LexendFontLight font-extralight text-grey-70 leading-[1.5]">Lorem ipsum dolor sit amet consectetur. Blandit odio semper risus pellentesque elit. Pellentesque eget ut imperdiet nulla penatibus. Nascetur viverra arcu sed amet cursus purus.</div>
            </div>
            <div className="LexendFontRegular text-sm text-grey-11 bg-green-60 rounded-full py-[14px] px-5 whitespace-nowrap cursor-pointer hover:-translate-y-1 active:bg-dark-green active:text-green-60 transition-all duration-300">Open Account</div>
         </div>
      </section>
   )
}

export default OurTestimonials