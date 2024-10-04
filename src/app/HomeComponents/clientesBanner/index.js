import React from 'react';

const ClientesBanner = () => {
  const logos = [
    { src: './imagens/Logos/LogoMarinhaMaior.png', alt: 'Marinha do Brasil' },
    { src: './imagens/Logos/NoiLogo.png', alt: 'Noi' },
    { src: './imagens/Logos/stjd-2.png', alt: '' },
    { src: './imagens/Logos/lojaFlaLogo.png', alt: 'Loja Flamengo' },
    { src: './imagens/Logos/niteroi2Logo.png', alt: '2+' },
    { src: './imagens/Logos/feSaudeLogo.png', alt: 'Great Ocean' },
    { src: './imagens/Logos/greatoceanLogo.png', alt: 'FeSaude' },
  ];

  return (
    <section className="bg-white pt-16 p-8 max-w-7xl mx-auto">
    <div className="">
    <div className="flex overflow-x-auto whitespace-nowrap justify-between scrollbar-hide"> 
      {logos.map((logo, index) => (
        <div key={index} className="flex-shrink-0 px-4"> 
          <img src={logo.src} alt={logo.alt} className="h-12 w-auto" />
        </div>
      ))}
    </div>
  </div>
</section>

  );
};

export default ClientesBanner;
