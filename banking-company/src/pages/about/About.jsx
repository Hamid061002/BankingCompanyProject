import AboutExcellence from "../../components/about excellence/AboutExcellence"
import Footer from "../../components/footer/Footer"
import Header from "../../components/header/Header"
import MissionVision from "../../components/mission & vision/MissionVision"
import PressReleases from "../../components/press releases/PressReleases"

function About() {
    return (
        <section className="flex justify-center bg-grey-10 absolute w-full -z-50 overflow-x-hidden">
         <Header />
         <div className="max-w-[1536px] w-full">
            <div className="bgHeader bg-no-repeat h-[300px] w-[500px] lg:h-[500px] lg:w-[800px] bg-contain fixed -left-10 -top-12 lg:-left-20 lg:-top-20 -z-40"></div>
            <div className="flex flex-col gap-20 lg:gap-[120px] mt-40">
               <AboutExcellence />
               <MissionVision />
               <PressReleases />
               <Footer />
            </div>
         </div>
      </section>
    )
}

export default About