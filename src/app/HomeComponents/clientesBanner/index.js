import React from 'react';

const ClientesBanner = () => {
  const logos = [
    { src: './imagens/Logos/marinha-brasil-logo-0.png', alt: 'Marinha do Brasil' },
    { src: './imagens/Logos/lojaFlaLogo.png', alt: 'Loja Flamengo' },
    { src: './imagens/Logos/NoiLogo.png', alt: 'Noi' },
    { src: './imagens/Logos/stjd-2.png', alt: '' },
    { src: './imagens/Logos/niteroi2Logo.png', alt: '2+' },
    { src: './imagens/Logos/feSaudeLogo.png', alt: 'Great Ocean' },
    { src: './imagens/Logos/greatoceanLogo.png', alt: 'FeSaude' },
  ];

  return (
    <section className="py-12">
    <div className="max-w-screen-xl mx-auto px-4">
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
