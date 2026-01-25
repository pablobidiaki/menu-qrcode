import texts from "../../texts/texts";
import { CircleArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

import CartItem from "../../components/cart_item/cart_item";
import OrderSummary from "../../components/order_summary/order_summary";

const MyCart = ({}) => {

    const navigate = useNavigate()

    return(
        <>
            <div className="flex items-center justify-between mx-3 my-1">
                <h1 className="font-sans text-2xl ">{texts.meu_carrinho}</h1>
                <CircleArrowRight onClick={() => navigate("/") }/>
            </div>
            <CartItem />
            <OrderSummary />
        </>
    )
}

export default MyCart