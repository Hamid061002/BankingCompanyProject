function OurValues() {
   return (
      <section className="flex flex-col gap-[60px] px-4 lg:px-20">
         <div className="flex flex-col items-center lg:items-start gap-[10px] lg:pe-[250px]">
            <div className="text-[28px] lg:text-[38px] LexendFontRegular text-white leading-[42px] lg:leading-[57px] transition-all duration-300">
               Our <span className="text-green-60">Values</span>
            </div>
            <div className="text-grey-70 leading-5 lg:leading-6 LexendFontLight text-sm lg:text-base text-center lg:text-start">
               At YourBank, our values form the foundation of our organization and guide our actions. We believe in upholding the highest standards of integrity, delivering exceptional service, and embracing innovation. These values define our culture and shape the way we work together to achieve our goals.
            </div>
         </div>
         <div className="grid lg:grid-cols-2 gap-[50px] lg:gap-[60px]">
            <div className="flex flex-col gap-[14px] lg:gap-5 ps-5 lg:ps-6 pb-1 group hover:ps-3 transition-all duration-500 relative">
               <div className="absolute left-0 w-0 h-full bg-dark-green group-hover:w-full transition-all duration-500 -z-10"></div>
               <div className="absolute left-0 w-[1px] h-full bg-green-60 group-hover:left-full transition-all duration-500"></div>
               <div className="LexendFontRegular text-3xl lg:text-[40px] text-grey-30 leading-[1.5] group-hover:text-grey-75 group-hover:translate-y-2 transition-all duration-500">Integrity</div>
               <div className="LexendFontLight text-grey-70 max-lg:text-sm leading-[1.5] group-hover:text-grey-40 transition-all duration-500">
                  We conduct ourselves with utmost honesty, transparency, and ethical behavior. We believe in doing what is right for our customers, colleagues, and stakeholders, even when faced with difficult choices.
               </div>
            </div>
            <div className="flex flex-col gap-[14px] lg:gap-5 ps-5 lg:ps-6 pb-1 group hover:ps-3 transition-all duration-500 relative">
               <div className="absolute left-0 w-0 h-full bg-dark-green group-hover:w-full transition-all duration-500 -z-10"></div>
               <div className="absolute left-0 w-[1px] h-full bg-green-60 group-hover:left-full transition-all duration-500"></div>
               <div className="LexendFontRegular text-3xl lg:text-[40px] text-grey-30 leading-[1.5] group-hover:text-grey-75 group-hover:translate-y-2 transition-all duration-500">Customer Centricity</div>
               <div className="LexendFontLight text-grey-70 max-lg:text-sm leading-[1.5] group-hover:text-grey-40 transition-all duration-500">
                  Our customers are at the heart of everything we do. We are dedicated to understanding their needs, providing personalized solutions, and delivering exceptional service that exceeds expectations.
               </div>
            </div>
            <div className="flex flex-col gap-[14px] lg:gap-5 ps-5 lg:ps-6 pb-1 group hover:ps-3 transition-all duration-500 relative">
               <div className="absolute left-0 w-0 h-full bg-dark-green group-hover:w-full transition-all duration-500 -z-10"></div>
               <div className="absolute left-0 w-[1px] h-full bg-green-60 group-hover:left-full transition-all duration-500"></div>
               <div className="LexendFontRegular text-3xl lg:text-[40px] text-grey-30 leading-[1.5] group-hover:text-grey-75 group-hover:translate-y-2 transition-all duration-500">Collaboration</div>
               <div className="LexendFontLight text-grey-70 max-lg:text-sm leading-[1.5] group-hover:text-grey-40 transition-all duration-500">
                  We foster a collaborative and inclusive work environment, where teamwork and diversity are celebrated. By leveraging the unique strengths and perspectives of our employees, we drive innovation and achieve greater success together.
               </div>
            </div>
            <div className="flex flex-col gap-[14px] lg:gap-5 ps-5 lg:ps-6 pb-1 group hover:ps-3 transition-all duration-500 relative">
               <div className="absolute left-0 w-0 h-full bg-dark-green group-hover:w-full transition-all duration-500 -z-10"></div>
               <div className="absolute left-0 w-[1px] h-full bg-green-60 group-hover:left-full transition-all duration-500"></div>
               <div className="LexendFontRegular text-3xl lg:text-[40px] text-grey-30 leading-[1.5] group-hover:text-grey-75 group-hover:translate-y-2 transition-all duration-500">Innovation</div>
               <div className="LexendFontLight text-grey-70 max-lg:text-sm leading-[1.5] group-hover:text-grey-40 transition-all duration-500">
                  We embrace change and constantly seek innovative solutions to meet the evolving needs of our customers. We encourage our employees to think creatively, challenge conventions, and explore new ideas to drive the future of banking.
               </div>
            </div>
         </div>
      </section>
   )
}

export default OurValues