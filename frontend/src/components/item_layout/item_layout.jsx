import '../../App.css'
import texts from '../../texts/texts';

import { useState } from 'react';

const ItemLayout = ({img, name, descrition, original_price, promotion_price, available}) => {

    const [promotionPrice, setPromotionPrice] = useState('20.99')
    const [originalPrice, setOriginalPrice] = useState('25.99')

    return(
        <div className='m-4 p-4 rounded-xl bg-gray-300'>
            <div>
                <img className='rounded-xl' src='https://i.imgur.com/BZU9Hem.jpeg'/>
            </div>
            <div>
                <h1 className='text-black font-extrabold text-3xl my-4'>Combo X-Burger.</h1>
                <p className='italic text-md text-gray-600 text-justify'>Acompanha nosso X-Burger, uma porção de fritas média e uma latra do refrigerante da sua preferência.</p>
                <div className='flex justify-between mt-8'>
                    <p className='text-xl font-bold text-green-500'>R${promotionPrice === '' ? originalPrice : promotionPrice}</p>
                    {promotionPrice  && (
                        <p className='text-xl font-bold text-red-500 italic line-through'>R${originalPrice}</p>
                    )}
                </div>
            </div>
            <button className='bg-orange-500 text-xl text-white font-semibold w-full p-2 rounded-lg  mt-4'>{texts.adicionar_carrinho}</button>
        </div>
    )
}

export default ItemLayout;