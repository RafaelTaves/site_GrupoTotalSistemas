import Link from 'next/link';
import React from 'react';
import { FaLinkedin, FaFacebook, FaInstagram } from 'react-icons/fa';



function Footer() {
    return (
        <footer className="bg-[#10171E] text-white pt-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:inline-block">
            <div className="mb-4 md:mb-0 w-20 "> 
            <img src="./imagens/iconGTS.png"></img>
            </div>
  
            <div className="grid grid-cols-1 md:flex md:justify-around ms-3 md:mt-5">
              <div className='md:w-1/5'>
                <ul className="underline body3 mb-5">
                  <li className='mb-1'><Link href="/">Início</Link></li>
                  <li className='mb-1'><Link href="QuemSomos">Quem somos</Link></li>
                  <li className='mb-1'> <Link href="OQueFazemos">O que fazemos</Link></li>
                  <li className='mb-1'><Link href="NossosProdutos">Nossos produtos</Link></li>
                  <li className='mb-1'><Link href="ESG">ESG</Link></li>
                  <li className='mb-1'><Link href="Contato">Contatos</Link></li>
                </ul>
              </div>
              <div className="md:flex md:gap-8">
                <div className='mb-2'>
                  <a href="https://www.instagram.com/inffelsistemas/?hl=pt" className="text-white mr-4">
                    <FaInstagram className="w-8 h-8" />
                  </a>
                  <h4 className="font-bold mb-2">Inffel</h4>
                  <p className='body3'>Nos siga no Instagram e acompanhe todas as nossas novidades!</p>
                </div>
                <div className='mb-2'>
                  <a href="https://www.instagram.com/totalsistemasoficial/" className="text-white mr-4">
                    <FaInstagram className="w-8 h-8" />
                  </a>
                  <h4 className="font-bold mb-2">Total Sistemas</h4>
                  <p className='body3'>Siga-nos no Instagram para acompanhar de perto nossas atualizações!</p>
                </div>

                <div>
                  <div className="flex items-center mt-6 md:mt-0 mb-8">
                      <a href="#" className="text-white mr-4">
                        <FaLinkedin className="w-8 h-8" />
                      </a>
                      <a href="#" className="text-white mr-4">
                        <FaFacebook className="w-8 h-8" />
                      </a>
                      <a href="#" className="text-white">
                        <FaInstagram className="w-8 h-8" />
                      </a>
                  </div>
                  <div className='mb-6'>
                    <p><Link href="/PoliticaDePrivacidade" className="body3 underline">Política de Proteção de Dados</Link></p>
                    <Link href="/PoliticaDePrivacidade" className="body3 underline">Política de Cookies</Link>
                  </div>                  
                </div>
              </div>
            </div>
            <div className='ms-3 md:flex md:mt-8 md:justify-between'>
                  <div className='text-sm mb-8'>
                    <p>&copy; 2024 GRUPO TOTAL SISTEMA</p>
                  </div>
                  <div className='mb-2'>
                    <a href="#Header" ><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" />
                    </svg></a>
                  </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }

  export default Footer;