import React from 'react'
import Header from '../GlobalComponents/Header'
import Footer from '../GlobalComponents/Footer'
import ProdutosBanner from '../NossosProdutos/ProdutosBanner'
import TopoSection from './TopoSection'


export default function ESG () {
    return(
    <>
    <div id="NossosProdutos" className="App mx-auto max-w-screen-2xl">
        <Header esgBold="font-bold"/>
        <TopoSection />
    </div>
    <Footer/>
    </>
    )
}