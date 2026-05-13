import toast from 'react-hot-toast';

import { Trash2 } from "lucide-react";
import { useEffect, useState } from "react";   

import { orderService } from "../../services/orderService"
import LoadingSpinner from "../loading_spinner/loading_spinner";

const CartItem = ({onUpdate}) => {
    const [item, setItem] = useState([])
    const [loading, setLoading] = useState(false)

    const deleteOrder = async (id) => {
        try{
            setLoading(true)

            const itemDeleted = await orderService.deleteOrderById(id)
            setItem(prevItems => prevItems.filter(item => item.id !== id))

            onUpdate()

            toast.success('Item removido do pedido!');
        }
        catch(error){
            console.log(`Error try deleting order by id : ${id}. ${error}`)
            toast.error('Error try deleting order.')
        }
        finally{
            setLoading(false)
        }
    }

    useEffect(() => {
        const getItems = async () => {
            const item = await orderService.getOrders()
            setItem(item.orders)
        }

        getItems()
    },[])

    return(
            <>
                {item?.map((order) => (
                    loading ? <LoadingSpinner message="Carregando itens ..."/> :
                    <div className="flex font-sans bg-gray-300 p-2.5 m-2.5 rounded-md">
                        { <img className="rounded-md w-[125px] h-[120px]" src={order?.items?.product?.images?.[0] ? order?.items?.product?.images?.[0] : order?.items?.images?.[0] } /> }
                        <div className="flex flex-col justify-between w-full ml-3">
                            
                            <div className="text-gray-500 b-0 p-0">
                                <p className="text-black text-lg font-bold">{order?.items?.name ? order?.items?.name : order?.items?.product?.name}</p>
                                <p className="leading-none">Batata Media</p>
                                <p className="leading-none">Coca-cola 0</p>
                                <p className="leading-none">Ao ponto</p>
                            </div>
                            <div className="flex items-center justify-between">
                                <p>R$ 20.99</p>
                                <Trash2 onClick={() => deleteOrder(order.id)} className="text-red-600"/>
                            </div>
                        </div>
                    </div>
                ))}
            </>
    )
}

export default CartItem;