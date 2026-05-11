import { useState } from "react";
import IngredientCounter from "../ingredient_counter/ingredient_counter";

const Ingredients = ({item}) => {
    return (
        <>
            {
                Object.entries(item?.ingredients || {}).map(([key, value]) => (
                    <div key={key} className="flex justify-between my-4 mx-1">
                        <p className="text-xl font-sans capitalize">{key}</p>
                        <IngredientCounter initialQuantity={value}/>
                    </div>
                ))
            }
        </>
    )
}

export default Ingredients;