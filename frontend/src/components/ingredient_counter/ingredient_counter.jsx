import { CirclePlus, CircleMinus } from "lucide-react";

import { useState } from "react";

const IngredientCounter = ({initialQuantity}) => {
    const [quantity, setQuantity] = useState(initialQuantity)

    const handleAddButton = () => {
        setQuantity(quantity + 1)
    }

    const handleMinusButton = () => {
        if (quantity != 0)
            setQuantity(quantity - 1)
    }

    return (
        <div className="flex items-center">
            <CirclePlus onClick={handleAddButton}/>
            <p className="text-xl font-sans mx-2">{quantity}</p>
            <CircleMinus onClick={handleMinusButton}/>
        </div>
    )
}

export default IngredientCounter; 