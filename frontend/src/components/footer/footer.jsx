import '../../App.css'

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import texts from '../../texts/texts';

const Footer = ({itens_quantity}) => {

    const [quantity, setQuantity] = useState(1)
    const navigate = useNavigate()

    return (
        <div className='flex justify-between text-white fixed bottom-4 left-4 right-4 bg-blue-600 p-2 z-10 rounded-xl font-sans'>
            <p className='p-2'>{quantity} {quantity == 1 ? texts.item_adicionado : texts.itens_adicionados}</p>
            <button onClick={() => navigate("/my_cart") } className='bg-blue-400 p-2 rounded-xl'>{texts.visualizar_pedido}</button>
        </div>
    )
}

export default Footer;