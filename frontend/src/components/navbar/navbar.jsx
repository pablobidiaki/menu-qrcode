import './navbar.css'

function Navbar () {
    return(
        <div className='fixed w-full z-1 font-sans'>
            <ul className='bg-gray-100 scrollbar-hide overflow-x-scroll flex list-none p-0'>
                <li className='min-w-max px-10 py-2 text-2xl text-gray-800'><a href='#combos'>Combos</a></li>
                <li className='min-w-max px-10 py-2 text-2xl text-gray-800'><a href='#lanches_hamburguer'>Lanches com hambúrguer</a></li>
                <li className='min-w-max px-10 py-2 text-2xl text-gray-800'><a href='#lanches_frango'>Lanches com frango</a></li>
                <li className='min-w-max px-10 py-2 text-2xl text-gray-800'><a href='#lanches_veganos'>Lanches veganos</a></li>
                <li className='min-w-max px-10 py-2 text-2xl text-gray-800'><a href='#acompanhamentos'>Acompanhamentos</a></li>
                <li className='min-w-max px-10 py-2 text-2xl text-gray-800'><a href='#bebidas'>Bebidas</a></li>
                <li className='min-w-max px-10 py-2 text-2xl text-gray-800'><a href='#bebidas_alcoolicas'>Bebidas alcoólicas</a></li>
                <li className='min-w-max px-10 py-2 text-2xl text-gray-800'><a href='#sobremesas'>Sobremesas</a></li>
            </ul>
        </div>
    )
}

export default Navbar;