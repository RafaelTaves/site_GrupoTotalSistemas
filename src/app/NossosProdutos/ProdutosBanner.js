import React from "react";

export default function ProdutosBanner () {
    
    return(
        <>
            <h2 className="h5Headline customPurple text-center md:text-left md:h4Headline mb-10">Nossos produtos:</h2>
            <div className="flex flex-col md:flex-row items-center justify-between p-8 bg-[#921004] rounded-3xl">
                <div className="md:w-1/2 text-left">
                    <img className="mb-8" src="./imagens/logoInffelBranco.png"></img>
                    <p className="body3 text-white underline mb-8"># FoodTech</p>
                    <h4 className="h6Headline text-white md:h4Headline mb-4">Tornando os restaurantes um lugar incrível!</h4>
                    <p className="body2 text-white md:body1">O Inffel está cheio de soluções inteligentes e intuitivas para você poder otimizarao máximo o seu food-service.</p>
                </div>
                <div className="mt-8 md:mt-0 md:w-1/2 md:ml-auto flex justify-end relative ">
                
                </div>
            </div>
        </>    
    )
}