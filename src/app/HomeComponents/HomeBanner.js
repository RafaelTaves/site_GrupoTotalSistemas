import React from 'react';

export default function HomeBanner(props) {
  return (
    <div className="flex flex-col md:flex-row min-h-3/4 w-full">
      <div className={`md:w-2/5 w-full ${props.bg} flex flex-col justify-center items-start text-white p-10`}>
        <h1 className={`text-3xl md:text-5xl font-bold mb-4 ${props.textH1}`}>{props.h1}</h1>
        <p className={`text-base md:text-lg body1 mb-6 ${props.textP}`}>
        {props.p}
        </p>
        {props.botao === true ? <a href="#quemSomos">
            <button className={`mt-6 px-6 py-2 botao flex gap-2 ${props.textP} rounded-full shadow-lg`}>
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
          </a> : ""}
      </div>

      <div className="md:w-3/5 w-full">
        <img 
          src={props.imagem} 
          alt="Banner" 
          className="h-full w-full object-cover " 
        />
      </div>
    </div>
  );
};

