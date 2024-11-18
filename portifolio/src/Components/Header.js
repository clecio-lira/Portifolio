import React from 'react'

const Header = () => {
  return (
    <header className='text-gray-100 flex justify-around py-2 items-center'>
        <div id='logo'><p>CL</p></div>
        <nav className='space-x-7'>
            <a>Inicio</a>
            <a>Linguagens</a>
            <a>Projetos</a>
            <a>Contatos</a>
        </nav>
    </header>
  )
}

export default Header