import React from 'react'

const Banner = (props) => {
    const items = [
        { number: 30, label: 'Anos' },
        { number: 4, label: 'Empresas' },
        { number: '550+', label: 'Clientes atendidos' },
        { number: '50+', label: 'Projetos' },
        { number: '45+', label: 'Colaboradores' },
    ];

    return (
        <div className='bg-white p-8'>
            <div className={`rounded-lg ${props.color} flex flex-col md:flex-row md:justify-around md:items-center`}>
                {items.map((item, index) => (
                    <div
                        key={item.label}
                        className={`flex-1 flex flex-col items-center text-center mt-2 mb-2 lg:py-8${index === 2 ? 'md:col-span-2' : ''
                            }`}
                    >
                        <span className={`${props.colorText} h4Headline`}>{item.number}</span>
                        <span className={`${props.colorText} body1`}>{item.label}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Banner;