import React from 'react'

export default function Objetivo () {
    

    return(
    <>
    <section className="bg-white pt-16 p-8 max-w-7xl mx-auto" id="objetivo">
      <div className="max-w-screen-2xl">
        <div className="flex flex-col md:flex-row md:items-center">
          <div className="md:w-1/2 text-left md:pr-8 mb-8 md:mb-0">
          <h3 className='mb-6 underline subTitulo-cinza mt-4 md:mt-0'>OBJETIVO</h3>
            <h2 className="customPurple h5Headline md:h4Headline md:text-[40px]  lg:text-[44px] leading-tight">
              Construir valor sustentável em parceria com os nossos clientes, nossa equipe e as comunidades em que atuamos. Sempre.
            </h2>
          </div>

          <div className="md:w-1/2 body1">
            <p className='text-lg md:text-xl'>
              Como especialistas em TI, entendemos que influenciamos práticas e processos que têm impacto significativo no meio ambiente e nas pessoas.
            </p>
            <p className="text-lg md:text-xl mt-4">
              É nosso dever adotar boas práticas e elevar os padrões de qualidade em toda a cadeia de valor, respaldados nos pilares de nossa estratégia de Responsabilidade Corporativa, aplicável a todas as empresas do Grupo.
            </p>
          </div>
        </div>
      </div>
    </section>
    </>
    )
}