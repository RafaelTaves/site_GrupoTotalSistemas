import React from 'react';
import Header from '../GlobalComponents/Header';
import Footer from '../GlobalComponents/Footer';
import Form from './Form';
import Banner from '../HomeComponents/Banner';
import FeedbackCarousel from '../HomeComponents/FeebackCarousel';


export default function Contato () {
    return(
    <>
    <div id="NossosProdutos" className="App">
        <Header contatosBold="font-bold"/>  
        <Form />     
        {/* <Banner color="bg-light-green-I" colorText="text-white"/>
        <FeedbackCarousel />  */}
    </div>
    <Footer />
    </>
    )
}