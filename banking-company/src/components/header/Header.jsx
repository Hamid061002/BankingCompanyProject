import logo from '../../../public/images/logos/YourBank.svg'
import logoText from '../../../public/images/logos/YourBankText.svg'
function Header() {
   return (
      <header className="fixed w-full z-50 px-4">         
         <div className="flex justify-center pt-10 pb-[50px] lg:py-[30px]">
            <div className="flex justify-between items-center w-full lg:w-[1280px] px-6 py-[14px] bg-grey-11 rounded-full text-white">
               <div className="flex-none flex gap-1 items-center">
                  <div>
                     <img src={logo} alt="" />
                  </div>
                  <div>
                     <img src={logoText} alt="" />
                  </div>
               </div>
               <div className="hidden lg:flex gap-[26px] LexendFontLight text-lg">
                  <div className="py-[10px] hover:px-[18px] rounded-full hover:bg-grey-15 transition-all duration-300 cursor-pointer leading-5">Home</div>
                  <div className="py-[10px] hover:px-[18px] rounded-full hover:bg-grey-15 transition-all duration-300 cursor-pointer leading-5">Careers</div>
                  <div className="py-[10px] hover:px-[18px] rounded-full hover:bg-grey-15 transition-all duration-300 cursor-pointer leading-5">About</div>
                  <div className="py-[10px] hover:px-[18px] rounded-full hover:bg-grey-15 transition-all duration-300 cursor-pointer leading-5">Security</div>
               </div>
               <div className="hidden flex-none lg:flex items-center gap-[30px] text-lg LexendFontRegular">
                  <div className="leading-7 cursor-pointer transition-all duration-300 hover:-translate-y-1">Sign Up</div>
                  <div className="leading-7 cursor-pointer w-[109px] text-center py-[14px] bg-green-60 hover:bg-[#22251B] hover:text-green-60 transition-all duration-300 text-grey-11 rounded-full">Login</div>
               </div>
               <div className="flex lg:hidden px-[14px] py-[6px] rounded-full bg-green-60 cursor-pointer hover:bg-[#22251B] hover:text-green-60 transition-all duration-300 text-grey-11">
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path fill-rule="evenodd" clip-rule="evenodd" d="M3.5 7.875C3.5 7.39175 3.89175 7 4.375 7H23.625C24.1082 7 24.5 7.39175 24.5 7.875C24.5 8.35825 24.1082 8.75 23.625 8.75H4.375C3.89175 8.75 3.5 8.35825 3.5 7.875ZM3.5 14C3.5 13.5168 3.89175 13.125 4.375 13.125H23.625C24.1082 13.125 24.5 13.5168 24.5 14C24.5 14.4832 24.1082 14.875 23.625 14.875H4.375C3.89175 14.875 3.5 14.4832 3.5 14ZM13.125 20.125C13.125 19.6418 13.5168 19.25 14 19.25H23.625C24.1082 19.25 24.5 19.6418 24.5 20.125C24.5 20.6082 24.1082 21 23.625 21H14C13.5168 21 13.125 20.6082 13.125 20.125Z" fill="currentColor" />
                  </svg>
               </div>
            </div>
         </div>
      </header>
   )
}

export default Header