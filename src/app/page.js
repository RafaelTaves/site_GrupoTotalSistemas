import MainSection from './HomeComponents/topSection';
import ClientesBanner from './HomeComponents/clientesBanner';
import O_quefazemos from './HomeComponents/OQueFazemos';
import NossosProdutos from './HomeComponents/NossosProdutos';
import FeedbackCarousel from './HomeComponents/FeebackCarousel';
import Footer from './GlobalComponents/Footer';
import TrabalheConosco from './HomeComponents/TrabalheConosco';
import Header from './GlobalComponents/Header';
import Banner from './HomeComponents/Banner';
import Quem_somos from './HomeComponents/Quem_somos';
import HomeBanner from './HomeComponents/HomeBanner';
import HomeBannerMobile from './HomeComponents/HomeBannerMobile';


function App() {
  return (
    <>
    <div id="Home">
      <div className="App mx-auto max-w-screen-2xl">
        <Header inicioBold="font-bold"/>
      </div>
      <HomeBanner
      h1="Somos o seu parceiro inovador, ágil e experiente em tecnologia e serviços de TI."
      p="Compreendemos sua empresa em primeiro lugar, direcionando nossa abordagem para suas necessidades específicas. Em seguida, integramos soluções tecnológicas para impulsionar o seu sucesso."
      botao = {true}
      />
      <HomeBannerMobile />
      <div className="App mx-auto max-w-screen-2xl">
        {/* <MainSection /> */}
        {/* <ClientesBanner /> */}
        <Quem_somos />
        <O_quefazemos titulo={"Pensamos no futuro. E pensamos em você."} />
        <Banner color="bg-[#D06F3D]" colorText="customPurple"/>
        <NossosProdutos />
        <FeedbackCarousel />
        <TrabalheConosco />
      </div>
    </div>
    <Footer />
    </> 
  );
}

export default App;
