import React from 'react';

function TextsSection() {
  return (
    <section className="bg-white pt-16 pb-0 p-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="mb-4">
        <h3 className="mb-6 underline subTitulo-cinza">NOSSA MISSÃO</h3>
          <p className="h6Headline customPurple">
          Promover inovação tecnológica e excelência em serviços de TI, oferecendo soluções personalizadas, eficientes e transparentes que superem as expectativas e gerem valor real para nossos clientes.
          </p>
        </div>

        <div className="mb-4">
          <h3 className="mb-6 underline subTitulo-cinza">NOSSA VISÃO</h3>
          <p className="h6Headline customPurple">
          Ser referência no mercado de TI, reconhecida por nossa integridade, inovação e qualidade, proporcionando liberdade criativa e um ambiente de trabalho colaborativo que inspira crescimento e desenvolvimento contínuo.
          </p>
        </div>
      </div>

      <div className="mt-8">
        <h3 className="mb-6 underline subTitulo-cinza">NOSSOS VALORES</h3>
        <p className="h6Headline customPurple">
          Valorizamos parcerias duradouras, baseadas em confiança, transparência e colaboração.
          Acreditamos que relacionamentos sólidos são a base para resultados que impactam positivamente pessoas e negócios.
        </p>
      </div>
    </section>
  );
}

export default TextsSection;