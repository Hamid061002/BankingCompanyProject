import Header from '../../components/header/Header'
import OurProducts from '../../components/our products/OurProducts'
import Welcome from '../../components/welcome/Welcome'
function Home() {
    return (
        <div className="flex justify-center bg-grey-10 absolute w-full pb-20 -z-50 overflow-x-hidden">
            <Header />
            <div className="max-w-[1536px]">
                <div className="bgHeader bg-no-repeat h-[300px] w-[500px] lg:h-[500px] lg:w-[800px] bg-contain absolute -left-10 -top-12 -z-40"></div>
                <Welcome />
                <OurProducts />
            </div>
        </div>
    )
}

export default Home