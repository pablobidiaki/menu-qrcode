import texts from "../../texts/texts"
import OrderSummaryLine from "./order_summary_line"

const OrderSummary = ({}) => {
    return(
        <div className="fixed bottom-2 left-2 right-2 m-3 p-1 bg-gray-400 font-sans rounded-md">
            <OrderSummaryLine title={texts.pedido_atual} value={'81.79'} />
            <OrderSummaryLine title={texts.pedido_total} value={'135.99'}/>
            <div className="mx-2 mb-1">
            <button className="bg-orange-500 text-md text-white font-semibold p-1 rounded-md mt-4 w-full">
                Adicionar ao Pedido.
            </button>
            </div>
        </div>
    )
}

export default OrderSummary