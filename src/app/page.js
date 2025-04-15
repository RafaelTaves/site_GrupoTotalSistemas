import O_quefazemos from './HomeComponents/OQueFazemos';
import NossosProdutos from './HomeComponents/NossosProdutos';
import FeedbackCarousel from './HomeComponents/FeebackCarousel';
import Footer from './GlobalComponents/Footer';
import TrabalheConosco from './HomeComponents/TrabalheConosco';
import Header from './GlobalComponents/Header';
import Quem_somos from './HomeComponents/Quem_somos';
import HomeBanner from './HomeComponents/HomeBanner';


function App() {
  return (
    <>
    <div id="Home">
      <div className="App mx-auto max-w-screen-2xl">
        <Header inicioBold="font-bold"/>
      </div>
      <HomeBanner
      bg = "bg-light-blue-II"
      textH1 = "text-white"
      textP = "text-white"
      h1="Somos o seu parceiro inovador, ágil e experiente em tecnologia e serviços de TI."
      p="Compreendemos sua empresa em primeiro lugar, direcionando nossa abordagem para suas necessidades específicas. Em seguida, integramos soluções tecnológicas para impulsionar o seu sucesso."
      imagem = "./imagens/bannerNiteroi.jpg"
      botao = {true}
      />
      <div className="App mx-auto max-w-screen-2xl">
        <Quem_somos />
        <O_quefazemos titulo={"Pensamos no futuro. E pensamos em você."} />
        {/* <NossosProdutos /> */}
        <FeedbackCarousel />
        <TrabalheConosco />
      </div>
    </div>
    <Footer />
    </> 
  );
}

export default App;
