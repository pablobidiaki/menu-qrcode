import { useState } from "react"

import toast from 'react-hot-toast'
import texts from "../../texts/texts"

import { orderService } from "../../services/orderService"

const ItemModal = ({ isOpen, item, onClose, onAddItem }) => {
  const [quantity, setQuantity] = useState(1)

  if (!isOpen || !item) { return null}

  const handleAdd = () => {
    addItemToCart()
    onClose()
  }

  const addItemToCart = async () => {
    try{
        const payload = {
            "items": item,
            "table": "1",
            "status": "pendente"
        }

        const itemToAdd = await orderService.createOrder(payload)

        if(onAddItem)
          onAddItem(itemToAdd)
        
        toast.success("Item adicionado ao pedido!");
    }
    catch(error){
        console.error(`Error try adding item to cart! ${error}`)
        toast.error("Erro ao tentar adicionar item ao pedido!")
    }
  } 

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/60 backdrop-blur-sm font-sans">
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative w-full max-w-md bg-white rounded-t-2xl sm:rounded-2xl p-6 shadow-2xl animate-in slide-in-from-bottom duration-300">
        
        <img 
          src={item.images[0]} 
          alt={item.name} 
          className="w-full h-48 object-cover rounded-xl mb-4"
        />

        <h2 className="text-2xl font-bold text-gray-800">{item.name}</h2>
        <p className="text-gray-600 my-2">{item.description}</p>
        
        <div className="flex items-center justify-between mt-6">
          <span className="text-xl font-bold text-green-600">
            R$ {(item.price * quantity).toFixed(2)}
          </span>

          <div className="flex items-center gap-4 bg-gray-100 p-2 rounded-lg">
            <button 
              onClick={() => setQuantity(q => Math.max(1, q - 1))}
              className="w-8 h-8 flex items-center justify-center bg-white rounded-full shadow-sm"
            >-</button>
            <span className="font-bold w-4 text-center">{quantity}</span>
            <button 
              onClick={() => setQuantity(q => q + 1)}
              className="w-8 h-8 flex items-center justify-center bg-white rounded-full shadow-sm"
            >+</button>
          </div>
        </div>

        <button 
          onClick={handleAdd}
          className='bg-orange-500
                       text-xl 
                     text-white 
                       font-semibold 
                       w-full 
                       p-2 
                       rounded-lg  
                       mt-4'
        >
          {texts.adicionar_pedido}
        </button>
      </div>
    </div>
  )
}

export default ItemModal