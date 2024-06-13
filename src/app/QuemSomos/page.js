import Footer from "../GlobalComponents/Footer";
import Header from "../GlobalComponents/Header";
import TextImg from "../GlobalComponents/Text&Img";
import NossosProdutos from "../HomeComponents/NossosProdutos";
import TrabalheConosco from "../HomeComponents/TrabalheConosco";
import TextsSection from "./TextsSection";
import ValoresSection from "./ValoresSection";
import ValoresSectionLeft from "./ValoresSectionLeft";


export default function QuemSomos () {
    return(
    <>
    <div id="QuemSomos" className="App mx-auto max-w-screen-2xl">
        <Header quemSomosBold="font-bold"/>
        <TextImg
        id="inicio"
        tSize="text-4xl"
        titulo="O Grupo Total Sistemas incorpora um espírito ambicioso e resistente. "
        p1="Nossa reputação é forjada pela nossa história pioneira, pela excelência da nossa equipe e pela qualidade do nosso trabalho."
        imgSrc={"./imagens/imgQuemSomosPage.png"}
        imgAlt="Quadrado verde"
        />

        <TextImg 
        subtitulo="NOSSA HISTÓRIA"
        tSize="text-3xl"
        titulo="Atendemos de forma abrangente, tanto o mercado privado, com especial atenção às Pequenas e Médias Empresas, quanto o setor público e grandes corporações."
        p1="Nosso fundador, Marcelo Canuto, com mais de 30 anos de expertise em desenvolvimento de sistemas, iniciou este legado em parceria com seu filho Marcelo. Atualmente, o grupo engloba uma equipe diversificada e opera em todo o território brasileiro."
        p2="Além das soluções de TI que oferecemos, estabelecemos parcerias sólidas no mercado, agregando significativo valor aos nossos clientes."
        p3="Atualmente, contamos com uma carteira de aproximadamente 500 CNPJs, evidenciando a amplitude e a confiança que conquistamos no cenário empresarial."
        imgSrc={"./imagens/borboletaVerde.png"}
        imgAlt="Borboleta Verde"
        />
        <NossosProdutos/>
        <TextsSection />
        <ValoresSection
        subtitulo="# TRANSPARÊNCIA" 
        titulo="Primamos pela transparência em todas as nossas interações, seja com colaboradores, clientes ou parceiros."
        p1="Acreditamos que a honestidade é uma virtude fundamental. Esse compromisso com a verdade é conduzido com cuidado e empatia."
        imgSrc={"./imagens/meioCirculo.png"}
        imgAlt="Meio Circulo Laranja"
        />
        <ValoresSectionLeft
        subtitulo="# LIBERDADE" 
        titulo="Acreditamos no poder da liberdade para criar, pensar e liderar. Valorizamos um ambiente de trabalho onde cada pessoa pode ser a sua melhor versão."
        p1="Proporcionamos liberdade nas escalas de horário, incentivamos conversas abertas e garantimos acesso direto à diretoria da empresa. Entendemos que a liberdade, inclusive para cometer erros, é fundamental para o crescimento e a inovação."
        imgSrc={"./imagens/retanguloCinza.png"}
        imgAlt="Retangulo Cinza"
        />
        <ValoresSection
        subtitulo="# EXCELÊNCIA" 
        titulo="Nossa busca incansável pelo progresso e pela entrega de resultados brilhantes está no cerne do que nos torna únicos e memoráveis."
        p1="Como já explicamos algumas vezes, somos inimigos da média, por isso tudo o que fazemos é sustentado por uma cultura de integridade, credibilidade e positividade:"
        imgSrc={"./imagens/imgQuemSomosPage.png"}
        imgAlt="Quadrado Verde"
        />
        <TrabalheConosco />
    </div>
    <Footer/>
    </>
    )
}
