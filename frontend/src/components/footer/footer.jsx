import '../../App.css'
import texts from '../../texts/texts';

import { useNavigate } from 'react-router-dom';

const Footer = ({itens_quantity}) => {
    const navigate = useNavigate()

    return (
        <div className='flex justify-between text-white fixed bottom-4 left-4 right-4 bg-blue-600 p-2 z-10 rounded-xl font-sans'>
            <p className='p-2'>{itens_quantity} {itens_quantity == 1 ? texts.item_adicionado : texts.itens_adicionados}</p>
            <button onClick={() => navigate("/my_cart") } className='bg-blue-400 p-2 rounded-xl'>{texts.visualizar_pedido}</button>
        </div>
    )
}

export default Footer;