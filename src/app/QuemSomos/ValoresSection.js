import React from 'react';

const ValoresSection = (props) => {

  return (
    <div id={`${props.id}`} className="flex flex-col md:flex-row items-center justify-between p-8 bg-white md:mt-10">
      <div className={`md:w-1/1`}>
        <h3 className="mb-6 underline subTitulo-cinza">{props.subtitulo}</h3>
        <h1 className={`text-lg customPurple title`}>{props.titulo}</h1>
        <p className="mt-4 body1">
          {props.p1}
        </p>
        <p className="mt-4 body1">
          {props.p2}
        </p>
        <p className="mt-4 body1">
          {props.p3}
        </p>
      </div>
      <div className={`mt-8 md:mt-0 md:w-1/1 flex justify-end relative`}>
        <img src={props.imgSrc} alt={props.imgAlt} className="w-full h-auto md:w-4/6 rounded-lg " />
      </div>
    </div>
  );
}

export default ValoresSection;