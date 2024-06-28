import React from 'react'
import Header from '../GlobalComponents/Header'
import Footer from '../GlobalComponents/Footer'
import ProdutosBanner from '../NossosProdutos/ProdutosBanner'
import TopoSection from './TopoSection'
import Objetivo from './Objetivo'
import NossosCompromissos from './NossosCompromissos'
import ValoresSection from '../QuemSomos/ValoresSection'
import ValoresSectionLeft from '../QuemSomos/ValoresSectionLeft'
import TrabalheConosco from '../HomeComponents/TrabalheConosco'


export default function ESG () {
    return(
    <>
    <div id="NossosProdutos" className="App mx-auto max-w-screen-2xl">
        <Header esgBold="font-bold"/>
        <TopoSection />
        <Objetivo />
        <NossosCompromissos />
        <ValoresSection
        subtitulo="# PILAR 01" 
        titulo="Respeitar o meio ambiente"
        p1="Reduzir ao máximo as emissões provenientes de nossas atividades, adotando uma postura responsável e proativa."
        imgSrc={"./imagens/meioCirculo.png"}
        imgAlt="Meio Circulo Laranja"
        />
        <ValoresSectionLeft
        subtitulo="# PILAR 02" 
        titulo="Ser um empregador de referência"
        p1="Comprometemo-nos a aprimorar constantemente nossa capacidade de atender às necessidades de nossa força de trabalho."
        imgSrc={"./imagens/retanguloCinza.png"}
        imgAlt="Retangulo Cinza"
        />
        <ValoresSection
        subtitulo="# PILAR 03" 
        titulo="Diversidade, Equidade e Inclusão"
        p1="Fomentar um ambiente de trabalho inclusivo, onde todos se sintam bem-vindos, valorizados e reconhecidos."
        imgSrc={"./imagens/imgQuemSomosPage.png"}
        imgAlt="Quadrado Verde"
        />
        <ValoresSectionLeft
        subtitulo="# PILAR 04" 
        titulo="Apoiar e valorizar as comunidades vizinhas"
        p1="Construir relações com as comunidades próximas aos nossos escritórios para o progresso social e econômico."
        imgSrc={"./imagens/retanguloCinza.png"}
        imgAlt="Retangulo Cinza"
        />
        <ValoresSection
        subtitulo="# PILAR 05" 
        titulo="O esporte como poder de transformar vidas, direcionar destinos e alterar narrativas."
        p1="Por essa razão, ao longo de mais de três décadas, temos sido um dos investidores em iniciativas que contribuem para o cenário esportivo nacional."
        imgSrc={"./imagens/imgQuemSomosPage.png"}
        imgAlt="Quadrado Verde"
        />
        <TrabalheConosco />
    </div>
    <Footer/>
    </>
    )
}