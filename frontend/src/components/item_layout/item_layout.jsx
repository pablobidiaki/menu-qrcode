import '../../App.css'
import { productService } from '../../services/productService';
import texts from '../../texts/texts';

import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";

const ItemLayout = ({type, itemType}) => {

    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    const navigate = useNavigate();

    useEffect(() => {
        const loadProduct = async () =>{
            try{
                setLoading(true)
                if (itemType === 'Hamburguer' || itemType === 'Combo'){
                    const data = await productService.getSandwiches()
                    setProduct(data.sandwiches)
                }
                else if (itemType === 'Acompanhamento'){
                    const data = await productService.getSideDishes()
                    setProduct(data.sideDishes)
                }
                else if (itemType === 'Bebida'){
                    const data = await productService.getDrinks()
                    setProduct(data.drink)
                }
                else if (itemType === 'Sobremesa'){
                    const data = await productService.getDesserts()
                    setProduct(data.desserts)
                }
            }catch(error){
                console.error("Erro ao carregar cardápio:", error);
                setError("Não foi possível carregar os lanches.");
            }finally{
                setLoading(false)
            }
        }

        loadProduct()
    }, [])

    return(
        <>
            {
                product.map((item) => (
                    <>
                        {
                            item.type === type && (
                                <div key={item.id} className='m-4 p-4 rounded-xl bg-gray-300 font-sans'>
                                    <div>
                                        <img className='rounded-xl' src={item.images[0]}/>
                                    </div>
                                        <div>
                                            <h1 className='text-black font-extrabold text-3xl my-4'>{item.name}</h1>
                                            <p className='italic text-md text-gray-600 text-justify'>{item.description}</p>

                                            <div className='flex justify-between mt-8'>
                                                <p className='text-xl font-bold text-green-500'>R${item.promotionPrice === null ? item.price : item.promotionPrice}</p>
                                                {item.promotionPrice  && (
                                                    <p className='text-xl font-bold text-red-500 italic line-through'>{item.price}</p>
                                                )}
                                            </div>
                                        </div>
                                        {!item.isActive ? (
                                            <button disabled className="disabled:bg-gray-500
                                                                          text-xl 
                                                                        text-white 
                                                                          font-semibold 
                                                                          w-full 
                                                                          p-2 
                                                                          rounded-lg  
                                                                          mt-4">
                                                                        {texts.item_indisponivel}
                                            </button>
                                        ) :
                                        (
                                            <button className='bg-orange-500
                                                             text-xl 
                                                             text-white 
                                                             font-semibold 
                                                             w-full 
                                                             p-2 
                                                             rounded-lg  
                                                             mt-4' 
                                                    onClick={() => navigate("/details_item")}>
                                                    {texts.adicionar_pedido}
                                            </button>
                                        )
                                        }
                                </div>
                            )
                        }
                    </>
                ))
            }
        </>

    )
}

export default ItemLayout;