import { CirclePlus, CircleMinus } from "lucide-react";

const IngredientCounter = ({quantity}) => {
    return (
        <div className="flex items-center">
            <CirclePlus />
            <p className="text-xl font-sans mx-2">{quantity}</p>
            <CircleMinus/>
        </div>
    )
}

export default IngredientCounter;