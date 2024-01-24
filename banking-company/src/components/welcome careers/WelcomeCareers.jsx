import image from '../../assets/public/images/WelcomeCareersImage.png'
function WelcomeCareers() {
   return (
      <section className="h-[691px] gap-[14px] lg:h-[648px] p-[14px] lg:p-10 flex justify-center lg:justify-end rounded-[20px] bg-grey-11 mx-4 lg:mx-20 bgExcellence relative">
         <figure className="overflow-hidden rounded-2xl group">
            <img className="w-full group-hover:scale-105 transition-all duration-500" src={image} alt="" />
         </figure>
         <div className="flex flex-col max-lg:items-center gap-[14px] lg:gap-5 absolute p-6 lg:p-[60px] left-[14px] max-lg:bottom-[14px] max-lg:rounded-[20px] textWidth lg:left-10 lg:w-[678px] h-[408px] rounded-l-[20px] rounded-tr-none rounded-br-[60px] bg-grey-10">
            <div className="flex flex-col max-lg:items-center text-white">
               <div className="LexendFontRegular max-lg:text-center max-lg:text-[28px] text-5xl leading-[1.3]">
                  Welcome to <span className="text-green-60">YourBank</span> Careers!
               </div>
            </div>
            <div className="LexendFontLight text-grey-70 max-lg:text-sm max-lg:text-center leading-[1.5]">
               Join our team and embark on a rewarding journey in the banking industry. At YourBank, we are committed to fostering a culture of excellence and providing opportunities for professional growth. With a focus on innovation, customer service, and integrity, we strive to make a positive impact in the lives of our customers and communities. Join us today and be a part of our mission to shape the future of banking.
            </div>
         </div>
      </section>
   )
}

export default WelcomeCareers