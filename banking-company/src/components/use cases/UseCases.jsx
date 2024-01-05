import './UseCases.css'
function UseCases() {
   return (
      <section className="flex flex-col gap-[60px] px-4 lg:px-20">
         <div className="flex flex-col items-center lg:items-start gap-[10px]">
            <div className="text-[28px] lg:text-[38px] LexendFontRegular text-green-60 leading-[42px] lg:leading-[57px]">Use Cases</div>
            <div className="text-grey-70 leading-5 lg:leading-6 LexendFontLight text-sm lg:text-base text-center lg:text-start">
               At YourBank, we cater to the diverse needs of individuals and businesses alike, offering a wide range of financial solutions
            </div>
         </div>
         <div className="flex flex-col gap-10">
            <div className="flex max-lg:flex-col gap-[30px] lg:gap-[60px]">
               <div className="animateUseCases1 basis-1/2 grid grid-cols-2 gap-[10px] p-5 lg:p-10 bg-grey-11 rounded-[20px] useCaseBgStyleLeft bg-no-repeat">
                  <div className="flex flex-col items-center gap-[14px] rounded-xl p-5 lg:p-6 bg-grey-10 border border-grey-15">
                     <div className="useCaseIconsStyle p-2 w-fit">
                        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <rect width="48" height="48" rx="24" fill="url(#paint0_linear_108_2456)" fill-opacity="0.1" />
                           <rect x="0.5" y="0.5" width="47" height="47" rx="23.5" stroke="url(#paint1_linear_108_2456)" stroke-opacity="0.2" />
                           <g clip-path="url(#clip0_108_2456)">
                              <path d="M26.154 17.5026C26.1804 17.5334 26.1848 17.5422 26.1892 17.5422C26.6247 17.6038 26.827 17.9293 27.0602 18.2548C27.3285 18.6244 27.6496 18.9631 27.9928 19.271C28.8946 20.0848 29.4489 21.0702 29.6336 22.2712C29.9547 24.3739 28.7494 26.5339 26.7698 27.3741C23.7653 28.6498 20.4088 26.7098 20.0613 23.4633C19.8765 21.7345 20.51 20.3048 21.8297 19.1786C22.2564 18.8135 22.6127 18.3912 22.9075 17.9117C22.9602 17.8237 23.057 17.7533 23.1494 17.7093C23.299 17.639 23.4661 17.5994 23.6553 17.5334C23.5937 17.4586 23.5497 17.4058 23.5013 17.353C23.2066 17.0495 22.9119 16.7372 22.6127 16.4424C22.5071 16.3368 22.4588 16.2269 22.4632 16.0773C22.472 15.4526 22.4676 14.8324 22.4676 14.2077C22.4676 13.957 22.7755 13.5566 23.0262 13.5082C23.3122 13.4511 23.6069 13.4203 23.8928 13.3631C23.9764 13.3455 24.0688 13.2927 24.1172 13.2267C24.5351 12.6636 25.2698 12.6592 25.6833 13.2179C25.7405 13.2927 25.8504 13.3499 25.9428 13.3719C26.2068 13.4291 26.4751 13.4599 26.7434 13.5082C27.0118 13.561 27.2977 13.9086 27.2977 14.1813C27.2977 14.8104 27.2933 15.4438 27.3021 16.0729C27.3065 16.2357 27.2537 16.3456 27.1437 16.46C26.8094 16.7987 26.4883 17.1463 26.154 17.5026ZM24.3064 19.9529C24.2932 20.0057 24.28 20.0365 24.2844 20.0628C24.3416 20.3576 24.2052 20.4852 23.9324 20.5951C23.4133 20.8107 23.1802 21.2462 23.1934 21.8049C23.2066 22.3592 23.5057 22.7023 24.0072 22.8826C24.2272 22.9618 24.4559 23.019 24.6759 23.0938C24.8782 23.1598 25.0806 23.2258 25.2742 23.305C25.4369 23.3709 25.5293 23.4985 25.5117 23.6833C25.4941 23.8724 25.3753 23.9824 25.2082 24.0132C25.0366 24.0484 24.8518 24.0792 24.6891 24.0396C24.3723 23.9648 24.0688 23.8372 23.7345 23.7229C23.5849 23.9208 23.4133 24.1452 23.2066 24.4223C23.5189 24.5587 23.7873 24.6995 24.0732 24.7962C24.236 24.849 24.302 24.9194 24.28 25.0866C24.2668 25.2053 24.2756 25.3285 24.2756 25.4649C24.5263 25.4649 24.7375 25.4649 24.9486 25.4649C25.2522 25.4649 25.2654 25.4649 25.2478 25.1526C25.239 24.959 25.2829 24.8534 25.4941 24.827C25.6041 24.8138 25.7141 24.7522 25.8152 24.6951C26.2815 24.4399 26.4751 24.0308 26.4663 23.5117C26.4575 23.019 26.2111 22.6803 25.7712 22.4823C25.5733 22.3943 25.3621 22.3284 25.151 22.258C24.887 22.17 24.6231 22.0908 24.3591 21.994C24.1964 21.9324 24.1304 21.8005 24.1436 21.6245C24.1568 21.4573 24.258 21.343 24.4119 21.3166C24.5967 21.2858 24.7947 21.2682 24.975 21.299C25.195 21.3386 25.4017 21.4397 25.6349 21.5189C25.78 21.2946 25.9296 21.057 26.1056 20.7799C25.9032 20.6875 25.7317 20.5731 25.5469 20.5423C25.2873 20.4984 25.2082 20.3796 25.239 20.1332C25.2478 20.076 25.1686 19.9617 25.1202 19.9573C24.8562 19.9441 24.5791 19.9529 24.3064 19.9529Z" fill="#CAFF33" />
                              <path d="M24.5438 35.1912C23.6068 35.1912 22.6654 35.1648 21.7284 35.2C21.0993 35.222 20.5626 35.0328 20.0567 34.6985C19.3397 34.219 18.6842 33.6735 18.1123 33.0225C17.2677 32.0591 16.4143 31.0957 15.5697 30.1323C14.879 29.3405 15.1914 28.1703 16.1768 27.8492C16.2911 27.8096 16.4231 27.7964 16.5419 27.7964C17.3249 27.792 18.1123 27.7876 18.8954 27.8008C19.0053 27.8008 19.1373 27.858 19.2165 27.9328C19.7532 28.4519 20.2811 28.9841 20.8046 29.5164C20.9101 29.622 21.0069 29.644 21.1565 29.622C21.4732 29.5736 21.7988 29.5296 22.1199 29.5296C23.6024 29.5208 25.0804 29.5252 26.5629 29.5252C27.0688 29.5252 27.4427 29.7848 27.5747 30.2159C27.7771 30.8669 27.302 31.4784 26.5761 31.4828C25.5951 31.4872 24.6097 31.4828 23.6288 31.4828C23.4528 31.4828 23.2768 31.4784 23.1009 31.4828C22.7841 31.4916 22.5774 31.694 22.573 31.9799C22.573 32.2702 22.7797 32.4902 23.0921 32.4902C24.6537 32.4946 26.2154 32.4946 27.7771 32.4902C28.0938 32.4902 28.3226 32.3142 28.5425 32.1031C29.5631 31.1221 30.5837 30.1411 31.6086 29.1645C32.0266 28.7642 32.5808 28.7466 32.9768 29.1029C33.4035 29.49 33.4123 30.1147 32.9812 30.5502C32.5281 31.0121 32.0661 31.4476 31.6086 31.8919C30.5969 32.8729 29.5851 33.8495 28.5777 34.8305C28.3314 35.068 28.0586 35.1912 27.7111 35.1912C26.6553 35.1868 25.5995 35.1912 24.5438 35.1912Z" fill="#CAFF33" />
                              <path d="M19.3089 16.6008C19.7356 17.0275 20.1623 17.4542 20.5802 17.8722C20.3207 18.1317 20.0479 18.4044 19.7752 18.6728C19.3705 18.2549 18.9438 17.815 18.5347 17.3927C18.7766 17.1463 19.0494 16.8648 19.3089 16.6008Z" fill="#CAFF33" />
                              <path d="M30.4169 16.6008C30.6764 16.8604 30.9447 17.1375 31.1955 17.3883C30.7776 17.8062 30.3421 18.2417 29.9198 18.6596C29.6646 18.4044 29.3963 18.1273 29.1279 17.859C29.5458 17.4498 29.9769 17.0275 30.4169 16.6008Z" fill="#CAFF33" />
                              <path d="M31.4283 23.5337C31.4283 23.1598 31.4239 22.8166 31.4327 22.4735C31.4327 22.4295 31.5163 22.3503 31.5603 22.3503C32.097 22.3416 32.6293 22.3416 33.166 22.3503C33.21 22.3503 33.2935 22.4163 33.2935 22.4515C33.3023 22.8079 33.2979 23.1642 33.2979 23.5337C32.6689 23.5337 32.0618 23.5337 31.4283 23.5337Z" fill="#CAFF33" />
                              <path d="M18.2842 23.5469C17.6771 23.5469 17.1096 23.5513 16.5377 23.5425C16.4938 23.5425 16.4234 23.4589 16.419 23.4105C16.4102 23.1026 16.4058 22.7947 16.419 22.4867C16.419 22.4383 16.507 22.3503 16.5553 22.3503C17.0832 22.3416 17.6111 22.3416 18.139 22.3503C18.1874 22.3503 18.2754 22.4207 18.2754 22.4647C18.2886 22.8079 18.2842 23.1598 18.2842 23.5469Z" fill="#CAFF33" />
                           </g>
                           <defs>
                              <linearGradient id="paint0_linear_108_2456" x1="24" y1="-31.7838" x2="24" y2="123.892" gradientUnits="userSpaceOnUse">
                                 <stop stop-color="#CAFF33" />
                                 <stop offset="0.467671" stop-color="#CAFF33" stop-opacity="0" />
                              </linearGradient>
                              <linearGradient id="paint1_linear_108_2456" x1="24" y1="-83.3514" x2="24" y2="91.4595" gradientUnits="userSpaceOnUse">
                                 <stop stop-color="#CAFF33" />
                                 <stop offset="0.716291" stop-color="#CAFF33" stop-opacity="0" />
                              </linearGradient>
                              <clipPath id="clip0_108_2456">
                                 <rect width="18.1021" height="22.4" fill="white" transform="translate(15.2002 12.8)" />
                              </clipPath>
                           </defs>
                        </svg>
                     </div>
                     <div className="text-base text-white LexendFontRegular leading-[1.5] text-center">Managing Personal Finances</div>
                  </div>
                  <div className="flex flex-col items-center gap-[14px] rounded-xl p-5 lg:p-6 bg-grey-10 border border-grey-15">
                     <div className="useCaseIconsStyle p-2 w-fit">
                        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <rect width="48" height="48" rx="24" fill="url(#paint0_linear_108_2469)" fill-opacity="0.1" />
                           <rect x="0.5" y="0.5" width="47" height="47" rx="23.5" stroke="url(#paint1_linear_108_2469)" stroke-opacity="0.2" />
                           <g clip-path="url(#clip0_108_2469)">
                              <path d="M31.7262 23.2147C31.7262 23.813 31.7343 24.4073 31.7222 25.0056C31.7142 25.3284 31.8065 25.6118 31.9752 25.8794C32.4088 26.58 32.9829 27.1665 33.5651 27.7451C33.7819 27.9616 34.0067 28.1663 34.2355 28.367C34.348 28.4654 34.4001 28.5677 34.4001 28.7212C34.3921 29.3786 34.3921 30.0319 34.3961 30.6893C34.4001 31.2364 34.1593 31.6457 33.6574 31.874C33.1435 32.1062 32.6617 32.0078 32.2401 31.6497C31.3689 30.9018 30.5017 30.15 29.6345 29.4022C29.0443 28.8905 28.4581 28.3709 27.8559 27.875C27.6431 27.6979 27.3902 27.568 27.1453 27.4342C26.7839 27.2374 26.3945 27.1311 25.9729 27.1468C25.6678 27.1586 25.3546 27.1626 25.0495 27.139C24.6039 27.1035 24.2867 26.8005 24.2265 26.3832C24.1703 26.0172 24.3911 25.6236 24.7604 25.4819C24.901 25.4268 25.0575 25.4032 25.2101 25.4032C26.3664 25.3953 27.5227 25.3992 28.683 25.3992C29.1166 25.3992 29.2732 25.2457 29.2732 24.8167C29.2732 23.9508 29.2691 23.0848 29.2732 22.2189C29.2772 21.8883 29.1607 21.6285 28.9078 21.4041C27.4504 20.121 26.001 18.83 24.5477 17.539C24.1582 17.1926 24.114 16.6809 24.4393 16.307C24.7604 15.9331 25.2864 15.8976 25.6999 16.2125C27.5588 17.6295 29.4137 19.0465 31.2806 20.4556C31.5897 20.6878 31.7343 20.9712 31.7303 21.3451C31.7222 21.967 31.7262 22.5889 31.7262 23.2147Z" fill="#CAFF33" />
                              <path d="M12.804 29.7643C12.804 29.41 12.808 29.0558 12.8 28.7015C12.796 28.5638 12.8522 28.4732 12.9445 28.3788C13.5508 27.7687 14.149 27.1507 14.7432 26.5288C14.8677 26.3989 14.96 26.2454 15.0684 26.1037C15.3535 25.7219 15.486 25.3047 15.4739 24.8167C15.4498 23.6909 15.4779 22.5613 15.4619 21.4317C15.4538 20.9869 15.6144 20.672 15.9798 20.3965C17.8347 19.011 19.6694 17.6019 21.5123 16.1967C21.8977 15.9015 22.4277 15.9488 22.7408 16.303C23.062 16.6651 23.0339 17.1847 22.6605 17.5232C22.0944 18.0349 21.5203 18.5347 20.9502 19.0425C20.0468 19.8415 19.1435 20.6445 18.2402 21.4435C18.0274 21.6324 17.923 21.8607 17.923 22.1362C17.923 23.0533 17.919 23.9704 17.923 24.8914C17.923 25.2299 18.0996 25.3953 18.4489 25.3953C19.6413 25.3992 20.8297 25.3953 22.0222 25.3992C22.5842 25.3992 22.9777 25.7849 22.9657 26.3045C22.9576 26.702 22.6645 27.0602 22.259 27.1192C22.0181 27.1547 21.7652 27.1704 21.5203 27.1468C20.6973 27.0681 20.0027 27.3633 19.3884 27.8435C18.7621 28.3315 18.1759 28.8747 17.5777 29.3903C16.6984 30.1461 15.8232 30.9096 14.9399 31.6614C14.2253 32.2715 13.1694 32.0039 12.8642 31.134C12.8241 31.0238 12.8121 30.9018 12.808 30.7876C12.8 30.4491 12.804 30.1067 12.804 29.7643Z" fill="#CAFF33" />
                              <path d="M24.1699 24.0295C24.1699 24.2184 24.1699 24.3955 24.1699 24.5884C23.8326 24.5884 23.5115 24.5884 23.1622 24.5884C23.1622 24.4349 23.1581 24.2853 23.1622 24.1358C23.1662 24.0256 23.1341 23.9783 23.0176 23.9508C22.6844 23.872 22.3752 23.7382 22.0862 23.5099C22.2709 23.2698 22.4475 23.0415 22.6081 22.829C22.9132 22.9431 23.1903 23.077 23.4834 23.1439C23.6961 23.1911 23.933 23.1596 24.1538 23.1242C24.3225 23.0966 24.4309 22.9668 24.4429 22.7896C24.459 22.6086 24.3626 22.4826 24.202 22.4196C23.929 22.3173 23.6439 22.2386 23.3669 22.1481C23.1662 22.0811 22.9574 22.0221 22.7607 21.9395C22.299 21.7466 22.0541 21.4042 22.042 20.9003C22.03 20.3729 22.2307 19.9478 22.7125 19.7195C23.0257 19.57 23.2947 19.4597 23.1381 19.0228C23.4793 19.0228 23.7764 19.0189 24.0776 19.0307C24.1097 19.0307 24.1659 19.1291 24.1659 19.1842C24.186 19.5188 24.186 19.5109 24.5031 19.6211C24.6878 19.6841 24.8645 19.7746 25.0652 19.8652C24.8966 20.121 24.7601 20.3454 24.6075 20.5579C24.5834 20.5894 24.4871 20.5855 24.4309 20.5697C24.1659 20.5028 23.9089 20.4162 23.6439 20.365C23.5396 20.3454 23.4191 20.3768 23.3107 20.4044C23.1501 20.4477 23.0417 20.554 23.0297 20.7272C23.0176 20.8964 23.0939 21.0263 23.2505 21.0893C23.4552 21.1719 23.664 21.2349 23.8728 21.3018C24.1016 21.3766 24.3385 21.4317 24.5593 21.5144C25.1977 21.7584 25.4547 22.1441 25.4225 22.7778C25.3904 23.3604 25.0251 23.7933 24.4228 23.9626C24.3506 23.9862 24.2743 24.0059 24.1699 24.0295Z" fill="#CAFF33" />
                           </g>
                           <defs>
                              <linearGradient id="paint0_linear_108_2469" x1="24" y1="-31.7838" x2="24" y2="123.892" gradientUnits="userSpaceOnUse">
                                 <stop stop-color="#CAFF33" />
                                 <stop offset="0.467671" stop-color="#CAFF33" stop-opacity="0" />
                              </linearGradient>
                              <linearGradient id="paint1_linear_108_2469" x1="24" y1="-83.3514" x2="24" y2="91.4595" gradientUnits="userSpaceOnUse">
                                 <stop stop-color="#CAFF33" />
                                 <stop offset="0.716291" stop-color="#CAFF33" stop-opacity="0" />
                              </linearGradient>
                              <clipPath id="clip0_108_2469">
                                 <rect width="21.6" height="16" fill="white" transform="translate(12.7998 16)" />
                              </clipPath>
                           </defs>
                        </svg>
                     </div>
                     <div className="text-base text-white LexendFontRegular leading-[1.5] text-center">Saving for the Future</div>
                  </div>
                  <div className="flex flex-col items-center gap-[14px] rounded-xl p-5 lg:p-6 bg-grey-10 border border-grey-15">
                     <div className="useCaseIconsStyle p-2 w-fit">
                        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <rect width="48" height="48" rx="24" fill="url(#paint0_linear_108_2480)" fill-opacity="0.1" />
                           <rect x="0.5" y="0.5" width="47" height="47" rx="23.5" stroke="url(#paint1_linear_108_2480)" stroke-opacity="0.2" />
                           <path d="M23.5841 14.376C23.836 14.208 24.1642 14.208 24.4161 14.376L33.4161 20.376C33.7608 20.6057 33.8539 21.0714 33.6241 21.416C33.3944 21.7607 32.9287 21.8538 32.5841 21.624L24.0001 15.9014L15.4161 21.624C15.0715 21.8538 14.6058 21.7607 14.376 21.416C14.1463 21.0714 14.2394 20.6057 14.5841 20.376L23.5841 14.376Z" fill="#CAFF33" />
                           <path fill-rule="evenodd" clip-rule="evenodd" d="M32.25 22.3325V32.25H33C33.4142 32.25 33.75 32.5858 33.75 33C33.75 33.4142 33.4142 33.75 33 33.75H15C14.5858 33.75 14.25 33.4142 14.25 33C14.25 32.5858 14.5858 32.25 15 32.25H15.75V22.3325C15.75 21.9632 16.0189 21.6488 16.3837 21.5916C18.8658 21.2021 21.4095 21 24 21C26.5905 21 29.1342 21.2021 31.6163 21.5916C31.9811 21.6488 32.25 21.9632 32.25 22.3325ZM24.75 24.75C24.75 24.3358 24.4142 24 24 24C23.5858 24 23.25 24.3358 23.25 24.75V31.5C23.25 31.9142 23.5858 32.25 24 32.25C24.4142 32.25 24.75 31.9142 24.75 31.5V24.75ZM27.75 24C28.1642 24 28.5 24.3358 28.5 24.75V31.5C28.5 31.9142 28.1642 32.25 27.75 32.25C27.3358 32.25 27 31.9142 27 31.5V24.75C27 24.3358 27.3358 24 27.75 24ZM21 24.75C21 24.3358 20.6642 24 20.25 24C19.8358 24 19.5 24.3358 19.5 24.75V31.5C19.5 31.9142 19.8358 32.25 20.25 32.25C20.6642 32.25 21 31.9142 21 31.5V24.75Z" fill="#CAFF33" />
                           <path d="M24 19.875C24.6213 19.875 25.125 19.3713 25.125 18.75C25.125 18.1287 24.6213 17.625 24 17.625C23.3787 17.625 22.875 18.1287 22.875 18.75C22.875 19.3713 23.3787 19.875 24 19.875Z" fill="#CAFF33" />
                           <defs>
                              <linearGradient id="paint0_linear_108_2480" x1="24" y1="-31.7838" x2="24" y2="123.892" gradientUnits="userSpaceOnUse">
                                 <stop stop-color="#CAFF33" />
                                 <stop offset="0.467671" stop-color="#CAFF33" stop-opacity="0" />
                              </linearGradient>
                              <linearGradient id="paint1_linear_108_2480" x1="24" y1="-83.3514" x2="24" y2="91.4595" gradientUnits="userSpaceOnUse">
                                 <stop stop-color="#CAFF33" />
                                 <stop offset="0.716291" stop-color="#CAFF33" stop-opacity="0" />
                              </linearGradient>
                           </defs>
                        </svg>
                     </div>
                     <div className="text-base text-white LexendFontRegular leading-[1.5] text-center">Homeownership</div>
                  </div>
                  <div className="flex flex-col items-center gap-[14px] rounded-xl p-5 lg:p-6 bg-grey-10 border border-grey-15">
                     <div className="useCaseIconsStyle p-2 w-fit">
                        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <rect width="48" height="48" rx="24" fill="url(#paint0_linear_108_2486)" fill-opacity="0.1" />
                           <rect x="0.5" y="0.5" width="47" height="47" rx="23.5" stroke="url(#paint1_linear_108_2486)" stroke-opacity="0.2" />
                           <path d="M23.25 16.5329C21.7345 15.5628 19.9325 15 18 15C16.8618 15 15.7676 15.1954 14.7501 15.555C14.4504 15.6609 14.25 15.9443 14.25 16.2621V30.5121C14.25 30.7556 14.3682 30.9839 14.567 31.1245C14.7657 31.265 15.0204 31.3004 15.2499 31.2192C16.1091 30.9156 17.0344 30.75 18 30.75C19.995 30.75 21.8232 31.4573 23.25 32.6357V16.5329Z" fill="#CAFF33" />
                           <path d="M24.75 32.6357C26.1768 31.4573 28.005 30.75 30 30.75C30.9656 30.75 31.8909 30.9156 32.7501 31.2192C32.9796 31.3004 33.2343 31.265 33.433 31.1245C33.6318 30.9839 33.75 30.7556 33.75 30.5121V16.2621C33.75 15.9443 33.5496 15.6609 33.2499 15.555C32.2324 15.1954 31.1382 15 30 15C28.0675 15 26.2655 15.5628 24.75 16.5329V32.6357Z" fill="#CAFF33" />
                           <defs>
                              <linearGradient id="paint0_linear_108_2486" x1="24" y1="-31.7838" x2="24" y2="123.892" gradientUnits="userSpaceOnUse">
                                 <stop stop-color="#CAFF33" />
                                 <stop offset="0.467671" stop-color="#CAFF33" stop-opacity="0" />
                              </linearGradient>
                              <linearGradient id="paint1_linear_108_2486" x1="24" y1="-83.3514" x2="24" y2="91.4595" gradientUnits="userSpaceOnUse">
                                 <stop stop-color="#CAFF33" />
                                 <stop offset="0.716291" stop-color="#CAFF33" stop-opacity="0" />
                              </linearGradient>
                           </defs>
                        </svg>
                     </div>
                     <div className="text-base text-white LexendFontRegular leading-[1.5] text-center">Education Funding</div>
                  </div>
               </div>
               <div className="animateUseCases2 basis-1/2 flex flex-col max-lg:items-center gap-[50px] backdrop-blur-[1px] bg-grey-10 bg-opacity-80 shadow-useCaseItemShadow rounded-3xl">
                  <div className="flex flex-col gap-[10px]">
                     <div className="text-xl lg:text-[26px] text-white LexendFontRegular leading-[150%] max-lg:text-center">For Individuals</div>
                     <div className="text-base text-grey-70 leading-[150%] max-lg:text-center">
                        For individuals, our mortgage services pave the way to homeownership, and our flexible personal loans provide vital support during various life milestones. We also prioritize retirement planning, ensuring a financially secure future for our customers
                     </div>
                  </div>
                  <div className="flex flex-col lg:flex-row gap-[30px] lg:gap-[50px]">
                     <div className="flex flex-col gap-[5px]">
                        <div className="text-[40px] text-green-60 leading-[1.5] LexendFontRegular max-lg:text-center percentUseCase">78%</div>
                        <div className="text-[15px] text-grey-70 leading-[1.5] max-lg:text-center">Secure Retirement Planning</div>
                     </div>
                     {/* line between */}
                     <div>
                        <svg className="max-lg:hidden" width="2" height="112" viewBox="0 0 2 112" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <line x1="1.1665" y1="0.5" x2="1.1665" y2="111.5" stroke="#262626" stroke-dasharray="10 10" />
                        </svg>
                        <svg className="lg:hidden w-full" height="1" viewBox="0 0 258 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <line y1="0.5" x2="258" y2="0.5" stroke="#262626" stroke-dasharray="10 10" />
                        </svg>
                     </div>
                     <div className="flex flex-col gap-[5px]">
                        <div className="text-[40px] text-green-60 leading-[1.5] LexendFontRegular max-lg:text-center percentUseCase">63%</div>
                        <div className="text-[15px] text-grey-70 leading-[1.5] max-lg:text-center">Manageable Debt Consolidation</div>
                     </div>
                     {/* line between */}
                     <div>
                        <svg className="max-lg:hidden" width="2" height="112" viewBox="0 0 2 112" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <line x1="1.1665" y1="0.5" x2="1.1665" y2="111.5" stroke="#262626" stroke-dasharray="10 10" />
                        </svg>
                        <svg className="lg:hidden w-full" height="1" viewBox="0 0 258 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <line y1="0.5" x2="258" y2="0.5" stroke="#262626" stroke-dasharray="10 10" />
                        </svg>
                     </div>
                     <div className="flex flex-col gap-[5px]">
                        <div className="text-[40px] text-green-60 leading-[1.5] LexendFontRegular max-lg:text-center percentUseCase">91%</div>
                        <div className="text-[15px] text-grey-70 leading-[1.5] max-lg:text-center">Reducing financial burdens</div>
                     </div>
                  </div>
                  <div className="text-sm text-white LexendFontLight leading-[1.5] py-[14px] px-5 rounded-full bg-grey-11 border border-grey-15 w-fit transition-all duration-300 hover:bg-grey-15 active:scale-95 cursor-pointer">Learn More</div>
               </div>
            </div>
            <div className="flex flex-row-reverse max-lg:flex-col gap-[30px] lg:gap-[60px]">
               <div className="animateUseCases3 basis-1/2 grid grid-cols-2 gap-[10px] p-5 lg:p-10 bg-grey-11 rounded-[20px] useCaseBgStyleRight bg-no-repeat bg-right-top">
                  <div className="flex flex-col items-center gap-[14px] rounded-xl p-5 lg:p-6 bg-grey-10 border border-grey-15">
                     <div className="useCaseIconsStyle p-2 w-fit">
                        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <rect width="48" height="48" rx="24" fill="url(#paint0_linear_108_2532)" fill-opacity="0.1" />
                           <rect x="0.5" y="0.5" width="47" height="47" rx="23.5" stroke="url(#paint1_linear_108_2532)" stroke-opacity="0.2" />
                           <path fill-rule="evenodd" clip-rule="evenodd" d="M15 14.25C14.5858 14.25 14.25 14.5858 14.25 15C14.25 15.4142 14.5858 15.75 15 15.75V32.25H14.25C13.8358 32.25 13.5 32.5858 13.5 33C13.5 33.4142 13.8358 33.75 14.25 33.75H27V15.75C27.4142 15.75 27.75 15.4142 27.75 15C27.75 14.5858 27.4142 14.25 27 14.25H15ZM18.75 31.5V29.25C18.75 28.8358 19.0858 28.5 19.5 28.5H22.5C22.9142 28.5 23.25 28.8358 23.25 29.25V31.5C23.25 31.9142 22.9142 32.25 22.5 32.25H19.5C19.0858 32.25 18.75 31.9142 18.75 31.5ZM18 18.75C18 18.3358 18.3358 18 18.75 18H19.5C19.9142 18 20.25 18.3358 20.25 18.75C20.25 19.1642 19.9142 19.5 19.5 19.5H18.75C18.3358 19.5 18 19.1642 18 18.75ZM18.75 21C18.3358 21 18 21.3358 18 21.75C18 22.1642 18.3358 22.5 18.75 22.5H19.5C19.9142 22.5 20.25 22.1642 20.25 21.75C20.25 21.3358 19.9142 21 19.5 21H18.75ZM18 24.75C18 24.3358 18.3358 24 18.75 24H19.5C19.9142 24 20.25 24.3358 20.25 24.75C20.25 25.1642 19.9142 25.5 19.5 25.5H18.75C18.3358 25.5 18 25.1642 18 24.75ZM22.5 18C22.0858 18 21.75 18.3358 21.75 18.75C21.75 19.1642 22.0858 19.5 22.5 19.5H23.25C23.6642 19.5 24 19.1642 24 18.75C24 18.3358 23.6642 18 23.25 18H22.5ZM21.75 21.75C21.75 21.3358 22.0858 21 22.5 21H23.25C23.6642 21 24 21.3358 24 21.75C24 22.1642 23.6642 22.5 23.25 22.5H22.5C22.0858 22.5 21.75 22.1642 21.75 21.75ZM22.5 24C22.0858 24 21.75 24.3358 21.75 24.75C21.75 25.1642 22.0858 25.5 22.5 25.5H23.25C23.6642 25.5 24 25.1642 24 24.75C24 24.3358 23.6642 24 23.25 24H22.5Z" fill="#CAFF33" />
                           <path fill-rule="evenodd" clip-rule="evenodd" d="M28.5 18.75V33.75H33.75C34.1642 33.75 34.5 33.4142 34.5 33C34.5 32.5858 34.1642 32.25 33.75 32.25H33V20.25C33.4142 20.25 33.75 19.9142 33.75 19.5C33.75 19.0858 33.4142 18.75 33 18.75H28.5ZM30 23.25C30 22.8358 30.3358 22.5 30.75 22.5H30.7575C31.1717 22.5 31.5075 22.8358 31.5075 23.25V23.2575C31.5075 23.6717 31.1717 24.0075 30.7575 24.0075H30.75C30.3358 24.0075 30 23.6717 30 23.2575V23.25ZM30.75 25.5C30.3358 25.5 30 25.8358 30 26.25V26.2575C30 26.6717 30.3358 27.0075 30.75 27.0075H30.7575C31.1717 27.0075 31.5075 26.6717 31.5075 26.2575V26.25C31.5075 25.8358 31.1717 25.5 30.7575 25.5H30.75ZM30 29.25C30 28.8358 30.3358 28.5 30.75 28.5H30.7575C31.1717 28.5 31.5075 28.8358 31.5075 29.25V29.2575C31.5075 29.6717 31.1717 30.0075 30.7575 30.0075H30.75C30.3358 30.0075 30 29.6717 30 29.2575V29.25Z" fill="#CAFF33" />
                           <defs>
                              <linearGradient id="paint0_linear_108_2532" x1="24" y1="-31.7838" x2="24" y2="123.892" gradientUnits="userSpaceOnUse">
                                 <stop stop-color="#CAFF33" />
                                 <stop offset="0.467671" stop-color="#CAFF33" stop-opacity="0" />
                              </linearGradient>
                              <linearGradient id="paint1_linear_108_2532" x1="24" y1="-83.3514" x2="24" y2="91.4595" gradientUnits="userSpaceOnUse">
                                 <stop stop-color="#CAFF33" />
                                 <stop offset="0.716291" stop-color="#CAFF33" stop-opacity="0" />
                              </linearGradient>
                           </defs>
                        </svg>
                     </div>
                     <div className="text-base text-white LexendFontRegular leading-[1.5] text-center">Startups and Entrepreneurs</div>
                  </div>
                  <div className="flex flex-col items-center gap-[14px] rounded-xl p-5 lg:p-6 bg-grey-10 border border-grey-15">
                     <div className="useCaseIconsStyle p-2 w-fit">
                        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <rect width="48" height="48" rx="24" fill="url(#paint0_linear_108_2538)" fill-opacity="0.1" />
                           <rect x="0.5" y="0.5" width="47" height="47" rx="23.5" stroke="url(#paint1_linear_108_2538)" stroke-opacity="0.2" />
                           <path d="M24 19.5C22.7574 19.5 21.75 20.5074 21.75 21.75C21.75 22.9926 22.7574 24 24 24C25.2426 24 26.25 22.9926 26.25 21.75C26.25 20.5074 25.2426 19.5 24 19.5Z" fill="#CAFF33" />
                           <path fill-rule="evenodd" clip-rule="evenodd" d="M13.5 16.875C13.5 15.8395 14.3395 15 15.375 15H32.625C33.6605 15 34.5 15.8395 34.5 16.875V26.625C34.5 27.6605 33.6605 28.5 32.625 28.5H15.375C14.3395 28.5 13.5 27.6605 13.5 26.625V16.875ZM20.25 21.75C20.25 19.6789 21.9289 18 24 18C26.0711 18 27.75 19.6789 27.75 21.75C27.75 23.8211 26.0711 25.5 24 25.5C21.9289 25.5 20.25 23.8211 20.25 21.75ZM30.75 21C30.3358 21 30 21.3358 30 21.75V21.7575C30 22.1717 30.3358 22.5075 30.75 22.5075H30.7575C31.1717 22.5075 31.5075 22.1717 31.5075 21.7575V21.75C31.5075 21.3358 31.1717 21 30.7575 21H30.75ZM16.5 21.75C16.5 21.3358 16.8358 21 17.25 21H17.2575C17.6717 21 18.0075 21.3358 18.0075 21.75V21.7575C18.0075 22.1717 17.6717 22.5075 17.2575 22.5075H17.25C16.8358 22.5075 16.5 22.1717 16.5 21.7575V21.75Z" fill="#CAFF33" />
                           <path d="M14.25 30C13.8358 30 13.5 30.3358 13.5 30.75C13.5 31.1642 13.8358 31.5 14.25 31.5C19.65 31.5 24.8802 32.2222 29.8498 33.5749C31.0404 33.899 32.25 33.0168 32.25 31.7551V30.75C32.25 30.3358 31.9142 30 31.5 30H14.25Z" fill="#CAFF33" />
                           <defs>
                              <linearGradient id="paint0_linear_108_2538" x1="24" y1="-31.7838" x2="24" y2="123.892" gradientUnits="userSpaceOnUse">
                                 <stop stop-color="#CAFF33" />
                                 <stop offset="0.467671" stop-color="#CAFF33" stop-opacity="0" />
                              </linearGradient>
                              <linearGradient id="paint1_linear_108_2538" x1="24" y1="-83.3514" x2="24" y2="91.4595" gradientUnits="userSpaceOnUse">
                                 <stop stop-color="#CAFF33" />
                                 <stop offset="0.716291" stop-color="#CAFF33" stop-opacity="0" />
                              </linearGradient>
                           </defs>
                        </svg>
                     </div>
                     <div className="text-base text-white LexendFontRegular leading-[1.5] text-center">Cash Flow Management</div>
                  </div>
                  <div className="flex flex-col items-center gap-[14px] rounded-xl p-5 lg:p-6 bg-grey-10 border border-grey-15">
                     <div className="useCaseIconsStyle p-2 w-fit">
                        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <rect width="48" height="48" rx="24" fill="url(#paint0_linear_108_2545)" fill-opacity="0.1" />
                           <rect x="0.5" y="0.5" width="47" height="47" rx="23.5" stroke="url(#paint1_linear_108_2545)" stroke-opacity="0.2" />
                           <path fill-rule="evenodd" clip-rule="evenodd" d="M14.25 14.25C13.8358 14.25 13.5 14.5858 13.5 15C13.5 15.4142 13.8358 15.75 14.25 15.75H15V26.25C15 27.9069 16.3431 29.25 18 29.25H19.2094L18.0385 32.7628C17.9075 33.1558 18.1199 33.5805 18.5128 33.7115C18.9058 33.8425 19.3305 33.6301 19.4615 33.2372L19.7906 32.25H28.2094L28.5385 33.2372C28.6695 33.6301 29.0942 33.8425 29.4872 33.7115C29.8801 33.5805 30.0925 33.1558 29.9615 32.7628L28.7906 29.25H30C31.6569 29.25 33 27.9069 33 26.25V15.75H33.75C34.1642 15.75 34.5 15.4142 34.5 15C34.5 14.5858 34.1642 14.25 33.75 14.25H14.25ZM20.2906 30.75L20.7906 29.25H27.2094L27.7094 30.75H20.2906ZM27.75 18.75C27.75 18.3358 27.4142 18 27 18C26.5858 18 26.25 18.3358 26.25 18.75V24.75C26.25 25.1642 26.5858 25.5 27 25.5C27.4142 25.5 27.75 25.1642 27.75 24.75V18.75ZM24.75 21C24.75 20.5858 24.4142 20.25 24 20.25C23.5858 20.25 23.25 20.5858 23.25 21V24.75C23.25 25.1642 23.5858 25.5 24 25.5C24.4142 25.5 24.75 25.1642 24.75 24.75V21ZM21.75 23.25C21.75 22.8358 21.4142 22.5 21 22.5C20.5858 22.5 20.25 22.8358 20.25 23.25V24.75C20.25 25.1642 20.5858 25.5 21 25.5C21.4142 25.5 21.75 25.1642 21.75 24.75V23.25Z" fill="#CAFF33" />
                           <defs>
                              <linearGradient id="paint0_linear_108_2545" x1="24" y1="-31.7838" x2="24" y2="123.892" gradientUnits="userSpaceOnUse">
                                 <stop stop-color="#CAFF33" />
                                 <stop offset="0.467671" stop-color="#CAFF33" stop-opacity="0" />
                              </linearGradient>
                              <linearGradient id="paint1_linear_108_2545" x1="24" y1="-83.3514" x2="24" y2="91.4595" gradientUnits="userSpaceOnUse">
                                 <stop stop-color="#CAFF33" />
                                 <stop offset="0.716291" stop-color="#CAFF33" stop-opacity="0" />
                              </linearGradient>
                           </defs>
                        </svg>
                     </div>
                     <div className="text-base text-white LexendFontRegular leading-[1.5] text-center">Business Expansion</div>
                  </div>
                  <div className="flex flex-col items-center gap-[14px] rounded-xl p-5 lg:p-6 bg-grey-10 border border-grey-15">
                     <div className="useCaseIconsStyle p-2 w-fit">
                        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <rect width="48" height="48" rx="24" fill="url(#paint0_linear_108_2551)" fill-opacity="0.1" />
                           <rect x="0.5" y="0.5" width="47" height="47" rx="23.5" stroke="url(#paint1_linear_108_2551)" stroke-opacity="0.2" />
                           <path d="M22.4636 20.7463C22.6908 20.5658 22.9607 20.4345 23.25 20.3525V23.1474C22.9552 23.0637 22.686 22.9304 22.4636 22.7537C22.0699 22.441 21.9175 22.073 21.9175 21.75C21.9175 21.427 22.0699 21.059 22.4636 20.7463Z" fill="#CAFF33" />
                           <path d="M24.75 27.6616V24.8383C25.0972 24.9228 25.4138 25.0658 25.6713 25.259C26.0978 25.5788 26.25 25.9448 26.25 26.25C26.25 26.5551 26.0978 26.9211 25.6713 27.241C25.4138 27.4342 25.0972 27.5772 24.75 27.6616Z" fill="#CAFF33" />
                           <path fill-rule="evenodd" clip-rule="evenodd" d="M24 14.25C18.6152 14.25 14.25 18.6152 14.25 24C14.25 29.3848 18.6152 33.75 24 33.75C29.3848 33.75 33.75 29.3848 33.75 24C33.75 18.6152 29.3848 14.25 24 14.25ZM24.75 18C24.75 17.5858 24.4142 17.25 24 17.25C23.5858 17.25 23.25 17.5858 23.25 18V18.8156C22.6231 18.9267 22.0253 19.1787 21.5306 19.5718C20.8182 20.1377 20.4175 20.9213 20.4175 21.75C20.4175 22.5787 20.8182 23.3623 21.5306 23.9282C22.033 24.3274 22.6327 24.575 23.25 24.6843V27.6616C22.9028 27.5771 22.5864 27.4341 22.3289 27.241L21.45 26.5818C21.1186 26.3333 20.6485 26.4004 20.4 26.7318C20.1515 27.0631 20.2186 27.5332 20.55 27.7818L21.4289 28.441C21.9621 28.8409 22.5979 29.0856 23.25 29.1903V30C23.25 30.4142 23.5858 30.75 24 30.75C24.4142 30.75 24.75 30.4142 24.75 30V29.1904C25.4021 29.0856 26.0381 28.8409 26.5714 28.441C27.3164 27.8821 27.75 27.0965 27.75 26.25C27.75 25.4034 27.3164 24.6178 26.5714 24.059C26.0381 23.659 25.4021 23.4143 24.75 23.3096V20.3526C25.0392 20.4346 25.309 20.5658 25.5361 20.7463L25.951 21.0759C26.2753 21.3335 26.7471 21.2794 27.0048 20.9551C27.2624 20.6308 27.2084 20.159 26.884 19.9013L26.4691 19.5718C25.9745 19.1788 25.3768 18.9268 24.75 18.8157V18Z" fill="#CAFF33" />
                           <defs>
                              <linearGradient id="paint0_linear_108_2551" x1="24" y1="-31.7838" x2="24" y2="123.892" gradientUnits="userSpaceOnUse">
                                 <stop stop-color="#CAFF33" />
                                 <stop offset="0.467671" stop-color="#CAFF33" stop-opacity="0" />
                              </linearGradient>
                              <linearGradient id="paint1_linear_108_2551" x1="24" y1="-83.3514" x2="24" y2="91.4595" gradientUnits="userSpaceOnUse">
                                 <stop stop-color="#CAFF33" />
                                 <stop offset="0.716291" stop-color="#CAFF33" stop-opacity="0" />
                              </linearGradient>
                           </defs>
                        </svg>
                     </div>
                     <div className="text-base text-white LexendFontRegular leading-[1.5] text-center">Payment Solutions</div>
                  </div>
               </div>
               <div className="animateUseCases4 basis-1/2 flex flex-col max-lg:items-center gap-[50px] backdrop-blur-[1px] bg-grey-10 bg-opacity-90 shadow-useCaseItemShadow rounded-3xl">
                  <div className="flex flex-col gap-[10px]">
                     <div className="text-xl lg:text-[26px] text-white LexendFontRegular leading-[150%] max-lg:text-center">For Business</div>
                     <div className="text-base text-grey-70 leading-[150%] max-lg:text-center">
                        For businesses, we empower growth with working capital solutions that optimize cash flow, and our tailored financing options fuel business expansion. Whatever your financial aspirations, YourBank is committed to providing the right tools and support to achieve them
                     </div>
                  </div>
                  <div className="flex flex-col lg:flex-row gap-[30px] lg:gap-[50px]">
                     <div className="flex flex-col gap-[5px]">
                        <div className="text-[40px] text-green-60 leading-[1.5] LexendFontRegular max-lg:text-center percentUseCase">65%</div>
                        <div className="text-[15px] text-grey-70 leading-[1.5] max-lg:text-center">Cash Flow Management</div>
                     </div>
                     {/* line between */}
                     <div>
                        <svg className="max-lg:hidden" width="2" height="112" viewBox="0 0 2 112" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <line x1="1.1665" y1="0.5" x2="1.1665" y2="111.5" stroke="#262626" stroke-dasharray="10 10" />
                        </svg>
                        <svg className="lg:hidden w-full" height="1" viewBox="0 0 258 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <line y1="0.5" x2="258" y2="0.5" stroke="#262626" stroke-dasharray="10 10" />
                        </svg>
                     </div>
                     <div className="flex flex-col gap-[5px]">
                        <div className="text-[40px] text-green-60 leading-[1.5] LexendFontRegular max-lg:text-center percentUseCase">70%</div>
                        <div className="text-[15px] text-grey-70 leading-[1.5] max-lg:text-center">Drive Business Expansion</div>
                     </div>
                     {/* line between */}
                     <div>
                        <svg className="max-lg:hidden" width="2" height="112" viewBox="0 0 2 112" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <line x1="1.1665" y1="0.5" x2="1.1665" y2="111.5" stroke="#262626" stroke-dasharray="10 10" />
                        </svg>
                        <svg className="lg:hidden w-full" height="1" viewBox="0 0 258 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <line y1="0.5" x2="258" y2="0.5" stroke="#262626" stroke-dasharray="10 10" />
                        </svg>
                     </div>
                     <div className="flex flex-col gap-[5px]">
                        <div className="text-[40px] text-green-60 leading-[1.5] LexendFontRegular max-lg:text-center percentUseCase">45%</div>
                        <div className="text-[15px] text-grey-70 leading-[1.5] max-lg:text-center">Streamline payroll processing</div>
                     </div>
                  </div>
                  <div className="text-sm text-white LexendFontLight leading-[1.5] py-[14px] px-5 rounded-full bg-grey-11 border border-grey-15 w-fit transition-all duration-300 hover:bg-grey-15 active:scale-95 cursor-pointer">Learn More</div>
               </div>
            </div>
         </div>
      </section>
   )
}

export default UseCases