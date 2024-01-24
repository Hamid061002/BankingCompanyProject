import Footer from "../../components/footer/Footer"
import Header from "../../components/header/Header"
import JobOpenings from "../../components/job openings/JobOpenings"
import OurBenefits from "../../components/our benefits/OurBenefits"
import OurValues from "../../components/our values/OurValues"
import WelcomeCareers from "../../components/welcome careers/WelcomeCareers"

function Careers() {
    return (
        <section className="flex justify-center bg-grey-10 absolute w-full -z-50 overflow-x-hidden">
            <Header />
            <div className="max-w-[1536px] w-full">
                <div className="bgHeader bg-no-repeat h-[300px] w-[500px] lg:h-[500px] lg:w-[800px] bg-contain fixed -left-10 -top-12 lg:-left-20 lg:-top-20 -z-40"></div>
                <div className="flex flex-col gap-20 lg:gap-[120px] mt-40">
                    <WelcomeCareers />
                    <OurValues />
                    <OurBenefits />
                    <JobOpenings />
                    <Footer />
                </div>
            </div>
        </section>
    )
}

export default Careers