import logo from '../../../public/images/logos/YourBank.svg'
import logoText from '../../../public/images/logos/YourBankText.svg'
function Header() {
   return (
      <header className="fixed w-full z-50">         
         <div className="flex justify-center py-[30px]">
            <div className="flex justify-between items-center w-[1280px] px-6 py-[14px] bg-grey-11 rounded-full text-white">
               <div className="flex-none flex gap-1 items-center">
                  <div>
                     <img src={logo} alt="" />
                  </div>
                  <div>
                     <img src={logoText} alt="" />
                  </div>
               </div>
               <div className="flex gap-[26px] LexendFontLight text-lg">
                  <div className="py-[10px] hover:px-[18px] rounded-full hover:bg-grey-15 transition-all duration-300 cursor-pointer leading-5">Home</div>
                  <div className="py-[10px] hover:px-[18px] rounded-full hover:bg-grey-15 transition-all duration-300 cursor-pointer leading-5">Careers</div>
                  <div className="py-[10px] hover:px-[18px] rounded-full hover:bg-grey-15 transition-all duration-300 cursor-pointer leading-5">About</div>
                  <div className="py-[10px] hover:px-[18px] rounded-full hover:bg-grey-15 transition-all duration-300 cursor-pointer leading-5">Security</div>
               </div>
               <div className="flex-none flex items-center gap-[30px] text-lg LexendFontRegular">
                  <div className="leading-7 cursor-pointer transition-all duration-300 hover:-translate-y-1">Sign Up</div>
                  <div className="leading-7 cursor-pointer w-[109px] text-center py-[14px] bg-green-60 hover:bg-[#22251B] hover:text-green-60 transition-all duration-300 text-grey-11 rounded-full">Login</div>
               </div>
            </div>
         </div>
      </header>
   )
}

export default Header