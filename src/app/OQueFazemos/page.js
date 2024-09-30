import React from 'react'
import TextImg from '../GlobalComponents/Text&Img'
import Header from '../GlobalComponents/Header'
import SolucoesPersonalizadas from './SolucoesPersonalizadas'
import O_quefazemos from '../HomeComponents/OQueFazemos'
import ComoFazemos from './ComoFazemos'
import ClientesBanner from '../HomeComponents/clientesBanner'
import FeedbackCarousel from '../HomeComponents/FeebackCarousel'
import Footer from '../GlobalComponents/Footer'
import HomeBanner from '../HomeComponents/HomeBanner'

const OQueFazemos = () => {

    return(
    <>
    <div id="OQueFazemos" className="App mx-auto max-w-screen-2xl">
        <Header oQueFazemosBold="font-bold"/>
        <HomeBanner
        bg = "bg-amber-400"
        textH1 = "text-white"
        textP = "text-white"
        h1="Onde a experiência encontra a inovação."
        p="Fornecemos inteligência estratégica, combinada com a tecnologia e a experiência essenciais, para resolver os desafios específicos do seu negócio."
        imagem = "./imagens/stockPhotoHandShake.jpg" // alterar imagem
        botao = {false}
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