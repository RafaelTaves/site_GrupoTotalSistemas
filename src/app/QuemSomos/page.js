import Footer from "../GlobalComponents/Footer";
import Header from "../GlobalComponents/Header";
import TextImg from "../GlobalComponents/Text&Img";
import HomeBanner from "../HomeComponents/HomeBanner";
import NossosProdutos from "../HomeComponents/NossosProdutos";
import TextsSection from "./TextsSection";



export default function QuemSomos () {
    return(
    <>
    <div id="QuemSomos" className="App mx-auto max-w-screen-2xl">
        <Header quemSomosBold="font-bold"/>    
    </div>
        <HomeBanner
        bg = "bg-orange-400"
        textH1 = "text-white"
        textP = "text-white"
        h1="O Grupo Total Sistemas incorpora um espírito ambicioso e resistente."
        p="Nossa reputação é forjada pela nossa história pioneira, pela excelência da nossa equipe e pela qualidade do nosso trabalho."
        imagem = "./imagens/stockPhotoAboutUs.jpg" // alterar imagem
        botao = {false}
        />
    <div className="App mx-auto max-w-screen-2xl">
        <TextImg 
        subtitulo="NOSSA HISTÓRIA"
        tSize="text-3xl"
        titulo="Atendemos de forma abrangente, tanto o mercado privado, com especial atenção às Pequenas e Médias Empresas, quanto o setor público e grandes corporações."
        p1="Nosso fundador, Marcelo Canuto, com mais de 30 anos de expertise em desenvolvimento de sistemas, iniciou este legado em parceria com seu filho Marcelo. Atualmente, o grupo engloba uma equipe diversificada e opera em todo o território brasileiro."
        p2="Além das soluções de TI que oferecemos, estabelecemos parcerias sólidas no mercado, agregando significativo valor aos nossos clientes."
        p3="Atualmente, contamos com uma carteira de aproximadamente 500 CNPJs, evidenciando a amplitude e a confiança que conquistamos no cenário empresarial."
        imgSrc={"./imagens/BorboletaFotos.png"}
        imgAlt="Borboleta de fotos"
        />
        {/* <NossosProdutos/> */}
        <TextsSection />
    </div>
    <Footer/>
    </>
    )
}
