'use client';

import Link from 'next/link';
import React, {useState} from 'react';
const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header id="Header" className="flex items-center justify-between p-6">
      <div className="flex items-center">
        <img src='./imagens/logo.png' alt="Logo" className="h-10 w-auto" />
      </div>
      <nav className="hidden md:flex space-x-6 text-gray-600">
        <ul className="flex space-x-6">
          <li><Link href="/" className={`hover:text-gray-900 underline ${props.inicioBold}`}>Início</Link></li>
          <li><Link href="QuemSomos" className={`hover:text-gray-900 underline ${props.quemSomosBold}`}>Quem somos</Link></li>
          <li><Link href="OQueFazemos" className={`hover:text-gray-900 underline ${props.oQueFazemosBold}`}>O que fazemos</Link> </li>
          <li><a href="#nossos-produtos" className={`hover:text-gray-900 underline ${props.nossosProdutosBold}`}>Nossos produtos</a></li>
          <li><a href="#esg" className={`hover:text-gray-900 underline ${props.esgBold}`}>ESG</a></li>
          <li><a href="#contatos" className={`hover:text-gray-900 underline ${props.contatosBold}`}>Contatos</a></li>
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
          <li><a href="#inicio" className={`hover:text-gray-900 ${props.inicioBold}`}>Início</a></li>
          <li><a href="#quem-somos" className={`hover:text-gray-900 ${props.quemSomosBold}`}>Quem somos</a></li>
          <li><a href="#o-que-fazemos" className={`hover:text-gray-900 ${props.oQueFazemosBold}`}>O que fazemos</a></li>
          <li><a href="#nossos-produtos" className={`hover:text-gray-900 ${props.nossosProdutosBold}`}>Nossos produtos</a></li>
          <li><a href="#esg" className={`hover:text-gray-900 ${props.esgBold}`}>ESG</a></li>
          <li><a href="#contatos" className={`hover:text-gray-900 ${props.contatosBold}`}>Contatos</a></li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
