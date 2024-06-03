import React from 'react';

const QuemSomos = () => {
  return (
    <section id="QuemSomos" className="py-12 bg-white"> 
      <div className="max-w-screen-xl mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 pr-8">
          <h3 className="mb-6 underline subTitulo-cinza">QUEM SOMOS</h3>
          <p className="mb-4 text-4xl customPurple font-bold">
            Com raízes familiares, acumulamos mais de duas décadas de expertise na oferta de serviços e soluções em TI.
          </p>
          <p className="mb-4">
            Defendemos a ideia de que toda organização, pequena ou grande, merece colher resultados excepcionais ao investir em tecnologia.
          </p>
          <p>
            Estamos aqui para transformar essa crença em realidade, proporcionando não apenas soluções tecnológicas, mas uma colaboração sólida e estratégica que impulsiona o sucesso de nossos parceiros.
          </p>
          <button className="mt-6 px-6 py-2 botao flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
          </svg>
            Entenda o nosso DNA
          </button>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0"> 
          <img src="./imagens/imgQuemSomos.png" ></img> 
        </div>
      </div>
    </section>
  );
};

export default QuemSomos;
