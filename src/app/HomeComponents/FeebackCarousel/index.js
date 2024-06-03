'use client';
import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import './FeedBackCarousel.css';

function FeedbackCarousel() {

  const testimonials = [
    {
      quote: 'Estamos extremamente satisfeitos com a parceria com a GTS. Suas soluções inovadoras transformaram nossa abordagem aos negócios. A eficiência operacional aumentou significativamente, e a equipe de suporte dedicada sempre esteve pronta para atender às nossas necessidades. Recomendamos seus serviços a todas as empresas em busca de soluções tecnológicas de ponta.',
      author: 'Aria Silva, Diretora de Operações da XYZ Empreendimentos',
    },
    {
      quote: 'A GTS superou nossas expectativas em todos os aspectos. Desde o atendimento inicial até a implementação e suporte contínuo, eles demonstraram um comprometimento excepcional com a excelência. Suas soluções personalizadas realmente impulsionaram nossa produtividade e nos deram uma vantagem competitiva. É um prazer recomendá-los a qualquer empresa que busque inovação tecnológica.',
      author: 'Carlos Oliveira, Gerente de Marketing na ABC Soluções',
    },
    {
      quote: 'A parceria com a GTS tem sido fundamental para o crescimento do nosso negócio. As soluções implementadas não apenas otimizaram nossos processos, como também trouxeram uma nova perspectiva sobre como podemos inovar. O suporte oferecido é impecável, sempre ágil e atencioso. Recomendamos o Grupo Total Sistemas a qualquer empresa que busque excelência em tecnologia e atendimento.',
      author: 'João Silva, Proprietário do Restaurante Sabores da Vila',
    },
  ];

  const swiperRef = useRef(null); // Referência para o Swiper

  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slidePrev(); // Navegar para o slide anterior
    }
  };

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideNext(); // Navegar para o próximo slide
    }
  };

  return (
    <section className="max-w-screen-xl mx-auto px-4 py-12">
      <h3 className="mb-6 underline subTitulo-cinza">O QUE DIZEM NOSSOS CLIENTES</h3>
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/4 bg-[#204FEC] text-white p-8 rounded-lg">
          <h2 className="h5Headline mb-4">Somos movidos pelo sucesso. O seu sucesso.</h2>
          <p className='body1'>Descubra como trabalhamos com inovadores e líderes de mercado em todo Brasil.</p>
        </div>

        <div className="md:w-2/3 mt-8 md:mt-0 md:ml-8 relative">
          <Swiper 
            ref={swiperRef}
            modules={[Autoplay, Pagination]}
            slidesPerView={1}
            spaceBetween={30}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            pagination={{
              clickable: true,
              el: '.carousel-dots',
              bulletClass: 'dot',
              bulletActiveClass: 'selected',
            }}
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="p-8 bg-white rounded-xl shadow-md border-2">
                  <p className="body1 mb-4 text-left">"{testimonial.quote}"</p>
                  <p className="subtitle3 text-slate-500 text-left">{testimonial.author}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="flex  mt-2 hidden md:flex"> 
            <button onClick={handlePrev} className="swiper-button-prev bg-black/50 text-white rounded-full w-7 h-7 mr-2 flex items-center justify-center group-hover:bg-black/70">
              ◀
            </button>
            <button  onClick={handleNext} className="swiper-button-next bg-black/50 text-white rounded-full w-7 h-7 flex items-center justify-center group-hover:bg-black/70">
              ▶
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeedbackCarousel;
