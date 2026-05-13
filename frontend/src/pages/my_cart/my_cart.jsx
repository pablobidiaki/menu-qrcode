import texts from "../../texts/texts";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CircleArrowRight } from "lucide-react";

import CartItem from "../../components/cart_item/cart_item";
import OrderSummary from "../../components/order_summary/order_summary";
import { orderService } from "../../services/orderService";

const MyCart = ({}) => {
    const navigate = useNavigate()

    const [item, setItem] = useState([])

    const getItems = async () => {
        const item = await orderService.getOrders()
        setItem(item.orders)
    }
    
    useEffect(() => {
        getItems()
    },[getItems])

    return(
        <>
            <div className="flex items-center justify-between mx-3 my-1">
                <h1 className="font-sans text-2xl ">{texts.meu_carrinho}</h1>
                <CircleArrowRight onClick={() => navigate("/") }/>
            </div>
            {item.length !== 0 ? <CartItem onUpdate={getItems} /> : <p className="font-sans text-center mt-6 text-2xl italic text-gray-500">Nenhum item no seu carrinho!</p>} 
            <OrderSummary />
        </>
    )
}

export default MyCart