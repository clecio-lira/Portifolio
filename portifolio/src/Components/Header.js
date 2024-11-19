const Header = () => {
  return (
    <header className='text-gray-100 flex justify-around py-2 items-center bg-gray-900'>
        <div id='logo'><p>CL</p></div>
        <nav className='space-x-3'>
            <a>Inicio</a>
            <a>Linguagens</a>
            <a>Projetos</a>
            <a>Contatos</a>
        </nav>
    </header>
    
  )
}

export default Header