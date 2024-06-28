'use client';
import React, { useState } from 'react';

function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    position: '',
    phone: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para enviar o formulário (integração com API, etc.)
  };

  return (
    <section className="bg-white p-8">
      <div className="max-w-screen-2xl">
        <div className="flex flex-col-reverse md:flex-row-reverse justify-between items-start">
            <div className="md:w-1/2 order-2 md:order-1 justify-start">  
                <img src='./imagens/imgFormulario.png' alt="Retângulo Cinza" /> 
            </div>

            <form onSubmit={handleSubmit} className="max-w-xl mx-auto mt-8 md:mt-0 bg-[#DEE2E6] p-8 rounded-xl">
                <h2 className="h5Headline customPurple mb-4">Iremos surpreendê-lo com os resultados que entregamos. Vamos conversar?</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                        <label className=''>Nome</label>
                        <input
                        type="text"
                        name="firstName"
                        placeholder="Nome"
                        value={formData.firstName}
                        onChange={handleChange}
                        className="border rounded-md w-full p-2 mt-2"
                        />
                    </div>
                    <div>
                        <label className=''>Sobrenome</label>
                        <input
                        type="text"
                        name="lastName"
                        placeholder="Sobrenome"
                        value={formData.lastName}
                        onChange={handleChange}
                        className="border rounded-md w-full mb-4 p-2 mt-2"
                        />
                    </div>
                <div>
                    <label>Email</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="E-mail"
                        value={formData.email}
                        onChange={handleChange}
                        className="border rounded-md p-2 w-full mb-4 mt-2"
                    />
                </div>
                <div>
                    <label>Empresa</label>
                    <input
                        type="text"
                        name="company"
                        placeholder="Empresa"
                        value={formData.company}
                        onChange={handleChange}
                        className="border rounded-md p-2 w-full mt-2"
                    />
                </div>
                <div>
                    <label>Cargo</label>
                    <div className="mb-4">
                        <select
                        name="position"
                        value={formData.position}
                        onChange={handleChange}
                        className="border rounded-md p-2 w-full mt-2"
                        >
                        <option value="">Cargo</option>
                        {/* Opções de cargo */}
                        </select>
                    </div>
                </div>

                <div>
                    <label>Telefone</label>
                    <input
                        type="tel"
                        name="phone"
                        placeholder="Telefone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="border rounded-md p-2 w-full mt-2"
                    />
                    </div>
                </div>

                <div className="flex items-center mb-4">
                    <input type="checkbox" id="privacyPolicy" className="mr-2" />
                    <label htmlFor="privacyPolicy" className="text-sm text-gray-600">
                    Ao enviar este formulário, você concorda com a nossa Política de Privacidade
                    </label>
                </div>

                <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-full"
                >
                    Enviar
                </button>
            </form>
        </div>
    </div>    
    </section>
  );
}

export default ContactForm;
