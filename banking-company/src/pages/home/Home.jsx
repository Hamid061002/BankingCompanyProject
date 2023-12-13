import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import OurProducts from '../../components/our products/OurProducts'
import UseCases from '../../components/use cases/UseCases'
import Welcome from '../../components/welcome/Welcome'
function Home() {
   return (
      <section className="flex justify-center bg-grey-10 absolute w-full -z-50 overflow-x-hidden">
         <Header />
         <div className="max-w-[1536px]">
            <div className="bgHeader bg-no-repeat h-[300px] w-[500px] lg:h-[500px] lg:w-[800px] bg-contain fixed -left-10 -top-12 lg:-left-20 lg:-top-20 -z-40"></div>
            <div className="flex flex-col gap-20 lg:gap-[120px]">
               <Welcome />
               <OurProducts />
               <UseCases />
               <Footer />
            </div>
         </div>
      </section>
   )
}

export default Home