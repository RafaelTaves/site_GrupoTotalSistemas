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
            <ProdutosBanner />
        </div>
        <Footer />
        </>
    )
    

}