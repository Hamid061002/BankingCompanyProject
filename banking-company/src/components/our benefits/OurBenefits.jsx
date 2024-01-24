import './OurBenefits.css'
function OurBenefits() {
   return (
      <section className="flex flex-col gap-[60px] px-4 lg:px-20">
         <div className="flex flex-col items-center lg:items-start gap-[10px] lg:pe-[250px]">
            <div className="text-[28px] lg:text-[38px] LexendFontRegular text-white leading-[42px] lg:leading-[57px] transition-all duration-300">
               Our <span className="text-green-60">Benefits</span>
            </div>
            <div className="text-grey-70 leading-5 lg:leading-6 LexendFontLight text-sm lg:text-base text-center lg:text-start">
               At YourBank, we value our employees and are dedicated to their well-being and success. We offer a comprehensive range of benefits designed to support their personal and professional growth.
            </div>
         </div>
         <div className="flex flex-col gap-6 lg:gap-[30px]">
            <div className="flex max-lg:flex-col gap-6 lg:gap-[30px]">
               <div className="flex flex-col gap-5 lg:gap-6 p-6 lg:p-10 bgOurBenefits rounded-t-[40px] rounded-b-[14px] lg:rounded-tr-[14px] lg:rounded-br-[40px] bg-cover bg-no-repeat w-full hover:bg-green-60 hover:bg-opacity-[7%] transition-all duration-700 group">
                  <div className="flex items-center gap-[10px] lg:gap-[14px]">
                     <div className="iconOurBenefits p-2 group-hover:scale-150 group-hover:rotate-[360deg] transition-all duration-700">
                        {/* <svg className=" transition-all duration-700" width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <rect width="60" height="60" rx="30" fill="url(#paint0_linear_113_7202)" fill-opacity="0.1" />
                           <rect x="0.5" y="0.5" width="59" height="59" rx="29.5" stroke="url(#paint1_linear_113_7202)" stroke-opacity="0.2" />
                           <path fill-rule="evenodd" clip-rule="evenodd" d="M18.625 18.625C18.1418 18.625 17.75 19.0168 17.75 19.5C17.75 19.9832 18.1418 20.375 18.625 20.375H19.5V32.625C19.5 34.558 21.067 36.125 23 36.125H24.411L23.0449 40.2233C22.8921 40.6818 23.1399 41.1773 23.5983 41.3301C24.0568 41.4829 24.5523 41.2351 24.7051 40.7767L25.089 39.625H34.911L35.2949 40.7767C35.4477 41.2351 35.9432 41.4829 36.4017 41.3301C36.8601 41.1773 37.1079 40.6818 36.9551 40.2233L35.589 36.125H37C38.933 36.125 40.5 34.558 40.5 32.625V20.375H41.375C41.8582 20.375 42.25 19.9832 42.25 19.5C42.25 19.0168 41.8582 18.625 41.375 18.625H18.625ZM25.6723 37.875L26.2557 36.125H33.7443L34.3277 37.875H25.6723ZM34.375 23.875C34.375 23.3918 33.9832 23 33.5 23C33.0168 23 32.625 23.3918 32.625 23.875V30.875C32.625 31.3583 33.0168 31.75 33.5 31.75C33.9832 31.75 34.375 31.3583 34.375 30.875V23.875ZM30.875 26.5C30.875 26.0168 30.4832 25.625 30 25.625C29.5168 25.625 29.125 26.0168 29.125 26.5V30.875C29.125 31.3583 29.5168 31.75 30 31.75C30.4832 31.75 30.875 31.3583 30.875 30.875V26.5ZM27.375 29.125C27.375 28.6418 26.9832 28.25 26.5 28.25C26.0168 28.25 25.625 28.6418 25.625 29.125V30.875C25.625 31.3583 26.0168 31.75 26.5 31.75C26.9832 31.75 27.375 31.3583 27.375 30.875V29.125Z" fill="#CAFF33" />
                           <defs>
                              <linearGradient id="paint0_linear_113_7202" x1="30" y1="-39.7297" x2="30" y2="154.865" gradientUnits="userSpaceOnUse">
                                 <stop stop-color="#CAFF33" />
                                 <stop offset="0.467671" stop-color="#CAFF33" stop-opacity="0" />
                              </linearGradient>
                              <linearGradient id="paint1_linear_113_7202" x1="30" y1="-104.189" x2="30" y2="114.324" gradientUnits="userSpaceOnUse">
                                 <stop stop-color="#CAFF33" />
                                 <stop offset="0.716291" stop-color="#CAFF33" stop-opacity="0" />
                              </linearGradient>
                           </defs>
                        </svg> */}
                        <div className="iconOurBenefitsChild p-4">
                           <svg className="group-hover:rotate-[-360deg] transition-all duration-700" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                              <path fill-rule="evenodd" clip-rule="evenodd" d="M2.625 2.625C2.14175 2.625 1.75 3.01675 1.75 3.5C1.75 3.98325 2.14175 4.375 2.625 4.375H3.5V16.625C3.5 18.558 5.067 20.125 7 20.125H8.411L7.0449 24.2233C6.89209 24.6818 7.13985 25.1773 7.5983 25.3301C8.05675 25.4829 8.55228 25.2351 8.7051 24.7767L9.089 23.625H18.911L19.2949 24.7767C19.4477 25.2351 19.9432 25.4829 20.4017 25.3301C20.8601 25.1773 21.1079 24.6818 20.9551 24.2233L19.589 20.125H21C22.933 20.125 24.5 18.558 24.5 16.625V4.375H25.375C25.8582 4.375 26.25 3.98325 26.25 3.5C26.25 3.01675 25.8582 2.625 25.375 2.625H2.625ZM9.67233 21.875L10.2557 20.125H17.7443L18.3277 21.875H9.67233ZM18.375 7.875C18.375 7.39175 17.9832 7 17.5 7C17.0168 7 16.625 7.39175 16.625 7.875V14.875C16.625 15.3583 17.0168 15.75 17.5 15.75C17.9832 15.75 18.375 15.3583 18.375 14.875V7.875ZM14.875 10.5C14.875 10.0168 14.4832 9.625 14 9.625C13.5168 9.625 13.125 10.0168 13.125 10.5V14.875C13.125 15.3583 13.5168 15.75 14 15.75C14.4832 15.75 14.875 15.3583 14.875 14.875V10.5ZM11.375 13.125C11.375 12.6418 10.9832 12.25 10.5 12.25C10.0168 12.25 9.625 12.6418 9.625 13.125V14.875C9.625 15.3583 10.0168 15.75 10.5 15.75C10.9832 15.75 11.375 15.3583 11.375 14.875V13.125Z" fill="#CAFF33" />
                           </svg>
                        </div>
                     </div>
                     <div className="LexxendFontRegular text-white text-lg lg:text-xl leading-normal group-hover:translate-x-5 transition-all duration-700">Competitive Compensation</div>
                  </div>
                  <div className="LexenFOntLight text-grey-70 max-lg:texsm group-hover:-translate-x-4 group-hover:translate-y-2 group-hover:opacity-75 group-hover:scale-95 transition-all duration-700">
                     We provide a competitive salary package that recognizes the skills and expertise of our employees. YourBank believes in rewarding exceptional performance and offering opportunities for financial growth.
                  </div>
               </div>
               <div className="flex-none">
                  <svg className="max-lg:hidden" width="1" height="276" viewBox="0 0 1 276" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <line x1="0.5" y1="2.18557e-08" x2="0.499988" y2="276" stroke="#262626" stroke-dasharray="10 10" />
                  </svg>
                  <div className="w-full overflow-x-hidden lg:hidden">
                     <svg width="1480" height="1" viewBox="0 0 1480 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line y1="0.5" x2="1480" y2="0.5" stroke="#262626" stroke-dasharray="10 10" />
                     </svg>
                  </div>
               </div>
               <div className="flex flex-col gap-5 lg:gap-6 p-6 lg:p-10 bgOurBenefits2 rounded-t-[40px] rounded-b-[14px] lg:rounded-tl-[14px] lg:rounded-bl-[40px] bg-cover bg-no-repeat w-full hover:bg-green-60 hover:bg-opacity-[7%] transition-all duration-700 group">
                  <div className="flex items-center gap-[10px] lg:gap-[14px]">
                     <div className="iconOurBenefits p-2 group-hover:scale-150 group-hover:rotate-[360deg] transition-all duration-700">
                        {/* <svg className=" transition-all duration-700" width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <rect width="60" height="60" rx="30" fill="url(#paint0_linear_113_7202)" fill-opacity="0.1" />
                           <rect x="0.5" y="0.5" width="59" height="59" rx="29.5" stroke="url(#paint1_linear_113_7202)" stroke-opacity="0.2" />
                           <path fill-rule="evenodd" clip-rule="evenodd" d="M18.625 18.625C18.1418 18.625 17.75 19.0168 17.75 19.5C17.75 19.9832 18.1418 20.375 18.625 20.375H19.5V32.625C19.5 34.558 21.067 36.125 23 36.125H24.411L23.0449 40.2233C22.8921 40.6818 23.1399 41.1773 23.5983 41.3301C24.0568 41.4829 24.5523 41.2351 24.7051 40.7767L25.089 39.625H34.911L35.2949 40.7767C35.4477 41.2351 35.9432 41.4829 36.4017 41.3301C36.8601 41.1773 37.1079 40.6818 36.9551 40.2233L35.589 36.125H37C38.933 36.125 40.5 34.558 40.5 32.625V20.375H41.375C41.8582 20.375 42.25 19.9832 42.25 19.5C42.25 19.0168 41.8582 18.625 41.375 18.625H18.625ZM25.6723 37.875L26.2557 36.125H33.7443L34.3277 37.875H25.6723ZM34.375 23.875C34.375 23.3918 33.9832 23 33.5 23C33.0168 23 32.625 23.3918 32.625 23.875V30.875C32.625 31.3583 33.0168 31.75 33.5 31.75C33.9832 31.75 34.375 31.3583 34.375 30.875V23.875ZM30.875 26.5C30.875 26.0168 30.4832 25.625 30 25.625C29.5168 25.625 29.125 26.0168 29.125 26.5V30.875C29.125 31.3583 29.5168 31.75 30 31.75C30.4832 31.75 30.875 31.3583 30.875 30.875V26.5ZM27.375 29.125C27.375 28.6418 26.9832 28.25 26.5 28.25C26.0168 28.25 25.625 28.6418 25.625 29.125V30.875C25.625 31.3583 26.0168 31.75 26.5 31.75C26.9832 31.75 27.375 31.3583 27.375 30.875V29.125Z" fill="#CAFF33" />
                           <defs>
                              <linearGradient id="paint0_linear_113_7202" x1="30" y1="-39.7297" x2="30" y2="154.865" gradientUnits="userSpaceOnUse">
                                 <stop stop-color="#CAFF33" />
                                 <stop offset="0.467671" stop-color="#CAFF33" stop-opacity="0" />
                              </linearGradient>
                              <linearGradient id="paint1_linear_113_7202" x1="30" y1="-104.189" x2="30" y2="114.324" gradientUnits="userSpaceOnUse">
                                 <stop stop-color="#CAFF33" />
                                 <stop offset="0.716291" stop-color="#CAFF33" stop-opacity="0" />
                              </linearGradient>
                           </defs>
                        </svg> */}
                        <div className="iconOurBenefitsChild p-4">
                           <svg className="group-hover:rotate-[-360deg] transition-all duration-700" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                              <path d="M14 0.875C8.68426 0.875 4.375 5.18426 4.375 10.5C4.375 14.0592 6.30737 17.1661 9.17602 18.8305C9.97572 19.2945 10.4765 20.0065 10.4992 20.723C10.5117 21.1182 10.7877 21.4559 11.1725 21.5469C11.5824 21.6437 12.0002 21.72 12.4245 21.7745C12.8021 21.823 13.1252 21.5206 13.1252 21.14V15.7021C12.7527 15.6609 12.3877 15.5937 12.0321 15.5021C11.5641 15.3817 11.2824 14.9046 11.4028 14.4367C11.5233 13.9687 12.0003 13.6869 12.4683 13.8074C12.9569 13.9331 13.4701 14.0002 14.0002 14.0002C14.5304 14.0002 15.0435 13.9331 15.5321 13.8074C16.0001 13.6869 16.4771 13.9687 16.5976 14.4367C16.718 14.9046 16.4363 15.3817 15.9683 15.5021C15.6127 15.5937 15.2477 15.6609 14.8752 15.7021V21.1399C14.8752 21.5206 15.1984 21.823 15.5759 21.7745C16.0001 21.72 16.4177 21.6437 16.8275 21.5469C17.2123 21.4559 17.4883 21.1182 17.5008 20.723C17.5235 20.0065 18.0243 19.2945 18.824 18.8305C21.6926 17.1661 23.625 14.0592 23.625 10.5C23.625 5.18426 19.3157 0.875 14 0.875Z" fill="#CAFF33" />
                              <path fill-rule="evenodd" clip-rule="evenodd" d="M10.5153 23.2163C10.6054 22.7415 11.0633 22.4296 11.5381 22.5197C12.3349 22.6708 13.1578 22.75 14 22.75C14.8422 22.75 15.6651 22.6708 16.4619 22.5197C16.9367 22.4296 17.3946 22.7415 17.4847 23.2163C17.5747 23.691 17.2629 24.1489 16.7881 24.239C15.8843 24.4104 14.9522 24.5 14 24.5C13.0478 24.5 12.1157 24.4104 11.2119 24.239C10.7371 24.1489 10.4253 23.691 10.5153 23.2163Z" fill="#CAFF33" />
                              <path fill-rule="evenodd" clip-rule="evenodd" d="M11.3797 26.068C11.43 25.5873 11.8604 25.2385 12.341 25.2887C12.886 25.3458 13.4394 25.375 14 25.375C14.5606 25.375 15.114 25.3458 15.659 25.2887C16.1396 25.2385 16.57 25.5873 16.6203 26.068C16.6705 26.5486 16.3217 26.979 15.841 27.0292C15.2357 27.0926 14.6215 27.125 14 27.125C13.3785 27.125 12.7643 27.0926 12.159 27.0292C11.6783 26.979 11.3295 26.5486 11.3797 26.068Z" fill="#CAFF33" />
                           </svg>
                        </div>
                     </div>
                     <div className="LexxendFontRegular text-white text-lg lg:text-xl leading-normal group-hover:translate-x-5 transition-all duration-700">Health and Wellness</div>
                  </div>
                  <div className="LexenFOntLight text-grey-70 max-lg:texsm group-hover:-translate-x-4 group-hover:translate-y-2 group-hover:opacity-75 group-hover:scale-95 transition-all duration-700">
                     We prioritize the health and well-being of our employees by providing comprehensive medical, dental, and vision insurance plans. We also offer wellness programs, gym memberships, and resources to support a healthy lifestyle.
                  </div>
               </div>
            </div>
            <div className="flex-none w-full overflow-x-hidden">
               <svg width="1480" height="1" viewBox="0 0 1480 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <line y1="0.5" x2="1480" y2="0.5" stroke="#262626" stroke-dasharray="10 10" />
               </svg>
            </div>
            <div className="flex max-lg:flex-col gap-6 lg:gap-[30px]">
               <div className="flex flex-col gap-5 lg:gap-6 p-6 lg:p-10 bgOurBenefits2 rounded-t-[40px] rounded-b-[14px] lg:rounded-tl-[14px] lg:rounded-bl-[40px] bg-cover bg-no-repeat w-full hover:bg-green-60 hover:bg-opacity-[7%] transition-all duration-700 group">
                  <div className="flex items-center gap-[10px] lg:gap-[14px]">
                     <div className="iconOurBenefits p-2 group-hover:scale-150 group-hover:rotate-[360deg] transition-all duration-700">
                        {/* <svg className=" transition-all duration-700" width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <rect width="60" height="60" rx="30" fill="url(#paint0_linear_113_7202)" fill-opacity="0.1" />
                           <rect x="0.5" y="0.5" width="59" height="59" rx="29.5" stroke="url(#paint1_linear_113_7202)" stroke-opacity="0.2" />
                           <path fill-rule="evenodd" clip-rule="evenodd" d="M18.625 18.625C18.1418 18.625 17.75 19.0168 17.75 19.5C17.75 19.9832 18.1418 20.375 18.625 20.375H19.5V32.625C19.5 34.558 21.067 36.125 23 36.125H24.411L23.0449 40.2233C22.8921 40.6818 23.1399 41.1773 23.5983 41.3301C24.0568 41.4829 24.5523 41.2351 24.7051 40.7767L25.089 39.625H34.911L35.2949 40.7767C35.4477 41.2351 35.9432 41.4829 36.4017 41.3301C36.8601 41.1773 37.1079 40.6818 36.9551 40.2233L35.589 36.125H37C38.933 36.125 40.5 34.558 40.5 32.625V20.375H41.375C41.8582 20.375 42.25 19.9832 42.25 19.5C42.25 19.0168 41.8582 18.625 41.375 18.625H18.625ZM25.6723 37.875L26.2557 36.125H33.7443L34.3277 37.875H25.6723ZM34.375 23.875C34.375 23.3918 33.9832 23 33.5 23C33.0168 23 32.625 23.3918 32.625 23.875V30.875C32.625 31.3583 33.0168 31.75 33.5 31.75C33.9832 31.75 34.375 31.3583 34.375 30.875V23.875ZM30.875 26.5C30.875 26.0168 30.4832 25.625 30 25.625C29.5168 25.625 29.125 26.0168 29.125 26.5V30.875C29.125 31.3583 29.5168 31.75 30 31.75C30.4832 31.75 30.875 31.3583 30.875 30.875V26.5ZM27.375 29.125C27.375 28.6418 26.9832 28.25 26.5 28.25C26.0168 28.25 25.625 28.6418 25.625 29.125V30.875C25.625 31.3583 26.0168 31.75 26.5 31.75C26.9832 31.75 27.375 31.3583 27.375 30.875V29.125Z" fill="#CAFF33" />
                           <defs>
                              <linearGradient id="paint0_linear_113_7202" x1="30" y1="-39.7297" x2="30" y2="154.865" gradientUnits="userSpaceOnUse">
                                 <stop stop-color="#CAFF33" />
                                 <stop offset="0.467671" stop-color="#CAFF33" stop-opacity="0" />
                              </linearGradient>
                              <linearGradient id="paint1_linear_113_7202" x1="30" y1="-104.189" x2="30" y2="114.324" gradientUnits="userSpaceOnUse">
                                 <stop stop-color="#CAFF33" />
                                 <stop offset="0.716291" stop-color="#CAFF33" stop-opacity="0" />
                              </linearGradient>
                           </defs>
                        </svg> */}
                        <div className="iconOurBenefitsChild p-4">
                           <svg className="group-hover:rotate-[-360deg] transition-all duration-700" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                              <path fill-rule="evenodd" clip-rule="evenodd" d="M8.75 6.125C8.75 4.192 10.317 2.625 12.25 2.625H15.75C17.683 2.625 19.25 4.192 19.25 6.125V6.36414C20.3379 6.46373 21.417 6.59396 22.4864 6.75397C24.1828 7.00779 25.375 8.48357 25.375 10.1566V13.6954C25.375 15.1084 24.5191 16.4398 23.116 16.9063C20.2494 17.8593 17.184 18.375 14 18.375C10.816 18.375 7.75066 17.8593 4.88398 16.9062C3.48091 16.4398 2.625 15.1083 2.625 13.6953V10.1566C2.625 8.48357 3.81723 7.0078 5.51362 6.75397C6.58304 6.59396 7.66212 6.46373 8.75 6.36414V6.125ZM17.5 6.125V6.23096C16.3423 6.16066 15.1753 6.125 14 6.125C12.8248 6.125 11.6577 6.16066 10.5 6.23096V6.125C10.5 5.1585 11.2835 4.375 12.25 4.375H15.75C16.7165 4.375 17.5 5.1585 17.5 6.125ZM14 15.75C14.4832 15.75 14.875 15.3583 14.875 14.875C14.875 14.3918 14.4832 14 14 14C13.5168 14 13.125 14.3918 13.125 14.875C13.125 15.3583 13.5168 15.75 14 15.75Z" fill="#CAFF33" />
                              <path d="M3.5 21.4666V18.2046C3.76021 18.3473 4.0378 18.4691 4.33187 18.5669C7.37435 19.5784 10.626 20.125 14 20.125C17.374 20.125 20.6257 19.5784 23.6681 18.5669C23.9622 18.4691 24.2398 18.3473 24.5 18.2046V21.4666C24.5 23.1605 23.2782 24.6487 21.5563 24.8773C19.0838 25.2056 16.5615 25.375 14 25.375C11.4385 25.375 8.91621 25.2056 6.44366 24.8773C4.72178 24.6487 3.5 23.1605 3.5 21.4666Z" fill="#CAFF33" />
                           </svg>
                        </div>
                     </div>
                     <div className="LexxendFontRegular text-white text-lg lg:text-xl leading-normal group-hover:translate-x-5 transition-all duration-700">Retirement Planning</div>
                  </div>
                  <div className="LexenFOntLight text-grey-70 max-lg:texsm group-hover:-translate-x-4 group-hover:translate-y-2 group-hover:opacity-75 group-hover:scale-95 transition-all duration-700">
                     YourBank is committed to helping employees plan for their future. We offer a retirement savings plan with a generous employer match to help them build a secure financial foundation for the long term.
                  </div>
               </div>
               <div className="flex-none">
                  <svg className="max-lg:hidden" width="1" height="276" viewBox="0 0 1 276" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <line x1="0.5" y1="2.18557e-08" x2="0.499988" y2="276" stroke="#262626" stroke-dasharray="10 10" />
                  </svg>
                  <div className="w-full overflow-x-hidden lg:hidden">
                     <svg width="1480" height="1" viewBox="0 0 1480 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line y1="0.5" x2="1480" y2="0.5" stroke="#262626" stroke-dasharray="10 10" />
                     </svg>
                  </div>
               </div>
               <div className="flex flex-col gap-5 lg:gap-6 p-6 lg:p-10 bgOurBenefits rounded-t-[40px] rounded-b-[14px] lg:rounded-tr-[14px] lg:rounded-br-[40px] bg-cover bg-no-repeat w-full hover:bg-green-60 hover:bg-opacity-[7%] transition-all duration-700 group">
                  <div className="flex items-center gap-[10px] lg:gap-[14px]">
                     <div className="iconOurBenefits p-2 group-hover:scale-150 group-hover:rotate-[360deg] transition-all duration-700">
                        {/* <svg className=" transition-all duration-700" width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <rect width="60" height="60" rx="30" fill="url(#paint0_linear_113_7202)" fill-opacity="0.1" />
                           <rect x="0.5" y="0.5" width="59" height="59" rx="29.5" stroke="url(#paint1_linear_113_7202)" stroke-opacity="0.2" />
                           <path fill-rule="evenodd" clip-rule="evenodd" d="M18.625 18.625C18.1418 18.625 17.75 19.0168 17.75 19.5C17.75 19.9832 18.1418 20.375 18.625 20.375H19.5V32.625C19.5 34.558 21.067 36.125 23 36.125H24.411L23.0449 40.2233C22.8921 40.6818 23.1399 41.1773 23.5983 41.3301C24.0568 41.4829 24.5523 41.2351 24.7051 40.7767L25.089 39.625H34.911L35.2949 40.7767C35.4477 41.2351 35.9432 41.4829 36.4017 41.3301C36.8601 41.1773 37.1079 40.6818 36.9551 40.2233L35.589 36.125H37C38.933 36.125 40.5 34.558 40.5 32.625V20.375H41.375C41.8582 20.375 42.25 19.9832 42.25 19.5C42.25 19.0168 41.8582 18.625 41.375 18.625H18.625ZM25.6723 37.875L26.2557 36.125H33.7443L34.3277 37.875H25.6723ZM34.375 23.875C34.375 23.3918 33.9832 23 33.5 23C33.0168 23 32.625 23.3918 32.625 23.875V30.875C32.625 31.3583 33.0168 31.75 33.5 31.75C33.9832 31.75 34.375 31.3583 34.375 30.875V23.875ZM30.875 26.5C30.875 26.0168 30.4832 25.625 30 25.625C29.5168 25.625 29.125 26.0168 29.125 26.5V30.875C29.125 31.3583 29.5168 31.75 30 31.75C30.4832 31.75 30.875 31.3583 30.875 30.875V26.5ZM27.375 29.125C27.375 28.6418 26.9832 28.25 26.5 28.25C26.0168 28.25 25.625 28.6418 25.625 29.125V30.875C25.625 31.3583 26.0168 31.75 26.5 31.75C26.9832 31.75 27.375 31.3583 27.375 30.875V29.125Z" fill="#CAFF33" />
                           <defs>
                              <linearGradient id="paint0_linear_113_7202" x1="30" y1="-39.7297" x2="30" y2="154.865" gradientUnits="userSpaceOnUse">
                                 <stop stop-color="#CAFF33" />
                                 <stop offset="0.467671" stop-color="#CAFF33" stop-opacity="0" />
                              </linearGradient>
                              <linearGradient id="paint1_linear_113_7202" x1="30" y1="-104.189" x2="30" y2="114.324" gradientUnits="userSpaceOnUse">
                                 <stop stop-color="#CAFF33" />
                                 <stop offset="0.716291" stop-color="#CAFF33" stop-opacity="0" />
                              </linearGradient>
                           </defs>
                        </svg> */}
                        <div className="iconOurBenefitsChild p-4">
                           <svg className="group-hover:rotate-[-360deg] transition-all duration-700" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                              <path fill-rule="evenodd" clip-rule="evenodd" d="M1.75 11.4711V13.5625C1.75 14.7706 2.72938 15.75 3.9375 15.75H24.0625C25.2706 15.75 26.25 14.7706 26.25 13.5625V11.4711C26.25 10.6356 25.9511 9.82763 25.4074 9.19328L21.5751 4.72223C20.9101 3.94647 19.9394 3.5 18.9177 3.5H9.08233C8.06059 3.5 7.08987 3.94647 6.42493 4.72223L2.5926 9.19328C2.04887 9.82763 1.75 10.6356 1.75 11.4711ZM9.08233 5.25C8.57146 5.25 8.0861 5.47323 7.75363 5.86111L4.52744 9.625H8.22014C9.39038 9.625 10.4832 10.2099 11.1323 11.1835L11.3238 11.4707C11.6483 11.9576 12.1947 12.25 12.7799 12.25H15.2201C15.8053 12.25 16.3517 11.9576 16.6762 11.4707L16.8677 11.1835C17.5168 10.2099 18.6096 9.625 19.7799 9.625H23.4726L20.2464 5.86111C19.9139 5.47323 19.4285 5.25 18.9177 5.25H9.08233Z" fill="#CAFF33" />
                              <path d="M3.28125 17.5C2.43556 17.5 1.75 18.1856 1.75 19.0312V21C1.75 22.933 3.317 24.5 5.25 24.5H22.75C24.683 24.5 26.25 22.933 26.25 21V19.0312C26.25 18.1856 25.5644 17.5 24.7188 17.5H19.7799C18.6096 17.5 17.5168 18.0849 16.8677 19.0585L16.6762 19.3457C16.3517 19.8326 15.8053 20.125 15.2201 20.125H12.7799C12.1947 20.125 11.6483 19.8326 11.3238 19.3457L11.1323 19.0585C10.4832 18.0849 9.39038 17.5 8.22014 17.5H3.28125Z" fill="#CAFF33" />
                           </svg>
                        </div>
                     </div>
                     <div className="LexxendFontRegular text-white text-lg lg:text-xl leading-normal group-hover:translate-x-5 transition-all duration-700">Work-Life Balance</div>
                  </div>
                  <div className="LexenFOntLight text-grey-70 max-lg:texsm group-hover:-translate-x-4 group-hover:translate-y-2 group-hover:opacity-75 group-hover:scale-95 transition-all duration-700">
                     We understand the importance of maintaining a healthy work-life balance. YourBank offers flexible work arrangements, paid time off, parental leave, and other programs that support employees in managing their personal and professional commitments.
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}

export default OurBenefits