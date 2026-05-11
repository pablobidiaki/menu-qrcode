import './navbar.css'

import texts from '../../texts/texts';

function Navbar () {
    return(
        <div className='fixed w-full z-1 font-sans'>
            <ul className='bg-gray-100 scrollbar-hide overflow-x-scroll flex list-none p-0'>
                <li className='min-w-max px-10 py-2 text-2xl text-gray-800'><a href='#combos'>{texts.titles.combos}</a></li>
                <li className='min-w-max px-10 py-2 text-2xl text-gray-800'><a href='#lanches_hamburguer'>{texts.titles.lanches_hamburguer}</a></li>
                <li className='min-w-max px-10 py-2 text-2xl text-gray-800'><a href='#lanches_frango'>{texts.titles.lanches_frango}</a></li>
                <li className='min-w-max px-10 py-2 text-2xl text-gray-800'><a href='#lanches_veganos'>{texts.titles.lanches_veganos}</a></li>
                <li className='min-w-max px-10 py-2 text-2xl text-gray-800'><a href='#acompanhamentos'>{texts.titles.acompanhamentos}</a></li>
                <li className='min-w-max px-10 py-2 text-2xl text-gray-800'><a href='#bebidas'>{texts.titles.bebidas}</a></li>
                <li className='min-w-max px-10 py-2 text-2xl text-gray-800'><a href='#bebidas_alcoolicas'>{texts.titles.bebidas_alcoolicas}</a></li>
                <li className='min-w-max px-10 py-2 text-2xl text-gray-800'><a href='#sobremesas'>{texts.titles.sobremesa}</a></li>
            </ul>
        </div>
    )
}

export default Navbar;