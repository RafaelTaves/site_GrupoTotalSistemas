import React from 'react';

const ClientesBanner = () => {
  const logos = [
    { src: './imagens/Logos/LogoMarinhaMaior.png', alt: 'Marinha do Brasil', className: "h-16 w-auto object-contain" },
    { src: './imagens/Logos/NoiLogo.png', alt: 'Noi', className: "h-16 w-auto object-contain" },
    { src: './imagens/Logos/stjd-2.png', alt: '', className: "h-12 w-auto" },
    { src: './imagens/Logos/lojaFlaLogo.png', alt: 'Loja Flamengo', className: "h-12 w-auto" },
    { src: './imagens/Logos/niteroi2Logo.png', alt: '2+', className: "h-12 w-auto" },
    { src: './imagens/Logos/feSaudeLogo.png', alt: 'Great Ocean', className: "h-12 w-auto" },
    { src: './imagens/Logos/greatoceanLogo.png', alt: 'FeSaude', className: "h-12 w-auto" },
  ];

  return (
    <section className="bg-white pt-16 pb-0 p-8 max-w-7xl mx-auto">
    <div className="">
    <div className="flex overflow-x-auto whitespace-nowrap justify-between items-start scrollbar-hide"> 
      {logos.map((logo, index) => (
        <div key={index} className="flex-shrink-0 px-4"> 
          <img src={logo.src} alt={logo.alt} className={logo.className} />
        </div>
      ))}
    </div>
  </div>
</section>

  );
};

export default ClientesBanner;
