import React from 'react';

export default function HomeBanner() {
  return (
    <div
      className="relative w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('./imagens/bannerNiteroi.jpg')" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-start px-8 md:px-16">
        <div className="text-white max-w-xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-sky-400 h4Headline leading-[2.5]">
            Somos o seu parceiro inovador, ágil e experiente em tecnologia e serviços de TI.
          </h1>
          <p className="mt-4 body1 leading-loose">
            Compreendemos sua empresa em primeiro lugar, direcionando nossa abordagem para suas necessidades específicas. Em seguida, integramos soluções tecnológicas para impulsionar o seu sucesso.
          </p>
          <a href="#quemSomos">
            <button className="mt-6 px-6 py-2 botao flex items-center gap-2 text-white rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 13.5L12 21m0 0L4.5 13.5M12 21V3"
                />
              </svg>
              Conheça mais
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
