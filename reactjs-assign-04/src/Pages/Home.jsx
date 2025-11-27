import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import CardsPage from './CardsPage';

function Home() {
    

    return (
        <div className='flex flex-col h-screen justify-between'>
            <Navbar />
            <HeroSection />
            <CardsPage />
            <Footer />
        </div>
    )

}


export default Home