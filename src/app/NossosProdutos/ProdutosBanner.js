import Link from "next/link";
import React from "react";


export default function ProdutosBanner (props) {

    let bgColorClass = '';

  switch (props.color) {
    case 'red':
      bgColorClass = '[#921004]';
      break;
    case 'light-blue':
      bgColorClass = '[#009790]';
      break;
    case 'dark-blue':
      bgColorClass = '[#00A4EE]';
      break;
    // Adicione mais cores conforme necessário
    default:
      bgColorClass = 'bg-gray-500'; // Cor padrão caso não haja correspondência
      break;
  }

    return(
        <>
            <div className={`flex mx-6 md:mx-0 flex-col md:flex-row items-center justify-between p-8 bg-${bgColorClass} rounded-3xl mb-8`}>
                <div className="md:w-1/2 text-left">
                    <img className="mb-8" src={props.srcLogo} ></img>
                    <p className="body3 text-white underline mb-8">{props.subtitulo}</p>
                    <h4 className="h6Headline text-white md:h4Headline mb-4">{props.titulo}</h4>
                    <p className="body2 text-white md:body1">{props.p}</p>
                    <Link href="">
                    <button className={`mt-6 px-6 py-2 bg-white border rounded-full border-white text-${bgColorClass} flex items-center gap-2`}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                        </svg>
                        Ir para o site
                    </button>
                    </Link>
                </div>
                <div className="mt-8 md:mt-0 md:w-1/4 md:ml-auto flex justify-end relative md:me-40">
                    <img src={props.srcForma}></img>
                </div>
            </div>
        </>    
    )
}