import '../../App.css'

import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";

import { productService } from '../../services/productService';
import  ItemModal from '../item_modal/item_modal'
import texts from '../../texts/texts';
import LoadingSpinner from '../loading_spinner/loading_spinner'

const ItemLayout = ({type, itemType, onAddItem}) => {
    const navigate = useNavigate();

    const [error, setError] = useState(null)
    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(false)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [selectedItem, setSelectedItem] = useState(null)

    useEffect(() => {
        const loadProducts = async () =>{
            try{
                setLoading(true)
                const data = await productService.getProducts()
                setProduct(data.products)
            }catch(error){
                console.error("Erro ao carregar os produtos:", error);
                setError("Não foi possível carregar os produtos.");
            }finally{
                setLoading(false)
            }
        }

        loadProducts()
    }, [])

    // Scrolling is blocked when ItemModal is open
    useEffect(() => {
        if (isModalOpen)
            document.body.style.overflow = 'hidden'
        else
            document.body.style.overflow = 'unset';
    }, [isModalOpen])

    const handleItemClick = (item) => {
        if (item.type !== 'Bebida' && item.type !== 'Bebida Alcoolica' && item.type !== 'Acompanhamento' )
            navigate(`/details_item/${item.id}`);
        else {
            setSelectedItem(item);
            setIsModalOpen(true);
        }
    };

    const handleOpenModal = (product) => {
        setSelectedItem(product)
        setIsModalOpen(true)
    }

    return(
        <>
            {
                product.map((item) => (
                    loading ? <LoadingSpinner message='Buscando produtos ...' /> :
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
                                                    onClick={() => handleItemClick(item)}>
                                                    {texts.ver_detalhes}
                                            </button>
                                        )
                                        }
                                </div>
                            )
                        }
                    </>
                ))
            }
            <ItemModal 
                isOpen={isModalOpen} 
                item={selectedItem} 
                onClose={() => setIsModalOpen(false)}
                onAddItem={onAddItem}
            />
        </>

    )
}

export default ItemLayout;