'use client';
import React, { useEffect, useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import BadNotification from '../GlobalComponents/Notifications/badNotification';

function ContactForm() {
    const [nome, setNome] = useState("")
    const [sobrenome, setSobrenome] = useState("")
    const [email, setEmail] = useState("")
    const [empresa, setEmpresa] = useState("")
    const [cargo, setCargo] = useState("")
    const [telefone, setTelefone] = useState("")
    const [showNotification, setShowNotification] = useState(false);

  const handleChangeNome = (e) => {
    setNome(e.target.value)
  };

  const handleChangeSobrenome = (e) => {
    setSobrenome(e.target.value)
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value)
  };

  const handleChangeEmpresa = (e) => {
    setEmpresa(e.target.value)
  };

  const handleChangeCargo = (e) => {
    setCargo(e.target.value)
  };

  const handleChangeTelefone = (e) => {
    setTelefone(e.target.value)
  };

  const handleForm = async (e) => {
    const result = await handleSubmit(e); 

    handleForm(); 
    setShowNotification(true);
    setNome("")
    setSobrenome("")
    setEmail("")
    setEmpresa("")
    setCargo("")
    setTelefone("")
    
  }

    const [state, handleSubmit] = useForm("mzzppnjr");

    const handleCloseNotification = () => {
        setShowNotification(false);
      };
      
  return (
    <section className="bg-white pt-16 pb-0 p-8 max-w-7xl mx-auto">
      <div className="max-w-screen-2xl">
            <BadNotification
              show={showNotification}
              title="Sucesso"
              desc="Formulário enviado com sucesso! Te retornaremos em breve."
              onClose={handleCloseNotification}
            />
        <div className="flex flex-col-reverse md:flex-row-reverse justify-between items-start">
            <div className="md:w-1/2 order-2 md:order-1 justify-start">  
                <img src='./imagens/fotoContatos.png' alt="Pessoas trabalhando" /> 
            </div>

            <form  onSubmit={handleForm} className="max-w-xl mx-auto mt-8 md:mt-0 bg-[#DEE2E6] p-8 rounded-xl">
                <h2 className="h5Headline customPurple mb-4">Iremos surpreendê-lo com os resultados que entregamos. Vamos conversar?</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                        <label className=''>Nome</label>
                        <input
                        type="text"
                        name="Primeiro Nome"
                        placeholder="Nome"
                        value={nome}
                        onChange={handleChangeNome}
                        className="border rounded-md w-full p-2 mt-2"
                        required
                        />
                    </div>
                    <div>
                        <label className=''>Sobrenome</label>
                        <input
                        type="text"
                        name="Sobrenome"
                        placeholder="Sobrenome"
                        value={sobrenome}
                        onChange={handleChangeSobrenome}
                        className="border rounded-md w-full mb-4 p-2 mt-2"
                        required
                        />
                    </div>
                <div>
                    <label>Email</label>
                    <input
                        type="email"
                        name="Email"
                        placeholder="E-mail"
                        value={email}
                        onChange={handleChangeEmail}
                        className="border rounded-md p-2 w-full mb-4 mt-2"
                        required
                    />
                </div>
                <div>
                    <label>Empresa</label>
                    <input
                        type="text"
                        name="Empresa"
                        placeholder="Empresa"
                        value={empresa}
                        onChange={handleChangeEmpresa}
                        className="border rounded-md p-2 w-full mt-2"
                        required
                    />
                </div>
                <div>
                    <label>Cargo</label>
                    <div className="mb-4">
                        <select
                        name="Cargo"
                        value={cargo}
                        onChange={handleChangeCargo}
                        className="border rounded-md p-2 w-full mt-2"
                        required
                        >
                        <option value="">Selecione um cargo</option>
                        <option value="CEO">CEO</option>
                        <option value="Sócio">Sócio</option>
                        <option value="Diretor">Diretor</option>
                        <option value="Gerente">Gerente</option>
                        <option value="Gestor">Gestor</option>
                        </select>
                    </div>
                </div>

                <div>
                    <label>Telefone</label>
                    <input
                        type="tel"
                        name="Telefone"
                        placeholder="Telefone"
                        value={telefone}
                        onChange={handleChangeTelefone}
                        className="border rounded-md p-2 w-full mt-2"
                        required
                    />
                    </div>
                </div>

                <div className="flex items-center mb-4">
                    <input required type="checkbox" id="privacyPolicy" className="mr-2" />
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
