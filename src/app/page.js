import MainSection from './HomeComponents/topSection';

import ClientesBanner from './HomeComponents/clientesBanner';
import QuemSomos from './HomeComponents/quemsomos';
import OQueFazemos from './HomeComponents/OQueFazemos';
import NossosProdutos from './HomeComponents/NossosProdutos';
import FeedbackCarousel from './HomeComponents/FeebackCarousel';
import Footer from '@/app/GlobalComponents/Footer';
import TrabalheConosco from './HomeComponents/TrabalheConosco';
import Header from '@/app/GlobalComponents/Header';

function App() {
  return (
    <>
    <div id="Home" className="App mx-auto max-w-screen-xl">
      <Header inicioBold="font-bold"/>
      <MainSection />
      <ClientesBanner />
      <QuemSomos />
      <OQueFazemos/>
      <NossosProdutos />
      <FeedbackCarousel />
      <TrabalheConosco />
    </div>
    <Footer />
    </> 
  );
}

export default App;
