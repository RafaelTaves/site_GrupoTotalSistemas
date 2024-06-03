import React from 'react';

const MainSection = () => {


  return (
    <div id="inicio" className="flex flex-col md:flex-row items-center justify-between p-8 bg-white">
      <div className="md:w-1/2">
        <h1 className="text-4xl customPurple font-bold ">Somos o seu parceiro inovador, ágil e experiente em tecnologia e serviços de TI.</h1>
        <p className="mt-4 text-gray-600">
          Compreendemos sua empresa em primeiro lugar, direcionando nossa abordagem para suas necessidades específicas. Em seguida, integramos soluções tecnológicas para impulsionar o seu sucesso.
        </p>
        <a href="#QuemSomos">
        <button  className="mt-6 px-6 py-2  botao flex items-center gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
        </svg>
          Conheça mais
        </button>
        </a>
      </div>
      <div className="mt-8 md:mt-0 md:w-1/2 md:ml-auto flex justify-end relative ">
        <img src="./imagens/imgLand.png" alt="Team working" className="w-full h-auto md:w-4/6 rounded-lg " />
      </div>
    </div>
  );
}

export default MainSection;
