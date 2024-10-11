'use client';

import Link from 'next/link';
import React, {useState} from 'react';
const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header id="Header" className="flex items-center justify-between pt-4 pb-2 px-6 max-w-7xl mx-auto">
      <div className="flex items-center">
        <img src='./imagens/NovaLogoOpcao3PNG.png' alt="Logo" className="h-10 w-auto" />
      </div>
      <nav className="hidden md:flex space-x-6 text-gray-600">
        <ul className="flex space-x-6">
          <li><Link href="/" className={`hover:text-gray-900 underline ${props.inicioBold}`}>Início</Link></li>
          <li><Link href="QuemSomos" className={`hover:text-gray-900 underline ${props.quemSomosBold}`}>Quem somos</Link></li>
          <li><Link href="OQueFazemos" className={`hover:text-gray-900 underline ${props.oQueFazemosBold}`}>O que fazemos</Link> </li>
          {/* <li><Link href="NossosProdutos" className={`hover:text-gray-900 underline ${props.nossosProdutosBold}`}>Nossos produtos</Link></li> */}
          <li><Link href="ESG" className={`hover:text-gray-900 underline ${props.esgBold}`}>ESG</Link></li>
          <li><Link href="Contato" className={`hover:text-gray-900 underline ${props.contatosBold}`}>Contatos</Link></li>
        </ul>
      </nav>
      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-gray-600 focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden absolute top-16 right-0 w-full bg-white shadow-lg`}>
        <ul className="flex flex-col space-y-4 p-6 text-gray-600">
          <li><Link href="/" className={`hover:text-gray-900 ${props.inicioBold}`}>Início</Link></li>
          <li><Link href="QuemSomos" className={`hover:text-gray-900 ${props.quemSomosBold}`}>Quem somos</Link></li>
          <li><Link href="OQueFazemos" className={`hover:text-gray-900 ${props.oQueFazemosBold}`}>O que fazemos</Link></li>
          {/* <li><Link href="NossosProdutos" className={`hover:text-gray-900 ${props.nossosProdutosBold}`}>Nossos produtos</Link></li> */}
          <li><Link href="ESG" className={`hover:text-gray-900 ${props.esgBold}`}>ESG</Link></li>
          <li><Link href="Contato" className={`hover:text-gray-900 ${props.contatosBold}`}>Contatos</Link></li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
