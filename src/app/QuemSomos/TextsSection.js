import React from 'react';

function TextsSection() {
  return (
    <section className="bg-white py-12 p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="mb-4">
        <h3 className="mb-6 underline subTitulo-cinza">NOSSA MISSÃO</h3>
          <p className="h6Headline customPurple">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu metus tincidunt, efficitur nisl sodales, sagittis metus. Nullam scelerisque magna eu hendrerit convallis. In commodo eu mi vel dapibus. Etiam blandit elit nibh, vel iaculis nibh egestas nec. Cras aliquam magna vel porttitor maximus.
          </p>
        </div>

        <div className="mb-4">
          <h3 className="mb-6 underline subTitulo-cinza">NOSSA VISÃO</h3>
          <p className="h6Headline customPurple">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu metus tincidunt, efficitur nisl sodales, sagittis metus. Nullam scelerisque magna eu hendrerit convallis. In commodo eu mi vel dapibus. Etiam blandit elit nibh, vel iaculis nibh egestas nec. Cras aliquam magna vel porttitor maximus.
          </p>
        </div>
      </div>

      <div className="mt-8">
        <h3 className="mb-6 underline subTitulo-cinza">NOSSOS VALORES</h3>
        <p className="h6Headline customPurple">
          Damos grande importância à construção de parcerias duradouras com nossos clientes, fomentando um ambiente propício ao cultivo da confiança mútua e à colaboração efetiva que impacta positivamente. Nossos valores inegociáveis:
        </p>
      </div>
    </section>
  );
}

export default TextsSection;