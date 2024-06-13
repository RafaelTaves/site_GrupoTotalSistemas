import React from 'react';

const ValoresSectionLeft = (props) => {

    return (
        <section className="bg-white">
      <div className="mx-auto px-8 flex flex-col md:flex-row items-center"> {/* Alteração aqui */}
        <div className="md:w-1/2 order-2 md:order-1 mt-8"> {/* Alteração aqui */} 
          <img src='./imagens/retanguloCinza.png' alt="Retângulo Cinza" /> 
        </div>

        <div className="md:w-1/2 md:pl-8  md:ml-10 md:text-left mt-8 md:mt-0 order-1 md:order-2"> {/* Alteração aqui */}
          <h3 className="mb-6 underline subTitulo-cinza"># LIBERDADE</h3>
          <h1 className="text-lg customPurple title">
            Acreditamos no poder da liberdade para criar, pensar e liderar. Valorizamos um ambiente de trabalho onde cada pessoa pode ser a sua melhor versão.
          </h1>
          <p className="mt-4 body1">
            Proporcionamos liberdade nas escalas de horário, incentivamos conversas abertas e garantimos acesso direto à diretoria da empresa. Entendemos que a liberdade, inclusive para cometer erros, é fundamental para o crescimento e a inovação.
          </p>
        </div>
      </div>
    </section>
    );
}

export default ValoresSectionLeft;