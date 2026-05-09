import { useState } from "react"

const ItemModal = ({ isOpen, product, onClose }) => {
  const [quantity, setQuantity] = useState(1)

  if (!isOpen || !product) { return null}

  const handleAdd = () => {
    // onAdd({ ...product, quantity })
    // setQuantity(1)
    onClose()
  }

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/60 backdrop-blur-sm font-sans">
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative w-full max-w-md bg-white rounded-t-2xl sm:rounded-2xl p-6 shadow-2xl animate-in slide-in-from-bottom duration-300">
        
        <img 
          src={product.images[0]} 
          alt={product.name} 
          className="w-full h-48 object-cover rounded-xl mb-4"
        />

        <h2 className="text-2xl font-bold text-gray-800">{product.name}</h2>
        <p className="text-gray-600 my-2">{product.description}</p>
        
        <div className="flex items-center justify-between mt-6">
          <span className="text-xl font-bold text-green-600">
            R$ {(product.price * quantity).toFixed(2)}
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
          Adicionar ao Pedido
        </button>
      </div>
    </div>
  )
}

export default ItemModal