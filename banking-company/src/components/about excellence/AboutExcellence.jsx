import './AboutExcellence.css'
import image from '../../assets/public/images/ImageTopAbout.png'

function AboutExcellence() {
   return (
      <section className="h-[691px] gap-[14px] lg:h-[648px] p-[14px] lg:p-10 flex justify-center lg:justify-end rounded-[20px] bg-grey-11 mx-4 lg:mx-20 bgExcellence relative">
         <figure className="overflow-hidden rounded-2xl group">
            <img className="w-full group-hover:scale-105 transition-all duration-500" src={image} alt="" />
         </figure>
         <div className="flex flex-col max-lg:items-center gap-[14px] lg:gap-[23px] absolute p-6 lg:p-[60px] left-[14px] max-lg:bottom-[14px] max-lg:rounded-[20px] textWidth lg:left-10 lg:w-[678px] h-[507px] rounded-l-[20px] rounded-tr-none rounded-br-[60px] bg-grey-10">
            <div className="flex flex-col max-lg:items-center text-white">
               <div className="LexendFontRegular max-lg:text-sm text-lg leading-[1.5]">Welcome to YourBank</div>
               <div className="LexendFontRegular max-lg:text-center max-lg:text-[28px] text-5xl leading-[1.5]">
                  Where Banking Meets <span className="text-green-60">Excellence!</span>
               </div>
            </div>
            <div className="LexendFontLight text-grey-70 max-lg:text-sm max-lg:text-center leading-[1.5]">
               At YourBank, we believe that banking should be more than just transactions. It should be an experience that empowers individuals and businesses to thrive and reach their financial goals. As a trusted financial institution, we are committed to delivering exceptional banking services that go beyond expectations. With a focus on innovation, personalized solutions, and unwavering integrity, we strive to provide the best banking experience for our valued customers. Join us on this exciting journey and discover a new level of banking excellence.
            </div>
         </div>
      </section>
   )
}

export default AboutExcellence