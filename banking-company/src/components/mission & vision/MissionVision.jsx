import { useState } from 'react'
import mission from '../../assets/public/images/mission.png'
import vision from '../../assets/public/images/vision.png'
import './MissionVision.css'

function MissionVision() {
  let yellowLineVisionParrent = 'max-lg:hidden h-full absolute right-0 transition-all duration-[1000ms]'
  let yellowLineVision = "flex-none h-full bg-green-60 transition-all duration-[1000ms]"
  let bgDarkGreenVision = 'w-0 h-full bg-dark-green absolute right-0 transition-all duration-[1000ms] -z-10'
  let visionClassSentence = 'flex flex-col gap-[10px] lg:pe-10 transition-all duration-[1000ms] relative group overflow-hidden'
  let [animateMoveVision, setAnimateMoveVision] = useState(false)
  let yellowLineMissionParrent = 'max-lg:hidden h-full absolute left-0 transition-all duration-[1000ms]'
  let yellowLineMission = "flex-none h-full bg-green-60 transition-all duration-[1000ms]"
  let bgDarkGreenMission = 'w-0 h-full bg-dark-green absolute left-0 transition-all duration-[1000ms] -z-10'
  let missionClassSentence = 'flex flex-col gap-[10px] lg:ps-10 transition-all duration-[1000ms] relative group overflow-hidden'
  let [animateMoveMission, setAnimateMoveMission] = useState(false)
  return (
    <section className="flex flex-col gap-[60px] px-4 lg:px-20">
      <div className="flex flex-col items-center lg:items-start gap-[10px] lg:pe-[250px]">
        <div className="text-[28px] lg:text-[38px] LexendFontRegular text-green-60 leading-[42px] lg:leading-[57px] transition-all duration-300">
          Mission & Vision
        </div>
        <div className="text-grey-70 leading-5 lg:leading-6 LexendFontLight text-sm lg:text-base text-center lg:text-start">
          We envision being a leading force in the industry, driven by innovation, integrity, and inclusivity, creating a brighter financial future for individuals and businesses while maintaining a strong commitment to customer satisfaction and community development
        </div>
      </div>
      <div className="relative lg:mb-[416px] max-lg:flex max-lg:flex-col max-lg:gap-[50px]">
        <div className="flex max-lg:flex-col items-center max-lg:text-center max-lg:gap-[30px]">
          <div onMouseOver={() => setAnimateMoveMission(true)} onMouseOut={() => setAnimateMoveMission(false)} className="flex-none bgMissionVision2 rounded-t-[50px] rounded-b-[20px] transition-all duration-1000 group hover:bg-green-60 hover:bg-opacity-10 relative">
            <div className="bgMissionVision bg-center p-5 lg:p-[60px] pb-0">
              <img className="w-full transition-all duration-[1000ms] group-hover:rounded-t-[200px]" src={mission} alt="" />
            </div>
            <div className="lg:hidden w-full h-[1.5px] absolute bg-green-60"></div>
          </div>
          <div className={animateMoveMission ? `${missionClassSentence} lg:pe-10` : missionClassSentence}>
            <div className="LexendFontRegular text-[26px] lg:text-[32px] text-white leading-[1.5]">Mission</div>
            <div className="LexendFontLight text-grey-70 max-lg:text-sm leading-[1.5]">
              At YourBank, our mission is to empower our customers to achieve financial success. We are dedicated to delivering innovative banking solutions that cater to their unique needs. Through personalized services, expert guidance, and cutting-edge technology, we aim to build strong, lasting relationships with our customers. Our mission is to be their trusted partner, helping them navigate their financial journey and realize their dreams.
            </div>
            <div className={animateMoveMission ? `${yellowLineMissionParrent} w-full` : `${yellowLineMissionParrent} w-[1px]`} dir="rtl">
              <div className={animateMoveMission ? `${yellowLineMission} w-[2px]` : `${yellowLineMission} w-[1px]`} ></div>
            </div>
            <div className={animateMoveMission ? `${bgDarkGreenMission} w-full` : `${bgDarkGreenMission}`}></div>
          </div>
        </div>
        <div className="lg:absolute flex flex-col items-center max-lg:text-center max-lg:gap-[30px] -bottom-[416px] lg:flex-row-reverse">
          <div onMouseOver={() => setAnimateMoveVision(true)} onMouseOut={() => setAnimateMoveVision(false)} className="flex-none bgMissionVision2 rounded-t-[50px] rounded-b-[20px] transition-all duration-1000 group hover:bg-green-60 hover:bg-opacity-10 relative">
            <div className="bgMissionVision bg-center p-5 lg:p-[60px] pb-0">
              <img className="w-full transition-all duration-[1000ms] group-hover:rounded-t-[200px]" src={vision} alt="" />
            </div>
            <div className="lg:hidden w-full h-[1.5px] absolute bg-green-60"></div>
          </div>
          <div className={animateMoveVision ? `${visionClassSentence} lg:ps-10` : visionClassSentence}>
            <div className="LexendFontRegular text-[26px] lg:text-[32px] text-white leading-[1.5]">Vision</div>
            <div className="LexendFontLight text-grey-70 max-lg:text-sm leading-[1.5]">
              Our vision at YourBank is to redefine banking by creating a seamless and personalized experience for our customers. We envision a future where banking is accessible, transparent, and tailored to individual preferences. Through continuous innovation and collaboration, we strive to be at the forefront of the industry, setting new standards for customer-centric banking. Our vision is to be the preferred financial institution, known for our unwavering commitment to excellence, trust, and customer satisfaction.
            </div>
            <div className={animateMoveVision ? `${yellowLineVisionParrent} w-full` : `${yellowLineVisionParrent} w-[2px]`}>
              <div className={animateMoveVision ? `${yellowLineVision} w-[2px]` : `${yellowLineVision} w-[1px]`}></div>
            </div>
            <div className={animateMoveVision ? `${bgDarkGreenVision} w-full` : `${bgDarkGreenVision}`}></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MissionVision