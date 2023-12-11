import Header from '../../components/header/Header'
import Welcome from '../../components/welcome/Welcome'
function Home() {
    return (
        <div className="bg-grey-10 absolute h-screen w-full pb-20 -z-50 overflow-hidden">
            <div className="bgHeader bg-no-repeat h-[300px] w-[500px] lg:h-[500px] lg:w-[800px] bg-contain absolute -left-10 -top-12 -z-40"></div>
            <Header />
            {/* <Welcome /> */}
        </div>
    )
}

export default Home