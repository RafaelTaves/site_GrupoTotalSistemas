import React from 'react'
import TextImg from '../GlobalComponents/Text&Img'
import Header from '../GlobalComponents/Header'
import SolucoesPersonalizadas from './SolucoesPersonalizadas'
import O_quefazemos from '../HomeComponents/OQueFazemos'
import ComoFazemos from './ComoFazemos'
import ClientesBanner from '../HomeComponents/clientesBanner'
import FeedbackCarousel from '../HomeComponents/FeebackCarousel'
import Footer from '../GlobalComponents/Footer'

const OQueFazemos = () => {

    return(
    <>
    <div id="OQueFazemos" className="App mx-auto max-w-screen-xl">
        <Header oQueFazemosBold="font-bold"/>
        <TextImg 
        id="inicio"
        tSize="text-5xl"
        titulo="Onde a experiência encontra a inovação."
        p1="Fornecemos inteligência estratégica, combinada com a tecnologia e a experiência essenciais, para resolver os desafios específicos do seu negócio."
        imgSrc={"./imagens/landFazemos.png"}
        />
        <SolucoesPersonalizadas />
        <O_quefazemos titulo="Descubra como podemos elevar o seu negócio a novos patamares." />
        <ComoFazemos />
        <ClientesBanner/>
        <FeedbackCarousel />
    </div>    
    <Footer/>
    </>   
    )
    
}

export default OQueFazemos