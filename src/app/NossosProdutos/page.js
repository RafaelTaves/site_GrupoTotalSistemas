import React from 'react'
import Header from '../GlobalComponents/Header'
import Footer from '../GlobalComponents/Footer'
import TextImg from '../GlobalComponents/Text&Img'
import ProdutosBanner from './ProdutosBanner'

export default function NossosProdutos () {
    
    return(
        <>
        <div id="NossosProdutos" className="App mx-auto max-w-screen-2xl">
            <Header />
            <TextImg
                id="inicio"
                tSize="text-5xl"
                titulo="Para assegurar o seu parceiro ideal, contamos com um ecossistema integrado de atuação."
                p1="Comprometemo-nos com o desenvolvimento de produtos e soluções digitais de alta qualidade, oferecendo preços competitivos."
                imgSrc={"./imagens/imgNossosProdutos.png"}
                imgAlt="Medalha"
            />
            <h2 className="h5Headline customPurple text-center md:text-left md:h4Headline mb-10">Nossos produtos:</h2>
            <ProdutosBanner 
            color= "red"
            srcLogo="./imagens/logoInffelBranco.png"
            subtitulo="# FoodTech"
            titulo="Tornando os restaurantes um lugar incrível!"
            p="O Inffel está cheio de soluções inteligentes e intuitivas para você poder otimizarão máximo o seu food-service."
            srcForma="./imagens/imgInffelBanner.png"
            />
            <ProdutosBanner 
            color= "light-blue"
            srcLogo="./imagens/logoTotal2.png"
            subtitulo="# LawTech"
            titulo="Plataforma online que agiliza a lavratura da escritura e procuração!"
            p="A Total Sistema simplifica a intermediação entre clientes e cartórios por meio da tecnologia para você poder otimizar ao máximo o seu cartório."
            srcForma="./imagens/meioCirculo.png"
            />
        </div>
        <Footer />
        </>
    )
    

}