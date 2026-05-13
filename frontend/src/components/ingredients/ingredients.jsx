import { useState } from "react";

import texts from "../../texts/texts";
import IngredientCounter from "../ingredient_counter/ingredient_counter";

const Ingredients = ({item}) => {
    return (
        <>
            <h1 className="text-center mt-6 text-2xl font-sans">{texts.titles.ingredientes}</h1>
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