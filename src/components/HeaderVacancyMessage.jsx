import React, { useRef } from 'react';

const HeaderVacancyMessage = ({ vacancy }) => {
  const refMessage = useRef(null);

  const handleCopyMessage = () => {
    navigator.clipboard.writeText(refMessage.current.innerText).then(() => {
      console.log('Message copied');
    });
  };

  return (
    <>
      <div ref={refMessage} className="HeaderVacancy-message">
        <h1>Hola Shaili,</h1>
        <p>
          Estoy interesado en aplicar a la vacante de
          {' '}
          {vacancy.title}
          {' '}
          de la empresa
          {' '}
          {vacancy.company}
          , me podrías hacer una intro por favor.
        </p>
        <p>
          Aquí está la url de la vacante
          {' '}
          {vacancy.urlVacant}
          {' '}
          por si la necesitas.
        </p>
        <p>Gracias.</p>
      </div>
      <button
        className="HeaderVacancy-message-btn"
        type="button"
        onClick={handleCopyMessage}
      >
        Copiar mensaje
      </button>
    </>
  );
};

export default HeaderVacancyMessage;
