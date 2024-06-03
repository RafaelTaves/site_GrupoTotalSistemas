import React from 'react';
import './OQueFazemos.css'

const OQueFazemos = () => {
  const services = [
    {
      icon: './imagens/iconeEtiqueta.ico', 
      title: 'Locação de Impressoras de Etiquetas & Computadores',
      description: 'O melhor compromisso entre redução de custos e serviço de qualidade. Permite que se foque inteiramente no seu negócio, deixando a responsabilidade da informática para nós.',
    },
    {
      icon: './imagens/iconeLapis.ico',
      title: 'Elaboração de Projetos',
      description: 'Definir com o cliente exatamente o que ele deseja. Como ele quer, qual público alvo, qual estratégia a ser seguida e qual orçamento. A partir disso criamos um protótipo com nossa equipe de UX/UI.',
    },
    {
      icon: './imagens/iconeCode.ico',
      title: 'Desenvolvimento',
      description: 'Precisa de controle e gestão? Deixe que um sistema faça o trabalho pesado para você! Com um software pensado na sua realidade, você vai poder focar no que é realmente importante.',
    },
    {
      icon: './imagens/iconeCelular.ico',
      title: 'Soluções em APP',
      description: 'A praticidade de uma solução que caiba na palma da nossas mãos vem através dos APPs. Utilizamos as melhores ferramentas para você conseguir ter uma solução rápida, prática e simples no seu celular/tablet.',
    },
    {
      icon: './imagens/iconeComputador.ico',
      title: 'Portais Institucionais',
      description: 'Desenvolvemos a solução para a sua presença no mundo digital. Desta forma você terá um site institucional moderno e acessível, que será um excelente canal de contato com o seus clientes / público alvo.',
    },
    {
      icon: './imagens/iconeNuvem.ico',
      title: 'Digitalização de Documentos',
      description: 'Ao digitalizar e armazenar documentos em formato digital, garantimos segurança, acessibilidade fácil e minimizamos perdas, trazendo eficiência e economia.',
    },
    {
        title: 'Entre em contato para entendermos como podemos te ajudar.',
        isFeatured: true, 
      },
  ];

  const items = [
    { number: 30, label: 'Anos' },
    { number: 4, label: 'Empresas' },
    { number: '550+', label: 'Clientes atendidos' },
    { number: '50+', label: 'Projetos' },
    { number: '45+', label: 'Colaboradores' },
  ];

  return (
    <section id="OQueFazemos" className="py-12 bg-white">
    <div className="max-w-screen-xl mx-auto px-4">
      <h3 className="mb-6 underline subTitulo-cinza">O QUE FAZEMOS</h3>
      <h2 className="text-3xl font-bold mb-8 h5Headline customPurple">Pensamos no futuro. E pensamos em você.</h2>
      <p className="body1 mb-12">
        Com nossa metodologia exclusiva para fornecer os serviços e soluções empresariais de TI necessários, visamos não apenas atender, mas superar suas expectativas, permitindo que alcance seus resultados desejados e acelere seu crescimento de maneira significativa.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
            <div
                 key={index}
                className={`flex flex-col items-start ${
                 service.isFeatured
                ? 'md:col-span-2 md:col-start-2 lg:col-span-2 lg:col-start-3' 
                : ''
      }`}
          >
            {!service.isFeatured && (
              <img src={service.icon} alt={`${service.title} icon`} className="w-12 h-12 mb-4" />
            )}
            <div
                className={`bg-white mt-4 rounded-lg  h-full flex flex-col ${
                 service.isFeatured ? 'fundo p-6 items-start' : '' 
                }`}
            >
              {service.isFeatured && ( 
              <img src="./imagens/imagemCard.png" alt="Ícone de Pergunta" className="w-16 h-16 mb-4" />
            )}  
              <h3 className="h6Headline text-left mb-4">{service.title}</h3>
              <p className="body1 text-left">{service.description}</p>
              {service.isFeatured && (
                <button className="mt-4 px-4 py-2 botaoV flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                  </svg>
  
                  Entre em contato
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
    <div className='max-w-screen-xl mx-auto px-4'>   
      <div className="banner flex flex-col md:flex-row md:justify-around md:items-center">
        {items.map((item, index) => (
          <div 
            key={item.label} 
            className={`flex-1 flex flex-col items-center text-center mt-2 mb-2 lg:py-8${
              index === 2 ? 'md:col-span-2' : ''
            }`} 
          >
            <span className="customPurple h4Headline">{item.number}</span>
            <span className='body1'>{item.label}</span>
          </div>
        ))}
      </div>
    </div>   
  </section>
  );
}

export default OQueFazemos;