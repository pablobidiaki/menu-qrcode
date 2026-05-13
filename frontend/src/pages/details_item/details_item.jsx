import { useEffect, useState } from "react"
import { CircleArrowLeft } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";

import toast from 'react-hot-toast';
import texts from "../../texts/texts";
import Carousel from "../../components/carousel/carousel";
import Ingredients from "../../components/ingredients/ingredients";
import LoadingSpinner from "../../components/loading_spinner/loading_spinner";
import SideDishesContainer from "../../components/side_dishes/side_dishes_container";
import MeatDonenessSelector from "../../components/meat_doneness_selector/meat_doneness_selector";

import { orderService } from "../../services/orderService";
import { productService } from "../../services/productService";

const DetailsItem = () => {
    const { id } = useParams()
    const navigate = useNavigate();

    const [item, setItem] = useState([])
    const [loading, setLoading] = useState(false)
    const [meatDoneness, setMeatDoneness] = useState(texts.meat_doneness.ponto)

    useEffect(() => {
        const LoadItem = async () => {
            try{
                setLoading(true)

                const item = await productService.getProductById(id)
                setItem(item.product)
            }
            catch(error){
                console.error("Erro ao carregar os produtos:", error);
                toast.error("Erro ao carregar os produtos.")
            }
            finally{
                setLoading(false)
            }
        }

        if (id)
            LoadItem()

    }, [id])

    const addItemToCart = async (id) => {
        try{
            const item = await productService.getProductById(id)

            const payload = {
                "items": item,
                "table": "1",
                "status": "pendente"
            }

            const itemToAdd = await orderService.createOrder(payload)
            setItem(prevItems => [...prevItems, itemToAdd])

            toast.success("Item adicionado ao pedido!");
        }
        catch(error){
            console.error(`Error try adding item to cart! ${error}`)
            toast.error("Erro ao tentar adicionar item ao pedido!")
        }

        navigate("/")
    }
   
    return(
        loading ? <LoadingSpinner message="Carregando Item..." /> :
        <>
            <div className="relative">
                <Carousel data={item} />
                <CircleArrowLeft onClick={() => navigate("/")} 
                                 className="absolute
                                            top-2 
                                            left-2 
                                            z-10 
                                            text-white 
                                            w-8 
                                            h-8 
                                            cursor-pointer"/>
            </div>

            <div className="flex justify-between m-1 font-sans">
                <h1 className="text-2xl">{item.name}</h1>
                <p className="text-2xl text-green-500">{item.promotionPrice === null ? item.price : item.promotionPrice}</p>
            </div>
            <p className="m-1 text-gray-500 font-sans">{item.description}</p>

            <Ingredients item={item}/>

            {item.type !== 'Sobremesa' && <MeatDonenessSelector onChange={setMeatDoneness}/>}
        
            <div className="flex justify-center mt-8">
                <button onClick={() => addItemToCart(item.id)}
                        className="text-center
                                   text-xl 
                                   w-[98%] 
                                   p-2 
                                   rounded-md 
                                   text-white 
                                   bg-[#FF6A00] 
                                   font-sans
                                   fixed 
                                   bottom-4">
                        {texts.adicionar_pedido}
                </button>
            </div>
        </>
    )
}

export default DetailsItem;