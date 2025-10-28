import React from 'react';

function SolucoesPersonalizadas() {
  return (
    <section className="mt- mx-auto pt-16 p-8 max-w-7xl">
      <h2 className="font-bold text-left h5Headline customPurple mb-8">
        Somos especializados em fornecer soluções personalizadas para impulsionar o seu sucesso.
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="">
          <div>
            <img src='./imagens/Solucoes1.png'></img>
          </div>
          <div className='mt-4'>
            <h3 className="h6Headline customPurple mb-4">Pequenas e Médias Empresas</h3>
            <p className="body2 text-justify md:body1 md:mr-20">Soluções sob medida para simplificar processos e acelerar os resultados da sua empresa.</p>
          </div>
        </div>

        <div className="">
          <div>
            <img src='./imagens/Solucoes2.png'></img>
          </div>
          <div className='mt-4'>
            <h3 className="h6Headline customPurple mb-4">Corporações</h3>
            <p className="body2 text-justify md:body1 md:mr-20">Inovação e inteligência para otimizar operações e impulsionar grandes resultados.</p>
          </div>
        </div>

        <div className="">
          <div>
            <img src='./imagens/Solucoes3.png'></img>
          </div>
          <div className='mt-4'>
            <h3 className="h6Headline customPurple mb-4">Governo e Setor Público</h3>
            <p className="body2 text-justify md:body1 md:mr-20">Explore novas alternativas para potencializar o dia a dia de sua pequena ou média empresa.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SolucoesPersonalizadas;
