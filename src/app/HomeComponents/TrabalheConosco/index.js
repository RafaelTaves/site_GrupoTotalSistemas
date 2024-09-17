import React from 'react';


function TrabalheConosco() {
  return (
    <section className="bg-white py-4 p-8">
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/3"> 
          <img src="./imagens/imgTrabalheConosco.png"></img>
        </div>

        <div className="md:w-2/3 md:pl-8 text-left mt-8"> 
          <h2 className="h5Headline customPurple mb-4">Estamos sempre em busca de talentos incríveis.</h2>
          <p className="body1 mb-8">
            Somos apaixonados pelo que fazemos, como o fazemos e, o mais importante, por que o fazemos. Se o Grupo Total Sistemas é o tipo de negócio do qual você gostaria de fazer parte, vamos conversar!
          </p>
          <button className="mt-6 px-6 py-2 botao flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
          </svg>
            Junte-se a nossa equipe
          </button>
        </div>
      </div>
    </section>
  );
}

export default TrabalheConosco;