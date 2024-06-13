import MainSection from './HomeComponents/topSection';
import ClientesBanner from './HomeComponents/clientesBanner';
import O_quefazemos from './HomeComponents/OQueFazemos';
import NossosProdutos from './HomeComponents/NossosProdutos';
import FeedbackCarousel from './HomeComponents/FeebackCarousel';
import Footer from '@/app/GlobalComponents/Footer';
import TrabalheConosco from './HomeComponents/TrabalheConosco';
import Header from '@/app/GlobalComponents/Header';
import Banner from './HomeComponents/Banner';
import Quem_somos from './HomeComponents/Quem_somos';

function App() {
  return (
    <>
    <div id="Home" className="App mx-auto max-w-screen-2xl">
      <Header inicioBold="font-bold"/>
      <MainSection />
      <ClientesBanner />
      <Quem_somos />
      <O_quefazemos titulo={"Pensamos no futuro. E pensamos em você."} />
      <Banner/>
      <NossosProdutos />
      <FeedbackCarousel />
      <TrabalheConosco />
    </div>
    <Footer />
    </> 
  );
}

export default App;
