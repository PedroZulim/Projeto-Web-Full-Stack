import React from 'react';

function Header() {
  return (
    <div className='Header'>
      <div className='LogoHeader'>
        <img src="Logo-Header.png" alt='Logo SerMais'/>
      </div>
      <div className='buttons-header'>
        <div className='button'>
          <button>INÍCIO</button>
        </div>
        <div className='button'>
          <button>SOBRE NÓS</button>
        </div>
        <div className='button'>
          <button>SERVIÇOS</button>
        </div>
        <div className='button'>
          <button>EQUIPE</button>
        </div>
        <div className='button'>
          <button>CONTATO</button>
        </div>
      </div>
    </div>
  );
}

export default Header;
