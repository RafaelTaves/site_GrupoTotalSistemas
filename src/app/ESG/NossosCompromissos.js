import React from 'react'
import { FaTree, FaHandshake } from "react-icons/fa6";
import { MdBadge } from "react-icons/md";
import { FaHandHoldingHeart } from "react-icons/fa";
// import { PiSoccerBallFill } from "react-icons/pi";

export default function NossosCompromissos () {

  const cards = [
    {
    titulo: "Respeitar o meio ambiente",
    icon: <FaTree className='text-lime-600 h-14 w-auto border border-gray-200 rounded-xl p-2'/>,
    paragrafo: "Reduzir ao máximo as emissões provenientes de nossas atividades, adotando uma postura responsável e proativa.",
    img: "./imagens/stockPhotoRespectEnviroment.jpg"
    },
    {
     titulo: "Ser um empregador de referência",
     icon: <MdBadge className='text-lime-600 h-14 w-auto border border-gray-200 rounded-xl p-2'/>,
     paragrafo: "Comprometemo-nos a aprimorar constantemente nossa capacidade de atender às necessidades de nossa força de trabalho.",
     img: "./imagens/stockPhotoEmployer.jpg"
    },
    {
      titulo: "Diversidade, Equidade e Inclusão",
      icon: <FaHandHoldingHeart className='text-lime-600 h-14 w-auto border border-gray-200 rounded-xl p-2'/>,
      paragrafo: "Fomentar um ambiente de trabalho inclusivo, onde todos se sintam bem-vindos, valorizados e reconhecidos.",
      img: "./imagens/stockPhotoInclusion.jpg"
     },
     {
      titulo: "Apoiar e valorizar as comunidades vizinhas",
      icon: <FaHandshake className='text-lime-600 h-14 w-auto border border-gray-200 rounded-xl p-2'/>,
      paragrafo: "Construir relações com as comunidades próximas aos nossos escritórios para o progresso social e econômico.",
      img: "./imagens/stockPhotoHelpNeighboor.jpg"
     },
    //  {
    //   titulo: "O esporte como poder de transformar vidas, direcionar destinos e alterar narrativas.",
    //   icon: <PiSoccerBallFill className='text-green-400 h-28 w-auto'/>,
    //   paragrafo: "Por essa razão, ao longo de mais de três décadas, temos sido um dos investidores em iniciativas que contribuem para o cenário esportivo nacional.",
    //   img: "./imagens/stockPhotoSport.jpg"
    //  }
  ]

  return(
  <>
   <section id="O_quefazemos" className="bg-white pt-16 pb-0 p-8 max-w-7xl mx-auto">
      <div className="">
          <h3 className="mb-6 underline subTitulo-cinza">NOSSOS COMPROMISSOS</h3>
          <h2 className="font-bold mb-8 h5Headline customPurple">Nossa estratégia de Responsabilidade se fundamenta em quatro pilares de atuação:</h2> 
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
        {cards.map((card) => (
          <div key={card.id} className="bg-neutral-100 rounded-3xl border shadow-md hover:shadow-lg ">
            {/* <img
              src={card.img}
              className="w-full h-48 object-cover"
            /> */}
            <div className="p-4 pt-2 min-h-48">
              <div className=''>
                {card.icon}
              </div>
              <h3 className="text-xl font-bold customPurple self-center title mt-2">{card.titulo}</h3>
              <p className="body1 text-gray-900 mt-1">{card.paragrafo}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  </>
  )
}