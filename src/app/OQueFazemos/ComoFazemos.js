import React from 'react'

const ComoFazemos = () => {

    return (
        <section id="ComoFazemos" className='bg-white py-12'>
            <div className="max-w-screen-xl mx-auto px-4 text-left">
                <h3 className="mb-6 underline subTitulo-cinza">COMO FAZEMOS</h3>
                <h2 className="h5Headline customPurple mb-4"> Nossa metodologia nos permite entregar resultadosque atendam aos desafios específicos do negócio. E impulsione a inovação em todas as direções</h2>
                <p className='body1'>Isso nos possibilita obter uma compreensão profunda dos requisitos de seu negócio, garantindo que sua tecnologia esteja perfeitamente alinhada com cada objetivo.</p>
            </div>

        <div className="w-full mt-24 px-4">
          <img src='./imagens/metodologia.png'></img>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 mt-10">
          <div className="flex flex-col items-left">
            <div className="bg-yellow-400 rounded-full h-12 w-12 mb-4"></div>
            <h3 className="h6Headline customPurple mb-2">Estratégia</h3>
            <p className="body1 text-left">
              Antes de formular qualquer recomendação, garantimos uma compreensão profunda do seu negócio, alinhando-nos com seus objetivos.
            </p>
            <p className="body1 text-left mt-2">
              Definimos uma estratégia robusta, identificando os serviços essenciais e mapeando as mudanças necessárias para alcançar resultados específicos.
            </p>
          </div>

          <div className="flex flex-col items-left">
            <div className="h-12 w-12 mb-4">
                <img src='./imagens/iconRedFazemos.png'></img>
            </div>
            <h3 className="h6Headline customPurple mb-2">Transformar</h3>
            <p className="body1 text-left">
              A reconstrução demanda atenção aos detalhes e uma visão clara. Nossa abordagem une décadas de experiência às melhores práticas, assegurando resultados transformacionais previsíveis.
            </p>
            <p className="body1 text-left mt-2">
              Por meio de um plano de transformação em fases, detalhando o trabalho essencial para atingir metas de negócios, alcançamos resultados excepcionais.
            </p>
          </div>

          <div className="flex flex-col items-left">
            <div className="bg-blue-500  h-12 w-12 mb-4"></div>
            <h3 className="h6Headline customPurple mb-2">Gerenciar</h3>
            <p className="body1 text-left">
              Para impulsionar o crescimento, compreendemos a necessidade de suporte operacional de TI de classe mundial no dia a dia. Isso permite que você se dedique plenamente aos seus clientes e ao sucesso do seu negócio.
            </p>
            <p className="body1 text-left mt-2">
              Garantimos um gerenciamento eficiente das operações e plataformas de TI. Dessa forma, você pode se concentrar no seu negócio principal, aproveitando os benefícios estratégicos e operacionais 24/7, 365 dias por ano.
            </p>
          </div>

          <div className="flex flex-col items-left">
            <div className="h-12 w-12 mb-4">
            <img src='./imagens/iconGreenFazemos.png'></img>
            </div>
            <h3 className="h6Headline customPurple mb-2">Otimizar</h3>
            <p className="body1 text-left">
              Enquanto celebramos conquistas, nossa mentalidade é sempre proativa, buscando novas formas de realinhar as capacidades tecnológicas para enfrentar os desenvolvimentos do mercado.
            </p>
            <p className="body1 text-left mt-2">
              Dedicamo-nos à pesquisa constante, desenvolvimento e exploração de tecnologias aplicáveis. Isso nos permite trazer ideias inovadoras, contribuindo assim para o contínuo aprimoramento da sua empresa.
            </p>
          </div>
        </div>
        </section>
    )
}

export default ComoFazemos;