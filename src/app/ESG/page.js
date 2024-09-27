import React from 'react'
import Header from '../GlobalComponents/Header'
import Footer from '../GlobalComponents/Footer'
import Objetivo from './Objetivo'
import NossosCompromissos from './NossosCompromissos'
import TrabalheConosco from '../HomeComponents/TrabalheConosco'
import HomeBanner from '../HomeComponents/HomeBanner'


export default function ESG () {
    return(
    <>
    <div id="NossosProdutos" className="App mx-auto max-w-screen-2xl">
        <Header esgBold="font-bold"/>
        <HomeBanner
        bg = "bg-dark-green"
        textH1 = "text-white"
        textP = "text-white"
        h1="Nossos 30 anos de história atestam nosso compromisso em considerar o futuro ao cuidar do presente."
        p="Queremos gerar valor, mas não a qualquer custo. Por isso, buscamos equilibrar a relação entre prosperidade econômica, desenvolvimento social e conservação ambiental."
        imagem = "./imagens/stockPhotoESG.jpg" // alterar imagem
        botao = {false}
        />
        <Objetivo />
        <NossosCompromissos />
        <TrabalheConosco />
    </div>
    <Footer/>
    </>
    )
}