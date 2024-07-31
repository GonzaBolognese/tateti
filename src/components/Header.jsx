import '../components/header.css'

function Header({resetGame, resetHistory}) {
  return (
    <nav className='header'>
        <div className='div_header'>
            <div className='div_logo'>
                <span>Ta-Te-Ti</span>
            </div>
            <div className='div_buttons'>
                    <button onClick={resetGame}>Resetear el juego</button>
                    <button onClick={resetHistory}>Resetear marcador</button>
            </div>
        </div>
    </nav>
  )
}

export default Header