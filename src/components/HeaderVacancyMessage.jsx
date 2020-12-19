import React from 'react';

const HeaderVacancyMessage = () => {
  const handleCopyMessage = () => {
    console.log('Copy message');
  };

  return (
    <div className="HeaderVacancy-message">
      <h1>Hola Shai</h1>
      <p>Mensaje para copiar y mandarselo a Shai</p>
      <button type="button" onClick={handleCopyMessage}>Copiar mensaje</button>
    </div>
  );
};

export default HeaderVacancyMessage;
