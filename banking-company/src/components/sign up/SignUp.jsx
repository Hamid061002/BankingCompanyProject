import { useState } from 'react'
import { useFormik } from 'formik'


function SignUp() {
   let eyeClass = "absolute right-[18px] lg:right-5 top-[18px] lg:top-[22px] transition-all duration-500"
   let [ShowEye, setShowEye] = useState(true)
   let [showPassword, setShowPassword] = useState(true)

   function showPasswordFuncation() {
      setShowPassword(!showPassword)
      setShowEye(!ShowEye)
   }

   const formik = useFormik({
      initialValues: {
         email: '',
         password: ''
      },
   })

   return (
      <div className="px-4">
         <div className="flex flex-col gap-10 lg:gap-[60px] w-full lg:w-[1064px] bgLoginSignUp bg-right-top p-[30px] lg:py-20 lg:px-[200px] mx-auto">
            {/* heading */}
            <div className="flex flex-col items-center gap-[10px] lg:gap-4">
               <div className="LexendFontMedium text-[28px] lg:text-[38px] text-green-60 leading-normal">Sign Up</div>
               <div className="LexendFontLight max-lg:text-sm text-grey-75 leading-normal text-center">Join our community today! Create an account to unlock exclusive features and personalized experiences.</div>
            </div>
            {/* form */}
            <div>
               <form className="flex flex-col gap-6 lg:gap-[30px] items-center">
                  <div className="flex max-lg:items-center flex-col lg:flex-row gap-5 lg:gap-6 w-full">
                     {/* email */}
                     <label className="w-full max-w-sm p-4 lg:p-5 bg-grey-10 rounded-[88px] border border-grey-15 cursor-pointer">
                        <input
                           name="email"
                           value={formik.values.email}
                           onChange={formik.handleChange}
                           onBlur={formik.handleBlur}
                           className="LexendFontLight text-base text-grey-60 placeholder:text-grey-35 outline-none bg-inherit leading-normal"
                           placeholder="Enter your Email">
                        </input>
                     </label>
                     {/* password */}
                     <label className="w-full max-w-sm p-4 lg:p-5 bg-grey-10 rounded-[88px] border border-grey-15 cursor-pointer relative">
                        <input
                           name="password"
                           value={formik.values.password}
                           onChange={formik.handleChange}
                           onBlur={formik.handleBlur}
                           type={showPassword ? 'password' : 'text'}
                           className="LexendFontLight text-base text-grey-60 placeholder:text-grey-35 outline-none bg-inherit leading-normal"
                           placeholder="Enter your Password">
                        </input>
                        <div onClick={() => showPasswordFuncation()} className="text-grey-35">
                           <svg className={ShowEye ? eyeClass : `${eyeClass} invisible opacity-0`} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path fill-rule="evenodd" clip-rule="evenodd" d="M3.28033 2.21967C2.98744 1.92678 2.51256 1.92678 2.21967 2.21967C1.92678 2.51256 1.92678 2.98744 2.21967 3.28033L16.7197 17.7803C17.0126 18.0732 17.4874 18.0732 17.7803 17.7803C18.0732 17.4874 18.0732 17.0126 17.7803 16.7197L16.0352 14.9745C17.5064 13.8594 18.6595 12.3465 19.3344 10.5959C19.4814 10.2144 19.4816 9.79127 19.3347 9.40962C17.892 5.66051 14.256 3 9.99859 3C8.28207 3 6.66657 3.43249 5.2551 4.19444L3.28033 2.21967ZM7.75194 6.69128L8.84367 7.78301C9.18951 7.60223 9.58291 7.5 10.0002 7.5C11.3809 7.5 12.5002 8.61929 12.5002 10C12.5002 10.4173 12.398 10.8107 12.2172 11.1565L13.3091 12.2484C13.7454 11.6077 14.0004 10.8336 14.0004 10C14.0004 7.79086 12.2095 6 10.0004 6C9.16675 6 8.39268 6.25501 7.75194 6.69128Z" fill="currentColor" />
                              <path d="M10.7484 13.9302L13.2711 16.4529C12.2462 16.8074 11.1458 17 10.0004 17C5.74298 17 2.10698 14.3395 0.664255 10.5904C0.517392 10.2087 0.517518 9.78563 0.66461 9.40408C1.15603 8.12932 1.90108 6.98057 2.83791 6.01969L6.0702 9.25198C6.02436 9.4943 6.00037 9.74435 6.00037 10C6.00037 12.2091 7.79123 14 10.0004 14C10.256 14 10.5061 13.976 10.7484 13.9302Z" fill="currentColor" />
                           </svg>
                           <svg className={!ShowEye ? eyeClass : `${eyeClass} invisible opacity-0`} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M10 12.5C11.3807 12.5 12.5 11.3807 12.5 10C12.5 8.61929 11.3807 7.5 10 7.5C8.61929 7.5 7.5 8.61929 7.5 10C7.5 11.3807 8.61929 12.5 10 12.5Z" fill="currentColor" />
                              <path fill-rule="evenodd" clip-rule="evenodd" d="M0.664255 10.5904C0.517392 10.2087 0.517518 9.78563 0.66461 9.40408C2.10878 5.65788 5.7433 3 9.99859 3C14.256 3 17.892 5.66051 19.3347 9.40962C19.4816 9.79127 19.4814 10.2144 19.3344 10.5959C17.8902 14.3421 14.2557 17 10.0004 17C5.74298 17 2.10698 14.3395 0.664255 10.5904ZM14.0004 10C14.0004 12.2091 12.2095 14 10.0004 14C7.79123 14 6.00037 12.2091 6.00037 10C6.00037 7.79086 7.79123 6 10.0004 6C12.2095 6 14.0004 7.79086 14.0004 10Z" fill="currentColor" />
                           </svg>
                        </div>
                     </label>
                  </div>
                  <div className="text-white max-lg:text-sm LexendFontLight underline underline-offset-2 decoration-1 leading-normal cursor-pointer">Forgot Password?</div>
                  <div className="flex flex-col items-center gap-6 w-full">
                     <div className="max-w-[404px] w-full text-center LexendFontRegular px-6 py-3.5 bg-green-60 rounded-[63px] cursor-pointer">
                        <div className="text-grey-15 text-sm leading-[1.5]">Login</div>
                     </div>
                     <div className="max-w-[404px] w-full text-center LexendFontRegular px-6 py-3.5 bg-grey-15 rounded-[63px] cursor-pointer border border-grey-20">
                        <div className="text-white text-sm leading-[1.5]">Sign Up</div>
                     </div>
                     <div className="flex flex-col items-center gap-6 w-full">
                        <div className="max-w-[404px] w-full h-[21px] justify-start items-center gap-4 inline-flex">
                           <div className="grow shrink basis-0 h-[0px] border border-grey-70"></div>
                           <div className="text-center text-grey-70 text-sm font-normal LexendFontRegular leading-[21px]">Or Continue with</div>
                           <div className="grow shrink basis-0 h-[0px] border border-grey-70"></div>
                        </div>
                        <div className="flex justify-center gap-5">
                           <div className="w-[68px] h-[68px] rounded-full p-2 cursor-pointer group" style={{ background: 'linear-gradient(180deg, rgba(202, 255, 51, 0.05) 0%, rgba(202, 255, 51, 0.00) 100%)' }}>
                              <svg className="group-hover:rotate-[360deg] transition-all duration-500" width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                                 <rect width="52" height="52" rx="26" fill="url(#paint0_linear_116_11494)" fill-opacity="0.1" />
                                 <rect x="0.5" y="0.5" width="51" height="51" rx="25.5" stroke="url(#paint1_linear_116_11494)" stroke-opacity="0.2" />
                                 <g clip-path="url(#clip0_116_11494)">
                                    <path d="M37.7643 26.2765C37.7643 25.4608 37.6982 24.6406 37.5571 23.8381H26.2383V28.4591H32.72C32.451 29.9495 31.5868 31.2679 30.3213 32.1056V35.104H34.1883C36.4591 33.014 37.7643 29.9274 37.7643 26.2765Z" fill="#CAFF33" />
                                    <path d="M26.2391 38.0008C29.4756 38.0008 32.205 36.9382 34.1936 35.1039L30.3266 32.1055C29.2507 32.8375 27.8618 33.252 26.2435 33.252C23.1129 33.252 20.4585 31.1399 19.5061 28.3003H15.5156V31.3912C17.5527 35.4434 21.7019 38.0008 26.2391 38.0008Z" fill="#CAFF33" />
                                    <path d="M19.5008 28.3002C18.9982 26.8099 18.9982 25.196 19.5008 23.7057V20.6147H15.5148C13.8128 24.0055 13.8128 28.0004 15.5148 31.3912L19.5008 28.3002Z" fill="#CAFF33" />
                                    <path d="M26.2391 18.7497C27.9499 18.7232 29.6034 19.367 30.8425 20.5487L34.2685 17.1226C32.0991 15.0855 29.2198 13.9655 26.2391 14.0008C21.7019 14.0008 17.5527 16.5582 15.5156 20.6148L19.5017 23.7058C20.4497 20.8617 23.1085 18.7497 26.2391 18.7497Z" fill="#CAFF33" />
                                 </g>
                                 <defs>
                                    <linearGradient id="paint0_linear_116_11494" x1="26" y1="-34.4324" x2="26" y2="134.216" gradientUnits="userSpaceOnUse">
                                       <stop stop-color="#CAFF33" />
                                       <stop offset="0.467671" stop-color="#CAFF33" stop-opacity="0" />
                                    </linearGradient>
                                    <linearGradient id="paint1_linear_116_11494" x1="26" y1="-90.2973" x2="26" y2="99.0811" gradientUnits="userSpaceOnUse">
                                       <stop stop-color="#CAFF33" />
                                       <stop offset="0.716291" stop-color="#CAFF33" stop-opacity="0" />
                                    </linearGradient>
                                    <clipPath id="clip0_116_11494">
                                       <rect width="24" height="24" fill="white" transform="translate(14 14)" />
                                    </clipPath>
                                 </defs>
                              </svg>
                           </div>
                           <div className="w-[68px] h-[68px] rounded-full p-2 cursor-pointer group" style={{ background: 'linear-gradient(180deg, rgba(202, 255, 51, 0.05) 0%, rgba(202, 255, 51, 0.00) 100%)' }}>
                              <svg className="group-hover:rotate-[360deg] transition-all duration-500" width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                                 <rect width="52" height="52" rx="26" fill="url(#paint0_linear_116_11501)" fill-opacity="0.1" />
                                 <rect x="0.5" y="0.5" width="51" height="51" rx="25.5" stroke="url(#paint1_linear_116_11501)" stroke-opacity="0.2" />
                                 <g clip-path="url(#clip0_116_11501)">
                                    <path d="M38 26C38 19.3726 32.6274 14 26 14C19.3726 14 14 19.3726 14 26C14 31.9895 18.3882 36.954 24.125 37.8542V29.4688H21.0781V26H24.125V23.3563C24.125 20.3488 25.9166 18.6875 28.6576 18.6875C29.9701 18.6875 31.3438 18.9219 31.3438 18.9219V21.875H29.8306C28.34 21.875 27.875 22.8001 27.875 23.75V26H31.2031L30.6711 29.4688H27.875V37.8542C33.6118 36.954 38 31.9895 38 26Z" fill="#CAFF33" />
                                    <path d="M30.6711 29.4688L31.2031 26H27.875V23.75C27.875 22.801 28.34 21.875 29.8306 21.875H31.3438V18.9219C31.3438 18.9219 29.9705 18.6875 28.6576 18.6875C25.9166 18.6875 24.125 20.3488 24.125 23.3563V26H21.0781V29.4688H24.125V37.8542C25.3674 38.0486 26.6326 38.0486 27.875 37.8542V29.4688H30.6711Z" fill="#1C1C1C" />
                                 </g>
                                 <defs>
                                    <linearGradient id="paint0_linear_116_11501" x1="26" y1="-34.4324" x2="26" y2="134.216" gradientUnits="userSpaceOnUse">
                                       <stop stop-color="#CAFF33" />
                                       <stop offset="0.467671" stop-color="#CAFF33" stop-opacity="0" />
                                    </linearGradient>
                                    <linearGradient id="paint1_linear_116_11501" x1="26" y1="-90.2973" x2="26" y2="99.0811" gradientUnits="userSpaceOnUse">
                                       <stop stop-color="#CAFF33" />
                                       <stop offset="0.716291" stop-color="#CAFF33" stop-opacity="0" />
                                    </linearGradient>
                                    <clipPath id="clip0_116_11501">
                                       <rect width="24" height="24" fill="white" transform="translate(14 14)" />
                                    </clipPath>
                                 </defs>
                              </svg>
                           </div>
                           <div className="w-[68px] h-[68px] rounded-full p-2 cursor-pointer group" style={{ background: 'linear-gradient(180deg, rgba(202, 255, 51, 0.05) 0%, rgba(202, 255, 51, 0.00) 100%)' }}>
                              <svg className="group-hover:rotate-[360deg] transition-all duration-500" width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                                 <rect width="52" height="52" rx="26" fill="url(#paint0_linear_116_11506)" fill-opacity="0.1" />
                                 <rect x="0.5" y="0.5" width="51" height="51" rx="25.5" stroke="url(#paint1_linear_116_11506)" stroke-opacity="0.2" />
                                 <path d="M34.8418 31.1449C34.5091 31.9135 34.1153 32.6211 33.659 33.2715C33.0371 34.1583 32.5278 34.7721 32.1354 35.113C31.527 35.6724 30.8752 35.959 30.1772 35.9753C29.6761 35.9753 29.0718 35.8327 28.3684 35.5434C27.6626 35.2555 27.014 35.113 26.421 35.113C25.7991 35.113 25.132 35.2555 24.4185 35.5434C23.704 35.8327 23.1283 35.9834 22.6882 35.9984C22.0188 36.0269 21.3517 35.7322 20.6857 35.113C20.2607 34.7422 19.729 34.1067 19.0921 33.2063C18.4088 32.2449 17.847 31.13 17.4069 29.8589C16.9355 28.486 16.6992 27.1565 16.6992 25.8694C16.6992 24.3951 17.0178 23.1235 17.6559 22.0578C18.1574 21.2019 18.8246 20.5267 19.6596 20.0311C20.4946 19.5354 21.3969 19.2828 22.3685 19.2666C22.9002 19.2666 23.5974 19.4311 24.4637 19.7543C25.3277 20.0786 25.8824 20.243 26.1256 20.243C26.3075 20.243 26.9237 20.0507 27.9684 19.6674C28.9564 19.3119 29.7902 19.1647 30.4732 19.2226C32.3241 19.372 33.7147 20.1017 34.6395 21.4162C32.9841 22.4192 32.1653 23.824 32.1816 25.6262C32.1965 27.03 32.7057 28.1981 33.7066 29.1256C34.1601 29.5561 34.6667 29.8888 35.2302 30.1251C35.108 30.4795 34.979 30.819 34.8418 31.1449ZM30.5968 14.4404C30.5968 15.5406 30.1948 16.5679 29.3936 17.5188C28.4267 18.6492 27.2572 19.3024 25.989 19.1993C25.9729 19.0673 25.9635 18.9284 25.9635 18.7824C25.9635 17.7261 26.4233 16.5958 27.2399 15.6715C27.6475 15.2036 28.166 14.8145 28.7948 14.5041C29.4221 14.1983 30.0156 14.0292 30.5737 14.0002C30.59 14.1473 30.5968 14.2944 30.5968 14.4404V14.4404Z" fill="#CAFF33" />
                                 <defs>
                                    <linearGradient id="paint0_linear_116_11506" x1="26" y1="-34.4324" x2="26" y2="134.216" gradientUnits="userSpaceOnUse">
                                       <stop stop-color="#CAFF33" />
                                       <stop offset="0.467671" stop-color="#CAFF33" stop-opacity="0" />
                                    </linearGradient>
                                    <linearGradient id="paint1_linear_116_11506" x1="26" y1="-90.2973" x2="26" y2="99.0811" gradientUnits="userSpaceOnUse">
                                       <stop stop-color="#CAFF33" />
                                       <stop offset="0.716291" stop-color="#CAFF33" stop-opacity="0" />
                                    </linearGradient>
                                 </defs>
                              </svg>
                           </div>
                        </div>
                     </div>
                  </div>
               </form>
            </div>
         </div>
      </div>
   )
}

export default SignUp