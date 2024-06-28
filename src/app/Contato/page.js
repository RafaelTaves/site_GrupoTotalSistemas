import React from 'react';
import Header from '../GlobalComponents/Header';
import Footer from '../GlobalComponents/Footer';
import Form from './Form';
import Banner from '../HomeComponents/Banner';
import FeedbackCarousel from '../HomeComponents/FeebackCarousel';


export default function Contato () {
    return(
    <>
    <div id="NossosProdutos" className="App mx-auto max-w-screen-2xl">
        <Header contatosBold="font-bold"/>  
        <Form />     
        <Banner color="bg-[#71A064]" colorText="text-white"/>
        <FeedbackCarousel /> 
    </div>
    <Footer />
    </>
    )
}