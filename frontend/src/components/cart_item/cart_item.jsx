import { Trash2 } from "lucide-react";

const CartItem = ({}) => {
    return(
        <div className="flex font-sans bg-gray-300 p-2.5 m-2.5 rounded-md">
            <img className="rounded-md w-[125px] h-[120px]" src="https://i.imgur.com/w6x1ayy.jpeg" />
            <div className="flex flex-col justify-between w-full ml-3">
                
                <div className="text-gray-500 b-0 p-0">
                    <p className="text-black text-lg font-bold">Combo X-burguer</p>
                    <p className="leading-none">Batata Media</p>
                    <p className="leading-none">Coca-cola 0</p>
                    <p className="leading-none">Ao ponto</p>
                </div>
                <div className="flex items-center justify-between">
                    <p>R$ 20.99</p>
                    <Trash2 className="text-red-600"/>
                </div>
            </div>
        </div>
    )
}

export default CartItem;