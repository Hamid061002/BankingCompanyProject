function OurProducts() {
   return (
      <section className="flex flex-col gap-[60px] lg:gap-20 px-4 lg:px-20 pt-[120px]">
         <div className="flex flex-col lg:flex-row justify-between gap-5 lg:gap-[150px] items-center lg:items-end">
            <div className="flex flex-col items-center lg:items-start gap-[10px]">
               <div className="text-[28px] lg:text-[38px] LexendFontRegular text-white leading-[42px] lg:leading-[57px] transition-all duration-300">
                  Our <span className="text-green-60">Products</span>
               </div>
               <div className="text-grey-70 leading-5 lg:leading-6 LexendFontLight text-sm lg:text-base text-center lg:text-start">
                  Discover a range of comprehensive and customizable banking products at YourBank, designed to suit your unique financial needs and aspirations
               </div>
            </div>
            <div className="flex-none flex text-sm LexendFontRegular p-3 bg-grey-11 border border-grey-15 rounded-full">
               <div className="flex-none py-[10px] px-[18px] rounded-full leading-5 cursor-pointer transition-all duration-300 hover:scale-105 bg-green-60 text-grey-11">For Individuals</div>
               <div className="flex-none py-[10px] px-[18px] rounded-full leading-5 cursor-pointer transition-all duration-300 hover:scale-105 text-white">For Businesses</div>
            </div>
         </div>
         <div className="flex flex-col lg:flex-row gap-[30px] lg:gap-10">
            {/* a item */}
            <div className="basis-1/3 flex flex-col items-center">
               <div className="ourProductsIconStyle p-2 w-fit">
                  <svg width="57" height="56" viewBox="0 0 57 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <rect x="0.666504" width="56" height="56" rx="28" fill="url(#paint0_linear_104_2418)" fill-opacity="0.1" />
                     <rect x="1.1665" y="0.5" width="55" height="55" rx="27.5" stroke="url(#paint1_linear_104_2418)" stroke-opacity="0.2" />
                     <path d="M26.9196 31.4435C26.1334 31.4435 25.6729 31.001 25.6729 30.2068V29.2877C22.371 29.0608 19.0803 28.3801 15.666 27.0752V25.2032C19.8664 27.0639 24.0781 27.722 28.6604 27.722C33.254 27.722 37.4656 27.0639 41.666 25.2032V27.0752C38.2518 28.3801 34.961 29.0608 31.6591 29.2877V30.2068C31.6591 31.001 31.1986 31.4435 30.4124 31.4435H26.9196ZM19.1364 38.9886H38.1956C40.5205 38.9886 41.666 37.854 41.666 35.5281V24.4884C41.666 22.1624 40.5205 21.0278 38.1956 21.0278H19.1364C16.8228 21.0278 15.666 22.1624 15.666 24.4884V35.5281C15.666 37.854 16.8228 38.9886 19.1364 38.9886ZM22.9662 22.0149H24.7071V20.0067C24.7071 19.1444 25.2125 18.6565 26.0885 18.6565H31.2436C32.1196 18.6565 32.6138 19.1444 32.6138 20.0067V21.9923H34.3546V20.1315C34.3546 17.9985 33.2427 17 31.2099 17H26.1109C24.1904 17 22.9662 17.9985 22.9662 20.1315V22.0149Z" fill="#CAFF33" />
                     <defs>
                        <linearGradient id="paint0_linear_104_2418" x1="28.6665" y1="-37.0811" x2="28.6665" y2="144.541" gradientUnits="userSpaceOnUse">
                           <stop stop-color="#CAFF33" />
                           <stop offset="0.467671" stop-color="#CAFF33" stop-opacity="0" />
                        </linearGradient>
                        <linearGradient id="paint1_linear_104_2418" x1="28.6665" y1="-97.2432" x2="28.6665" y2="106.703" gradientUnits="userSpaceOnUse">
                           <stop stop-color="#CAFF33" />
                           <stop offset="0.716291" stop-color="#CAFF33" stop-opacity="0" />
                        </linearGradient>
                     </defs>
                  </svg>
               </div>
               <div className="LexendFontRegular text-xl leading-[30px] mt-5 lg:mt-6 text-white text-center">Checking Accounts</div>
               <div className="LexendFontLight text-sm lg:text-base leading-6 text-grey-70 mt-3 lg:mt-4 text-center">
                  Enjoy easy and convenient access to your funds with our range of checking account options. Benefit from features such as online and mobile banking, debit cards, and free ATM access.
               </div>
            </div>
            {/* line between */}
            <div className="w-full lg:w-[1px] h-[1px] lg:h-262px bg-grey-15"></div>
            {/* a item */}
            <div className="basis-1/3 flex flex-col items-center">
               <div className="ourProductsIconStyle p-2 w-fit">
                  <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <rect width="56" height="56" rx="28" fill="url(#paint0_linear_104_2430)" fill-opacity="0.1" />
                     <rect x="0.5" y="0.5" width="55" height="55" rx="27.5" stroke="url(#paint1_linear_104_2430)" stroke-opacity="0.2" />
                     <path d="M17.9375 17.5C16.7294 17.5 15.75 18.4794 15.75 19.6875V20.5625C15.75 21.7706 16.7294 22.75 17.9375 22.75H38.0625C39.2706 22.75 40.25 21.7706 40.25 20.5625V19.6875C40.25 18.4794 39.2706 17.5 38.0625 17.5H17.9375Z" fill="#CAFF33" />
                     <path fill-rule="evenodd" clip-rule="evenodd" d="M17.6013 24.5L18.231 35.2055C18.3398 37.0555 19.8718 38.5 21.725 38.5H34.2747C36.1279 38.5 37.6598 37.0555 37.7687 35.2055L38.3984 24.5H17.6013ZM28 26.25C28.4832 26.25 28.875 26.6418 28.875 27.125V32.8876L30.8813 30.8813C31.223 30.5396 31.777 30.5396 32.1187 30.8813C32.4604 31.223 32.4604 31.777 32.1187 32.1187L28.6187 35.6187C28.277 35.9604 27.723 35.9604 27.3813 35.6187L23.8813 32.1187C23.5396 31.777 23.5396 31.223 23.8813 30.8813C24.223 30.5396 24.777 30.5396 25.1187 30.8813L27.125 32.8876V27.125C27.125 26.6418 27.5168 26.25 28 26.25Z" fill="#CAFF33" />
                     <defs>
                        <linearGradient id="paint0_linear_104_2430" x1="28" y1="-37.0811" x2="28" y2="144.541" gradientUnits="userSpaceOnUse">
                           <stop stop-color="#CAFF33" />
                           <stop offset="0.467671" stop-color="#CAFF33" stop-opacity="0" />
                        </linearGradient>
                        <linearGradient id="paint1_linear_104_2430" x1="28" y1="-97.2432" x2="28" y2="106.703" gradientUnits="userSpaceOnUse">
                           <stop stop-color="#CAFF33" />
                           <stop offset="0.716291" stop-color="#CAFF33" stop-opacity="0" />
                        </linearGradient>
                     </defs>
                  </svg>
               </div>
               <div className="LexendFontRegular text-xl leading-[30px] mt-5 lg:mt-6 text-white text-center">Savings Accounts</div>
               <div className="LexendFontLight text-sm lg:text-base leading-6 text-grey-70 mt-3 lg:mt-4 text-center">
                  Build your savings with our competitive interest rates and flexible savings account options. Whether you're saving for a specific goal or want to grow your wealth over time, we have the right account for you.
               </div>
            </div>
            {/* line between */}
            <div className="w-full lg:w-[1px] h-[1px] lg:h-262px bg-grey-15"></div>
            {/* a item */}
            <div className="basis-1/3 flex flex-col items-center">
               <div className="ourProductsIconStyle p-2 w-fit">
                  <svg width="57" height="56" viewBox="0 0 57 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <rect x="0.333008" width="56" height="56" rx="28" fill="url(#paint0_linear_104_2439)" fill-opacity="0.1" />
                     <rect x="0.833008" y="0.5" width="55" height="55" rx="27.5" stroke="url(#paint1_linear_104_2439)" stroke-opacity="0.2" />
                     <path d="M28.333 22.75C26.8833 22.75 25.708 23.9253 25.708 25.375C25.708 26.8247 26.8833 28 28.333 28C29.7828 28 30.958 26.8247 30.958 25.375C30.958 23.9253 29.7828 22.75 28.333 22.75Z" fill="#CAFF33" />
                     <path fill-rule="evenodd" clip-rule="evenodd" d="M16.083 19.6875C16.083 18.4794 17.0624 17.5 18.2705 17.5H38.3955C39.6036 17.5 40.583 18.4794 40.583 19.6875V31.0625C40.583 32.2706 39.6036 33.25 38.3955 33.25H18.2705C17.0624 33.25 16.083 32.2706 16.083 31.0625V19.6875ZM23.958 25.375C23.958 22.9588 25.9168 21 28.333 21C30.7493 21 32.708 22.9588 32.708 25.375C32.708 27.7912 30.7493 29.75 28.333 29.75C25.9168 29.75 23.958 27.7912 23.958 25.375ZM36.208 24.5C35.7248 24.5 35.333 24.8918 35.333 25.375V25.3837C35.333 25.867 35.7248 26.2587 36.208 26.2587H36.2168C36.7 26.2587 37.0918 25.867 37.0918 25.3837V25.375C37.0918 24.8918 36.7 24.5 36.2168 24.5H36.208ZM19.583 25.375C19.583 24.8918 19.9748 24.5 20.458 24.5H20.4668C20.95 24.5 21.3418 24.8918 21.3418 25.375V25.3837C21.3418 25.867 20.95 26.2587 20.4668 26.2587H20.458C19.9748 26.2587 19.583 25.867 19.583 25.3837V25.375Z" fill="#CAFF33" />
                     <path d="M16.958 35C16.4748 35 16.083 35.3918 16.083 35.875C16.083 36.3582 16.4748 36.75 16.958 36.75C23.2581 36.75 29.3599 37.5926 35.1577 39.1707C36.5468 39.5488 37.958 38.5196 37.958 37.0476V35.875C37.958 35.3918 37.5663 35 37.083 35H16.958Z" fill="#CAFF33" />
                     <defs>
                        <linearGradient id="paint0_linear_104_2439" x1="28.333" y1="-37.0811" x2="28.333" y2="144.541" gradientUnits="userSpaceOnUse">
                           <stop stop-color="#CAFF33" />
                           <stop offset="0.467671" stop-color="#CAFF33" stop-opacity="0" />
                        </linearGradient>
                        <linearGradient id="paint1_linear_104_2439" x1="28.333" y1="-97.2432" x2="28.333" y2="106.703" gradientUnits="userSpaceOnUse">
                           <stop stop-color="#CAFF33" />
                           <stop offset="0.716291" stop-color="#CAFF33" stop-opacity="0" />
                        </linearGradient>
                     </defs>
                  </svg>
               </div>
               <div className="LexendFontRegular text-xl leading-[30px] mt-5 lg:mt-6 text-white text-center">Loans and Mortgages</div>
               <div className="LexendFontLight text-sm lg:text-base leading-6 text-grey-70 mt-3 lg:mt-4 text-center">
                  Realize your dreams with our flexible loan and mortgage options. From personal loans to home mortgages, our experienced loan officers are here to guide you through the application process and help you secure the funds you need.
               </div>
            </div>
         </div>
      </section>
   )
}

export default OurProducts