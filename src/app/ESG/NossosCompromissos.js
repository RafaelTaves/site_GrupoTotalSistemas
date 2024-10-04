import React from 'react'

export default function NossosCompromissos () {

  const cards = [
    {
    titulo: "Respeitar o meio ambiente",
    paragrafo: "Reduzir ao máximo as emissões provenientes de nossas atividades, adotando uma postura responsável e proativa.",
    img: "./imagens/stockPhotoRespectEnviroment.jpg"
    },
    {
     titulo: "Ser um empregador de referência",
     paragrafo: "Comprometemo-nos a aprimorar constantemente nossa capacidade de atender às necessidades de nossa força de trabalho.",
     img: "./imagens/stockPhotoEmployer.jpg"
    },
    {
      titulo: "Diversidade, Equidade e Inclusão",
      paragrafo: "Fomentar um ambiente de trabalho inclusivo, onde todos se sintam bem-vindos, valorizados e reconhecidos.",
      img: "./imagens/stockPhotoInclusion.jpg"
     },
     {
      titulo: "Apoiar e valorizar as comunidades vizinhas",
      paragrafo: "Construir relações com as comunidades próximas aos nossos escritórios para o progresso social e econômico.",
      img: "./imagens/stockPhotoHelpNeighboor.jpg"
     },
     {
      titulo: "O esporte como poder de transformar vidas, direcionar destinos e alterar narrativas.",
      paragrafo: "Por essa razão, ao longo de mais de três décadas, temos sido um dos investidores em iniciativas que contribuem para o cenário esportivo nacional.",
      img: "./imagens/stockPhotoSport.jpg"
     }
  ]

  return(
  <>
   <section id="O_quefazemos" className="bg-white pt-16 p-8 max-w-7xl mx-auto">
      <div className="">
          <h3 className="mb-6 underline subTitulo-cinza">NOSSOS COMPROMISSOS</h3>
          <h2 className="font-bold mb-8 h5Headline customPurple">Nossa estratégia de Responsabilidade se fundamenta em quatro pilares de atuação:</h2> 
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card) => (
          <div key={card.id} className="bg-white rounded-md border shadow-lg overflow-hidden">
            <img
              src={card.img}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold mb-2 customPurple">{card.titulo}</h3>
              <p className="text-gray-900">{card.paragrafo}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  </>
  )
}