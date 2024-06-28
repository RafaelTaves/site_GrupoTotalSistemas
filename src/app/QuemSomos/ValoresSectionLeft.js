import React from 'react';

const ValoresSectionLeft = (props) => {

    return (
        <section className="bg-white">
      <div className="mx-auto px-8 flex flex-col md:flex-row justify-between items-center"> 
        <div className="md:w-1/2 order-2 md:order-1 mt-8 justify-start">  
          <img src='./imagens/retanguloCinza.png' alt="Retângulo Cinza" /> 
        </div>

        <div className="md:w-1/3 md:pl-8  md:ml-10 md:text-left mt-8 md:mt-0 order-1 md:order-2"> 
          <h3 className="mb-6 underline subTitulo-cinza">{props.subtitulo}</h3>
          <h1 className="h5Headline customPurple title">
            {props.titulo}
          </h1>
          <p className="mt-4 body1">
            {props.p1}
          </p>
        </div>
      </div>
    </section>
    );
}

export default ValoresSectionLeft;