import HeroSection from '../components/HeroSection';
import CardsPage from './CardsPage';

function Home() {
    

    return (
        <div className='flex flex-col min-h-screen justify-between'>
            <main className="my-20">
                <HeroSection />
                <CardsPage />
            </main>
        </div>
    )

}


export default Home