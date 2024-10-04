import React from 'react';

function NossosProdutos() {
  const companies = [
    { name: 'Total Sistemas', logo: './imagens/logoTotal.png' },
    { name: 'Inffel', logo: './imagens/logoInffel.png' },
    { name: 'Bluespark', logo: './imagens/logoBlueSpark.png' },
    { name: 'iAccervo', logo: './imagens/logoiAccervo.png' },
  ];

  return (
    <div id="NossosProdutos" className="bg-white pt-16 p-8 max-w-7xl mx-auto">
      <div className="mx-auto px-4 sm:px-6 lg:px-0">
        <h3 className="mb-6 underline subTitulo-cinza">NOSSOS PRODUTOS</h3>
        <h2 className="h5Headline customPurple mb-4">Empresas do grupo</h2>
        <p className='body1'>O Grupo Total Sistemas cria tecnologias que ajudam as pessoas a expandir os negócios.</p>
        <div className="flex flex-wrap md:flex-nowrap justify-center items-center flex-col md:flex-row">
             {companies.map((company) => (
            <div key={company.name} className="w-1/3 md:w-1/4 p-4 flex justify-center items-center"> 
            <img src={company.logo} alt={company.name} className="max-h-24" />
        </div>
        ))}
        </div>
      </div>
    </div>
  );
}

export default NossosProdutos;